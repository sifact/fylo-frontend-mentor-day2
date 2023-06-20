import React from "react";

const SingIn = () => {
    return (
        <div className="bg-reviewBg rounded-md space-y-6 p-12 text-center  mx-auto">
            <h1 className="text-3xl font-bold">Get early access today</h1>
            <p className="text-sm opacity-80 md:w-[80%] mx-auto">
                It only takes a minutes to sign up and our free starter tier is
                extremely generous. If you have any questions, our support team
                would be happy to help you.
            </p>
            <div className="flex gap-6">
                <input
                    className="text-black outline-none rounded-full p-4 w-[60%] bg-white"
                    type="email"
                    placeholder="email@example.com"
                />
                <button className="py-4 px-12 rounded-full text-white bg-Cyan">
                    Get Started For Free
                </button>
            </div>
        </div>
    );
};

export default SingIn;
