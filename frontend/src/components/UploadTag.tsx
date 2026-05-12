// TODO: Add href?
export default function UploadTag({ name }: { name: string }) {
    return (
        // Figure out rounded-full?
        <div className="inline-flex gap-1 border border-black rounded-full px-2 py-1 bg-gray-500 text-white hover:bg-gray-600 hover:text-white  flex-none">
            <p className="">
                {name}
            </p>
            <button className="hover:bg-gray-500">
                x
            </button>
        </div>


    )

}