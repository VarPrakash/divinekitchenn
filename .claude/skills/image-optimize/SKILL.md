---
name: image-optimize
description: Download images from URLs, resize them, and convert to WebP for local caching. Use when the user wants to optimize images, download stock photos, convert images to WebP, or cache remote images locally.
argument-hint: <url> <output-name> [width] [quality]
allowed-tools: Bash(pip install *), Bash(python *)
---

# Image Optimize

Download an image from a URL, resize it to a target width, and save it as an optimized WebP file in the `public/` folder.

## Prerequisites

Pillow must be installed. If not already installed, run:

```bash
pip install Pillow
```

## Usage

Run the optimization script. The `PUBLIC_DIR` environment variable should point to the project's `public/` directory.

```bash
PUBLIC_DIR=public python .claude/skills/image-optimize/scripts/optimize.py <url> <output-name> [width] [quality]
```

### Arguments

| Argument      | Required | Default | Description                                     |
|---------------|----------|---------|-------------------------------------------------|
| `url`         | Yes      | —       | Full URL of the image to download               |
| `output-name` | Yes      | —       | Output filename (e.g. `truffle-burrata.webp`)   |
| `width`       | No       | 800     | Max width in pixels (height scales to keep aspect ratio) |
| `quality`     | No       | 80      | WebP quality (1–100, higher = better quality)   |

### Examples

Single image:
```bash
PUBLIC_DIR=public python .claude/skills/image-optimize/scripts/optimize.py "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=800" truffle-burrata.webp 800 80
```

## Batch processing

When the user wants to optimize multiple images (e.g. all menu item images), run the script once per image. Use a descriptive kebab-case filename derived from the menu item name for each output file.

## After optimization

After converting images to WebP in `public/`, update the source code to reference the local files instead of remote URLs. For example, change:

```ts
image: pexels(1211887)
```

to:

```ts
image: "/truffle-burrata.webp"
```

This eliminates external HTTP requests and allows the browser to cache images locally for better performance.
