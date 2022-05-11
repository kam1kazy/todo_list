import React, {useState} from 'react'

// компонент принимает пропсы
export default function TodoForm(props) {
   const [input, setInput] = useState('')

   // событие отправки формы по нажатию кнопки
   const handleSubmit = (e) => {
      e.preventDefault()

      // передает значение input в функцию через пропсы
      props.addTodo(input)
      setInput('')
   }

   return (
      <form onSubmit={handleSubmit} className="todo-form">
         {/* onChange - изменяя input записываем его в состояние */}
         <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="todo-form__input"
            placeholder={"Add a ToDo"}
         />
         <button type={"submit"} className="todo-btn">+</button>
      </form>
   );
}