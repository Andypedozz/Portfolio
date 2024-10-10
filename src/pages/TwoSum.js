import Header from "../components/Header";

export default function TwoSum() {
    return(
        <div>
            <Header />
            <section className="p-4 m-3 border-solid border-2 border-black rounded-lg">
                <div><span className="font-bold">Title:</span> TwoSum in Assembly</div>
                <div><span className="font-bold">Stack:</span> Assembly MIPS</div>
                <div><span className="font-bold">Description: </span>
                    An implementation of the famous LeetCode
                    problem TwoSum, written in Assembly MIPS64 for my
                    Computer architecture course when i was in college.
                </div>
            </section>
        </div>
    );
}