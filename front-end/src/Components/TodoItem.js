import React from 'react'
import { Card, Form, FormCheck, Button } from 'react-bootstrap';

export const TodoItem = ( props ) => {

    const {
        id,
        label,
        isComplete,
    } = props;

    const onCheck = ( e ) => {

        const isChecked = e.target.checked;
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
