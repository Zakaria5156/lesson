#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
#git init
git add dist
git commit -m 'Updates'
#git push -f origin master:gh-pages
git subtree push --prefix dist origin gh-pages
cd -