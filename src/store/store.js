// creating react store and using it react app

import { configureStore } from '@reduxjs/toolkit'
import homeSlice from "./homeSlice";

export const store = configureStore({
//   homeslice ko key deke reducer ke abdr save krna hai
    reducer: {
        home: homeSlice,
    },
})

// what is state slice:
// like har page ke liye ek slice create ki jaye, like ek main state kiye jaye, like movies ke liye ek state, search history ke liye ek so on
// agar apke site mai bhot saare slice ho gaye toh ek global slice create karo aur usme sabhi slice rakho
