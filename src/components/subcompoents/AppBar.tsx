
import { useNavigate } from "react-router-dom";
import { WalletIcon } from "../../icons/walletIcon";
import { UserIcon } from "../../icons/userIcon";

export function AppBar() {
    const navigate = useNavigate();

    return (
        <div className="bg-blue-200 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <div className="text-blue-800 text-xl font-semibold tracking-wide flex items-center">
                            <div><WalletIcon/></div>
                            <div className="pl-3 cursor-pointer hover:scale-105 transition-all" onClick={()=>{
                                navigate('/dashboard')
                            }}>TRANSCTLY</div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => {
                                sessionStorage.removeItem("token");
                                navigate("/signin");
                            }}
                            className="bg-blue-300 text-blue-800 px-4 py-2 rounded-md  hover:bg-blue-400  border border-blue-400"
                        >
                            Logout
                        </button>
                        <UserIcon/>
                    </div>
                </div>
            </div>
        </div>
    );
}