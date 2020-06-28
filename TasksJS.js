var y = 0.1;

function ageCalc() {
    var minutes = 1000 * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var months = days * 30.4375;
    var years = days * 365.25;
  
    d = new Date(document.getElementById("calc").value);

    dt = d.getDate();
    mn = d.getMonth();
    mn++;
    yy = d.getFullYear();
    var date1 = new Date(mn + "/" + dt + "/" + yy);
  
    var date2 = new Date();
    var timeDiff = (date2.getTime() - date1.getTime());

    if(timeDiff < 0)
    {
      alert("WRONG DATE!");
    }

    else
    {
    var age = timeDiff / years;
    age = parseFloat(Math.round(age * 100000000000) / 100000000000).toFixed(11);
    y = Math.floor(timeDiff / years);
    var m = Math.floor(timeDiff / months);
    var d = Math.floor(timeDiff / days);
    var h = Math.floor(timeDiff / hours);
    var mi = Math.floor(timeDiff / minutes);
    var s = Math.floor(timeDiff / 1000);
  
    document.getElementById("years").innerHTML = y;
    document.getElementById("months").innerHTML = m-y*12;
    document.getElementById("days").innerHTML = Math.floor(d - y*365.25 - (m-y*12)*30.4375);
    document.getElementById("hours").innerHTML = Math.round(h-24*(y*365.25+(m-y*12)*30.4375+d - y*365.25 - (m-y*12)*30.4375))+1;
    document.getElementById("minutes").innerHTML = Math.floor(mi-60*24*(y*365.25+(m-y*12)*30.4375+d - y*365.25 - (m-y*12)*30.4375)-60*(h-24*(y*365.25+(m-y*12)*30.4375+d - y*365.25 - (m-y*12)*30.4375)));
    var min1 = mi-60*24*(y*365.25+(m-y*12)*30.4375+d - y*365.25 - (m-y*12)*30.4375)-60*(h-24*(y*365.25+(m-y*12)*30.4375+d - y*365.25 - (m-y*12)*30.4375));
    var mint =  60*24*(y*365.25+(m-y*12)*30.4375+d - y*365.25 - (m-y*12)*30.4375)+60*(h-24*(y*365.25+(m-y*12)*30.4375+d - y*365.25 - (m-y*12)*30.4375));
    document.getElementById("seconds").innerHTML = Math.floor(s-60*mint-60*min1);
    
    
    setTimeout("ageCalc()", 50);
    }
    
  }
  
  
  function fun() {

  window.onload = ageCalc();
  }
  


  function redirect(){

    if(y == 0.1)
    {
      alert("ENTER YOUR BIRTHDAY FIRST!");
    }

    else
    {

    if(y>=18)
    {
      window.location.href = "tryhome.html";
    }
    else
    {
      alert("TOO YOUNG!");
    }

    }
  }

//TASK 1 (1p) ------------------------------------------------------------------------------

function isWord(str) {
  var ok = false;
  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if ((code > 47 && code < 58) ||   // 0-9
        (code > 64 && code < 91) ||   // A-Z
        (code > 96 && code < 123) ||  // a-z
        (code > 32 && code < 35)  ||  // ! "
        (code == 39) ||               // '
        (code > 43 && code < 47) ||   // , - .
        (code > 57 && code < 60) ||   // : ; 
        (code == 63)    ||            // ?
        (code > 39 && code < 42)) {   // ( )
        ok = true;
        return ok;
        }
  }
  return ok;
}


  function WordCounter(){

  var text = document.body.innerText;
  text = text.replace(/\n/gi, " ");
  text = text.split(' ');
  //console.log(text);
  var counter = 0;

  for (var i = 0; i < text.length; i++) {
    if (text[i] !== ' ' && isWord(text[i])) {
        counter++;
    }
  }

  var h3 = document.getElementById("Counter");
  h3.innerHTML = counter;

  console.log(counter);
  
}


//Task 13 (1p) --------------------------------------------------------------------------------

function Animationobo(){
  var str = "Paris' monument-lined boulevards, museums, classical bistros and boutiques are enhanced by a new wave of multimedia galleries, creative wine bars, design shops and tech start-ups.";
  var str1 = " The cloud-piercing, wrought-iron Eiffel Tower, broad Arc de Triomphe guarding the glamorous avenue des Champs-Élysées, flying buttressed Notre Dame cathedral, lamplit bridges spanning the Seine and art nouveau cafes' wicker-chair-lined terraces are enduring Parisian emblems. Despite initial appearances, however, Paris’ cityscape isn’t static: there are some stunning modern and contemporary icons, too, from the inside-out, industrial-style Centre Pompidou to the mur végétal (vertical garden) gracing the Musée du Quai Branly, the glass sails of the Fondation Louis Vuitton contemporary-art centre, and the gleaming steel egg-shaped concert venue La Seine Musicale.";

  var spans = '<span>' + str.split(/\s+/).join(' </span><span>') + '</span>';
  var div = document.getElementById("Ani1");
  
  $(spans).hide().appendTo(div).each(function(i) {
      $(this).delay(333.33 * i).fadeIn(1000);
  });

  var spans = '<span>' + str1.split(/\s+/).join(' </span><span>') + '</span>';
  var div2 = document.getElementById("Ani2");
  
  $(spans).hide().appendTo(div2).each(function(i) {
      $(this).delay(333.33*i).fadeIn(1000/3);
  });


}

//Task 2 (1p) -------------------------------------------------------------------------------
var allSpans = document.getElementsByTagName('span');
var i = 0;

function Character(){

setTimeout( function() {
  if(i <= Math.floor(allSpans.length/2)){
    Anime(i);
    Character();
  }
  i++;
},100)

}


function Anime(i){
allSpans[i].style.opacity = "1";
console.log(allSpans[i]);
allSpans[allSpans.length - i - 1].style.opacity = "1";

}