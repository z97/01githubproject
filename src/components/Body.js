import React, {useEffect, useState} from 'react';
import '../App.css'


const Body = () => {
    const [error, setError] = useState({message: ""});
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [input, setInput] = useState('');
    const [submit, setSubmit] = useState("octocat");

    const handleSubmit = () => {
        setSubmit(input);
    };
    useEffect(() => {
        fetch(`https://api.github.com/users/${submit}`)
            .then(response => response.json())
            .then((result) => {
                    setIsLoaded(true);
                    setItems(result);
                }
            )
            .catch((error) => {
                setError(error);
            })
    }, [submit])

    function handleChange(event) {
        setInput(event.target.value)
    }




    return (

        <div className="container">
            <div className="Search">
                <div className="button">
                    <button id="buttonSubmit" className="w3-round-large w3-large w3-blue" onClick={handleSubmit}>Submit</button>
                </div>
                <div className="input">
                    <input  placeholder="Search GitHub username..." onChange={handleChange} class="w3-input w3-border"  />
                </div>
            </div>
            <div className="body">
                <div className="name">
                    <h4>{items.name}</h4>
                </div>
                <div className="joined"></div>
                <div className="bigBlock">
                    <div className="smallBlock">
                        <div className="repos"><p>Repos</p><p>{items.public_repos}</p></div>
                        <div className="followers"><p>Followers</p><p>{items.followers}</p></div>
                        <div className="following"><p>Following</p><p>{items.following}</p></div>
                    </div>
                </div>
                <div className="place"><h4>{items.location}</h4></div>
                <div className="site"><p><a href={items.blog}>{items.blog}</a></p> </div>
                <div className="twitter"></div>
                <div className="workPlace"><p>{items.company}</p></div>
                <div className="login"><p>@{items.login}</p></div>
                <div className="text"><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque
                    volutpat mattis eros.</p></div>
                <div className="image">
                    <img src={'https://avatars.githubusercontent.com/u/583231?v=4'} alt="image" width='150px'/>
                </div>
            </div>
        </div>


    );
};

export default Body;