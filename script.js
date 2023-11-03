function calculateLearningStyle() {
    const answers = document.querySelectorAll('input[type="radio"]:checked');

    if (answers.length < 10) {
        alert('Por favor, responde todas las preguntas.');
        return;
    }

    const kinestheticCount = [...answers].filter(answer => answer.value === "kinestesico").length;
    const auditoryCount = [...answers].filter(answer => answer.value === "auditivo").length;
    const visualCount = [...answers].filter(answer => answer.value === "visual").length;

    let result = '';

    if (kinestheticCount > auditoryCount && kinestheticCount > visualCount) {
        result = "Tu tipo de aprendizaje es Kinestésico.";
        setTimeout(() => {
            window.location.href = 'pagina_kinestesico.html';
        }, 3000);
    } else if (auditoryCount > kinestheticCount && auditoryCount > visualCount) {
        result = "Tu tipo de aprendizaje es Auditivo.";
        setTimeout(() => {
            window.location.href = 'pagina_auditivo.html';
        }, 3000);
    } else {
        result = "Tu tipo de aprendizaje es Visual.";
        setTimeout(() => {
            window.location.href = 'pagina_visual.html';
        }, 3000);
    }

    document.getElementById("result").textContent = result;
}