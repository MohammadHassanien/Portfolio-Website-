function previewProfile() {
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var dob = document.getElementById("dob").value;
    var location = document.getElementById("location").value;
    var about = document.getElementById("about").value;
    var doing = document.getElementById("doing").value;
    var input = document.getElementById("picture");
    var certificateInput = document.getElementById("certificateImage");
    var previewImage = document.getElementById("previewImage");
    var previewCertificateImage = document.getElementById(
        "previewCertificateImage"
    );

    document.getElementById("previewEmail").innerText = email;
    document.getElementById("previewPhone").innerText = phone;
    document.getElementById("previewDOB").innerText = dob;
    document.getElementById("previewLocation").innerText = location;
    document.getElementById("previewAbout").innerText = about;
    document.getElementById("previewDoing").innerText = doing;

    if (certificateInput.files && certificateInput.files[0]) {
        var certificateReader = new FileReader();

        certificateReader.onload = function (e) {
            previewCertificateImage.src = e.target.result;
        };

        certificateReader.readAsDataURL(certificateInput.files[0]);
    }

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            previewImage.src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function saveChanges() {
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var dob = document.getElementById("dob").value;
    var location = document.getElementById("location").value;
    var about = document.getElementById("about").value;
    var doing = document.getElementById("doing").value;
    var certificateImage = document.getElementById("certificateImage").value;
    var certificateDescription = document.getElementById(
        "certificateDescription"
    ).value;
    var certificateDate = document.getElementById("certificateDate").value;

    console.log("Saving changes...");
    console.log("Email: " + email);
    console.log("Phone Number: " + phone);
    console.log("Date of Birth: " + dob);
    console.log("Location: " + location);
    console.log("About: " + about);
    console.log("What I am Doing: " + doing);
    console.log("Certificate Image: " + certificateImage);
    console.log("Certificate Description: " + certificateDescription);
    console.log("Date Earned: " + certificateDate);

}

document
    .getElementById("profileForm")
    .addEventListener("input", previewProfile);

function addEducationEntry() {
    var educationSection = document.getElementById("educationSection");
    var entry = createEntry("Education");
    educationSection.appendChild(entry);
}

function addExperienceEntry() {
    var experienceSection = document.getElementById("experienceSection");
    var entry = createEntry("Experience");
    experienceSection.appendChild(entry);
}

function createEntry(entryType) {
    var entry = document.createElement("div");
    entry.className = "entry";

    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-button";
    removeButton.onclick = function () {
        entry.parentNode.removeChild(entry);
    };

    var startDateLabel = document.createElement("label");
    startDateLabel.textContent = "Start Date:";
    var startDateInput = document.createElement("input");
    startDateInput.type = "date";
    startDateInput.name = entryType.toLowerCase() + "StartDate";

    var endDateLabel = document.createElement("label");
    endDateLabel.textContent = "End Date:";
    var endDateInput = document.createElement("input");
    endDateInput.type = "date";
    endDateInput.name = entryType.toLowerCase() + "EndDate";

    var nameInputLabel = document.createElement("label");
    nameInputLabel.textContent = "Name:";
    var nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = entryType.toLowerCase() + "Name";

    var degreePositionLabel = document.createElement("label");
    degreePositionLabel.textContent =
        entryType === "Education" ? "Degree:" : "Position:";
    var degreePositionInput = document.createElement("input");
    degreePositionInput.type = "text";
    degreePositionInput.name = entryType.toLowerCase() + "DegreePosition";

    var descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description:";
    var descriptionInput = document.createElement("textarea");
    descriptionInput.rows = 4;
    descriptionInput.name = entryType.toLowerCase() + "Description";

    entry.appendChild(removeButton);
    entry.appendChild(startDateLabel);
    entry.appendChild(startDateInput);
    entry.appendChild(endDateLabel);
    entry.appendChild(endDateInput);
    entry.appendChild(nameInputLabel);
    entry.appendChild(nameInput);
    entry.appendChild(degreePositionLabel);
    entry.appendChild(degreePositionInput);
    entry.appendChild(descriptionLabel);
    entry.appendChild(descriptionInput);

    return entry;
}

function passwordCheck() {
    var un = "mih025";
    var pd = "mh";
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == un && password == pd) {
        window.location.href = "AboutPage.html";
    }
}
