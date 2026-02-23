import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  pageSize: number;
}

const usePosts = ({ pageSize }: PostQuery) =>
  useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", pageSize],
    queryFn: async ({ pageParam }) => {
      const currentPage = typeof pageParam === "number" ? pageParam : 1;

      const res = await axios.get<Post[]>(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _start: (currentPage - 1) * pageSize,
            _limit: pageSize,
          },
        },
      );

      return res.data;
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length < pageSize ? undefined : allPages.length + 1;
    },
    initialPageParam: 1,
  });

export default usePosts;
