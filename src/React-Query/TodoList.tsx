import useTodos from "./hooks/useTodos";

const TodoList = () => {
  // we can use the useTodos hook to fetch the list of todos and handle the loading and error states in our component. The useQuery hook returns an object that contains the data, error, and isLoading properties, which we can use to manage the state of our component accordingly. 
  const {
    data: todos,
    error,
    isLoading,
  } = useTodos(); // This allows us to easily fetch and display the list of todos in our component, while also handling any potential errors or loading states that may occur during the fetching process.

  if (isLoading) return <p>Loading...</p>; // what this line does is it checks if the isLoading property is true, which indicates that the data is still being fetched. If it is true, it renders a loading message to inform the user that the data is being loaded. This helps to improve the user experience by providing feedback on the status of the data fetching process.

  if (error) return <p>{error.message}</p>; // This line checks to see if there is an error in fetching the data. If there is an error, it renders a paragraph element that displays the error message. This allows the user to understand what went wrong during the data fetching process and can help them troubleshoot the issue.

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
