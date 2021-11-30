/*
Uppgift 1: 
diven ska skifta ellan blå och vit varje gång funktionen körs
*/

function taskOne() {
    if (document.getElementById("answer-one").style.background == "blue") {
        document.getElementById("answer-one").style.background = "white";
    } else {
        document.getElementById("answer-one").style.background = "blue";
    }
}

/*
Uppgift 2: 
Arrayen ska fyllas på med ett nytt värde varje gång man klickar på
 knappen och sedan renderas ut.
  arrayen kommer altså bli större och större 
  för varje gång funktionen körs
*/

const numbers = [234, 986, 784];

function taskTwo() {
    function Randomizer(max) {
        return Math.floor(Math.random() * max);
    }
    numbers.push(Randomizer(999));
    document.getElementById("answer-two").innerHTML = numbers;
}

/*
Uppgift 3: 
conditionet i if-satsen blir lite fel, 
då söndag är 0 i JS och Lördag 5 (denna är dock ändå okej...)

*/

function taskThree() {
    const date = new Date();
    const day = date.getDay();
    if (day >= 5 || 0) {
        alert("woho its weekend");
    } else {
        alert("FML");
    }
}

/*
Uppgift 4: 
work
*/

function multiplier(valueOne, valueTwo) {
    if (isNaN(valueOne) || isNaN(valueTwo)) {
        alert("Jag kan bara multiplicera nummer...");
    } else {
        var awnser = valueOne * valueTwo;
        alert("Produkten är:" + awnser);
    }
}

function taskFour() {
    multiplier(13, 2);
}

/*
Uppgift 5: 
Om fruits[eat] är lika med apelsin
 eller päron ska de pushas in i trash, 
 annars i eatable. 
 Arrayerna ska sedan renderas ut i diven, inte alertas
*/

const fruits = ["banan", "äpple", "citron", "apelsin", "päron"];
let eatable = [];
let trash = [];

function taskFive() {
    let yumy = fruits.length;
    for (let eat = 0; eat < yumy; eat++) {
        if (fruits[eat] == "apelsin" || fruits[eat] == "päron") {
            trash.push(fruits[eat]);
        } else {
            eatable.push(fruits[eat]);
        }
    }
    document.getElementById("answer-five").innerHTML =
        "ätligt: " + eatable + "\n" + "skräp: " + trash;
}

/*
Uppgift 6: 
Personernas namn ska renderas ut efter rubrikerna 
Married:,
 Not Married:,
  Over Thirty:, 
  Under Thirty:, se exempel nedan

	Married: Christian, Diana

	Not Married: Carl, Karin

	Over Thirty: Christian

	Under Thirty: Carl, Diana, Karin
*/

let persons = [
    { name: "Christian", age: 31, married: true },
    { name: "Diana", age: 29, married: true },
    { name: "Carl", age: 28, married: false },
    { name: "Karin", age: 29, married: false },
];

let married = [];
let notMarried = [];
let overThirty = [];
let underThirty = [];

function taskSix() {
    for (let index = 0; index < 3; index++) {
        if (persons[index].age >= 30) {
            overThirty.push(persons[index].name);
        } else if (persons[index].age < 30) {
            underThirty.push(persons[index].name);
        }

        if (persons[index].married == true) {
            married.push(persons[index].name);
        } else if (persons[index].married == false) {
            notMarried.push(persons[index].name);
        }
    }

    document.getElementById("answer-six").innerHTML =
        "Married:" +
        married +
        "\n" +
        "Not Married:" +
        notMarried +
        "\n" +
        "Over Thirty:" +
        overThirty +
        "\n" +
        "Under Thirty:" +
        underThirty;
}

/*
Uppgift 7: 
works
*/

const addMeSomeLineBreaks =
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

function taskSeven() {
    withlinebreak = addMeSomeLineBreaks.split(",").join("<br />");

    document.getElementById("answer-seven").innerHTML = withlinebreak;

    console.log(withlinebreak);
}

/*
Uppgift 8: 
works!
*/

function taskEight() {
    document.getElementById("card-eight").style.display = "none";

    setTimeout(() => {
        document.getElementById("card-eight").style.display = "block";
    }, 3000);
}

/*
Uppgift 9: 
Working!
*/

function taskNine() {
    const date = new Date();
    const currentHoure = date.getHours();

    if (currentHoure >= 17) {
        for (let count = 0; count < 10; count++) {
            document.getElementsByClassName("answer-container")[
                count
            ].style.background = "blue";
        }
    } else {
        for (let count = 0; count < 10; count++) {
            document.getElementsByClassName("answer-container")[
                count
            ].style.background = "red";
        }
    }
}

/*
Uppgift 10: 
works!
*/

let valueOne = 12;
let valueTwo = 3;
let operator = "add";
let result = 0;

function calculator(x, y, op) {
    if (op == "add") {
        result = x + y;
    } else if (op == "subtract") {
        result = x - y;
    } else if (op == "multiply") {
        result = x * y;
    } else if (op == "divide") {
        result = x / y;
    } else {
        alert("Något är fel! -Med operatören!");
    }
    alert("Svaret är: " + result);
}

function taskTen() {
    if (typeof valueOne === "number" && typeof valueTwo === "number") {
        calculator(valueOne, valueTwo, operator);
    } else {
        alert("Något är fel! -Med siffrorna!");
    }
}
