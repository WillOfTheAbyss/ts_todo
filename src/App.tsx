import { useEffect, useState } from "react";
import Header from "./components/Header";
import MainInput from "./components/MainInput";
import TodoList from "./components/TodoList";
import { ITodo } from "./interfaces";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved) 
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]) 

  const addTodo = (title: string) => {
    const newTodo: ITodo = {
      title,
      chacked: false,
      id: Date.now(),
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const deletTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const toggleCheck = (id: number) => {
    setTodos(prev => prev.map(todo => {
      if(todo.id === id) {
        return {...todo, chacked:!todo.chacked}
      }
      return todo
    }))
  }

   return (
    <>
      <Header />
      <MainInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo = {deletTodo} toggleCheck = {toggleCheck}/>
    </>
  );
};

export default App;
