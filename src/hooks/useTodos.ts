import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  const fetchTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);

  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: 10 * 1000, // 10Sec - this is the time in milliseconds that the data will be considered fresh. During this time, the data will not be refetched when the component mounts or when the window is refocused. This can help to improve performance and reduce unnecessary network requests.
  });
};

export default useTodos;
