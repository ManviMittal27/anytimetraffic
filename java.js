var arr = [];

var passinput = document.getElementById("password");
var toggle = document.getElementById("btnToggle");
var icon = document.getElementById("eyeIcon");

function tooglePassword(){
    if(passinput.type === "password"){
        passinput.type = 'text';
        icon.classList.add("fa-eye-slash");
    }
    else{
        passinput.type = 'password';
        icon.classList.remove("fa-eye-slash");
    }
}
function checkInput(){

}

toggle.addEventListener('click', tooglePassword, false);
passinput.addEventListener('keyup', checkInput, false);


function add(){
    var mail = document.getElementById("inputEmail4").value;
    var pass = document.getElementById("inputPassword4").value;
    var address = document.getElementById("inputAddress").value;
    var city = document.getElementById("inputCity").value;
    var state = document.getElementById("inputState").value;
    var zip = document.getElementById("inputZip").value;
    var name = document.getElementById("UserName").value;
    var photo = document.getElementById("ProfileImage").value;
    
    var profiles = {};
    profiles.Email = mail;
    profiles.Password = pass;
    profiles.Address = address;
    profiles.City = city;
    profiles.State = state;
    profiles.Pincode = zip;
    profiles.Username = name;
    profiles.ProfileImage = photo;

    if(localStorage.getItem("value")){
        arr = JSON.parse(localStorage.getItem("value"));
    };

    arr.push(profiles);
    localStorage.setItem("value",JSON.stringify(arr));
}





function Login(){
    
    var SignBtn = document.getElementById("signbtn");
    SignBtn.addEventListener("click",function(){
        document.querySelector(".popup").classList.remove("active");
    });

    var EmailID = document.getElementById("email").value;
    var Pass = document.getElementById("password").value;

    const storage = window.localStorage;
    const data = storage.getItem('value');
    const arr1 = JSON.parse(data);
    const obj = arr1.find(obj => obj.Email === EmailID && obj.Password === Pass);

    if(obj){
        var User = document.getElementById("username");
        var Usern = document.getElementById("uname");
        var Userid = document.getElementById("uid");
        const profileimage = obj.ProfileImage;
        const profilename = obj.Username;
        User.innerHTML = "  " + profilename;
        Usern.innerHTML = profilename;
        Userid.setAttribute("src",profileimage);

        var logout = document.getElementById("logout")
        logout.style = "display:block";

        var login = document.getElementById("signin");
        var SUbtn = document.getElementById("sgbtn");
        login.style = "display:none";
        SUbtn.style = "display:none";
    }
    else {
        alert("User is not authorized");
    }
}

function signout(){
    var User = document.getElementById("username");
        var Usern = document.getElementById("uname");
        var Userid = document.getElementById("uid");
        User.innerHTML = "  " + "User1";
        Usern.innerHTML = "Guest User";
        Userid.setAttribute("src","profile.png");

        var logout = document.getElementById("logout")
        logout.style = "display:none";

        var login = document.getElementById("signin");
        var SUbtn = document.getElementById("sgbtn");
        login.style = "display:inline";
        SUbtn.style = "display:inline";
}
  


  
  

