import { useState } from "react";
import Header from "./components/Header";
import MainInput from "./components/MainInput";
import TodoList from "./components/TodoList";
import { ITodo } from "./interfaces";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (title:string) => {
    const newTodo: ITodo = {
        title,
        body: ['2342343','4234234','423423423'],
        chacked:false,
        id: Date.now()
    }
    setTodos(prev => [newTodo,...prev])
}
  return (
    <>
      <Header />
      <MainInput addTodo = {addTodo} />
      <TodoList todos={todos}/>
    </>
  );
};

export default App;
