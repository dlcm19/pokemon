import { configureStore } from "@reduxjs/toolkit"
import nameCoach from "./slices/nameCoach.slice"

export default configureStore({
    reducer: {
        nameCoach
    }
})