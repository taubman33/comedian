// JT GA API Lab

let jokeInput = document.querySelector('#inputBar');
let getJoke = document.querySelector('#getJoke');

const jokeUrl = `https://icanhazdadjoke.com/search?term=${jokeInput.value}`;
console.log (`Part 1 + jokeURL ${jokeUrl} `);

async function getData (event) {
    event.preventDefault()
    const jokeList = document.querySelector(`#returnJoke`)

    try {
        const searchTerm = document.querySelector('#inputBar').value
        console.log(searchTerm)
        const URL = `https://icanhazdadjoke.com/search?term=${searchTerm}`
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    
        let result = await axios.get(URL, options)
        const jokeData = result.data.results
        console.log("Part 2 + ", jokeData)
        
        const jokeList = document.querySelector('.jokeReturn')
        let newJoke = document.createElement('li')
        const randomNum = Math.floor(Math.random() * 10);
        jokeList.innerHTML = jokeData[`${randomNum}`].joke
        
        // const mediaElem = document.getElementById("audio");
        // setTimeout(() => {
        //     mediaElem.play()
        // }, 600)

        } catch (error) {
        console.log(error);
     }  
    }



getJoke.addEventListener('click', getData);