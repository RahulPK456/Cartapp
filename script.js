document.addEventListener('DOMContentLoaded', function () {
    const radios = document.querySelectorAll('input[name="cart"]' );
    const options = document.querySelectorAll('.options');
  
    radios.forEach((radio, index) => {
      radio.addEventListener('change', function () {
        options.forEach((opt, i) => {
          if (i === index) {
            opt.style.display = radio.checked ? 'block' : 'none';
            
           
          } else {
            opt.style.display = 'none';
            
          }
        });
      });
    });
    
  });

  addtoCart=()=>{

    alert("ADD AN ITEM")
  }


  

