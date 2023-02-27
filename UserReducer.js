import { userConstants } from "./constants";



const initial_state = {
    data:[],
    userDetails: {}
}
const UserReducer = (state = initial_state, action) => {
    switch (action.type) {
        case userConstants.USERCREDENTIALS.USER_DETAILS:
            return { ...state, userDetails: { ...action.payload } };
        default:
            return state;
    }
}
export default  UserReducer;