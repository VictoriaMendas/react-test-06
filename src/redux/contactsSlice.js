import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  },
  reducer: {
    addContact: (state, action) => {
      state.items = [action.payload, ...state.items];
      console.log(state.contacts);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});
export const selectContacts = (state) => state.contacts.items;
console.log(selectContacts);
export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
