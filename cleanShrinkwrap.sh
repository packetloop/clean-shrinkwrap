#!/usr/bin/env bash

set -euo pipefail

SRC=$(pwd)
PKG=$(node -e 'console.log(require("./package.json").name)')

rm -rf /tmp/${PKG}
mkdir -p /tmp/${PKG}
cd /tmp/${PKG}

cp -R ${SRC}/node_modules /tmp/${PKG}/node_modules
cp ${SRC}/package.json /tmp/${PKG}/package.json
npm prune --production
npm shrinkwrap

cd ${SRC}
cp /tmp/${PKG}/npm-shrinkwrap.json ${SRC}/npm-shrinkwrap.json
node lib/bin.js
rm -rf /tmp/${PKG}
