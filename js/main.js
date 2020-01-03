//setting up access to Joke API

let jokeInput = document.querySelector('#inputBar');
let getJoke = document.querySelector('#getJoke');
const jokeUrl = `https://icanhazdadjoke.com/search?term=${jokeInput.value}`;
console.log (`Part 1 + jokeInput ${jokeInput} + jokeURL ${jokeUrl} `);

//async function . using the async function to retrieve info 

async function getData () {
    try {
        const options = {
            url: `https://icanhazdadjoke.com/`,
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        let result = await axios(options)

        let joke = result.data.joke
        console.log(joke,  "+ Part 2")
        // let splitJoke = joke.split('?')
        // console.log(splitJoke)

        
        let jokeName = document.createElement('jokeReturn')
        jokeName.innerHTML = (joke)
        
        let jokeReturn =  document.querySelector('.jokeReturn')
        jokeReturn.append(joke)
        console.log (`Part 4 +  ${jokeInput} `)
        
        } catch (error) {
        console.log(error);
   }  
}
getData()
getJoke.addEventListener('click', getData)
getData.preventDefault()



