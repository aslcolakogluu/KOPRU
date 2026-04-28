import os
import re

directories = ['src/app', 'src/styles.scss']

replacements = [
    (r'background:\s*#fff(?:fff)?\s*;', r'background: var(--kopru-bg-card);'),
    (r'background:\s*white\s*;', r'background: var(--kopru-bg-card);'),
    (r'background-color:\s*#fff(?:fff)?\s*;', r'background-color: var(--kopru-bg-card);'),
    (r'background-color:\s*white\s*;', r'background-color: var(--kopru-bg-card);'),
    (r'rgba\(248,\s*250,\s*251,\s*0\.85\)', r'var(--kopru-nav-bg)'),
]

def process_file(filepath):
    if not filepath.endswith('.scss'): return
    with open(filepath, 'r') as f:
        content = f.read()
    
    new_content = content
    for pattern, repl in replacements:
        new_content = re.sub(pattern, repl, new_content)
        
    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Fixed SCSS: {filepath}")

for d in directories:
    if os.path.isfile(d):
        process_file(d)
    else:
        for root, dirs, files in os.walk(d):
            for file in files:
                process_file(os.path.join(root, file))
print("CSS variables applied!")
