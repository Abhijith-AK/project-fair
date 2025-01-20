import commonAPI from "./commonAPI";
import SERVERURL from "./serverURL";

// registerAPI called by auth
export const registerAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/register`, reqBody);
}