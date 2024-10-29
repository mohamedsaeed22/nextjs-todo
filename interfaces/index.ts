export interface ITodo {
  id: number;
  title: string;
  body?: string | null;
  done: boolean;
  createdAt?: Date;
}
