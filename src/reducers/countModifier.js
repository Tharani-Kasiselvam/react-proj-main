//define an initial State
const initState = {
    count : 0
}

//define the Reducer function
function countChangeReducer(state,action){
    switch(action.type){
        case 'add' : 
            return {
                count : state.count + 1
            }
    }
}

export{
    initState,
    countChangeReducer
}
