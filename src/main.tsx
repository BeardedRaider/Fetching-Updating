import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.tsx";

const queryClient = new QueryClient(); // this is the client that we will use to manage our queries and cache. We can create a new instance of the QueryClient class and pass it as a prop to the QueryClientProvider component, which will make it available to all of our components that use the useQuery hook to fetch data and manage the cache.

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* // we wrap our app with the QueryClientProvider and pass the client as a prop so that we can use the useQuery hook in our components to fetch data and manage the cache */}
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
      {/* this is a devtool that allows us to see the state of our queries and the cache in our app */}
    </QueryClientProvider>
  </StrictMode>,
);
