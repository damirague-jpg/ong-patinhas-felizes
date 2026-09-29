import { salvarPreferencia, recuperarPreferencia } from "./armazenamento.js";

// O script usa apenas HTML do próprio projeto. Não recebe HTML de visitantes.
const app = document.querySelector("#app");
const rodape = document.querySelector("footer");

// O início já está no index.html. Os outros conteúdos foram reaproveitados
// dos arquivos em html/, que continuam disponíveis como referência.
const paginas = {
    inicio: {
        titulo: "ONG Patinhas Felizes | Início",
        conteudo: app.innerHTML,
        rodape: rodape.innerHTML
    },
    projetos: {
        titulo: "Projetos | ONG Patinhas Felizes",
        conteudo: `
        <h1>Projetos sociais</h1>
        <p>Conheça as ações propostas para a ONG e as formas de participar.</p>
        <nav class="atalhos" aria-label="Assuntos desta página">
            <a href="#projetos/adocao">Adoção</a>
            <a href="#projetos/doacoes">Doações</a>
            <a href="#projetos/voluntariado">Voluntariado</a>
        </nav>

        <section id="adocao">
            <h2>Adoção responsável</h2>
            <p>Adotar é assumir um compromisso com alimentação, saúde, segurança e carinho durante toda a vida do animal.</p>
            <p>No projeto, a adoção é organizada em três etapas:</p>
            <ol>
                <li>Conversar com a equipe sobre o animal e a rotina da família.</li>
                <li>Agendar uma visita para conhecer o animal.</li>
                <li>Confirmar as condições de cuidado e assinar um termo de adoção responsável.</li>
            </ol>
            <a href="#inicio/contato">Veja os dados de contato do projeto</a>
        </section>

        <section id="animais">
            <h2>Animais disponíveis</h2>
            <p class="alerta-info"><strong>Informação:</strong> Perfis fictícios para demonstrar a página de adoção. Fotos ilustrativas.</p>
            <div class="animais">
                <!-- Cada article apresenta um animal de forma independente. -->
                <article>
                    <img src="imagens/thor.jpg" alt="Cachorro de pelagem dourada sentado em um gramado, representando Thor." loading="lazy">
                    <h3>Thor</h3>
                    <span class="badge">Disponível para adoção</span>
                    <p><strong>Idade:</strong> 3 anos. <strong>Porte:</strong> grande.</p>
                    <p>Brincalhão e companheiro, gosta de passeios e precisa de uma família com tempo para atividades diárias.</p>
                    <a href="#projetos/adocao">Como adotar o Thor</a>
                </article>
                <article>
                    <img src="imagens/luna.jpg" alt="Gato de pelagem marrom e listrada, com olhos verdes, representando Luna." loading="lazy">
                    <h3>Luna</h3>
                    <span class="badge">Disponível para adoção</span>
                    <p><strong>Idade:</strong> 2 anos. <strong>Porte:</strong> pequeno.</p>
                    <p>Curiosa e tranquila, gosta de companhia e procura um lar seguro, com janelas protegidas por telas.</p>
                    <a href="#projetos/adocao">Como adotar a Luna</a>
                </article>
            </div>
        </section>

        <section id="doacoes">
            <h2>Campanha de doação</h2>
            <p>A campanha Patinhas Bem Cuidadas tem como objetivo reunir recursos para alimentação, higiene e atendimento veterinário.</p>
            <h3>Doação de materiais</h3>
            <p>O projeto prevê o recebimento de ração em embalagem fechada, cobertores limpos e materiais de higiene. A entrega deve ser combinada com a equipe.</p>
            <h3>Contribuição financeira</h3>
            <p>Em uma ONG real, a equipe informaria um canal oficial para contribuir e apresentaria a prestação de contas dos valores recebidos e das despesas.</p>
            <p>Como este é um projeto acadêmico, não há chave Pix, cobrança ou recebimento de dinheiro.</p>
            <a href="#inicio/contato">Consulte os contatos ilustrativos</a>
        </section>

        <section id="voluntariado">
            <h2>Trabalho voluntário</h2>
            <p>Os voluntários podem ajudar na organização das campanhas, na divulgação da adoção e nos cuidados diários, com orientação da equipe.</p>
            <ul>
                <li>Apoio na alimentação e limpeza dos espaços.</li>
                <li>Organização de ração e materiais doados.</li>
                <li>Divulgação dos animais e apoio em feiras de adoção.</li>
            </ul>
            <p>Para demonstrar seu interesse, preencha o formulário com sua área de atuação e disponibilidade. A integração e os horários seriam combinados com a equipe em um projeto real.</p>
            <a class="botao" href="#cadastro">Acessar cadastro de voluntário</a>
        </section>

        <aside>
            <h2>Informações complementares</h2>
            <p>Antes de adotar, converse com todas as pessoas da casa e considere os gastos e o tempo necessários para cuidar do animal.</p>
            <p>Se não puder adotar agora, você também pode ajudar divulgando a adoção responsável e participando das campanhas.</p>
        </aside>
    `,
        rodape: `
        <p>ONG Patinhas Felizes — Projeto acadêmico de ADS.</p>
        <p>ONG e perfis fictícios. Fotos ilustrativas.</p>
    `
    },
    cadastro: {
        titulo: "Cadastro de voluntário | ONG Patinhas Felizes",
        conteudo: `
        <h1>Cadastro de voluntário</h1>
        <p>Seu tempo pode fazer parte de uma nova história.</p>
        <section>
            <h2>Preencha seu interesse</h2>
            <p id="aviso" class="aviso"><strong>Demonstração acadêmica:</strong> use dados fictícios. O formulário verifica os campos e mostra uma mensagem nesta página, mas não registra nem envia uma inscrição à ONG.</p>
            <p>Os campos indicados com * são obrigatórios.</p>
            <!-- O evento submit impede o envio e mostra o resultado dentro da SPA. -->
            <form id="formulario-voluntario" aria-describedby="aviso">
                <fieldset>
                    <legend>Dados pessoais e de contato</legend>
                    <label for="nome">Nome completo *</label>
                    <input type="text" id="nome" name="nome" required minlength="3" maxlength="100" autocomplete="off">

                    <label for="nascimento">Data de nascimento *</label>
                    <input type="date" id="nascimento" name="nascimento" required autocomplete="off">

                    <!-- pattern exige o formato completo, incluindo a pontuação. -->
                    <label for="cpf">CPF *</label>
                    <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}" maxlength="14" title="Digite o CPF no formato 000.000.000-00." aria-describedby="ajuda-cpf" required autocomplete="off">
                    <p id="ajuda-cpf">Formato: 000.000.000-00. Digite os pontos e o hífen. Este teste verifica apenas o formato, não os dígitos verificadores.</p>

                    <label for="email">E-mail *</label>
                    <input type="email" id="email" name="email" required maxlength="100" autocomplete="off" placeholder="nome@example.com">

                    <label for="telefone">Telefone com DDD *</label>
                    <input type="tel" id="telefone" name="telefone" pattern="\\([0-9]{2}\\) [0-9]{4,5}-[0-9]{4}" maxlength="15" autocomplete="off" placeholder="(00) 00000-0000" title="Use (00) 0000-0000 para fixo ou (00) 00000-0000 para celular." aria-describedby="ajuda-telefone" required>
                    <p id="ajuda-telefone">Use (00) 0000-0000 para fixo ou (00) 00000-0000 para celular, incluindo parênteses, espaço e hífen.</p>
                </fieldset>

                <fieldset>
                    <legend>Endereço</legend>
                    <label for="cep">CEP *</label>
                    <input type="text" id="cep" name="cep" placeholder="00000-000" pattern="[0-9]{5}-[0-9]{3}" maxlength="9" title="Digite o CEP no formato 00000-000." aria-describedby="ajuda-cep" required autocomplete="off">
                    <p id="ajuda-cep">Formato: 00000-000. Digite também o hífen.</p>

                    <label for="endereco">Endereço (rua, número e bairro) *</label>
                    <input type="text" id="endereco" name="endereco" required maxlength="200" autocomplete="off">

                    <label for="cidade">Cidade *</label>
                    <input type="text" id="cidade" name="cidade" required minlength="2" maxlength="80" autocomplete="off">

                    <label for="estado">Estado *</label>
                    <select id="estado" name="estado" required>
                        <option value="">Selecione um estado</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>
                </fieldset>

                <fieldset>
                    <legend>Participação no projeto</legend>
                    <label for="area">Área de interesse *</label>
                    <select id="area" name="area" required>
                        <option value="">Selecione uma opção</option>
                        <option value="cuidados">Cuidados com os animais</option>
                        <option value="campanhas">Organização de campanhas</option>
                        <option value="divulgacao">Divulgação e feiras de adoção</option>
                    </select>

                    <label for="disponibilidade">Disponibilidade *</label>
                    <select id="disponibilidade" name="disponibilidade" required>
                        <option value="">Selecione uma opção</option>
                        <option value="semana-manha">Durante a semana, de manhã</option>
                        <option value="semana-tarde">Durante a semana, à tarde</option>
                        <option value="fim-de-semana">Nos fins de semana</option>
                    </select>

                    <label for="mensagem">Por que você quer participar? (opcional)</label>
                    <textarea id="mensagem" name="mensagem" rows="4" maxlength="500"></textarea>
                </fieldset>

                <label class="opcao" for="ciente">
                    <input type="checkbox" id="ciente" name="ciente" value="sim" required>
                    Estou ciente de que este cadastro é apenas uma demonstração. *
                </label>
                <div class="acoes-formulario">
                <button type="submit">Testar cadastro</button>
                <button class="secundario" type="reset">Limpar campos</button>
                </div>
                <p id="feedback-formulario" role="status" aria-live="polite" hidden></p>
            </form>
        </section>
        <aside>
            <h2>Como seria o próximo passo?</h2>
            <p>Em um cadastro real, a equipe entraria em contato para apresentar as atividades e combinar a participação. Nesta versão, não haverá contato.</p>
            <a href="#projetos/voluntariado">Saiba mais sobre o voluntariado</a>
        </aside>
    `,
        rodape: `
        <p>ONG Patinhas Felizes — Projeto acadêmico de ADS.</p>
        <p>Formulário demonstrativo, sem armazenamento de inscrições.</p>
    `
    }
};

// Guarda a rota para não apagar o formulário ao usar um atalho da mesma página.
let rotaAtual = "";

function obterRota() {
    // Exemplo: #projetos/voluntariado resulta na rota "projetos".
    const rota = window.location.hash.slice(1).split("/")[0];
    if (rota === "projetos" || rota === "cadastro") {
        return rota;
    }
    return "inicio";
}

function renderizarPagina() {
    const rota = obterRota();
    const pagina = paginas[rota];

    if (rota !== rotaAtual) {
        app.innerHTML = "";
        app.innerHTML = pagina.conteudo;
        // Mantém as classes usadas pelo Grid e pelo CSS de cada página.
        app.className = rota;
        rodape.innerHTML = pagina.rodape;
        document.title = pagina.titulo;
        rotaAtual = rota;
        salvarPreferencia(rota);
    }

    // Destaca a página atual nos dois menus, sem alterar o layout.
    document.querySelectorAll("header nav a").forEach(function (link) {
        link.removeAttribute("aria-current");
        if (link.getAttribute("href") === "#" + rota) {
            link.setAttribute("aria-current", "page");
        }
    });

    document.querySelector(".pular").href = "#" + rota + "/app";
    document.querySelectorAll("header details").forEach(function (menu) {
        menu.open = false;
    });

    // A parte depois da barra é um atalho, como contato ou voluntariado.
    const secao = window.location.hash.slice(1).split("/")[1];
    const destino = secao ? document.getElementById(secao) : null;
    if (destino) {
        destino.scrollIntoView();
        if (secao === "app") {
            app.setAttribute("tabindex", "-1");
            app.focus({ preventScroll: true });
        }
    } else {
        window.scrollTo(0, 0);
    }
}

// Configura a rota inicial e acompanha as próximas mudanças de hash.
export function inicializarRotas() {
    // Uma rota informada na URL tem prioridade sobre a preferência salva.
    if (!window.location.hash) {
        const rotaSalva = recuperarPreferencia();
        if (rotaSalva) {
            // replace restaura a rota sem adicionar uma entrada extra ao histórico.
            window.location.replace("#" + rotaSalva);
        }
    }

    window.addEventListener("hashchange", renderizarPagina);
    renderizarPagina();
}
