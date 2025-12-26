const fs = require('fs');
const path = require('path');

const inFile = path.join(__dirname, 'reports', 'home.json');
const outFile = path.join(__dirname, 'reports', 'home.html');
if(!fs.existsSync(inFile)){
  console.error('Input report not found:', inFile);
  process.exit(1);
}
const data = JSON.parse(fs.readFileSync(inFile));
let html = `<!doctype html><html><head><meta charset="utf-8"><title>Axe Report - Home</title><style>body{font-family:Inter,Arial,sans-serif;margin:20px}h1{font-size:1.3rem}details{margin:10px 0;padding:8px;border:1px solid #ddd;border-radius:6px}pre{white-space:pre-wrap;background:#f8f8f8;padding:8px;border-radius:6px}</style></head><body>`;
html += `<h1>Axe Accessibility Report — Home</h1>`;
html += `<p>Violations: <strong>${data.violations.length}</strong></p>`;
if(data.violations.length === 0){ html += '<p>No violations found.</p>'; }
for(const v of data.violations){
  html += `<details><summary><strong>${v.id}</strong> — ${v.impact || 'unknown'} — ${v.description}</summary>`;
  html += `<p><em>${v.help}</em></p>`;
  html += `<p>Help URL: <a href="${v.helpUrl}" target="_blank" rel="noopener noreferrer">${v.helpUrl}</a></p>`;
  for(const node of v.nodes){
    html += `<div style="margin-top:8px"><strong>Target</strong>: <pre>${node.target.join(', ')}</pre>`;
    if(node.failureSummary) html += `<p><strong>Summary:</strong> ${node.failureSummary}</p>`;
    // Show related nodes html snippet if small
    if(node.html) html += `<details><summary>HTML snippet</summary><pre>${escapeHtml(node.html)}</pre></details>`;
    html += `</div>`;
  }
  html += `</details>`;
}
html += `</body></html>`;
fs.writeFileSync(outFile, html);
console.log('Wrote HTML report to', outFile);

function escapeHtml(s){
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
