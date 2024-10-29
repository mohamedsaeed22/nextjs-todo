import { getTodoAction } from "@/actions/todoActions";
import AddTodoForm from "@/components/AddTodoForm";
import TodoTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";
import { use } from "react";

export default async function Home() {
  const { userId } = await auth();
  console.log(userId);
  const todos = await getTodoAction({ userId });
  return (
    <main className="container m-auto">
      <div className="flex justify-end mb-3">
        <AddTodoForm userId={userId} />
      </div>
      <TodoTable todos={todos} />
    </main>
  );
}
