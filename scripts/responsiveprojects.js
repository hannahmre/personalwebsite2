var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

function responsive() {
    if(width <= 950){
        var element = document.getElementById("navv");
        element.classList.remove("flex-column");
    }
  
}

responsive();