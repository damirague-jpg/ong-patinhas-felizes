# ONG Patinhas Felizes

Este é um projeto acadêmico desenvolvido no curso de Análise e Desenvolvimento de Sistemas.

O projeto representa uma ONG fictícia de adoção de animais.

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript

## Estrutura do projeto

- `index.html` - página principal
- `css/` - arquivos de estilo
- `html/` - páginas auxiliares
- `imagens/` - imagens usadas no site
- `js/` - arquivos JavaScript

## Funcionamento

O projeto usa JavaScript para funcionar como uma SPA simples.

A navegação usa o hash da URL para trocar o conteúdo mostrado na página sem precisar recarregar tudo.

O formulário também utiliza JavaScript para os eventos e mensagens de validação.

## Armazenamento local

O `localStorage` é usado somente para lembrar a última página visitada.

Os dados digitados no formulário não são salvos.

## Organização do JavaScript

O JavaScript foi separado em arquivos com funções diferentes:

- `main.js` - inicia a aplicação
- `rotas.js` - controla as rotas e troca o conteúdo da página
- `formulario.js` - controla os eventos e a validação do formulário
- `armazenamento.js` - controla o localStorage

Os arquivos se comunicam usando `import` e `export`.

## Versionamento

Foi usada uma estrutura simples baseada em GitFlow:

- `main` - versão estável
- `develop` - versão de desenvolvimento
- `feature/*` - alterações feitas separadamente antes de entrar na develop

Para esta atividade foi criada a branch:

`feature/documentacao-gitflow`

Ela foi usada para adicionar esta documentação antes de integrar a alteração na branch `develop`.

## Como executar

O projeto pode ser aberto pelo GitHub Pages ou por um servidor local, como o Live Server do Visual Studio Code.