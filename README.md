# TS-Worker

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Code Quality](https://img.shields.io/github/workflow/status/K-FOSS/TS-Worker/Testing?label=Tests&style=flat-square)](https://github.com/K-FOSS/TS-Worker/actions?query=workflow%3ATesting)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![Libraries.io dependency status for latest release, scoped npm package](https://img.shields.io/librariesio/release/npm/@k-foss/ts-worker)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Dependabot](https://badgen.net/badge/Dependabot/enabled/green?icon=dependabot)](https://dependabot.com/)

@K-FOSS/TS-Worker is a few small utilities for working with Threads and Workers in JS/TS/Node.JS

## Usage

**This is an ESModule and requires Node.JS 13.9 or newer**

Install the module

```
npm install @k-foss/ts-worker
```

Checkout [examples/TalkingWorker](./Examples/TalkingWorker)

## Development

### Setting up the development container

Follow these steps to open this project in a container:

1. If this is your first time using a development container, please follow the [getting started steps](https://aka.ms/vscode-remote/containers/getting-started).

2. To use this repository, you can either open the repository in an isolated Docker volume:

   - Press <kbd>F1</kbd> and select the **Remote-Containers: Open Repository in Container...** command.
   - Enter `K-FOSS/TS-Worker`
   - The VS Code window (instance) will reload, clone the source code, and start building the dev container. A progress notification provides status updates.

   Or open a locally cloned copy of the code:

   - Clone this repository to your local filesystem.
     - `git clone https://github.com/K-FOSS/TS-Worker.git`
   - Open the project folder in Visual Studio Code.
     - `code ./TS-Worker`
   - Reopen in Container

     - When you open the project folder in Visual Studio Code you should be prompted with a notification asking if you would like to reopen in container.

     Or manually reopen

     - Press F1 and select the "Remote-Containers: Open Folder in Container..." command.

#### TODO

TBD

### Testing

**MUST HAVE NODE.JS v13.9 or newer**

To try this out, clone repo

Install NPM modules

```
npm install
```

Run all tests under [`./Testing/Tests/`](./Testing/Tests/)

```
npm test
```

All tests are run on all commits and PRs.

### Style

This project currently uses Prettier for code styling and automatic formatting. Prettier is run on every commit and pull request.

Run Prettier

```
npm run prettier
```

### Linting

This project currently uses ESLint for code linting. ESLint is run on every commits and pull request.

Run ESLint

```
npm run lint
```

### Dependency Management

Dependency Management for TS-Worker is handled by automated pull requests created by [Dependabot](https://github.com/marketplace/dependabot-preview). When new released of development Dependencies are released Dependabot automatically creates a pull request for upgrading to the new version. If the created pull request passes the GitHub Actions testing, prettier/styling, and linting I will merge the pull request.

### Releases

@K-FOSS/TS-Worker uses [semantic-release](https://github.com/semantic-release/semantic-release) to intelligently automate the creation of a changelog, automatic package publish to NPM, along with creating a GitHub release and tag.

Semantic-Release is currently configured to analyze commits with the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) preset to determine if and how the package version should be incremented and if a release should be published, which is why it is important to mantain the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) spec for all commits.
