# Workflow: Extract Theme from PPTX

Import corporate branding from a PowerPoint template file into the presentation builder's theme system.

<required_reading>
**Read this reference file NOW before proceeding:**

1. `references/theme-system.md` -- Token catalog, theme file structure, PPTX extraction, footer configuration
</required_reading>

<process>

## Step 1: Get PPTX File

Ask the user for:

1. **File path:** Where is the .pptx template file? (e.g., `~/Downloads/corporate-template.pptx`)
2. **Theme name:** What should the theme be called? (kebab-case, e.g., `acme-corp`, `deutsche-bank`)

Verify the file exists before proceeding.

## Step 2: Run Extraction

Execute the theme extraction tool:

```bash
node tools/extract-theme.js <path-to-file.pptx> --name "<theme-name>"
```

**Expected output:**
- `themes/{name}/theme.css` -- Extracted CSS custom property overrides
- Extracted logo images (if found in the PPTX)

If the extraction fails, check:
- Is the file a valid .pptx? (not .ppt or .key)
- Are optional dependencies installed? (`npm install` to get adm-zip and fast-xml-parser)

## Step 3: Review Extracted Theme

Read the generated `themes/{name}/theme.css` and check:

1. **Colors:** Are the extracted `--color-primary`, `--color-accent` etc. reasonable? Check contrast ratios.
2. **Fonts:** Is the extracted `--font-family-display` available on the web? If it is a system font or proprietary font, add a Google Fonts fallback or switch to Inter.
3. **Completeness:** Are all expected tokens present? Compare against `themes/default/theme.css`.

## Step 4: Adjust

Fine-tune tokens that commonly need manual override after extraction:

- **Font fallbacks:** Add web-safe fallbacks after the primary font
- **Shadow values:** PPTX shadows often need translation to CSS box-shadow syntax
- **Footer text:** Update the `presentationConfig` object for company name and confidentiality label
- **Logo:** Place company logo as SVG at `themes/{name}/logo.svg` (convert from PNG if needed)
- **Color contrast:** Ensure text-on-background meets WCAG AA (4.5:1 for body, 3:1 for large text)

## Step 5: Test

Apply the new theme to a quick test presentation:

1. Copy an existing presentation or create a minimal test with 3-4 different components
2. Link the new theme: `<link rel="stylesheet" href="themes/{name}/theme.css">`
3. Open in browser and verify:
   - Colors render correctly
   - Font loads (check Network tab)
   - Master layer shows logo
   - Dark variant works on section-break slides
   - All component types look professional with the new theme

If issues found, loop back to Step 4 to adjust tokens.

</process>
