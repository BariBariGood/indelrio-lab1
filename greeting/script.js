const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

function getGreeting() {
    const currentHour = new Date().getHours();
    
    if (currentHour < 12) {
        return "Good morning";
    } else if (currentHour < 18) {
        return "Good afternoon";
    } else {
        return "Good evening";
    }
}

window.onload = () => {
  const greetingElement = document.querySelector(".greeting");
  const nameElement = document.querySelector(".name");

  greetingElement.innerText = getGreeting();

  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    nameElement.innerText = nameElement.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return nameElement.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= nameElement.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};
