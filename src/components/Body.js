import React, {useEffect, useState} from 'react';

const Body = () => {
    const [error, setError] = useState({message: ""});
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [input, setInput] = useState('');
    const [submit, setSubmit] = useState("Arseniyx");

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
        <div>
            <input type="text" placeholder="Search GitHub username..." onChange={handleChange}/>
            <button onClick={handleSubmit}>Submit</button>
            <p>{items.name}</p>
            <p>{error.message}</p>
        </div>
    );
};

export default Body;