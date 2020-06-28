$(document).ready(function(){
    var current = location.pathname;
    var filename = current.replace(/^.*[\\\/]/, '')
    console.log(filename);
    $('#myTopnav a').each(function(){
        var $this = $(this);
        if($this.attr('href').indexOf(filename) !== -1){
            $this.addClass("active");
        }
    })
  })
//Task 11 (1p) -----------------------------------------------------------------------------------


  