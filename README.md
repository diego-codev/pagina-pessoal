# Página Pessoal

Portfólio pessoal em HTML, CSS e JavaScript, construído em duas versões com o mesmo conteúdo, cada uma usando um framework CSS diferente: Bootstrap 5.3 e Bulma 1.x. Ambas usam ícones do FontAwesome 6.

## Identificação

- Autor: Diego Alves de Oliveira
- Disciplina: GAC116 - Programação Web
- Instituição: Universidade Federal de Lavras (UFLA)
- Turma: 10A
- Atividade: Atividade Prática 2 (AP2)

## Objetivo

Construir uma página pessoal responsiva a partir de um conteúdo único, implementado duas vezes com frameworks CSS distintos, para comparar na prática como cada um resolve grid, componentes e tema escuro.

## Estrutura de pastas

```
pagina-pessoal/
├── bootstrap/
│   ├── index.html
│   └── assets/
│       ├── css/styles.css
│       ├── js/script.js
│       └── img/foto.jpg
├── bulma/
│   ├── index.html
│   └── assets/
│       ├── css/styles.css
│       ├── js/script.js
│       └── img/foto.jpg
├── index.html
├── README.md
└── LICENSE
```

O `index.html` da raiz é uma landing simples, sem framework, com dois links de acesso: um para a versão Bootstrap e outro para a versão Bulma. Ele existe para servir como entrada do GitHub Pages.

## Tecnologias e frameworks

Comuns às duas versões: HTML5, CSS3, JavaScript (sem build, sem dependências de instalação) e FontAwesome 6 via CDN.

| Versão | Framework CSS | Fonte |
|---|---|---|
| `bootstrap/` | Bootstrap 5.3 | CDN (jsDelivr) |
| `bulma/` | Bulma 1.x | CDN (jsDelivr) |

O JavaScript próprio de cada versão cuida de três coisas: alternância de tema claro/escuro com persistência em `localStorage`, preenchimento automático do ano no rodapé e, na versão Bulma, o comportamento do menu recolhível (burger), já que esse framework não traz JavaScript embutido.

## Como executar localmente

O projeto é inteiramente estático, sem build e sem dependências para instalar. Basta servir a raiz do repositório com um servidor HTTP simples:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000` no navegador. A partir daí, os links da landing levam a `bootstrap/` e `bulma/`.

## Versões publicadas

- Bootstrap: `[PREENCHER: link do GitHub Pages]`
- Bulma: `[PREENCHER: link do GitHub Pages]`

## Comparação entre os frameworks

| Critério | Bootstrap 5.3 | Bulma 1.x |
|---|---|---|
| Dependência de JavaScript | Sim, para componentes interativos (navbar colapsável, dropdowns) | Não, é só CSS; o comportamento do menu precisa ser escrito à mão |
| Sistema de grid | Grid de 12 colunas com classes `row`/`col-*`, baseado em flexbox | Grid de 12 colunas com classes `columns`/`column`, também baseado em flexbox |
| Componentes prontos | Grande variedade (navbar, cards, badges, progress bars, modais, etc.) | Conjunto menor, mais enxuto (navbar, card, box, tag, progress nativo do HTML) |
| Tema escuro nativo | Sim, via atributo `data-bs-theme` na raiz do documento | Sim, via atributo `data-theme` na raiz do documento |
| Curva de aprendizado | Baixa, com muita documentação e exemplos prontos | Baixa, nomenclatura mais próxima do CSS puro |
| Tamanho do CSS minificado | Maior (por volta de 230KB) | Menor (por volta de 300KB, mas com menos JS associado) |

Nesta página, o Bootstrap acelerou a montagem porque a navbar recolhível e os componentes de card já vêm com o comportamento pronto, sem escrever uma linha de JavaScript para isso. O Bulma exigiu mais decisões manuais, como o toggle do menu burger, mas resultou em marcação mais limpa e em nomes de classe mais previsíveis. Para uma página de conteúdo estático como esta, as duas soluções chegaram a um resultado equivalente; a diferença prática ficou por conta de quanto JavaScript cada framework poupa do desenvolvedor.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para o texto completo.
