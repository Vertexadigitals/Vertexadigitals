const fs = require("fs");

function wordCount(fragment) {
  let body = fragment.replace(/<script[\s\S]*?<\/script>/g, " ");
  body = body.replace(/<style[\s\S]*?<\/style>/g, " ");
  body = body.replace(/<[^>]+>/g, " ");
  body = body
    .replace(/&#x27;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&[a-z]+;/g, " ");
  body = body.replace(/\s+/g, " ").trim();
  return body.split(" ").filter(Boolean);
}

const file = process.argv[2];
const html = fs.readFileSync(file, "utf8");

const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/);
const h1s = html.match(/<h1[ >]/g) || [];
const h2s = html.match(/<h2[ >]/g) || [];
const h3s = html.match(/<h3[ >]/g) || [];
const desc = html.match(/name="description" content="([^"]*)"/);
const canon = html.match(/rel="canonical" href="([^"]*)"/);

const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
let m;
const schemas = [];
while ((m = re.exec(html)) !== null) {
  try {
    const parsed = JSON.parse(m[1]);
    schemas.push(parsed["@type"]);
  } catch {
    schemas.push("PARSE_ERROR");
  }
}

const mainStart = html.indexOf("<main");
const mainEnd = html.indexOf("</main>");
const words =
  mainStart !== -1 && mainEnd !== -1
    ? wordCount(html.slice(mainStart, mainEnd)).length
    : -1;

console.log(`FILE: ${file}`);
console.log(`TITLE: ${titleMatch ? titleMatch[1] : "NOT FOUND"}`);
console.log(`H1=${h1s.length} H2=${h2s.length} H3=${h3s.length}`);
console.log(
  `DESC: ${desc ? `${desc[1]} (len ${desc[1].length})` : "NOT FOUND"}`
);
console.log(`CANONICAL: ${canon ? canon[1] : "NOT FOUND"}`);
console.log(`SCHEMAS: ${schemas.join(", ")}`);
console.log(`WORDS (<main>): ${words}`);
console.log("");
