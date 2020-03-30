const initialState = {
    id: undefined,
    listTrips: [],
    detailTrip: undefined
}


const trips = (state = initialState, action) => {
    switch(action.type) {
        case "SET_LIST_TRIPS":
            {
                return {
                    ...state,
                    listTrips: action.payload.trips
                }
            }
        case "SET_ID":
            {
                return {
                    ...state,
                    id: action.payload.id
                }
            }
        case "SET_DETAIL_TRIP":
            {
                return {
                    ...state,
                    detailTrip: action.payload.detailTrip
                }
            }
        default:
            {
                return state
            }
    }
}

export default trips