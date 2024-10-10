
export default function MyForm() {
    return(
        <div className="max-w-screen-lg mx-auto">
            <div className="grid grid-cols-1">
                <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <form className="space-y-4">
                        <div>
                            <label className="sr-only" htmlFor="name">Name</label>
                            <input className="w-full rounded-lg border-solid border-2 border-gray-200 p-3 text-sm" type="text" placeholder="Name" id="name" />
                        </div>
                        <div className="grid grid-cols-2">
                            <label className="sr-only" htmlFor="email">Email</label>
                            <input className="w-full rounded-lg border-solid border-2 border-gray-200 p-3 mr-2 text-sm" type="email" placeholder="Email address" id="email" />
                            <label className="sr-only" htmlFor="phone">Phone</label>
                            <input className="w-full rounded-lg border-solid border-2 border-gray-200 p-3 ml-2 text-sm" type="tel" placeholder="Phone number" id="phone" />
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="message">Message</label>
                            <textarea className="w-full rounded-lg border-solid border-2 border-gray-200 p-3 text-sm" rows="8" placeholder="Message" id="message"></textarea>
                        </div>
                        <div className="mt-4">
                            <button type="submit" className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
