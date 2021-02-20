import { Alert, Card, InputGroup, FormControl, Button } from "react-bootstrap";
import { ITodo } from "../interfaces";

type TodoBodyProps = {
    todo: ITodo;
};

const TodoBody: React.FC<TodoBodyProps> = ({ todo }) => {
  return (
    <>
      {todo.body.map((body) => (
        <Card.Body key={body}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <InputGroup.Text id="basic-addon3">
            {body}
            </InputGroup.Text>
            </InputGroup.Prepend>
            </InputGroup>
        </Card.Body>
      ))}
      <Card.Body>
      <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon3">
            Введите подзадачу :
            </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="basic-url" aria-describedby="basic-addon3" />
            <Button variant="success">Добавить</Button>
            </InputGroup>
      </Card.Body>
    </>
  );
};

export default TodoBody;
