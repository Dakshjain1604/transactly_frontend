import { useState } from "react";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";
import { AppBar } from "./subcompoents/AppBar";
import { FormInput } from "./subcompoents/FormInput";
import { MessagePopup } from "./subcompoents/MessagePopup";

export function SendMoney() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');
  const [message, setMessage] = useState("");

  const handleSendMoney = async () => {
    if (!amount || Number(amount) <= 0) {
      setError("Please enter a valid amount");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:3000/account/sendMoney",
        {
          to: id,
          amount: Number(amount),
        },
        {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      );
      
      if (response.status === 200 || response.data.success) {
        setMessage("Transfer successful!");
        setMessageType('success');
        setShowMessage(true);
      } else {
        setMessage(response.data.message || "Transaction failed. Please try again.");
        setMessageType('error');
        setShowMessage(true);
      }
    } catch (error: any) {
      if (error.response?.data?.message) {
        setMessage(error.response.data.message);
      } else if (error.response?.status === 400) {
        setMessage("Invalid amount or insufficient balance");
      } else {
        setMessage("Error sending money. Please try again.");
      }
      setMessageType('error');
      setShowMessage(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (!id || !name) {
    return (
      <div className="min-h-screen bg-blue-50">
        <AppBar />
        <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
          <div className="w-full max-w-2xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white/90 backdrop-blur-sm w-full max-w-md rounded-xl shadow-lg border border-gray-100 p-8 hover-scale">
              <div className="text-center text-red-600">
                Invalid user information. Please try again.
              </div>
              <div className="mt-4 flex justify-center">
                <button
                  onClick={() => navigate("/dashboard")}
                  className="bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-all"
                >
                  Return to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50">
      <AppBar />
      <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-200 rounded-xl shadow-lg border border-blue-100 p-8 hover:shadow-xl transition-all">
            {showMessage && (
              <MessagePopup
                type={messageType}
                message={message}
                showDashboardButton={messageType === 'success'}
              />
            )}

            <div className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-800">Send Money</div>
                <div className="text-blue-600 mt-2">
                  Transfer money to {name}
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <div className="flex items-center gap-4">
                  <div className="rounded-full h-12 w-12 bg-blue-200 flex justify-center items-center">
                    <div className="text-xl font-semibold text-blue-700">
                      {name[0].toUpperCase()}
                    </div>
                  </div>
                  <div className="font-medium text-blue-800">{name}</div>
                </div>
              </div>

              <div className="space-y-4 flex flex-col items-center">
                <FormInput
                  label="Amount (in ₹)"
                  type="number"
                  placeholder="Enter Amount"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    setError("");
                  }}
                  error={error}
                />
              </div>

              <div className="flex flex-col items-center space-y-4">
                <button
                  onClick={handleSendMoney}
                  disabled={isLoading}
                  className={`w-4/5 bg-blue-600 text-white font-medium py-2.5 px-4 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? "Processing..." : "Initiate Transfer"}
                </button>
                
                <button
                  onClick={() => navigate("/dashboard")}
                  className="w-4/5 bg-red-400 text-white font-medium py-2.5 px-4 rounded-lg hover:bg-red-500 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                >
                  Return to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
