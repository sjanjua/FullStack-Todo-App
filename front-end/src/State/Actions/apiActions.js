import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const GetTodos = async ( state ) => {

    let payload;

    await axios.get( 'https://localhost:44386/api/TodoItems' )
        .then( response => response )
        .then( data => {
            payload = data.data;
        });

    console.log( payload );

    return {
        ...state,
        todoItems: payload,
    }
}

export const fetchTodos = createAsyncThunk( 'todos/fetchTodos', async () => {
    
    let payload;

    await axios.get( 'https://localhost:44386/api/TodoItems' )
        .then( response => response )
        .then( data => {
            payload = data.data;
        });

    return payload;
});

export const deleteTodo = createAsyncThunk( 'todos/deleteTodo', async ( id ) => {
    
    let payload;

    await axios.delete( `https://localhost:44386/api/TodoItems/${id}` )
        .then( response => response )
        .then( data => {
            payload = data.data;
        });

    return payload;
});

export const AddTodo = ( state, description ) => {

    // POST
    console.log( 'add todo' );
}

export const DeleteTodo = ( state, id ) => {

    // DELETE
    console.log( 'delete todo' );
}

export const CheckTodo = ( state, id ) => {

    console.log( 'check todo' );
}