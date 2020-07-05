import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import {useTodoState} from './TodoContext';

const TodoListBlock = styled.div`
    flex : 1;
    padding : 20px 32px;
    padding-bottom : 48px;
    overflow-y : auto;
`;

function TodoList() {
    const state = useTodoState();
    console.log(state);
    return<TodoListBlock> 
        <TodoItem text = "삼성합격" done = {true}/>
        <TodoItem text = "현장실습" done = {false}/>
        <TodoItem text = "취업준비" done = {true}/>
        <TodoItem text = "강릉가자" done = {true}/>
    </TodoListBlock>
}

export default TodoList ;