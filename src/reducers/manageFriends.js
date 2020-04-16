export function manageFriends(state = {friends: []}, action){
    switch (action.type) {
        case "ADD_FRIEND":
            return(
                {...state,friends: [...state.friends, action.friend]}
            )
        case "REMOVE_FRIEND": 
            let remove_friend = state.friends.find(friend => friend.id === action.id)
            let remain_friends = [...state.friends]
            remain_friends.splice(remain_friends.indexOf(remove_friend),1)
            return(
                {...state,friends: [...remain_friends]}
            )
        default:
            return state
    }
}
