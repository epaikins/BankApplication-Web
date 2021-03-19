
// Deposit Implementation
let balance = 0
document.getElementById("currentAmount").innerText = balance;

function depositValue() {
    // Selecting the input element and get its value 
    let deposit = document.getElementById("amount").value;
    // Displaying the value
    if(Number(deposit) >= 0){
    balance += Number(deposit);
  }
  else alert("Please enter valid amount");
    document.getElementById("currentAmount").innerText = balance;
  }



// Select div with login and deposit form

let welcomePage = document.querySelector("#welcome-bg-info")
let generalPage = document.querySelector("#about-bg-info")
let depositForm = document.querySelector('#deposit-bg');
let login = document.querySelector("#login");
let depositButton = document.querySelector("#deposit");
let login_now = document.querySelector("#login-now");

// the input box of deposit form

document.querySelector("#amount").value = "";

depositButton.addEventListener('click', depositValue);

// // user is logged in
isLoggedIn();

login.addEventListener('click', function(){
    isLoggedIn();
  })

function isLoggedIn(){

    let username = document.querySelectorAll('[type="name"]')[0].value;
    // get password
    let password = document.querySelectorAll('[type="password"]')[0].value;

  if(username != ""){
    generalPage.style.display="none";
    login_now.innerText = "LOG OUT";
    welcomePage.style.display="block";
    document.querySelector('#usernameID').innerText = username;
    depositForm.style.display = "block";
  }
  else {depositForm.style.display = "none";
        welcomePage.style.display="none";
}

}
