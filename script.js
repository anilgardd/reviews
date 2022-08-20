const reviews =[
    {
        id: 1 ,
        author:"John Wick",
        job:"Assasin",
        img :"https://cdnntr1.img.sputniknews.com/img/07e5/0c/18/1052084894_202:0:1002:800_1920x0_80_0_0_721e7167a9e5c7116ca6fa644d868708.jpg",
        text :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum mollitia esse accusantium doloremque necessitatibus sequi, sunt autem aliquam blanditiis ullam facilis provident iusto ex officiis error quidem vel ratione velit."
    },
    {
        id: 2 ,
        author:"Harry Potter",
        job: "Wizard",
        img: "https://wikiimg.tojsiabtv.com/wikipedia/en/thumb/d/d7/Harry_Potter_character_poster.jpg/1280px-Harry_Potter_character_poster.jpg",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum mollitia esse accusantium doloremque necessitatibus sequi, sunt autem aliquam blanditiis ullam facilis provident iusto ex officiis error quidem vel ratione velit."
    },
    {
        id: 3 ,
        author:"John Cena",
        job: "Fighter",
        img: "https://scontent.fist13-1.fna.fbcdn.net/v/t39.30808-6/291332290_580501643437465_1289139750346224781_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Rre5wxpS0roAX91BvvJ&_nc_ht=scontent.fist13-1.fna&oh=00_AT95qKsqi_9kgYn-NZgQJ9wB2eoMMtDUkD_fEnuMLir9Aw&oe=630656F2",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum mollitia esse accusantium doloremque necessitatibus sequi, sunt autem aliquam blanditiis ullam facilis provident iusto ex officiis error quidem vel ratione velit."
    },
    {
        id: 4 ,
        author:"Nikola Tesla",
        job: "Inventor",
        img: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQEa5vIB5rge7TBnRlfcRE3aenGyBmTuIVJFOxEFkEphZVxcaxDQkImgUzPPsBEAy7N",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum mollitia esse accusantium doloremque necessitatibus sequi, sunt autem aliquam blanditiis ullam facilis provident iusto ex officiis error quidem vel ratione velit."
    }
    
]
//selecting items 
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const text = document.querySelector("#text");
const img = document.querySelector("#person-image");
//buttons
const prevButton = document.querySelector("#btn-left");
const nextButton = document.querySelector("#btn-right");
const surpriseMe = document.querySelector("#surprise-button");

let currentItem=0;

window.addEventListener("DOMContentLoaded" , () => {
    displayPerson();
})

prevButton.addEventListener("click" , () =>{
    currentItem--; 
    if(currentItem < 0 ){
        currentItem = reviews.length -1;
    }
    displayPerson();
})
nextButton.addEventListener("click" , () =>{
    currentItem++; 
    if(currentItem > reviews.length-1 ){
        currentItem = 0;
    }
    displayPerson();
})
surpriseMe.addEventListener("click" , () =>{
    currentItem= getRandomNumber();
    displayPerson();  
})

function getRandomNumber(){
    return Math.floor(Math.random()*reviews.length);
  
}

function displayPerson(){
    const item = reviews[currentItem];
    img.src= item.img;
    job.textContent=item.job;
    text.textContent=item.text;
    author.textContent=item.author;
}







// prevButton.addEventListener("click" , function ()
// {
//     console.log("youdidit")
// })