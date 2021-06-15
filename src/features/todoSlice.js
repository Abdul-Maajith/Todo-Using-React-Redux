import { createSlice } from '@reduxjs/toolkit'

// const [todoList, setTodoList] = useState([])

// here, useState([]) => As Like the initial state of redux 
// variable-> "todoList" is the actual state.
// setTodoList(action.payload).... 
//"actions.payload" updates (or) changes the state using useDispatch hook's [Dispatch function()] 

const initialState = {
   todoList: [],
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
      saveTodo: (state, action) => {
        state.todoList.push(action.payload)
      },

      setCheck: (state, action) => {
        state.todoList.map((item) => {
            if (action.payload === item.id){
                if (item.done === true) {
                    item.done = false;
                } else {
                    item.done = true;
                }
            }
        })
      }
    }
});

export const { saveTodo, setCheck } = todoSlice.actions;

export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer;

// Redux in breif==>

// redux comprises of two major folders [app, features].. 
// app folder contains store.js => it is the main thing, which configures the different types of reducers, slice (or) state. and, we need to update every slice (or) states we create using import modules.
// # we need to export the store and configure the reducers.

// The whole global state of your app is stored in an object tree inside a single store. 
// the only way to change the state tree is to create an action, an object describing what happened, and dispatch it to the store.

// features folder comprises of slices(i.e states)
// In slice file, we import createSlice from redux toolkit and we need to create new slice
// Slice consists of variety of parts =>

// 1) "name: camera" -> we need to give the name of the slice.
// 2) initialState: {} -> It is an object which contains the initial state.

// 3) Reducers: {} -> It is also a object which updates (or) reduces the initial state.
//# In reducers, We have state updaters.
//# state updaters contains two major things => states and actions
// # states are the initial or previous states.
// # actions.paylaod updates (or) changes the state using useDispatch hook's [Dispatch function()]   

// 4) Thing to export=> we can export as per the function created.
// # export the corresponding reducer(name) with [sliceName].actions
// # export the default state of the reducers [state.name.stateName]  as a function (Only for this app)
// # export the default [slice.name].reducer

//  5) to update or change the state =>
// # import useDispatch from react-redux
// # import the corresponding reducer with their respective directory
// # create "const dispatch = useDispatch();"
// # update the state by using dispatch() 