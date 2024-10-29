import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ITodo } from "@/interfaces";
import { Badge } from "./ui/badge";
import TodoTableAction from "./TodoTableAction";

export default function TodoTable({ data }: { data: ITodo[] }) {
  return (
    <Table>
      <TableCaption>A list of your tasks.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Completed</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.length > 0 &&
          data.map((todo: ITodo, index: number) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{todo?.id}</TableCell>
              <TableCell>{todo?.title}</TableCell>
              <TableCell>{todo?.body}</TableCell>
              <TableCell>
                {todo?.done ? (
                  <Badge>Completed</Badge>
                ) : (
                  <Badge variant={"secondary"}>Not Completed</Badge>
                )}
              </TableCell>
              <TableCell className="flex items-center justify-end gap-3 ">
                <TodoTableAction todo={todo} />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">
            {data.length > 0 ? data.length : 0}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
