const redux = require("redux");
const createStore = redux.createStore;
const initialeState = {
    number: 0
};

//reducer
const rootReducer = (state=initialeState, action) => {
    if(action.type === "INCREASE"){
        return {
            ...state,
            number: state.number + 1
        };
    }
    if(action.type === "DECREASE"){
        return {
            ...state, 
            number: state.number - 1
        };
    }
    if (action.type === "RESET"){
        return {
            ...state, 
            number: action.value
        };
    }
  
    return state;
}; 

//Store 
const store = createStore(rootReducer);
console.log(store.getState())

//Subscription
store.subscribe(() =>{
    console.log("subscription", store.getState())
})

//Dispatching Action
store.dispatch({type:"INCREASE"});
store.dispatch({ type: "DECREASE"});
store.dispatch({ type: "RESET", value: 0 });
console.log(store.getState())