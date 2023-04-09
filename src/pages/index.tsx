import type {ReactElement} from "react";
import {NextPageWithLayout} from "@/pages/_app";
import Layout from "@/UI/Layout";
import Card from "@/UI/Card";
import { collection, getDocs } from 'firebase/firestore'
import { db } from "../../firebaseConfig"

const dbInstance = collection(db, 'reviews')

const Page: NextPageWithLayout = ({reviews}) => {
    return (
        <div className={"h-screen text-center text-2xl px-3"}>
            <h2 className={"font-semibold text-cw_brown py-4"}>
                Independent, authentic reviews written by coffee enthusiasts like you.
            </h2>
            <a
                href={"/new_review"}
                className={"font-semibold bg-cw_orange px-4 py-1 rounded-xl text-cw_brown drop-shadow-md " +
                "transition-all ease-in-out duration-300 hover:bg-cw_yellow border cursor-pointer"}>
                Submit a Review
            </a>
            {reviews.map((item, num) => {
                return <Card key={num} {...item} />
            })}
        </div>
    )
}

export async function getStaticProps() {
    return await getDocs(dbInstance).then((data) => {
        const reviews = data.docs.map(item => {
            return {...item.data(), id: item.id}
        })
        return {
            props: {
                reviews,
            }
        }})
        .catch(err => {
            console.log(err);
    })
}

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Page