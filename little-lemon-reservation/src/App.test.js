import { render, screen } from '@testing-library/react';
import BookingForm from './Components/BookingForm';
import { initializeTimes, updateTimes } from './utils.js';

// Test 1: Renders static text
test('Renders the "Choose date" label in BookingForm', () => {
  const mockAvailableTimes = ["17:00"];
  const mockDispatch = jest.fn();

  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

// This is the list we expect from our mock API in setupTests.js
const expectedTimes = [
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
];

// Test 2: Updated initializeTimes test (Step 1)
test('initializeTimes function returns the correct times from our mock API', () => {
  const times = initializeTimes();
  expect(times).toEqual(expectedTimes);
});

// Test 3: Updated updateTimes test (Step 2)
test('updateTimes function returns the correct times from our mock API', () => {
  const currentState = []; 
  const action = "2025-11-30"; // Any date
  
  const newTimes = updateTimes(currentState, action);
  expect(newTimes).toEqual(expectedTimes);
});