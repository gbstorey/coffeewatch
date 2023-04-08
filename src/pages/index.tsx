import type {ReactElement} from "react";
import Layout from "@/UI/Layout";
import {NextPageWithLayout} from "@/pages/_app";

const Page: NextPageWithLayout = () => {
    return (
        <div className={"h-screen text-center text-2xl"}>
            <h2 className={"font-semibold text-cw_brown py-4"}>
                Independent, authentic reviews written by coffee enthusiasts like you.
            </h2>
            <button className={"font-semibold bg-cw_orange px-4 py-1 rounded-xl text-cw_brown drop-shadow-md " +
                "transition-all ease-in-out duration-300 hover:bg-cw_yellow border"}>
                Submit a Review
            </button>
        </div>
    )
}

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Page