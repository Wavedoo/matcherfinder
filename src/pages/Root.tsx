import { Outlet } from "react-router";
import MatcherNavbar from "../components/MatcherNavbar";

export default function Root(){
    return <>
        <MatcherNavbar />
        <Outlet/>
    </>
}