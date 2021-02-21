import { useState } from "react";
import { ITodo } from "../interfaces";

type MainInputProps = {
  addTodo: (title: string) => void;
};

const MainInput: React.FC<MainInputProps> = ({ addTodo }) => {
  const [title, setTitle] = useState<string>("");
  const [isEmpty, setEmpty] = useState<boolean>(false);
  const addHandler = () => {
    if(!title) {
      setEmpty(true)
    }else{
      setEmpty(false)
      addTodo(title)
      setTitle("")
    }
    
  };

  return (
    <section className="section-outer section-addTodo">
      <div className="section-inner">
        <div className="section-addTodo-form">
          <input
            type="text"
            className={`section-addTodo-form__input ${isEmpty ? 'no-valid': ''}`}
            value={title}
            placeholder={`${isEmpty ? "Нет названия" : 'Введите наименование задачи'}`}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <button
            className="section-addTodo-form__button"
            onClick={() => addHandler()}
          >
            Добавить
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainInput;
