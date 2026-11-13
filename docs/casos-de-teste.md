# Casos de teste prioritários

## Legenda

- **Automatizado:** coberto pela suíte atual.
- **Manual:** indicado para execução exploratória ou regressão manual.
- **P0:** fluxo indispensável para uso do produto.
- **P1:** risco relevante, mas existe caminho alternativo ou impacto menor.
- **P2:** cobertura complementar.

## Cobertura atual

| ID | Cenário | Prioridade | Tipo | Resultado esperado |
|---|---|---|---|---|
| TC01 | Login com usuário válido | P0 | Automatizado | Usuário acessa o inventário e visualiza o título `Products` |
| TC02 | Login com usuário bloqueado | P1 | Automatizado | Acesso é negado e uma mensagem informa que o usuário está bloqueado |
| TC03 | Login com credenciais inválidas | P1 | Automatizado | Acesso é negado e uma mensagem informa que as credenciais não correspondem |
| TC04 | Adicionar um produto ao carrinho | P0 | Automatizado | Contador do carrinho apresenta uma unidade |
| TC05 | Adicionar vários produtos ao carrinho | P0 | Automatizado | Contador corresponde à quantidade selecionada |
| TC06 | Remover o último produto | P0 | Automatizado | Contador volta a zero e deixa de indicar item ativo |
| TC07 | Finalizar compra com dados válidos | P0 | Automatizado | Pedido é concluído e a confirmação é exibida |
| TC08 | Ordenar produtos do menor para o maior preço | P1 | Automatizado | Preços são apresentados em ordem crescente |

## Casos recomendados para evolução

| ID | Cenário | Prioridade | Tipo atual | Resultado esperado |
|---|---|---|---|---|
| TC09 | Tentar continuar o checkout sem nome | P1 | Manual | Sistema impede avanço e informa o campo obrigatório |
| TC10 | Tentar continuar o checkout sem sobrenome | P1 | Manual | Sistema impede avanço e informa o campo obrigatório |
| TC11 | Tentar continuar o checkout sem CEP | P1 | Manual | Sistema impede avanço e informa o campo obrigatório |
| TC12 | Voltar ao inventário após adicionar produtos | P1 | Manual | Itens e contador permanecem consistentes |
| TC13 | Remover produto diretamente no carrinho | P1 | Manual | Item é removido e o total visual é atualizado |
| TC14 | Validar detalhes e preço antes de finalizar | P1 | Manual | Resumo corresponde aos produtos escolhidos |
| TC15 | Fazer logout e tentar retornar por URL direta | P1 | Manual | Área autenticada não deve permanecer acessível |
| TC16 | Ordenar produtos nas demais opções disponíveis | P2 | Manual | Ordem exibida corresponde à opção selecionada |

## Detalhamento do fluxo crítico de compra

### TC07 — Finalizar compra com dados válidos

**Pré-condições**

- SauceDemo disponível.
- Usuário `standard_user` habilitado.
- Carrinho inicialmente vazio.

**Passos**

1. Acessar a página de login.
2. Entrar com credenciais válidas.
3. Adicionar `Sauce Labs Backpack` ao carrinho.
4. Abrir o carrinho.
5. Iniciar o checkout.
6. Informar nome, sobrenome e CEP válidos.
7. Continuar para o resumo.
8. Finalizar a compra.

**Resultado esperado**

- O produto escolhido aparece no carrinho e no resumo.
- O usuário consegue avançar por todas as etapas.
- A página final exibe `Thank you for your order!`.

## Rastreabilidade

Os casos TC01 a TC08 correspondem aos testes do arquivo `tests/e2e/saucedemo.spec.ts`. Os casos TC09 a TC16 representam cobertura planejada e não devem ser apresentados como automatizados.

