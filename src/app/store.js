import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "../features/transactions/transactionsSlice";

// load state from session storage
const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem("bankState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.error("Error loading state from sessionStorage", e);
    return undefined;
  }
};

// save state to session storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("bankState", serializedState);
  } catch (e) {
    console.error("Error saving state to sessionStorage", e);
  }
};

// load persisted state
const persistedState = loadState();

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },

  preloadedState: persistedState,
});

// subscribe store changes and save state to sessionStorage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
