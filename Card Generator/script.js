function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewStr;

    if (views < 1000) {
        viewStr = views; // Just show the number itself
    } else if (views >= 1000000) {
        viewStr = (views / 1000000).toFixed(1) + "M"; // Format to 1 decimal place
    } else {
        viewStr = (views / 1000).toFixed(1) + "K";
    }

    let html = `<div class="card">
        <div class="image">
            <img src="${thumbnail}" alt="">
            <div class="capsule">${duration}</div>
        </div>
        <div class="text">
            <h1>${title}</h1>
            <p>${cName} • ${viewStr} views • ${monthsOld} months ago</p>
        </div>
    </div>`;
    document.querySelector(".container").innerHTML =  document.querySelector(".container").innerHTML + html
}

// Example call:
createCard("Introduction Backend | Web Development Course", "SushiCodes", 66600000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ");
