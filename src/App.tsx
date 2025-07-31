import './App.css'
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import { Signin } from './components/signin';
import { Signup } from './components/signup';
import {Dashboard} from "./components/Dashboard"
import {SendMoney} from "./components/sendMoney"
import { History } from './components/history';
import LandingPage from './components/LandingPage';
import { VerifyOtp } from './components/subcompoents/VerifyOtp';
function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='Signin' element={<Signin/>}></Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<SendMoney />} />
        <Route path="/history" element={<History/>} />
        <Route path="/otp" element={<VerifyOtp/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
    
}

export default App;
