import Image from "next/image";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Productivity from "./components/Productivity/Productivity";
import Reviews from "./components/Reviews/Reviews";
import SingIn from "./components/SignIn/SingIn";
import Footer from "./components/Footer/Footer";

export default function Home() {
    return (
        <main>
            <Hero />
            <Services />
            <Productivity />
            <Reviews />

            <Footer />
        </main>
    );
}
