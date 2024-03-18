document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Basic validation
    if (username === "" || password === "") {
      alert("Please enter both username and password.");
      return;
    }
    
    // Simulate login (replace with actual authentication logic)
    if (username === "admin" && password === "password") {
      alert("Login successful!");
      // Redirect to dashboard or other page
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
  