import { useState } from "react";
import {
  InputGroup,
  Dropdown,
  DropdownButton,
  FormControl,
} from "react-bootstrap";
import { ITodo } from "../interfaces";

type MainInputProps = {
  addTodo: (title: string) => void;
};

const MainInput: React.FC<MainInputProps> = ({ addTodo }) => {
  const [title, setTitle] = useState<string>("");

  return (
    <InputGroup>
      <FormControl
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <DropdownButton
        as={InputGroup.Append}
        variant="outline-secondary"
        title="Dropdown"
        id="input-group-dropdown-2"
      >
        <Dropdown.Item
          onClick={() => {
            setTitle((prev) => "");
            addTodo(title);
          }}
        >
          Action
        </Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">Separated link</Dropdown.Item>
      </DropdownButton>
    </InputGroup>
  );
};

export default MainInput;
