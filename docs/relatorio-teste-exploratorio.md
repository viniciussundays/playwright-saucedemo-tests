# Relatório de teste exploratório

## Identificação da sessão

- **Produto:** SauceDemo.
- **Área:** carrinho e checkout.
- **Charter:** investigar inconsistências entre seleção, carrinho, resumo e conclusão da compra.
- **Timebox sugerido:** 45 minutos.
- **Técnicas:** transições de estado, interrupção de fluxo, variação de dados e heurística CRUD.
- **Status:** roteiro preparado; sessão manual ainda não executada e sem defeitos confirmados.

> Este documento não transforma resultados automatizados em evidência de teste exploratório. Os campos de execução devem ser preenchidos somente após interação manual com a aplicação.

## Objetivos

- Verificar se produtos e quantidades permanecem consistentes entre páginas.
- Investigar o comportamento ao avançar, voltar e interromper o checkout.
- Explorar combinações de campos vazios, espaços e valores incomuns.
- Observar mensagens, foco, navegação e possibilidade de recuperação.
- Identificar situações que os oito cenários automatizados não cobrem.

## Percurso sugerido

1. Entrar com `standard_user`.
2. Adicionar dois produtos com preços diferentes.
3. Abrir o carrinho, remover um item e continuar comprando.
4. Adicionar novamente o produto removido.
5. Iniciar o checkout e tentar continuar com cada campo obrigatório vazio.
6. Usar espaços, caracteres especiais e valores longos nos campos.
7. Voltar do resumo para etapas anteriores e conferir itens e valores.
8. Finalizar o pedido e tentar navegar novamente para o resumo pelo histórico.
9. Fazer logout e tentar acessar diretamente uma URL autenticada.

## Oráculos de teste

- O contador deve representar a quantidade real de itens.
- Nome e preço devem permanecer iguais no inventário, carrinho e resumo.
- Campos obrigatórios devem impedir avanço e indicar claramente o problema.
- Voltar ou atualizar a página não deve criar itens duplicados.
- A confirmação só deve aparecer após a conclusão válida do fluxo.
- Após logout, páginas protegidas não devem continuar acessíveis.

## Registro da execução

| Campo | Preenchimento após a sessão |
|---|---|
| Data e horário | Pendente |
| Testador | Pendente |
| Navegador e versão | Pendente |
| Ambiente/URL | Pendente |
| Tempo utilizado | Pendente |
| Cenários percorridos | Pendente |
| Defeitos encontrados | Nenhum confirmado até a execução |
| Evidências | Pendente |

## Perguntas que permanecerão após a sessão

- O comportamento é consistente em Firefox e WebKit?
- O carrinho deve persistir após logout e novo login?
- Há limites definidos para os campos do checkout?
- Quais URLs exigem sessão autenticada?
- Quais mensagens são requisitos do produto e quais são apenas implementação atual?

## Encerramento

Após a execução, registrar observações, anexar evidências e criar um relatório separado para cada defeito reproduzível. Comportamentos duvidosos devem ser classificados como perguntas de produto, não automaticamente como bugs.

