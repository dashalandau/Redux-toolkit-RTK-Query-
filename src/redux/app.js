import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
   reducerPath: 'api',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
   endpoints: (builder) => ({
      // Здесь мы определяем наш первый endpoint
      getTodos: builder.query({
         query: () => '/todos',
      }),
      getTodosId: builder.query({
         query: (id) => `/todos/${id}`,
      }),

      // И здесь мы определяем второй endpoint
      updateTodo: builder.mutation({
         query: ({ id, ...data }) => ({
            url: `/todos/${id}`,
            method: 'PUT',
            body: data,
         }),
      }),

      // И третий endpoint
      deleteTodo: builder.mutation({
         query: (id) => ({
            url: `/todos/${id}`,
            method: 'DELETE',
         }),
      }),
   }),
});

// Экспортируем функции для использования в компонентах
export const { useGetTodosQuery, useGetTodosIdQuery, useUpdateTodoMutation, useDeleteTodoMutation } = api;