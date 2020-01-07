# Project Overview

## Project Name

 Everyone’s a comedian

## Project Description

Searching Joke API’s by keyword to find new jokes, a quick way to make anybody funnier!

## API and Data Sample

https://icanhazdadjoke.com/api


## Wireframes

 - https://wireframe.cc/yu3pEk 
 - https://res.cloudinary.com/jtaubman/image/upload/v1577993707/Wireframe_rmylxv.jpg
 
### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Add link to API
- Search Bar Returns single, or list of Jokes relevant to searched word 
- Looks decent enough (laugh with, not at)

#### PostMVP 

- adding audio to site -> drum roll .6s after each joke get
- styling 

## Project Schedule 

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Jan 2rd| Project Prompt | Submitted to Steve
|Jan 3rd| Wireframes / Priority Matrix / Functional Components | Complete
|Jan 5th| Core Application Structure (HTML, CSS, etc.) | Complete
|Jan 6th| Pseudocode / actual code | Complete
|Jan 7th| Initial Clickable Model  | Today
|Jan 8th| MVP | Incomplete
|Jan 9th| Present | Incomplete

## Priority Matrix

- https://i.imgur.com/BPOL4Qm.jpg

- https://res.cloudinary.com/jtaubman/image/upload/v1577993697/Priority_stl4hb.jpg



## Timeframes

- https://imgur.com/a/9DXRNSL 
- https://res.cloudinary.com/jtaubman/image/upload/v1577993715/Timesheet_ghrdxc.jpg

Now that the API has been found, I imagine it will go somewhat like this:

- Getting Try/Get/Axios functions all working - 2 / 3 hrs
- Getting API info to load properly onto the site - 2 / 3 hrs
- Getting the aformentioned codes to work in my site - 3 / 4 hrs
- Styling - Realistically probably ~ 5 hrs. Especially b/c the API can only be called 5x/hr

## API Data Sample

https://res.cloudinary.com/jtaubman/image/upload/v1577994349/APICode_za5ffi.png


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Setting up Site| H | 3hrs| 4-5 |  5|
| Getting API working | H | 3hrs| 5-6 | 6 |
| Styling | M | 4 hrs| 5 |5  |
| Troubleshooting Site | H | 5 -6 hrs| 3 | 3 |
| Total |  | 15-20 hrs|20ish |  |


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

I had to use an interesting way of calling the API, it took a lot of help from Steve to get it to work. I also needed some help from Michael in getting the audio file to play properly. So while I am proud of how those two functions have worked out, I would not feel good putting them here. 

I am happy with the styling now, especially in the main div section where the jokes are loading into the container, flanked by the two images. I used photoshop to make the images the same sizes so they would fit in easily (both scaled width + height 25%), and used Flex to get them aligned properly, which I am feeling more comfortable using now than I was when I began this. 
I have a feeling that this is not going to format properly in this, but;

.container {
   display: flex;
   flex-direction: row;
   justify-content: space-around;
}

Once I get the text animation (transitioning from White to Black) working properly I will add it in here as well

@keyframes example {
    from {color: #fef9e7;}
    to {color: black;}
  }
    
  .jokeReturn { 
    animation-name: example;
    animation-timing-function: linear;
    animation-duration: 4s;
    }



## Change Log
- I initially wanted to have 2 seperate search functions, to cross reference the joke search ("fat" + "dentist"), but that didn't work too well, especially with the limited number of jokes on the DadJoke API, so I removed that
- I wanted to add something multimedia so I added in an audio file (drum roll) to play every time the joke function is ran. I also added a 600ms/.6s timeout delay between the call function and the audio playing (allowing people time to read the joke, and let it load up if internet is slow)
 
 
 
