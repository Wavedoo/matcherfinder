import { useAuthenticator } from "@aws-amplify/ui-react"
import { useState } from "react";
import { NavLink } from "react-router";
import { Bars3Icon } from "@heroicons/react/24/outline"


function NavLinkClassNames(isActive: boolean) {
    let defaultClasses = "rounded-md p-2 hover:bg-gray-900 "
    if (isActive)
        defaultClasses += " bg-gray-900 "
    return defaultClasses
}

function MenuClassNames(dropdown: boolean) {
    let defaultClasses = "hover:bg-gray-700 p-2 rounded-lg sm:hidden "
    if(dropdown)
        defaultClasses += "bg-gray-700"
    return defaultClasses
}
export default function Navbar(){
    const { authStatus, signOut } = useAuthenticator(context => [context.authStatus]);
    const [dropdown, setDropdown] = useState<boolean>(false);
    const shoot = () => {
        alert("Great Shot!");
    }

    return (
        <nav className="relative bg-gray-800">
            {/* Width limiter. 1536px because of 2xl breakpoint. */}
            {/* I kinda like the nabar without the restraints of a width */}
            {/* idk why there is a space even with p-0 figure it out. See if i want it gone. */}
            <div className="mx-auto max-w-(--standard-width) px-2 sm:px-6">
                {/* Contents area */}
                <div className="flex h-16 mx-auto my-auto items-center justify-between">
                {/* <div className="flex-1 mx-auto my-auto max-w-7xl px-6"> */}

                    {/* Computer div */}
                    <div className="flex flex-auto items-center sm:justify-start text-white space-x-4">
                        {/* Logo subsitute */}
                        <NavLink to="/" className="font-bold">
                            Matcherfinder
                        </NavLink>
                        {/* Links within website */}
                        <div className="hidden sm:block">
                            <NavLink to="/" className={({ isActive }) => NavLinkClassNames(isActive)}
                            >Home</NavLink>
                            <NavLink to="/upload" className={({isActive}) => NavLinkClassNames(isActive)}
                            >Upload</NavLink>
                            {/* TODO: Put a search bar */}
                            {
                                authStatus !== 'authenticated' ?
                                    (<NavLink to="/login" className={({ isActive }) => NavLinkClassNames(isActive)}>Login</NavLink>) : 
                                    (<button onClick={signOut}>Sign out</button>)
                            }
                            
                        </div>

                    </div>
                    <button className={`hover:bg-gray-700 p-2 rounded-lg sm:hidden ${dropdown && 'bg-gray-700'}`} onClick={() => setDropdown(!dropdown)}>
                        <Bars3Icon className="size-6 text-white">
                                {/* add tailwind.config.js max-w-mine o r something 153466367326320 px */}
                        </Bars3Icon>

                    </button>

                </div>
            </div>

            {/* Hamburger menu stuff */}
            {/* TODO: add animations */}
            <div className={`flex flex-col items-end sm:hidden bg-gray-850 text-white ${!dropdown && 'hidden'}`}>
                <NavLink to="/" className={({ isActive }) => NavLinkClassNames(isActive)}
                >Home</NavLink>
                <NavLink to="/upload" className={({ isActive }) => NavLinkClassNames(isActive)}
                >Upload</NavLink>
                {/* TODO: Put a search bar */}
                {
                    authStatus !== 'authenticated' ?
                        (<NavLink to="/login" className={({ isActive }) => NavLinkClassNames(isActive)}>Login</NavLink>) :
                        (<button onClick={signOut}>Sign out</button>)
                }

            </div>
        </nav>
    )
}