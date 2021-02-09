function check() {


    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;
    var correct=0;

    if(question1 == "Nagpur") {
        correct++;
    }
    if(question2 == "Konark") {
        correct++;
    }
    if(question3 == "New Delhi") {
        correct++;
    }
    if(question4 == "Jaipur") {
        correct++;
    }
    if(question5 == "Lucknow") {
        correct++;
    }
    if(question6 == "Bhubaneshwar") {
        correct++;
    }
    if(question7 == "Mumbai") {
        correct++;
    }
    if(question8 == "Udaipur") {
        correct++;
    }
    if(question9 == "Pune") {
        correct++;
    }
    if(question10 == "Delhi") {
        correct++;
    }

    var messages = ["Good job", "Not bad", "You really need to do better"];
    var range;

    if(correct < 3) {
        range = 2;
    }
    if(correct > 2 && correct < 8) {
        range = 1;
    }
    if(correct > 7) {
        range = 0;
    }

    document.getElementById("after_submit").style.visibility="visible";
    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}

// refresh page function.

function myFunction() {
    location.reload();
}