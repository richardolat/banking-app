# GoldenCat Bank

GoldenCat Bank is a simple banking application that allows users to log in, create accounts, and perform basic banking operations like deposits and withdrawals. The app consists of a landing page, a React-based frontend, and a Spring Boot backend, deployed on an AWS EC2 instance using Docker and GitHub Actions for CI/CD.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
  - [Local Setup](#local-setup)
  - [Running the App Locally](#running-the-app-locally)
- [Deployment on AWS EC2](#deployment-on-aws-ec2)
  - [EC2 Setup](#ec2-setup)
  - [CI/CD with GitHub Actions](#cicd-with-github-actions)
- [Accessing the App](#accessing-the-app)
- [Testing](#testing)
- [License](#license)

## Features
- **Landing Page**: A static HTML/CSS page introducing GoldenCat Bank.
- **User Authentication**: Login with predefined credentials (`user`/`pass`).
- **Account Creation**: Create accounts with details like name, address, occupation, next of kin, BVN, and generate a unique account number.
- **Banking Operations**: Deposit and withdraw funds from accounts.
- **Dashboard**: View account details and perform banking activities.
- **CI/CD Pipeline**: Automated build, test, and deployment using GitHub Actions.
- **Deployment**: Hosted on an AWS EC2 instance using Docker containers.

## Project Structure
banking-app/
├── backend/                    # Spring Boot backend
│   ├── src/                    # Backend source code
│   ├── Dockerfile              # Docker configuration for backend
│   └── pom.xml                 # Maven configuration
├── frontend/                   # React frontend
│   ├── src/                    # Frontend source code
│   ├── public/                 # Static assets (e.g., index.html)
│   ├── Dockerfile              # Docker configuration for frontend
│   └── package.json            # Node.js dependencies
├── landing-page/               # Static landing page
│   ├── index.html              # Landing page HTML
│   ├── styles.css              # Landing page styles
│   └── assets/                 # Optional assets (e.g., logo)
├── .github/                    # GitHub Actions workflows
│   └── workflows/
│       ├── ci.yml              # CI pipeline (build, test)
│       └── cd.yml              # CD pipeline (deploy to EC2)
└── README.md                   # Project documentation

## Prerequisites
- **Node.js** and **npm**: For the frontend (`npm -v` to check).
- **Java 17** and **Maven**: For the backend (`java -version` and `mvn -v` to check).
- **Docker**: For containerization (`docker -v` to check).
- **AWS Account**: For EC2 deployment.
- **GitHub Account**: For CI/CD pipeline.
- **Git**: For version control (`git --version` to check).

## License
MIT License

Copyright (c) 2024 Richard Olatunde

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
