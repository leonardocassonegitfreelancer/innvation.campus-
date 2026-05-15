import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

const errors = [];
const logs = [];

page.on('console', msg => {
  const type = msg.type();
  const text = msg.text();
  if (type === 'error' || type === 'warning') {
    errors.push(`[${type.toUpperCase()}] ${text}`);
  }
  logs.push(`[${type}] ${text}`);
});

page.on('pageerror', err => {
  errors.push(`[PAGE ERROR] ${err.message}`);
});

await page.goto('http://localhost:4321/en/private-offices', { waitUntil: 'networkidle2', timeout: 15000 });

// Wait for potential late hydration
await new Promise(r => setTimeout(r, 3000));

console.log('\n=== ERRORS & WARNINGS ===');
if (errors.length === 0) {
  console.log('No errors found');
} else {
  errors.forEach(e => console.log(e));
}

console.log('\n=== PAGE CONTENT CHECK ===');
const hasOfficesSection = await page.$eval('body', el => el.innerHTML.includes('Small Office') || el.innerHTML.includes('Find Your Space'));
console.log('OfficesListings rendered:', hasOfficesSection);

const sections = await page.$$eval('section', els => els.map(el => el.className.slice(0, 80)));
console.log('Sections found:', sections.length, sections);

await browser.close();
