import React from 'react'
import { Container, Jumbotron, Button } from 'react-bootstrap'
import { TodoItem } from './Components/TodoItem'

import { todoItems } from './testData';

export const App = () => {
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
                        todoItems.data?.map( ( item, index ) => {
                            return <TodoItem {...item} />
                        })
                    }
                </div>
            </Jumbotron>
            <Button block className='AddButton'>Add</Button>
        </Container>
    )
}
