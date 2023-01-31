import { fromUnixTime } from "date-fns";

function capitalizeWords(words) {
    return words
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function formatDate(unix, offset) {
    let date = fromUnixTime(unix + offset).toUTCString();
    let dayOfWeek = date.slice(0, 3);
    let dayOfMonth = date.slice(5, 7);
    let month = date.slice(8, 11);
    let year = date.slice(12, 16);

    console.log(date)

    return `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;
}

function formatTime(unix, offset) {
    let date = fromUnixTime(unix + offset).toUTCString();
    let time = date.slice(17, 22);

    return `${time}`;
}


export { capitalizeWords, formatDate, formatTime }

