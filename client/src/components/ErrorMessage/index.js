import React from "react";
/**
 * Displays general error messages for the application
 */
const ErrorMessage = ({ message }) => {
  if (!message) {
    return null;
  }
  return (
    <div className="error-message text-red-900 p-2 my-2 bg-red-200 rounded text-xs">
      {message}
    </div>
  );
};
export default ErrorMessage;
