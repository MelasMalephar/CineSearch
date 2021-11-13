var signUp = document.getElementById('SignContact');
signUp.addEventListener('submit', function (event) {
    event.preventDefault()


    var firstname = document.getElementById('first').value
    console.log(firstname)
    var lastname = document.getElementById('last').value
    console.log(lastname)
    var emailId = document.getElementById('email').value
    console.log(emailId)
    var mobileNo = document.getElementById('mobile').value
    console.log(mobileNo)
    var Npassword = document.getElementById('Npassword').value
    console.log(Npassword)
    var Cpassword = document.getElementById('Cpassword').value
    console.log(Cpassword)
});
