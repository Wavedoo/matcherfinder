import Pictures from "../components/Pictures"
import left from "../images/left.jpg"
import right from "../images/right.jpg"
import useLog from "../hooks/useLog"
// import type { Route } from "./+types/route-name";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useEffect, useState } from "react";

const client = generateClient<Schema>();

export default function TerribleHome(/* {
    loaderData,
    actionData,
    params,
    matches,
}: Route.ComponentProps */){
    useLog("log test")

    const [tests, setTests] = useState<Schema["DynamoTest"]["type"][]>([]);

    const fetchData = async () => {
        const { data: items, errors } = await client.models.DynamoTest.list();
        setTests(items)
    }

    useEffect(() => {
        fetchData();
    }, []);

    return <div className="h-6/12">
        <Pictures left={left} right={right} leftAlt="Left" rightAlt="Right" link="/matching" clickable/>
        {/* <div>
            <h1>Welcome to My Route with Props!</h1>
            <p>Loader Data: {JSON.stringify(loaderData)}</p>
            <p>Action Data: {JSON.stringify(actionData)}</p>
            <p>Route Parameters: {JSON.stringify(params)}</p>
            <p>Matched Routes: {JSON.stringify(matches)}</p>
        </div> */}

        {
            tests.map(({id, title, description}) => (
                <>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </>

            ))
        }
        
    </div>
}