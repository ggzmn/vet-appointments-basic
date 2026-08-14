--- simple commit
description: Create new commit, this one  must contain all changes except new files.
---

## Current changes

git status

git diff --name-only --diff-filter=M | xargs git add

/commit-commands:commit

## Instructions

Summarize all changes except new and deleted files, then stage them and create a new commit.
