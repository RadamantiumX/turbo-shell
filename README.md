# Turbo Shell

## Table of Contents

- [Turbo Shell](#turbo-shell)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Context](#context)
  - [Usage](#usage)

## Installation

```bash
npm i
```

## Context

Working with Monorepo (like _Turborepo_), it's a gratificant experience. The code sharing and the unified dependencies management can boost the team productivity. The Backend and the Client in the same folder looks very easy to integrate any change and see what happen in the other side. Thus, this isn't a improve for that, it's only a simply wat to install dependencies and avoid (sometimes) the large CLI sentences.

## Usage

After install ***Turbo Shell***, update your ***package.json***, on the scripts property:

```json
"scripts":{
  "pkg": "turbo-shell"
}
```

Run in the terminal the ***Turbo shell*** CLI:

```bash
npm run pkg
```
The interface proceed to ask five question:

- The workspace folder to install the required dependency. ***Turbo shell***  will detect all workspaces on your mono-repo.
- The package manager (***npm, pnpm or yarn***).
- The current dependency/es to install (only the name, eg: ***tsup***).
- If it's a ***Dev*** dependency (yes or no).
- The final confirmation to install.

