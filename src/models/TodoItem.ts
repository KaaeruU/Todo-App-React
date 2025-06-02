export type TodoItemProps = {
  text: string
  id: number
  delete: (todo_index: number)=>void
}