import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger";
import { Task } from "./types";

const app = express();
app.use(express.json());

let tasks: Task[] = [
  { id: 1, title: "Learn Swagger" },
  { id: 2, title: "Build API in TS" }
];

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get all tasks
 *     responses:
 *       200:
 *         description: A list of tasks
 */
app.get("/tasks", (req: Request, res: Response) => {
  res.json(tasks);
});

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Add a new task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *     responses:
 *       201:
 *         description: Task created
 */
app.post("/tasks/:id", (req: Request, res: Response) => {
  const newTask: Task = {
    id: tasks.length + 1,
    title: req.body.title
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Delete a task
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       204:
 *         description: Task deleted
 */
app.delete("/tasks/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== id);
  res.status(204).send();
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/api-docs`));
