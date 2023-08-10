function describeTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const descriptionElement = document.getElementById("description");

    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    if (isNaN(temperature)) {
        descriptionElement.textContent = "Please enter a valid temperature.";
        return;
    }

    if (unit === "fahrenheit") {
        temperature = (temperature - 32) * 5 / 9; 
    }

    let description = "";

    if (temperature < -30) {
        description = "Extreme Cold";
    } else if (temperature < -10) {
        description = "Very Cold";
    } else if (temperature < 0) {
        description = "Cold";
    } else if (temperature < 10) {
        description = "Moderate";
    } else if (temperature < 20) {
        description = "Warm";
    } else if (temperature < 30) {
        description = "Hot";
    } else if (temperature < 35) {
        description = "Very Hot";
    } else {
        description = "Extreme Hot";
    }

    descriptionElement.textContent = `The temperature is ${description}.`;
    descriptionElement.className = description.toLowerCase().replace(" ", "-");
}
