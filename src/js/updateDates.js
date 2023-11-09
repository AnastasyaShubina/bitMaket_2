function formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    day = (day < 10) ? '0' + day : day;
    month = (month < 10) ? '0' + month : month;
    return day + '/' + month;
}


export const updateDates = () => {
    var currentDate = new Date();
    var nextDate = new Date(currentDate);

    for (var i = 1; i <= 6; i++) {
        var endDate = new Date(nextDate.getTime() + 6 * 24 * 60 * 60 * 1000);

        var currentText = document.getElementById("text" + i);
        currentText.textContent = formatDate(nextDate) + ' - ' + formatDate(endDate);

        nextDate.setDate(nextDate.getDate() + 7);
    }
}