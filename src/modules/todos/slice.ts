import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Todos = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

export type TodosData = Todos[];

type TodosState = {
    todos: TodosData;
    isLoading: boolean;
    isSuccess: boolean;
    error: string | null;
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        isLoading: true,
        isSuccess: false,
        error: null,
    } as TodosState,
    reducers: {
        getTodos: (state, payload: PayloadAction<{ start: number; limit: number }>) => {
            console.log('데이터 목록 조회 액션 호출 -- getTodos');
            // 처음 getTodos 액션이 실행되면 isLoading을 활성화하여 중복 호출을 막습니다.
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
            };
        },
        getTodosSuccessAsync: (state, { payload: data }: PayloadAction<TodosData>) => {
            console.log('saga에서 put 액션 호출 -- getTodosSuccessAsync');
            // 해당 API 요청이 완료되면 isLoading을 false로 설정하고 데이터를 store에 담습니다.
            return {
                ...state,
                todos: [...state.todos, ...data],
                isLoading: false,
                isSuccess: true,
            };
        },
        getTodosFailedAsync: (state, { payload: error }) => {
            console.log('saga에서 put 액션 호출 -- getTodosFailedAsync');
            return {
                ...state,
                isLoading: false,
                error: error,
            };
        },
        cancelTodosAsync: (state, payload) => {
            console.log('데이터 목록 조회 API 요청 취소 액션 호출 -- cancelTodosAsync');
            return {
                ...state,
            };
        },
        toggleClicked: (state, { payload: items }: PayloadAction<Todos[]>) => {
            return {
                ...state,
                todos: items,
            };
        },
    },
});

export const todosReducers = todosSlice.reducer;
export const todosActions = todosSlice.actions;
