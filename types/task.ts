export const taskTypes = ["TODO", "IN_PROGRESS", "DONE"];

export interface Task {
  id: string;
  title: string;
  description: string;
  status: (typeof taskTypes)[number];
  queue: number;
}

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Design UI",
    description: "Create wireframes and mockups",
    status: "todo",
    queue: 0,
  },
  {
    id: "2",
    title: "Implement backend",
    description: "Set up database and API",
    status: "inProgress",
    queue: 0,
  },
  {
    id: "3",
    title: "Write tests",
    description: "Create unit and integration tests",
    status: "todo",
    queue: 1,
  },
  {
    id: "4",
    title: "Deploy to production",
    description: "Set up CI/CD pipeline",
    status: "done",
    queue: 0,
  },
];
