/* ==========================================================
   AMARTRACK
   Citizen Registry
   citizen.js
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Citizen Registry Loaded");

    initialiseSearch();

    initialiseFilters();

    initialiseTable();

    initialiseToolbar();

    initialiseKPIs();

});

/* ==========================================================
   SEARCH
========================================================== */

function initialiseSearch(){

    const searchButton=document.querySelector(".btn-primary");

    if(!searchButton) return;

    searchButton.addEventListener("click",function(){

        const inputs=document.querySelectorAll("input,select");

        let criteria={};

        inputs.forEach(function(item){

            if(item.value.trim()!==""){

                criteria[item.previousElementSibling.innerText]=item.value;

            }

        });

        console.table(criteria);

        notify(

            "Search Completed",

            "Citizen registry filtered."

        );

    });

}

/* ==========================================================
   FILTERS
========================================================== */

function initialiseFilters(){

    document.querySelectorAll("select").forEach(function(select){

        select.addEventListener("change",function(){

            console.log(

                this.value

            );

        });

    });

}

/* ==========================================================
   TABLE
========================================================== */

function initialiseTable(){

    const rows=document.querySelectorAll("tbody tr");

    rows.forEach(function(row){

        row.addEventListener("click",function(){

            rows.forEach(r=>r.classList.remove("selected"));

            this.classList.add("selected");

        });

        const eye=row.querySelector(".bi-eye");

        if(eye){

            eye.style.cursor="pointer";

            eye.addEventListener("click",function(e){

                e.stopPropagation();

                window.location.href="profile.html";

            });

        }

    });

}

/* ==========================================================
   TOOLBAR
========================================================== */

function initialiseToolbar(){

    document.querySelectorAll(".toolbar .btn").forEach(function(button){

        button.addEventListener("click",function(){

            const action=this.innerText.trim();

            switch(action){

                case "Register Citizen":

                    notify(

                        "Citizen",

                        "Opening registration form..."

                    );

                    break;

                case "Import":

                    notify(

                        "Import",

                        "CSV import initiated."

                    );

                    break;

                case "Export":

                    notify(

                        "Export",

                        "Preparing Excel..."

                    );

                    break;

                case "Print":

                    window.print();

                    break;

                case "Reset":

                    document.querySelectorAll("input").forEach(function(input){

                        input.value="";

                    });

                    document.querySelectorAll("select").forEach(function(select){

                        select.selectedIndex=0;

                    });

                    notify(

                        "Reset",

                        "Filters cleared."

                    );

                    break;

                default:

                    notify(

                        "Action",

                        action

                    );

            }

        });

    });

}

/* ==========================================================
   KPI ANIMATION
========================================================== */

function initialiseKPIs(){

    const values=document.querySelectorAll(".kpi-value");

    values.forEach(function(item){

        const original=item.innerText;

        const numeric=parseInt(

            original.replace(/[^0-9]/g,"")

        );

        if(isNaN(numeric)) return;

        let value=0;

        item.innerText="0";

        const timer=setInterval(function(){

            value+=Math.ceil(numeric/40);

            if(value>=numeric){

                clearInterval(timer);

                item.innerText=original;

            }else{

                item.innerText=value.toLocaleString();

            }

        },20);

    });

}

/* ==========================================================
   NOTIFICATION
========================================================== */

function notify(title,message){

    let toast=document.createElement("div");

    toast.className="notification";

    toast.innerHTML=`

        <strong>${title}</strong>

        <br>

        ${message}

    `;

    document.body.appendChild(toast);

    requestAnimationFrame(function(){

        toast.classList.add("show");

    });

    setTimeout(function(){

        toast.classList.remove("show");

        setTimeout(function(){

            toast.remove();

        },300);

    },2800);

}

/* ==========================================================
   FUTURE SERVICES
========================================================== */

function fetchCitizenList(){

    console.log("Citizen API");

}

function fetchDistricts(){

    console.log("District API");

}

function fetchCourses(){

    console.log("Course API");

}

function fetchTrainers(){

    console.log("Trainer API");

}

function exportExcel(){

    console.log("Export Excel");

}

function importCSV(){

    console.log("Import CSV");

}

/* ==========================================================
   END
========================================================== */