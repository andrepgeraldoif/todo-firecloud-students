import { useState } from 'react';
import './App.css';
function App() {
    const [todos, setTodos] = useState([
        'Criar um projeto no firebase',
        'Não esquecer de gravar as etapas'
    ])
    const [input, setInput] = useState('')
    const addTodo = e => {
        e.preventDefault()
        setTodos([...todos, input])
        setInput('')
    }
    return (
      <div className="App">
        <h1>TODO React Firestore</h1>
          <form>
              <input value={input} onChange={e => setInput(e.target.value)}/>
              <button type="submit" onClick={addTodo}>Adicionar Todo</button>
          </form>
          <ul>
              {todos.map(todo => <li>{todo}</li>)}
          </ul>
      </div>
    );
}

export default App;