// apiScript.js

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  const jokeContainer = document.querySelector('#jokeContainer');
  
  const response = await fetch(API_URL, myObject);
  const json = await response.json();
  
  jokeContainer.innerHTML = json.joke;
};

window.onload = () => fetchJoke();