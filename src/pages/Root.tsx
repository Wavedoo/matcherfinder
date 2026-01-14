import { Outlet } from "react-router";
import MatcherNavbar from "../components/MatcherNavbar";
import Navbar from "../components/tailwind/Navbar";

export default function Root(){
    return <>
        <Navbar />
        <Outlet/>
    </>
}