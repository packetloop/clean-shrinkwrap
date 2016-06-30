# packetloop-node-clean-shrinkwrap
Script to cleanup npm-shrinkwrap.json to be always consistent for each run of npm shrinkwrap and minimize git diffs

## Installation

```sh
npm install --global @packetloop/node-clean-shrinkwrap
```

## Usage

```sh
packetloop-node-clean-shrinkwrap ./npm-shrinkwrap.json ./npm-shrinkwrap.clean.json
```

Following script creates a clean `npm-shrinkwrap.json` file with production-only dependencies
```sh
packetloop-node-clean-shrinkwrap-production
```
