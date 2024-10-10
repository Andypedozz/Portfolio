import Header from "../components/Header";
import MyCard from "../components/MyCard";
import pokeBanner from "../img/pokemon-charizard-anime-wallpaper-thumb.jpg";
import earthquakeBanner from "../img/1113568.jpg";
import assembly from "../img/asm.png"
import paycheck from "../img/paycheck.jpg";

export default function Projects() {

    let earthquakes = {
        title : "Earthquakes",
        stack : "HTML, CSS, JavaScript",
        desc : "Description1",
        page : "/earthquakes",
        image : earthquakeBanner
    }
    let pokemon = {
        title : "Pokemon Battle Mania",
        stack : "Java",
        desc : "Description2",
        page : "/pokemon",
        image : pokeBanner
    }
    let twoSum = {
        title : "TwoSum in Assembly",
        stack : "Assembly MIPS",
        desc : "Description3",
        page : "/twoSum",
        image : assembly
    }
    let pagheOpen = {
        title : "Internship at Iubar",
        stack : "Java, HTML, CSS, JavaScript, React, NextJS, AstroJS",
        desc : "Description4",
        page : "/pagheOpen",
        image : paycheck
    }

    return(
        <div className="bg-gradient-to-br from-blue-400 to-blue-100">
            <Header />
            <h2 className="text-center font-bold text-2xl">What i've worked on</h2>
            <div className="p-4">
                <MyCard props={earthquakes}/>
                <MyCard props={pokemon}/>
                <MyCard props={twoSum}/>
                <MyCard props={pagheOpen}/>
            </div>
        </div>
    );
}

// export default function Projects() {
//     return(
//         <div>
//             <Header />
//             <h2 className="text-center font-bold text-2xl">What i've worked on</h2>
//             <div className="grid grid-cols-2 grid-rows-2">
//                 <section className="p-4 m-3 border-solid border-2 border-black rounded-lg">
//                     <div><span className="font-bold">Title:</span> Earthquakes</div>
//                     <div><span className="font-bold">Stack:</span> JavaScript, Node.js, Express.js, HTML, CSS</div>
//                     <div><span className="font-bold">Description: </span>
//                         a website with the goal of giving a simple tool
//                         to see the majority of the earthquakes that took place
//                         in the last 40 years in the italian territory.
//                         You can also contribute to the dataset by adding
//                         reports you personally detected.
//                     </div>
//                 </section>
//                 <section className="p-4 m-3 border-solid border-2 border-black rounded-lg">
//                     <div><span className="font-bold">Title:</span> Pokemon Battle Mania</div>
//                     <div><span className="font-bold">Stack:</span> Java</div>
//                     <div><span className="font-bold">Description: </span>
//                         A simple Pokemon based minigame that lets you
//                         compose your Pokemon team and battle against your friends.
//                         You can also add Pokemons manually by editing a text file
//                         and downloading the sprites online.
//                     </div>
//                 </section>
//                 <section className="p-4 m-3 border-solid border-2 border-black rounded-lg">
//                     <div><span className="font-bold">Title:</span> TwoSum in Assembly</div>
//                     <div><span className="font-bold">Stack:</span> Assembly MIPS</div>
//                     <div><span className="font-bold">Description: </span>
//                         An implementation of the famous LeetCode
//                         problem TwoSum, written in Assembly MIPS64 for my
//                         Computer architecture course when i was in college.
//                     </div>
//                 </section>
//                 <section className="p-4 m-3 border-solid border-2 border-black rounded-lg">
//                     <div><span className="font-bold">Title:</span> internship in Iubar</div>
//                     <div><span className="font-bold">Stack:</span> Java, JavaScript, React, NextJS, MySQL</div>
//                     <div><span className="font-bold">Description: </span>
//                         This has been my very first work experience as a
//                         programmer. My duty was to check the users bug reports
//                         and fix eventual problems in PagheOpen, a program
//                         meant to manage your subordinates and their
//                         work documents. I've also written code for some
//                         internal software projects in NextJS and AstroJS.
//                     </div>
//                 </section>
//                 <section className="p-4 m-3 border-solid border-2 border-black rounded-lg">
//                     <div><span className="font-bold">Title:</span> RidersApp</div>
//                     <div><span className="font-bold">Stack:</span> JavaScript, Java, MySQL</div>
//                     <div><span className="font-bold">Description: </span>
//                         This was one of my favourite side projects i've worked on.
//                         RidersApp it's a desktop application meant to help you manage
//                         your team of Riders for your Delivery company. It's made to let
//                         customers place orders, automatically notify the best suitable rider
//                         for that single order, and monitor the general situation of your riders team.
//                         It includes also APIs to keep up with street names, local restaurants
//                         and the products they offer to the public.
//                     </div>
//                 </section>
//                 <section className="p-4 m-3 border-solid border-2 border-black rounded-lg">
//                     <div><span className="font-bold">Title:</span> Fitness tracking App</div>
//                     <div><span className="font-bold">Stack:</span> React Native</div>
//                     <div><span className="font-bold">Description:</span></div>
//                 </section>
//             </div>
//         </div>
//     );
// }