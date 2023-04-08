import type {ReactElement} from "react";
import Layout from "@/UI/Layout";
import {NextPageWithLayout} from "@/pages/_app";

const Page: NextPageWithLayout = () => {
    return <></>
}

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Page