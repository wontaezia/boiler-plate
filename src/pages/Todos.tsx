import React, { useState, useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import axios from 'axios';
import { TODOS_API as API } from '@api/config';
import { useTodos, useToggleTodo } from '@hooks';
import Button from '@components/Button';
import Alert from '@components/Alert';
import { flex, colors } from '@styles/theme';

function Payments() {
    const { todos, isLoading, error, getTodos, cancelTodos, isSuccess } = useTodos();
    const { toggleClicked } = useToggleTodo();
    const [start, setStart] = useState(todos.length);
    const limit = 10;

    // useEffect는 리턴되는 클린 업 함수에서 이전의 클로저를 가지고 있기 때문에
    // unmount 시에 최신의 상태로 업데이트된 값을 외부에서 전달하기 위해 useRef를 사용했습니다.
    const currentLoadState = useRef(isLoading);

    useEffect(() => {
        if (!todos.length) {
            getTodos({ start, limit });
        }

        // 데이터 요청 도중 페이지를 이탈하면 요청을 중단합니다.
        return () => {
            if (currentLoadState.current) {
                cancelTodos();
            }
        };
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        currentLoadState.current = isLoading;
    }, [isLoading]);

    useEffect(() => {
        setStart(todos.length);
    }, [todos]);

    const handleTodosData = () => {
        if (isLoading) return; // 중복 호출을 방지합니다.
        getTodos({ start: todos.length, limit });
    };

    const cancelAsync = () => {
        if (!isLoading) return; // 데이터를 요청하고 있지 않다면 아무것도 실행하지 않습니다.
        cancelTodos();
    };

    const updateTodo = async (id: number, todo: any) => {
        const response = await axios.put(`${API}/${id}`, {
            ...todo,
            completed: !todo.completed,
        });

        // 데이터 요청에 대한 결과는 console에서 확인 가능합니다.
        // JSONPlaceholder를 이용하였기 때문에 store에는 업데이트가 이루어 지지만
        // 새로고침 시에 초기화됩니다.
        console.log(response);
    };

    const handleTodoState = (clickedTodoId: number) => {
        const updatedTodos = todos.map((todo) => {
            if (clickedTodoId === todo.id) {
                updateTodo(clickedTodoId, todo);
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        toggleClicked(updatedTodos);
    };

    // 기본 페이지
    return (
        <div css={container}>
            <Alert
                error={error}
                isLoading={isLoading}
                isSuccess={isSuccess}
                children={isLoading ? '데이터를 불러오는 중입니다' : '데이터 요청 성공'}
            />
            <div css={title}>TodoList</div>
            <div css={buttonContainer}>
                <Button children="데이터 불러오기" theme="primary" onClick={handleTodosData} />
                <Button children="요청 취소" theme="secondary" onClick={cancelAsync} />
            </div>
            <ul css={todosContainer}>
                {todos?.map(({ id, title, completed }) => (
                    <li key={id} onClick={() => handleTodoState(id)}>
                        <h3
                            css={[
                                todo,
                                css`
                                    &::before {
                                        background-color: ${completed
                                            ? colors.green
                                            : colors.greys.placeholdersIcons};
                                    }
                                `,
                            ]}
                        >
                            {title}
                        </h3>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Payments;

const container = css`
    ${flex('center', 'flex-start', 'column')}
    padding: 0 100px 60px;
`;

const title = css`
    font-size: 20px;
    margin: 20px 0 30px;
`;

const todosContainer = css`
    li {
        margin: 10px 0;
        cursor: pointer;
    }
`;

const todo = css`
    font-size: 14px;

    &::before {
        content: '';
        display: inline-block;
        padding: 4px;
        margin-right: 10px;
        border-radius: 50%;
    }
`;

const buttonContainer = css`
    margin-bottom: 20px;

    button + button {
        margin-left: 10px;
    }
`;
