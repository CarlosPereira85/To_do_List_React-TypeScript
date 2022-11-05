export interface Todo {
    id: number;
   todo: string;
    isDone: boolean;
  }

// type Actions =
//     | { type: 'ADD_TODO', payload: string }
//     | { type: 'DONE_TODO', payload: number }
//     | { type: 'DELETE_TODO', payload: number }

//     const TodoReducer = (state: Todos[], action: Actions) => {
//         switch (action.type) {
//             case 'ADD_TODO':
//                 return [...state, { id: Math.random(), todos: action.payload, isDone: false }]
//             case 'DONE_TODO':
//                 return state.map(todo => todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo)
//             case 'DELETE_TODO':
//                 return state.filter(todo => todo.id !== action.payload)
//             default:
//                 return state
//         }
//     }

//     import {useReducer} from 'react'

//     const ReducerExample = () => {
//         const [state,dispatch] = useReducer(TodoReducer,[])
//         return (
//             <div/>
//         }


