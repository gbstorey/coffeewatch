import type {ReactElement} from "react";
import {NextPageWithLayout} from "./_app";
import Layout from "../UI/Layout";
import Card from "../UI/Card";
import {collection, getDocs} from 'firebase/firestore'
import { db } from "../../firebaseConfig"
import {GetServerSideProps} from "next";

const dbInstance = collection(db, 'reviews')

interface Review {
    name: string, desc: string, numStars: number, acidity: number, aroma: number, body: number, flavor: number,
    sweetness: number, timestamp: number, id: string
}

type ReviewArray = {
    'reviews': Review[]
}

const Page: NextPageWithLayout<ReviewArray> = ({reviews}:ReviewArray) => {
    return (
        <div className={"text-center text-2xl px-3 md:max-w-2xl md:mx-auto"}>
            <h2 className={"font-semibold text-cw_brown py-4"}>
                Independent, authentic reviews written by coffee enthusiasts like you.
            </h2>
            <a
                href={"/new_review"}
                className={"font-semibold bg-cw_orange px-4 py-1 rounded-xl text-cw_brown drop-shadow-md " +
                "transition-all ease-in-out duration-300 hover:bg-cw_yellow border cursor-pointer"}>
                Submit a Review
            </a>
            <div className={"pt-6"}>
            {reviews.map((item, num) => {
                return <Card key={num} {...item} />
            })}
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    return await getDocs(dbInstance).then((data) => {
        const reviews = data.docs.map(item => {
            return {...item.data(), id: item.id}
        })
        console.log(reviews)
        return {
            props: {
                reviews
            }
        }}
    )
};


Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Page