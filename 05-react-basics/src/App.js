import { useState } from "react";
import Salary from "./components/Salary";

const App = () => {
    const initialClickState = () => {
        return 100;
    };
    const [msg, setMsg] = useState("Hi mom, I'm stateful");
    const [clicks, setClicks] = useState(initialClickState);
    const [posts, setPosts] = useState([
        { title: "React Rocks 🤘🏻!", likes: 1337 },
        { title: "JSX Rocks Even Moar 🤘🏻!", likes: 42 },
        { title: "Got State?", likes: 3 },
    ]);

    const handleButtonClick = () => {
        setClicks((prevClicks) => prevClicks + 1);
    };

    const addLike = (post) => {
        console.log(post);
        post.likes++;
        setPosts([...posts]);
    };

    const [postTitle, setPostTitle] = useState("");

    const newPost = (e) => {
        e.preventDefault();
        const newPost = { title: postTitle, likes: 0 };
        setPosts([...posts, newPost]);
        setPostTitle("");
    };

    return (
        <div className="App">
            <h1>React Basics</h1>

            <h2>{msg}</h2>

            <p>You have clicked the button {clicks} times.</p>

            <button
                onClick={handleButtonClick}
                className="btn btn-success btn-lg"
            >
                👆🏻 me!
            </button>

            <button
                onClick={() => {
                    setMsg("Hi dad!");
                }}
                className="btn btn-warning btn-lg"
            >
                Hi dad!
            </button>

            <hr />
            <Salary />
            <hr />

            <h2>Posts</h2>
            <form onSubmit={newPost}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Got moar stuff to do?"
                        onChange={(e) => {
                            setPostTitle(e.target.value);
                        }}
                        value={postTitle}
                    />
                    <button type="submit" className="btn btn-primary">
                        Create
                    </button>
                </div>
            </form>
            {posts.length > 0 && (
                <ul>
                    {posts.map((post, index) => (
                        <li key={index}>
                            {post.title} ({post.likes}){" "}
                            <button
                                onClick={() => addLike(post)}
                                className="btn btn-success"
                            >
                                like
                            </button>
                            <button
                                onClick={() =>
                                    setPosts(
                                        posts.filter(
                                            (oldpost) => oldpost !== post
                                        )
                                    )
                                }
                                className="btn btn-danger"
                            >
                                remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default App;
