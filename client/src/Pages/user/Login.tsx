/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import mainLogo from "../../assets/main-logo.svg"

const Login: React.FC = () => {
    const [errors, _setError] = useState<boolean>(false)
    const [isLoading, _setIsLoading] = useState<boolean>(false)
    console.log()

    return (
        <div className="bg-white ">
            <div className="flex justify-center h-screen">
                {/* TODO: replace the image url with local image */}
                <div className="hidden bg-[url('https://images.unsplash.com/photo-1593642532400-2682810df593?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover lg:block lg:w-2/3">
                    <div className="flex items-center w-full h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 className="text-2xl font-bold text-white sm:text-3xl">
                                Eimi Technology and Innovations
                            </h2>
                            <p className="max-w-xl mt-3 text-gray-300">

                                Empowering your business by transforming and digitizing your platform for enhanced efficiency, reach, and growth.

                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6 ">
                    <div className="flex-1">
                        <div className="text-center">
                            <div className="flex justify-center mx-auto"></div>
                            <img src={mainLogo} alt="Eimi Tech Innovation" className='mx-auto' />
                            <p className="mt-3 text-gray-500">
                                Login to your account
                            </p>
                        </div>

                        <div className="mt-8">
                            <form className="space-y-4">
                                {/* Email Field */}
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${errors ? "border-red-500" : "border-gray-200"
                                            } rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-400 focus:outline-none focus:ring-opacity-40`}

                                    />

                                </div>



                                {/* Password Field */}
                                <div>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${errors ? "border-red-500" : "border-gray-200"
                                            } rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-400 focus:outline-none focus:ring-opacity-40`}

                                    />
                                    {errors && (
                                        <p className="text-sm text-red-500">
                                            {errors}
                                        </p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div className="mt-6">
                                    <button
                                        disabled={isLoading}
                                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform rounded-lg bg-btnBg hover:bg-btnHover focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 disabled:opacity-50"
                                    >
                                        {isLoading ? "Loading..." : "Login"}
                                    </button>
                                </div>
                                <p className='text-sm text-center text-gray-500'> Hi there, welcome back 😊</p>


                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login 