import os
import re

directories = ['src/app', 'src/styles.scss']

replacements = [
    (r'rgba\(255,\s*255,\s*255,\s*0\.95\)', r'var(--kopru-bg-glass)'),
    (r'rgba\(255,\s*255,\s*255,\s*0\.85\)', r'var(--kopru-nav-bg)'),
    (r'rgba\(255,\s*255,\s*255,\s*0\.98\)', r'var(--kopru-bg-glass-heavy)'),
    (r'background:\s*#ffffff\s*;', r'background: var(--kopru-bg-card);'),
    (r'color:\s*#fff(?:fff)?\s*;', r'color: var(--kopru-text-inverse);'),
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
    elif os.path.isdir(d):
        for root, dirs, files in os.walk(d):
            for file in files:
                process_file(os.path.join(root, file))
print("CSS script complete")
