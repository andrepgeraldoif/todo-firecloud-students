import { db } from '../firebase'
import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'
import './Todo.css'
const Todo = ({ arr }) => {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar />
                <ListItemText primary={arr.item.todo} secondary={arr.item.todo}/>
            </ListItem>
            <DeleteIcon  fontSize='large' onClick={() => {db.collection('todos').doc(arr.id).delete()}} />
        </List>
    )
}
export default Todo