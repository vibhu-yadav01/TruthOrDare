let list = document.querySelector(".unorder");
let nex = document.querySelector(".done");
let check = 0;
let save_index;
let player = {};
let dare = [
    "Talk in an accent for the next three rounds.",
    "Try to lick your elbow (Spoiler: You can’t, but watching you try will be funny!).",
    "Go outside and compliment a random object.",
    "Pretend to be a chicken and cluck around the room for a minute.",
    "Do your best impression of a famous celebrity and let others guess who it is.",
    "Post a funny selfie with a silly caption on social media.",
    "Dance to a random song with no music for 30 seconds.",
    "Try to drink a glass of water while standing on one leg with your eyes closed.",
    "Speak only in rhymes for the next three rounds.",
    "Wear socks on your hands for the next 10 minutes.",
    "Call a friend and sing them a random song with full emotions.",
    "Act like a mime and stay silent for the next five minutes while miming actions.",
    "Let someone write something funny on your forehead with a marker.",
    "Text your crush something ridiculous like, 'Do you believe in aliens? Because I think you might be one.'",
    "Do an interpretive dance about how your last meal made you feel.",
    "Stand up and do 10 jumping jacks while saying something motivational after each one.",
    "Try to rap about something random in the room (e.g., 'This lamp is so bright, it gives me the light!').",
    "Try to do a headstand or spin around 10 times and walk in a straight line.",
    "Let the group choose a silly new nickname for you that you must use for the rest of the game.",
    "Pretend you’re on a cooking show and explain how to make a peanut butter and jelly sandwich in the most dramatic way possible.",
    "Put ice cubes in your socks and wear them for the next two minutes.",
    "Act like a cat for the next five minutes (meow, purr, and rub against furniture!).",
    "Try to do a TikTok dance challenge on the spot.",
    "Let another player style your hair however they want.",
    "Say the alphabet backward as fast as you can.",
    "Speak in third person until your next turn.",
    "Send the fifth photo in your gallery to a random person in your contacts.",
    "Let someone tickle you for 30 seconds without trying to stop them.",
    "Pretend to be a waiter/waitress and take fake food orders from everyone in the room.",
    "Talk with your tongue sticking out for the next three rounds.",
    "Balance a spoon on your nose for 30 seconds.",
    "Make up and perform a short rap about someone in the group.",
    "Send a voice message to someone saying a random animal sound.",
    "Let someone draw on your face with a washable marker.",
    "Try to type a message with your toes and send it to someone.",
    "For the next three minutes, act like you are in slow motion.",
    "Call a random contact and tell them a joke with a serious voice.",
    "Put on as many layers of clothing as possible in one minute.",
    "For the next five minutes, pretend you’re in a TV commercial and try to sell random objects in the room."
];


let truth = [
    "What’s the most embarrassing thing you’ve ever done in public?",
    "Have you ever sent a text to the wrong person? What happened?",
    "If you had to swap lives with one person for a day, who would it be and why?",
    "What’s a weird habit you have that nobody knows about?",
    "Have you ever had a crush on an animated character? Who was it?",
    "If you could make one law that everyone had to follow, what would it be?",
    "What’s the weirdest thing you’ve ever Googled?",
    "Have you ever practiced a celebrity impression? Do it now!",
    "What’s the most embarrassing nickname you’ve ever had?",
    "If your pet (or a random animal) could talk, what would they say about you?",
    "What’s the most childish thing you still do?",
    "Have you ever had an imaginary friend? Describe them.",
    "What’s a secret talent you have that no one knows?",
    "If you could delete one embarrassing moment from your life, what would it be?",
    "What’s the dumbest reason you ever cried?",
    "Have you ever accidentally liked an old post while stalking someone?",
    "What’s the worst pickup line you've ever used or heard?",
    "If you could switch lives with someone in this room for a week, who would it be and why?",
    "What’s the most ridiculous thing you’ve ever done to impress someone?",
    "What’s the weirdest dream you’ve ever had?",
    "Have you ever laughed so hard at the wrong moment? What happened?",
    "If you had to eat only one food for the rest of your life, what would it be?",
    "What’s the weirdest thing you do when you're alone?",
    "Have you ever talked to yourself in the mirror? What did you say?",
    "What’s the most embarrassing thing you've ever said to a crush?",
    "If you could be invisible for a day, what would you do?",
    "What’s the strangest gift you’ve ever received?",
    "Have you ever walked into something while looking at your phone?",
    "What’s a lie you’ve told that you regret?",
    "What’s the most awkward thing that’s ever happened to you at school/work?",
    "If you had to marry one fictional character, who would it be and why?",
    "What’s the longest you’ve gone without showering?",
    "If you could erase one trend from history, what would it be?",
    "What’s the weirdest thing you’ve ever eaten?",
    "Have you ever snooped through someone’s phone? What did you find?",
    "What’s something really childish that you still enjoy?",
    "If you could trade places with a celebrity for a day, who would it be?",
    "Have you ever fake-cried to get out of trouble?",
    "What’s the most embarrassing thing your parents have caught you doing?",
    "What’s one thing you hope no one ever finds out about you?"
];



function starting(){
    let btn = document.querySelector("button");
    let inp = document.querySelector("input");
    let list = document.querySelector(".unorder");
    btn.addEventListener("click", function(){
        let li = document.createElement("div");
        li.classList.add("content");
        li.innerText = inp.value;
        player[inp.value] = '0';
        Done();
   
       let del = document.createElement("button");
       del.innerText = "delete";
       del.classList.add("btn");
       del.classList.add("delete");
       del.classList.add("btn-outline-danger");
   
       if(inp.value != ""){
           list.append(li);
           li.appendChild(del);
           inp.value= "";
       }
   });
}
starting();

list.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let lis = event.target.parentElement;
        lis.remove();
        let key = lis.innerText.replace('delete', '')
        delete player[key];
        console.log(player);
        if(Object.keys(player).length< 2 && Object.keys(player).length>1 ){
            remove_btn();
        }
    }
})

function Done(){
    if(Object.keys(player).length== 2){
        let ok = document.createElement("button");
        ok.innerText = "Play";
        ok.classList.add("btn");
        ok.classList.add("btn-outline-success");
    
        let done = document.querySelector(".done");
        done.appendChild(ok);
        ok.addEventListener("click",function(){
            game();
        })
    }
}

function remove_btn(){
    let ok = document.querySelector(".btn-outline-success");
    ok.remove();
}

function game(){
    let randIdx = Math.floor(Math.random() * Object.keys(player).length);
    if(save_index===randIdx){ //so that no repetation of a same person
        if(save_index == 0){
            randIdx++;
        }else{
            randIdx--;
        }
    }
    console.log(randIdx);
    let current_player = Object.keys(player)[randIdx];
    save_index = randIdx;
    let screen = document.querySelector(".text-center");
    screen.innerHTML = `<h1><span class="T">Truth </span>or <span class="D">Dare</span></h1>`;

    let show = document.createElement("div");
    show.classList.add("name")
    show.innerText = current_player;
    console.log(current_player);
    screen.appendChild(show);
    game_screen();
}
function game_screen(){
    // Check if the game screen already exists
    if (document.querySelector(".game_screen")) {
        console.log("Game screen already exists.");
        return;
    }
    let game_screen = document.createElement("div");
    game_screen.classList.add("game_screen");

    let screen = document.querySelector(".text-center");
    screen.appendChild(game_screen);

    let truth = document.createElement("div");
    truth.classList.add("Truth");
    truth.innerText= "Truth";
    game_screen.appendChild(truth);
    check++;

    let dare = document.createElement("div");
    dare.classList.add("Dare");
    dare.innerText= "Dare";
    game_screen.appendChild(dare);

    let t_select = document.querySelector(".Truth");
    t_select.addEventListener("click", ()=>{
        if(truth.innerText == "Truth"){
            boxT();
            creteCompletebtn(t_select);
            if(dare.innerText == "Dare"){
                quit_btn(screen);
                next_btn(screen);
    
            }
        }
    });
    let d_select = document.querySelector(".Dare");
    d_select.addEventListener("click", ()=>{
        if(dare.innerText == "Dare"){
            boxD();
            creteCompletebtn(t_select);
            if(truth.innerText == "Truth"){
                quit_btn(screen);
                next_btn(screen);
            }
        }
    });
}
;
function creteCompletebtn(t_select){
    let complete = document.createElement("button");
    complete.classList.add("btn-outline-success");
    complete.classList.add("fa-solid");
    complete.classList.add("fa-thumbs-up");
    t_select.appendChild(complete);
}
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("fa-solid")) {
        console.log("It was clicked");
    }
});
function boxT(){
    let randIdx = Math.floor(Math.random() * truth.length);
    let question = truth[randIdx];
    let truth_question = document.querySelector(".Truth");
    truth_question.classList.add("para");
    truth_question.innerText = question;
}
function boxD(){
    let randIdx = Math.floor(Math.random() * dare.length);
    let question = dare[randIdx];
    let dare_question = document.querySelector(".Dare");
    dare_question.classList.add("para");
    dare_question.innerText = question;
}
function quit_btn(screen){
    let quitbtn = document.createElement("button");
    quitbtn.innerText = "Quit";
    quitbtn.classList.add("btnbot")
    quitbtn.classList.add("btn")
    quitbtn.classList.add("btn-outline-primary")
    screen.appendChild(quitbtn);
    
  
}
function next_btn(screen){
    let nextbtn = document.createElement("button");
    nextbtn.innerText = "Next";
    nextbtn.classList.add("btnbot")
    nextbtn.classList.add("btn")
    nextbtn.classList.add("btn-outline-secondary")
    screen.appendChild(nextbtn);
    checker();
};


function checker(){
    if(check > 0){
        console.log(check);
        let reset = document.querySelector(".btn-outline-primary");
        reset.addEventListener("click", function(){
            console.log("ended game");
            resetplayer();
        });
        let next_player = document.querySelector(".btn-outline-secondary");
        next_player.addEventListener("click", function(){
            game();
            console.log("next player");

        });
    }
    
};
function resetplayer() {
    player = [];
    let screen = document.querySelector(".text-center");
    screen.innerHTML = `
        <h1><span class="T">Truth </span>or <span class="D">Dare</span></h1>
        <input type="text" placeholder="Name of player" class="form-control">
        <button type="button" class="btn btn-outline-primary">Add</button>
        <div class="done"></div>
        <div class="unorder"></div>
    `;

    starting();  // Restart event listeners
}


//themes
let bd = document.querySelector("body");
let count = 0;
let theme = document.querySelector(".themes");


theme.addEventListener("click", function () {
    count++;
    console.log(count);

    // Toggle theme based on count
    if (count %2== 0) {
        bd.style.backgroundColor =`#000`;
        theme.style.color = '#fff';
        
    } else {
        bd.style.backgroundColor = '#F8F6E3';
        theme.style.color = '#000'
    }
});

//logo

let logo = document.querySelector(".logo");
let faze = document.querySelector(".faze");

logo.addEventListener("click", ()=>{
    faze.classList.remove("faze");
    logo.remove();
})
