// Registra uma vez os eventos delegados no contêiner permanente da SPA.
export function inicializarFormulario() {
    const app = document.querySelector("#app");

    // Delegação: #app permanece na página, mesmo quando seu conteúdo é trocado.
    // Os eventos dos campos e do formulário chegam até esse contêiner.
    app.addEventListener("submit", function (event) {
        const formulario = event.target;
        if (formulario.id !== "formulario-voluntario") {
            return;
        }

        event.preventDefault(); // Impede o envio e a abertura de outro arquivo HTML.

        // O navegador já valida antes do submit; esta é uma conferência adicional.
        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }

        const feedback = formulario.querySelector("#feedback-formulario");
        feedback.hidden = false;
        feedback.className = "toast-sucesso";
        feedback.textContent = "Formulário validado com sucesso! Esta é uma demonstração; nenhuma inscrição foi salva ou enviada.";
        feedback.scrollIntoView({ block: "nearest" });
    });

    app.addEventListener("input", function (event) {
        const campo = event.target;
        if (!campo.matches("input, select, textarea") || !campo.form ||
            campo.form.id !== "formulario-voluntario") {
            return;
        }

        const feedback = campo.form.querySelector("#feedback-formulario");
        feedback.hidden = false;
        feedback.className = ""; // Remove o sucesso anterior se os dados mudarem.
        if (campo.validity.valid) {
            feedback.textContent = "Campo atualizado. Ao concluir, clique em Testar cadastro.";
        } else {
            feedback.textContent = "Confira este campo: " + campo.validationMessage;
        }
    });

    // O reset nativo limpa os campos; este listener limpa somente o feedback.
    app.addEventListener("reset", function (event) {
        const formulario = event.target;
        if (formulario.id !== "formulario-voluntario") {
            return;
        }

        const feedback = formulario.querySelector("#feedback-formulario");
        feedback.textContent = "";
        feedback.className = "";
        feedback.hidden = true;
    });
}
