# SecureCart — E-Commerce Security Analysis & Architecture

SecureCart is a Node.js and Express backend application integrated with MySQL, designed to analyze web security vulnerabilities—specifically focusing on SQL Injection (SQLi) patterns, authentication safety, and environment credential management.

The project features dual architecture capabilities: support for AWS cloud deployment (EC2 and RDS MySQL) and a clean, local-first repository setup optimized for local development, security testing, and auditing.

---

##  System Architecture & Workflow Diagram

The diagram below details the AWS cloud deployment topology alongside the local development setup and runtime authentication security workflow:

<img width="1024" height="559" alt="image" src="https://github.com/user-attachments/assets/a74519f4-69dc-4f86-af4a-37cb7f8ecafe" />


---

## 📂 Repository Structure

```text
SecureCartApp/
├── screenshots/                  # AWS infrastructure & local verification logs
│   ├── 01-rds-summary.png
│   ├── 02-rds-connectivity-endpoint.png
│   ├── 03-rds-configuration-details.png
│   ├── 04-ec2-instance-summary.png
│   ├── 05-security-group-inbound-rules.png
│   ├── 06-local-project-files.png
│   ├── 07-local-git-status.png
│   ├── 08-local-api-test.png
│   └── securecart_diagrams.png   # System architecture & security workflow graphic
├── .gitignore                    # Excludes node_modules, .env, and system files
├── .env.example                  # Environment variable reference template
├── db.js                         # Database connection pool configuration
├── package.json                  # Node.js project dependencies
├── server.js                     # Main Express server application
└── README.md                     # Project documentation
