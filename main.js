const coffeeMachine = new CoffeeMachine(5000, 200);
const waterInput = document.getElementById("waterInput");
const status = document.getElementById("status");

function updateStatus(text) {
  status.textContent = "Статус: " + text;
}


document.getElementById("enable").onclick = () => {
  coffeeMachine.enable();
  updateStatus("Кавоварка увімкнена ☀️");
};

document.getElementById("disable").onclick = () => {
  coffeeMachine.disable();
  updateStatus("Кавоварка вимкнена ❌");
};

document.getElementById("stop").onclick = () => coffeeMachine.stop(updateStatus);

document.getElementById("run").onclick = () => {
  const amount = Number(waterInput.value);
  if (coffeeMachine.setWaterAmount(amount)) {
    coffeeMachine.run(updateStatus);
  } 

};

