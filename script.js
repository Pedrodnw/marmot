const doorImage1 = document.getElementById('door1');

const doorImage2 = document.getElementById('door2');

const doorImage3 = document.getElementById('door3');

const katePath = "https://imgur.com/pbGGsM1.jpg" ;

const marmot1Path = "https://imgur.com/x50kZC8.jpg";

const marmot2Path = "https://imgur.com/vd3K7Aa.jpg";

let numClosedDoors = 3;

let openDoor1;
let openDoor2;
let openDoor3;

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = katePath;
    openDoor2 = marmot1Path;
    openDoor3 = marmot2Path;
  } else if (choreDoor === 1) {
    openDoor2 = katePath;
    openDoor1 = marmot1Path;
    openDoor3 = marmot2Path;
  } else {
    openDoor3 = katePath;
    openDoor2 = marmot1Path;
    openDoor1 = marmot2Path;
  };
};

randomChoreDoorGenerator();

const closedDoorPath = "https://imgur.com/HDx3dLm.jpg";

const isKate = door => {
  if ( door.src === katePath) {
    return true;
  } else {
    return false;
  }
};

const isClicked = door => {
  if ( door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
};

let playerScore = document.getElementById('player');
let computerScore = document.getElementById('computer');

let playerCounter = 0;
let computerCounter = 0;


let startButton = document.getElementById('start');

const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0 && isKate(door)) {
    startButton.innerHTML = 'You win! Play again?';
    playerCounter++;
    playerScore.innerHTML = playerCounter;
  } else if (numClosedDoors === 0 || isKate(door)) {
    startButton.innerHTML = 'You Lose! Play again?';
    computerCounter++;
    computerScore.innerHTML = computerCounter;  
  }
};

doorImage1.onclick = () => {
  if (!isClicked(doorImage1) && startButton.innerHTML === 'Good luck!') {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }   
};

doorImage2.onclick = () => {
  if (!isClicked(doorImage2) && startButton.innerHTML === 'Good luck!') {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }  
};

doorImage3.onclick = () => {
  if (!isClicked(doorImage3) && startButton.innerHTML === 'Good luck!') {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  } 
};




startButton.onclick = () => {
  if ( startButton.innerHTML != 'Good luck!' ) {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!';
  randomChoreDoorGenerator();
  }
}
