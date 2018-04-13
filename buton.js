var jqueryIndex = 1;
showJquery(jqueryIndex);

function plusJquery(n){
    showJquery(jqueryIndex += n);
}

function currentJquery(n){
    showJquery(jqueryIndex = n);
}

function showJquery(n){
    var i;
    var jquery = document.getElementsByClassName("jquery1");
    
      if(n > jquery.length){
    jqueryIndex = 1
    }
    if (n < 1){
        jqueryIndex = jquery.length
    }
    for ( i = 0; i < jquery.length; i++) {
        jquery[i].style.color = "#7F8C8C";
    }
  
    jquery[jqueryIndex-1].style.color= "red";
    
}