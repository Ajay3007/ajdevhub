Param(
  [long]$jobId
)
$owner = 'Ajay3007'
$repo = 'ajdevhub'
$headers = @{ 'User-Agent' = 'ajdevhub-automation' }
if (-not $jobId) { Write-Host 'Please provide jobId as parameter'; exit 1 }
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$out = Join-Path $scriptDir ("job-$jobId-logs.zip")
Write-Host "Downloading logs for job $jobId to $out"
Invoke-WebRequest -Uri "https://api.github.com/repos/$owner/$repo/actions/jobs/$jobId/logs" -OutFile $out -Headers $headers -UseBasicParsing
$dest = Join-Path $scriptDir 'job-logs'
if (Test-Path $dest) { Remove-Item -Recurse -Force $dest }
Expand-Archive -Path $out -DestinationPath $dest
Write-Host "Searching for npm / ERR / error messages in logs..."
Get-ChildItem -Path $dest -Recurse -File | ForEach-Object {
  $matches = Select-String -Path $_.FullName -Pattern 'npm|ERR!|ERR |error' -SimpleMatch -CaseSensitive
  foreach($m in $matches){ Write-Host "[$($_.FullName)] $($m.Line.Trim())" }
}
Write-Host 'Done.'
