import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const Login_URL = import.meta.env.VITE_LOGIN_URL;



const initialState = {
    loading: false,
    error: null,
    name: "",
    email: "",
    password: "",
    role: "",
    token: null
  };

// ⬇️ Thunk accepts user credentials as an argument
export const authLogin = createAsyncThunk(
    "user/authLogin",
    async ({ email, password }, thunkAPI) => {
      try {
        const response = await fetch(Login_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }), // send login data
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          return thunkAPI.rejectWithValue(errorData.message || "Login failed");
        }
  
        const data = await response.json();
        return data; // This goes to `action.payload`
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state) => {
      state.name = "";
      state.email = "";
      state.password = "";
      state.role = "";
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.loading = false;
        // state.name = action.payload.name;
        // state.email = action.payload.email;
        // state.role = action.payload.role;
        // state.token = action.payload.token;
        state.token = action.payload;
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      });
  },
});

export const { loginUser } = authSlice.actions;
export default authSlice.reducer