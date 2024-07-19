import os

# Set the path to the file
filename = 'song-list.txt'

# Check if the file exists
if not os.path.isfile(filename):
    print(f"File '{filename}' does not exist.")
    exit(1)

# Read the file contents
with open(filename, 'r', encoding='utf-8') as file:
    lines = file.readlines()

# Check if there are fewer than two lines
if len(lines) <= 2:
    print("File does not have enough lines to process.")
    exit(1)

# Remove the first and last lines
lines = lines[1:-1]

# Process each line
processed_lines = []
for line in lines:
    # Replace commas with nothing
    line = line.replace('",', '')
    # Replace commas with nothing
    line = line.replace('"', '')
    
    # Remove occurrences of four consecutive blank spaces
    line = line.replace('    ', '')
    
    # Remove any remaining occurrences of consecutive blank spaces (2 or more)
    while '  ' in line:
        line = line.replace('  ', ' ')
    
    # Add the processed line to the list
    processed_lines.append(line)

# Write the modified content back to the file
with open(filename, 'w', encoding='utf-8') as file:
    file.writelines(processed_lines)

print("Replacement completed successfully.")
