import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { todosActions } from '@modules/todos/slice';

function useToggleTodo() {
    const dispatch: AppDispatch = useDispatch();
    const toggleClicked = useCallback((todos) => dispatch(todosActions.toggleClicked(todos)), [
        dispatch,
    ]);

    return {
        toggleClicked,
    };
}

export default useToggleTodo;
