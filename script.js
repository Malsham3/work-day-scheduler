// Using luxon, current date and hour are retrieved and stored in the following variables.
const today = luxon.DateTime.local().toFormat("ff");
const hour = parseInt(luxon.DateTime.local().toLocaleString(luxon.DateTime.TIME_24_SIMPLE));

//updating the current-day div to display accurate date
$("#currentDay").text(today);

function buildTimeSlot(hour) {
    //Generate containing div
    const $timeSlot = $("<div>")
        .attr("id", hour)
        .attr("class", "row time-block")

    // Generate the time label, that sits to the left of the textaea
    const $timeLabel = $("<div>").attr("class", "col-md-1 hour")

    //if the hour is greater than or equal to 12, convert to PM
    if (hour > 12) {
        $timeLabel.text(hour - 12 + " PM");
    } else if (hour === 12) {
        $timeLabel.text(hour + " PM");
    } else {
        $timeLabel.text(hour + " AM");
    }

    // Generate the text area that'll display input hourly note
    const $textArea = $("<textarea>")
        .attr("class", "col-md-10 description")

    // Generate the save button, that sits to the right of the textarea
    const $btn = $("<button>").attr("class", "btn saveBtn col-md-1").append($("<i>").attr("class", "fas fa-save"));

    // Adding label, text area, save button to each slot
    $timeSlot.append($timeLabel, $textArea, $btn);

    //function returns a fully assembled time slot.
    return $timeSlot;
}


for (let i = 9; i < 18; i++) {
    // generate time slots for 9AM-5PM 
    $(".container").append(buildTimeSlot(i));

    // previously entered and note deleted notes are added back after page load.
    var savedNote = localStorage.getItem(i)
    var rowID = $(`#${i}`);
    rowID.children(".description").text(savedNote);

    // color code time slots depending on current time data and time slot hour
    if (i == hour) {
        rowID.addClass("present")
    } else if (i < hour) {
        rowID.addClass("past")
    } else {
        rowID.addClass("future")
    }
}

//save button (click) event listener
$(".saveBtn").on("click", function (e) {
    e.preventDefault();

    // get user input and the time slot hour it was filled in
    // save date into textarea's accordingly
    var taskData = $(this).siblings(".description").val();
    var taskHour = $(this).parent(".row").attr("id");

    //save hour and input data in the localStorage
    localStorage.setItem(taskHour, taskData);
})