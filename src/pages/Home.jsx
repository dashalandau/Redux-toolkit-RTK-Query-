import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useGetTodosQuery, useDeleteTodoMutation, useUpdateTodoMutation } from '../redux/index';

const Home = () => {
    const navigate = useNavigate();
    const { data, isLoading, error } = useGetTodosQuery();
    //const [updateTodo] = useUpdateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const handleDeleteTodo = async (id) => {
        await deleteTodo(id)
    }
    return (
        <>
            <div>
                <ul>
                    {data.map((todo) => (
                        <li key={todo.id}>
                            <h1>
                                {todo.title}
                            </h1>
                            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                            <button onClick={() => navigate(`/todos/${todo.id}`)}>open</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Home