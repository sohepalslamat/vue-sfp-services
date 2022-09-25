#!/bin/bash

# checkout to production branch
git checkout production

# build the project for demo
npm run build

# deploy production branch to github
gh-pages -b demo -d dist

# checkout to main branch
git checkout main
