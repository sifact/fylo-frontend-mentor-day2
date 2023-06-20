"use client";

import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";
import Container from "../Container";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const setOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div
                className={`${
                    isOpen ? "block md:hidden" : "hidden"
                } fixed z-50 bg-neutral-900/70  inset-0 `}
            >
                <div
                    style={{ transition: "all 0.3s ease-in-out" }}
                    className={`
                    translate duration-300 w-4/6 pt-20 pl-8 gap-4 h-full bg-primary flex flex-col text-xl font-semibold relative sm:text-blue-grayishBlue
        

        `}
                >
                    <Image
                        onClick={setOpen}
                        className=" absolute top-4 left-4"
                        src="/images/icon-close.svg"
                        alt="Image"
                        width="12"
                        height="12"
                    />

                    <Link href="/women">Features</Link>
                    <Link href="/about">Team</Link>
                    <Link href="/contact">Sign In</Link>
                </div>
            </div>
            <Container>
                <div className="flex items-center justify-between py-6">
                    <div className="flex gap-3 items-center justify-center">
                        <Image
                            onClick={setOpen}
                            className="md:hidden"
                            src="/images/icon-menu.svg"
                            alt="Image"
                            width="15"
                            height="15"
                        />
                        <Image
                            src="/images/logo.svg"
                            alt="Image"
                            width="150"
                            height="150"
                        />
                    </div>

                    <div className={`ml-20 md:flex gap-5 hidden`}>
                        <Link href="/men">Features</Link>
                        <Link href="/women">Team</Link>
                        <Link href="/about">Sign In</Link>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Navbar;
