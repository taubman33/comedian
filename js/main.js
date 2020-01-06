//setting up access to Joke API

let jokeInput = document.querySelector('#inputBar');
let getJoke = document.querySelector('#getJoke');
const jokeUrl = `https://icanhazdadjoke.com`;
// const jokeUrl = `https://icanhazdadjoke.com/search?term=${jokeInput.value}`;
console.log (`Part 1 + jokeURL ${jokeUrl} `);

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
        console.log (`Part 4 `)


        
        } catch (error) {
        console.log(error);
   }  
}
// //making a new city Object each time we enter and submit info
// const newJoke = function(event) {
//     //prevents site from reloading with each click
//     event.preventDefault()
//     let jokeReturn = jokeInput.value
//     //calling our getWeather function here
//     getData(jokeReturn)
//     console.log(jokeReturn)
// }
getJoke.addEventListener('click', getData)


// Dropdown 

// let jokeTopic = document.getElementById('dropBtn');
// jokeTopic = `${jokeTopic}




