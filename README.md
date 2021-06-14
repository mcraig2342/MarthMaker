## Marth Maker

### Link to repo:  https://github.com/mcraig2342/MarthMaker 

### Table of Contents
* [Description](#description)
* [Setup](#setup)
* [Running Tests](#runningtests)
* [Technologies](#technologies)
* [Authors](#authors)


### Description
Do you still play a gamecube game released in 2001 by the name of Super Smash Brothers Melee? Do you also happen to be a Marth main? Well if so, look 
no further than Marth Maker. Marth Maker is an advanced tech list that will help you hone your skills with Marth (as well as other characters). Users can
add tech-skills that they would like to learn to their learning list, so they can keep track of what they have learned. 


### Home Page
<img width="1440" alt="Screen Shot 2021-06-14 at 2 04 52 PM" src="https://user-images.githubusercontent.com/75296592/121952482-838f1180-cd19-11eb-9819-80a905380393.png">

### Tech List 
<img width="1440" alt="Screen Shot 2021-06-14 at 2 07 20 PM" src="https://user-images.githubusercontent.com/75296592/121952704-d8cb2300-cd19-11eb-8ab2-200abda78c92.png">


### Learning List
<img width="1440" alt="Screen Shot 2021-06-14 at 2 07 55 PM" src="https://user-images.githubusercontent.com/75296592/121952809-f5675b00-cd19-11eb-99ca-61a5e27eeb3b.png">


### Accessibility Audit
<img width="597" alt="Screen Shot 2021-06-14 at 2 10 08 PM" src="https://user-images.githubusercontent.com/75296592/121953012-3d867d80-cd1a-11eb-90a0-c93f0716f7be.png">


### Setup
* From your terminal, clone this repository
`git@github.com:mcraig2342/MarthMaker.git`  
* `cd` into the project directory
* Run `$npm install` to install dependencies
* Run `$npm start`
* Your default browser should automatically open Marth Maker


### Running Tests
* Once in project directory, run `npm run cypress` 
* In the `integration` directory, click on the file you'd like to see the testing for. 
* A Cypress window should open
* Run tests  

### Technologies
<p>
  <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>

  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>

  <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>

  <img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>

  <img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>

  <img alt="Cypress.io" src="https://camo.githubusercontent.com/bd9c528263673db09f67bcf3445ba8e5512cfb6829e966a31ef7a378933b231a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d437970726573732e696f2d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d637970726573732e696f266c6f676f436f6c6f723d7768697465"/>
</p>

### Authors
<table>
    <tr>
        <td> Matt Craig <a href="https://github.com/mcraig2342">GH</td>
    </tr>
    </tr>
        <td><img src="https://avatars.githubusercontent.com/u/75296592?v=4" alt="M. Craig" width="125" height="auto" /></td>
    </tr>
</table>


### Reflections

#### Evolution of the Project & Reflection
I first began by finding a Melee API and building a basic react structure and fetch call that would allow me to check that the data from the API was coming
through properly. I ran into a CORS error and had to use a proxy server to work around this error. Then the next thing I wanted to get working was rendering the individual tech cards in the tech area component. I then wanted to make sure that the functionality to be able to add a tech card to the learning list. From here
I spent most of my time on responsive page design, developer sided changes like cleaning functions and cypress testing, displaying error handeling, and setting up react router. I really enjoyed this project because it helped me reinforce my react/cypress/router knowlege while also allowing me to create an app on a topic that 
I personally find interesting.

#### Wins 
The biggest win for me on this project was being able to find a working melee API with usefull information that would allow me to create a project that I was 
interested in. My biggest technical win was adding a route that takes any invalid url path and displays the home page.

#### Challenges
The biggest challenge was trying to wright thorough cypress tests that check for sad paths as well as happy, and implementing the render item prop to work around
prop drilling. 

