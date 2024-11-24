# **Express-TypeScript Boilerplate**

A boilerplate for building scalable and robust RESTful APIs using **Express.js** and **TypeScript**.

## **Features**
- **Express.js** for fast and lightweight API development.
- **TypeScript** for strong typing and maintainability.
- Configurable environment variables with **dotenv**.
- Easy development setup with **nodemon** for live reloading.
- Production-ready build script.

---

## **Prerequisites**
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (>= 16.x)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## **Installation**
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd express-typescript
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## **Usage**

### **Development**
Run the app in development mode with live reloading:
```bash
npm run dev
```

### **Build**
Compile the TypeScript code to JavaScript:
```bash
npm run build
```

### **Run (Production)**
Run the compiled app:
```bash
npm start
```

### **Build and Run**
Build the app and immediately run the compiled version:
```bash
npm run build-and-run
```

---

## **Environment Variables**
Create an `.env` file in the project root, and use `env.example` as a template:
```bash
cp env.example .env
```

Update the variables as per your project requirements.

---

## **Scripts**

| Script                | Description                                        |
|------------------------|----------------------------------------------------|
| `npm run dev`         | Run the app in development mode with live reload.  |
| `npm run build`       | Compile TypeScript into JavaScript.                |
| `npm start`           | Run the production build.                          |
| `npm run build-and-run` | Build and run the compiled app.                  |

---

## **Project Structure**
```
express-typescript/
├── src/
│   ├── index.ts        # Main entry point of the application
│   └── ...             # Additional modules and routes
├── dist/               # Compiled JavaScript output
├── .env                # Environment variables (ignored in Git)
├── .env.example        # Template for environment variables
├── .gitignore          # Files and directories to ignore in Git
├── .dockerignore       # Files and directories to ignore in Docker
├── package.json        # Project metadata and dependencies
└── tsconfig.json       # TypeScript compiler configuration
```

---

## **Dependencies**
### Runtime
- **[express](https://expressjs.com/):** Web framework for Node.js.
- **[dotenv](https://github.com/motdotla/dotenv):** Load environment variables from `.env`.

### Development
- **[typescript](https://www.typescriptlang.org/):** Strongly typed programming language.
- **[@types/express](https://www.npmjs.com/package/@types/express):** TypeScript definitions for Express.
- **[@types/node](https://www.npmjs.com/package/@types/node):** TypeScript definitions for Node.js.
- **[nodemon](https://nodemon.io/):** Monitor changes and auto-restart the server.
- **[ts-node](https://typestrong.org/ts-node/):** TypeScript execution and REPL for Node.js.

---

## **Author**
Developed by **Pavan Kandivalasa**.

