# n8n-nodes-serpstat

This is an n8n community node. It lets you use Serpstat in your n8n workflows.

[Serpstat](https://serpstat.com/) is AI-based SEO platform used for competitive intelligence, keyword and backlinks research, tracking keyword rankings, SEO audits, and managing SEO tasks.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)   
[Compatibility](#compatibility)  
[Usage](#usage)  
[Resources](#resources)  
[Version history](#version-history)  

## Installation

To install this node in your n8n instance:

1. Go to **Settings > Community Nodes**.
2. Click **Install a node**.
3. Enter `n8n-nodes-serpstat` as the **npm Package Name**.
4. Agree to the terms and click **Install**.

For more details, see the [n8n community nodes installation guide](https://docs.n8n.io/integrations/community-nodes/installation/).

## Operations

[Domain competitors](https://api-docs.serpstat.com/docs/serpstat-public-api/qzd94b49vdkyb-get-organic-competitors-page)

## Credentials

You need a Serpstat API token to use this node. You can test Serpstat API with a [free trial](https://serpstat.com/page/free-trial/). 
Consider purchasing Serpstat [subscription plans](https://serpstat.com/pay/) to increase data volume.
For heavy API usage, we offer special API plans. [Contact us](https://data.serpstat.com/#contact-us) for the details.
After you get access to the Serpstat API, create a new token in your [user profile](https://serpstat.com/users/profile/).

## Compatibility

Compatible with n8n version 1.105.3 or higher.

## Usage

Each user can have only one API token. There are no sandboxes, test endpoints, or any other test environment.
During the testing phase, limit the data size by using the Page and Size optional fields. This way, you can test your workflows without burning all API credits. 
If you are not familiar with n8n, check [quickstart guides](https://docs.n8n.io/try-it-out/).

### Usage Example: Get Organic Competitors

Here is a worked example showing how to configure the node to get organic search competitors for a domain.

#### 1. Configure Node Parameters
- **Resource**: `Domain`
- **Operation**: `Get Organic Competitors`
- **Domain**: `serpstat.com` (or any domain you wish to analyze)
- **Search Engine**: `G_us` (Google US)
- **Additional Fields** (Optional):
  - **Page**: `1`
  - **Size**: `2` (Limits the returned items to 2 to conserve API credits)

#### 2. Expected Output
The node returns an array of organic search competitors and their associated SEO metrics, which you can use directly in your workflow.

Example JSON output structure:
```json
[
  {
    "domain": "semrush.com",
    "competitor_rank": 1,
    "common_keywords": 4512,
    "out_of_search": 12450,
    "relevance": 54.32,
    "visibility": 85.1
  },
  {
    "domain": "ahrefs.com",
    "competitor_rank": 2,
    "common_keywords": 4120,
    "out_of_search": 15120,
    "relevance": 48.15,
    "visibility": 79.4
  }
]
```

## Development

### Setup
Install dependencies:
```bash
npm install --legacy-peer-deps
```

### Commands
* `npm run build`: Compile the node files and build icons.
* `npm run dev`: Build and watch for code changes.
* `npm run lint`: Lint the codebase.
* `npm run release`: Interactive CLI to bump versions and release a new tag (triggers GitHub Actions publication).

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [Serpstat API documentation](https://api-docs.serpstat.com/docs/serpstat-public-api/jenasqbwtxdlr-introduction-to-serpstat-api)

## Version history

0.1.0 - added domain competitors data collection.

