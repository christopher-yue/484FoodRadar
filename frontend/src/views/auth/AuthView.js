import React, { useState, useEffect } from "react";
import { Register } from "../../components/auth/Register";
import { Login } from "../../components/auth/Login";
import "./AuthView.css";

export const KeyEnter = ({ children }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    console.log("Form submitted");
    setSubmitted(true);
    window.alert("Form Submitted!");
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        if (!submitted) {
          handleSubmit();
        }
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [submitted]);

  return <div>{children}</div>;
};

export const AuthView = () => {
  const [move, setMove] = useState(false);

  function handleMove() {
    setMove((move) => !move);
  }

  let togglePanel = move ? " right-panel-active" : "";
  return (
    <div>
      <div className="auth-container">
        <div className={`container${togglePanel}`} id="container">
          <Register />
          <Login />
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h2>Already have an account?</h2>

                <KeyEnter>
                  <button className="ghost" onClick={handleMove} id="signIn">
                    Sign In
                  </button>
                </KeyEnter>
              </div>
              <div className="overlay-panel overlay-right">
                <h2>Don't have an account?</h2>

                <KeyEnter>
                  <button className="ghost" onClick={handleMove} id="signUp">
                    Sign Up
                  </button>
                </KeyEnter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
