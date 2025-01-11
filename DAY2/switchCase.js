let day = prompt("Enter the day of the week:").toLowerCase();

switch (day) {
    case "monday":
    case "tuesday":
        console.log("Football");
        break;
    case "wednesday":
    case "thursday":
        console.log("Cricket");
        break;
    case "friday":
        console.log("Volleyball");
        break;
    case "saturday":
        console.log("Basketball");
        break;
    case "sunday":
        console.log("Holiday");
        break;
    default:
        console.log("Invalid input. Please enter a valid day of the week.");
}

