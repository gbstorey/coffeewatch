import {NextPageWithLayout} from "./_app";
import React, {ReactElement, SyntheticEvent, useState} from "react";
import Layout from "../UI/Layout";
import {addDoc, collection, DocumentData} from 'firebase/firestore'

import { db } from "../../firebaseConfig"
import {redirect} from "next/navigation";

const dbInstance = collection(db, 'reviews')

const Page: NextPageWithLayout = () => {
    const formatted_date = new Date().toLocaleString('default', {
        month: 'long', day:'numeric', year: "numeric"
    })
    const initialState = {
        name: '', desc: '', numStars: 5, acidity: 5, aroma: 5, body: 5, flavor: 5, sweetness: 5, timestamp: formatted_date
    }
    const [inputs, setInputs] = useState(initialState);
    const submissionHandler = (e: React.SyntheticEvent) => {
        setInputs(values => ({...values}))
        e.preventDefault()
        addDoc(dbInstance, {
        ...inputs as DocumentData,
        }).then(() => {
            setInputs(() => (initialState))
            redirect("/")
        })
    }
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const textAreaChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        const name = event.target.name
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    return (
        <div className={"w-1/2 text-left text-sm bg-white border border-black rounded p-2"}>
            <form onSubmit={submissionHandler} method={"POST"}>
                <label className={"flex-1 block py-2"} htmlFor={"name"}>
                    Name
                </label>
                <input name={"name"} placeholder={"Joe Schmoe"} onChange={changeHandler} value={inputs.name}
                       className={"block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
                />
                <label className={"block py-2"} htmlFor={"desc"}>
                    Your Thoughts
                </label>
                <textarea name={"desc"} placeholder={"Write your review here!"} onChange={textAreaChangeHandler} value={inputs.desc}
                          className={"block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
                />
                <label className={"block py-2"} htmlFor={"acidity"}>
                    Acidity
                </label>
                <input name={"acidity"} type={"range"} min={0} step={1} max={5} value={inputs.acidity} onChange={changeHandler}
                       className={"w-full h-2 rounded-lg appearance-none cursor-pointer bg-orange-200"}
                />
                <label className={"block py-2"} htmlFor={"aroma"}>
                    Aroma
                </label>
                <input name={"aroma"} type={"range"} min={0} step={1} max={5} value={inputs.aroma} onChange={changeHandler}
                    className={"w-full h-2 rounded-lg appearance-none cursor-pointer bg-orange-300"}
                />
                <label className={"block py-2"} htmlFor={"body"}>
                    Body
                </label>
                <input name={"body"} type={"range"} min={0} step={1} max={5} value={inputs.body} onChange={changeHandler}
                    className={"w-full h-2 rounded-lg appearance-none cursor-pointer bg-orange-400"}
                />
                <label className={"block py-2"} htmlFor={"flavor"}>
                    Flavor
                </label>
                <input name={"flavor"} type={"range"} min={0} step={1} max={5} value={inputs.flavor} onChange={changeHandler}
                    className={"w-full h-2 rounded-lg appearance-none cursor-pointer bg-orange-500"}
                />
                <label className={"block py-2"} htmlFor={"sweetness"}>
                    Sweetness
                </label>
                <input name={"sweetness"} type={"range"} min={0} step={1} max={5} value={inputs.sweetness} onChange={changeHandler}
                    className={"w-full h-2 rounded-lg appearance-none cursor-pointer bg-orange-600"}
                />
                <label className={"block py-2"} htmlFor={"numStars"}>
                    Rating
                </label>
                <input name={"numStars"} type={"range"} min={0} step={1} max={5} value={inputs.numStars} onChange={changeHandler}
                    className={"w-full h-2 rounded-lg appearance-none cursor-pointer bg-orange-700"}
                />
                <div className={"text-center"}>
                    <button className={"font-semibold bg-cw_orange px-4 py-1 my-2 rounded-xl text-cw_brown drop-shadow-md " +
                        "transition-all ease-in-out duration-300 hover:bg-cw_yellow border items-center"}>
                        Submit
                    </button>
                </div>
            </form>
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