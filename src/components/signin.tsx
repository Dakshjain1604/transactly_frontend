import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { AppBar } from "./subcompoents/AppBar";
import { FormInput } from "./subcompoents/FormInput";
import { BACKEND_URL } from "../config";

export function Signin() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(`${BACKEND_URL}/user/signin`, {
            username,
            password
        }).then((response) => {
            alert(response.status)
            navigate('/Dashboard')
            sessionStorage.setItem("token", response.data.token);
        });
    }

    return (
        <div className="min-h-screen bg-blue-50">
            <AppBar isLandingPage="true"/>
            <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
                <div className="w-full max-w-2xl px-4 sm:px-6 lg:px-8">
                    <div className="bg-blue-200 rounded-xl shadow-lg border border-blue-100 p-8 hover:shadow-xl transition-all">
                        <div className="space-y-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-800">Sign In</div>
                                <div className="text-blue-600 mt-2">
                                    Enter your credentials to access your account
                                </div>
                            </div>

                            <div className="space-y-4 flex flex-col items-center">
                                <FormInput
                                    label="Email"
                                    type="email"
                                    placeholder="Enter your email"
                                    reference={usernameRef}
                                />

                                <FormInput
                                    label="Password"
                                    type="password"
                                    placeholder="Enter your password"
                                    reference={passwordRef}
                                />
                            </div>

                            <div className="flex flex-col items-center space-y-4">
                                <button
                                    onClick={signin}
                                    className="w-4/5 bg-blue-600 text-white font-medium py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Sign In
                                </button>
                                
                                <div className="text-blue-600">
                                    Don't have an account?{" "}
                                    <span
                                        className="text-blue-700 font-medium cursor-pointer hover:text-blue-800"
                                        onClick={() => navigate("/signup")}
                                    >
                                        Sign Up
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