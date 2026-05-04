# Changelog

## v1.2 — May 2026

### Added
- **9th category: Hybrid Platforms** (silver) — all-in-one forensic acquisition + analysis suites
- **6 new tools**:
  - Mobile Forensics: UFADE (#91), ALEX (#95), FUJI (#103)
  - Hybrid Platforms: Belkasoft X (#43), Binalyze AIR (#44), Security Onion (#75)
- **PiRogue Tool Suite (#89)** — added to Mobile Forensics
- **Lanthanide/actinide-style indicator tiles** — "57–71 MA·RE" and "89–103 MOB" markers at row 6/7 col 3, mirroring the real periodic table's lanthanide/actinide layout
- **Hover flash animation on extension rows** — hovering an indicator tile pulses all malware or mobile tools on the table
- **Platform support icons in tooltips** — 🪟 Windows / 🐧 Linux / 🍎 macOS / 🌐 Web / 📋 Standard / 🔌 Appliance, verified per tool
- **Search clear button (✕)** — appears when text is typed into the search bar
- **Open Graph + Twitter Card meta tags** — for proper LinkedIn/Twitter preview rendering when the link is shared
- **SEO meta description and keywords**
- **Atmospheric wallpaper layer (index only)** — subtle cyan matrix rain canvas + slow horizontal scan beam every 16s + DFIR quote at the footer ("What our eyes can see is not the measure of all things.")
- **Dedicated `poster.html`** for 4K PNG export at fixed 3840×2160 canvas
- **Viewport-fit table sizing** — tile size calculated from min(viewport width, viewport height) so the page never scrolls on standard desktop resolutions
- **Quote in printable footer** — same atmospheric DFIR quote reused on `print.html`

### Changed
- **Renumbered all 118 elements row-by-row** to mirror the real periodic table
- **5 tools moved** to the new Hybrid Platforms category:
  - AXIOM, EnCase (from Disk & Memory Forensics)
  - CrowdStrike, Carbon Black (from Incident Response)
  - Oxygen Forensics (from Mobile Forensics)
- **License dot colors improved** for visibility on all category backgrounds:
  - Open Source: white
  - Free: silver-blue
  - Freemium: amber
  - Commercial: light coral (was invisible dark)
  - Standard: light blue
- **License dots and tool names enlarged** on all tiles for readability
- **SVG key/legend redesigned** — brighter annotation lines, larger license section, 3-row license layout
- **Header text bolder** — subtitle, stats badge, version
- **Hybrid metalloid diagonal layout** — silver hybrid tiles staircase across rows 4–6, mirroring the real periodic table's metalloid boundary
- **Cloud Forensics row consolidated** — gap between CloudTrail and GuardDuty closed in row 7
- **Color groups more contiguous** — categories flow in blocks instead of scattered
- **Marker tile glow animation** slowed from 0.85s to 2s for smoother visual

### Removed
- **6 tools** (no longer in active use, archived, or replaced):
  - Disk & Memory: Foremost, Scalpel, Guymager
  - Cloud: Sparrow
  - Mobile: Andriller
  - Incident Response: Redline
- **FIRST CSIRT (FC)** removed from Frameworks & Standards
- **Stats badge** updated: "9 Categories", version "v1.2"

### Fixed
- **HTML structure** — restored missing `<div class="container">` wrapper in `index.html`
- **Print version label** — `print.html` updated from v1.1 to v1.2
- **Top row tooltip clipping** — rows 1–3 now open tooltips downward instead of upward to avoid being cut off at the page edge
- **FTK Imager URL** updated to https://www.exterro.com/digital-forensics-software/ftk-imager
- **Removed dead QRCode.js generation code** in `script.js` (was targeting a non-existent element)
- **MemProcFS (#57)** moved under Arsenal Image Mounter in row 7
- **Frameworks row** shifted right after FC removal — no orphan gaps
- **Binalyze AIR (#44) platform** corrected from desktop OS to web-based
- **Hover-transform scrollbar flicker** eliminated on right-edge / bottom-row tiles via per-edge transform-origin and document-level overflow control
- **Mobile-marker hover animation** no longer triggers transient scrollbars — replaced `transform: scale` with stronger box-shadow pulse
- **SVG key layout** — sample tile shifted left, LICENSE block shifted right with wider column gap so labels stop overlapping in print at scaled font sizes
- **Print version `print.html` 2-page split** fixed via `@page { size: A1 landscape }` and footer relocated inside `.container`

### Verified
- Platform support data cross-checked across all 118 tools against official documentation
- Open source count: 69 tools

---

## v1.1 — April 2026

### Added
- Cloud Forensics category (12 tools): CloudTrail, Sparrow, GuardDuty, ScoutSuite, Prowler, CloudQuery, AzureHound, ROADtools, Invictus IR, Cado Response, Wiz Defend, Falco
- 2 new Malware Analysis tools: Frida (#117), Detect It Easy (#118) — total now 118
- Stats badge: "118 Tools | 8 Categories | 69 Open Source"
- Click-to-open: clicking any tile opens the tool's official website
- Tool URLs visible in hover tooltips
- URL hash routing for shareable filtered views (e.g. #network-forensics)
- OG meta tags for LinkedIn/Twitter social previews
- Circuit board trace pattern in background (subtle, 4% opacity)
- Print-ready poster version (print.html)
- og-image.png for social sharing
- README.md, CONTRIBUTING.md, CHANGELOG.md

### Changed
- Title: "PERIODIC TABLE OF DFIR" to "THE PERIODIC TABLE OF DFIR"
- Subtitle: "The Definitive Reference for Digital Forensics & Incident Response Tools"
- Background: pure black (#0a0a0a) to dark navy (#0f0f1f)
- Cloud Forensics color: indigo to teal (#26A69A)
- Tool #57: Rekall to MemProcFS (Rekall archived since 2020)
- Tool #95: Cuckoo to CAPE Sandbox (Cuckoo 2.x archived, CAPE is active successor)

### Fixed
- Symbol conflicts resolved: Falco (Fc to Fa), tshark (ts to Tw), tcpdump (td to Td), osquery (oq to Oq), libimobiledevice (li to Li), x64dbg (xd to Xd), CAPE Sandbox (CA to CS)
- ADB license corrected: free to open source (Apache 2.0/AOSP)

## v1.0 — March 2026

### Initial Release
- 116 tools across 7 categories
- Interactive hover popups with tool descriptions
- Search bar with live filtering
- Category filter buttons
- QR code linking to LinkedIn
- Attribution footer
- Dark theme
