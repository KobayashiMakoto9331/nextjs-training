import KanbanBoard from '@/components/kanaban-board';
import { mockTasks } from '@/types/task';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <KanbanBoard initialTasks={mockTasks} />
    </main>
  );
}

