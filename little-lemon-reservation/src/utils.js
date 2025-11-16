// This is the master list of all available booking times
const allTimes = [
  "17:00", "18:00", "19:00", "20:00", "21:00", "22:00",
];

/**
 * Simulates fetching available times from an API based on a date.
 * @param {string} dateString - The selected date (e.g., "2025-11-16").
 * @returns {string[]} - A list of available times.
 */
const fetchAPI = (dateString) => {
  // 1. Get the current date and time
  const now = new Date();
  
  // 2. Convert the selected date string to a Date object
  const selectedDate = new Date(dateString + "T00:00:00");
  
  // 3. Check if the selected date is today
  const isToday = now.getFullYear() === selectedDate.getFullYear() &&
                  now.getMonth() === selectedDate.getMonth() &&
                  now.getDate() === selectedDate.getDate();

  // 4. If it's not today (i.e., a future date), return all times
  if (!isToday) {
    return allTimes;
  }

  // 5. If it IS today, get the current hour
  const currentHour = now.getHours();
  
  // 6. Filter the times. Only show times that are *after* the current hour.
  const filteredTimes = allTimes.filter(time => {
    const timeHour = parseInt(time.split(":")[0]); // "17:00" -> 17
    return timeHour > currentHour;
  });

  return filteredTimes;
};

/**
 * Gets today's date in "YYYY-MM-DD" format.
 * @returns {string} Today's date.
 */
const getTodayString = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};


// --- Reducer Functions ---

/**
 * This function is called by the reducer to get the *initial* state.
 * It fetches times for today's date.
 */
export const initializeTimes = () => {
  return fetchAPI(getTodayString());
};

/**
 * This is the reducer function. It's called when we 'dispatch' an action.
 * @param {string[]} state - The current list of available times.
 * @param {string} action - The selected date from the form.
 * @returns {string[]} The new list of available times.
 */
export const updateTimes = (state, action) => {
  // 'action' is the new date selected by the user.
  // We call fetchAPI with this new date to get the updated times.
  return fetchAPI(action);
};