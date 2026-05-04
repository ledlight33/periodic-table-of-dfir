# The Periodic Table of DFIR

> The definitive visual reference for Digital Forensics & Incident Response — **118 essential tools** organized like the periodic table.

![Version](https://img.shields.io/badge/version-1.2-blue)
![Tools](https://img.shields.io/badge/tools-118-green)
![Categories](https://img.shields.io/badge/categories-9-orange)
![Open Source](https://img.shields.io/badge/open%20source-69-success)
![License](https://img.shields.io/badge/license-MIT%20%2B%20CC%20BY--NC%204.0-lightgrey)

![The Periodic Table of DFIR](assets/og-image.png)

### 🎬 Interactive Demo

![Demo](assets/demo.gif)

---

## What It Is

A single-page, fully interactive periodic table of the **118 most important tools** in Digital Forensics & Incident Response — from disk imaging to cloud forensics, from reverse engineering to mobile extraction.

Each tile is a real DFIR tool. Hover for a tooltip with the tool's purpose, license, supported platforms, and a link to its official page. Click any tile to open the tool's website.

The layout mirrors the structure of Mendeleev's periodic table — including **lanthanide and actinide-style indicator rows** for Malware Analysis (57–71) and Mobile Forensics (89–103).

---

## Live Demo

🔗 **[View the Periodic Table of DFIR](https://ledlight33.github.io/periodic-table-of-dfir/)**

🖨️ **[Printable Poster Edition](https://ledlight33.github.io/periodic-table-of-dfir/print.html)** — A1-ready, ideal for SOC walls and lab posters.

> 💡 **For the full interactive experience**, view on a **desktop browser at 1920×1080 or higher** — hover tooltips, the atmospheric wallpaper, and the full 18-column layout shine at full resolution. The page is responsive down to 768px (tablet/mobile), but tile names hide and the wallpaper effects scale down on smaller screens.

---

## Features

- 🧪 **118 tools** across 9 categories — every major DFIR domain covered
- 🎨 **Color-coded tiles** by category, instantly readable
- ⚪ **License indicators** — Open Source, Free, Freemium, Commercial, Standard
- 🪟 🐧 🍎 **Platform support** in the hover tooltip — Windows, Linux, macOS, Web, Appliance
- 🔍 **Live search** by tool name, symbol, or category
- 🎯 **Category filters** with URL-shareable hash links
- ✨ **Lanthanide-style markers** — hover the row indicator to flash all related tools
- 🖨️ **Print-ready poster version** for physical display

---

## Tool Breakdown

| License | Count |
|---|---|
| Open Source | 69 |
| Commercial | 22 |
| Freemium | 6 |
| Free | 9 |
| Standards / Frameworks | 12 |
| **Total** | **118** |

---

## Categories

| Color | Category | Coverage |
|-------|----------|----------|
| 🔵 Blue | **Disk & Memory Forensics** | Imaging, file systems, memory analysis |
| 🟠 Orange | **Network Forensics** | PCAP analysis, IDS/IPS, full-packet capture |
| 🔴 Red | **Malware Analysis & RE** | Reverse engineering, sandboxes, static/dynamic analysis |
| 🟣 Purple | **Incident Response** | Triage, live response, EDR, threat hunting |
| 🩵 Cyan | **Mobile Forensics** | iOS, Android, mobile artifact parsers |
| 🟡 Yellow | **Log Analysis & Threat Intel** | SIEM, CTI platforms, log search |
| 🟢 Green | **Frameworks & Standards** | NIST, MITRE, ISO, SANS, RFCs |
| 💚 Teal | **Cloud Forensics** | AWS, Azure, multi-cloud security tools |
| ⚪ Silver | **Hybrid Platforms** | All-in-one acquisition + analysis suites |

---

## Tech Stack

Pure web — **no frameworks, no build step**.

- HTML5 + CSS Grid (18-column periodic layout)
- Vanilla JavaScript (zero dependencies)
- SVG for the legend / how-to-read element
- Google Fonts (Inter)

Loads instantly. Works offline. Self-contained.

---

## Local Development

Just clone and open:

```bash
git clone https://github.com/ledlight33/periodic-table-of-dfir.git
cd periodic-table-of-dfir
# Open index.html in any modern browser
```

No `npm install`, no build step, no server needed. Edit `script.js` to add or modify tools, refresh the page — done.

---

## File Structure

```
periodic-table-of-dfir/
├── index.html          # Interactive web version
├── print.html          # A1-ready printable poster edition
├── poster.html         # 4K PNG export source (3840×2160)
├── style.css           # All styling
├── script.js           # Tool data + rendering
├── assets/             # QR code, preview images, demo.gif, posters
├── LICENSE             # MIT (code) + CC BY-NC 4.0 (content)
├── CHANGELOG.md        # Version history
├── CONTRIBUTING.md     # How to contribute
└── README.md
```

---

## Versioning

**v1.2** is the current release.

### What's new in v1.2
- 9th category added: **Hybrid Platforms**
- 6 tools removed (Foremost, Scalpel, Guymager, Sparrow, Andriller, Redline)
- 7 tools added (UFADE, ALEX, FUJI, Belkasoft X, Binalyze AIR, Security Onion, PiRogue Tool Suite)
- 5 tools moved to Hybrid Platforms (AXIOM, EnCase, CrowdStrike, Carbon Black, Oxygen)
- Renumbered row-by-row to mirror the real periodic table
- Lanthanide / actinide-style indicator markers for malware (57–71) and mobile (89–103)
- **Platform support icons in tooltips** (Windows / Linux / macOS / Web / Appliance)
- **Atmospheric wallpaper** — subtle matrix rain + scan beam behind the table on the live page
- Viewport-fit layout — no scrollbars on common desktop resolutions
- Improved license-dot colors for visibility on all backgrounds
- Larger tool names and license dots
- Search clear button (✕)
- Slower, smoother row-marker hover glow animation
- Dedicated **4K poster.html** for high-resolution PNG export
- HTML structure and metadata fixes

---

## Contributing

Found a missing tool? Spotted an outdated link? Have a suggestion?

- Open an [issue](https://github.com/ledlight33/periodic-table-of-dfir/issues) on GitHub
- Or reach out on [LinkedIn](https://linkedin.com/in/marbekios)

This project belongs to the DFIR community. Feedback shapes future versions.

---

## License & Usage

This project uses a **dual-license model**:

| Component | License |
|---|---|
| Code (HTML / CSS / JavaScript) | [MIT License](LICENSE) |
| Content, design & visual concept (table layout, categorization, color scheme, tile groupings, poster artwork, OG image, demo media) | [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) |

**You are free to:**
- Use the project for personal, educational, or non-commercial purposes
- Share and adapt the work, **with proper attribution to Marino Bekios**

### ⚠️ Commercial Use & Collaboration

The following uses **require prior written permission** from the author:

- Commercial use of any kind (resale, paid products, monetized content, premium services, advertising-supported sites)
- Integration into commercial products, platforms, or paid services
- Use in marketing, promotional, or revenue-generating materials
- Licensing for organizational, enterprise, or institutional deployment
- Custom commissions, partnerships, or sponsored/branded versions

To inquire about commercial licensing or any form of collaboration, please contact the author directly (see below).

All rights not expressly granted are reserved by the author.

---

## Author & Contact

Created by **Marino Bekios** — DFIR professional.

- 🌐 **Website:** [marinobekios.com](https://marinobekios.com/)
- 💼 **LinkedIn:** [linkedin.com/in/marbekios](https://linkedin.com/in/marbekios)

For commercial licensing, partnerships, custom work, or any collaboration — please reach out via the website or LinkedIn.

---

## Credits & Acknowledgements

Inspired by Dmitri Mendeleev's original periodic table (1869) and the countless DFIR practitioners who build, maintain, and document the tools listed here. Every tile represents real work by real teams that the community depends on.

Special thanks to the open-source contributors behind the 69 free and open tools in this collection.

---

*If this helped you, give it a ⭐ — it helps others find it too.*
