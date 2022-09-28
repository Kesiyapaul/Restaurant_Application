import { RESTAURANT_LIST_FAIL, RESTAURANT_LIST_SUCCESS } from '../constants/restConstant'




//output of action, empty state and an action return new state matching with type
export const listReducer = (state = { restaurants: [] }, actions)=> {
    switch (actions.type) {
        case RESTAURANT_LIST_SUCCESS:
            return { restaurants: actions.payload }

        case RESTAURANT_LIST_FAIL:
            return { restaurants: actions.payload }
        default:
            return state
    }
}