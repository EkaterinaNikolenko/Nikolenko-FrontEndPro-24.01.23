export const AddTodoAction = (todo) => (dispatch) => {
    if(todo.trim() !== '') {
        dispatch({
            type: "ADD_TODO",
            payload: todo
        });
    }
};

export const RemoveTodoAction = (todo) => (dispatch, getState) => {
    const {
        Todo: {todos}
    } = getState();
    dispatch({
        type: "REMOVE_TODO",
        payload: todos.filter((t) => todo !== t)
    });
};