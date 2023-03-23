import {createSlice} from "@reduxjs/toolkit";


const initialState = null

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userLoggedIn(userState, { payload: loggedInUser }) {
            return loggedInUser // returned value will be set as new state
        },
        userLoggedOut() {
            return initialState
        }
    }
})

export default userSlice.reducer

export const { userLoggedIn, userLoggedOut } = userSlice.actions