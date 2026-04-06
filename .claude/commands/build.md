Build a new presentation in `projects/$ARGUMENTS/`.

FIRST, before saying anything, run this command using the Bash tool:

```bash
mkdir -p projects/$ARGUMENTS/input
```

THEN, after the directory exists, tell the user: "Workspace ready at `projects/$ARGUMENTS/`. Drop any source files (notes, data, images, old decks) into `projects/$ARGUMENTS/input/`, then describe the presentation you want to build."

When the user describes their need, read `.claude/skills/build-presentation/SKILL.md` and follow the `build-new-deck` workflow.
