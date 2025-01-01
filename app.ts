// Access elements with appropriate type casting
const nameInputField = document.getElementById("name") as HTMLInputElement;
const emailInputField = document.getElementById("email") as HTMLInputElement;
const educationInputField = document.getElementById("education") as HTMLTextAreaElement;
const skillsInputField = document.getElementById("skills") as HTMLInputElement;
const photoInputField = document.getElementById("photo") as HTMLInputElement;
const previewPhotoElement = document.getElementById("preview-photo") as HTMLImageElement;

document.getElementById("generate-resume")?.addEventListener("click", () => {
    // Retrieve values from input elements
    const name = nameInputField.value;
    const email = emailInputField.value;
    const education = educationInputField.value;
    const skills = skillsInputField.value;
    const photo = photoInputField.files?.[0];

    // Update the preview elements
    (document.getElementById("preview-name") as HTMLElement).textContent = name || "Your Name";
    (document.getElementById("preview-email") as HTMLElement).textContent = email || "Your Email";
    (document.getElementById("preview-education") as HTMLElement).textContent = education || "Add your education here...";
    (document.getElementById("preview-skills") as HTMLElement).textContent = skills || "Add your skills here...";

    if (photo) {
        const reader = new FileReader();
        reader.onload = function (e) {
            if (e.target?.result) {
                previewPhoto.src = e.target.result as string;
                previewPhoto.style.display = "block";
            }
        };
        reader.readAsDataURL(photo);
    } else {
        previewPhoto.style.display = "none";
    }
});

