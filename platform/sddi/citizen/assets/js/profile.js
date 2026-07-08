/* ==========================================================
   AMARTRACK
   Citizen Digital Twin
   profile.js
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Citizen Digital Twin Loaded");

    initialiseTabs();

    initialiseButtons();

    animateAIScore();

    initialiseTable();

    initialiseCards();

});

/* ==========================================================
   TAB NAVIGATION
========================================================== */

function initialiseTabs() {

    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab => {

        tab.addEventListener("click", function () {

            tabs.forEach(t => t.classList.remove("active"));

            this.classList.add("active");

            showNotification(
                this.innerText.trim(),
                "Module selected"
            );

        });

    });

}

/* ==========================================================
   BUTTONS
========================================================== */

function initialiseButtons() {

    document.querySelectorAll(".btn").forEach(button => {

        button.addEventListener("click", function () {

            const text = this.innerText.trim();

            switch(text){

                case "Edit Profile":

                    showNotification(
                        "Edit Profile",
                        "Opening editor..."
                    );

                    break;

                case "Generate PDF":

                    window.print();

                    break;

                case "Generate QR":

                    showNotification(
                        "QR",
                        "QR generation initiated."
                    );

                    break;

                case "Print ID":

                    window.print();

                    break;

                case "Send to Employer":

                    showNotification(
                        "Placement",
                        "Profile forwarded."
                    );

                    break;

                default:

                    showNotification(
                        "Action",
                        text
                    );

            }

        });

    });

}

/* ==========================================================
   AI SCORE
========================================================== */

function animateAIScore(){

    const score = document.querySelector(".score-circle");

    if(!score) return;

    const target = parseInt(score.innerText);

    let value = 0;

    score.innerText = "0";

    const timer = setInterval(function(){

        value++;

        score.innerText = value;

        if(value >= target){

            clearInterval(timer);

        }

    },18);

}

/* ==========================================================
   TABLES
========================================================== */

function initialiseTable(){

    document.querySelectorAll("tbody tr").forEach(row=>{

        row.addEventListener("click",function(){

            document.querySelectorAll("tbody tr")
            .forEach(r=>r.classList.remove("selected"));

            this.classList.add("selected");

        });

    });

}

/* ==========================================================
   CARD EFFECTS
========================================================== */

function initialiseCards(){

    document.querySelectorAll(".card").forEach(card=>{

        card.addEventListener("mouseenter",function(){

            this.style.transform="translateY(-4px)";

        });

        card.addEventListener("mouseleave",function(){

            this.style.transform="translateY(0px)";

        });

    });

}

/* ==========================================================
   NOTIFICATION
========================================================== */

function showNotification(title,message){

    let toast=document.createElement("div");

    toast.className="notification";

    toast.innerHTML=`

        <strong>${title}</strong>

        <br>

        ${message}

    `;

    document.body.appendChild(toast);

    setTimeout(function(){

        toast.classList.add("show");

    },100);

    setTimeout(function(){

        toast.classList.remove("show");

        setTimeout(function(){

            toast.remove();

        },300);

    },2800);

}

/* ==========================================================
   FUTURE API PLACEHOLDERS
========================================================== */

function fetchCitizen(){

    console.log("Citizen API");

}

function fetchDocuments(){

    console.log("Documents API");

}

function fetchAssessment(){

    console.log("Assessment API");

}

function fetchEmployment(){

    console.log("Employment API");

}

function generateQRCode(){

    console.log("QR API");

}

function generateCertificate(){

    console.log("Certificate API");

}

/* ==========================================================
   END
========================================================== */