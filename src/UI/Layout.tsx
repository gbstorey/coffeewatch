import Navbar from "@/UI/Navbar";
import Footer from "@/UI/Footer";

export default function Layout({children}) {
    return (
        <>
            <Navbar />
                <main>{children}</main>
            <Footer />
        </>
    )
}