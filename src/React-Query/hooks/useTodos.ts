import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import todoService, { type Todo } from "../services/todoService";



const useTodos = () => {

  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: todoService.getAll,
    staleTime: 10 * 1000, // 10Sec - this is the time in milliseconds that the data will be considered fresh. During this time, the data will not be refetched when the component mounts or when the window is refocused. This can help to improve performance and reduce unnecessary network requests.
  });
};

export default useTodos;
