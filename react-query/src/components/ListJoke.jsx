import React from "react";

export default function ListJoke({ joke }) {
    return (
        <div key={joke._id} className="text-center my-5">
            <p className="h3">{joke.setup}</p>
            <p className="h4">{joke.punchline}</p>
        </div>
    );
}
