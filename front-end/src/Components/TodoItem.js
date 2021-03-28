import React from 'react'
import { FormCheck, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../State/Actions/apiActions';
import { GET_TODOS, ADD_TODO, DELETE_TODO, CHECK_TODO } from '../State/Reducers/apiReducer';

export const TodoItem = ( props ) => {

    const {
        id,
        description,
        isComplete,
    } = props;

    const dispatch = useDispatch();

    const onCheck = ( e ) => {

        // const isChecked = e.target.checked;

        dispatch( GET_TODOS() );
    }

    const onDelete = () => {
        dispatch( deleteTodo( id ) );
    }

    return (
        <div>
            <div className='TodoItem' >
                <div style={{ display: 'flex', marginRight: '2%' }}>
                    <FormCheck 
                        type='checkbox'
                        onChange={ onCheck }
                        checked={ isComplete }
                    />
                    <div>{ description }</div>
                </div>
                <Button onClick={ onDelete } className='DeleteButton' variant='danger'>Delete</Button>
            </div>
            <hr/>
        </div>
    )
}
