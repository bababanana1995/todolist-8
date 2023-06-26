import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

export const todolistsReducer=(state:TodolistType[],action:TsarType):TodolistType[]=>{
    switch (action.type){
        case 'REMOVE-TODOLIST':{
            return state.filter(el=>el.id!==action.payload.id)
        }
        case 'ADD-TODOLIST':{
            let newTodolistId=v1()
            let newTodolist: TodolistType={id:newTodolistId,title:action.payload.title,filter:'all'}
            return [...state,newTodolist]
        }
        case 'CHANGE-TODOLIST-TITLE':{

            return state.map(el=>el.id===action.payload.id?{...el,title:action.payload.title} :el)
        }
        case 'CHANGE-TODOLIST-FILTER':{

            return state.map(el=>el.id===action.payload.todolistId?{...el,filter:action.payload.filterValue}:el)
        }
        default: return state
    }
}
type TsarType=removeTodolistACType|addTodolistACACType|changeTodolistTitleCACType|changeFilterACType
type removeTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC=(id:string)=>{
    return{
        type: 'REMOVE-TODOLIST',
            payload: {id}
    }as const
}
type addTodolistACACType = ReturnType<typeof addTodolistAC>
export const addTodolistAC=(title:string)=>{
    return{
        type: 'ADD-TODOLIST',
        payload: {title}
    }as const
}
type changeTodolistTitleCACType = ReturnType<typeof changeTodolistTitle>
export const changeTodolistTitle=(id: string, title: string)=>{
    return{
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {id,title}
    }as const
}
type changeFilterACType = ReturnType<typeof changeFilterAC>
export const changeFilterAC=(filterValue: FilterValuesType, todolistId: string)=>{
    return{
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {filterValue,todolistId}
    }as const
}
