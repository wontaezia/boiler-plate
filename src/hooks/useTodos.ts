import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@hooks';
import { todosActions } from '@modules/todos/slice';

function useTodos() {
    const dispatch: AppDispatch = useDispatch();
    const { todos, isLoading, isSuccess, error } = useTypedSelector((state) => {
        const {
            todosReducers: { todos, isLoading, isSuccess, error },
        } = state;

        return {
            todos,
            isLoading,
            isSuccess,
            error,
        };
    });

    const getTodos = useCallback(
        ({ start, limit }) => dispatch(todosActions.getTodos({ start, limit })),
        [dispatch]
    );
    const cancelTodos = useCallback(() => dispatch(todosActions.cancelTodosAsync('cancel')), [
        dispatch,
    ]);

    return {
        todos,
        isLoading,
        isSuccess,
        error,
        getTodos,
        cancelTodos,
    };
}

export default useTodos;
