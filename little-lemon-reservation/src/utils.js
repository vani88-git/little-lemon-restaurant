/* This file is now much simpler!
  We've removed all the old mock 'fetchAPI' and 'getTodayString' functions.
*/

/**
 * This function is called by the reducer to get the *initial* state.
 * It calls the new global fetchAPI function with today's date.
 */
export const initializeTimes = () => {
  // The API script expects a Date object
  const today = new Date();
  
  // window.fetchAPI is the new function loaded from the script tag
  // in index.html. It returns the available times for 'today'.
  return window.fetchAPI(today);
};

/**
 * This is the reducer function.
 * It calls the new global fetchAPI with the selected date.
 */
export const updateTimes = (state, action) => {
  // 'action' is the date string from the form (e.g., "2025-11-17")
  // We convert it to a Date object for the API
  const selectedDate = new Date(action);
  
  // Call the new global API with the selected date
  return window.fetchAPI(selectedDate);
};