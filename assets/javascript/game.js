var userChoice = "";
var enemyChoice = "";
var endgame = 0;
var start = true;

var onehp = 130;
var twohp = 140;
var threehp = 120;
var fourhp = 90;
var fivehp = 130;
var sixhp = 120;
$("#onehp").text(onehp);
$("#twohp").text(twohp);
$("#threehp").text(threehp);
$("#fourhp").text(sixhp);
$("#fivehp").text(fivehp);
$("#sixhp").text(fourhp);

// user attack points
var charm = 10;
var squi = 12;
var bulb = 8;

// enemy attack points
var chic = 6;
var croc = 10;
var lava = 8;

$(".good").on("click", function () {
    userChoice = $(this).data("number");
    
    if (userChoice == "1" && start == true) {
        $(".option").css("width", "50%");
        $("#lefthead").css("display", "none");
        $("#computerside").css("width", "100%");
        $("#two").css("display", "none");
        $("#three").css("display", "none");
        $("#one").css("float", "right");
        $("#userfighter").append($("#one"));
        start = false;
    } else if (userChoice == "2" && start == true) {
        $(".option").css("width", "50%");
        $("#lefthead").css("display", "none");
        $("#computerside").css("width", "100%");
        $("#one").css("display", "none");
        $("#three").css("display", "none");
        $("#two").css("float", "right");
        $("#userfighter").append($("#two"));
        start = false;
    } else if (userChoice == "3" && start == true) {
        $(".option").css("width", "50%");
        $("#lefthead").css("display", "none");
        $("#computerside").css("width", "100%");
        $("#one").css("display", "none");
        $("#two").css("display", "none");
        $("#three").css("float", "right");
        $("#userfighter").append($("#three"));
        start = false;
    } else {
        null;
    }
})

    $(".bad").on("click", function () {
        if (start == false) {
            enemyChoice = $(this).data("number");
        
        if (enemyChoice == "b1") {
            showButton()
            if (endgame == 0) {
                $(".option2").css("width", "50%");
            } else if (endgame == 1) {
                $(".option2").css("margin-right", "25%");
            }
            $("#six").css("float", "left");
            $("#badfighter").append($("#six"));
            start = true;
        } else if (enemyChoice == "b2") {
            showButton()
            if (endgame == 0) {
                $(".option2").css("width", "50%");
            } else if (endgame == 1) {
                $(".option2").css("margin-right", "25%");
            }
            $("#five").css("float", "left");
            $("#badfighter").append($("#five"));
            start = true;
        } else if (enemyChoice == "b3") {
            showButton()
            if (endgame == 0) {
                $(".option2").css("width", "50%");
            } else if (endgame == 1) {
                $(".option2").css("margin-right", "25%");
            }
            $("#four").css("float", "left");
            $("#badfighter").append($("#four"));
            start = true;
        } else {
            null;
        }
    }
})

function showButton() {
    var butn = $("<button>");
    butn.text("Fight");
    butn.attr("id", "for-button");
    butn.attr("onclick", "next()");
    $("#fight-button").append(butn);
}

function next() {
    if (userChoice == "1") {
        firstChoice();
    } else if (userChoice == "2") {
        secondChoice();
    } else if (userChoice == "3") {
        thirdCHoice();
    } else {
        null;
    }
}

function firstChoice() {
    if (enemyChoice == "b1") {
        if (onehp <= 0) {
            youlost();
        } else if (fourhp <= 0) {
            $("#for-button").remove();
            nextone();
        } else {
            onehp = onehp - chic;
            fourhp = fourhp - charm;
            charm += 5;
            $("#onehp").text(onehp);
            $("#sixhp").text(fourhp);
        }
    } else if (enemyChoice == "b2") {
        if (onehp <= 0) {
            youlost();
        } else if (fivehp <= 0) {
            $("#for-button").remove();
            nextone();
        } else {
            onehp = onehp - croc;
            fivehp = fivehp - charm;
            charm += 5;
            $("#onehp").text(onehp);
            $("#fivehp").text(fivehp);
        }
    } else if (enemyChoice == "b3") {
        if (onehp <= 0) {
            youlost();
        } else if (sixhp <= 0) {
            $("#for-button").remove();
            nextone();
        } else {
            onehp = onehp - lava;
            sixhp = sixhp - charm;
            charm += 5;
            $("#onehp").text(onehp);
            $("#fourhp").text(sixhp);
        }
    }
}

function secondChoice() {
    if (enemyChoice == "b1") {
        if (twohp <= 0) {
            youlost();
        } else if (fourhp <= 0) {
            $("#for-button").remove();
            nextone();
        } else {
            twohp = twohp - chic;
            fourhp = fourhp - squi;
            squi += 3;
            $("#twohp").text(twohp);
            $("#sixhp").text(fourhp);
        }
    } else if (enemyChoice == "b2") {
        if (twohp <= 0) {
            youlost();
        } else if (fivehp <= 0) {
            $("#for-button").remove();
            nextone();
        } else {
            twohp = twohp - croc;
            fivehp = fivehp - squi;
            squi += 3;
            $("#twohp").text(twohp);
            $("#fivehp").text(fivehp);
        }
    } else if (enemyChoice == "b3") {
        if (twohp <= 0) {
            youlost();
        } else if (sixhp <= 0) {
            $("#for-button").remove();
            nextone();
        } else {
            twohp = twohp - lava;
            sixhp = sixhp - squi;
            squi += 3;
            $("#twohp").text(twohp);
            $("#fourhp").text(sixhp);
        }
    }
}

function thirdCHoice() {
    if (enemyChoice == "b1") {
        if (threehp <= 0) {
            youlost();
        } else if (fourhp <= 0) {
            $("#for-button").remove();
            nextone();
        } else {
            threehp = threehp - chic;
            fourhp = fourhp - bulb;
            bulb += 2;
            $("#threehp").text(threehp);
            $("#sixhp").text(fourhp);
        }
    } else if (enemyChoice == "b2") {
        if (threehp <= 0) {
            youlost();
        } else if (fivehp <= 0) {
            $("#for-button").remove();
            nextone();
        } else {
            threehp = threehp - croc;
            fivehp = fivehp - bulb;
            bulb += 2;
            $("#threehp").text(threehp);
            $("#fivehp").text(fivehp);
        }
    } else if (enemyChoice == "b3") {
        if (threehp <= 0) {
            youlost();
        } else if (sixhp <= 0) {
            $("#for-button").remove();
            nextone();
        } else {
            threehp = threehp - lava;
            sixhp = sixhp - bulb;
            bulb += 2;
            $("#threehp").text(threehp);
            $("#fourhp").text(sixhp);
        }
    }
}

function youlost() {
    alert("You Lost!")
    $(".option2").css("display", "none");
    $("#righthead").css("display", "none");
    $("#fight-button").remove();
    $("#userfighter").css("width", "70%");
    $(".info").css("color", "red")
    $(".info").text("You Lost!");
    $("#result").css("display", "block");
}

function nextone() {
    if (enemyChoice == "b1") {
        $("#six").remove();
        endgame++;
        start = false;
    } else if (enemyChoice == "b2") {
        $("#five").remove();
        endgame++;
        start = false;
    } else if (enemyChoice == "b3") {
        $("#four").remove();
        endgame++;
        start = false;
    } 

        if (endgame == 1) {
            alert("Select Another Fighter");
        } else if (endgame == 2){
            alert("Select Another Fighter");
        } else if (endgame == 3) {
            youWon();
        }

}

function youWon() {
    alert("You Won!!");
    // $("#userfighter").css("width", "70%");
    $("#fight-button").remove();
    $("#righthead").css("display", "none");
    $(".info").css("color", "yellow")
    $(".info").text("You Won!!");
    $("#result").css("display", "block");
}
