import { Card, Accordion, Button } from "react-bootstrap";
import { ITodo } from "../interfaces";
import TodoBody from "./TodoBody";

type TodoListProps = {
  todos: ITodo[];
};

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <Accordion>
      {todos.map((todo, i) => (
        <Card key={todo.id}>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey={`${i}`}
            >
              {todo.title}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={`${i}`}>
            <TodoBody todo = {todo} />
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
};

export default TodoList;
