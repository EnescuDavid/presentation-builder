# Requirements: Presentation Builder

**Defined:** 2026-03-22
**Core Value:** Anyone can clone the repo, import their corporate PowerPoint theme, and build a professional presentation by prompting an AI assistant — regardless of which AI tool they use.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Core Framework

- [x] **CORE-01**: Framework provides a CSS custom property system for design tokens (colors, fonts, spacing, shadows, border-radius)
- [x] **CORE-02**: Framework includes a base reveal.js configuration with sensible defaults (16:9, keyboard nav, progress bar, speaker notes enabled)
- [x] **CORE-03**: Framework provides a reusable animation library with entrance classes (fadeUp, blurIn, slideL, slideR, scalePop, lineGrow) applicable via CSS class names
- [x] **CORE-04**: Build pipeline assembles slides into a single self-contained HTML file
- [x] **CORE-05**: Framework provides a master/persistent layer (logo, footer, slide numbers) that appears across all slides
- [x] **CORE-06**: Presentations render correctly in Chrome, Firefox, and Safari without build tools or Node.js

### Component Library

- [x] **COMP-01**: Title/Cover slide component with hero text, subtitle, and optional background
- [x] **COMP-02**: Section Break slide component with large heading and optional counter
- [x] **COMP-03**: Text-Heavy slide component (single column with headline, body, and bullet points)
- [x] **COMP-04**: Two-Column slide component with independently filled left/right regions
- [x] **COMP-05**: Metrics/KPI Hero slide component displaying 1-3 large numbers with labels
- [x] **COMP-06**: Image Full-Bleed slide component with optional text overlay
- [x] **COMP-07**: Agenda slide component with numbered/bulleted list and active-item highlight
- [x] **COMP-08**: Summary/Takeaway slide component with key points and call-to-action area
- [x] **COMP-09**: Contact/CTA slide component with name, role, contact details, and logo
- [x] **COMP-10**: Comparison slide component (side-by-side cards with labels, from/to or vs-style)
- [x] **COMP-11**: Timeline/Process slide component showing 3-6 sequential steps with connectors
- [x] **COMP-12**: Quote/Testimonial slide component with large quote text, attribution, and optional photo
- [x] **COMP-13**: Card Grid slide component displaying 2-4 cards with icon/title/description
- [x] **COMP-14**: Framework/Matrix slide component (2x2 grid with labeled quadrants)
- [ ] **COMP-15**: Each component has a semantic description file documenting when to use it, content requirements, and layout behavior

### Theming & Branding

- [x] **THEME-01**: Framework ships with one polished default theme (clean, consulting-grade)
- [x] **THEME-02**: Theme CSS file overrides design tokens to apply corporate colors, fonts, and visual style
- [x] **THEME-03**: Theme includes persistent logo placement configurable via CSS variable or HTML slot
- [x] **THEME-04**: Theme includes footer bar with company name, optional confidentiality text, and slide number
- [x] **THEME-05**: PPTX theme extraction tool parses a .pptx file and generates a CSS theme file (extracts 12 color slots, 2 font families, logo images)
- [x] **THEME-06**: Theme supports dark/light background variants selectable per slide

### German-Ready Layouts

- [x] **LANG-01**: All component layouts handle German text lengths (130-300% expansion) without overflow or visual breakage
- [x] **LANG-02**: CSS includes German typography defaults (correct quotation marks, proper dash conventions, decimal comma formatting guidance)
- [x] **LANG-03**: Example/demo presentation uses German content

### Speaker Notes

- [x] **NOTE-01**: Speaker notes injection mechanism is documented and works via generation-time population of `<aside class="notes">` -- templates stay clean (per D-07), notes are injected when generating presentations
- [x] **NOTE-02**: Documentation includes AI prompt patterns for generating speaker notes that match slide tone and audience
- [x] **NOTE-03**: Documentation includes timing estimation guidance (words-per-minute to slide duration)

### AI Integration

- [ ] **AI-01**: Repository includes a CLAUDE.md that teaches Claude Code how to use the framework (component catalog, theme system, build process)
- [ ] **AI-02**: ~~Repository includes a copilot-instructions.md equivalent for GitHub Copilot CLI~~ DEFERRED to post-v1 (per D-23)
- [ ] **AI-03**: Component catalog is structured as an AI-readable reference (component name, description, when to use, content slots, variants)
- [ ] **AI-04**: Documentation includes audience presets (C-Suite, technical, sales, workshop, internal) with design rules an AI can apply

### Export & Tooling

- [ ] **TOOL-01**: PDF export works via DeckTape CLI command
- [ ] **TOOL-02**: Browser presentation works with reveal.js keyboard navigation, speaker view, and fullscreen
- [ ] **TOOL-03**: Preview/gallery mode shows all slides as thumbnails on a single page

## v2 Requirements

### Extended Components

- **COMP-20**: Team/People slide component with photo grid and role labels
- **COMP-21**: Chart slide component with Chart.js integration (bar, line, pie)
- **COMP-22**: Mermaid diagram slide component (flowcharts, sequence diagrams)
- **COMP-23**: Data Table slide component with styled rows/columns
- **COMP-24**: Icon Grid slide component with labeled icons in grid layout

### Advanced Theming

- **THEME-10**: Audience preset system that auto-adjusts font sizes, content density, and visual weight per audience type
- **THEME-11**: Multiple bundled themes (consulting, startup, academic, creative)

### Full i18n

- **LANG-10**: Content files per language with locale switching
- **LANG-11**: Sie/Du toggle per audience context
- **LANG-12**: Swiss German (de-CH) variant support (no eszett, different number formatting)

### Advanced Export

- **TOOL-10**: PPTX export via PptxGenJS (editable PowerPoint output)
- **TOOL-11**: PNG export of individual slides

### AI Design Agent

- **AI-10**: AI skill/agent that reads content and automatically selects optimal components per slide
- **AI-11**: Structure mode to polish mode workflow with AI-guided refinement

## Out of Scope

| Feature | Reason |
|---------|--------|
| Real-time collaboration | Adds massive complexity, not needed for AI-assisted solo workflow |
| SaaS/hosted version | This is a local framework, not a web app |
| Custom chart rendering engine | Use Chart.js/Mermaid plugins, don't build our own |
| WYSIWYG editor | The AI prompt is the editor |
| Slide-by-slide animation timeline editor | Too complex, use CSS classes instead |
| React/Vue component wrappers | Keep it plain HTML/CSS for maximum portability |
| npm/npx distribution | Clone-and-use is simpler for the target audience |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| CORE-01 | Phase 1: Foundation | Complete |
| CORE-02 | Phase 1: Foundation | Complete |
| CORE-03 | Phase 1: Foundation | Complete |
| CORE-04 | Phase 1: Foundation | Complete |
| CORE-05 | Phase 1: Foundation | Complete |
| CORE-06 | Phase 1: Foundation | Complete |
| COMP-01 | Phase 2: Essential Components | Complete |
| COMP-02 | Phase 2: Essential Components | Complete |
| COMP-03 | Phase 2: Essential Components | Complete |
| COMP-04 | Phase 2: Essential Components | Complete |
| COMP-05 | Phase 2: Essential Components | Complete |
| COMP-06 | Phase 2: Essential Components | Complete |
| COMP-07 | Phase 2: Essential Components | Complete |
| COMP-08 | Phase 2: Essential Components | Complete |
| COMP-09 | Phase 3: Extended Components | Complete |
| COMP-10 | Phase 3: Extended Components | Complete |
| COMP-11 | Phase 3: Extended Components | Complete |
| COMP-12 | Phase 3: Extended Components | Complete |
| COMP-13 | Phase 3: Extended Components | Complete |
| COMP-14 | Phase 3: Extended Components | Complete |
| THEME-01 | Phase 4: Theming & Branding | Complete |
| THEME-02 | Phase 4: Theming & Branding | Complete |
| THEME-03 | Phase 4: Theming & Branding | Complete |
| THEME-04 | Phase 4: Theming & Branding | Complete |
| THEME-05 | Phase 4: Theming & Branding | Complete |
| THEME-06 | Phase 4: Theming & Branding | Complete |
| LANG-01 | Phase 5: Localization & Speaker Notes | Complete |
| LANG-02 | Phase 5: Localization & Speaker Notes | Complete |
| LANG-03 | Phase 5: Localization & Speaker Notes | Complete |
| NOTE-01 | Phase 5: Localization & Speaker Notes | Complete |
| NOTE-02 | Phase 5: Localization & Speaker Notes | Complete |
| NOTE-03 | Phase 5: Localization & Speaker Notes | Complete |
| AI-01 | Phase 6: AI Integration & Tooling | Pending |
| AI-02 | Phase 6: AI Integration & Tooling | Deferred |
| AI-03 | Phase 6: AI Integration & Tooling | Pending |
| AI-04 | Phase 6: AI Integration & Tooling | Pending |
| COMP-15 | Phase 6: AI Integration & Tooling | Pending |
| TOOL-01 | Phase 6: AI Integration & Tooling | Pending |
| TOOL-02 | Phase 6: AI Integration & Tooling | Complete |
| TOOL-03 | Phase 6: AI Integration & Tooling | Pending |

**Coverage:**
- v1 requirements: 40 total
- Mapped to phases: 40
- Unmapped: 0

---
*Requirements defined: 2026-03-22*
*Last updated: 2026-03-22 after roadmap creation*
