# Template padrão do site

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>

Layout padrão do site (HTML e CSS) que será utilizado em todas as páginas com a definição de identidade visual, aspectos de responsividade e iconografia.

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="globals.css" />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="frame">
      <div class="overlap-group-wrapper">
        <div class="overlap-group">
          <div class="overlap">
            <div class="hub-solutions">Hubsolutions</div>
            <img class="logo" src="img/logo-3.png" />
          </div>
          <div class="div">
            <div class="input"><div class="text-wrapper">name@email.com</div></div>
            <div class="div-wrapper"><div class="text-wrapper-2">Iniciar</div></div>
          </div>
          <img class="github-logo" src="img/github-logo-1.png" />
          <img class="github-mark" src="img/github-mark-1.png" />
          <p class="p">
            A criação de um hub que centraliza informações de diversas aplicações em um único local proporciona uma
            maneira mais eficiente de visualizar todos os dados e oferecer um controle ampliado sobre os processos de
            forma geral.
          </p>
        </div>
      </div>
    </div>
  </body>
</html>

.frame {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.frame .overlap-group-wrapper {
  background-color: #ffffff;
  width: 1280px;
  height: 720px;
}

.frame .overlap-group {
  position: relative;
  height: 720px;
  background-image: url(./img/5585984-1.png);
  background-size: cover;
  background-position: 50% 50%;
}

.frame .overlap {
  position: absolute;
  width: 144px;
  height: 111px;
  top: 123px;
  left: 568px;
}

.frame .hub-solutions {
  position: absolute;
  height: 56px;
  top: 55px;
  left: 0;
  text-shadow: 0px 4px 4px #00000040;
  font-family: "Inter", Helvetica;
  font-weight: 700;
  color: #1f2937;
  font-size: 24px;
  text-align: center;
  letter-spacing: -1.44px;
  line-height: 56px;
  white-space: nowrap;
}

.frame .logo {
  position: absolute;
  width: 64px;
  height: 64px;
  top: 0;
  left: 40px;
  object-fit: cover;
}

.frame .div {
  position: absolute;
  width: 640px;
  height: 63px;
  top: 360px;
  left: 320px;
  border-radius: 50px;
}

.frame .input {
  position: absolute;
  width: 640px;
  height: 63px;
  top: 0;
  left: 0;
  background-color: #ffffff;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: inset 0px 0px 0px 1px #e6e6e6;
}

.frame .text-wrapper {
  position: absolute;
  width: 500px;
  height: 80px;
  top: 23px;
  left: 26px;
  font-family: "Inter", Helvetica;
  font-weight: 400;
  color: #0d0d0d80;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.frame .div-wrapper {
  position: absolute;
  width: 149px;
  height: 37px;
  top: 12px;
  left: 454px;
  background-color: #bce3ff;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0px 20px 35px #05aa531a;
}

.frame .text-wrapper-2 {
  position: absolute;
  width: 100px;
  height: 80px;
  top: 12px;
  left: 53px;
  font-family: "Inter", Helvetica;
  font-weight: 500;
  color: #000000;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 0;
  -webkit-box-orient: vertical;
}

.frame .github-logo {
  position: absolute;
  width: 53px;
  height: 23px;
  top: 672px;
  left: 1192px;
  object-fit: cover;
}

.frame .github-mark {
  position: absolute;
  width: 31px;
  height: 31px;
  top: 668px;
  left: 1161px;
  object-fit: cover;
}

.frame .p {
  position: absolute;
  width: 683px;
  height: 65px;
  top: 252px;
  left: 298px;
  font-family: "Inter", Helvetica;
  font-weight: 400;
  color: #7d7d7d;
  font-size: 16px;
  text-align: center;
  letter-spacing: -0.16px;
  line-height: 17px;
}


> **Links Úteis**:
>
> - [CSS Website Layout (W3Schools)](https://www.w3schools.com/css/css_website_layout.asp)
> - [Website Page Layouts](http://www.cellbiol.com/bioinformatics_web_development/chapter-3-your-first-web-page-learning-html-and-css/website-page-layouts/)
> - [Perfect Liquid Layout](https://matthewjamestaylor.com/perfect-liquid-layouts)
> - [How and Why Icons Improve Your Web Design](https://usabilla.com/blog/how-and-why-icons-improve-you-web-design/)
