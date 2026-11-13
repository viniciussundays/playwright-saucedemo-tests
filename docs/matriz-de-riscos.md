# Matriz de riscos

## Critério de avaliação

Cada risco recebe valores de 1 a 3:

- **Probabilidade:** 1 baixa, 2 média, 3 alta.
- **Impacto:** 1 baixo, 2 médio, 3 alto.
- **Exposição:** probabilidade × impacto.

Prioridade resultante:

- **Alta:** 7 a 9.
- **Média:** 4 a 6.
- **Baixa:** 1 a 3.

## Riscos do produto

| ID | Risco | Prob. | Impacto | Exposição | Prioridade | Mitigação e cobertura |
|---|---|---:|---:|---:|---|---|
| R01 | Usuário válido não consegue acessar o inventário | 3 | 3 | 9 | Alta | Login positivo e validação da página de produtos |
| R02 | Usuário bloqueado obtém acesso indevido | 2 | 3 | 6 | Média | Login com usuário bloqueado e validação da mensagem |
| R03 | Credenciais inválidas não são rejeitadas corretamente | 2 | 3 | 6 | Média | Login negativo e validação da mensagem de erro |
| R04 | Produto selecionado não é incluído no carrinho | 3 | 3 | 9 | Alta | Inclusão individual e validação do contador |
| R05 | Carrinho apresenta quantidade diferente dos itens selecionados | 3 | 3 | 9 | Alta | Inclusão múltipla, remoção e validação do contador |
| R06 | Usuário não consegue concluir a compra | 3 | 3 | 9 | Alta | Fluxo E2E de checkout até a confirmação |
| R07 | Dados obrigatórios do comprador são aceitos vazios ou inválidos | 2 | 3 | 6 | Média | Cobertura manual recomendada; ainda não automatizada |
| R08 | Produtos são ordenados de maneira incorreta | 2 | 2 | 4 | Média | Validação automatizada da ordenação por preço crescente |
| R09 | Estado do carrinho é perdido ou reaparece durante navegação | 2 | 3 | 6 | Média | Sessão exploratória e cenários adicionais recomendados |
| R10 | Sessão permanece ativa após logout | 2 | 2 | 4 | Média | Validação manual recomendada; ainda não automatizada |

## Riscos da automação

| ID | Risco | Prob. | Impacto | Exposição | Tratamento |
|---|---|---:|---:|---:|---|
| A01 | Mudança no HTML quebra seletores | 2 | 2 | 4 | Preferir atributos estáveis e concentrar seletores nos Page Objects |
| A02 | Dependência do ambiente público gera falso negativo | 3 | 2 | 6 | Registrar indisponibilidade, separar falha de ambiente e repetir somente após diagnóstico |
| A03 | Paralelismo causa interferência entre cenários | 1 | 3 | 3 | Manter testes isolados e dados independentes |
| A04 | Repetições ocultam instabilidade | 2 | 2 | 4 | Analisar cada retry e tratar flakiness como defeito da suíte |
| A05 | Testes de API externos são interpretados como API do SauceDemo | 2 | 2 | 4 | Identificar JSONPlaceholder como demonstração independente no README e na estratégia |

## Riscos residuais prioritários

Os maiores riscos ainda sem automação são validação de campos obrigatórios, persistência do carrinho durante navegação e encerramento de sessão. Eles devem orientar a próxima expansão funcional, antes de adicionar casos de baixo impacto.

