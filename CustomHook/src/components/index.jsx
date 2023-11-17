import { useState } from "react";
import useFetch from "../hooks/useFetch";
const Test = () => {
  const [todo, setTodo] = useState(null);
  const [status, setStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const url = "https://jsonplaceholder.typicode.com/todos";
  const handleApiData = (data) => {
      setTodo(data);
    //   console.log(data);
    //   setStatus(true);
  };
  useFetch(url, handleApiData);
  return (
    <div>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
    <h1>sa</h1>)
      }
    </div>
  );
};

export default Test;
