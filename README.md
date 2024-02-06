# Blockchain starter kit

**Welcome to the Blockchain Starter Kit! This repository serves as a foundation for kickstarting your blockchain development project. Whether you're a beginner or an experienced developer, this starter kit provides a solid starting point with essential tools and technologies.**

## Features

- **Smart Contract Development:** Utilizes `@nomicfoundation/hardhat-toolbox` and `hardhat` for efficient smart contract development.
- **Frontend Development:** Employs `React`, `Next.js`, `react-icons`, and other essential libraries for building a dynamic and interactive frontend interface.
- **Backend Development:** Implements `Express.js`, `MongoDB`, `mongoose`, and other necessary tools for creating a robust backend infrastructure.
- **Chain Configuration:** Incorporates `@axelar-network/axelar-chains-config` for configuring blockchain networks.
- **Authentication and Authorization:** Includes `express-jwt` and `jsonwebtoken` for secure authentication and authorization.
- **File Upload:** Utilizes `express-fileupload` for handling file uploads.
- **Database Management:** Integrates `MongoDB` for efficient data storage and retrieval.
- **Automatic Restart:** Utilizes `nodemon` for automatically restarting the server upon file changes during development.

## Prerequisites

Before getting started, ensure you have the following installed:

- Solidity
- Next.js
- Node.js and npm
- MongoDB
- Hardhat
- Express.js

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/shivam6862/blockchain-starter-kit
   ```

2. Navigate to the project directory:

   ```bash
   cd blockchain-starter-kit
   ```

3. Install dependencies for smart contract development:

   ```bash
   cd contract
   npm install
   ```

4. Install dependencies for frontend development:

   ```bash
   cd frontend
   npm install
   ```

5. Install dependencies for backend development:

   ```bash
   cd backend
   npm install
   ```

## Usage

- To start the frontend development server:

  ```bash
  cd frontend
  npm run dev
  ```

- To start the backend server:

  ```bash
  cd backend
  npm run start
  ```

- To compile smart contracts:

  ```bash
  npx hardhat compile
  npx hardhat node
  npx hardhat run scripts/deploy.js --network localhost
  npx hardhat test
  ```

## Configuration

- Update `.env` files in the contract, frontend and backend directories with your specific configuration settings.
- Modify blockchain network configurations in `hardhat.config.js`.
- Customize frontend and backend code according to your project requirements.

## About the dependencies

1. **viem**:

   - viem is a TypeScript interface for Ethereum that provides low-level stateless primitives for interacting with Ethereum. viem is focused on developer experience, stability, bundle size, and performance:
   - Developer experience Automatic type safety and inference, comprehensive documentation, composable APIs.
   - Stability Test suite runs against forked Ethereum networks, complete test coverage.
   - Bundle size Tree-shakable lightweight modules.
   - Performance Optimized encoding/parsing, async tasks only when necessary.

2. **wagmi**:

   - Description: wagmi is a collection of React Hooks containing everything you need to start working with Ethereum. wagmi makes it easy to "Connect Wallet," display ENS and balance information, sign messages, interact with contracts, and much more — all with caching, request deduplication, and persistence.

3. **Next.js**:

   - Description: A React framework for building server-rendered applications or static websites.
   - Advantages: Next.js simplifies React development by providing features like server-side rendering, automatic code splitting, and easy deployment, enhancing performance and SEO.

4. **rainbowkit**:

   - Description: RainbowKit is a React library that makes it easy to add wallet connection to your dapp. It's intuitive, responsive and customizable.
   - Advantages:
     - Wallet management: Out-of-the-box wallet management for your dapp. Aside from handling the connection and disconnection of wallets, - RainbowKit supports numerous wallets, swaps connection chains, resolves address to ENS, displays balance and much more!
     - Customizable: You can tweak the RainbowKit UI to match your branding. You can pick from a few pre-defined accent colors and border radius configurations. For more advanced use cases, you can provide in a fully custom theme, render your own button and omit certain features. Dark mode included.

5. **@axelar-network/axelar-chains-config**:

   - Description: A library for configuring and interacting with blockchain networks, possibly developed by Axelar Network.
   - Advantages: Axelar Chains Config simplifies the configuration and management of blockchain networks, providing developers with an efficient way to connect and interact with various blockchains within their applications.

6. **jsonwebtoken**:

   - Description: A library for generating, signing, and verifying JSON Web Tokens (JWT) for secure authentication and data exchange.
   - Advantages: JSON Web Tokens offer a secure and efficient method for implementing authentication and authorization in web applications, allowing for stateless authentication and preventing the need for server-side session storage.

7. **hardhat**:

   - Description: A development environment and toolchain for Ethereum smart contract development.
   - Advantages: Hardhat streamlines the process of writing, testing, and deploying Ethereum smart contracts, providing features like built-in support for testing frameworks, scriptable tasks, and automated deployment workflows, improving developer productivity and code quality.

8. **mongoose**:
   - Description: An object modeling tool for MongoDB and Node.js, designed to work with MongoDB documents.
   - Advantages: Mongoose simplifies interactions with MongoDB databases by providing a schema-based solution for data modeling and validation, along with built-in features like query building, middleware support, and data population, accelerating backend development and ensuring data integrity.

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues for any improvements, bug fixes, or feature requests.

Feel free to reach out if you have any questions or need further assistance! Happy coding! 🚀
