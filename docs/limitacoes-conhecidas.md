# Limitações conhecidas

## Produto e ambiente

- O SauceDemo é uma aplicação pública de demonstração; este projeto não controla sua disponibilidade, dados ou mudanças.
- Não há acesso ao código da aplicação, banco de dados, logs internos ou requisitos oficiais completos.
- Resultados externos podem ser afetados por rede, indisponibilidade ou alteração do ambiente.

## Cobertura funcional

- A suíte cobre oito cenários E2E principais, mas não todas as combinações possíveis.
- Campos obrigatórios e limites dos dados de checkout ainda não possuem cobertura automatizada.
- Logout, acesso direto a páginas autenticadas e persistência de sessão não são validados.
- O resumo financeiro não é comparado detalhadamente com os itens escolhidos.
- Os demais usuários especiais do SauceDemo não fazem parte da regressão atual.

## Cobertura técnica

- A execução automatizada está configurada apenas para Chromium.
- Não há cobertura dedicada para dispositivos móveis.
- Acessibilidade, desempenho e segurança não fazem parte da suíte.
- Não há testes visuais ou comparação de screenshots.
- Alguns Page Objects ainda concentram mais de uma etapa do fluxo, especialmente checkout e confirmação.

## Testes de API

- Os testes em `tests/API` usam JSONPlaceholder, não uma API do SauceDemo.
- JSONPlaceholder simula operações de escrita; respostas de POST, PUT e DELETE não representam persistência real.
- A suíte atual valida status e partes do corpo, mas não autenticação, contrato completo, headers ou regras de negócio complexas.

## Dados e manutenção

- Parte dos dados de teste está declarada diretamente no arquivo de teste, apesar de existirem utilitários de dados.
- Arquivos vazios ou não utilizados devem ser removidos ou implementados para não sugerir uma arquitetura inexistente.
- Repetições em CI auxiliam o diagnóstico, mas exigem acompanhamento para não ocultar testes instáveis.

## Interpretação dos resultados

- Uma execução aprovada demonstra apenas que os cenários cobertos funcionaram naquele ambiente e momento.
- A ausência de falhas automatizadas não comprova ausência de defeitos.
- O relatório exploratório incluído neste repositório é um roteiro honesto e deve receber resultados somente após uma sessão manual real.

