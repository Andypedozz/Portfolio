import Header from "../components/Header";
import MyForm from "../components/MyForm";

export default function Contacts() {
    return(
        <div className="h-full bg-gradient-to-br from-blue-300 to-blue-100">
            <Header />
            <div className="text-center m-5">
                <h1 className="font-bold text-3xl">Want to get your own application?</h1>
                <h2 className="font-bold text-2xl mt-5">Contact me</h2>
                <MyForm />
            </div>
        </div>
    );
}