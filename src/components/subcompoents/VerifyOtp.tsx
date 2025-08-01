import axios from "axios";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export function VerifyOtp({ onVerified }: { onVerified: () => void }) {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const token = sessionStorage.getItem("token");

  const getOtp = async () => {
    setSendingOtp(true);
    setError(null);
    try {
      const res = await axios.get("http://localhost:3000/user/Sendotp", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        setOtpSent(true);
        setOtpVerified(false);
      } else {
        setError("OTP request failed.");
      }
    } catch (err: any) {
      console.error("Error sending OTP:", err);
      setError(
        err.response?.data?.message || "Failed to send OTP. Please try again."
      );
    } finally {
      setSendingOtp(false);
    }
  };

  const verifyOtp = async () => {
    setLoading(true);
    setError(null);
    setOtpSent(false);
    setOtpVerified(false);

    try {
      const res = await axios.post(
        "http://localhost:3000/user/verifyotp",
        { otp_code: otp },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      if (res.status === 200) {
        setOtpVerified(true);
        setOtp(""); 
        onVerified();
      }
    } catch (err: any) {
      console.error("Error verifying OTP:", err);
      setError(
        err.response?.data?.message ||
          `Server error (${err.response?.status || "Unknown"}). Please try again.`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-xl shadow-md border mt-10">
      <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
        Verify Your Payment
      </h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 mb-4 rounded">
          {error}
        </div>
      )}

      {otpSent && !loading && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 mb-4 rounded">
          OTP sent successfully!
        </div>
      )}

      {otpVerified && !loading && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 mb-4 rounded">
          OTP verified successfully! 🎉
        </div>
      )}

      <button
        disabled={sendingOtp}
        onClick={getOtp}
        className={`w-full mb-4 py-2 px-4 rounded-md text-white ${
          sendingOtp ? "bg-blue-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {sendingOtp ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="animate-spin w-4 h-4" /> Sending...
          </span>
        ) : (
          "Send OTP"
        )}
      </button>

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        disabled={loading || !otp.trim()}
        onClick={verifyOtp}
        className={`w-full py-2 px-4 rounded-md text-white ${
          loading || !otp.trim()
            ? "bg-blue-300 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="animate-spin w-4 h-4" /> Verifying...
          </span>
        ) : (
          "Verify OTP"
        )}
      </button>
    </div>
  );
}
