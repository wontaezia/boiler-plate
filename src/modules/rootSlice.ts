import { combineReducers } from 'redux';
import { todosReducers } from '@modules/todos/slice';

const rootReducer = combineReducers({
    todosReducers,
});

declare global {
    type ReducerType = ReturnType<typeof rootReducer>;
}
export default rootReducer;
