import Image from "next/image";
import Container from "../Container";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import SingIn from "../SignIn/SingIn";
// import {} from "react-icons/bi";

const Footer = () => {
    return (
        <div className="bg-footer pt-60 pb-40 mt-80 relative">
            <div className="w-[70%] absolute left-1/2 bottom-60 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl">
                <SingIn />
            </div>
            <Container>
                <div className="flex justify-between gap-4">
                    <div className="space-y-6 w-[30%]">
                        <div>
                            <Image
                                src="/images/logo.svg"
                                alt="Image"
                                width="150"
                                height="150"
                            />
                        </div>
                        <div className="flex gap-4">
                            <div>
                                {" "}
                                <Image
                                    src="/images/icon-location.svg"
                                    alt="Image"
                                    width="30"
                                    height="30"
                                />
                            </div>
                            <p className="text-xs opacity-80 ">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nihil voluptas, beatae amet
                                quam at corrupti ratione! Veritatis officia est
                                voluptates?
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex gap-4 items-center">
                            <div>
                                <Image
                                    src="/images/icon-phone.svg"
                                    alt="Image"
                                    width="15"
                                    height="15"
                                />
                            </div>

                            <span>+1-564-123-4567</span>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div>
                                <Image
                                    src="/images/icon-email.svg"
                                    alt="Image"
                                    width="15"
                                    height="15"
                                />
                            </div>

                            <span>example@fylo.com</span>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between">
                        <Link href="">About Us</Link>
                        <Link href="">Jobs</Link>
                        <Link href="">Press</Link>
                        <Link href="">Blog</Link>
                    </div>
                    <div className="flex flex-col justify-between">
                        <Link href="">Contact Us</Link>
                        <Link href="">Terms</Link>
                        <Link href="">Privacy</Link>
                    </div>

                    <div className="flex gap-4 items-start">
                        <div className="border rounded-full p-2">
                            <FaFacebookF />
                        </div>
                        <div className="border rounded-full p-2">
                            <FaTwitter />
                        </div>
                        <div className="border rounded-full p-2">
                            <FaInstagram />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
