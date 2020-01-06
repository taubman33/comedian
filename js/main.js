//setting up access to Joke API

let jokeInput = document.querySelector('#inputBar');
let getJoke = document.querySelector('#getJoke');
let query = '';
const jokeUrl = `https://icanhazdadjoke.com/search?term=${jokeInput.value}`;

console.log (`Part 1 + jokeURL ${jokeUrl} `);

//async function . using the async function to retrieve info
//curl -H "User-Agent: My Library (https://git.generalassemb.ly/jtaubman/Everyones-A-Comedian)" https://icanhazdadjoke.com/
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
        console.log("Part 2 + ", joke )

        // let splitJoke = joke.split('?')
        // console.log(splitJoke)
        // let splitJoke = joke.split('?', '.')
        // console.log("part 3  +",  splitJoke)
        // splitJoke. if has ? or . adds <br> to html

        let jokeName = document.createElement('jokeReturn')
        jokeName.innerHTML = (joke)
        
        let jokeReturn =  document.querySelector('.jokeReturn')
        jokeReturn.innerHTML = ''
        jokeReturn.append(joke)
        console.log (`Part 3 + ${query}` )

        } catch (error) {
        console.log(error);
   }  
}

getJoke.addEventListener('click', getData);

// adding SearchBar for joke search
let form2 = document.querySelector("#form2")
getJoke.addEventListener('click', function() {
    event.preventDefault()
    jokeInput = document.querySelector('#inputBar')
    query = jokeInput.value
    console.log(`Input bar: ${query}`)
    // getData(query)   
})

// possibly using Dropdown menu instead of searchbar 
// let jokeTopic = document.getElementById('dropBtn');
// jokeTopic = `${jokeTopic}


//once we get search bar working, making sure only One joke is appended into HTML
// document.append value [0]


