#!/bin/bash

BRANCH="gh-pages"
git branch -D ${BRANCH}
git subtree split --prefix dist -b ${BRANCH}
git push --force origin ${BRANCH}