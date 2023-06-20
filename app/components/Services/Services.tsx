import Image from "next/image";
import React from "react";

const Services = () => {
    return (
        <div className="grid grid-cols-2 gap-20 md:w-[80%] mx-auto mb-32">
            <div className="grid text-center  gap-4 ">
                <div className="mx-auto">
                    <Image
                        src={"/images/icon-access-anywhere.svg"}
                        alt=""
                        width={100}
                        height={100}
                    />
                </div>
                <h1 className="font-semibold">Access your files, anywhere</h1>
                <p className="text-sm tracking-wide opacity-80 w-[80%] mx-auto">
                    The ability to use a smartphone, tablet, or computer to
                    access your account means your files follow you everywhere.
                </p>
            </div>
            <div className="grid text-center  gap-4 ">
                <div className="mx-auto">
                    <Image
                        src={"/images/icon-security.svg"}
                        alt=""
                        width={100}
                        height={90}
                    />
                </div>

                <h1 className="font-semibold">Access your files, anywhere</h1>
                <p className="text-sm tracking-wide opacity-80 w-[80%] mx-auto">
                    The ability to use a smartphone, tablet, or computer to
                    access your account means your files follow you everywhere.
                </p>
            </div>
            <div className="grid text-center  gap-4 ">
                <div className="mx-auto">
                    <Image
                        src={"/images/icon-collaboration.svg"}
                        alt=""
                        width={100}
                        height={100}
                    />
                </div>
                <h1 className="font-semibold">Access your files, anywhere</h1>
                <p className="text-sm tracking-wide opacity-80 w-[80%] mx-auto">
                    The ability to use a smartphone, tablet, or computer to
                    access your account means your files follow you everywhere.
                </p>
            </div>
            <div className="grid text-center  gap-4 ">
                <div className="mx-auto">
                    <Image
                        src={"/images/icon-any-file.svg"}
                        alt=""
                        width={100}
                        height={100}
                    />
                </div>
                <h1 className="font-semibold">Access your files, anywhere</h1>
                <p className="text-sm tracking-wide opacity-80 w-[80%] mx-auto">
                    The ability to use a smartphone, tablet, or computer to
                    access your account means your files follow you everywhere.
                </p>
            </div>
        </div>
    );
};

export default Services;
