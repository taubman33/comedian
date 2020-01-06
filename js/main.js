// JT GA API Lab


let jokeInput = document.querySelector('#inputBar');
let getJoke = document.querySelector('#getJoke');
// let query = '';
const jokeUrl = `https://icanhazdadjoke.com/search?term=${jokeInput.value}`;
console.log (`Part 1 + jokeURL ${jokeUrl} `);

async function getData (e) {
    e.preventDefault()
    const jokeList = document.querySelector(`#returnJoke`)
    // while (jokeList.lastChild) {
    //     jokeList.removeChild(jokeList.lastChild)
    // }

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
            jokeList.innerHTML = jokeData[0].joke
            // [0].joke            
            
            // newJoke.innerHTML = object.joke
            // jokeList.append(newJoke.)
        } catch (error) {
        console.log(error);
     }  
    }
    getJoke.addEventListener('click', getData);
    


    


// let jokeName = document.createElement('jokeReturn')
        // jokeName.innerHTML = (joke)
        
        // let jokeReturn =  document.querySelector('.jokeReturn')
        // jokeReturn.innerHTML = ''
        // jokeReturn.append(joke)
        // console.log (`Part 3 + ${query}` )


    //once we get search bar working, making sure only One joke is appended into HTML
    // document.append -> value [0]
    


        // splitting joke into 2 lines rather than 1 block of text -> some jokes have 3 lines
        // let splitJoke = joke.split('?', '.')
        // console.log("split joke + ", splitJoke)
        // function splitStr(joke) { 
        //     var string = str.split("*"); 
        //     console.log(string); 
        // } 
        // splitJoke. if has ? or . adds <br> to html       

        
