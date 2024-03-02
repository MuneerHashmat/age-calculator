let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let calculateAge = document.querySelector("button");

let years = document.getElementById("years");
let months = document.getElementById("months");
let days = document.getElementById("days");

calculateAge.addEventListener("click", () => {
    if (userInput.value == "") {
        alert("Enter the date!")
    }
    else {

        let birthDate = new Date(userInput.value);

        let d1 = birthDate.getDate();
        let m1 = birthDate.getMonth() + 1;
        let y1 = birthDate.getFullYear();

        let presentDate = new Date();

        let d2 = presentDate.getDate();
        let m2 = presentDate.getMonth() + 1;
        let y2 = presentDate.getFullYear();

        let d3, m3, y3;

        y3 = y2 - y1;

        if (m2 >= m1) {
            m3 = m2 - m1;
        }
        else {
            y3--;
            m3 = 12 + m2 - m1;
        }

        if (d2 >= d1) {
            d3 = d2 - d1;
        }
        else {
            m3--;
            d3 = getDaysInMonth(y1, m1) + d2 - d1;
        }

        if (m3 < 0) {
            m3 = 11;
            y3--;
        }

        console.log(y3 + " " + m3 + " " + d3);
        years.innerText = y3;
        months.innerText = m3;
        days.innerText = d3;
    }
});

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

