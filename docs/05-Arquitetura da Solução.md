# Arquitetura da Solução
## Diagrama de componentes

1. **Cliente (Navegador Web)**
   - **Descrição:** Representa o navegador web utilizado pelo usuário para acessar o site.
   - **Tecnologias:** Navegador web compatível com HTML, CSS e JavaScript.

2. **Servidor Web**
   - **Descrição:** Responsável por servir os arquivos estáticos para o navegador do cliente.
   - **Tecnologias:** Servidor web como Apache, Nginx ou Microsoft IIS.

3. **Arquivos Estáticos**
   - **Descrição:** Conjunto de arquivos HTML, CSS e JavaScript que compõem o site.
   - **Tecnologias:** HTML, CSS, JavaScript.

4. **IDE (Visual Studio)**
   - **Descrição:** Ambiente de desenvolvimento integrado utilizado para escrever e gerenciar o código-fonte.
   - **Tecnologias:** Visual Studio.

5. **Figma (Design de Interface)**
   - **Descrição:** Ferramenta de design colaborativo utilizada para criar protótipos e layouts da interface do usuário.
   - **Tecnologias:** Figma.

6. **Bibliotecas e Frameworks**
   - **Descrição:** Conjunto de bibliotecas e frameworks JavaScript utilizados para simplificar o desenvolvimento.
   - **Tecnologias:** Exemplos incluem jQuery, Bootstrap, React.js, Vue.js, entre outros.

### Relacionamentos

- O Cliente (Navegador Web) faz requisições HTTP para o Servidor Web.
- O Servidor Web serve os arquivos estáticos (HTML, CSS, JavaScript) para o Cliente.
- Os arquivos estáticos são desenvolvidos na IDE (Visual Studio) com base nos designs criados no Figma.
- As Bibliotecas e Frameworks JavaScript são utilizadas no desenvolvimento dos arquivos estáticos para adicionar funcionalidades adicionais ao site.

## Ilustração do User Flow

A imagem a seguir ilustra o fluxo do usuário em nossa solução. Assim que o usuário entra na plataforma, ele é apresentado à tela inicial onde ele é indicado a digitar o e-mail sob condições de obrigatoriedade.

Após digitar o e-mail, ele é levado a tela de login, onde poderá inserir o e-mail e senha, clicar em cadastrar-se ou em esqueci a senha, caso tenha esquecido a senha.

Caso ele opte por seguir pelo caminho de cadastrar-se, ele é levado a uma tela de inserção de dados de cadastro, como e-mail e senha. Caso opte pela opção de esquecer a senha, ele é direcionado a inserir o e-mail de cadastro.
Caso ele insira os dados corretos de login, é levado para a tela principal da aplicação, onde poderá consultar, através de seleção dos indicadores e modos de visualização, quais são os índices desejados para análise.

Nessa tela, há cinco opções na linha superior, sendo elas: 
>- Atualizar: que realiza a atualização dos dados em tempo real;
>- Salvar: caso o usuário queira salvar os dados em uma pasta local;
>- Tela cheia: caso o usuário deseje visualizar os detalhes de índices em tela cheia;
>- Compartilhar: caso o usuário deseje compartilhar as informações, sendo realizando o download local ou compartilhando via Google Drive ou pelo Gmail;
>- Logado como...: indica qual conta está logada no momento.

![Hub Solutions - User Flow](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t3-si_t3_app_web_1osem2024_gp01/assets/155144408/9276d8a9-0343-46b6-a8c7-ed0131027812)

## Tecnologias Utilizadas

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

1. Figma
O Figma é uma ferramenta de design colaborativo baseada em nuvem que permite aos designers criar, testar e compartilhar interfaces de usuário de forma eficiente. Ele oferece recursos poderosos para prototipagem e design de interface, permitindo uma visualização detalhada do layout e fluxo de interação do site.
> - [Figma](https://www.figma.com/)

2. HTML (HyperText Markup Language)
HTML é a linguagem de marcação padrão para criar páginas web. Ele fornece a estrutura básica para o conteúdo de uma página web, incluindo textos, imagens, links e outros elementos. No contexto deste projeto, o HTML será utilizado para criar a estrutura do site, definindo a organização e disposição dos elementos visuais.
> - [Mozilla Developer Network (MDN) - HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)

3. CSS (Cascading Style Sheets)
CSS é uma linguagem de estilo utilizada para controlar a apresentação visual de uma página web. Com o CSS, é possível definir o layout, cores, fontes e outros aspectos visuais do site, garantindo uma experiência de usuário consistente e atraente.
> - [Mozilla Developer Network (MDN) - CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

4. JavaScript
JavaScript é uma linguagem de programação que permite adicionar interatividade e dinamismo a uma página web. Com o JavaScript, é possível criar funcionalidades avançadas, como animações, validações de formulários e manipulação de dados em tempo real. Neste projeto, o JavaScript será utilizado para implementar a lógica de interação do usuário, como filtros e ordenações de processos.
> - [Mozilla Developer Network (MDN) - JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

5. Visual Studio (IDE - Integrated Development Environment)
O Visual Studio é uma poderosa IDE desenvolvida pela Microsoft, amplamente utilizada por desenvolvedores para criar e depurar aplicativos web, desktop e móveis. Com recursos avançados de edição de código, depuração e controle de versão integrados, o Visual Studio oferece um ambiente de desenvolvimento eficiente e produtivo. Neste projeto, o Visual Studio pode ser utilizado como a IDE principal para escrever e gerenciar o código HTML, CSS e JavaScript.
> - [Visual Studio](https://visualstudio.microsoft.com/)


## Hospedagem

A hospedagem e o lançamento da aplicação web ainda não ocorreu em 07/abr/2024.
