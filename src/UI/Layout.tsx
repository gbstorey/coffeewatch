import Navbar from "@/UI/Navbar";
import Footer from "@/UI/Footer";
import React from "react";

type Props = {
    children: React.ReactNode
}

export default function Layout({children}: Props) {
    return (
        <>
            <Navbar />
                <main>{children}</main>
            <Footer />
        </>
    )
}