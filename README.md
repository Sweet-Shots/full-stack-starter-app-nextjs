# Full Stack Starter App with Next.js 🚀

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white) ![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=flat&logo=graphql&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white)

Welcome to the **Full Stack Starter App** based on **Next.js**. This project provides a modern template for rapid web application development. It combines a powerful frontend built with React and Next.js with a robust backend using GraphQL and Apollo Server. The monorepo structure makes it easy to manage both the frontend and backend components.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Releases](#releases)

## Features

- **Full-Stack Development**: Seamless integration of frontend and backend.
- **Monorepo Structure**: Simplifies project management.
- **GraphQL API**: Efficient data fetching with Apollo Server.
- **PostgreSQL Database**: Reliable and powerful database support.
- **TypeScript Support**: Enhanced code quality and developer experience.
- **Docker Ready**: Easy deployment with Docker and Docker Compose.
- **Linting and Formatting**: Pre-configured ESLint and Prettier for code consistency.

## Technologies Used

This project leverages a variety of technologies to ensure a smooth development experience:

- **Frontend**: 
  - React
  - Next.js
- **Backend**: 
  - GraphQL
  - Apollo Server
- **Database**: 
  - PostgreSQL
- **ORM**: 
  - Prisma
- **Package Manager**: 
  - pnpm
- **Development Tools**: 
  - ESLint
  - Prettier
- **Containerization**: 
  - Docker
  - Docker Compose
- **Environment Management**: 
  - dotenv

## Getting Started

To get started with the Full Stack Starter App, follow these steps:

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or higher)
- pnpm (recommended)
- Docker (for containerization)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sweet-Shots/full-stack-starter-app-nextjs.git
   ```

2. Navigate to the project directory:

   ```bash
   cd full-stack-starter-app-nextjs
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Set up your environment variables. Create a `.env` file in the root directory and add your configurations.

5. Run the development server:

   ```bash
   pnpm dev
   ```

Now you can access the application at `http://localhost:3000`.

## Project Structure

The project follows a monorepo structure. Here’s a brief overview of the directory layout:

```
full-stack-starter-app-nextjs/
├── apps/
│   ├── frontend/          # Next.js application
│   └── backend/           # Apollo Server application
├── packages/
│   ├── shared/            # Shared utilities and components
│   └── database/          # Database configurations and models
├── .env                   # Environment variables
├── docker-compose.yml     # Docker Compose configuration
└── README.md              # Project documentation
```

## Usage

### Running in Development Mode

To run both the frontend and backend in development mode, use:

```bash
pnpm dev
```

This command will start both applications and enable hot-reloading.

### Running in Production Mode

To build and run the application in production mode, follow these steps:

1. Build the applications:

   ```bash
   pnpm build
   ```

2. Start the applications:

   ```bash
   pnpm start
   ```

### Docker Setup

To run the application using Docker, ensure you have Docker installed and then execute:

```bash
docker-compose up
```

This command will build the Docker images and start the containers.

## Contributing

We welcome contributions to enhance the project. Here’s how you can contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch to your fork.
5. Create a pull request.

Please ensure your code adheres to the existing style and passes all tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Releases

You can find the latest releases of this project [here](https://github.com/Sweet-Shots/full-stack-starter-app-nextjs/releases). Please download and execute the files as needed.

For any updates or changes, always check the **Releases** section.

---

Feel free to explore the project and customize it to fit your needs. Happy coding!