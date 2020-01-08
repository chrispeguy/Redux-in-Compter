const initialeState = {
    number: 0
};

const reducer = (state=initialeState, action) => {
    // switch(action.type) {
    //     case "DECREASE":
    //         return {
    //             number: state.number - 1
    //         }
    //     case "INCREASE":
    //     return {
    //             number: state.number + 1
    //         };
    //     case "RESET":
    //         return {
    //             number: action.value
    //         };
    // }
    if(action.type === "DECREASE" && state.number > 0){
        return {
            number: state.number - 1
        };
    }
    if(action.type === "INCREASE"){
        return{
            number:state.number + 1
        };
    }
    if(action.type === "RESET"){
        return {
            number: action.value
        }
    }
    return state;
}; 

export default reducer;