import Image from "next/image";
import React from "react";
import Container from "../Container";

const Productivity = () => {
    return (
        <Container>
            <div className="flex gap-12 mb-32">
                <div className="w-1/2 ">
                    <div className="h-[465px] relative ">
                        <Image
                            src={"/images/illustration-stay-productive.png"}
                            alt=""
                            fill={true}
                            sizes="max-width: 625px"
                            className="object-contain"
                        />
                    </div>
                </div>
                <div className="w-1/2 grid place-items-center">
                    <div className="  space-y-4">
                        <h1 className="text-5xl font-bold">
                            Stay productive, wherever you are
                        </h1>
                        <p className="font-light opacity-80">
                            Never let location be an issue when accessing your
                            files. Fylo has you covered for all of your file
                            storage needs.{" "}
                        </p>
                        <p className="font-light opacity-80">
                            Securely share files and folders with friends,
                            family and colleagues for live collaboration. No
                            email attachments required.
                        </p>

                        <button className="font-light opacity-80 hover:underline">
                            See how Fylo works
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Productivity;
