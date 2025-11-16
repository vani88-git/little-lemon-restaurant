// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

window.fetchAPI = function(date) {
  // Return a consistent, fake array of times for testing
  // This matches the format of the real API
  return [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
  ];
};

window.submitAPI = function(formData) {
  // Simulate a successful submission
  return true;
};