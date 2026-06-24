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
- **Domain**: `palantir.com`
- **Search Engine**: `G_us` (Google US)
- **Additional Fields** (Optional):
  - **Page**: `1`
  - **Size**: `10`

#### 2. Expected Output
The node returns an array of organic search competitors and their associated SEO metrics, which you can use directly in your workflow.

Example JSON output structure:
```json
[
  {
    "json": {
      "domain": "palantir.com",
      "favicon": "https://www.google.com/s2/favicons?domain=palantir.com",
      "all": {
        "currentValue": 8242,
        "dynamicValue": -220
      },
      "common": {
        "currentValue": 8053,
        "dynamicValue": 100
      },
      "visibility": {
        "currentValue": 0.2578,
        "dynamicValue": 0.24804999999999996
      },
      "missing": 0,
      "relevance": 100,
      "our_relevance": 100,
      "traff": 190009
    }
  },
  {
    "json": {
      "domain": "community.palantir.com",
      "favicon": "https://www.google.com/s2/favicons?domain=community.palantir.com",
      "all": {
        "currentValue": 353,
        "dynamicValue": null
      },
      "common": {
        "currentValue": 302,
        "dynamicValue": 3.75
      },
      "visibility": {
        "currentValue": null,
        "dynamicValue": null
      },
      "missing": 51,
      "relevance": 85.55,
      "our_relevance": 3.75,
      "traff": 0
    }
  },
  {
    "json": {
      "domain": "investors.palantir.com",
      "favicon": "https://www.google.com/s2/favicons?domain=investors.palantir.com",
      "all": {
        "currentValue": 439,
        "dynamicValue": null
      },
      "common": {
        "currentValue": 344,
        "dynamicValue": 4.27
      },
      "visibility": {
        "currentValue": null,
        "dynamicValue": null
      },
      "missing": 95,
      "relevance": 78.36,
      "our_relevance": 4.27,
      "traff": 0
    }
  },
  {
    "json": {
      "domain": "blog.palantir.com",
      "favicon": "https://www.google.com/s2/favicons?domain=blog.palantir.com",
      "all": {
        "currentValue": 562,
        "dynamicValue": null
      },
      "common": {
        "currentValue": 435,
        "dynamicValue": 5.4
      },
      "visibility": {
        "currentValue": null,
        "dynamicValue": null
      },
      "missing": 127,
      "relevance": 77.4,
      "our_relevance": 5.4,
      "traff": 0
    }
  },
  {
    "json": {
      "domain": "careers.snap.com",
      "favicon": "https://www.google.com/s2/favicons?domain=careers.snap.com",
      "all": {
        "currentValue": 4019,
        "dynamicValue": null
      },
      "common": {
        "currentValue": 242,
        "dynamicValue": 3.01
      },
      "visibility": {
        "currentValue": null,
        "dynamicValue": null
      },
      "missing": 3777,
      "relevance": 6.02,
      "our_relevance": 3.01,
      "traff": 0
    }
  },
  {
    "json": {
      "domain": "anduril.com",
      "favicon": "https://www.google.com/s2/favicons?domain=anduril.com",
      "all": {
        "currentValue": 7957,
        "dynamicValue": -510
      },
      "common": {
        "currentValue": 256,
        "dynamicValue": 3.18
      },
      "visibility": {
        "currentValue": 0.54487,
        "dynamicValue": -0.0047599999999999865
      },
      "missing": 7701,
      "relevance": 3.22,
      "our_relevance": 3.18,
      "traff": 49314
    }
  },
  {
    "json": {
      "domain": "spark.apache.org",
      "favicon": "https://www.google.com/s2/favicons?domain=spark.apache.org",
      "all": {
        "currentValue": 15046,
        "dynamicValue": -36
      },
      "common": {
        "currentValue": 388,
        "dynamicValue": 4.82
      },
      "visibility": {
        "currentValue": 0.07158,
        "dynamicValue": -0.17115
      },
      "missing": 14658,
      "relevance": 2.58,
      "our_relevance": 4.82,
      "traff": 121393
    }
  },
  {
    "json": {
      "domain": "databricks.com",
      "favicon": "https://www.google.com/s2/favicons?domain=databricks.com",
      "all": {
        "currentValue": 59807,
        "dynamicValue": -392
      },
      "common": {
        "currentValue": 1054,
        "dynamicValue": 13.09
      },
      "visibility": {
        "currentValue": 2.79894,
        "dynamicValue": -0.31820000000000004
      },
      "missing": 58753,
      "relevance": 1.76,
      "our_relevance": 13.09,
      "traff": 622654
    }
  },
  {
    "json": {
      "domain": "docs.databricks.com",
      "favicon": "https://www.google.com/s2/favicons?domain=docs.databricks.com",
      "all": {
        "currentValue": 22335,
        "dynamicValue": null
      },
      "common": {
        "currentValue": 347,
        "dynamicValue": 4.31
      },
      "visibility": {
        "currentValue": null,
        "dynamicValue": null
      },
      "missing": 21988,
      "relevance": 1.55,
      "our_relevance": 4.31,
      "traff": 0
    }
  },
  {
    "json": {
      "domain": "jobs.apple.com",
      "favicon": "https://www.google.com/s2/favicons?domain=jobs.apple.com",
      "all": {
        "currentValue": 23799,
        "dynamicValue": -1114
      },
      "common": {
        "currentValue": 294,
        "dynamicValue": 3.65
      },
      "visibility": {
        "currentValue": 2.94061,
        "dynamicValue": -0.26141000000000014
      },
      "missing": 23505,
      "relevance": 1.24,
      "our_relevance": 3.65,
      "traff": 992591
    }
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

