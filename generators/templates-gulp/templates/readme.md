# Project

## Prerequisites
You need to have node.js and npm installed to build these templates.
These versions are tested and work:
- node 8.11.3
- npm 5.7.1

## Clean Code
Import company's code guidelines, if there are not any, set the editor to honour
them.
When the dust settles down, I am going to prepare documentation on how to do that.

## Install
Install dependencies with `npm run setup`.

## Available tasks
Command        | Description
--- | ---
`npm run dev`         | Gulp will spin local webserver and start watching for changes in source files. If they occur, it will run dev version of relevant tasks.
`npm run build`       | Clean distributing folder and generate assets for production with Gulp
`npm run build-watch` | Same as above, but also shows site in local webserver (useful for testing)
`npm run help`        | Show available tasks

### Tasks
Tasks are located in `/gulp/` folder.

## Source code
All the source files are in `frontend-src/` folder.

## Templates
Generated templates will be outputed in `frontend-dist/` folder, which should
not be versioned.
