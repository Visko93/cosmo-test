# Github Searcher

[![Cosmo Test Project](https://github.com/Visko93/cosmo-test/actions/workflows/deploy.yml/badge.svg)](https://github.com/Visko93/cosmo-test/actions/workflows/deploy.yml)

## Mockup and Frames - pre develepment

| Home                                                   | Found                                                    | Error                                                 |
| ------------------------------------------------------ | -------------------------------------------------------- | ----------------------------------------------------- |
| ![search page](public/assets/readme/Search%20Page.png) | ![profile page](public/assets/readme/Profile%20Page.png) | ![Not Found page](public/assets/readme/Not-Found.png) |

## Decisoes para o projeto

**Estado**: _Usarei a API Context junto com um padrao de reducer, com isso consigo alcancar qualquer component da minha arvore e manter a imutabilidade do estado global._

**Estilos**: _A algum tempo queria voltar a usar css puro (ou quase isso), entao optei por criar um sistema com Module.css em dois estados um global (parecido com o que Tailwind faz) e um local, adicionando post-CSS para evitar conflitos pos build_

**Compiler**: _Esse e meu primeiro projeto utilizando Vite, o setup e facil e por ter seus proprios plugins evita a necessidade de um tranpilador. Edit: Muito Rapido, porem sem TS suport em dev!!_

**Tests**: _Como estou utilizando vite tive que utilizar o framework vitest, acabei adicionando @react-testing-library por ter mais familiaridade, porem gostei demais do vitest, principalmente `yarn test:ui`_

**CI/CD**: _utilizando github Actions montei uma pipeline simples que builda a aplicacao e a posta em uma branch `gh-pages` e essa brange tem um trigger que pede para o github fazer o deploy da nova versao (out-the-box)_

## Ferramentas para construcao do projeto

- Bundler => Vite
- Router => React-router-dom
- Etilizacao => Module.css + postcss
- Requisicoes de api => axios
- script para geracao de files => plop
- Tipificacao estatica => typescript
- Testes Unitarions => vitest + react-testing-library
- Testes E2E => Cypress
- Icons => [unplugin-icons](https://github.com/antfu/unplugin-icons)

---

## Rodar Localmente

Requisitos

> - Node 16
> - yarn ou npm ou pnpm

> E necessario criar um token
> https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

Criar um arquivo .env no root do projeto (baseado no .env.template)

```env
VITE_GITHUB_ACCESS_TOKEN=<Seu Token>
```

Clone o Projeto localmente

```bash
git clone https://github.com/Visko93/cosmo-test.git
```

Instale as Dependencias (Usarei yarn, mas esse passo pode ser feito com qualquer gerenciador)

```bash
# npm install
yarn
```

Rode o projeto localmente

```bash
# npm run dev
yarn dev
```

### Testes

Para rodar os testes unitarios:

```bash
yarn test:ui
# Para obter a cobertura atual
yarn coverage
```

# Entrega

- O código possui algum controle de dependências?
- O resultado final está completo para ser executado?
- O resultado final atende ao que se propõe fazer?
- O resultado final atende totalmente aos requisitos propostos?
- O resultado final é visualmente elegante?

Boas Práticas

- O código está de acordo com o guia de estilo da linguagem?
- O código está bem estruturado?
- O código está fluente na linguagem?
- O código faz o uso correto de Design Patterns?

Documentação

- O código foi entregue com um arquivo de README claro de como se guiar?
- O código possui comentários pertinentes?
- código está em algum controle de versão?
- Os commits são pequenos e consistentes?
- As mensagens de commit são claras?

Código Limpo

- opcional O código possibilita expansão para novas funcionalidades?
- O código é Don't Repeat Yourself?
- O código é fácil de compreender?

Controle de Qualidade

- opcional O código possui configuração de lint?

- opcional O código possui testes unitários?

- opcional O código possui testes de integração?
