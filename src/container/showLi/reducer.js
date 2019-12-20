const initState = {
    list:[
        'this is first state',
        'this is second state',
        'this is third state'
    ]
}
export default (state = initState,action)=>{
    switch (action.type) {
        case 'ADDLI':
            return Object.assign({},state,{list:action.payload});
        default :
            return state
    }
}