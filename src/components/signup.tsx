import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppBar } from "./subcompoents/AppBar";
import { FormInput } from "./subcompoents/FormInput";
import { BACKEND_URL } from "../config";

export function Signup() {
  const navigate = useNavigate();
  const firstnameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  async function signup() {
    // Clear previous error
    setError("");
    
    const firstname = firstnameRef.current?.value;
    const lastname = lastnameRef.current?.value;
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    // Basic validation
    if (!firstname || !lastname || !username || !password) {
      setError("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(`${BACKEND_URL}/user/signup`, {
        firstname,
        lastname,
        username,
        password,
      });
      
      alert(`Signup successful!`);
      navigate("/Signin");
    } catch (err: any) {
     // Debug log
      
      if (err.response) {
        
        const status = err.response.status;
        const message = err.response.data?.message || "An error occurred";
        
     
        
        if (status === 411) {
          if (message.includes("Email already taken")) {
            setError("Email already taken. Please try a different email.");
          } else if (message.includes("Incorrect inputs")) {
            setError("Please check your inputs and try again.");
          } else {
            setError(message);
          }
        } else if (status >= 500) {
          setError("Server error. Please try again later.");
        } else {
          setError(message);
        }
      } else if (err.request) {
        
        setError("Network error. Please check your connection and try again.");
      } else {
       
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  function RedirectLogin() {
    navigate("/Signin");
  }

  return (
    <div className="min-h-screen bg-blue-50">
      <AppBar isLandingPage="true"/>
      <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-200 rounded-xl shadow-lg border border-blue-100 p-8 hover:shadow-xl transition-all">
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-800">Sign Up</div>
                <div className="text-blue-600 mt-2">
                  Create your account to get started
                </div>
              </div>

              {/* Error message */}
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center">
                  {error}
                </div>
              )}

              <div className="space-y-4 flex flex-col items-center">
                <FormInput
                  label="First Name"
                  type="text"
                  placeholder="Enter your first name"
                  reference={firstnameRef}
                />

                <FormInput
                  label="Last Name"
                  type="text"
                  placeholder="Enter your last name"
                  reference={lastnameRef}
                />

                <FormInput
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  reference={usernameRef}
                />

                <FormInput
                  label="Password"
                  type="password"
                  placeholder="Create a password"
                  reference={passwordRef}
                />
              </div>

              <div className="flex flex-col items-center space-y-4">
                <button
                  onClick={signup}
                  disabled={isLoading}
                  className={`w-4/5 font-medium py-2.5 px-4 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    isLoading
                      ? "bg-blue-400 text-white cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing Up...
                    </div>
                  ) : (
                    "Sign Up"
                  )}
                </button>
                
                <div className="text-blue-600">
                  Already have an account?{" "}
                  <span
                    className="text-blue-700 font-medium cursor-pointer hover:text-blue-800"
                    onClick={RedirectLogin}
                  >
                    Sign In
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}