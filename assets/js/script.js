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
    var hours24 = new Date().getHours();
    if (hours24 > 12) {
        var hours12 = hours24 - 12;
    }
    console.log(hours12);

    // var timeBlocks = [9, 10, 11, 12, 1, 2, 3, 4, 5];

    var timeBlocks = [
        {
            hour: "9"
        },
        {
            hour: "10"
        },
        {
            hour: "11"
        },
        {
            hour: "12"
        },
        {
            hour: "1"
        },
        {
            hour: "2"
        },
        {
            hour: "3"
        },
        {
            hour: "4"
        },
        {
            hour: "5"
        }
    ];

    var timeStamp;

    timeBlocks.forEach(function(hourBlock) {
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
        if (hourBlock.hour >= 9 && hourBlock.hour <= 11) {
            timeStamp = "AM"
        } else if (hourBlock.hour >= 1 && hourBlock.hour <= 5 || hourBlock.hour == 12) {
            timeStamp = "PM"
        };
        var hourText = $(`<p>${hourBlock.hour} ${timeStamp}</p>`);
        hourCol.append(hourText);
        row.append(hourCol);

        var customBorder = $("<div>").attr({
            "class": "col-lg-6 custom-border"
        });
        // var textArea = $("<textarea>").attr({
        //     "class": "description",
        //     "id": hourBlock
        // });
        var textArea = $("<textarea>").attr("id", "9");
        textArea.addClass("description");
        customBorder.append(textArea);
        row.append(customBorder);

        var colSave = $("<div>").attr({
            "class": "col-lg-2 col-save"
        });
        // var saveBtn = $("<button>SAVE</button>").attr({
        //     "class": "btn-save",
        //     "data-time": #hourBlock
        // });
        var saveBtn = $("<button>SAVE</button>").attr("data-time", "#9")
        saveBtn.addClass("btn-save");
        colSave.append(saveBtn);
        row.append(colSave);

        // var centerCol2 = $("<div>").attr({
        //     "class": "col-lg-1"
        // });
        // row.append(centerCol2);

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
