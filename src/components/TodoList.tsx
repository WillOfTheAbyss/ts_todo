import { ITodo } from "../interfaces";
import TodoBody from "./TodoBody";

type TodoListProps = {
  todos: ITodo[];
  deleteTodo: (id: number) => void;
  toggleCheck:(id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo, toggleCheck }) => {
  
  const getData = (date: number) => {
    const txtDate = new Date(date);
    return `${txtDate.getDate()}/${
      txtDate.getMonth() + 1
    }/${txtDate.getFullYear()}`;
  };

  return (
    <section className="section-outer section-list">
      <div className="section-inner">
        {todos.map((todo) => (
          <div className="section-list-todo" key={todo.id}>
            <div className="section-list-todo-input">
              <input
                type="checkbox"
                checked = {todo.chacked}
                className="section-list-todo-input__chbox"
                id={`${todo.id}`}
                onChange = {() => toggleCheck(todo.id)}
              />
              <span className="check "></span>
              <label
                htmlFor={`${todo.id}`}
                className="section-list-todo-input__title"
              >
                {todo.title}
              </label>
            </div>
            <div className="section-list-todo-info">
              <span className="section-list-todo-info__time">
                {getData(todo.id)}
              </span>
              <i
                className="section-list-todo-info__delete material-icons"
                onClick={() => deleteTodo(todo.id)}
              >
                delete
              </i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TodoList;
