import HTTP from "./";

const login = (loginData) => HTTP.post("/login", loginData);