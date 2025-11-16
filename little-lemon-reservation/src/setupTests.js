import '@testing-library/jest-dom';

// This manually creates the functions that the tests are looking for
// in the 'window' object, which Jest provides.

window.fetchAPI = function(date) {
  // Return a consistent, fake array of times for testing
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