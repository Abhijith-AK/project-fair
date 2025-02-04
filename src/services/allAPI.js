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

// addProjectAPI called by Add component when user clicked on add-project button
export const addProjectAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${SERVERURL}/add-project`, reqBody, reqHeader);
}

// getHomeProjectAPI called by Home Page
export const getHomeProjectAPI = async () => {
    return await commonAPI("GET", `${SERVERURL}/home-project`, {});
}

// getHomeProjectAPI called by Home Page
export const allProjectAPI = async (searchKey, reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/all-project?search=${searchKey}`, {}, reqHeader);
}

// userProjectAPI called by view component
export const userProjectAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/user-project`, {}, reqHeader);
}

// updateProjectAPI called by EDIT component
export const updateProjectAPI = async (id, reqBody, reqHeader) => {
    return await commonAPI("PUT", `${SERVERURL}/projects/${id}/edit`, reqBody, reqHeader);
}

// removeProjectAPI called by View component when clicked on delete button
export const removeProjectAPI = async (id, reqHeader) => {
    return await commonAPI("DELETE", `${SERVERURL}/projects/${id}/remove`, {}, reqHeader);
}