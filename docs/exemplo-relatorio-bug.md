# Exemplo de relatório de bug

> **Aviso:** o caso abaixo é um exemplo de documentação para portfólio. O defeito não foi confirmado no ambiente atual e não deve ser apresentado como resultado real de execução.

## Título

Contador do carrinho permanece visível após a remoção do último produto

## Classificação

- **Tipo:** funcional.
- **Severidade:** média — apresenta informação incorreta, mas não impede a compra.
- **Prioridade sugerida:** alta — afeta um componente visível durante todo o fluxo.
- **Frequência:** a confirmar durante reprodução.
- **Status:** exemplo, não reportado.

## Ambiente

- Aplicação: SauceDemo.
- URL: `https://www.saucedemo.com`.
- Navegador e versão: preencher na execução.
- Sistema operacional: preencher na execução.
- Usuário: `standard_user`.

## Pré-condições

- Usuário autenticado.
- Carrinho inicialmente vazio.

## Passos para reprodução

1. Acessar o inventário.
2. Adicionar `Sauce Labs Backpack` ao carrinho.
3. Confirmar que o contador apresenta `1`.
4. Remover o mesmo produto.
5. Observar o ícone e o contador do carrinho.

## Resultado esperado

O produto é removido e o contador deixa de ser exibido, representando um carrinho vazio.

## Resultado atual do exemplo

O produto é removido, mas o contador continua exibindo `1`.

## Evidências necessárias

- Screenshot antes e depois da remoção.
- Vídeo ou trace da reprodução.
- Horário da execução.
- Resultado de uma segunda tentativa em nova sessão.

## Impacto

O usuário recebe uma indicação incorreta sobre o conteúdo do carrinho. Isso pode gerar desconfiança, retorno desnecessário ao carrinho ou abandono da compra.

## Observações para triagem

- Confirmar se o comportamento acontece ao remover pelo inventário e pelo carrinho.
- Verificar se atualizar a página corrige o contador.
- Repetir em outro navegador.
- Validar se o problema é apenas visual ou se o item continua no estado da aplicação.

