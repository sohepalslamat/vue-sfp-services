#!/bin/bash

# checkout to production branch
git checkout production

# build the project for demo
npm run build

# checkout to main branch
git checkout main

# deploy production branch to github
gh-pages -b production -d dist
