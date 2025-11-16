import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './Components/BookingForm';
import { initializeTimes, updateTimes } from './utils.js';

// --- Create a mock for the submitForm prop ---
const mockSubmitForm = jest.fn();
const mockDispatch = jest.fn();
const mockAvailableTimes = ["17:00", "17:30"]; // Mock times

// Helper function to render the form with all required props
const renderBookingForm = () => {
  render(
    <BookingForm 
      availableTimes={mockAvailableTimes} 
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );
};

// =======================================================
//  Step 1: HTML5 Validation Tests
// =======================================================
describe('BookingForm HTML5 Validation', () => {

  test('Renders the "Choose date" label', () => {
    renderBookingForm();
    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
  });

  test('Date input has "required" attribute', () => {
    renderBookingForm();
    const dateInput = screen.getByLabelText("Choose date");
    expect(dateInput).toHaveAttribute('required');
  });

  test('Date input has "min" attribute set to today', () => {
    renderBookingForm();
    const dateInput = screen.getByLabelText("Choose date");
    const today = new Date().toISOString().split('T')[0];
    expect(dateInput).toHaveAttribute('min', today);
  });

  test('Time select has "required" attribute', () => {
    renderBookingForm();
    const timeSelect = screen.getByLabelText("Choose time");
    expect(timeSelect).toHaveAttribute('required');
  });

  test('Guests input has "required" attribute', () => {
    renderBookingForm();
    const guestsInput = screen.getByLabelText("Number of guests");
    expect(guestsInput).toHaveAttribute('required');
  });

  test('Guests input has "min" attribute of 1', () => {
    renderBookingForm();
    const guestsInput = screen.getByLabelText("Number of guests");
    expect(guestsInput).toHaveAttribute('min', '1');
  });

  test('Occasion select has "required" attribute', () => {
    renderBookingForm();
    const occasionSelect = screen.getByLabelText("Occasion");
    expect(occasionSelect).toHaveAttribute('required');
  });
});

// =======================================================
//  Step 2: JavaScript Validation Tests (Valid & Invalid)
// =======================================================
describe('BookingForm JavaScript Validation', () => {

  test('Submit button is disabled when form is invalid (initially)', () => {
    renderBookingForm();
    // --- THIS IS THE FIX ---
    const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
    expect(submitButton).toBeDisabled();
  });

  test('Submit button is enabled when form is valid (date and time selected)', () => {
    renderBookingForm();
    
    // --- THIS IS THE FIX ---
    const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
    const dateInput = screen.getByLabelText("Choose date");
    const timeSelect = screen.getByLabelText("Choose time");

    // Simulate user filling out the required fields
    fireEvent.change(dateInput, { target: { value: '2025-12-01' } });
    fireEvent.change(timeSelect, { target: { value: '17:00' } });

    // Now, the button should be enabled
    expect(submitButton).toBeEnabled();
  });

  test('Form submission calls submitForm with correct data when valid', () => {
    renderBookingForm();

    // --- THIS IS THE FIX ---
    const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
    const dateInput = screen.getByLabelText("Choose date");
    const timeSelect = screen.getByLabelText("Choose time");
    const guestsInput = screen.getByLabelText("Number of guests");
    const occasionSelect = screen.getByLabelText("Occasion");

    // Fill out the entire form to make it valid
    fireEvent.change(dateInput, { target: { value: '2025-12-01' } });
    fireEvent.change(timeSelect, { target: { value: '17:00' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(occasionSelect, { target: { value: 'Anniversary' } });

    // Click the (now enabled) submit button
    fireEvent.click(submitButton);

    // We expect our mock submitForm function to have been called
    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: '2025-12-01',
      time: '17:00',
      guests: '4', 
      occasion: 'Anniversary'
    });
  });
});

// =======================================================
//  Existing Reducer Unit Tests (Still Valid!)
// =======================================================
describe('Reducer Unit Tests (initializeTimes and updateTimes)', () => {

  // This is the list we defined in setupTests.js
  const expectedTimes = [
    "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
  ];

  test('initializeTimes function returns the correct times from our mock API', () => {
    const times = initializeTimes();
    expect(times).toEqual(expectedTimes);
  });

  test('updateTimes function returns the correct times from our mock API', () => {
    const newTimes = updateTimes(null, "2025-11-30");
    expect(newTimes).toEqual(expectedTimes);
  });
});