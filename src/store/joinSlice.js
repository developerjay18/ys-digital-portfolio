import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  runAdsBefore: false,
  businessType: '',
  businessDescription: '',
  selectedOptions: {
    googleMyBusiness: false,
    leads: false,
    views: false,
    socialMediaMarketing: false,
    leadsCount: 0,
    viewsCount: 0,
  },
};

const joinSlice = createSlice({
  name: 'join',
  initialState,
  reducers: {
    enterrunAdsBefore: (state, action) => {
      state.runAdsBefore = action.payload;
    },
    enterBusinessType: (state, action) => {
      state.businessType = action.payload;
    },
    enterBusinessDescription: (state, action) => {
      state.businessDescription = action.payload;
    },
    enterSelectedOptions: (state, action) => {
      state.selectedOptions.googleMyBusiness = action.payload.googleMyBusiness;
      state.selectedOptions.leads = action.payload.leads;
      state.selectedOptions.leadsCount = action.payload.leadsCount;
      state.selectedOptions.views = action.payload.views;
      state.selectedOptions.viewsCount = action.payload.viewsCount;
      state.selectedOptions.socialMediaMarketing =
        action.payload.socialMediaMarketing;
    },
  },
});

export default joinSlice.reducer;

export const {
  enterDateToState,
  enterrunAdsBefore,
  enterBusinessType,
  enterBusinessDescription,
  enterSelectedOptions,
} = joinSlice.actions;
