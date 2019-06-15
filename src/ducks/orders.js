export const actionTypes = {
    PLACE_ORDER: 'PLACE_ORDER',
}

const DEFAULT_STATE = {

}

//ACTIONS /////////////////////////////////////////////////////////////////////
export const actions = {
    placeOrder({customer, createdAt=Date.now(), cone, scoops}) {
        return {
            type: actionTypes.PLACE_ORDER,
            payload: {
                customer, createdAt, cone, scoops,
            }
        }
    },
}

//REDUCERS ////////////////////////////////////////////////////////////////////
export default function reducer(state=DEFAULT_STATE, action) {
    switch (action.type) {
        case actionTypes.PLACE_ORDER:
            return {
                ...state,
            }
        default:
            return DEFAULT_STATE
    }
}