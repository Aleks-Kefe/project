$(function() {
  //hide these pages when the site loads...
    $("#loginbtn").hide()
    $("#loginmsg").hide()
    $("#process").hide()
    $("#forgotpassword").hide()
    $("#signinbtn").hide()
    $("#navbarlinks").hide()
    
    $("#right").click(function() {
        $("#loginbtn").show(1000)
       $("#centerintro").hide()
   })
   
   $("#btn").click(function(){
     $("#loginbtn").hide()
       $("#centerintro").show(1000)
       $("#loginmsg").show(1000)
              $("#centerintro").hide()
   })
   
   
   $("#wait").click(function(){
     $("#loginbtn").hide()
       $("#centerintro").hide()
       $("#loginmsg").hide()
      $("#process").show()
   })
   
   
   $("#ok").click(function(){
       $("#centerintro").show(1000)
       $("#process").hide()
   })
   
   $("#cancel").click(function(){
       $("#centerintro").show(1000)
       $("#loginmsg").hide()
   })
   
   
   $("#p1").click(function(){
       $("#centerintro").hide()
       $("#loginbtn").hide()
       $("#loginbtn").hide()
       $("#loginbtn").hide()
       $("#forgotpassword").show()
   })
   
   
   $("#p2").click(function(){
       $("#centerintro").hide()
       $("#loginbtn").hide()
       $("#loginmsg").hide()
       $("#forgotpassword").hide()
       $("#signinbtn").show()
   })
   $("#signinbtn").click(function(){
       $("#centerintro").hide()
       $("#loginbtn").hide()
       $("#forgotpassword").hide()
       $("#signinbtn").show()
   })
   $("#loginbtn").click(function(){
       $("#centerintro").hide()
       $("#signinbtn").hide()
       $("#forgotpassword").hide()
       $("#signinbtn").show()
   })
   
   
   



   //toggle reeponsive menu

   $("#togglemenu").click(function() {
        $("#navbarlinks").toggle(1000)
       
    })


})

