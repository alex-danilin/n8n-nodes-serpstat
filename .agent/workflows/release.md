---
description: How to release a new version of the n8n-nodes-serpstat node
---

This workflow guides you through releasing a new version of the Serpstat n8n community node using the automated GitHub Actions pipeline.

### Prerequisites

- You must be on the `main` branch locally.
- Your working directory must be clean (no uncommitted changes).
- You must have push access to the GitHub repository.

### Release Steps

1. **Commit Outstanding Changes**
   Make sure all your fixes and updates are staged and committed before running the release.
   ```bash
   git add .
   git commit -m "fix: your commit message"
   ```

2. **Trigger the Local Release Script**
   Run the interactive release script:
   ```bash
   npm run release
   ```
   This script will:
   * Prompt you to select the version bump (patch, minor, major).
   * Compile and lint the code.
   * Update the version in `package.json`.
   * Create a Git commit and a version tag.
   * Push the commit and tag to GitHub.

3. **Verify GitHub Actions Publishing**
   Once the tag is pushed, it automatically triggers the **Publish Node** workflow in GitHub Actions:
   * Go to the **Actions** tab on your GitHub repository.
   * Verify that the workflow compiles, lints, and successfully publishes the package to npm with **provenance attestation** (OIDC Trusted Publishing).

4. **Verify on npm**
   Confirm that the new version is live at [npmjs.com/package/n8n-nodes-serpstat](https://www.npmjs.com/package/n8n-nodes-serpstat).
