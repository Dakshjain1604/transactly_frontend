import { useEffect, useState } from "react"
import { AppBar } from "./subcompoents/AppBar"
import axios from "axios"
import { useNavigate } from "react-router-dom";

interface Transaction {
    senderId: string;
    receiverId: string;
    amount: number;
    timeStamp: string;
}

interface SentTransaction extends Transaction {
    reciever: string;
}

interface ReceivedTransaction extends Transaction {
    sender: string;
}

interface HistoryResponse {
    SentMoney: SentTransaction[];
    RecievedMoney: ReceivedTransaction[];
}

export function History() {
    const [paymentData, setPaymentData] = useState<HistoryResponse>({ SentMoney: [], RecievedMoney: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (!token) {
            setError("No token found");
            setLoading(false);
            return;
        }

        setLoading(true);
        axios.get("http://localhost:3000/account/getHistory", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setPaymentData(response.data);
            setLoading(false);
        }).catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-blue-50">
                <AppBar />
                <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
                    <div className="text-xl text-blue-600">Loading transaction history...</div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-blue-50">
                <AppBar />
                <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
                    <div className="text-xl text-red-600">Error: {error}</div>
                </div>
            </div>
        );
    }

    const paymentsSent = paymentData.SentMoney;
    const paymentsReceived = paymentData.RecievedMoney;

    return (
        <div className="min-h-screen bg-blue-50">
            <AppBar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-3xl font-bold text-blue-800 mb-8">
                    Transaction History
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="text-xl font-semibold text-blue-700 mb-4">
                            Money Sent
                        </div>
                        <div className="space-y-4">
                            {paymentsSent.length > 0 ? (
                                paymentsSent.map((sent, index) => (
                                    <PaymentsSent key={index} sent_money={sent} />
                                ))
                            ) : (
                                <div className="text-gray-500 text-center py-4">
                                    No money sent yet
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="text-xl font-semibold text-blue-700 mb-4">
                            Money Received
                        </div>
                        <div className="space-y-4">
                            {paymentsReceived.length > 0 ? (
                                paymentsReceived.map((received, index) => (
                                    <PaymentsReceived key={index} received_money={received} />
                                ))
                            ) : (
                                <div className="text-gray-500 text-center py-4">
                                    No money received yet
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
            <button
                  onClick={() => navigate("/dashboard")}
                  className="w-2/5 bg-red-400 text-white font-medium py-2.5 px-4 rounded-lg hover:bg-red-500 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                >
                  Return to Dashboard
            </button>
            </div>
        </div>
    );
}

interface PaymentsSentProps {
    sent_money: SentTransaction;
}

function PaymentsSent({ sent_money }: PaymentsSentProps) {
    return (
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 hover:shadow-md transition-all">
            <div className="flex justify-between items-center">
                <div>
                    <div className="font-medium text-blue-800">
                        To: {sent_money.reciever}
                    </div>
                    <div className="text-sm text-gray-600">
                        {new Date(sent_money.timeStamp).toLocaleString()}
                    </div>
                </div>
                <div className="text-xl font-semibold text-red-600">
                    -₹{sent_money.amount}
                </div>
            </div>
        </div>
    );
}

interface PaymentsReceivedProps {
    received_money: ReceivedTransaction;
}

function PaymentsReceived({ received_money }: PaymentsReceivedProps) {
    return (
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 hover:shadow-md transition-all">
            <div className="flex justify-between items-center">
                <div>
                    <div className="font-medium text-blue-800">
                        From: {received_money.sender}
                    </div>
                    <div className="text-sm text-gray-600">
                        {new Date(received_money.timeStamp).toLocaleString()}
                    </div>
                </div>
                <div className="text-xl font-semibold text-green-600">
                    +₹{received_money.amount}
                </div>
            </div>
        </div>
    );
}
