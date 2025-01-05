"use client";

import { useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { Task, taskTypes } from "@/types/task";
import AddTaskForm from "@/components/add-task-form";
import Column from "./column";
import { Droppable } from "@/components/ui/droppable";

type KanbanBoardProps = {
  initialTasks: Task[];
};

export default function KanbanBoard({ initialTasks }: KanbanBoardProps) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const onDragEnd = (e: DragEndEvent) => {
    console.log(e);
    const { active, over } = e;
    if (!over) return;

    console.log(over);

    // TODO: queueの更新
    // const updateTask = tasks.find((task) => task.id === active.id);
    // if (updateTask) {
    //   const oldTasks = tasks.filter((task) => task.status === updateTask.status);
    //   const oldIndex = oldTasks.indexOf(active.id);
    //   const newIndex = oldTasks.indexOf(over.id);
    //   console.log(arrayMove(oldTasks, oldIndex, newIndex));
    // }

    // statusの更新
    const status: Task["status"] = String(over.id);
    const updateTasks = tasks.map((task) => (task.id === active.id ? { ...task, status } : task));

    setTasks(updateTasks);
  };

  const addTask = (newTask: Omit<Task, "id">) => {
    const id = Math.random().toString(36).substr(2, 9);
    setTasks([...tasks, { ...newTask, id }]);
  };

  const updateTask = (updatedTask: Task) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Kanban Board</h1>
      <AddTaskForm allTasks={tasks} onAddTask={addTask} />
      <DndContext id="builder-dnd" onDragEnd={onDragEnd}>
        <div className="flex space-x-4">
          {taskTypes.map((status) => (
            <Droppable key={status} id={status}>
              <Column
                title={status}
                tasks={tasks.filter((task) => task.status === status)}
                onUpdateTask={updateTask}
                onDeleteTask={deleteTask}
              />
            </Droppable>
          ))}
        </div>
      </DndContext>
    </div>
  );
}
