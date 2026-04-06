Build a new presentation in `projects/$ARGUMENTS/`.

1. Create `projects/$ARGUMENTS/` directory if it doesn't exist
2. Create `projects/$ARGUMENTS/input/` as the file drop zone
3. Tell the user: "Workspace ready at `projects/$ARGUMENTS/`. Drop any source files (notes, data, images, old decks) into `projects/$ARGUMENTS/input/`, then describe the presentation you want to build."
4. When the user describes their need, read `.claude/skills/build-presentation/SKILL.md` and follow the `build-new-deck` workflow.
