import { render, screen } from '@testing-library/react';
import BookingForm from './Components/BookingForm';
import { initializeTimes, updateTimes } from './utils.js';

// --- Test 1: BookingForm Renders ---
test('Renders the "Choose date" label in BookingForm', () => {
  const mockAvailableTimes = ["17:00"];
  const mockDispatch = jest.fn();

  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
  
  const labelElement = screen.getByText("Choose date");
  
  expect(labelElement).toBeInTheDocument();
});


/* --- THIS IS THE NEW LIST WE EXPECT FROM OUR MOCK API --- */
const expectedTimes = [
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
];


// --- Test 2: initializeTimes Function (Updated) ---
test('initializeTimes function returns the correct times from our mock API', () => {
  const times = initializeTimes();
  
  // Check that the returned times match our mock data
  expect(times).toEqual(expectedTimes);
});


// --- Test 3: updateTimes Function (Updated) ---
test('updateTimes function returns the correct times from our mock API', () => {
  const currentState = []; 
  const action = "2025-11-30"; // Any date
  
  const newTimes = updateTimes(currentState, action);
  
  // Check that the returned times match our mock data
  expect(newTimes).toEqual(expectedTimes);
});