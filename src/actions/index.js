export const addToDo = toDo => {
  console.log('toDo ', toDo)
  return {
    type: 'ADD_TODO',
    toDo
  }
}

export const removeToDo = id => ({
  type: 'REMOVE_TODO',
  id
})