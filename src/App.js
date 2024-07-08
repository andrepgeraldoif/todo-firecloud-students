import { useState,useEffect } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import Todo from './components/Todo';
import { db } from './firebase';
import firebase from 'firebase/compat/app';


function App() {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')
    useEffect(() => {
        db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
            setTodos(snapshot.docs.map(doc => ({
                    id: doc.id,
                    item: doc.data()
                })
            ))
        })
    }, [input])
    const addTodo = e => {
        e.preventDefault()
        db.collection('todos').add({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')
    }
    console.log(todos);
    return (
      <div className="App">
        <h1>TODO React Firestore</h1>
          <FormControl>
              <InputLabel>Escrever uma Tarefa</InputLabel>
              <Input value={input} onChange={e => setInput(e.target.value)}/>
          </FormControl>
          <Button type="submit" onClick={addTodo} variant="contained" color="primary" disabled={!input}>Adicionar Tarefa</Button>
          <ul>
              {todos.map(it => <Todo key={it.id} arr={it} />)}
          </ul>
      </div>
    );
}

export default App;