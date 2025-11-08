class Machine {
  constructor() {
    this.enabled = false;
  }

  enable() {
    this.enabled = true;
  }

  disable() {
    this.enabled = false;
  }
}

class CoffeeMachine extends Machine {
  constructor(power, capacity) {
    super();
    this.power = power;
    this.capacity = capacity;
    this.waterAmount = 0;
    this._timer = null;
  }

 setWaterAmount(amount) {
  if (amount < 0) {
    alert("Кількість води не може бути від’ємною!");
    return false;
  }
  if (amount > this.capacity) {
    alert("Занадто багато води! Перевищено ємність кавоварки.");
    return false;
  }
  this.waterAmount = amount;
  return true;
}

  getWaterAmount() {
    return this.waterAmount;
  }

  getBoilTime() {
    return this.waterAmount * 4200 * 80 / this.power;
  }

  onReady() {
    alert("☕ Кава готова!");
  }

  run(updateStatus) {
    if (!this.enabled) {
      alert("Кавоварка вимкнена! Спочатку увімкни її.");
      return;
    }
    if (this.waterAmount <= 0) {
      alert("Додай води перед запуском!");
      return;
    }
    updateStatus("Готується кава...");
    this._timer = setTimeout(() => {
      this.onReady();
      updateStatus("Кава готова! ✅");
    }, this.getBoilTime());
  }

  stop(updateStatus) {
    clearTimeout(this._timer);
    updateStatus("Кип’ятіння зупинено 🛑");
  }

  get getPower() {
    return this.power;
  }
}

