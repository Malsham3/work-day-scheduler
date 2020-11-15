// Using luxon, current date and hour are retrieved and stored in the following variables.
const today = luxon.DateTime.local().toFormat("ff");
const hour = parseInt(luxon.DateTime.local().toLocaleString(luxon.DateTime.TIME_24_SIMPLE));

//updating the current-day div to display accurate date
$("currentDay").text(today);

