const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;

    if (filePath.endsWith('.css')) {
        content = content.replace(/rgba\(255,\s*255,\s*255,\s*0\.0[2-8]\)/g, 'var(--card-bg-subtle)');
        content = content.replace(/rgba\(0,\s*0,\s*0,\s*0\.85\)/g, 'var(--overlay-bg)');
        content = content.replace(/rgba\(5,\s*5,\s*5,\s*0\.85\)/g, 'var(--navbar-bg)');
        content = content.replace(/rgba\(0,\s*0,\s*0,\s*0\.3\)/g, 'var(--card-bg-subtle)');
        content = content.replace(/#0[aA]0[aA]0[aA]/g, 'var(--bg-section-alt)');
        content = content.replace(/color:\s*#fff(?:fff)?;/gi, 'color: var(--text-main);');
        content = content.replace(/color:\s*#000(?:000)?;/gi, 'color: var(--text-inverse);');
        content = content.replace(/color:\s*black;/gi, 'color: var(--text-inverse);');
    } else if (filePath.endsWith('.jsx')) {
        // Fix string values inside JSX styles targeting white/black
        content = content.replace(/color:\s*'white'/gi, "color: 'var(--text-main)'");
        content = content.replace(/color:\s*['"]#fff(?:fff)?['"]/gi, "color: 'var(--text-main)'");
        content = content.replace(/color:\s*'black'/gi, "color: 'var(--text-inverse)'");
        content = content.replace(/color:\s*['"]#000(?:000)?['"]/gi, "color: 'var(--text-inverse)'");

        // Fix inline rgba backgrounds
        content = content.replace(/background:\s*['"]rgba\(255,\s*255,\s*255,\s*0\.0[2-8]\)['"]/g, "background: 'var(--card-bg-subtle)'");
        content = content.replace(/background:\s*['"]rgba\(0,\s*0,\s*0,\s*0\.[2-8]\)['"]/g, "background: 'var(--bg-dark)'");
        
        // Fix specific dark gradients
        content = content.replace(/#0a0a0a/gi, 'var(--bg-section-alt)');

        // Fix black colors outside styles (like fill="black" or color="black")
        content = content.replace(/['"]#0B1120['"]/gi, "'var(--bg-dark)'");
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${filePath}`);
    }
}

function walkDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.css')) {
            processFile(fullPath);
        }
    });
}

walkDir(path.resolve('c:/Users/USER/Desktop/eduu/src'));
