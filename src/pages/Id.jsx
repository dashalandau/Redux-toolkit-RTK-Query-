import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetTodosIdQuery } from '../redux/index';

const IdPage = () => {
    const { id } = useParams()
    const { data: getTodosId = {}, isLoading } = useGetTodosIdQuery(id)
    console.log(getTodosId);
    return (
        <>
            <div>
                {
                    !isLoading &&
                    <h1>{getTodosId.title}</h1>
                }
            </div>
        </>
    )
}

export default IdPage;