
console.log('Hello World!');

const name = "Ivan Calderon";
let hasDownloadedResume = false;
let downloadCount = 0;

const downloadButton = document.getElementById("downloadResume");

downloadButton.addEventListener("click", function() {
    downloadCount++;
    document.getElementById("downloadCount").textContent = downloadCount;
    if (hasDownloadedResume === false) {
        alert("Your resume is downloaded successfully!");
        hasDownloadedResume = true;
    }
});

function showGreeting(name) {
    return "Hello, my name is " + name + "! Welcome to my portfolio!";
}

document.getElementById("greeting").textContent = showGreeting(name);



const projects = [
    {
        title: "Packet Tracer",
        description: "Designed and configured network topology for network department using Cisco Packet Tracer.",
        deadline: new Date("2026-12-01"),
        imageURL: "cisco-packet-tracer.png"
    }
];

function renderProjects() {
    $("#projectsList").empty();

    for (let i = 0; i < projects.length; i++) {
        let projectCard = $("<div></div>").addClass("card mb-3 p-3");

        let projectImage = $("<img>")
            .attr("src", projects[i].imageURL)
            .attr("alt", projects[i].title)
            .addClass("card-img-top");

        let projectTitle = $("<h3></h3>")
            .text(projects[i].title);

        let projectDescription = $("<p></p>")
            .text(projects[i].description);

        let projectDeadline = $("<p></p>")
            .text("Deadline: " + projects[i].deadline.toLocaleDateString());

        projectCard.append(
            projectImage,
            projectTitle,
            projectDescription,
            projectDeadline
        );

        $("#projectsList").append(projectCard);
    }
}

function sortProjects() {
    projects.sort(function (a, b) {
        return a.deadline - b.deadline;
    });

    renderProjects();
}

renderProjects();

$("#sortProjectsButton").on("click", sortProjects);
const educationNames = [
    "Yavapai Community College",
    "Northern Arizona University"
];

const educationDates = [
    "2024-2025",
    "2025-present"
];
let educationTable = document.createElement("table");
educationTable.className = "table";
let headerRow = document.createElement("tr");
let schoolHeader = document.createElement("th");
schoolHeader.textContent = "School";
headerRow.appendChild(schoolHeader);
let dateHeader = document.createElement("th");
dateHeader.textContent = "Dates";
headerRow.appendChild(dateHeader);
educationTable.appendChild(headerRow);
for (let i = 0; i < educationNames.length; i++) {
let row = document.createElement("tr");
let schoolCell = document.createElement("td");
schoolCell.textContent = educationNames[i];
row.appendChild(schoolCell);
let dateCell = document.createElement("td");
dateCell.textContent = educationDates[i];
row.appendChild(dateCell);
educationTable.appendChild(row);
document.getElementById("educationTable").appendChild(educationTable);
}

const experienceNames = [
    "Aiden by Best Western",
    "Warner Bros."
];

const experienceRoles = [
    "Helpdesk Support",
    "Network Support Experience"
];

const experienceDates = [
    "2022-2023",
    "2026-present"
];

let experienceTable = document.createElement("table");
experienceTable.className = "table";

let experienceHeader = document.createElement("tr");

let companyHeader = document.createElement("th");
companyHeader.textContent = "Company";
experienceHeader.appendChild(companyHeader);

let roleHeader = document.createElement("th");
roleHeader.textContent = "Role";
experienceHeader.appendChild(roleHeader);

let experienceDateHeader = document.createElement("th");
experienceDateHeader.textContent = "Dates";
experienceHeader.appendChild(experienceDateHeader);

experienceTable.appendChild(experienceHeader);

for (let i = 0; i < experienceNames.length; i++) {
    let row = document.createElement("tr");

    let companyCell = document.createElement("td");
    companyCell.textContent = experienceNames[i];
    row.appendChild(companyCell);

    let roleCell = document.createElement("td");
    roleCell.textContent = experienceRoles[i];
    row.appendChild(roleCell);

    let dateCell = document.createElement("td");
    dateCell.textContent = experienceDates[i];
    row.appendChild(dateCell);

    experienceTable.appendChild(row);
}

document.getElementById("experienceTable").appendChild(experienceTable);

let skills = [
    "CompTIA A+",
    "CompTIA Network+",
    "Cisco Certified Network Associate (CCNA)"
];

function renderSkills() {
    $("#skillsList").empty();

    for (let i = 0; i < skills.length; i++) {
        let newSkill = $("<li></li>").text(skills[i]);

        let editButton = $("<button>Edit</button>");
        let deleteButton = $("<button>Delete</button>");

        editButton.on("click", function () {
            let updatedSkill = prompt("Edit skill:", skills[i]);

            if (updatedSkill !== null && updatedSkill.trim() !== "") {
                updatedSkill = updatedSkill.trim();

                let exists = skills.some(function (skill, index) {
                    return index !== i &&
                        skill.toLowerCase() === updatedSkill.toLowerCase();
                });

                if (exists) {
                    alert("This skill already exists.");
                    return;
                }

                skills[i] = updatedSkill;
                renderSkills();
            }
        });

        deleteButton.on("click", function () {
            newSkill.slideUp(300, function () {
                skills.splice(i, 1);
                renderSkills();
            });
        });

        newSkill.append(" ", editButton, " ", deleteButton);
        $("#skillsList").append(newSkill);
        newSkill.hide().fadeIn(300);
    }
}
$("#skillInput").on("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addSkill();
    }

    if (event.key === "Escape") {
        $("#skillInput").val("");
    }
});
function addSkill() {
    let skill = $("#skillInput").val().trim();

    if (skill === "") {
        alert("Please enter a skill.");
        return;
    }

    let exists = skills.some(function (existingSkill) {
        return existingSkill.toLowerCase() === skill.toLowerCase();
    });

    if (exists) {
        alert("This skill already exists.");
        return;
    }

    skills.push(skill);
    renderSkills();
    $("#skillInput").val("");
}

$("#addSkillButton").on("click", addSkill);

renderSkills();
const navItems = [
    { text: "About", id: "about" },
    { text: "Education", id: "education" },
    { text: "Experience", id: "experience" },
    { text: "Skills", id: "skills" },
    { text: "Projects", id: "projects" }
];

for (let i = 0; i < navItems.length; i++) {
    let navItem = $("<li></li>").addClass("nav-item");

    let navLink = $("<a></a>")
        .addClass("nav-link")
        .text(navItems[i].text)
        .attr("href", "#" + navItems[i].id);

    navItem.append(navLink);
    $("#navMenu").append(navItem);
}

$("#navMenu a").on("click", function(event) {
    event.preventDefault();

    let target = $(this).attr("href");

    $("html, body").animate({
        scrollTop: $(target).offset().top
    }, 600);
});