
export default function Header() {

    return(
        <div>
            <div className="flex justify-between items-center">
                <h1 className="m-3 align-middle justify-start font-bold text-3xl">MY WEBSITE</h1>
                <nav className="m-3">
                    <ul className="flex">
                        <li><a className="m-1 font-bold" href="/home">Home</a></li>
                        <li><a className="m-1 font-bold" href="/projects">Projects</a></li>
                        <li><a className="m-1 font-bold" href="/contacts">Contacts</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}