import React, {useEffect, useState} from 'react';
import '../App.css'
import styled from "styled-components";
import Moon from '../images/moon.svg';
import Sun from '../images/sun.svg';

const Body = () => {
    const [error, setError] = useState({message: ""});
    const [items, setItems] = useState([]);
    const [input, setInput] = useState();
    const [submit, setSubmit] = useState("octocat");
    const [isDarkMode, setDarkMode] = useState(true);
    const handleToggle = () => {
        setDarkMode(!isDarkMode);
    }
    const handleSubmit = () => {
        setSubmit(input);
    };
    useEffect(() => {
        fetch(`https://api.github.com/users/${submit}`)
            .then(response => response.json())
            .then((result) => {
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
        <Page light={isDarkMode} className="container">
            <Name light={isDarkMode} className={"name2"}>
                Devfinder
                <Toggle light={isDarkMode} onClick={handleToggle} className={"toggle"}>
                    <ThemeImage src={isDarkMode ? `${Moon}` : `${Sun}`}/>
                </Toggle>
            </Name>
            <SearchContainer light={isDarkMode} className="Search">
                <div className="button">
                    <button id="buttonSubmit" onClick={handleSubmit}>Submit</button>
                </div>
                <div className="input-container">
                    <input className="input" placeholder="Search GitHub username..."
                           onChange={handleChange}/>
                    <div><p>{error.message}</p></div>
                </div>
            </SearchContainer>
            <BodyContainer light={isDarkMode} className="body">
                <div className="name">
                    <h4>{items.name}</h4>
                </div>
                <div className="bigBlock">
                    <SmallBodyContainer light={isDarkMode} className="smallBlock">
                        <div className="repos"><p>Repos</p><p>{items.public_repos}</p></div>
                        <div className="followers"><p>Followers</p><p>{items.followers}</p></div>
                        <div className="following"><p>Following</p><p>{items.following}</p></div>
                    </SmallBodyContainer>
                </div>
                <div className="place"><p>{items.location}</p></div>
                <div className="site">
                    <p>
                        <Button light={isDarkMode} as="a" href={items.blog}><i
                            className="fa">&#xf0c1;</i> {items.blog}</Button>
                    </p>
                </div>
                <div className="twitter"><p><i className="fa">&#xf099;</i> Not Avaliable</p></div>
                <div className="workPlace"><p>{items.company}</p></div>
                <div className="login"><p>@{items.login}</p></div>
                <div className="text"><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                    odio.
                    Quisque
                    volutpat mattis eros.</p></div>
                <div className="image">
                    <img src={'https://avatars.githubusercontent.com/u/583231?v=4'} alt="logo of user"
                         width='117px'/>
                </div>
            </BodyContainer>
        </Page>
    );
};
const Button = styled.button`
  color: ${props => props.light ? '#000000' : '#ffffff'};
`;

const BodyContainer = styled.div`
  color: ${props => props.light ? '#000' : '#fff'};
  background: ${props => props.light ? '#fff' : '#1E2A47'};
`

const Page = styled.div`
  background: ${props => props.light ? '#F6F8FF' : '#141D2F'};
`
const Name = styled.h2`
  color: ${props => props.light ? '#000' : '#fff'};
  margin-bottom: 0;
  margin-top: 0;
`

const SearchContainer = styled.div`
  background: ${props => props.light ? `#fff` : '#1E2A47'};
`

const SmallBodyContainer = styled.div`
  background: ${props => props.light ? '#F6F8FF' : '#141D2F'};
`

const ThemeImage = styled.img`
  max-width: 40px;
`;

const Toggle = styled.button`
  vertical-align: top;
  border: none;
  outline: none;
  font-size: 2rem;
  cursor: pointer;
  transition: .2s all ease-in-out;
  background: none;
  color: ${props => !props.light ? "#eee" : "#333"};
  top: 0;
  right: 0;

  &:hover {
    transition: .2s all ease-in-out;
  }
`;

export default Body;