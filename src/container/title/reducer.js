
const initState = {
    title:'this is title'
}

export default (state = initState,action)=>{
    switch (action.type) {
        case 'CHANGETITLE':
            return Object.assign({},state,{title:action.payload})
        default :
            return state
    }
}