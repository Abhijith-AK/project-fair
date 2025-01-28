import commonAPI from "./commonAPI";
import SERVERURL from "./serverURL";

// registerAPI called by auth
export const registerAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/register`, reqBody);
}

// loginAPI called by auth
export const loginAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/login`, reqBody);
}