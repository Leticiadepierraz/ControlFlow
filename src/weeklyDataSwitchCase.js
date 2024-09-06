/* name : Leticia Dépierraz
   date : 06.09.2024
   project : create a function to select the days of the week using a switch case
 */

function week(week) {
    let day;
    switch (week) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "Invalid day";
    }
    return day;
}

console.log(week(3));
