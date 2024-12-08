function calculateScore() {
    alert("Score calculé !");
}
/*js pge competence*/
// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        const toggleButton = document.createElement("button");
        toggleButton.textContent = "Afficher/Masquer";
        toggleButton.style.marginTop = "10px";
        section.appendChild(toggleButton);

        toggleButton.addEventListener("click", () => {
            const content = section.querySelector("p");
            content.style.display = content.style.display === "none" ? "block" : "none";
        });
    });
});
/* pour page stage*/
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page chargée !");
  });
/* pour quizz*/
const correctAnswers = {
    q1: "b",
    q2: "b",
    q3: "b",
    q4: "a",
    q5: "b",
    q6: "c",
  };
  
  document.getElementById("submit-btn").addEventListener("click", () => {
    const form = document.getElementById("quiz-form");
    const formData = new FormData(form);
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;
    let resultHTML = "<h2>Résultats :</h2>";
  
    Object.entries(correctAnswers).forEach(([key, correct]) => {
      const userAnswer = formData.get(key);
      if (userAnswer === correct) {
        score++;
      } else {
        resultHTML += `<p>Question ${key.slice(1)} : La bonne réponse était <strong>${correct}</strong>.</p>`;
      }
    });
  
    resultHTML += `<h3>Votre score : ${score} / ${totalQuestions}</h3>`;
    document.getElementById("result").innerHTML = resultHTML;
  });
  /* contact */
  // Form validation and submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission
  
    // Get form fields
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
  
    // Simple validation
    if (!name || !email || !subject || !message) {
      alert("Veuillez remplir tous les champs !");
      return;
    }
  
    // Show success message
    document.getElementById("successMessage").style.display = "block";
  
    // Clear the form
    document.getElementById("contactForm").reset();
  });
  