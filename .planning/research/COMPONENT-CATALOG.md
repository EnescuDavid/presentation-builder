# Component Library Catalog

> Comprehensive catalog of slide component types for strategic consulting presentations.
> Each component includes name, description, use cases, layout patterns, variants, and example scenarios.
> Last updated: 2026-03-22

---

## Table of Contents

1. [Title / Cover Slides](#1-title--cover-slides)
2. [Section Break Slides](#2-section-break-slides)
3. [Agenda Slides](#3-agenda-slides)
4. [Text-Heavy Slides](#4-text-heavy-slides)
5. [Data / Metrics Slides](#5-data--metrics-slides)
6. [Comparison Slides](#6-comparison-slides)
7. [Process / Timeline Slides](#7-process--timeline-slides)
8. [Image-Focused Slides](#8-image-focused-slides)
9. [Quote / Testimonial Slides](#9-quote--testimonial-slides)
10. [Team / People Slides](#10-team--people-slides)
11. [Contact / CTA Slides](#11-contact--cta-slides)
12. [Summary / Takeaway Slides](#12-summary--takeaway-slides)
13. [Framework / Matrix Slides](#13-framework--matrix-slides)
14. [Chart / Data Visualization Slides](#14-chart--data-visualization-slides)

---

## Component Naming Convention

Each component follows the pattern: `{category}-{variant}`

Examples: `title-hero`, `section-numbered`, `metrics-kpi-grid`, `comparison-table`

---

## 1. Title / Cover Slides

### 1.1 title-hero

**Description:** Full-impact opening slide with large title text, optional subtitle, and brand identity elements.

**When to use:** Opening slide of any presentation. Sets the tone and context for the entire deck.

**Layout pattern:**
```
+------------------------------------------------------------------+
|                                                                  |
|                                                                  |
|            PRESENTATION TITLE (large, bold)                      |
|            Subtitle or tagline (lighter weight)                  |
|                                                                  |
|            Presenter Name | Date | Company                      |
|                                                                  |
|                                           [Company Logo]         |
+------------------------------------------------------------------+
```

**Visual hierarchy:** Title dominates (60-72pt), subtitle secondary (24-28pt), meta info tertiary (14-18pt).

**Variants:**
| Variant | Description |
|---------|-------------|
| **title-hero-light** | White/light background, dark text. Clean, corporate. |
| **title-hero-dark** | Dark/navy background, white text. Dramatic, premium. |
| **title-hero-image** | Full-bleed background image with color overlay (40-60% opacity) and white text. |
| **title-hero-gradient** | Gradient background (brand colors) with white text. |
| **title-hero-split** | Left half: text content. Right half: image or brand graphic. |
| **title-hero-minimal** | Maximum white space. Title only, centered, nothing else. |

**Example scenario:** "Digital Transformation Roadmap for Acme Corp -- Strategic Assessment and Recommendations" presented to the C-suite at a quarterly board meeting.

---

### 1.2 title-internal

**Description:** Simpler title slide for internal meetings and working sessions.

**When to use:** Internal team meetings, project updates, working sessions where a dramatic opening is inappropriate.

**Layout pattern:**
```
+------------------------------------------------------------------+
|  [Logo]                                     [Date]               |
+------------------------------------------------------------------+
|                                                                  |
|  MEETING TITLE                                                   |
|  Subtitle / Context                                              |
|                                                                  |
|  Attendees: Name, Name, Name                                    |
|  Prepared by: Name                                               |
|                                                                  |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **title-internal-simple** | Title + date + prepared by. Minimal. |
| **title-internal-agenda** | Title with mini-agenda preview built in. |

**Example scenario:** "Weekly Project Falcon Sync -- Sprint 14 Update" for the internal project team.

---

## 2. Section Break Slides

### 2.1 section-numbered

**Description:** Full-color or image background slide marking the transition between major sections. Includes section number and title.

**When to use:** Between major sections of a presentation (e.g., between "Market Analysis" and "Strategic Options"). Creates visual breathing room and signals topic change.

**Layout pattern:**
```
+------------------------------------------------------------------+
|                                                                  |
|                                                                  |
|         01                                                       |
|         SECTION TITLE (large, bold)                              |
|         Optional one-line description                            |
|                                                                  |
|                                                                  |
+------------------------------------------------------------------+
```

**Visual hierarchy:** Section number (48-60pt, light weight or accent color), section title (36-44pt, bold).

**Variants:**
| Variant | Description |
|---------|-------------|
| **section-numbered-dark** | Solid dark background (brand primary), white text. |
| **section-numbered-light** | White background, colored text. |
| **section-numbered-image** | Background image with overlay, white text. |
| **section-numbered-accent** | Accent color background, contrasting text. |
| **section-numbered-gradient** | Gradient background. |

**Example scenario:** "02 -- Market Landscape Analysis" transitioning from the executive summary into the detailed market analysis section.

---

### 2.2 section-agenda-tracker

**Description:** Section divider that also shows progress through the full presentation agenda, highlighting the current section.

**When to use:** When the presentation has 4+ major sections and the audience benefits from knowing where they are in the flow.

**Layout pattern:**
```
+------------------------------------------------------------------+
|                                                                  |
|  1. Executive Summary                                            |
|  2. Market Analysis          <-- [HIGHLIGHTED / ACTIVE]          |
|  3. Strategic Options                                            |
|  4. Financial Projections                                        |
|  5. Recommendations                                              |
|                                                                  |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **section-agenda-tracker-vertical** | Vertical list with current item highlighted (bold, color, arrow). |
| **section-agenda-tracker-horizontal** | Horizontal tab-like bar at top/bottom with current tab active. |
| **section-agenda-tracker-progress** | Progress bar showing completion percentage. |

**Example scenario:** Entering the "Strategic Options" section (section 3 of 5) in a strategy presentation.

---

## 3. Agenda Slides

### 3.1 agenda-full

**Description:** Complete agenda listing all presentation sections with optional time allocations and page references.

**When to use:** Immediately after the title slide (or after executive summary) to set audience expectations.

**Layout pattern:**
```
+------------------------------------------------------------------+
|  AGENDA                                                          |
+------------------------------------------------------------------+
|                                                                  |
|  01  Executive Summary .................... 5 min     p. 3       |
|  02  Market Landscape ..................... 15 min    p. 8       |
|  03  Strategic Options .................... 20 min    p. 18      |
|  04  Financial Analysis ................... 15 min    p. 28      |
|  05  Recommendations & Next Steps ......... 10 min    p. 35      |
|  06  Appendix ............................. Reference  p. 40      |
|                                                                  |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **agenda-full-numbered** | Numbered list with time and page. Classic consulting format. |
| **agenda-full-icons** | Each item has an icon representing the topic. |
| **agenda-full-grid** | Items arranged in a 2x3 or 3x2 grid with icons and descriptions. |
| **agenda-full-timeline** | Horizontal timeline showing progression through the agenda. |

**Example scenario:** Board meeting agenda for a 90-minute strategy review session.

---

### 3.2 agenda-mini

**Description:** Compact agenda that appears as a sidebar or footer element on content slides, showing current position.

**When to use:** As a recurring element throughout the presentation to maintain orientation. Especially useful in long decks (20+ slides).

**Layout pattern:**
```
+------------------------------------------------------------------+
|  Action Title                                                    |
+------------------------------------------------------------------+
|  [Sidebar: Agenda]  |                                            |
|                     |        Main Content Area                   |
|  1. Summary         |                                            |
|  > 2. Analysis      |                                            |
|  3. Options         |                                            |
|  4. Reco            |                                            |
+------------------------------------------------------------------+
```

**Example scenario:** A persistent left sidebar on every slide of a 40-slide strategic review, with the current section highlighted.

---

## 4. Text-Heavy Slides

### 4.1 text-bullets

**Description:** Structured bullet-point content with action title. The workhorse content slide for consulting presentations.

**When to use:** Presenting key findings, recommendations, or arguments that are best expressed in structured text.

**Layout pattern:**
```
+------------------------------------------------------------------+
|  Action Title: "Three factors drove the Q3 revenue shortfall"    |
+------------------------------------------------------------------+
|                                                                  |
|  * Factor 1: Supply chain disruption                             |
|    - 3-week delay in key component delivery                      |
|    - Affected 40% of product line                                |
|                                                                  |
|  * Factor 2: Competitive pricing pressure                        |
|    - Main competitor reduced prices by 12%                       |
|    - Lost 3 key accounts in the Midwest region                   |
|                                                                  |
|  * Factor 3: Channel partner underperformance                    |
|    - Partner X missed target by 25%                              |
|    - New partner onboarding delayed                              |
|                                                                  |
+------------------------------------------------------------------+
|  Source: Internal sales data, Q3 2026                            |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **text-bullets-simple** | Flat bullet list, no sub-bullets. 4-7 items. |
| **text-bullets-nested** | Bullets with one level of sub-bullets. |
| **text-bullets-numbered** | Numbered list for sequential items. |
| **text-bullets-icon** | Each bullet preceded by a relevant icon. |

**Example scenario:** Key findings from a customer satisfaction survey, with each finding supported by a data point.

---

### 4.2 text-two-column

**Description:** Content split into two equal or weighted columns, each with its own header.

**When to use:** Presenting two related but distinct perspectives (e.g., current state vs. future state, pros vs. cons, problem vs. solution).

**Layout pattern:**
```
+------------------------------------------------------------------+
|  Action Title: "Current operations have significant room for     |
|  improvement across both efficiency and quality"                 |
+------------------------------------------------------------------+
|                        |                                         |
|  CURRENT STATE         |  FUTURE STATE                          |
|                        |                                         |
|  * Manual processes    |  * Automated workflows                  |
|  * 5-day cycle time    |  * 1-day cycle time                     |
|  * 15% error rate      |  * <1% error rate                       |
|  * No visibility       |  * Real-time dashboard                  |
|                        |                                         |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **text-two-column-equal** | 50/50 split. |
| **text-two-column-weighted** | 60/40 or 70/30 split (primary content larger). |
| **text-two-column-highlight** | One column highlighted (background color) to draw attention. |

**Example scenario:** Current operational performance vs. target state after implementing recommendations.

---

### 4.3 text-callout-box

**Description:** A key message or quote highlighted in a visually distinct box, surrounded by supporting context.

**When to use:** When there is one critical insight that must stand out from the supporting detail.

**Layout pattern:**
```
+------------------------------------------------------------------+
|  Action Title                                                    |
+------------------------------------------------------------------+
|                                                                  |
|  Supporting context paragraph or bullets...                      |
|                                                                  |
|  +------------------------------------------------------------+ |
|  |  KEY INSIGHT                                                | |
|  |  "The market will reach $50B by 2028, 3x current size"     | |
|  +------------------------------------------------------------+ |
|                                                                  |
|  Additional supporting detail...                                 |
|                                                                  |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **text-callout-box-top** | Callout box at the top of the slide body. |
| **text-callout-box-center** | Callout box centered vertically. |
| **text-callout-box-sidebar** | Callout box as a right-side panel. |

**Example scenario:** Highlighting the total addressable market size within a broader market analysis slide.

---

### 4.4 text-executive-summary

**Description:** Structured executive summary following the SCR (Situation-Complication-Resolution) framework.

**When to use:** The second slide of any consulting deck (after the title). Provides the complete story for time-constrained executives.

**Layout pattern:**
```
+------------------------------------------------------------------+
|  EXECUTIVE SUMMARY                                               |
+------------------------------------------------------------------+
|                                                                  |
|  SITUATION                                                       |
|  * Context point 1                                               |
|  * Context point 2                                               |
|                                                                  |
|  COMPLICATION                                                    |
|  * Challenge/change 1                                            |
|  * Challenge/change 2                                            |
|                                                                  |
|  RESOLUTION / KEY RECOMMENDATIONS                                |
|  1. Recommendation with expected impact                          |
|  2. Recommendation with expected impact                          |
|  3. Recommendation with expected impact                          |
|                                                                  |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **text-executive-summary-scr** | Standard SCR layout with labeled sections. |
| **text-executive-summary-columns** | Three columns: Situation | Complication | Resolution. |
| **text-executive-summary-sidebar** | Recommendations in a highlighted sidebar. |

**Example scenario:** Opening summary for a due diligence report on an acquisition target.

---

## 5. Data / Metrics Slides

### 5.1 metrics-kpi-grid

**Description:** Grid of 3-6 large KPI values with labels, trend indicators, and optional sparklines.

**When to use:** Dashboard-style overview of key performance metrics. Common in quarterly reviews, board reports, performance updates.

**Layout pattern:**
```
+------------------------------------------------------------------+
|  Action Title: "All key metrics trending positive in Q3"         |
+------------------------------------------------------------------+
|                                                                  |
|  +----------+  +----------+  +----------+                        |
|  |  $5.2M   |  |   847    |  |   94%    |                        |
|  | Revenue  |  | New Cust |  | NPS Score|                        |
|  | +15% YoY |  | +23% QoQ |  | +2pp QoQ |                        |
|  | [green]  |  | [green]  |  | [green]  |                        |
|  +----------+  +----------+  +----------+                        |
|                                                                  |
|  +----------+  +----------+  +----------+                        |
|  |   $1.2M  |  |   12     |  |   78%    |                        |
|  | EBITDA   |  | Churn    |  | Util.    |                        |
|  | +8% YoY  |  | -5% QoQ  |  | +3pp QoQ |                        |
|  | [green]  |  | [amber]  |  | [green]  |                        |
|  +----------+  +----------+  +----------+                        |
|                                                                  |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **metrics-kpi-grid-3** | Single row of 3 large KPIs. |
| **metrics-kpi-grid-4** | Single row of 4 KPIs. |
| **metrics-kpi-grid-6** | 2x3 grid of 6 KPIs. |
| **metrics-kpi-grid-hero** | One large hero KPI + 3-4 smaller supporting KPIs. |
| **metrics-kpi-grid-spark** | KPIs with embedded mini sparkline charts showing trend. |

**Example scenario:** Monthly executive dashboard showing revenue, customer acquisition, churn, NPS, EBITDA, and utilization rate.

---

### 5.2 metrics-single-hero

**Description:** One large, impactful number centered on the slide with supporting context below.

**When to use:** When one metric tells the whole story and deserves full slide real estate. Maximum dramatic impact.

**Layout pattern:**
```
+------------------------------------------------------------------+
|  Action Title: "Revenue crossed the $100M milestone"             |
+------------------------------------------------------------------+
|                                                                  |
|                                                                  |
|                        $104.7M                                   |
|                     Annual Revenue                               |
|                      +32% vs. 2025                               |
|                                                                  |
|        "First time in company history to exceed $100M"           |
|                                                                  |
|                                                                  |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **metrics-single-hero-light** | Light background, dark number. |
| **metrics-single-hero-dark** | Dark background, white/accent number. |
| **metrics-single-hero-comparison** | Hero number with before/after comparison. |

**Example scenario:** Announcing record-breaking revenue at an all-hands meeting.

---

### 5.3 metrics-scorecard

**Description:** Table-format scorecard with metrics, targets, actuals, and RAG status indicators.

**When to use:** Structured performance review against defined targets. Common in monthly/quarterly business reviews.

**Layout pattern:**
```
+------------------------------------------------------------------+
|  Action Title: "3 of 5 strategic KPIs are on track"              |
+------------------------------------------------------------------+
|  Metric         | Target   | Actual   | Variance | Status        |
|  ---------------+----------+----------+----------+--------       |
|  Revenue        | $5.0M    | $5.2M    | +4%      | [GREEN]       |
|  Gross Margin   | 65%      | 62%      | -3pp     | [AMBER]       |
|  New Customers  | 800      | 847      | +6%      | [GREEN]       |
|  Churn Rate     | <5%      | 7.2%     | +2.2pp   | [RED]         |
|  NPS Score      | 90+      | 94       | +4       | [GREEN]       |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **metrics-scorecard-simple** | Metric, actual, status only. |
| **metrics-scorecard-detailed** | Full target/actual/variance/status with commentary column. |
| **metrics-scorecard-trend** | Includes trend arrows or mini sparklines per metric. |

**Example scenario:** Quarterly strategic KPI review at a board meeting.

---

## 6. Comparison Slides

### 6.1 comparison-table

**Description:** Multi-criteria comparison across 2-4 options in a structured table format.

**When to use:** Evaluating strategic options, vendor selection, scenario analysis, feature comparison.

**Layout pattern:**
```
+------------------------------------------------------------------+
|  Action Title: "Option B maximizes ROI while managing risk"      |
+------------------------------------------------------------------+
|                | Option A     | Option B      | Option C          |
|  Criteria      | (Build)      | (Buy)         | (Partner)         |
|  --------------+--------------+---------------+-----------        |
|  Cost          | $2.5M        | $1.8M *       | $3.2M             |
|  Timeline      | 12 months    | 9 months *    | 6 months *        |
|  ROI (3-year)  | 2.1x         | 3.4x *        | 1.8x              |
|  Risk Level    | Low *        | Medium        | High              |
|  Control       | Full *       | Moderate      | Limited           |
|                |              |               |                   |
|  RECOMMENDATION|              | RECOMMENDED   |                   |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **comparison-table-2col** | Two options side by side. |
| **comparison-table-3col** | Three options (most common). |
| **comparison-table-4col** | Four options. |
| **comparison-table-harvey** | Harvey balls instead of text values for qualitative criteria. |
| **comparison-table-rag** | RAG (Red/Amber/Green) color coding per cell. |
| **comparison-table-checkmark** | Checkmarks and X marks for feature presence/absence. |

**Example scenario:** Evaluating build vs. buy vs. partner options for a new technology platform.

---

### 6.2 comparison-matrix

**Description:** 2x2 quadrant matrix plotting options along two dimensions.

**When to use:** Strategic positioning, prioritization, risk/impact analysis, BCG-style portfolio analysis.

**Layout pattern:**
```
+------------------------------------------------------------------+
|  Action Title: "Focus investment on high-impact, low-risk        |
|  initiatives"                                                    |
+------------------------------------------------------------------+
|                                                                  |
|  High     |  Quick Wins      |  Strategic Bets                  |
|  Impact   |  * Initiative A  |  * Initiative D                  |
|           |  * Initiative B  |  * Initiative E                  |
|           |------------------+------------------                 |
|  Low      |  De-prioritize   |  Reconsider                     |
|  Impact   |  * Initiative C  |  * Initiative F                  |
|           |                  |                                   |
|           +------------------------------------------            |
|              Low Risk           High Risk                        |
|                                                                  |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **comparison-matrix-labeled** | Quadrant labels (e.g., "Stars," "Cash Cows," "Question Marks," "Dogs"). |
| **comparison-matrix-bubble** | Items plotted as sized bubbles within quadrants. |
| **comparison-matrix-color** | Quadrants color-coded (green, yellow, orange, red). |

**Example scenario:** Prioritizing a portfolio of 15 transformation initiatives by expected impact and implementation risk.

---

### 6.3 comparison-before-after

**Description:** Two-panel slide showing transformation from current state to future state.

**When to use:** Demonstrating the impact of a proposed change, showing transformation results.

**Layout pattern:**
```
+------------------------------------------------------------------+
|  Action Title: "New process reduces cycle time by 80%"           |
+------------------------------------------------------------------+
|                          |                                       |
|  BEFORE                  |  AFTER                                |
|  [muted colors]          |  [vibrant colors]                    |
|                          |                                       |
|  5-day cycle time        |  1-day cycle time                    |
|  15% error rate          |  <1% error rate                      |
|  3 handoffs              |  0 handoffs                          |
|  Manual process          |  Fully automated                     |
|                          |                                       |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **comparison-before-after-text** | Text-based comparison in two columns. |
| **comparison-before-after-visual** | Side-by-side diagrams or screenshots. |
| **comparison-before-after-metrics** | Before/after metrics with delta callouts. |

**Example scenario:** Showing operational improvements after implementing a new ERP system.

---

## 7. Process / Timeline Slides

### 7.1 process-linear

**Description:** Horizontal or vertical sequence of steps showing a process, methodology, or workflow.

**When to use:** Explaining a methodology, project approach, customer journey, or any sequential process.

**Layout pattern (horizontal):**
```
+------------------------------------------------------------------+
|  Action Title: "Our approach follows a proven 4-step methodology"|
+------------------------------------------------------------------+
|                                                                  |
|  [1]  ------>  [2]  ------>  [3]  ------>  [4]                  |
|  Discover      Analyze       Design        Implement             |
|                                                                  |
|  - Stakeholder - Data deep   - Solution    - Pilot launch       |
|    interviews    dive          design      - Scale rollout       |
|  - Current     - Gap         - Business    - Change mgmt        |
|    state map     analysis      case                             |
|                                                                  |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **process-linear-3step** | 3 steps. |
| **process-linear-4step** | 4 steps (most common). |
| **process-linear-5step** | 5 steps. |
| **process-linear-chevron** | Steps as connected chevron arrows. |
| **process-linear-circle** | Steps as numbered circles connected by lines. |
| **process-linear-vertical** | Vertical progression (top to bottom). |

**Example scenario:** Presenting the project methodology for a strategy engagement.

---

### 7.2 process-circular

**Description:** Cyclical process showing continuous improvement or recurring workflow.

**When to use:** Illustrating iterative processes, feedback loops, continuous improvement cycles.

**Layout pattern:**
```
+------------------------------------------------------------------+
|  Action Title: "Continuous improvement cycle drives ongoing      |
|  optimization"                                                   |
+------------------------------------------------------------------+
|                                                                  |
|                     [Plan]                                       |
|                    /       \                                     |
|                   /         \                                    |
|              [Act]           [Do]                                |
|                   \         /                                    |
|                    \       /                                     |
|                    [Check]                                       |
|                                                                  |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **process-circular-3step** | 3-element cycle. |
| **process-circular-4step** | 4-element cycle (e.g., PDCA). |
| **process-circular-5step** | 5-element cycle. |
| **process-circular-hub** | Central hub with radiating elements (hub-and-spoke). |

**Example scenario:** Illustrating an agile development cycle or a continuous monitoring framework.

---

### 7.3 timeline-roadmap

**Description:** Chronological roadmap showing phases, milestones, and key deliverables over time.

**When to use:** Project plans, implementation roadmaps, product roadmaps, transformation timelines.

**Layout pattern:**
```
+------------------------------------------------------------------+
|  Action Title: "18-month transformation roadmap"                 |
+------------------------------------------------------------------+
|                                                                  |
|  Q1 2026    Q2 2026    Q3 2026    Q4 2026    Q1 2027   Q2 2027  |
|  |-----------|-----------|-----------|-----------|---------|     |
|  | Phase 1: Foundation  | Phase 2: Scale       | Phase 3: Opt|  |
|  |===================|====================|==============|       |
|  |                   |                    |              |       |
|  * Pilot             * National rollout   * Optimization         |
|  * Team build        * Partner deals      * AI features          |
|  * Platform          * Marketing          * International        |
|                                                                  |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **timeline-roadmap-phases** | Horizontal bars showing overlapping phases. |
| **timeline-roadmap-milestones** | Milestone markers on a timeline. |
| **timeline-roadmap-swimlane** | Multiple parallel workstreams (e.g., tech, people, process). |
| **timeline-roadmap-gantt** | Gantt-style bars with dependencies. |

**Example scenario:** 18-month digital transformation implementation plan with technology, people, and process workstreams.

---

### 7.4 process-funnel

**Description:** Narrowing funnel showing stages with decreasing volume (e.g., sales pipeline, conversion funnel).

**When to use:** Sales pipeline analysis, conversion optimization, lead-to-customer journeys.

**Layout pattern:**
```
+------------------------------------------------------------------+
|  Action Title: "Conversion rate drops significantly at the       |
|  evaluation stage"                                               |
+------------------------------------------------------------------+
|                                                                  |
|  +========================================+  10,000 Visitors    |
|    +================================+        2,500 Leads (25%)  |
|      +=========================+             800 MQLs (32%)     |
|        +===================+                 200 Opportunities   |
|          +==============+                    50 Deals (25%)     |
|            +==========+                      $2.5M Revenue      |
|                                                                  |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **process-funnel-vertical** | Top-to-bottom funnel. |
| **process-funnel-horizontal** | Left-to-right funnel. |
| **process-funnel-annotated** | Funnel with conversion rates and commentary between stages. |

**Example scenario:** Marketing-to-sales funnel analysis showing where leads drop off.

---

## 8. Image-Focused Slides

### 8.1 image-fullbleed

**Description:** Full-bleed background image with minimal text overlay.

**When to use:** Emotional impact, scene-setting, brand storytelling, section transitions.

**Layout pattern:**
```
+------------------------------------------------------------------+
|                                                                  |
|  [FULL-BLEED PHOTOGRAPH]                                        |
|                                                                  |
|           "Short impactful statement"                            |
|            -- Attribution                                        |
|                                                                  |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **image-fullbleed-text-bottom** | Text anchored to bottom-left with gradient overlay. |
| **image-fullbleed-text-center** | Text centered with full-slide color overlay. |
| **image-fullbleed-text-split** | Image on right 60%, text content on left 40%. |

**Example scenario:** Opening a section on "The Future of Healthcare" with a powerful hospital technology image.

---

### 8.2 image-text-split

**Description:** Slide split between an image and text content, typically 50/50 or 60/40.

**When to use:** Pairing a visual with descriptive content. Case studies, feature descriptions, concept explanations.

**Layout pattern:**
```
+------------------------------------------------------------------+
|  Action Title                                                    |
+------------------------------------------------------------------+
|                          |                                       |
|                          |  Key Point 1                         |
|     [IMAGE]              |  Supporting detail...                |
|                          |                                       |
|                          |  Key Point 2                         |
|                          |  Supporting detail...                |
|                          |                                       |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **image-text-split-left** | Image on left, text on right. |
| **image-text-split-right** | Image on right, text on left. |
| **image-text-split-equal** | 50/50 split. |
| **image-text-split-weighted** | 60/40 or 40/60 split. |

**Example scenario:** Case study of a successful client engagement with a photo of the client's facility and key results.

---

### 8.3 image-gallery

**Description:** Grid of 3-6 images with optional captions, showing multiple examples or portfolio items.

**When to use:** Showcasing multiple examples, portfolio items, office locations, product photos.

**Layout pattern:**
```
+------------------------------------------------------------------+
|  Action Title: "Our global presence spans 12 offices"            |
+------------------------------------------------------------------+
|                                                                  |
|  +----------+  +----------+  +----------+                        |
|  |  [IMG]   |  |  [IMG]   |  |  [IMG]   |                        |
|  | New York |  | London   |  | Tokyo    |                        |
|  +----------+  +----------+  +----------+                        |
|                                                                  |
|  +----------+  +----------+  +----------+                        |
|  |  [IMG]   |  |  [IMG]   |  |  [IMG]   |                        |
|  | Sydney   |  | Dubai    |  | Sao Paulo|                        |
|  +----------+  +----------+  +----------+                        |
|                                                                  |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **image-gallery-3** | Single row of 3 images. |
| **image-gallery-4** | Single row of 4 images or 2x2 grid. |
| **image-gallery-6** | 2x3 grid. |

**Example scenario:** Showcasing six global office locations with photos and city names.

---

## 9. Quote / Testimonial Slides

### 9.1 quote-centered

**Description:** Large quote text centered on the slide with attribution below.

**When to use:** Highlighting a key stakeholder quote, customer testimonial, expert insight, or memorable statement.

**Layout pattern:**
```
+------------------------------------------------------------------+
|                                                                  |
|                                                                  |
|            "This partnership has transformed our                 |
|             ability to serve customers at scale."                |
|                                                                  |
|             -- Jane Smith, CEO, Acme Corp                        |
|                                                                  |
|                                                                  |
+------------------------------------------------------------------+
```

**Visual hierarchy:** Quote text (24-32pt, often italic or a serif font), attribution (16-20pt, regular weight).

**Variants:**
| Variant | Description |
|---------|-------------|
| **quote-centered-light** | White background, dark text. |
| **quote-centered-dark** | Dark background, white text. More dramatic. |
| **quote-centered-image** | Background image with overlay. |
| **quote-centered-accent** | Large quotation mark graphic as visual accent. |

**Example scenario:** CEO testimonial from a client during a case study section.

---

### 9.2 quote-with-photo

**Description:** Quote paired with a headshot/photo of the person being quoted.

**When to use:** Customer testimonials, executive endorsements, expert citations where the person's identity adds credibility.

**Layout pattern:**
```
+------------------------------------------------------------------+
|                                                                  |
|  +------+                                                        |
|  | PHOTO|    "This partnership has transformed our               |
|  |      |     ability to serve customers at scale."              |
|  +------+                                                        |
|                                                                  |
|  Jane Smith                                                      |
|  CEO, Acme Corp                                                  |
|                                                                  |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **quote-with-photo-left** | Photo on left, quote on right. |
| **quote-with-photo-right** | Photo on right, quote on left. |
| **quote-with-photo-circle** | Circular cropped photo. |

**Example scenario:** Customer success story with a photo of the client's VP of Operations.

---

### 9.3 quote-multiple

**Description:** 2-3 quotes from different sources on a single slide.

**When to use:** Showing consensus or diverse perspectives. Multiple customer endorsements or stakeholder feedback.

**Layout pattern:**
```
+------------------------------------------------------------------+
|  Action Title: "Stakeholders consistently cite three benefits"   |
+------------------------------------------------------------------+
|                                                                  |
|  "Speed to market    |  "Cost savings       |  "Team morale     |
|   improved by 3x."  |   exceeded our        |   has never been   |
|                      |   expectations."      |   higher."         |
|   -- VP Eng          |   -- CFO              |   -- CHRO          |
|   [Photo]            |   [Photo]             |   [Photo]          |
|                                                                  |
+------------------------------------------------------------------+
```

**Example scenario:** Three executive testimonials validating the results of a transformation program.

---

## 10. Team / People Slides

### 10.1 team-grid

**Description:** Grid of team member photos with names, titles, and optionally brief bios.

**When to use:** Introducing the project team, advisory board, leadership team, or key stakeholders.

**Layout pattern:**
```
+------------------------------------------------------------------+
|  YOUR PROJECT TEAM                                               |
+------------------------------------------------------------------+
|                                                                  |
|  +------+    +------+    +------+    +------+                    |
|  |PHOTO |    |PHOTO |    |PHOTO |    |PHOTO |                    |
|  +------+    +------+    +------+    +------+                    |
|  Jane Doe    John Smith  Ana Lopez   Wei Chen                    |
|  Partner     Principal   Sr. Assoc.  Sr. Assoc.                  |
|  Strategy    Operations  Data/Analy  Technology                  |
|                                                                  |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **team-grid-3** | 3 team members. |
| **team-grid-4** | 4 team members (most common). |
| **team-grid-6** | 6 team members in 2x3 or 3x2 grid. |
| **team-grid-hierarchy** | One leader (larger) with team below (smaller). |
| **team-grid-bio** | Photos with 2-3 line bio per person. |

**Example scenario:** Introducing the consulting team at a project kickoff meeting.

---

### 10.2 team-org-chart

**Description:** Organizational chart showing reporting relationships and team structure.

**When to use:** Presenting organizational design recommendations, showing current structure, governance models.

**Layout pattern:**
```
+------------------------------------------------------------------+
|  Action Title: "Proposed organization centralizes data under     |
|  a new Chief Data Officer"                                       |
+------------------------------------------------------------------+
|                                                                  |
|                    [CEO]                                         |
|                      |                                           |
|          +-----------+-----------+                               |
|          |           |           |                               |
|        [CTO]      [CDO]       [COO]                             |
|          |         / | \         |                               |
|        [...]     /   |   \     [...]                            |
|              [Data] [AI] [Analytics]                             |
|                                                                  |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **team-org-chart-simple** | Boxes and lines, no photos. |
| **team-org-chart-photo** | Boxes with headshots. |
| **team-org-chart-highlighted** | New/changed roles highlighted in accent color. |

**Example scenario:** Recommended organizational restructuring as part of a transformation engagement.

---

## 11. Contact / CTA Slides

### 11.1 contact-thank-you

**Description:** Closing slide with thank-you message and contact information.

**When to use:** Final slide of any presentation. Provides contact details and invites follow-up.

**Layout pattern:**
```
+------------------------------------------------------------------+
|                                                                  |
|                                                                  |
|                    Thank You                                     |
|                                                                  |
|            Jane Doe, Partner                                     |
|            jane.doe@consulting.com                               |
|            +1 (555) 123-4567                                     |
|                                                                  |
|            [Company Logo]                                        |
|                                                                  |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **contact-thank-you-simple** | Thank you + one person's contact info. |
| **contact-thank-you-team** | Thank you + multiple team members' contacts. |
| **contact-thank-you-qr** | Includes QR code linking to a resource or calendar booking. |
| **contact-thank-you-cta** | Includes a specific call to action ("Schedule a follow-up by March 30"). |

**Example scenario:** Closing a board presentation with the lead partner's contact information.

---

### 11.2 contact-next-steps-cta

**Description:** Combined next steps and call to action slide. What happens after this presentation?

**When to use:** Presentations that require specific follow-up actions, decisions, or approvals.

**Layout pattern:**
```
+------------------------------------------------------------------+
|  NEXT STEPS                                                      |
+------------------------------------------------------------------+
|                                                                  |
|  Action Item              | Owner       | Due Date    | Status  |
|  -------------------------+-------------+-------------+-------  |
|  Approve budget           | CFO         | Apr 15      | Pending |
|  Finalize vendor shortlist| Procurement | Apr 22      | Pending |
|  Kick off Phase 1         | Project Lead| May 1       | Pending |
|  Report to Board          | CEO         | May 15      | Pending |
|                                                                  |
|  +------------------------------------------------------------+ |
|  | DECISION REQUESTED: Approve $1.8M budget for Phase 1       | |
|  +------------------------------------------------------------+ |
|                                                                  |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **contact-next-steps-table** | Action items in a table with owner and due date. |
| **contact-next-steps-numbered** | Numbered list of next steps. |
| **contact-next-steps-decision** | Specific decision request highlighted. |

**Example scenario:** Closing a strategy presentation with specific action items for each executive.

---

## 12. Summary / Takeaway Slides

### 12.1 summary-key-takeaways

**Description:** 3-5 numbered key findings or recommendations, each with a bold headline and supporting detail.

**When to use:** End of each major section and/or end of the full presentation. Reinforces the most important messages.

**Layout pattern:**
```
+------------------------------------------------------------------+
|  KEY TAKEAWAYS                                                   |
+------------------------------------------------------------------+
|                                                                  |
|  1  Market opportunity is larger than initially estimated        |
|     TAM of $50B by 2028, growing at 18% CAGR                   |
|                                                                  |
|  2  Current capabilities are insufficient for the target market  |
|     Gap analysis reveals 3 critical capability gaps              |
|                                                                  |
|  3  Build + partner hybrid approach is recommended               |
|     Best balance of speed, cost, and long-term positioning      |
|                                                                  |
|  4  Investment of $1.8M with expected 3.4x ROI over 3 years     |
|     Payback period of 14 months                                 |
|                                                                  |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **summary-key-takeaways-3** | 3 takeaways. |
| **summary-key-takeaways-4** | 4 takeaways. |
| **summary-key-takeaways-5** | 5 takeaways (maximum recommended). |
| **summary-key-takeaways-icon** | Each takeaway with a representative icon. |
| **summary-key-takeaways-card** | Each takeaway in a card-style box. |

**Example scenario:** Closing a strategy presentation with the four most important findings.

---

### 12.2 summary-recommendations

**Description:** Structured recommendations with priority, expected impact, and implementation details.

**When to use:** Presenting final recommendations to decision-makers. The "so what" of the entire engagement.

**Layout pattern:**
```
+------------------------------------------------------------------+
|  RECOMMENDATIONS                                                 |
+------------------------------------------------------------------+
|                                                                  |
|  PRIORITY 1: Launch direct-to-consumer channel                  |
|  Impact: +$15M revenue by 2028 | Investment: $2M | Timeline: 9mo|
|                                                                  |
|  PRIORITY 2: Restructure partner program                        |
|  Impact: +$8M revenue by 2028 | Investment: $500K | Timeline: 6mo|
|                                                                  |
|  PRIORITY 3: Implement dynamic pricing engine                   |
|  Impact: +$5M margin by 2028 | Investment: $1.2M | Timeline: 12mo|
|                                                                  |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **summary-recommendations-prioritized** | Numbered by priority with impact estimates. |
| **summary-recommendations-grid** | Recommendations in a grid with impact/effort/timeline columns. |
| **summary-recommendations-phased** | Recommendations grouped by implementation phase. |

**Example scenario:** Final recommendations slide in a growth strategy engagement.

---

### 12.3 summary-one-pager

**Description:** Dense, comprehensive single-slide summary of the entire presentation. Everything on one page.

**When to use:** For email distribution, executive pre-reads, or leave-behind documents where the recipient may not read the full deck.

**Layout pattern:**
```
+------------------------------------------------------------------+
|  [TITLE]                                              [Logo]     |
+------------------------------------------------------------------+
|  SITUATION          | KEY FINDINGS           | RECO              |
|  * Context 1        | 1. Finding with data   | 1. Action item    |
|  * Context 2        | 2. Finding with data   | 2. Action item    |
|  * Context 3        | 3. Finding with data   | 3. Action item    |
|---------------------+------------------------+------             |
|  KEY METRICS                   | NEXT STEPS                     |
|  $50B TAM | 18% CAGR | 3.4x ROI| * Approve budget (Apr 15)     |
|                                | * Kick off Phase 1 (May 1)    |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **summary-one-pager-landscape** | Standard landscape slide, densely packed. |
| **summary-one-pager-portrait** | Portrait A4 format for printing. |

**Example scenario:** A one-page executive summary for a CEO who wants to understand the full recommendation in 60 seconds.

---

## 13. Framework / Matrix Slides

### 13.1 framework-swot

**Description:** SWOT analysis in a 2x2 grid format with color-coded quadrants.

**When to use:** Strategic assessment of a company, product, market position, or initiative.

**Layout pattern:**
```
+------------------------------------------------------------------+
|  Action Title: "SWOT analysis reveals strong market position     |
|  but technology gaps"                                            |
+------------------------------------------------------------------+
|                                                                  |
|  STRENGTHS (green)        | WEAKNESSES (amber)                  |
|  * Brand recognition      | * Legacy technology                  |
|  * Market leadership      | * Talent retention                   |
|  * Distribution network   | * Limited digital capabilities       |
|  -------------------------+----------------------------          |
|  OPPORTUNITIES (blue)     | THREATS (red)                        |
|  * Adjacent markets       | * New market entrants                |
|  * Digital transformation | * Regulatory changes                 |
|  * M&A targets available  | * Commodity pricing pressure         |
|                                                                  |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **framework-swot-standard** | Classic 2x2 grid with bullet points. |
| **framework-swot-weighted** | Items ranked by importance within each quadrant. |
| **framework-swot-icon** | Icons per item. |

**Example scenario:** Competitive assessment of a client entering a new market.

---

### 13.2 framework-porter

**Description:** Porter's Five Forces diagram showing competitive dynamics.

**When to use:** Industry analysis, competitive landscape assessment, market attractiveness evaluation.

**Layout pattern:**
```
+------------------------------------------------------------------+
|  Action Title: "Industry attractiveness is moderate, with        |
|  strong buyer power as the key constraint"                       |
+------------------------------------------------------------------+
|                                                                  |
|                    [New Entrants]                                |
|                    Threat: Medium                                |
|                         |                                        |
|  [Suppliers]  ---  [Rivalry]  ---  [Buyers]                     |
|  Power: Low        Intensity:      Power: High                  |
|                    High                                          |
|                         |                                        |
|                    [Substitutes]                                 |
|                    Threat: Low                                   |
|                                                                  |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **framework-porter-standard** | Five forces diagram with ratings. |
| **framework-porter-detailed** | Each force with supporting bullet points. |
| **framework-porter-color** | Color-coded by threat/attractiveness level. |

**Example scenario:** Industry analysis for a private equity due diligence engagement.

---

### 13.3 framework-value-chain

**Description:** Horizontal value chain diagram showing primary and support activities.

**When to use:** Understanding where value is created, identifying cost reduction opportunities, capability mapping.

**Layout pattern:**
```
+------------------------------------------------------------------+
|  Action Title: "Operations and marketing are the primary         |
|  value drivers"                                                  |
+------------------------------------------------------------------+
|  SUPPORT ACTIVITIES                                              |
|  +------------------------------------------------------------+ |
|  | Infrastructure | HR Management | Technology | Procurement  | |
|  +------------------------------------------------------------+ |
|                                                                  |
|  PRIMARY ACTIVITIES                                              |
|  +----------+----------+-----------+----------+----------+       |
|  | Inbound  | Opera-   | Outbound  | Market-  | Service  |       |
|  | Logistics| tions    | Logistics | ing/Sales|          |       |
|  +----------+----------+-----------+----------+----------+       |
|                                                  --> MARGIN      |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **framework-value-chain-standard** | Classic Porter value chain. |
| **framework-value-chain-highlighted** | Key activities highlighted to show focus areas. |
| **framework-value-chain-annotated** | Activities annotated with cost percentages or performance data. |

**Example scenario:** Cost optimization analysis identifying which value chain activities have the most room for improvement.

---

### 13.4 framework-pillars

**Description:** 3-5 strategic pillars or capability areas shown as columns supporting a common goal.

**When to use:** Presenting a strategy with multiple reinforcing pillars, capability frameworks, or organizational design principles.

**Layout pattern:**
```
+------------------------------------------------------------------+
|  Action Title: "Growth strategy rests on three pillars"          |
+------------------------------------------------------------------+
|                                                                  |
|         +-----------------------------------------------+        |
|         |        STRATEGIC VISION / GOAL                |        |
|         +-----------------------------------------------+        |
|                                                                  |
|         +-----------+  +-----------+  +-----------+              |
|         |           |  |           |  |           |              |
|         | PILLAR 1  |  | PILLAR 2  |  | PILLAR 3  |              |
|         | Product   |  | Market    |  | Capability|              |
|         | Innovation|  | Expansion |  | Building  |              |
|         |           |  |           |  |           |              |
|         | - Item 1  |  | - Item 1  |  | - Item 1  |              |
|         | - Item 2  |  | - Item 2  |  | - Item 2  |              |
|         +-----------+  +-----------+  +-----------+              |
|                                                                  |
|         +-----------------------------------------------+        |
|         |          FOUNDATION / ENABLERS                |        |
|         +-----------------------------------------------+        |
|                                                                  |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **framework-pillars-3** | 3 pillars. |
| **framework-pillars-4** | 4 pillars. |
| **framework-pillars-5** | 5 pillars. |
| **framework-pillars-with-foundation** | Pillars sitting on a foundation bar. |

**Example scenario:** Presenting a three-pillar growth strategy for a consumer goods company.

---

## 14. Chart / Data Visualization Slides

### 14.1 chart-bar

**Description:** Bar or column chart comparing values across categories.

**When to use:** Comparing discrete categories (e.g., regions, products, time periods), ranking items, showing distributions.

**Variants:**
| Variant | Description |
|---------|-------------|
| **chart-bar-vertical** | Standard vertical column chart. |
| **chart-bar-horizontal** | Horizontal bar chart (better for long category labels). |
| **chart-bar-stacked** | Stacked bar showing composition. |
| **chart-bar-grouped** | Grouped/clustered bars comparing multiple series. |
| **chart-bar-highlight** | One bar highlighted in accent color, others in gray. |

**Example scenario:** Revenue by region for the past four quarters, with APAC highlighted as the growth driver.

---

### 14.2 chart-line

**Description:** Line chart showing trends over time.

**When to use:** Showing temporal trends, growth trajectories, performance over time, projections.

**Variants:**
| Variant | Description |
|---------|-------------|
| **chart-line-single** | Single line trend. |
| **chart-line-multi** | Multiple lines comparing trends. |
| **chart-line-projection** | Solid line for actual, dashed line for projected. |
| **chart-line-annotated** | Key inflection points annotated with callouts. |
| **chart-line-area** | Filled area chart variant. |

**Example scenario:** Five-year revenue projection with actual data through Q3 2026 and projected growth through 2028.

---

### 14.3 chart-waterfall

**Description:** Waterfall chart showing how an initial value changes through positive and negative contributions to reach a final value.

**When to use:** Revenue bridges, EBITDA walks, cost breakdowns, variance analysis. The "signature consulting chart."

**Layout pattern:**
```
+------------------------------------------------------------------+
|  Action Title: "EBITDA declined $2.1M driven by raw material     |
|  cost increases"                                                 |
+------------------------------------------------------------------+
|                                                                  |
|  $12.5M                                                         |
|  |====|                           +0.8M                         |
|       |-1.5M|                     |===|                         |
|              |-2.1M|         +0.5M     |-0.3M|                  |
|                    |+1.2M   |===|          |+0.5M| $11.6M      |
|                    |===|                        |  |====|       |
|                                                                  |
|  2025   Raw    Volume  Price  Mix   Other   FX   2026           |
|  EBITDA  Matl                                    EBITDA          |
|                                                                  |
+------------------------------------------------------------------+
```

**Variants:**
| Variant | Description |
|---------|-------------|
| **chart-waterfall-standard** | Start value, positive/negative contributions, end value. |
| **chart-waterfall-subtotals** | Includes intermediate subtotals. |
| **chart-waterfall-labeled** | Each bar labeled with value and percentage. |

**Example scenario:** EBITDA bridge from FY2025 to FY2026 showing each driver of change.

---

### 14.4 chart-pie-donut

**Description:** Pie or donut chart showing part-to-whole relationships.

**When to use:** Market share distribution, revenue mix, budget allocation. Use sparingly (max 5-6 segments).

**Variants:**
| Variant | Description |
|---------|-------------|
| **chart-pie-standard** | Classic pie chart with labels. |
| **chart-donut-standard** | Donut variant (often with a key metric in the center). |
| **chart-donut-hero** | Donut with a large metric in the center (e.g., "67% market share"). |
| **chart-pie-exploded** | One segment pulled out for emphasis. |

**Example scenario:** Market share distribution among top 5 competitors plus "Other."

---

### 14.5 chart-scatter-bubble

**Description:** Scatter plot or bubble chart showing relationships between two or three variables.

**When to use:** Correlation analysis, market mapping, portfolio positioning, competitive benchmarking.

**Variants:**
| Variant | Description |
|---------|-------------|
| **chart-scatter-standard** | X-Y scatter plot. |
| **chart-bubble-standard** | Scatter with bubble size as third dimension. |
| **chart-scatter-quadrant** | Scatter with quadrant lines and labels (combines with comparison-matrix). |
| **chart-scatter-labeled** | Key data points labeled with names. |

**Example scenario:** Competitive landscape mapped by market share (x) vs. growth rate (y) with revenue as bubble size.

---

### 14.6 chart-mekko

**Description:** Marimekko (Mekko) chart where both width and height encode data dimensions.

**When to use:** Market sizing, competitive landscape with share and size, segment analysis. A consulting staple.

**Variants:**
| Variant | Description |
|---------|-------------|
| **chart-mekko-standard** | Standard Marimekko with segment width and composition height. |
| **chart-mekko-labeled** | Labeled with values and percentages. |
| **chart-mekko-highlighted** | Target segment highlighted. |

**Example scenario:** Total addressable market by segment (width = segment size, height = competitive share distribution).

---

### 14.7 chart-table

**Description:** Formatted data table with headers, alignment, and optional conditional formatting.

**When to use:** When precise numbers matter more than visual trends. Financial summaries, detailed comparisons, specification tables.

**Variants:**
| Variant | Description |
|---------|-------------|
| **chart-table-simple** | Clean table with headers and data rows. |
| **chart-table-striped** | Alternating row background colors for readability. |
| **chart-table-heatmap** | Cell background color intensity varies by value. |
| **chart-table-financial** | Right-aligned numbers, proper formatting, totals row with border. |
| **chart-table-rag** | Cells color-coded with RAG status. |

**Example scenario:** Five-year financial projection table with revenue, COGS, gross margin, OPEX, and EBITDA.

---

## Summary: Complete Component Index

| # | Component ID | Category | Primary Use Case |
|---|-------------|----------|-----------------|
| 1 | title-hero | Title/Cover | Opening slide with maximum impact |
| 2 | title-internal | Title/Cover | Internal meeting title |
| 3 | section-numbered | Section Break | Transition between major sections |
| 4 | section-agenda-tracker | Section Break | Section transition with progress tracking |
| 5 | agenda-full | Agenda | Full presentation agenda |
| 6 | agenda-mini | Agenda | Compact sidebar agenda tracker |
| 7 | text-bullets | Text-Heavy | Structured bullet point content |
| 8 | text-two-column | Text-Heavy | Two-perspective content |
| 9 | text-callout-box | Text-Heavy | Key insight highlighted in box |
| 10 | text-executive-summary | Text-Heavy | SCR-structured executive summary |
| 11 | metrics-kpi-grid | Data/Metrics | Dashboard of 3-6 KPIs |
| 12 | metrics-single-hero | Data/Metrics | One big impactful number |
| 13 | metrics-scorecard | Data/Metrics | Performance vs. target tracking |
| 14 | comparison-table | Comparison | Multi-criteria option evaluation |
| 15 | comparison-matrix | Comparison | 2x2 quadrant analysis |
| 16 | comparison-before-after | Comparison | Current vs. future state |
| 17 | process-linear | Process/Timeline | Step-by-step methodology |
| 18 | process-circular | Process/Timeline | Continuous cycle/loop |
| 19 | timeline-roadmap | Process/Timeline | Project/implementation timeline |
| 20 | process-funnel | Process/Timeline | Conversion/pipeline funnel |
| 21 | image-fullbleed | Image-Focused | Full-screen image for impact |
| 22 | image-text-split | Image-Focused | Image paired with text content |
| 23 | image-gallery | Image-Focused | Multiple images in grid |
| 24 | quote-centered | Quote/Testimonial | Large centered quote |
| 25 | quote-with-photo | Quote/Testimonial | Quote with person's photo |
| 26 | quote-multiple | Quote/Testimonial | 2-3 quotes from different sources |
| 27 | team-grid | Team/People | Team member introductions |
| 28 | team-org-chart | Team/People | Organizational structure |
| 29 | contact-thank-you | Contact/CTA | Closing with contact info |
| 30 | contact-next-steps-cta | Contact/CTA | Action items and decisions |
| 31 | summary-key-takeaways | Summary/Takeaway | 3-5 key findings |
| 32 | summary-recommendations | Summary/Takeaway | Prioritized recommendations |
| 33 | summary-one-pager | Summary/Takeaway | Complete single-slide summary |
| 34 | framework-swot | Framework/Matrix | SWOT analysis grid |
| 35 | framework-porter | Framework/Matrix | Porter's Five Forces |
| 36 | framework-value-chain | Framework/Matrix | Value chain diagram |
| 37 | framework-pillars | Framework/Matrix | Strategic pillars |
| 38 | chart-bar | Chart/Data Viz | Category comparison |
| 39 | chart-line | Chart/Data Viz | Trend over time |
| 40 | chart-waterfall | Chart/Data Viz | Bridge/walk analysis |
| 41 | chart-pie-donut | Chart/Data Viz | Part-to-whole composition |
| 42 | chart-scatter-bubble | Chart/Data Viz | Multi-variable correlation |
| 43 | chart-mekko | Chart/Data Viz | Market sizing with share |
| 44 | chart-table | Chart/Data Viz | Formatted data table |

**Total: 44 components across 14 categories with 100+ variants.**

---

## Implementation Priority

### Phase 1: Core (Must-Have for MVP)
1. title-hero
2. section-numbered
3. agenda-full
4. text-bullets
5. text-two-column
6. text-executive-summary
7. metrics-kpi-grid
8. comparison-table
9. process-linear
10. timeline-roadmap
11. summary-key-takeaways
12. contact-thank-you
13. chart-bar
14. chart-line
15. chart-table

### Phase 2: Extended
16. metrics-single-hero
17. metrics-scorecard
18. comparison-matrix
19. comparison-before-after
20. process-funnel
21. framework-swot
22. framework-pillars
23. chart-waterfall
24. chart-pie-donut
25. image-text-split
26. quote-centered
27. summary-recommendations
28. contact-next-steps-cta

### Phase 3: Advanced
29-44. All remaining components including:
- image-fullbleed, image-gallery
- quote-with-photo, quote-multiple
- team-grid, team-org-chart
- framework-porter, framework-value-chain
- chart-scatter-bubble, chart-mekko
- summary-one-pager
- section-agenda-tracker, agenda-mini
- title-internal

---

## Sources

- [Slides Every Consultant Needs in Their Template Deck (PowerTools)](https://pptpowertools.com/slides-every-consultant-needs-in-their-template-deck/)
- [How McKinsey Consultants Make Presentations (Slideworks)](https://slideworks.io/resources/how-mckinsey-consultants-make-presentations)
- [100+ Strategy Consulting PowerPoint Templates (StrategyU)](https://www.strategyu.co/strategy-consulting-powerpoint-templates/)
- [Charts Done the McKinsey Way (Stratechi)](https://www.stratechi.com/business-charts/)
- [How to Craft Slides Like MBB Consultants (MConsultingPrep)](https://mconsultingprep.com/how-consultants-make-mbb-slides)
- [McKinsey Presentation Structure Guide (SlideModel)](https://slidemodel.com/mckinsey-presentation-structure/)
- [Timeline Slides with McKinsey, BCG and Bain Examples (Slideworks)](https://slideworks.io/resources/timeline-slides-mckinsey-bcg-bain-examples)
- [KPI Presentation Examples (ClearPoint Strategy)](https://www.clearpointstrategy.com/blog/kpi-presentation-examples)
- [How to Create McKinsey-Style Presentations 2026 Guide (SlideUpLift)](https://slideuplift.com/blog/mckinsey-style-presentation/)
- [Consulting Presentation Structure (Master RV Designers)](https://www.masterrvdesigners.com/blog/consulting-presentation-structure-powerpoint/)
- [Beautiful.ai Smart Slide Types](https://www.beautiful.ai/presentation-software)
- [600+ Real Consulting Presentations (Analyst Academy)](https://www.theanalystacademy.com/consulting-presentations/)
- [Deloitte Presentation Structure (SlideModel)](https://slidemodel.com/deloitte-presentation-structure/)
