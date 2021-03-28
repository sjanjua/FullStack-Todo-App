import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { GET_TODOS, ADD_TODO, DELETE_TODO } from '../actionTypes';
import { GetTodos, AddTodo, DeleteTodo, CheckTodo, fetchTodos, deleteTodo } from '../Actions/apiActions';

export const initialState = {

    todoItems: [
        // {
        //     id: 0,
        //     label: 'Walk the dog Walk the dog Walk the dog Walk the dog Walk the dog Walk the dog Walk the dog Walk the dog Walk the dog Walk the dog Walk the dog Walk the dog Walk the dog Walk the dog Walk the dog' ,
        //     isComplete: true,
        // },
        // {
        //     id: 1,
        //     label: 'Take out trash',
        //     isComplete: false,
        // },
        // {
        //     id: 2,
        //     label: 'Clean car',
        //     isComplete: false,
        // }
    ],
    isLoading: false,
}

export const apiSlice = createSlice({

    name: 'api',
    initialState: initialState,
    reducers: {

        GET_TODOS:   GetTodos,
        ADD_TODO:    AddTodo,
        DELETE_TODO: DeleteTodo,
        CHECK_TODO:  CheckTodo,
    },
    extraReducers: ( builder ) => {
        builder
            .addCase( fetchTodos.fulfilled, ( state, action ) => {
                return {
                    ...state,
                    todoItems: action.payload
                }
            })
            .addCase( deleteTodo.fulfilled, ( state, action ) => {
                return {
                    ...state,
                    todoItems: action.payload
                }
            })
    }
});

export const { GET_TODOS, ADD_TODO, DELETE_TODO, CHECK_TODO } = apiSlice.actions;
export const apiReducer = apiSlice.reducer;