import Image from "next/image";
import React from "react";
import Container from "../Container";

const Reviews = () => {
    return (
        <Container>
            <div className="flex justify-between gap-6 mb-32 relative">
                <div className="p-4 rounded-sm bg-reviewBg w-[400px] space-y-4 ">
                    <Image
                        src={"/images/bg-quotes.png"}
                        alt=""
                        height={40}
                        width={40}
                        className="absolute top-[-25px] left-[-10px] -z-10"
                    />
                    <p className="font-light opacity-90">
                        Fylo has improved our team Productivity by an order of
                        magnitude. Since making the switch our team has become a
                        well-oiled collaboration machine.
                    </p>
                    <div className="flex items-center gap-4">
                        <div>
                            <Image
                                src={"/images/profile-1.jpg"}
                                alt=""
                                height={40}
                                width={40}
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex flex-col justify-between text-sm">
                            <span>Satish Patel</span>
                            <span className="text-xs opacity-80">
                                Founder & CEO, Huddle
                            </span>
                        </div>
                    </div>
                </div>
                <div className="p-4 rounded-sm bg-reviewBg w-[400px] space-y-4">
                    <p className="font-light opacity-90">
                        Fylo has improved our team Productivity by an order of
                        magnitude. Since making the switch our team has become a
                        well-oiled collaboration machine.
                    </p>
                    <div className="flex items-center gap-4">
                        <div>
                            <Image
                                src={"/images/profile-2.jpg"}
                                alt=""
                                height={40}
                                width={40}
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex flex-col justify-between text-sm">
                            <span>Satish Patel</span>
                            <span className="text-xs opacity-80">
                                Founder & CEO, Huddle
                            </span>
                        </div>
                    </div>
                </div>
                <div className="p-4 rounded-sm bg-reviewBg w-[400px] space-y-4">
                    <p className="font-light opacity-90">
                        Fylo has improved our team Productivity by an order of
                        magnitude. Since making the switch our team has become a
                        well-oiled collaboration machine.
                    </p>
                    <div className="flex items-center gap-4">
                        <div>
                            <Image
                                src={"/images/profile-3.jpg"}
                                alt=""
                                height={40}
                                width={40}
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex flex-col justify-between text-sm">
                            <span>Satish Patel</span>
                            <span className="text-xs opacity-80">
                                Founder & CEO, Huddle
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Reviews;
