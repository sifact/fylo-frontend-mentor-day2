import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <div className="grid gap-12 mt-20 mb-32">
            <div>
                <Image
                    className="mx-auto"
                    src={"/images/illustration-intro.png"}
                    alt=""
                    width={720}
                    height={530}
                />
            </div>
            <div>
                <div className="w-[50%] mx-auto grid gap-6">
                    <h1 className="text-3xl font-bold text-center">
                        All your files in one secure location, <br /> accessible
                        anywhere.
                    </h1>
                    <p className=" text-center opacity-60">
                        Fylo stores all your most important files in one secure
                        location. Access them wherever you need, share and
                        collaborate with friends family, and co-workers.{" "}
                    </p>
                    <div className="text-center">
                        <button className="bg-Cyan rounded-full py-4 px-16">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
