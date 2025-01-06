import { useState } from "react";
import { Task } from "@/types/task";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EditTaskForm } from "./edit-task-form";
import { Draggable } from "@/components/ui/draggable";
import { deleteTaskAction } from "@/app/actions/taskFetcher";

type TaskCardProps = {
  task: Task;
  index: number;
};

export default function TaskCard({ task }: TaskCardProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    deleteTaskAction(task.id);
  };

  return (
    <Draggable id={task.id}>
      <Card className="bg-white">
        <CardContent className="p-4">
          {isEditing ? (
            <div data-no-dnd>
              <EditTaskForm task={task} onClose={() => setIsEditing(false)} />
            </div>
          ) : (
            <>
              <h3 className="font-semibold mb-2">{task.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{task.description}</p>
              <div className="flex justify-end space-x-2" data-no-dnd>
                <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                  Edit
                </Button>
                <Button variant="destructive" size="sm" onClick={handleDelete}>
                  Delete
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </Draggable>
  );
}
