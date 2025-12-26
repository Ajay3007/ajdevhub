$owner = 'Ajay3007'
$repo = 'ajdevhub'
$workflow = 'visual-tests.yml'
$headers = @{ 'User-Agent' = 'ajdevhub-automation' }

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$outDir = Join-Path $scriptDir 'artifacts'
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }

Write-Host "Polling workflow runs for $workflow..."
while ($true) {
    try {
        $url = "https://api.github.com/repos/$owner/$repo/actions/workflows/$workflow/runs"
        $runs = Invoke-RestMethod -Uri $url -Headers $headers
    } catch {
        Write-Host "Error fetching runs: $_. Retrying in 10s"
        Start-Sleep -Seconds 10
        continue
    }
    if ($runs.workflow_runs -and $runs.workflow_runs.Count -gt 0) {
        $run = $runs.workflow_runs | Sort-Object created_at -Descending | Select-Object -First 1
        Write-Host "Found run id $($run.id) - status=$($run.status) - conclusion=$($run.conclusion)"
        if ($run.status -eq 'completed') { break }
    } else {
        Write-Host "No runs yet, waiting 5s"
    }
    Start-Sleep -Seconds 8
}

$runId = $run.id
Write-Host "Run completed (id=$runId) with conclusion: $($run.conclusion)"

$artifactsUrl = "https://api.github.com/repos/$owner/$repo/actions/runs/$runId/artifacts"
$artifacts = Invoke-RestMethod -Uri $artifactsUrl -Headers $headers
if ($artifacts.total_count -eq 0) { Write-Host "No artifacts found."; exit 0 }

foreach ($a in $artifacts.artifacts) {
    $fileName = "$($a.name)-$($a.id).zip"
    $outPath = Join-Path $outDir $fileName
    Write-Host "Downloading artifact $($a.name) (id=$($a.id)) to $outPath"
    Invoke-WebRequest -Uri $a.archive_download_url -OutFile $outPath -Headers $headers -UseBasicParsing
    Write-Host "Downloaded $outPath"
}

Write-Host "All artifacts downloaded to $outDir"