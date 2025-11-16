import { render, screen } from '@testing-library/react';
import BookingForm from './Components/BookingForm';

// Import functions from the NEW utils.js file
import { initializeTimes, updateTimes } from './utils.js'; 

// --- Step 1: Test for static text in BookingForm ---

test('Renders the "Choose date" label in BookingForm', () => {
  const mockAvailableTimes = ["17:00"];
  const mockDispatch = jest.fn(); 

  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
  
  const labelElement = screen.getByText("Choose date");
  
  expect(labelElement).toBeInTheDocument();
});


// --- Step 2: Test the reducer functions ---

test('initializeTimes function returns a non-empty array', () => {
  const times = initializeTimes();
  
  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThanOrEqual(0);
});

test('updateTimes function returns the correct times for a future date', () => {
  const currentState = []; 
  const action = "2025-11-30"; // A future date
  
  const newTimes = updateTimes(currentState, action);
  
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  
  expect(newTimes).toEqual(expectedTimes);
});