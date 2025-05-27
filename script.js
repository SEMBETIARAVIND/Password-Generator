const passwordField = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");

function generatePassword(length = 12) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

generateBtn.addEventListener("click", () => {
  const password = generatePassword();
  passwordField.value = password;
});

copyBtn.addEventListener("click", () => {
  if (passwordField.value !== "") {
    navigator.clipboard.writeText(passwordField.value);
    copyBtn.textContent = "✔";
    setTimeout(() => {
      copyBtn.textContent = "⧉";
    }, 1500);
  }
});
