import React from 'react'
import { Container, Jumbotron, Button } from 'react-bootstrap'
import { TodoItem } from './Components/TodoItem'
import { useSelector } from 'react-redux';

// import { todoItems } from './testData';

export const App = () => {

    const state = useSelector( ( state ) => state.apiReducer );

    return (
        <Container 
            fluid='md'
            className='AppContainer'
        >
            <Jumbotron
                className='TodoContainer'
            >
                <div className='TitleBar' >
                    <center>
                        Fullstack ToDo Application
                    </center>
                </div>
                <div className='TodoListContainer' >
                    {
                        state.todoItems?.map( ( item, index ) => {
                            return <TodoItem key={ index } {...item} />
                        })
                    }
                </div>
            </Jumbotron>
            <Button block className='AddButton'>Add</Button>
        </Container>
    )
}
