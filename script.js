document.getElementById('calculateBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const graded = parseFloat(document.getElementById('graded').value) || 0;
    const quiz1 = parseFloat(document.getElementById('quiz1').value) || 0;
    const quiz2 = parseFloat(document.getElementById('quiz2').value) || 0;
    const endterm = parseFloat(document.getElementById('endterm').value) || 0;

    // Calculate CGPA
    const cgpa = 0.1 * graded + 0.2 * quiz1 + 0.3 * quiz2 + 0.4 * endterm;

    // Display result
    let resultElement = document.querySelector('.result');
    resultElement.textContent = `CGPA: ${cgpa.toFixed(2)}`;
    resultElement.classList.add('resultTwo'); // Set text color to black (or your style)
});