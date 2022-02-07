// What's nice about  a *.d.ts file is our compiler will recognize the types in there as global to the project
// and we won't need to explicitly import or export them.

interface Todo {
    text : string,
    complete: boolean,
}

type ToggleTodo = (selectedTodo: Todo) => void;