import { useAuthenticator } from "@aws-amplify/ui-react";

export default function UserModal(){
    const { authStatus, signOut } = useAuthenticator(context => [context.authStatus]);
    
    return <div className="flex-col text-black mt-5 ms-auto me-5 w-75 shadow-xs shadow-black rounded-lg p-2 fixed bg-white right-0">
        <button className="hover:bg-gray-200 rounded-lg w-full text-left px-2 py-1 my-0.5">View profile</button>
        <button className="hover:bg-gray-200 rounded-lg w-full text-left px-2 py-1 my-0.5">Settings</button>
        <button className="hover:bg-gray-200 rounded-lg w-full text-left px-2 py-1 my-0.5" onClick={signOut}>Sign out</button>
    </div>
}

// https://v3.tailwindcss.com/docs/reusing-styles