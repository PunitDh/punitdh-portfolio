import { useState } from "react";

export const useNotification = () => {
  const defaultDuration = 5000;
  const [notification, setNotification] = useState({
    message: null,
    type: null,
    duration: defaultDuration,
  });

  return {
    message: notification.message,
    type: notification.type,
    duration: notification.duration,
    set: (message, type, duration = defaultDuration) =>
      setNotification({ message, type, duration }),
    success: (message, duration = defaultDuration) =>
      setNotification({ message, type: "success", duration }),
    error: (message, duration = defaultDuration) =>
      setNotification({ message, type: "error", duration }),
    warning: (message, duration = defaultDuration) =>
      setNotification({ message, type: "warning", duration }),
    SUCCESS: "success",
    ERROR: "error",
    WARNING: "warning",
    DISABLED: "disabled",
  };
};
