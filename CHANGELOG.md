# Changelog

## v1.3.1 - September 2026

### Added
- **A1 wall poster** (`assets/poster-a1.pdf`), single page, vector, print ready
- **A3 double sided handout** (`assets/handout-a3-2pages.pdf`): the table on the front, a full tool index on the back grouped by category, with the 25 install commands printed out. The reverse side is built by `handout-back.html` from the same `script.js` data, so it can never drift from the table
- **`assets/poster-slide.png`** (3840 px) for slide decks
- **`CITATION.cff`** so GitHub offers a ready citation, including ORCID
- Soft blueprint grid behind the printed table, so the large dark areas do not read as flat ink

### Fixed
- **Tile size on laptops.** Tile size was driven by viewport height with a fixed reserve, so a 1366x768 laptop rendered 34 px tiles. Short viewports are now sized from the width and the page scrolls: the same laptop renders 70 px tiles, matching a 1440p desktop. Real 1080p desktops improved from 45 px to 75 px as well
- **Print fonts.** Google serves Inter as a variable font, which Chrome cannot embed in a PDF: it fell back to Type3 glyph drawing, printing soft and risking print RIP issues. Both print pages now use an embeddable system face, verified at zero Type3 fonts
- Both sides of the handout now use the same typeface, they previously differed
- `print.html` fitted on two sheets after the synthetic row was added; spacing reworked to fit one A1 sheet again
- QR codes enlarged: 6.1 cm on the poster, 2.6 cm on the handout, the previous sizes were hard to scan
- `renderTable` and `renderLegend` no longer throw on pages that load `script.js` for data only, which also silenced a long standing error on `print.html` and `poster.html`
- `assets/og-image.png` regenerated, it was still a pre v1.3 image without the synthetic row

---

## v1.3 - July 2026

### Added
- **Period 8 - Synthetic Elements (119-126)**: expandable extension row for AI DFIR tools, mirroring how real elements beyond 118 are lab-synthesized and unconfirmed. A single **119+ toggle tile under element 89** expands the row to the right on click (auto-expands when the AI filter or a matching search is used; always expanded on print/poster). Rendered as white tiles with black lettering, dashed borders, and a slow radiation-pulse glow:
  - 119 Security Copilot (Microsoft) · 120 Charlotte AI (CrowdStrike) · 121 Purple AI (SentinelOne) · 122 Gemini SecOps (Google) · 123 Magnet Copilot · 124 Code Insight (VirusTotal) · 125 Elastic AI Assistant · 126 AI Investigator (Cado)
- **AI · Synthetic category** - 10th legend entry and filter button, white with black lettering, with a "119+ AI·SYN" row marker that flashes the row on hover
- **Install-command chips** - 25 open-source tools carry a copyable one-line install command (`pip` / `brew` / `apt` / `winget`) inside the tooltip, with clipboard API + execCommand fallback
- **tools.json** - the full table published as a machine-readable open dataset, generated from script.js by `scripts/build-tools-json.mjs`

### Changed
- Grid extended to 12 rows (spacer + synthetic row); viewport-fit tile formula updated - still no scrollbars at 1920×1080 and 2560×1440
- Stats badges updated: "118 Tools + 8 Synthetic | 9 Categories + AI | 67 Open Source"
- `print.html` / `poster.html`: grid rows extended, synthetic row rendered statically (no animation on paper), legend tightened to fit 10 categories on one line

### Verified
- All 126 tool URLs checked - 122 return HTTP 200; the remaining 4 (Graylog, OpenText, ISO ×2) are bot-blocked for scripts but confirmed live in a browser

---

## v1.2.3 - June 2026

### Fixed
- **CISA Playbooks (#56)** URL updated - old page returned 404 (moved to cisa.gov/resources-tools)
- **Wiz Defend (#114)** URL updated - page moved from /product/ to /platform/
- **EnCase (#26)** URL updated - product renamed to OpenText Forensic
- **TheHive (#52)** reclassified Open Source → **Freemium** - TheHive 5 is commercial by StrangeBee with a free tier; TheHive 4 (AGPL) reached end-of-life. URL updated to strangebee.com
- Open source count corrected: 68 → **67**; Freemium count: 8 → **9**

---

## v1.2.2 - May 2026

### Fixed
- **FUJI description corrected** - it is a macOS forensic acquisition tool, not iOS
- **License breakdown corrected** against actual data: 68 Open Source, 24 Commercial, 8 Freemium, 11 Free, 7 Standards
- **URL hash filters** now replace previous filters on hash change instead of stacking
- **Escape key** clears the search box
- Missing `</html>` closing tag restored in `index.html`

---

## v1.2.1 - May 2026

### Changed
- **FUJI (#105)** moved from Mobile Forensics to Disk & Memory Forensics - correct categorisation
- **CloudTrail** renumbered from #105 to #107
- **ScoutSuite (#107)** removed from the table entirely
- **ArtEx (#103)** added to Mobile Forensics - iOS artifact analysis and verification tool, Windows only (symbol: AE)
- **Elcomsoft (#100)** platform corrected to cross-platform (Windows / Linux / macOS)
- **Atmospheric quote** added to `poster.html` footer - consistent with index and print versions

### Fixed
- Open source count corrected: 69 → **68** (ScoutSuite removed; ArtEx is free, not open source)
- **Category filter buttons and legend** reordered to match table visual flow: Frameworks → Disk → Hybrid → Network → IR → Cloud → Log Analysis → Malware → Mobile

---

## v1.2 - May 2026

### Added
- **9th category: Hybrid Platforms** (silver) - all-in-one forensic acquisition + analysis suites
- **6 new tools**:
  - Mobile Forensics: UFADE (#91), ALEX (#95), FUJI (#103)
  - Hybrid Platforms: Belkasoft X (#43), Binalyze AIR (#44), Security Onion (#75)
- **PiRogue Tool Suite (#89)** - added to Mobile Forensics
- **Lanthanide/actinide-style indicator tiles** - "57-71 MA·RE" and "89-103 MOB" markers at row 6/7 col 3, mirroring the real periodic table's lanthanide/actinide layout
- **Hover flash animation on extension rows** - hovering an indicator tile pulses all malware or mobile tools on the table
- **Platform support icons in tooltips** - 🪟 Windows / 🐧 Linux / 🍎 macOS / 🌐 Web / 📋 Standard / 🔌 Appliance, verified per tool
- **Search clear button (✕)** - appears when text is typed into the search bar
- **Open Graph + Twitter Card meta tags** - for proper LinkedIn/Twitter preview rendering when the link is shared
- **SEO meta description and keywords**
- **Atmospheric wallpaper layer (index only)** - subtle cyan matrix rain canvas + slow horizontal scan beam every 16s + DFIR quote at the footer ("What our eyes can see is not the measure of all things.")
- **Dedicated `poster.html`** for 4K PNG export at fixed 3840×2160 canvas
- **Viewport-fit table sizing** - tile size calculated from min(viewport width, viewport height) so the page never scrolls on standard desktop resolutions
- **Quote in printable footer** - same atmospheric DFIR quote reused on `print.html`

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
- **SVG key/legend redesigned** - brighter annotation lines, larger license section, 3-row license layout
- **Header text bolder** - subtitle, stats badge, version
- **Hybrid metalloid diagonal layout** - silver hybrid tiles staircase across rows 4-6, mirroring the real periodic table's metalloid boundary
- **Cloud Forensics row consolidated** - gap between CloudTrail and GuardDuty closed in row 7
- **Color groups more contiguous** - categories flow in blocks instead of scattered
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
- **HTML structure** - restored missing `<div class="container">` wrapper in `index.html`
- **Print version label** - `print.html` updated from v1.1 to v1.2
- **Top row tooltip clipping** - rows 1-3 now open tooltips downward instead of upward to avoid being cut off at the page edge
- **FTK Imager URL** updated to https://www.exterro.com/digital-forensics-software/ftk-imager
- **Removed dead QRCode.js generation code** in `script.js` (was targeting a non-existent element)
- **MemProcFS (#57)** moved under Arsenal Image Mounter in row 7
- **Frameworks row** shifted right after FC removal - no orphan gaps
- **Binalyze AIR (#44) platform** corrected from desktop OS to web-based
- **Hover-transform scrollbar flicker** eliminated on right-edge / bottom-row tiles via per-edge transform-origin and document-level overflow control
- **Mobile-marker hover animation** no longer triggers transient scrollbars - replaced `transform: scale` with stronger box-shadow pulse
- **SVG key layout** - sample tile shifted left, LICENSE block shifted right with wider column gap so labels stop overlapping in print at scaled font sizes
- **Print version `print.html` 2-page split** fixed via `@page { size: A1 landscape }` and footer relocated inside `.container`

### Verified
- Platform support data cross-checked across all 118 tools against official documentation
- Open source count: 69 tools

---

## v1.1 - April 2026

### Added
- Cloud Forensics category (12 tools): CloudTrail, Sparrow, GuardDuty, ScoutSuite, Prowler, CloudQuery, AzureHound, ROADtools, Invictus IR, Cado Response, Wiz Defend, Falco
- 2 new Malware Analysis tools: Frida (#117), Detect It Easy (#118) - total now 118
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

## v1.0 - March 2026

### Initial Release
- 116 tools across 7 categories
- Interactive hover popups with tool descriptions
- Search bar with live filtering
- Category filter buttons
- QR code linking to LinkedIn
- Attribution footer
- Dark theme
