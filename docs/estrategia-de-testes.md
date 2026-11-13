# Estratégia de testes — SauceDemo

## 1. Objetivo

Esta estratégia descreve como a qualidade do fluxo de compra do SauceDemo é avaliada. O foco está nos riscos de negócio mais relevantes: acesso ao sistema, seleção de produtos, consistência do carrinho e conclusão do checkout.

O documento também explicita limites e critérios de decisão para evitar que a quantidade de testes seja confundida com cobertura efetiva.

## 2. Escopo

### Dentro do escopo

- Login com usuário válido, bloqueado e credenciais inválidas.
- Exibição do inventário após autenticação.
- Inclusão e remoção de um ou mais produtos.
- Atualização do contador do carrinho.
- Ordenação de produtos por preço.
- Preenchimento dos dados do comprador.
- Conclusão da compra e mensagem de confirmação.

### Fora do escopo atual

- Pagamentos reais, estoque, entrega e integração com serviços de terceiros.
- Testes de carga, segurança e acessibilidade.
- Compatibilidade completa entre navegadores e dispositivos móveis.
- Validação de banco de dados ou de API interna do SauceDemo.
- Persistência de pedidos após a conclusão da compra.

Os testes em `tests/API` usam JSONPlaceholder e são uma demonstração independente. Eles não validam uma API do SauceDemo.

## 3. Abordagem orientada por risco

Os cenários são priorizados pela combinação de impacto e probabilidade descrita na [matriz de riscos](matriz-de-riscos.md). Fluxos que impedem o acesso, alteram o conteúdo do carrinho ou bloqueiam a compra recebem prioridade maior.

### Níveis de teste usados

- **E2E automatizado:** protege os fluxos críticos e repetitivos no navegador.
- **Exploratório manual:** investiga comportamentos não previstos, mensagens, navegação e consistência entre etapas.
- **API demonstrativa:** exercita operações HTTP em um serviço público separado, sem representar integração com o SauceDemo.

## 4. Ambientes e dados

- Aplicação: `https://www.saucedemo.com` ou endereço definido em `BASE_URL`.
- Navegador automatizado: Chromium.
- Dados principais: usuários públicos fornecidos pelo próprio ambiente de demonstração.
- Usuário padrão: usado para os fluxos positivos.
- Usuário bloqueado: usado para validar a regra de acesso negado.

Os testes devem ser independentes. Nenhum cenário pode depender da execução ou do resultado de outro.

## 5. Critérios de entrada

- Ambiente do SauceDemo acessível.
- Dependências instaladas com `npm ci`.
- Navegador instalado com `npx playwright install chromium`.
- Configuração sem erros e testes listados com `npm run test:list`.

## 6. Critérios de saída

Uma execução é considerada aceitável quando:

- Todos os cenários críticos de login, carrinho e checkout passam.
- Não há defeito crítico ou alto sem análise e decisão registrada.
- Falhas de ambiente são diferenciadas de falhas do produto.
- Evidências de falha estão disponíveis em trace, screenshot ou vídeo quando aplicável.
- Qualquer risco não coberto está registrado em [limitações conhecidas](limitacoes-conhecidas.md).

## 7. Automação e pipeline

- Os testes são implementados com Playwright e TypeScript.
- Page Objects concentram ações e elementos reutilizáveis.
- O GitHub Actions executa a suíte em alterações enviadas ao repositório.
- Em CI são mantidos vídeo de falha, screenshot e trace na primeira repetição.
- Repetições ajudam no diagnóstico, mas não transformam um teste instável em aprovado.

## 8. Gestão de defeitos

Um defeito deve conter, no mínimo:

- título objetivo;
- ambiente e pré-condições;
- passos reproduzíveis;
- resultado esperado e resultado atual;
- severidade e prioridade justificadas;
- evidência;
- frequência de reprodução.

O arquivo [exemplo-relatorio-bug.md](exemplo-relatorio-bug.md) demonstra esse padrão sem apresentar o exemplo como defeito real confirmado.

## 9. Métricas úteis

- Taxa de aprovação dos cenários críticos.
- Defeitos encontrados por risco ou funcionalidade.
- Falhas causadas pelo produto, pelo teste e pelo ambiente.
- Tempo para diagnosticar uma falha no pipeline.
- Testes instáveis identificados e eliminados.

Quantidade de casos ou percentual de cobertura isolados não são usados como prova suficiente de qualidade.

## 10. Responsabilidades

O responsável por QA mantém os cenários, analisa falhas e atualiza riscos. Mudanças nos fluxos críticos exigem revisão da matriz, dos casos de teste e da automação correspondente.

