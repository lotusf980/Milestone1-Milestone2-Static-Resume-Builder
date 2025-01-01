var _a;
// Access elements with appropriate type casting
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var educationInput = document.getElementById("education");
var skillsInput = document.getElementById("skills");
var photoInput = document.getElementById("photo");
var previewPhoto = document.getElementById("preview-photo");
(_a = document.getElementById("generate-resume")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var _a;
    // Retrieve values from input elements
    var name = nameInput.value;
    var email = emailInput.value;
    var education = educationInput.value;
    var skills = skillsInput.value;
    var photo = (_a = photoInput.files) === null || _a === void 0 ? void 0 : _a[0];
    // Update the preview elements
    document.getElementById("preview-name").textContent = name || "Your Name";
    document.getElementById("preview-email").textContent = email || "Your Email";
    document.getElementById("preview-education").textContent = education || "Add your education here...";
    document.getElementById("preview-skills").textContent = skills || "Add your skills here...";
    if (photo) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) {
                previewPhoto.src = e.target.result;
                previewPhoto.style.display = "block";
            }
        };
        reader.readAsDataURL(photo);
    }
    else {
        previewPhoto.style.display = "none";
    }
});
