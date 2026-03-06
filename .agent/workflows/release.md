---
description: How to release a new version of the n8n-nodes-serpstat node
---

This workflow guides you through releasing a new version of the Serpstat n8n community node.

### Prerequisites

- You must be logged into npm (`npm whoami`).
- You must have push access to the GitHub repository.

### Release Steps

1. **Clean and Build**
   Ensure the project builds correctly and the `dist` folder is fresh.

   ```bash
   npm run build
   ```

2. **Commit Changes**
   Stage and commit your fixes if you haven't already.

   ```bash
   git add .
   git commit -m "fix: itemIndex and dependency improvements"
   ```

3. **Bump Version**
   Increment the version and create a git tag.
   - For bug fixes: `npm version patch`
   - For new features: `npm version minor`
   - For breaking changes: `npm version major`

   ```bash
   npm version patch
   ```

4. **Push to Remote**
   Push the commit and the new tag to GitHub.

   ```bash
   git push origin --tags
   ```

5. **Publish to npm**
   Publish the package. This will automatically run `lint` and `build` via the `prepublishOnly` hook.
   ```bash
   npm publish
   ```
