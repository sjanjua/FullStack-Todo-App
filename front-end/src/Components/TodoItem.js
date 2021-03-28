import React from 'react'
import { FormCheck, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { GET_TODOS, ADD_TODO, DELETE_TODO, CHECK_TODO } from '../State/Reducers/apiReducer';

export const TodoItem = ( props ) => {

    const {
        id,
        label,
        isComplete,
    } = props;

    const dispatch = useDispatch();

    const onCheck = ( e ) => {

        // const isChecked = e.target.checked;

        dispatch( CHECK_TODO() );
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
                    <div>{ label }</div>
                </div>
                <Button className='DeleteButton' variant='danger'>Delete</Button>
            </div>
            <hr/>
        </div>
    )
}
