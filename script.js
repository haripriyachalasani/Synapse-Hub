// For Login Page Start
function login() {
    // Get input values
    var email = document.getElementById('email').value;
     var password = document.getElementById('password').value;

    // Check credentials (dummy validation)
    if (email === 'synapsehub@gmail.com' && password === 'password'){
        window.alert('Login Successful!');
        window.location.assign(" ") //need to add target file of .html which shows next page
     // Redirect or show dashboard
     } else {
        window.alert('Invalid email or password. Please try again.');
    }
}

// Login page ended