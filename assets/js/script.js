// homework-5 extra js code

// clicking the save button saves the user's text to local storage.

// once the user inputs text in the time-block and clicks the save button,
$(".btn-save").on("click", function(){
// their text is saved to local storage
    // console.log($(this.dataset.time).val());            //data-time is holding the id of textarea
// put the data-time and the user's text in the same object (keys: id of textarea- ID; text )

    var newEntry = {
        id: this.dataset.time,
        text: $(this.dataset.time).val()
    }
    // {
        // id: "#text-9am",
        //  text: "fgng"
    // }

// (getItem) check if anything in local storage, if so, parse (now it can't be updated until it's saved); if not create empty array/parse
    var saveArray = JSON.parse(localStorage.getItem("savedEntries") || "[]");
// put object in the array
    saveArray.push(newEntry);
    //  [
    //      {
    //          id: "#text-9am",
    //          text: "fgng"
    //      }
    //  ]
    

// (setItem) (key, JSON.stringify(value))
    localStorage.setItem("savedEntries", JSON.stringify(saveArray));
    
});
// and when page is refreshed, that saved text is displayed in that time-block.



// get the data out of local storage: getItem/parse; if nothing in local storage, then create an empty array/parse.
var storedData = JSON.parse(localStorage.getItem("savedEntries") || "[]");
        // if(storedData !== null) {
        //     savedEntries = storedData;
        // }

// iterate over the array (with for loop/ forEach loop) - pull the keys (ID; text).
storedData.forEach(function(data) {
    // in the for loop: use the ID in the object to select the correct textarea. 
    $(data.id).val(data.text)
})
//for loop alternative:
// for (var i = 0; i < storedData.length; i++) {
//     $(storedData[i].id).val(storedData[i].text);
// }


// each time-block row will be color-coded based on the current time of day (past, present, future)
// (convert using math from 24hr to 12hr)


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

$("#currentDay").text(dayArray[day.getDay()] + ", " + monthArray[month.getMonth()] + " " + date.getDate());
