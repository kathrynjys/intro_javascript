window.onload = init;
function checkall() {
    var checkev = 0;
    var usrname = document.pageForm.uname.value; 
    var psword = document.pageForm.pword.value; 
    var psvword = document.pageForm.pvword.value; 
    var ftname = document.pageForm.pvword.value; 
    var ltname = document.pageForm.lname.value; 
    var eltml = document.pgForm.emid.value; 
    var atrate = eltml.indexOf("@");
    var dot = eltml.lastIndexOf(".");
    var punumb = document.pageForm.pnum.value; 
 
    if (usrname == ""){
        document.getElementById('uname').innerHTML = "must only contain letters and numbers.";
        checkev = 0; 
        }else {
          document.getElementById('uname').innerHTML = "";
          checkev++;
        }
    if (psword ==""){
        document.getElementById('pword').innerHTML = "minimum of 8 characters"; 
        checkev = 0; 
        } else { 
        document.getElementById('pword').innerHTML = ""; 
        checkev++; 
        }
    if (psvword ==""){
        document.getElementById('pvword').innerHTML = "minimum of 8 characters, must match password"; 
        checkev = 0; 
        }else {
            document.getElementById('pvword').innerHTML = ""; 
            checkev++; 
        }
    if (ftname == "") {
          document.getElementById('fname').innerHTML = "Your first name is required.";
          checkev = 0;
        } else {
          document.getElementById('fname').innerHTML = "";
          checkev++;
        }
    if (ltname == "") {
          document.getElementById('lname').innerHTML = "Your last name is required.";
          checkev = 0;
        } else {
          document.getElementById('lname').innerHTML = "";
          checkev++;
        }
    if (eltml ==""){
        document.getElementById('emid').innerHTML = "use xxx@xxx.xxx format";  
        checkev = 0; 
        } else if (atrate < 1 || dot < atrate + 2 || dot + 2 >= eltml.length)
          document.getElementById('emid').innerHTML = "Your email input is not valid.";
    else {
        document.getElementById('emid').innerHTML = "";
        checkev++; 
        }
    
    if (punumb == "") {
        document.getElementById('pnum').innerHTML = "use (xxx) xxx-xxxx format"; 
        checkev = 0; 
    } else {
        document.getElementById('pnum').innerHTML = "";
        checkev++; 
    }
    
    
        if (checkev == 7) {
         //Check all before opening confirmation page.
            window.location.href = "confirm.html";
        }
  }
   