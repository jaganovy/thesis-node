export default function events(state = [], action) {
    switch(action.type){
        case 'FETCH_ALL':
            return state
        case 'CREATE':
            return state
        default:
            return events
    }
}