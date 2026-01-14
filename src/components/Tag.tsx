// TODO: Add href?
export default function Tag({ name }: { name: string }) {
    return (
        // Figure out rounded-full?
        <button className="border border-black rounded-full p-1 hover:bg-gray-500 hover:text-white">
            {name}
        </button>
    )

}