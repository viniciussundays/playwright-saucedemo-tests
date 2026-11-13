# Playwright SauceDemo

Testes automatizados E2E e de API com Playwright e TypeScript.

## Pré-requisitos

- Node.js 20 ou superior
- npm

## Instalação

```bash
npm ci
npx playwright install chromium
```

## Execução

```bash
npm test          # todos os testes
npm run test:e2e  # somente E2E
npm run test:api  # somente API
```

## Relatório

```bash
npm run report
```

## Tecnologias

- Playwright
- TypeScript
- Page Object Model
- GitHub Actions

## Documentação de qualidade

- [Estratégia de testes](docs/estrategia-de-testes.md)
- [Matriz de riscos](docs/matriz-de-riscos.md)
- [Casos de teste](docs/casos-de-teste.md)
- [Relatório de teste exploratório](docs/relatorio-teste-exploratorio.md)
- [Exemplo de relatório de bug](docs/exemplo-relatorio-bug.md)
- [Limitações conhecidas](docs/limitacoes-conhecidas.md)

## Estrutura do projeto

```text
playwright-saucedemo-tests/
├── .github/workflows/
├── docs/
├── pages/
├── test-data/
├── tests/
│   ├── API/
│   └── e2e/
├── utils/
└── playwright.config.ts
```


