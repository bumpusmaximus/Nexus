const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Debug: check what we're working with
console.log('Exotic h3 match:', html.includes('>Exotic</h3>'));
console.log('Exotic img match:', html.includes('photo-1544636331-e26879cd4d9b'));
console.log('HTML length:', html.length);

// 10. Rename 'Exotic' heading to 'Exotic &amp; Vintage'
html = html.replace(/>Exotic<\/h3>/g, '>Exotic &amp; Vintage</h3>');

// 11. Swap exotic car Unsplash image for local classic Porsche RS image
html = html.replace(/https:\/\/images\.unsplash\.com\/photo-1544636331-e26879cd4d9b\?w=800&amp;q=80/g, '/classic_porsche_rs.png');

fs.writeFileSync('index.html', html);
console.log('Patch applied to index.html.');
