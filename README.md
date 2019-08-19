# Desafio Front-End EWALLY

## Documentação da API

A documentação das nossas apis se encontra em https://docs.apidev.ewally.com.br/apis.
Essa documentação é bem extensa, pois inclui todas as nossas apis públicas. Para esse teste você precisará de apenas algumas delas.

## Criação de tela de Login

O portal deve solicitar ao usuário um nome de usuário e senha. A API que deve ser utilizada está em Ewally User Management API /login.

- O username que deve ser utilizado para os testes é testFrontEwally
- A senha desse usuário é 123456
- O token retornado nessa chamada deve ser utilizado em todas as requisições seguintes. Ele deve ser enviado no header Authorization, no formato Bearer {{token}}
- O token expira em 15 minutos se não for utilizado, mas a cada chamada de api esse tempo é renovado. Se o token vencer, qualquer rota retornará o erro 110 - Sessão expirada. Por favor faça login novamente. Se isso acontecer, basta refazer o login e usar um token novo. Não é necessário para o teste se preocupar com isso; esses casos e fluxos podem ser desconsiderados.

## Criação de telas de consulta de saldo e extrato

Após realizado login com sucesso, o usuário deve ser direcionado para uma tela onde poderá ver o seu saldo e extrato.

A API de consulta de saldo está em Ewally Account Management /account/balance

- Só deve ser mostrado o saldo disponível (não o blockedBalance).

A API de consulta de extrato está em Ewally B2B /b2b/statement

- O usuário deve ver uma lista com informações reduzidas do extrato: apenas data, amount e operationType
- Para esse teste, alguns registros de transações podem ser encontrados ao se utilizar initialDate=2019-01-01 e finalDate=2019-01-31

Todos os valores das apis da Ewally são em centavos. {"amount":500, "balance":4015} significa um valor de R$ 5,00 e um saldo de R$ 40,15
