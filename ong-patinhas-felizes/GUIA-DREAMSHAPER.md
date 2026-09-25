# Guia de estudo — ONG Patinhas Felizes

Este guia corresponde ao código desta pasta e às telas disponíveis da atividade. Leia, teste e adapte as explicações com suas palavras. As etapas seguintes de formulários não foram fornecidas integralmente.

## 1. Tags semânticas utilizadas

| Tag | Por que foi usada | Onde observar |
| --- | --- | --- |
| `header` | Reúne a identificação da ONG e a navegação no topo. | Todas as páginas. |
| `nav` | Agrupa links de navegação. | Menu principal e atalhos de `projetos.html`. |
| `main` | Identifica o conteúdo principal, com apenas um por página. | Todas as páginas. |
| `section` | Reúne conteúdo relacionado a um assunto, com um título. | Sobre a ONG, Contato, Adoção, Doação e Voluntariado. |
| `article` | Representa um conteúdo que pode ser entendido individualmente. | Perfis do Thor e da Luna. |
| `aside` | Apresenta informações complementares ao conteúdo central. | Orientações extras em projetos e cadastro. |
| `footer` | Identifica o encerramento da página e a natureza acadêmica do site. | Todas as páginas. |

## 2. Hierarquia dos títulos

Cada página possui um `h1` com seu assunto principal. As seções são apresentadas com `h2`. Em Projetos, os nomes Thor e Luna usam `h3`, porque são conteúdos dentro de “Animais disponíveis”, que usa `h2`. “Doação de materiais” e “Contribuição financeira” também usam `h3`, dentro de “Campanha de doação”. Não é necessário usar todos os níveis até `h6`.

Os títulos representam a estrutura do conteúdo; o tamanho visual é definido pelo CSS. Essa ordem facilita a leitura e a navegação por títulos em softwares de leitura de tela. O nome repetido da ONG no cabeçalho é um parágrafo, para não repetir o título principal da página.

## 3. Página inicial: apresentação e contato

No campo que pede o trecho principal do HTML, use o conteúdo entre `<main id="conteudo">` e `</main>` do arquivo `index.html`. Ele contém as seções Sobre a ONG, Como você pode ajudar e Contato, incluindo a imagem.

Os contatos foram identificados como fictícios. O domínio `.example` é usado para indicar um endereço de demonstração. Não se afirma que a foto mostra um animal realmente atendido pela ONG.

### Explicação da imagem e do alt

A imagem foi inserida com a tag `img`, e o atributo `src` indica o arquivo local `imagens/thor.jpg`. O atributo `alt` descreve o cachorro e a cena visível, permitindo que pessoas que utilizam leitores de tela compreendam o conteúdo da imagem. No CSS, a imagem se ajusta à largura disponível para acompanhar o tamanho da tela.

Trecho real utilizado:

```html
<img class="foto-inicial" src="imagens/thor.jpg" alt="Cachorro de pelagem dourada sentado na grama, com a língua para fora.">
```

## 4. Blocos de informação de projetos.html

Os textos da coluna “Tags e estrutura utilizada” são curtos para os campos da tela apresentada. Os perfis dos animais ficam dentro da seção “Animais disponíveis”; não são seções separadas.

| Nome do bloco | Tags e estrutura utilizada |
| --- | --- |
| Adoção responsável | `section com h2, p, ol, li e a.` |
| Animais disponíveis | `section com h2, p e div contendo dois article.` |
| Thor | `article com img, h3, p, strong e a.` |
| Luna | `article com img, h3, p, strong e a.` |
| Campanha de doação | `section com h2, h3, p e a.` |
| Trabalho voluntário | `section com h2, p, ul, li e a.` |
| Informações complementares | `aside com h2 e p.` |

A `div` agrupa os dois animais para a disposição visual no CSS; o significado do conteúdo continua sendo dado por `section` e `article`.

### Organização textual e orientação do visitante

A página foi dividida em seções com títulos que identificam adoção, doação e trabalho voluntário. Os perfis dos animais foram organizados em artigos. A campanha de doação separa materiais e contribuição financeira, enquanto a seção de voluntariado explica as atividades e oferece um link para o cadastro. Os atalhos no início da página ajudam o visitante a encontrar o assunto desejado. As informações complementares ficam em um `aside`. Essa organização facilita a leitura e orienta quem pretende adotar, contribuir ou participar como voluntário. Por ser uma demonstração acadêmica, o site não recebe dinheiro nem inscrições reais.

## 5. Como explicar o formulário

O formulário agora possui três `fieldset`. O primeiro, com a `legend` “Dados pessoais e de contato”, reúne nome, nascimento, CPF, e-mail e telefone. O segundo, “Endereço”, reúne CEP, endereço, cidade e estado. O terceiro, “Participação no projeto”, contém área de interesse, disponibilidade e motivo para participar. Essa divisão organiza os campos por finalidade e facilita sua compreensão. A caixa de ciência fica depois dos três grupos.

| Campo | Tipo ou elemento | Justificativa |
| --- | --- | --- |
| Nome completo | `input type="text"` | Recebe informação textual. |
| Data de nascimento | `input type="date"` | Permite informar uma data com o controle nativo do navegador. |
| CPF | `input type="text"` | Preserva zeros iniciais e pontuação; `pattern` exige o formato. |
| E-mail | `input type="email"` | Verifica o formato básico de um e-mail. |
| Telefone | `input type="tel"` | Identifica um telefone; `pattern` exige DDD e pontuação. |
| CEP | `input type="text"` | Preserva zeros iniciais e hífen; `pattern` exige o formato. |
| Endereço | `input type="text"` | Recebe rua, número e bairro. |
| Cidade | `input type="text"` | Recebe o nome da cidade. |
| Estado | `select` | Oferece os 26 estados e o Distrito Federal. |
| Área de interesse | `select` | Oferece as atividades previstas. |
| Disponibilidade | `select` | Oferece os períodos disponíveis. |
| Motivo para participar | `textarea` | Permite um texto maior, opcional. |
| Confirmação de ciência | `input type="checkbox"` | Exige que a pessoa marque ciência da demonstração. |

`select` e `textarea` não usam atributo `type`.

### Validação dos formatos

```html
pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
pattern="\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}"
pattern="[0-9]{5}-[0-9]{3}"
```

Na ordem, os padrões exigem CPF no formato `000.000.000-00`, telefone no formato `(00) 0000-0000` ou `(00) 00000-0000` e CEP no formato `00000-000`. `[0-9]` representa um algarismo, e os números entre chaves indicam a quantidade. A barra invertida antes do ponto ou parêntese indica o caractere literal. No arquivo HTML, usa-se uma única barra invertida nesses trechos.

Isso é validação de formato, não uma máscara que insere pontuação durante a digitação. Os textos de ajuda e o atributo `title` explicam o preenchimento. `aria-describedby` associa a ajuda ao campo. `required` impede deixar os campos obrigatórios vazios. Não há cálculo dos dígitos verificadores do CPF nem consulta de existência de CPF, CEP ou telefone. A data não impõe idade mínima nem limite de data futura. Se a atividade exigir máscara automática durante a digitação, será necessário acrescentar esse comportamento, normalmente com JavaScript.

- `form` reúne os campos. `action` aponta para `demonstracao.html` e `method="get"` coloca os valores na URL.
- `fieldset` agrupa campos relacionados. `legend` dá nome ao grupo.
- `label` identifica cada campo. Seu atributo `for` corresponde ao `id` do campo.
- `name` identifica cada valor enviado pela navegação do formulário.
- `required` exige preenchimento ou seleção antes de continuar.
- `type="email"` pede ao navegador que verifique o formato do e-mail, sem confirmar se o endereço existe.
- `minlength` e `maxlength` limitam o comprimento de alguns textos.
- `select` oferece escolhas; `textarea` recebe uma mensagem; `checkbox` marca a ciência sobre a demonstração.
- `button type="submit"` inicia a validação e navegação. `button type="reset"` restaura os campos iniciais.

Não há JavaScript. O navegador faz a validação HTML. A página final não lê nem salva os valores; ela apenas explica a demonstração. Uma versão real precisaria de processamento no servidor e validação também no servidor.

## 6. Como explicar o CSS

O mesmo `styles.css` é ligado às páginas por `link`. Seletores como `body`, `header` e `section` definem fonte, cores e espaços. Classes como `.botao` estilizam elementos específicos. `max-width` limita a largura do conteúdo. `display: flex` coloca os animais lado a lado; a regra `@media` muda a direção em telas pequenas. `:focus-visible` destaca links e campos durante a navegação pelo teclado.

### Conferência no W3C Validator

O arquivo `cadastro.html` atualizado foi enviado, sem dados preenchidos, ao [Nu HTML Checker do W3C](https://validator.w3.org/nu/) em 25/09/2026. A resposta foi `{"version":"26.9.16","messages":[]}`: nenhum erro ou aviso de marcação foi reportado. Essa validação confere o HTML; não comprova armazenamento de inscrições, acessibilidade completa nem validade de documentos pessoais.

Para repetir e registrar a evidência na atividade, abra o validador, escolha a entrada por arquivo, selecione `cadastro.html` e execute a verificação. Faça uma captura do resultado se o DreamShaper pedir. Revalide após qualquer alteração no HTML.

## 7. Checklist do material disponível

- [x] Arquivos separados de início, projetos, cadastro e CSS.
- [x] Estrutura semântica com cabeçalho, navegação, conteúdo principal e rodapé.
- [x] Títulos h1, h2 e h3 sem saltos de nível.
- [x] Apresentação da ONG e dados de contato na página inicial.
- [x] Imagens locais acompanhadas de alt descritivo.
- [x] Adoção, contribuição financeira, doação de materiais e voluntariado.
- [x] Blocos documentados de acordo com as tags realmente usadas.
- [x] Formulário com rótulos, grupos e validação HTML.
- [x] CPF, nascimento, CEP, endereço, todos os estados e telefone obrigatório.
- [x] Formatos de CPF, telefone e CEP exigidos por `pattern`.
- [x] `cadastro.html` conferido no W3C Nu HTML Checker sem erros ou avisos.
- [x] Limitações da demonstração explicitadas.
- [ ] Conferir as próximas telas do DreamShaper e eventuais exigências adicionais.
- [ ] Executar no navegador o roteiro manual do LEIA-ME.txt.
