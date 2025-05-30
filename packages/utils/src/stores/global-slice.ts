import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { User } from "@repo/utils/types/global";
import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "@repo/utils/lib/apollo";
import { gql } from "@apollo/client";

export const GLOBAL_SCHEMA = gql`
  query Global {
    currentUser {
      id
      firstName
      lastName
      email
      permission
    }
  }
`;

export const fetchGlobalData = createAsyncThunk<GlobalState>(
  "global/fetchGlobalData",
  async (_, thunkAPI) => {
    try {
      const { data } = await client.query({
        query: GLOBAL_SCHEMA,
        fetchPolicy: "network-only",
      });

      return data;
    } catch (error) {
      localStorage.removeItem("token");
      return thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : "Unknown error",
      );
    }
  },
);

export interface GlobalState {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: GlobalState = {
  currentUser: null,
  loading: true,
  error: null,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGlobalData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchGlobalData.fulfilled,
        (
          state,
          action: PayloadAction<Omit<GlobalState, "loading" | "error">>,
        ) => {
          state.loading = false;
          state.currentUser = action.payload.currentUser;
          state.error = null;
        },
      )
      .addCase(fetchGlobalData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default globalSlice.reducer;
