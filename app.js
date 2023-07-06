const roname = document.getElementById("roname");

roname.addEventListener("input", () => {
  roname.value = roname.value.toUpperCase();
});

const Plan = document.getElementById("plan");

Plan.addEventListener("input", () => {
  Plan.value = Plan.value.toUpperCase();
});

document.querySelectorAll('input[type = "number"]').forEach(input => {
  input.oninput = () => {
    if (input.value.length > input.maxLength)
      input.value = input.value.slice(0, input.maxLength);
  };
});
