

export default function MyCard({props}) {
    return (
        <div style={{backgroundImage: `url(${props.image})`}} className="flex flex-col justify-end w-full max-w-screen-lg h-96 p-4 m-3 mx-auto bg-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" >
            <a href={props.page}>
                <div className="text-white text-2xl font-bold mb-4">{props.title}</div>
                <div className="text-white "><span className="text-white font-bold">Stack: </span>{props.stack}</div>
            </a>
        </div>
    );
}

// style={{ backgroundImage : `url(${props.image})`}}