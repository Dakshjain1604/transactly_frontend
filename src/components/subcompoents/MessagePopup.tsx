import { useNavigate } from "react-router-dom";

interface MessagePopupProps {
    type: 'success' | 'error';
    message: string;
    showDashboardButton?: boolean;
}

export function MessagePopup({ type, message, showDashboardButton = false }: MessagePopupProps) {
    const navigate = useNavigate();

    return (
        <div className={`p-6 rounded-xl shadow-lg ${
            type === 'success' 
                ? 'bg-green-100 border border-green-400 text-green-700' 
                : 'bg-red-100 border border-red-400 text-red-700'
        }`}>
            <div className="flex items-center justify-center mb-4">
                <span className="mr-2 text-2xl">
                    {type === 'success' ? '✓' : '⚠'}
                </span>
                <span className="text-lg font-medium">{message}</span>
            </div>
            {showDashboardButton && (
                <div className="flex justify-center">
                    <button
                        onClick={() => navigate("/dashboard")}
                        className="bg-green-600 text-white font-medium py-2.5 px-6 rounded-lg hover:bg-green-700 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                        Go to Dashboard
                    </button>
                </div>
            )}
        </div>
    );
    
} 