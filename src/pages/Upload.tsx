// import MatcherFormGroup from "../components/MatcherFormControl";
import Pictures from "../components/Pictures";
import { useNavigate } from "react-router";
import { useAuthenticator } from "@aws-amplify/ui-react";
import ImageFileInput from "../components/ImageFileInput";
import useLog from "../hooks/useLog";
import Textbox from "../components/Textbox";
import TagAdder from "../components/TagAdder";
import { useEffect, useState, type SetStateAction } from "react";
import NewImageFileInput from "../components/NewImageFileInput";
import { generateClient } from 'aws-amplify/data'
import type { Schema } from '../../amplify/data/resource'
import PreviewUpload from "../components/PreviewUpload";
import DisplayImageFileInput from "../components/DisplayImageFileInput";
import TextArea from "../components/Textarea";


const client = generateClient<Schema>()

export default function Upload(){
    const navigate = useNavigate();
    const { authStatus } = useAuthenticator(context => [context.authStatus]);

    useLog(authStatus)

    const [tests, setTests] = useState<Schema["DynamoTest"]["type"][]>([]);

    const fetchData = async () => {
        const { data: items, errors } = await client.models.DynamoTest.list();
        setTests(items)
    }

    useEffect(() => {
        fetchData();
    }, []);


    // Usestates
    const [title, setTitle] = useState<string>('');
    const [leftFile, setLeftFile] = useState<File |  undefined | null>(null);
    const [rightFile, setRightFile] = useState<File | undefined | null>(null);
    const [description, setDescription] = useState<string>('');
    // Not sure about this one

    const uploadData = async () => {
        if(title.length == 0)
            return
        if(description.length == 0)
            return
        await client.models.DynamoTest.create({
            title: title,
            description: description
        })
        fetchData()
    }

    /* const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if(!selectedFile) {
            setLeftFile(null)
            return;
        }

        if(selectedFile.size > maxSize){
            useLog("Too big")
            setError("File cannot be larger than" + sizeLimit.toString() + " MB.")
            setLeftFile(null)
            e.target.value = ""
            return
        }

        setFile(selectedFile)
        console.log("Selected file is now: " + file);
    } */
    
    // if(authStatus !== 'authenticated'){
    //     navigate("/login")
    // }
    // Should it be flex-col?
    return <form className="py-5 px-5 m-3 rounded-3 sm:mx-6">
        {/* <MatcherFormGroup controlId={"title"} label={"Title"} type={"text"} required/> */}
        <h1 className="text-4xl mb-5">Upload A Pair</h1>
        <Textbox id={"title"} label={"Title"} text={title} maxLength={30} onTextChange={setTitle} required  />
        <DisplayImageFileInput id={"left"} label={"Pictures"} onLeftChange={setLeftFile} onRightChange={setRightFile} />
        {/* <NewImageFileInput id={"left"} label={"Left picture"} onFileChange={setLeftFile} /> */}
        {/* <NewImageFileInput id={"right"} label={"Right picture"} onFileChange={setRightFile} /> */}
        {/* <ImageFileInput controlId={"left"} label={"Left picture"} />
        <ImageFileInput controlId={"right"} label={"Right picture"} /> */}
        <Pictures left={""} right={""} leftAlt={""} rightAlt={""}></Pictures>
        <TextArea id={"description"} label="Description" text={description} onTextChange={setDescription} required/>
        {/* <MatcherFormGroup controlId={"description"} label={"Description"} type={"text"} required/> */}
        {/* TODO: Sources list */}
        {/* TODO: Custom tag element */}
        {/* <TagAdder id="adder" label="Tags (will be implemented later let's do some backend)" />
        <br></br> */}
        <button /* type="submit" */ onClick={uploadData} className="my-4 bg-blue-300 border rounded-sm p-3 hover:bg-blue-400">Upload</button>
        {/* {
            tests.map(({ id, title, description }) => (
                <>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </>

            ))
        } */}

        {/* <PreviewUpload title={title} description={description} leftImage={leftFile}/> */}
    </form>


}