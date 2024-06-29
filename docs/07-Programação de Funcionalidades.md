# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

## Cadrastro
### Requisitos

- RF-001 - Permitir que o usuário cadastre-se com e-mail e senha
  
Para atender ao requisito RF-001 foi desenvolvido a página de Cadastro com a seguinte estrutura.

Ao clicar em `Cadastre-se` disponível na tela de `Login`, o usuário será redirecionado para a tela de Cadastro.

![cadastro](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t3-si_t3_app_web_1osem2024_gp01/assets/161783673/24e91dc2-0e6d-4b62-9e2f-b6ba4d09d89e)

Será exibido cinco campos, Insira seu Email/Insira sua Senha/Confirme seu Email/Confirme sua Senha/Insira sua Palavra de Recuperação, do tipo `input email` com id `email`, `input password` com id `password`, `input email` com id `confirmEmail`, `input password` com id `confirmPassword` e `input text` com id `recover` que receberão os valores digitados pelo usuário para fazer o cadastro no site. O `button` do tipo `submit` e de classe `botao` é para o usuário concluir o cadastro no site.

![cadastro vscode](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t3-si_t3_app_web_1osem2024_gp01/assets/161783673/ae99d44c-92e6-4e17-bb4d-4f1a2156496b)

Os dados são registrados no localStorage do navegador de acordo com a estrutura de dados encontrada em src/js/registro.js, como mostra a seguir:

![cadastro vscode2](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t3-si_t3_app_web_1osem2024_gp01/assets/161783673/0be739a1-0752-4d67-94c7-c7e4aaf40b2d)

## Recuperação de Senha
### Requisitos

- RF-002	Permitir que o usuário redefina sua senha

Para atender ao requisito RF-002 foi desenvolvido a página de Recuperação de Senha.

Ao clicar em Esquecei a senha disponível na tela de Login, o usuário será redirecionado para a tela de Recuperação de senha.

![recuperaçaõ](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t3-si_t3_app_web_1osem2024_gp01/assets/161783673/cbedd63f-62a3-4b7e-ad31-8421aebc6a92)

Será exibido um campos, Insira sua Palavra de Recuperação, do tipo `input text` com id `nome` e `input password` com id `recoverWord` que receberão os valores digitados pelo usuário para fazer a alteração da senha. O `button` do tipo `submit` com classe `botao` é para o usuário confirmar a alteração e ter acesso a sua senha novamente.

![recuperar vscode](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t3-si_t3_app_web_1osem2024_gp01/assets/161783673/f8687b9f-6557-492b-ade0-f1633ba071a5)

Os dados são registrados e recuperados no localStorage do navegador de acordo com a estrutura de dados encontrada em src/js/recover.js, como mostra a seguir:

![recuperar vscode2](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t3-si_t3_app_web_1osem2024_gp01/assets/161783673/029ad73d-b196-4261-865d-0124838608c7)

## Consulta de Dados
### Requisitos

- RF-004	Permitir que o usuário consulte quantidade de vendas ocorridas no mês
- RF-006	Permitir que o usuário consulte metas de venda por colaboradores
- RF-010	Permitir que o usuário consulte dados de pagamento dos fornecedores

Ao clicar em Login, o usuário será redirecionado para a tela Inicial. Na esquerda são exibidos os Indicadores/Dados onde é possível a consulta de ambos.

![main page](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t3-si_t3_app_web_1osem2024_gp01/assets/161783673/f09272c8-2561-4724-8a87-c96daf18432d)

Será exbidos em `div` com classe `indicadores` e `div` com classe `arquivos`, onde cada uma delas são geradas `ul`com `li*3`.

![main page 2](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t3-si_t3_app_web_1osem2024_gp01/assets/161783673/ea60266b-0216-4b72-8754-b7360522eeea)

Ao cliclar nos dados, ele nos retorna uma tabela gerada com dados que foram adcionados em arquivo JSON.

![dados2](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t3-si_t3_app_web_1osem2024_gp01/assets/161783673/04f69b4f-b72d-421f-8b8b-d126f74d97af)

Será exibidos em  `div` com classe `tabela` com id `data-table`, `data-table2` e `data-table3`, onde são carregados o arquivo JS encontrado em src/js/api.js, como mostra a seguir:

![dados](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t3-si_t3_app_web_1osem2024_gp01/assets/161783673/7de28a52-57f6-4eac-a5aa-ad1be5346b35)

![dados3](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t3-si_t3_app_web_1osem2024_gp01/assets/161783673/f344c14f-2dc0-4b05-8a80-cce9305783f9)

Será exibidos em  `div` com classe `indicador` com id `indicador-comercial`, `indicador-suprimento` e `indicador-projeto`, onde ele nos retorna uma tabela gerada com as fórmulas que usa os arquivos encontrados em src/json para calcular em JS encontrado em src/js/indicadores.js, como mostra a seguir:

![indicadores3](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t3-si_t3_app_web_1osem2024_gp01/assets/161783673/b7535a1b-f130-421e-b920-e0abbf9da47f)

![indicadores2](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t3-si_t3_app_web_1osem2024_gp01/assets/161783673/e856d0fd-87dd-410e-badb-e795dc061ce6)

![indicadores](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t3-si_t3_app_web_1osem2024_gp01/assets/161783673/10b3d798-3f77-4b02-978c-f850c92d93aa)





