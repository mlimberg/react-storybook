const ToDos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, action.toDo]
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id)
    default:
      return state;
  }
}

export default ToDos;