
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let list = document.querySelector(".unorder");
let nex = document.querySelector(".done");
let check = 0;
let player = [];
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
    "Pretend you’re on a cooking show and explain how to make a peanut butter and jelly sandwich in the most dramatic way possible."
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
    "What’s the weirdest dream you’ve ever had?"
];


function starting(){
    btn.addEventListener("click", function(){
        let li = document.createElement("div");
        li.classList.add("content");
        li.innerText = inp.value;
        player.push(inp.value);
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
        player.pop(lis);
        lis.remove();
        if(player.length< 2){
            remove_btn();
        }
    }
})

function Done(){
    if(player.length >= 2 && player.length<=2){
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
    let randIdx = Math.floor(Math.random() * player.length);
    let current_player = player[randIdx];
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
            if(truth.innerText == "Truth"){
                quit_btn(screen);
                next_btn(screen);
            }
        }
    });
}

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
    quitbtn.classList.add("btn-danger")
    screen.appendChild(quitbtn);
    
  
}
function next_btn(screen){
    let nextbtn = document.createElement("button");
    nextbtn.innerText = "Next";
    nextbtn.classList.add("btnbot")
    nextbtn.classList.add("btn")
    nextbtn.classList.add("btn-success")
    screen.appendChild(nextbtn);
    checker();
};


function checker(){
    if(check > 0){
        console.log(check);
        let reset = document.querySelector(".btn-danger");
        reset.addEventListener("click", function(){
            console.log("ended game");
            resetplayer();
        });
        let next_player = document.querySelector(".btn-success");
        next_player.addEventListener("click", function(){
            game();
            console.log("next player");

        });
    }
    
};
function resetplayer() {
    player = [];
    let screen = document.querySelector(".text-center");
    screen.innerHTML = `    <div class="text-center">
    <h1><span class="T">Truth </span>or <span class="D">Dare</span></h1>
    <input type="text" placeholder="Name of player" class="form-control">
    <button type="button" class="btn btn-outline-primary">Add</button>
    <div class="done">
    </div>
    <div class="unorder">
    </div>
    </div>`;
    starting();
    
}

