#!/bin/bash
# Render docs/og/og-image.svg to public/og-image.png (1200x630) with headless Chrome
cd "$(dirname "$0")/../.."
CH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CH" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 --default-background-color=00000000 --screenshot="$PWD/public/og-image.png" "file://$PWD/docs/og/og-image.svg" >/dev/null 2>&1
sips -g pixelWidth -g pixelHeight public/og-image.png
