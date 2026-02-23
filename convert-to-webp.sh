#!/bin/bash

# Script to convert all PNG, JPG, and JPEG images to WebP format

echo "Starting conversion of images to WebP format..."

# Counter for converted images
count=0

# Find all PNG, JPG, and JPEG files (case insensitive)
find src/assets/images public/speakers -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) | while read -r file; do
    # Get the directory and filename without extension
    dir=$(dirname "$file")
    filename=$(basename "$file")
    name="${filename%.*}"
    
    # Output WebP file path
    output="$dir/$name.webp"
    
    # Convert to WebP with quality 85
    cwebp -q 85 "$file" -o "$output"
    
    if [ $? -eq 0 ]; then
        echo "✓ Converted: $file -> $output"
        ((count++))
    else
        echo "✗ Failed: $file"
    fi
done

echo "Conversion complete! Converted $count images to WebP format."
