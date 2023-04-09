import { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text.trim());
    setText('');
  };

  return (
    <form className={styles.form} action="" onSubmit={onSubmitHandler}>
      <input
        className={styles.input}
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
        placeholder="Enter new todo"
      />
      <Button className={styles.btnSubmit} title="Submit" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default TodoForm;
