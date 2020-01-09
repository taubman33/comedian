// JT GA API Lab
//.js file

let jokeInput = document.querySelector('#inputBar');

let getJoke = document.querySelector('#getJoke');

const jokeUrl = `https://icanhazdadjoke.com/search?term=${jokeInput.value}`;
console.log (`Part 1 + jokeURL ${jokeUrl} `);

async function getData (event) {
    
    event.preventDefault()
    //this will mark the list of jokes called into the Return Joke div
    const jokeList = document.querySelector(`#returnJoke`)

    try {
        const searchTerm = document.querySelector('#inputBar').value
        //console.log(searchTerm)

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
        //console.log("Part 2 + ", jokeData)
        

        //sets up the list of jokes pulled from the API and puts them into the li section of the jokeReturn div
        const jokeList = document.querySelector('.jokeReturn')
        let newJoke = document.createElement('li')

            const randomNum = Math.floor(Math.random() * 10);
             jokeList.innerHTML = jokeData[`${randomNum}`].joke

       //setting up so if the joke is longer than 250 characters, the size of the font will decrease
        let str = jokeList.innerHTML;
        let strLength = str.length; 

        if (strLength >= 250) {
         newJoke.setAttribute('class', 'long')
          } else if (strLength <= 150) {
          }
        

        //setting up the audio file, giving it a .6s delay
        const mediaElem = document.getElementById("audio");
        setTimeout(() => {
            mediaElem.play()
        }, 600)

     } catch (error) {
        console.log(error);
     }  
    }


//setting up clicking the Get Joke button to run the getData function that pulls the joke
getJoke.addEventListener('click', getData);
