# work-day-scheduler

The goal of this project is to create a fully functional day planner / scheduler web page that helps busy employees plan ahead.
This single page application is created simple and easy to use with the title, today's date and current timem, and color coded time slots.

Each time slot is labeled by hour and is color coded based on current time. For example, if it's currently 1 PM, then 9,10,11,12 hour time slots will be shaded in gray to indicate that they're in the past. Like so, current hour is red and upcoming/future hours are green.

Everytime an input is written and saved using the save button, the value and the hour data for that specific time slot will be stored in local storage. The benefit of that is to store and keep displaying previously entered notes after a page reload/ revisit unless deleted. Notes can be deleted by deleting the text and then clicking the save button.

Github repository link: https://github.com/Malsham3/work-day-scheduler
Github deployed application link: https://malsham3.github.io/work-day-scheduler/