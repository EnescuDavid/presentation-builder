Refine an existing presentation in `projects/$ARGUMENTS/`.

1. Verify `projects/$ARGUMENTS/presentation.html` exists. If not, tell the user no deck was found and suggest `/build $ARGUMENTS` instead.
2. Read `projects/$ARGUMENTS/presentation.html` and `projects/$ARGUMENTS/deck-plan.md` to understand the current deck.
3. Ask the user: "What would you like to change?"
4. When the user describes their change, read `.claude/skills/build-presentation/SKILL.md` and follow the `refine-deck` workflow.
