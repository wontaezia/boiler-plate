import { takeLatest } from 'redux-saga/effects';
import { todosActions } from '@modules/todos/slice';
import { getTodosAsync } from '@modules/todos/saga';

const { getTodos, cancelTodosAsync } = todosActions;

export default function* rootWatcher() {
    //! debounce
    // takeLatest는 함수 실행 도중 중복 요청 발생 시 처음에 요청했던 부분은 무시하고 최근에 요청한 액션을 우선적으로 처리합니다.
    yield takeLatest([getTodos.type, cancelTodosAsync.type], getTodosAsync);

    //! throttle
    // takeLeading는 함수 실행 도중 중복 요청 발생 시 그 사이에 들어온 액션은 무시하고 처음에 들어온 액션을 우선으로 처리하도록 관리해줍니다.
}
