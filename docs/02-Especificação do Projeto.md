# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="01-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

"A Ana tem 39 anos, ela é uma consultora de processos muito dedicada. Ela tem uma abordagem analítica e colaborativa para impulsionar a excelência operacional de todos nós da empresa. Com isso, todos os feedbacks que ouço de amigos de outras empresas, é que ela faz uma super transformação!" — Gabriel Oliveira, Gerente de Operações da Empresa Solar (Cliente)

Ana possui uma ampla experiência em consultoria de processos, adquirida ao longo dos anos que atua no mercado, já totaliza mais de 15 anos. Ela é formada em Engenharia de Produção e é especializada em Gestão de Processos Empresariais. Tem uma cartela de clientes bem variados, em diversos setores, desde pequenos empreendedores, empresas familiares até multinacionais. Ana trabalha já na identificação dos problemas, partindo para a análise do fluxo de trabalho para depois poder implementar soluções e treinamento das equipes.

Ana não deixa sua vida pessoal e familiar de lado, é casada com um Engenheiro Civil que também ama Processos e Eficiência. Possui 2 filhos, uma mais velha que faz faculdade de Design e um mais novo que ainda está na escola. A engenheira não deixa de assistir séries com seu marido, assim que chega do trabalho, suas favoritas no momento são: "The Office", "Mindhunter" e "Greys Anatomy". Ana gosta de usar esse tempo para se distrair, ter tempo de qualidade com seu marido e família e não ficar presa somente ao trabalho.

### Características e Comportamentos
• Determinada e dedicada: Ana é reconhecida por sua perseverança em atingir seus objetivos tanto no âmbito profissional quanto pessoal. Define metas específicas e se empenha com insistência para concretizá-las, mantendo o foco mesmo diante dos desafios do dia a dia.

• Empática e colaborativa: Ana demonstra habilidades interpessoais notáveis, sendo sempre empática e colaborativa nas interações com colegas, clientes e familiares. Valoriza a comunicação aberta e o espírito de equipe, buscando compreender as necessidades e perspectivas alheias a fim de encontrar soluções eficazes e relações sólidas.

• Analítica e estratégica: Ana, como Consultora de Processos, possui uma abordagem altamente analítica e estratégica na resolução de problemas e na identificação de oportunidades de melhoria. Ela baseia suas recomendações e decisões em dados e análises, sempre em busca dos melhores resultados para seus clientes.

• Equilíbrio entre trabalho e vida pessoal: Embora comprometida com o trabalho, Ana valoriza um equilíbrio saudável entre sua vida profissional e pessoal. Ela dedica tempo para cuidar de si mesma, de sua família e de seus interesses pessoais.

### Desafios

Enfrentar a resistência à mudança é um desafio recorrente para Ana, especialmente ao lidar com clientes que resistem a mudanças. A implementação de novos processos muitas vezes demanda que as equipes deixem para trás práticas antigas e se adaptem a novas abordagens, o que pode gerar resistência por parte de alguns membros da equipe ou líderes da empresa.

Outro desafio é o gerenciamento das expectativas dos clientes, algo que Ana precisa lidar como consultora. Alguns clientes podem ter expectativas pouco realistas em relação aos resultados do projeto, exigindo que Ana trabalhe proativamente para alinhar as expectativas e garantir uma compreensão clara dos objetivos do projeto.

Estar sempre por dentro das novas tendências é essencial para Ana como consultora. Ela se esforça para manter-se atualizada sobre as últimas novidades e tecnologias em gestão de processos, buscando constantemente desenvolver novas habilidades para oferecer excelentes serviços aos clientes e se manter competitiva no mercado.



Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
