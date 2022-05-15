import React, { useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { VscError } from "react-icons/vsc";
import { BiError } from "react-icons/bi";
import "./notification.css";

function Notification({ notification }) {
  let timeout;
  const handleClose = (time = notification.duration) => {
    timeout = setTimeout(() => {
      notification.set(false);
    }, time);
  };

  useEffect(() => {
    handleClose();

    return () => {
      clearTimeout(timeout);
    };
  }, [notification.message, notification.type]);

  const ICONS = {
    success: AiFillCheckCircle,
    error: VscError,
    warning: BiError,
  };

  const animationStyle = {
    animation: `fadeInOut ${notification.duration}ms forwards`,
  };

  const Icon = ICONS[notification.type];

  return (
    notification.message && (
      <div
        style={animationStyle}
        className={`notification-container ${notification.type}`}
        onClick={() => handleClose(0)}
      >
        <div className="notification-icon">
          <Icon />
        </div>
        {notification.message}
      </div>
    )
  );
}

export default Notification;
