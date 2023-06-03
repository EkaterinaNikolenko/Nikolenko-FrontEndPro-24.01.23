import { addTodo, removeTodo } from "../Constants";

export const AddTodoAction = (todo) => (dispatch) => {
    if(todo.trim() !== '') {
        dispatch({
            type: addTodo,
            payload: todo
        });
    }
};

export const RemoveTodoAction = (todo) => (dispatch, getState) => {
    const {
        Todo: {todos}
    } = getState();
    dispatch({
        type: removeTodo,
        payload: todos.filter((t) => todo !== t)
    });
};