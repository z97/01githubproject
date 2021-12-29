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
                <div className="button"><button onClick={handleSubmit}>Submit</button></div>
                <div className="input">
                    <input type="text" placeholder="Search GitHub username..." onChange={handleChange}/>
                </div>
            </div>
            <div className="body">
                <div className="name">
                    <h4>{items.name}</h4>
                </div>
                <div className="joined"></div>
                <div className="bigBlock">
                    <div className="repos"></div>
                    <div className="followers"></div>
                    <div className="following"></div>
                </div>
                <div className="place"><h4>{items.location}</h4></div>
                <div className="site"></div>
                <div className="twitter"></div>
                <div className="workPlace"></div>
                <div className="login"></div>
                <div className="text"></div>
                <div className="image">
                    <img src={'https://avatars.githubusercontent.com/u/583231?v=4'} alt="image" width='150px'/>
                </div>
            </div>
        </div>


    );
};

export default Body;