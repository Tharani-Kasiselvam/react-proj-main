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
        
        case 'minus' : 
        return {
            count : state.count - 1
        }

        case 'zero' : 
        return {
            count : 0
        }
    }
}

export{
    initState,
    countChangeReducer
}
