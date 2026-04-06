Onboard a corporate brand as `brands/$ARGUMENTS/`.

1. Create `brands/$ARGUMENTS/` directory if it doesn't exist
2. Create `brands/$ARGUMENTS/input/` as the asset drop zone
3. Tell the user: "Brand workspace ready at `brands/$ARGUMENTS/`. Drop your brand assets (PowerPoint templates, PDFs, logos, style guides) into `brands/$ARGUMENTS/input/`, then say 'go' to start extraction."
4. When the user is ready, read `.claude/skills/build-presentation/SKILL.md` and follow the `onboard-brand` workflow.
