
window.location.href = "https://cran.r-project.org/web/packages/available_packages_by_date.html"

let links = Array.from(document.getElementsByTagName("a")).map(x => x.href);
let needs_comp = links.map(x => "");

for(i=0; i<links.length; i++) 
  await fetch(links[i])
  .then(r => r.text())
  .then(t => needs_comp[i] = t.match(/NeedsCompilation:<\/td>\n<td>([\w]*)/)[1]);
