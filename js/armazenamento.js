// Guarda somente a rota. Nenhum campo do formulário é armazenado.
const chavePreferencia = "patinhasFelizesPreferencias";

export function salvarPreferencia(rota) {
    try {
        localStorage.setItem(chavePreferencia, JSON.stringify({ rota: rota }));
    } catch (erro) {
        // Se o navegador bloquear o armazenamento, a SPA continua funcionando.
    }
}

export function recuperarPreferencia() {
    try {
        const texto = localStorage.getItem(chavePreferencia);
        if (!texto) {
            return "";
        }

        const preferencia = JSON.parse(texto);
        if (preferencia && (preferencia.rota === "inicio" ||
            preferencia.rota === "projetos" || preferencia.rota === "cadastro")) {
            return preferencia.rota;
        }
    } catch (erro) {
        // Um valor inválido ou armazenamento bloqueado não impede a navegação.
    }
    return "";
}

