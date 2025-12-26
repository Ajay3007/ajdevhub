Param(
  [long]$runId = 0
)
$owner = 'Ajay3007'
$repo = 'ajdevhub'
$headers = @{ 'User-Agent' = 'ajdevhub-automation' }
if ($runId -eq 0) { Write-Host 'Please provide runId as parameter'; exit 1 }
$url = "https://api.github.com/repos/$owner/$repo/actions/runs/$runId/jobs"
try{
  $jobs = Invoke-RestMethod -Uri $url -Headers $headers
} catch {
  Write-Host "Failed to fetch jobs: $_"; exit 1
}
Write-Host "Jobs total: $($jobs.total_count)"
foreach($j in $jobs.jobs){
  Write-Host "Job: $($j.name) - id=$($j.id) - status=$($j.status) - conclusion=$($j.conclusion)"
  foreach($s in $j.steps){
    Write-Host "  - $($s.number). $($s.name) : status=$($s.status) conclusion=$($s.conclusion)"
  }
  Write-Host '----'
}