#!/bin/bash

# checkout to production branch
git checkout production

# build the project for demo
npm run build

# checkout to main branch
git checkout main

# deploy production branch to github
gh-pages -b production -d dist


# production branch for demo:
#  - any changes in demo will be in thi branch
#  - no push no pull from origin in this branch
#  - 
# main branch for package in npm 
#  - any changes will be for package
#  - build in this branch after that npm publish to deploy it to npm