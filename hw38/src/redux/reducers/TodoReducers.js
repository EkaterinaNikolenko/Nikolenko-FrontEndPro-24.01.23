import { addTodo, removeTodo } from "../Constants";

const TodoReducer = (state = {todos: []}, action) => {
    switch(action.type) {
        case addTodo:
            return {
                todos: [action.payload, ...state.todos]
            };
        case removeTodo:
            return {todos: action.payload};
        default:
            return state;
    }
};
export default TodoReducer;