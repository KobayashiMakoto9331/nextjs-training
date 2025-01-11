export const taskTypes = ["TODO", "IN_PROGRESS", "DONE"];

export interface Task {
  id: string;
  title: string;
  description: string;
  status: (typeof taskTypes)[number];
  queue?: number;
}
