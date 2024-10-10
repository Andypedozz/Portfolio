import Header from "../components/Header";

export default function Home() {
    return(
        <div className="h-full bg-gradient-to-br from-blue-400 to-blue-100">
            <Header />
            <p className="text-center">
                Welcome to my website! My name is Andrea Pedini. Navigate to the projects page<br/>
                to have a look at what i've built through the years of my college degree.<br/>
            </p>
        </div>
    );
}