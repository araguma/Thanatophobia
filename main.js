window.onload = () => {
    const birthday = new Date("<replace with your birthday (mm/dd/yyyy)>").getTime();
    const timeUnit = 31536000000; // a year in milliseconds
    const decimalPlaces = 8;

    const counter = document.getElementById("counter");
    const interval = 1 / Math.pow(10, decimalPlaces) * timeUnit;

    if(isNaN(birthday)) return counter.innerHTML = "Error: Invalid birthday in main.js".fontcolor("#E74C3C");

    const update = () => {
        const age = ((Date.now() - birthday) / timeUnit).toFixed(decimalPlaces);
        counter.innerHTML = age;
    };

    update();
    setInterval(update, interval);
}
