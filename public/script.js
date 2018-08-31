const dayTitles = document.querySelectorAll('#dayTitle')
const modal = document.getElementById('allExercises');
const btn = document.getElementById("exerciseBtn");
const span = document.getElementsByClassName("close")[0];
const chestBtn = document.querySelector('#chest')
const backBtn = document.querySelector('#back')
const legsBtn = document.querySelector('#legs')
const calvesBtn = document.querySelector('#calves')
const armsBtn = document.querySelector('#arms')
const shouldersBtn = document.querySelector('#shoulders')
const absBtn = document.querySelector('#abs')
const workout = document.querySelectorAll('.workout')
const chest = document.querySelectorAll('.chest')
const back = document.querySelectorAll('.back')
const legs = document.querySelectorAll('.legs')
const calves = document.querySelectorAll('.calves')
const arms = document.querySelectorAll('.arms')
const shoulders = document.querySelectorAll('.shoulders')
const abs = document.querySelectorAll('.abs')

// Loads up saved Day Titles
window.addEventListener('load', () => {
  for(let i=0; i<dayTitles.length; i++) {
    if(localStorage.getItem(`title[${i}]`)) {
      dayTitle[i].innerHTML = localStorage.getItem(`title[${i}]`)
    }
  }
})

// Update custom Day Title
for(let i=0; i<dayTitles.length; i++) {
  dayTitles[i].addEventListener('keyup', () => {
    localStorage.setItem(`title[${i}]`, dayTitles[i].innerHTML)
  })
}

// Modal Functionality
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
// Exercise Functionality
chestBtn.addEventListener('click', () => {
  for(let i=0; i<workout.length; i++) {
    workout[i].style.display = 'none';
  }
  for(let i=0; i<chest.length; i++) {
    chest[i].style.display = 'block';
  }
})
backBtn.addEventListener('click', () => {
  for(let i=0; i<workout.length; i++) {
    workout[i].style.display = 'none';
  }
  for(let i=0; i<back.length; i++) {
    back[i].style.display = 'block';
  }
})
legsBtn.addEventListener('click', () => {
  for(let i=0; i<workout.length; i++) {
    workout[i].style.display = 'none';
  }
  for(let i=0; i<legs.length; i++) {
    legs[i].style.display = 'block';
  }
})
calvesBtn.addEventListener('click', () => {
  for(let i=0; i<workout.length; i++) {
    workout[i].style.display = 'none';
  }
  for(let i=0; i<calves.length; i++) {
    calves[i].style.display = 'block';
  }
})
armsBtn.addEventListener('click', () => {
  for(let i=0; i<workout.length; i++) {
    workout[i].style.display = 'none';
  }
  for(let i=0; i<arms.length; i++) {
    arms[i].style.display = 'block';
  }
})
shouldersBtn.addEventListener('click', () => {
  for(let i=0; i<workout.length; i++) {
    workout[i].style.display = 'none';
  }
  for(let i=0; i<shoulders.length; i++) {
    shoulders[i].style.display = 'block';
  }
})
absBtn.addEventListener('click', () => {
  for(let i=0; i<workout.length; i++) {
    workout[i].style.display = 'none';
  }
  for(let i=0; i<abs.length; i++) {
    abs[i].style.display = 'block';
  }
})
