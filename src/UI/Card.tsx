import StarSVG from "@/assets/StarSVG";
import React from "react";

interface Review {
        name: string, desc: string, numStars: number, acidity: number, aroma: number, body: number, flavor: number,
        sweetness: number, timestamp: number, id: string
}

const Card : React.FC<Review> = (props: Review) => {
    const stars = Array.from({length: props.numStars}, (v, i) => i)
    const date = new Date(props.timestamp)
    const formatted_date = date.toLocaleString('default', {
        month: 'long', day:'numeric', year: "numeric"
    })
    return (
        <article className={"max-w-3xl m-auto border border-black bg-white rounded my-4 text-left p-2 drop-shadow-xl"}>
            <div className={"flex justify-between"}>
                <div>
                    <span>{props.name}</span>
                    <p className={"text-sm pt-2"}>
                        {props.desc}
                    </p>
                </div>
                <div className={"text-right"}>
                    {stars.map((item, num) => {
                        return <StarSVG width={30} key={num} className={"inline transform -translate-y-1"}/>
                    })} <br/>
                    <span>{formatted_date}</span>
                </div>
            </div>
            <div className={"flex justify-between text-sm font-semibold w-2/3"}>
                <span>Acidity: {props.acidity}</span>
                <span>Aroma: {props.aroma}</span>
                <span>Body: {props.body}</span>
                <span>Flavor: {props.flavor}</span>
                <span>Sweetness: {props.sweetness}</span>
            </div>
        </article>
    )
}

export default Card