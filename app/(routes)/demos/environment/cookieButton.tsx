"use client";

import { useEffect, useState } from "react";

export default function CookieButton() {
  const [cookieSet, setCookieSet] = useState(false);
  const [nonce, setNonce] = useState(1);

  // Get the current nonce from cookies on component mount
  useEffect(() => {
    const cookies = document.cookie.split(";");
    const testCookie = cookies.find((cookie) => cookie.trim().startsWith("test="));

    if (testCookie) {
      const value = testCookie.split("=")[1];
      const currentNonce = parseInt(value.replace("value_", ""), 10);
      if (!isNaN(currentNonce)) {
        setNonce(currentNonce + 1);
      }
    }
  }, []);

  const setTestCookie = () => {
    // Set a cookie that expires in 1 hour
    const expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + 60 * 60 * 1000);
    document.cookie = `test=value_${nonce}; expires=${expiryDate.toUTCString()}; path=/`;
    setCookieSet(true);

    // Reload the page with query parameter after a short delay
    setTimeout(() => {
      // Use window.location.href to navigate to the same page with query parameters
      window.location.href = window.location.pathname + "?testParam=hello#nextjs";
    }, 500);
  };

  return (
    <div className="mt-8 text-center">
      <button onClick={setTestCookie} className="btn btn-primary">
        Set Test Cookie
      </button>
      {cookieSet && <p className="mt-4 text-orange-600">Cookie set! Refreshing page...</p>}
    </div>
  );
}
