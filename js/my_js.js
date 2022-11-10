 $(document).ready(function(){
          $('ul li a').click(function(){
            $('li a').removeClass("active");
            $(this).addClass("active");
        });
    });



var interval;
var timeout;
$(window).scroll(function(event){
  //prevent from stopping the interval
  clearTimeout(timeout);

  //execute parallax every 300ms => same as transition
  if(!interval){
    parallax();
    interval = setInterval(function(){
      parallax();
    }, 300);
  }

  //stops the interval after you stopped scrolling for x amount of time
  timeout = setTimeout(function(){
    clearInterval(interval);
    interval = null;
  }, 300);
});



const counters = document.querySelectorAll('.value');
const speed = 1000;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('data');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});

