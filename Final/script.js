
document.getElementById("myForm").submit(); 

$('myform').submit(function(event){ event.preventDefault(); 
});

function validateForm() {
    var x = document.forms["myForm"]["fname"]["lname"]
    ["email"]["address"]["city"]["state"]["zip"]
    ["credit"]["exp"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  } 