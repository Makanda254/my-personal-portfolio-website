function addingEventListener(){
    const input = document.getElementById('toggle-button');

    input.addEventListener('click', function() {
      alert('This page will take you to Aboutme page!');
    });
}

addingEventListener();

function changeColor(){
  const obj = document.getElementById("aboutme").style.color="green";
}

changeColor();

function backToNormal(){
    const newObj = document.getElementById("aboutme").style.color="";
  }
  
  backToNormal();
  


