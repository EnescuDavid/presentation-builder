Onboard a corporate brand as `brands/$ARGUMENTS/`.

FIRST, before saying anything, run this command using the Bash tool:

```bash
mkdir -p brands/$ARGUMENTS/input
```

THEN, after the directory exists, tell the user: "Brand workspace ready at `brands/$ARGUMENTS/`. Drop your brand assets (PowerPoint templates, PDFs, logos, style guides) into `brands/$ARGUMENTS/input/`, then say 'go' to start extraction."

When the user is ready, read `.claude/skills/build-presentation/SKILL.md` and follow the `onboard-brand` workflow.
