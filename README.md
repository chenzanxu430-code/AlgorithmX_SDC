# AI Skill Navigator

An AI-assisted career transition navigator for exploring skill changes, adjacent roles, and practical learning pathways.

- **Live prototype:** https://algorithm-xsdc-1.replit.app
- **Code repository:** https://github.com/chenzanxu430-code/AlgorithmX_SDC
- **Hackathon:** SDC Hackathon 2026 — Domain 1

## Project Overview

AI Skill Navigator helps users understand how their current skills and work tasks relate to changing job requirements. Users enter their current role, daily tasks, work experience, interests, and skills. The application provides a skills analysis, task-impact insights, adjacent-role suggestions, identified skill gaps, and a prioritised learning plan.

The prototype focuses on career-transition guidance. Its recommendations are directional and intended to support planning; they are not hiring probabilities or guarantees of employment.

## Problem

Job responsibilities and required skills change as industries adopt new technologies and work practices. People considering a career transition may find it difficult to identify which of their existing skills remain relevant, which skills they need to develop, and what roles could be realistic next steps.

## Solution

The prototype combines user-provided profile information with curated role and skill profiles and dated labour-market trend data. Its rule-based analysis maps tasks and skills to role requirements, highlights potential changes, and provides recommendations users can review and act on.

## Main Features

- Skills profile based on a user’s role, tasks, experience, interests, and skills
- Task-level insights about changing work requirements
- Adjacent-role recommendations
- Skill-gap identification
- Prioritised learning-plan suggestions
- English and Chinese interface

## How It Works

1. The user enters their role, daily tasks, experience, interests, and skills.
2. The React frontend communicates with the application backend using Axios.
3. The Node.js and Express backend applies rule-based analysis and accesses application data through Mongoose and MongoDB.
4. The backend returns the analysis results to the frontend.
5. The results show skill gaps, adjacent roles, and learning suggestions.

```text
User
  → React frontend
  → Axios request
  → Express backend on Node.js
  → Rule-based analysis and MongoDB access through Mongoose
  → Results displayed in the frontend
```

The prototype is hosted on Replit. Environment configuration is loaded with dotenv.

## Technology Stack

| Technology | Version | Purpose |
|---|---:|---|
| Node.js | 18.17.0 | Server-side JavaScript runtime |
| Express | 4.18.2 | Backend application endpoints |
| React | 18.2.0 | User interface |
| Axios | 1.6.0 | Frontend HTTP requests |
| Mongoose | 7.6.3 | MongoDB data access |
| dotenv | 16.3.1 | Environment configuration |

## Data Sources

The prototype uses manually reviewed public job-posting snapshots from JobStreet Malaysia. See the [JobStreet data source inventory](docs/data-sources.md) for the individual listing URLs.

Other published reference sources:

- [The Future of Jobs Report 2025 — World Economic Forum](https://www.weforum.org/publications/the-future-of-jobs-report-2025/)
- [Labour Force Statistics, August 2026 — Department of Statistics Malaysia](https://www.dosm.gov.my/portal-main/release-content/labour-force-statistics-aug2026)
- [Malaysia Digital Economy Blueprint](https://www.mydigital.gov.my/wp-content/uploads/2023/08/Malaysia-Digital-Economy-Blueprint_ENG.pdf)

The available job-posting snapshots are limited and may not represent the entire Malaysian labour market. Source dates and sample sizes should be considered when interpreting results.

## AI and Responsible Use

The running application does not call an external generative-AI model or third-party runtime API. Career analysis is produced using in-application rule-based logic and curated role, skill, and labour-market data.

Generative-AI tools were used during development and preparation of project materials, as disclosed in the Technical Tools Declaration. Team members reviewed and adapted AI-assisted outputs.

## Privacy

The prototype does not require users to log in and does not request names or email addresses. Users provide role-related information for analysis, which is processed by the application. A saved analysis session is kept in the user’s browser until the user clears the site data or replaces the saved session.

The application does not send user profiles to an external GenAI model or third-party runtime API. Do not enter sensitive personal information.

## Limitations

- Results are directional estimates, not hiring probabilities or employment guarantees.
- Role and skill profiles and the job-posting sample are limited.
- Public postings may contain source, sampling, or date-related bias.
- Job requirements may change after the source snapshots are collected.
- Broader role coverage and additional user testing are planned for future development.

## Product Demo

YouTube demonstration:https://youtu.be/HvcVy-fFXrw?si=8ZP2b6g-p6BP29ju

## Running the Project Locally

### Prerequisites

- Node.js 18.17.0
- pnpm compatible with the repository’s `package.json` or `pnpm-workspace.yaml`
- MongoDB connection details, if required by the local configuration

### Installation

```bash
pnpm install
```

Set the environment variables required by the application in a local `.env` file. Use the variable names referenced by the project code. Do not commit passwords, database credentials, API keys, or other secrets.

### Start the Application

```bash
pnpm run REPLACE_WITH_ACTUAL_SCRIPT
```

Replace `REPLACE_WITH_ACTUAL_SCRIPT` with the actual development script defined in the root `package.json`. See that file for the available scripts.

## Deployment

The live prototype is hosted on Replit:

https://algorithm-xsdc-1.replit.app

## License

This project is licensed under the Apache License 2.0. See the `LICENSE` file for details.
