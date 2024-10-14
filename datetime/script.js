function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    let ampm = 'AM';

    if (hours >= 12) {
        ampm = 'PM';
        hours = hours > 12 ? hours - 12 : hours;
    } else if (hours === 0) {
        hours = 12;
    }

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = now.toLocaleDateString(undefined, options);

    document.getElementById('hour').textContent = `${hours}:${formattedMinutes}`;
    document.getElementById('ampm').textContent = ampm;
    document.getElementById('seconds').textContent = formattedSeconds;
    document.getElementById('date').textContent = currentDate;
}

setInterval(updateTime, 1000);
updateTime();
