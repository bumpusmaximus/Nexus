import fs from 'fs';

let html = fs.readFileSync('lovable_rendered.html', 'utf8');

// 1. Remove lovable-badge
html = html.replace(/<aside id="lovable-badge"[\s\S]*?<\/aside>/, '');
html = html.replace(/<script>\s*\/\/ Don't show the lovable-badge[\s\S]*?<\/script>/, '');

// 2. Remove React Hydration Script
html = html.replace(/<script type="module" crossorigin="" src="\/assets\/index-.*?\.js"><\/script>/, '');

// 3. Inject Oswald Font
const fontInjection = `
    <link href="https://fonts.googleapis.com/css2?family=Oswald:ital,wght@0,400;0,700;1,700&display=swap" rel="stylesheet">
    <style>
      .font-satoshi, h1, h2, h3, h4, h5, h6 {
        font-family: 'Oswald', sans-serif !important;
        font-style: italic !important;
        text-transform: uppercase !important;
      }
    </style>
`;
html = html.replace(/<\/head>/, fontInjection + '\n</head>');

// 4. Fix CSS link (CORS block) by routing it to local lovable_style.css
html = html.replace(/<link rel="stylesheet" crossorigin="" href="\/assets\/index-.*?\.css">/, '<link rel="stylesheet" href="/lovable_style.css">');

// 5. Replace Video with User's Uploaded GT4 RS Image (gt4rspa.png)
const videoRegex = /<video.*?<\/video>/;
html = html.replace(videoRegex, '<img src="/gt4rspa.png" alt="High Performance Supercar" class="w-full h-full object-cover" />');

// 6. Fix broken images and assets by pointing them to the live app
html = html.replace(/"\/assets\//g, '"https://performancealignment.lovable.app/assets/');

// 7. Restore Hero Text to initial site's taglines
html = html.replace(/<span class="text-gold">±0\.1°<\/span> or it's free/g, 'RELENTLESS PURSUIT OF TRACTION');

// 8. Replace the sub-headline with the other tagline
html = html.replace(/Track-proven alignments for racers, enthusiasts, and exotics\.<br class="hidden md:block">Hunter ADAS • Corner-Weight • Loaner Tesla/g, 'Precision Tuning & Alignment.');

// 9. Remove "Recent Projects" from index.html and about.html
const recentProjectsRegex = /<section class="py-24 bg-background">(?:(?!<section)[\s\S])*?<h2[^>]*>Recent Projects<\/h2>[\s\S]*?<\/section>/;
html = html.replace(recentProjectsRegex, '');

let aboutHtml = fs.readFileSync('about.html', 'utf8');
aboutHtml = aboutHtml.replace(recentProjectsRegex, '');
fs.writeFileSync('about.html', aboutHtml);
console.log("Recent Projects section stripped from generated pages.");

// 10. Rename 'Exotic' card title to 'Exotic & Vintage'
html = html.replace(/>Exotic<\/h3>/, '>Exotic &amp; Vintage</h3>');
html = html.replace(/alt="Exotic\n/, 'alt="Exotic &amp; Vintage\n');

// 11. Swap exotic car image for local classic Porsche RS
html = html.replace(
  /https:\/\/images\.unsplash\.com\/photo-1544636331-e26879cd4d9b\?w=800&amp;q=80/g,
  '/classic_porsche_rs.png'
);

// 12. Replace Technology links with Contact
html = html.replace(/\/technology/g, '/contact');
html = html
        .replace(/\(513\) 555-1234/g, '(513) 489-8500')
        .replace(/\+1-513-555-1234/g, '+1-513-489-8500')
        .replace(/5135551234/g, '5134898500');

fs.writeFileSync('index.html', html);
console.log("Fixup complete. index.html updated.");
