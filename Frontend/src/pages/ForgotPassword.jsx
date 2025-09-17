import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
    const primaryColor = "#ff4d2d";
    const navigate = useNavigate();

    const [step, setStep] = React.useState(1);
    const [email, setEmail] = React.useState("");
    const [otp, setOtp] = React.useState("");
    const [newPassword, setNewPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    return (
        <div className='flex w-full items-center justify-center min-h-screen p-4'
            style={{ backgroundColor: "#fff9f6" }}>
            <div className='bg-white rounded-xl shadow-lg w-full max-w-md p-8'>
                <div className='flex items-center gap-4 mb-4 '>
                    <IoArrowBack className='text-[#ff4d2d] size={20} cursor-pointer' onClick={() => navigate(-1)} />
                    <h1 className='text-2xl font-bold text-center text-[#ff4d2d]'>Forgot Password</h1>
                </div>
                {step === 1 && (
                    <div>
                        <div className='mb-6'>
                            <label htmlFor="email" className='block text-gray-700 font-medium mb-1'>Email</label>
                            <input
                                type="email" id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 border-[1px] border-gray-200 rounded-lg focus:outline-none "
                                onChange={(e) => setEmail(e.target.value)}
                                value={email} />
                        </div>
                        <button className='w-full font-semibold rounded-lg  py-2 transition duration-200 text-white hover:bg-[#e64323] cursor-pointer' onClick={() => setStep(2)}  style={{ backgroundColor: primaryColor, color: 'white' }}>Send OTP</button>
                    </div>
                )}
                {step === 2 && (
                    <div>
                        <div className='mb-6'>
                            <label htmlFor="email" className='block text-gray-700 font-medium mb-1'>OTP</label>
                            <input
                                type="text" id="opt"
                                name="otp"
                                placeholder="Enter OTP"
                                className="w-full px-3 py-2 border-[1px] border-gray-200 rounded-lg focus:outline-none "
                                onChange={(e) => setOtp(e.target.value)}
                                value={otp} />
                        </div>
                        <button className='w-full font-semibold rounded-lg  py-2 transition duration-200 text-white hover:bg-[#e64323] cursor-pointer' onClick={() => setStep(2)} style={{ backgroundColor: primaryColor, color: 'white' }}>Verify</button>
                    </div>
                )}
                {step === 3 && (
                    <div>
                        <div className='mb-6'>
                            <label htmlFor="newPassword" className='block text-gray-700 font-medium mb-1'>New Password</label>
                            <input
                                type="text" id="otp"
                                name="otp"
                                placeholder="Enter New Password"
                                className="w-full px-3 py-2 border-[1px] border-gray-200 rounded-lg focus:outline-none "
                                onChange={(e) => setNewPassword(e.target.value)}
                                value={newPassword} />
                        </div>
                        <div className='mb-6'>
                            <label htmlFor="confirmPassword" className='block text-gray-700 font-medium mb-1'>New Password</label>
                            <input
                                type="text" id="otp"
                                name="otp"
                                placeholder="Confirm Password"
                                className="w-full px-3 py-2 border-[1px] border-gray-200 rounded-lg focus:outline-none "
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                value={confirmPassword} />
                        </div>
                        <button className='w-full font-semibold rounded-lg  py-2 transition duration-200 text-white hover:bg-[#e64323] cursor-pointer' onClick={() => setStep(2)} style={{ backgroundColor: primaryColor, color: 'white' }}>Reset Password</button>
                    </div>
                )}
            </div>
        </div>
    )
}
