import { useState, useEffect } from "react"
import { SendMoneyButton } from "./subcompoents/sendMoneyButton";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setfilter] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:3000/user/find/?filter=${filter}`).then(response => {
            setUsers(response.data.users);
        })
    }, [filter])

    return (
        <div className="px-2 py-4 sm:px-4 sm:py-6">
            <div className="text-lg sm:text-xl font-bold text-wh mb-4">
                Users
            </div>
            <div className="mb-4 sm:mb-6">
                <input 
                    onChange={(e) => { setfilter(e.target.value) }} 
                    type="text" 
                    placeholder="Search users..." 
                    className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                />
            </div>
            {/* Responsive grid for user cards */}
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-0.5 sm:gap-4 justify-items-center">
                {users.map(user => <User key={user._id} user={user} />)}
            </div>
        </div>
    )
}

function User({ user }) {
    const navigate = useNavigate();
    return (
        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-2 pb-6 pt-6 mb-2 sm:p-4 sm:px-8 flex flex-col items-center w-full max-w-[140px] sm:max-w-xs min-h-[150px] sm:min-h-[200px] hover:scale-105 transition-all">
            <div className="rounded-full h-8 w-8 sm:h-16 sm:w-16 bg-blue-100 flex justify-center items-center mb-1 sm:mb-4 border-2 border-blue-200">
                <div className="text-base sm:text-2xl font-bold text-blue-600">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="font-bold text-blue-700 text-xs sm:text-xl mb-10 sm:mb-12 text-center">
                {user.firstName} {user.lastName}
            </div>
            <button
                onClick={() => { navigate("/send?id=" + user._id + "&name=" + user.firstName) }}
                className="w-full bg-blue-600 border border-blue-700 text-white font-semibold py-1 sm:py-2 rounded-xl hover:bg-blue-700 transition-all text-xs sm:text-lg"
            >
                Send Money
            </button>
        </div>
    );
}