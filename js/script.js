const input = document.getElementById("user-input");
const result = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const checker = () => {
  if (input.value === "") {
    alert("Please provide a phone number")
    result.style.display = "none"; //Make result empty if there's no value
  }
  else {
    result.style.display = "flex"; // Show result
  }
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/; //Regex for US phone numbers

  if (regex.test(input.value)) {
    const p = document.createElement("p");
p.textContent = `Valid US number: ${input.value}`; // 
result.appendChild(p);
  }
  else {
    const p = document.createElement("p");
p.textContent = `Invalid US number: ${input.value}`; 
result.appendChild(p);
  }
}


checkBtn.addEventListener("click", checker);
clearBtn.addEventListener("click", () => {
  result.innerHTML = "";
  result.style.display ="none";
  input.value = "";
})
