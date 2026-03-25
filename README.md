# NLW21-FullStack

- [Notion](https://efficient-sloth-d85.notion.site/NLW-Operator-Guia-do-evento-30f395da57708093b620c5f7313bc612)


## MCPs

### Design
- [Pencil](https://www.pencil.dev/)
- [PaperMC](https://docs.papermc.io/)
- [Framework](https://framework.dev/)


### Documentation
- [Context7](https://context7.com/)
  - [Instalation](https://context7.com/docs/resources/all-clients#opencode):
```json
"mcp": {
  "context7": {
    "type": "remote",
    "url": "https://mcp.context7.com/mcp",
    "headers": {
      "CONTEXT7_API_KEY": "YOUR_API_KEY"
    },
    "enabled": true
  }
}
```

## Text Editor

- [Zed](https://zed.dev/)

## Framework
- [Next.js](https://nextjs.org/docs): LTS 16.2.1

## OpenCode

- [OpenCode CLI](https://opencode.ai/docs/ja/cli/)

List the connected MCPs:
```sh
opencode mcp list
```

Start the OpenCode CLI:
```sh
opencode
```

Select the Agent Model:
```sh
\models
```

Conectar com sua conta paga:
```sh
\connect
```

Prompt to create the project:
```md
Vamos começar criando um projeto Next.js nessa pasta, usando o diretório "src" para o nosso código. Vamos usar Biome para linting/formatting. Vamos usar TailwindCSS para estilização. Crie um app totalmente em branco, sem conteúdo na página, deixe toda em branco.
Configuração do Biome: formatação com 2 espeços, integre o Biome com o TailwindCSS para entender as diretivas do postcss, o resto manter um padrão.
Package Manager: pnpm 
```

Prompt para detectar elemento selecionado no Pencil:
```md
Qual componente eu estou selecionando no Pencil (use o MCP do Pencil)?
```

Prompt para criar components:
```md
Eu quero que você crie uma pasta src/components/ui para implementarmos os components visuais que são genéricos para várias páginas, como o botão e use o componente que estou selecionando para criar a base do componente button. Use Tailwind, tailwind-merge e tailwind-variants quando necessário para criar várias variants do mesmo componente. Não esqueça de extender as propriedades nativas do botão no TypeScript e usar named exports, nunca use default exports.
```

Prompt para corrigir erros e documentar padrões de criação:
```md
1. Corrija os erros que o Biome está apontando de class xxx can be written as yyy.
2. Não use tailwind-merge quando usar o variants, porque você pode passer className diretamente como uma propriedade da variant, junto com variant, size e o tailwind-variants faz o merge sozinho.
3. Documente esses padrões de criação de components em um arquivo agents.md dentro da pasta ui para os próximos components seguirem os mesmos padrões.
```