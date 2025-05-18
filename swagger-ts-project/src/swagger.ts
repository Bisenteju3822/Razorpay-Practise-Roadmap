import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task Manager API",
      version: "1.0.0",
      description: "A simple CRUD API documented with Swagger and written in TypeScript"
    }
  },
  apis: ["./src/index.ts"]
};

const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;
