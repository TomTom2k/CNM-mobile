import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "./userAPI";

// var getAPI = createAsyncThunk("user/getAPI",
//         async ( {rejectWithValue}) =>{
//             try {
//                 const res = await fetch(
//                     'https://6571a1fed61ba6fcc01322aa.mockapi.io/user'
//                 );
//                 var data = await res.json();
//                 return data;
//             } catch (error) {
//                 rejectWithValue(error.message);
//             }
//         }
//     )

const userSlide = createSlice({
    name: 'user',

    initialState:{
        data: undefined,
        loading: false,
        error: "",
    },
    reducers: {
        readUser : (state, action) => {
            console.log(action.payload);
            state.data = action.payload;
        }
       
    },
    extraReducers: (builder) =>{ 
       builder.addCase(getAPI.fulfilled, (state, action) => {
             console.log("action.payload");    
           state.data = action.payload;
           console.log(action.payload);
       })

    },
})
export const { readUser } = userSlide.actions;
export default userSlide;