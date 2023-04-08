import type {ReactElement} from "react";
import {NextPageWithLayout} from "@/pages/_app";
import Layout from "@/UI/Layout";
import Card from "@/UI/Card";
import { collection, getDocs } from 'firebase/firestore'
import { db } from "../../firebaseConfig"

const dbInstance = collection(db, 'reviews')

const submissionHandler = () => {
}

const Page: NextPageWithLayout = ({reviews}) => {
    return (
        <div className={"h-screen text-center text-2xl px-3"}>
            <h2 className={"font-semibold text-cw_brown py-4"}>
                Independent, authentic reviews written by coffee enthusiasts like you.
            </h2>
            <button className={"font-semibold bg-cw_orange px-4 py-1 rounded-xl text-cw_brown drop-shadow-md " +
                "transition-all ease-in-out duration-300 hover:bg-cw_yellow border"}>
                Submit a Review
            </button>
            {reviews.map((item, num) => {
                return <Card key={num} numStars={item.numStars} name={item.name} desc={item.desc}/>
            })}
            <div className={"w-full text-left text-sm bg-white border border-black rounded p-2"}>
                <form onSubmit={submissionHandler} method={"POST"}
                className={""}
                >
                    <label className={"block py-2"} htmlFor={"name"}>Name</label>
                    <input className={"block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"} name={"name"} placeholder={"Joe Schmoe"}/>
                    <label className={"block py-2"} htmlFor={"desc"}>Your Thoughts</label>
                    <textarea className={"block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"} name={"desc"} placeholder={"Write your review here!"}/>
                    <label className={"block py-2"} htmlFor={"numStars"}>Rating</label>
                    <input className={"w-1/2 h-2 rounded-lg appearance-none cursor-pointer dark:bg-cw_orange"}
                           name={"numStars"} type={"range"} min={0} step={1} max={5}
                    />
                    <label className={"block py-2"} htmlFor={"numStars"}>Acidity</label>
                    <input className={"w-1/2 h-2 rounded-lg appearance-none cursor-pointer dark:bg-cw_orange"}
                           name={"numStars"} type={"range"} min={0} step={1} max={5}
                    />
                </form>
            </div>
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