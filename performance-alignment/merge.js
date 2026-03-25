const fs = require('fs');

const lovableHtml = fs.readFileSync('lovable_rendered.html', 'utf8');
const myHtml = fs.readFileSync('index.html', 'utf8');

// Extract my custom components
const myNavRegex = /<!-- Navbar -->[\s\S]*?<\/nav>/;
const myHeroRegex = /<!-- Hero Section -->[\s\S]*?<\/header>/;
const mySplitRegex = /<!-- split section -->[\s\S]*?<\/section>/;

const myNav = myHtml.match(myNavRegex)[0];
const myHero = myHtml.match(myHeroRegex)[0];
const mySplit = myHtml.match(mySplitRegex)[0];

// In lovable HTML, find the <header> and the first <section> inside <main>
// lovable header: <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent py-6"> ... </header>
// lovable main hero: <section class="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"> ... </section>

// Use string replacement to swap them out
let newHtml = lovableHtml;

// Strip lovable header
newHtml = newHtml.replace(/<header class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent py-6">.*?<\/header>/, myNav);

// Strip lovable main hero (from <section class="relative h-screen min-h-\[700px\].*?</section>)
newHtml = newHtml.replace(/<section class="relative h-screen min-h-\[700px\].*?<\/section>/, myHero + '\n' + mySplit);

// Drop the React/Vite script injection from lovable so it doesn't hydrate over our changes
newHtml = newHtml.replace(/<script type="module" crossorigin="" src="\/assets\/index-.*?\.js"><\/script>/, '');

// Clean up lovable badge injects
newHtml = newHtml.replace(/<aside id="lovable-badge"[\s\S]*?<\/aside>/, '');
newHtml = newHtml.replace(/<script>\s*\/\/ Don't show the lovable-badge[\s\S]*?<\/script>/, '');

// Ensure correct stylesheets
newHtml = newHtml.replace(/<\/head>/, `
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Oswald:ital,wght@0,400;0,700;1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./lovable_style.css">
    <link rel="stylesheet" href="./style.css">
    <style>
      .font-satoshi {
        font-family: 'Oswald', sans-serif !important;
        font-style: italic !important;
        text-transform: uppercase !important;
      }
    </style>
</head>`);

fs.writeFileSync('index.html', newHtml);
console.log("Merge complete!");
