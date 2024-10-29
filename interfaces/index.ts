export interface ITodo {
  id: string;
  title: string;
  body: string | null;
  done: boolean;
  user_id: string;
  createdAt: Date;
}
