#!/usr/bin/env python3
"""Download an image from a URL, resize it, and convert to WebP."""

import sys
import os
import urllib.request
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("ERROR: Pillow is not installed. Run: pip install Pillow")
    sys.exit(1)

def download_and_convert(url: str, output_name: str, width: int = 800, quality: int = 80) -> str:
    """Download image from URL, resize to given width (preserving aspect ratio), save as WebP."""
    public_dir = Path(os.environ.get("PUBLIC_DIR", "public"))
    public_dir.mkdir(parents=True, exist_ok=True)

    # Ensure output name ends with .webp
    if not output_name.endswith(".webp"):
        output_name = Path(output_name).stem + ".webp"

    output_path = public_dir / output_name

    # Download
    print(f"Downloading: {url}")
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req) as resp:
        img_data = resp.read()

    # Write to temp file, open with Pillow
    tmp_path = public_dir / "_tmp_download"
    tmp_path.write_bytes(img_data)

    try:
        img = Image.open(tmp_path)
        img = img.convert("RGB")  # Ensure RGB for WebP

        # Resize preserving aspect ratio
        orig_w, orig_h = img.size
        if orig_w > width:
            ratio = width / orig_w
            new_h = int(orig_h * ratio)
            img = img.resize((width, new_h), Image.LANCZOS)
            print(f"Resized: {orig_w}x{orig_h} -> {width}x{new_h}")
        else:
            print(f"Image already <= {width}px wide ({orig_w}x{orig_h}), keeping original size")

        # Save as WebP
        img.save(str(output_path), "WEBP", quality=quality)
        file_size = output_path.stat().st_size
        print(f"Saved: {output_path} ({file_size / 1024:.1f} KB)")
    finally:
        tmp_path.unlink(missing_ok=True)

    return str(output_path)

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python optimize.py <url> <output-name> [width] [quality]")
        print("  url         - Image URL to download")
        print("  output-name - Output filename (e.g. truffle-burrata.webp)")
        print("  width       - Max width in pixels (default: 800)")
        print("  quality     - WebP quality 1-100 (default: 80)")
        sys.exit(1)

    url = sys.argv[1]
    output_name = sys.argv[2]
    width = int(sys.argv[3]) if len(sys.argv) > 3 else 800
    quality = int(sys.argv[4]) if len(sys.argv) > 4 else 80

    download_and_convert(url, output_name, width, quality)
