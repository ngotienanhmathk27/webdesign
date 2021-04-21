function show() {
  if (document.getElementById("team").style.display == "none") {
    document.getElementById("team").style.display = "block";
    document.getElementById("myform").style.display = "block";
    document.getElementById("showmore").innerHTML = "SHOW LESSSSS";
  } else {
    document.getElementById("team").style.display = "none";
    document.getElementById("myform").style.display = "none";
    document.getElementById("showmore").innerHTML = "SHOW MORE";
  }
}

function check() {
    
  if (document.getElementById("email").value == "") {
    alert("please fill your email");
    return 0;
  }
  if (
    !document.getElementById("USA").checked &&
    !document.getElementById("UK").checked
  ) {
    alert("please check your options");
    return 0;
  }

  if (document.getElementsByTagName("input")[3].value != "cVr12TY") {
    alert("please check your captcha");
    return 0;
  }

  alert("thank you very much");
}
