import { getTodoAction } from "@/actions/todoActions";
import AddTodoForm from "@/components/AddTodoForm";
import TodoTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";
 
export default async function Home() {
  const { userId } = await auth();
  console.log(userId);
  const data = await getTodoAction({ userId });
   return (
    <main className="container m-auto">
      <div className="flex justify-end mb-3">
        <AddTodoForm userId={userId} />
      </div>
      <TodoTable data={data} />
    </main>
  );
}
