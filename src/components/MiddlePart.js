import React, { useState } from 'react';
import image from '../assets/image.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LeftPart = () => {
    return (
        <div className="w-full bg-gray-100 p-4 flex  justify-center article-container">
    <div className="article-content text-center">
        <img src={image} alt="Image" className="article-img " />
        
    </div>
</div>

    );
}

const RightPart = () => {
    const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
    const [newPasswordVisible, setNewPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    return (
        <div className="w-full p-10 flex  justify-center bg-gray-100 header-section">
            <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md my-7">

                <div className="mb-6 title">
                    <h2 className="text-xl font-bold">Take your career to new heights!</h2>
                </div>

                {/* Old Password */}
                <div className="mb-6 relative">
                    <label htmlFor="old-password" className="block text-gray-700 text-sm font-bold mb-2">Old Password</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="old-password"
                        type={oldPasswordVisible ? 'text' : 'password'}
                        placeholder="Password" 
                    />
                    <i
                        className="absolute right-3 top-2/3 transform -translate-y-1/3 cursor-pointer text-gray-300"
                        onClick={() => setOldPasswordVisible(!oldPasswordVisible)}
                    >
                        {oldPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                    </i>
                </div>

                {/* New Password */}
                <div className="mb-6 relative">
                    <label htmlFor="new-password" className="block text-gray-700 text-sm font-bold mb-2">New Password</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="new-password"
                        type={newPasswordVisible ? 'text' : 'password'}
                        placeholder="Password"
                    />
                    <i
                        className="absolute right-3 top-2/3 transform -translate-y-1/3 cursor-pointer  text-gray-300"
                        onClick={() => setNewPasswordVisible(!newPasswordVisible)}
                    >
                        {newPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                    </i>
                </div>

                {/* Confirm New Password */}
                <div className="mb-6 relative">
                    <label htmlFor="confirm-password" className="block text-gray-700 text-sm font-bold mb-2">Confirm New Password</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="confirm-password"
                        type={confirmPasswordVisible ? 'text' : 'password'}
                        placeholder="Password"
                    />
                    <i
                        className="absolute right-3 top-2/3 transform -translate-y-1/3 cursor-pointer text-gray-300"
                        onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                    >
                        {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                    </i>
                </div>

                {/* Update Button */}
                <div className="mb-4">
                    <button
                        className="shadow appearance-none border rounded w-full py-2 px-3 my-3 leading-tight focus:outline-none focus:shadow-outline button-update"
                        type="button"
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
}

const MiddlePart = () => {
    return (
        <div className="flex flex-col md:flex-row w-full">
            <LeftPart />
            <RightPart />
        </div>
    );
}

export default MiddlePart;
