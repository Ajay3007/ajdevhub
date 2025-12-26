$owner='Ajay3007'
$repo='ajdevhub'
$workflow='visual-tests.yml'
$headers=@{ 'User-Agent' = 'ajdevhub-automation' }
$url = "https://api.github.com/repos/$owner/$repo/actions/workflows/$workflow/runs"
$runs = Invoke-RestMethod -Uri $url -Headers $headers
foreach ($r in $runs.workflow_runs) {
  Write-Host "$($r.id)  status=$($r.status) conclusion=$($r.conclusion) created_at=$($r.created_at)"
}