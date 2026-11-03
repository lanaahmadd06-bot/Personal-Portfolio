function validateForm() {

    // Get values from input fields
    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let country = document.getElementById("country").value.trim();
    let comments = document.getElementById("comments").value.trim();

    // Check if any field is empty
    if (fullName === "" || email === "" || country === "" || comments === "") {

        alert("Please fill in all fields.");

        return false;
    }

    // Success message
    alert("Your message has been submitted successfully!");

    return false;
}
