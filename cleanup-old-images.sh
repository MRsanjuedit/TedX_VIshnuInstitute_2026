#!/bin/bash

# Script to remove old PNG, JPG, and JPEG images (keeping only WebP)
# IMPORTANT: This will permanently delete the original image files!
# Make sure you have a backup before running this script.

echo "⚠️  WARNING: This will permanently delete all PNG, JPG, and JPEG files!"
echo "The project now uses WebP format exclusively."
echo ""
read -p "Are you sure you want to continue? (yes/no): " confirm

if [ "$confirm" != "yes" ]; then
    echo "Cleanup cancelled."
    exit 0
fi

echo ""
echo "Removing old image files..."

# Counter for deleted files
count=0

# Find and remove all PNG, JPG, and JPEG files
find src/assets/images public/speakers -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) | while read -r file; do
    rm "$file"
    if [ $? -eq 0 ]; then
        echo "✓ Deleted: $file"
        ((count++))
    else
        echo "✗ Failed to delete: $file"
    fi
done

echo ""
echo "Cleanup complete! Removed old image files."
echo "Only WebP images remain."
