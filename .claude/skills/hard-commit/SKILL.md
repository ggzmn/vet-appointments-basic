--- hard-commit
description: Create commit this one must contain new and deleted files.
---

## Current changes

git status

git diff --name-only --diff-filter=AD | xargs git add

/commit-commands:commit

## Instructions

Summarize all new and deleted files, then stage them and create a new commit.
