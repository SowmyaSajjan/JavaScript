$(document).ready(function(){
    $("p").click(function(){
      $(this).hide(2000).css("color","red")
    }),
    $("#flip").click(function(){
        $("#div").slideDown("slow");
    }),
    $("#ani").click(function(){
        $("#div1").animate({left:'250px'});
    }),
    $("#hide").click(function(){
        $("#callback").hide("slow",function(){
            alert("this paragraph is now hidden");
        });
    }),
    $("#text").click(function(){
        alert($("#div2").text());
    }),
    $("#html").click(function(){
        alert($("#div2").html());
    }),
    $("#b1").click(function(){
        $("#name").val("Sowmya");
    }),
    $("#b2").click(function(){
        $("#class").val("B.E");
    }),
    $("#rename").click(function(){
        $("#name").replaceWith("Sajjan");
    }),
    $("#reclass").click(function(){
        $("#class").replaceWith("12th");
    })
  });

