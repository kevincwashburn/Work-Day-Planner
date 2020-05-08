$(".btn-save").on("click", function(){
    var newEntry = {
        id: this.dataset.time,
        text: $(this.dataset.time).val()
    }

    var saveArray = JSON.parse(localStorage.getItem("savedEntries") || "[]");
    saveArray.push(newEntry);
    localStorage.setItem("savedEntries", JSON.stringify(saveArray));
});

var storedData = JSON.parse(localStorage.getItem("savedEntries") || "[]");
storedData.forEach(function(data) {
    $(data.id).val(data.text)
});

$(document).ready(function() {
    // var hours24 = new Date().getHours();
    // console.log(hours24);

    var hours24 = new Date().getHours();
    if (hours24 > 12) {
        var hours12 = hours24 - 12;
    }
    console.log(hours12);

    var timeBlocks = [9, 10, 11, 12, 1, 2, 3, 4, 5];

    var timeStamp;

    timeBlocks.forEach(function(createBlock) {
        var row = $("<div>").attr({
            "class": "row"
        });
        $(".container").append(row);

        var centerCol = $("<div>").attr({
            "class": "col-lg-1"
        });
        row.append(centerCol);

        var hourCol = $("<div>").attr({
            "class": "col-lg-2 hour"
        });
        if (createBlock >= 9 && createBlock <= 11) {
            timeStamp = "AM"
        } else if (createBlock >= 1 && createBlock <= 5 || createBlock === 12) {
            timeStamp = "PM"
        };
        var hourText = $(`<p>${createBlock} ${timeStamp}</p>`);
        hourCol.append(hourText);
        row.append(hourCol);

        var customBorder = $("<div>").attr({
            "class": "col-lg-6 customBorder"
        })
        
    })
    

    // if(hours24 == 9) {
    //     $("#9").toggleClass("present");
    // } else if(hours24 < 9) {
    //     $("#9").toggleClass("future")
    // } else if(hours24 > 9) {
    //     $("#9").toggleClass("past")
    // }

    // if(hours24 == 10) {
    //     $("#10").toggleClass("present");
    // } else if(hours24 < 10) {
    //     $("#10").toggleClass("future")
    // } else if(hours24 > 10) {
    //     $("#10").toggleClass("past")
    // }

    // if(hours24 == 11) {
    //     $("#11").toggleClass("present");
    // } else if(hours24 < 11) {
    //     $("#11").toggleClass("future")
    // } else if(hours24 > 11) {
    //     $("#11").toggleClass("past")
    // }

    // if(hours24 == 12) {
    //     $("#12").toggleClass("present");
    // } else if(hours24 < 12) {
    //     $("#12").toggleClass("future")
    // } else if(hours24 > 12) {
    //     $("#12").toggleClass("past")
    // }

    // if(hours24 == 13) {
    //     $("#1").toggleClass("present");
    // } else if(hours24 < 13) {
    //     $("#1").toggleClass("future")
    // } else if(hours24 > 13) {
    //     $("#1").toggleClass("past")
    // }

    // if(hours24 == 14) {
    //     $("#2").toggleClass("present");
    // } else if(hours24 < 14) {
    //     $("#2").toggleClass("future")
    // } else if(hours24 > 14) {
    //     $("#2").toggleClass("past")
    // }

    // if(hours24 == 15) {
    //     $("#3").toggleClass("present");
    // } else if(hours24 < 15) {
    //     $("#3").toggleClass("future")
    // } else if(hours24 > 15) {
    //     $("#3").toggleClass("past")
    // }

    // if(hours24 == 16) {
    //     $("#4").toggleClass("present");
    // } else if(hours24 < 16) {
    //     $("#4").toggleClass("future")
    // } else if(hours24 > 16) {
    //     $("#4").toggleClass("past")
    // }

    // if(hours24 == 17) {
    //     $("#5").toggleClass("present");
    // } else if(hours24 < 17) {
    //     $("#5").toggleClass("future")
    // } else if(hours24 > 17) {
    //     $("#5").toggleClass("past")
    // }
    
})

var dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

var day = new Date(); // day.getDay();
var month = new Date(); //month.getMonth();
var date = new Date(); // date.getDate();

$("#currentDay").text(dayArray[day.getDay()] + ", " + monthArray[month.getMonth()] + " " + date.getDate());
