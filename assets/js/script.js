


// $(document).ready(function() {


$(".btn-save").on("click", function(){
    var newEntry = {
        id: $(this.dataset.time),
        text: $(this.dataset.time).val()
    };
    localStorage.setItem("savedEntries" + newEntry[0], (newEntry[1]));

    for(var i = 0; i < 18; i++) {
        var populate= (localStorage.getItem("savedEntries") + i || "[]");
        if(populate) {
        // $(".description" + i).val(populate);
        
        };
    };

});

// $(".btn-save").on("click", function(){
//     var hour = $(this.dataset.time);
//     var savedText = $(this.dataset.time).val();
//     localStorage.setItem("savedEntries" + hour, (savedText));

//     console.log(hour);
//     console.log(savedText);
// });

// });

// $(".btn-save").on("click", function () {
//     var newEntry = {
//         id: $(this.dataset.time),
//         text: $(this.dataset.time).val()
// }
//     var saveArray = JSON.parse(localStorage.getItem("savedEntries") || "[]");
//     (setItem) (key, JSON.stringify(value))
//     localStorage.setItem("savedEntries", JSON.stringify(saveArray));
// });

// $(".btn-save").on("click", function () {
//     var hour = $(this).val();
//     // console.log($(this.dataset.time).val())
//     var savedText = $(".description" + hour).val();
//     localStorage.setItem("savedEntries" + hour, (savedText));
// });


$(document).ready(function() {
    var hours24 = new Date().getHours();
    
    if(hours24 == 9) {
        $("#9").toggleClass("present");
    } else if(hours24 < 9) {
        $("#9").toggleClass("future")
    } else if(hours24 > 9) {
        $("#9").toggleClass("past")
    }

    if(hours24 == 10) {
        $("#10").toggleClass("present");
    } else if(hours24 < 10) {
        $("#10").toggleClass("future")
    } else if(hours24 > 10) {
        $("#10").toggleClass("past")
    }

    if(hours24 == 11) {
        $("#11").toggleClass("present");
    } else if(hours24 < 11) {
        $("#11").toggleClass("future")
    } else if(hours24 > 11) {
        $("#11").toggleClass("past")
    }

    if(hours24 == 12) {
        $("#12").toggleClass("present");
    } else if(hours24 < 12) {
        $("#12").toggleClass("future")
    } else if(hours24 > 12) {
        $("#12").toggleClass("past")
    }

    if(hours24 == 13) {
        $("#1").toggleClass("present");
    } else if(hours24 < 13) {
        $("#1").toggleClass("future")
    } else if(hours24 > 13) {
        $("#1").toggleClass("past")
    }

    if(hours24 == 14) {
        $("#2").toggleClass("present");
    } else if(hours24 < 14) {
        $("#2").toggleClass("future")
    } else if(hours24 > 14) {
        $("#2").toggleClass("past")
    }

    if(hours24 == 15) {
        $("#3").toggleClass("present");
    } else if(hours24 < 15) {
        $("#3").toggleClass("future")
    } else if(hours24 > 15) {
        $("#3").toggleClass("past")
    }

    if(hours24 == 16) {
        $("#4").toggleClass("present");
    } else if(hours24 < 16) {
        $("#4").toggleClass("future")
    } else if(hours24 > 16) {
        $("#4").toggleClass("past")
    }

    if(hours24 == 17) {
        $("#5").toggleClass("present");
    } else if(hours24 < 17) {
        $("#5").toggleClass("future")
    } else if(hours24 > 17) {
        $("#5").toggleClass("past")
    }
    
})

var dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

var monthArray = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var day = new Date(); // day.getDay();
var month = new Date(); //month.getMonth();
var date = new Date(); // date.getDate();

$("#currentDay").text(dayArray[day.getDay()] + ", " + monthArray[month.getMonth()] + " " + date.getDate() + "th");

// console.log(day)
// console.log(day.getDay())

