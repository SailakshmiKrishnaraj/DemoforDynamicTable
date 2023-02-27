import { userConstants } from "./constants";
export function setUserData() {
    return { type:userConstants.USERCREDENTIALS.USER_DETAILS, payload: {  } };
}