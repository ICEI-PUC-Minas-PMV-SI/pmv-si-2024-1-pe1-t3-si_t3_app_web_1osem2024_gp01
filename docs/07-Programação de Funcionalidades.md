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

