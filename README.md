# Pocketbase starter

## Overview

Running Pocketbase version "pocketbase_0.22.9_linux_amd64"

For Pocketbase documentation go to [https://pocketbase.io/docs](https://pocketbase.io/docs)

## Running

- Run corresponding executable with `./pocketbase_[version] serve

## Developing hooks

- The JavaScript implementation has some [Caveats and limitations](https://pocketbase.io/docs/js-overview/#caveats-and-limitations)

- For [TypeScript declarations and code completion](https://pocketbase.io/docs/js-overview/#typescript-declarations-and-code-completion) you need to add the following to the top of your JS file: `<reference path="../pb_data/types.d.ts" />`

- On routes, avoid using the '/api/...' prefix. If you need it, add a prefix after it like in '/api/myapp/... This is to avoid collision.

## Docker

WIP: Need to create Docker compose that sets up the needed volumes and exposes the ports
