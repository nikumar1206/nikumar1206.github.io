# Migrating JS Apps to Bun: A Series

[Bun 1.0](https://bun.sh/) has finally arrived! Bun is a fast, all-in-one toolkit for running, building, and testing JS/TS applications. Although it has only been available for two days, and is still yet to be battle-tested, what better way to test a new JS framework than deploying it in production!

This article will guide you through deploying an existing Vite app to GitHub Pages using Bun.js. This is great for migrating your personal websites over to Bun, and gaining some experience with the new technology!

Before continuing to the rest of the article, please make sure you have the latest version of Bun installed on your system. You can check the version with the command `bun -v`. If not please follow the directions [here](https://bun.sh/docs/installation).

### Re-install Local Dependencies

We will no longer be using NPM to install our packages. Therefore, we will clean up our existing installed packages and let Bun do it instead:

```bash
rm -rf node_modules/
bun install
```

If everything went well, you should now have a `bun.lockb` and a resurrected `node_modules` directory in your root folder. Note, we can also update our local npm run dev command to use bun instead with `"dev": "bunx --bun vite"`, but I've found this to perform much more slowly than simply using the default, so we will keep it that way.

### Setup Github Actions

Github Actions is the simplest way to deploy code to Github. Let's start off by creating a deployment configuration file using the following commands:

```bash
mkdir -p .github/workflows
cd .github/workflows
touch main.yml
```

I've posted a sample main.yml below. This will trigger on every Github push on the main branch, so please configure accordingly!

```yaml
# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["main"]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets the GITHUB_TOKEN permissions to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow one concurrent deployment
concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  # Single deploy job since we're just deploying
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Set up Bun
        uses: oven-sh/setup-bun@v1
        with:
          bun-version: latest
      - name: Install dependencies
        run: bun install
      - name: Build
        run: bunx --bun vite build
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          # Upload dist repository
          path: "./build"
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```

And that is it, your Bun-Vite App is now ready to deploy!

Next time, we will take a look at deploying a backend application written in Bun (where Bun truly shines) with Fly.io and Docker.
