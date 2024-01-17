
function addingEventListener() {
    const buttonElement = document.getElementById('button');
  
    if (buttonElement) {
      buttonElement.addEventListener('click', function() {
        console.log('Button clicked!'); 
      });
    }
  }