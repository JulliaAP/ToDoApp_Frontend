
# Aplicativo Task-a-Tudo 


## Uma breve descrição sobre o nosso projeto

Nossa missão foi desenvolver o nosso aplicativo, que demos o nome de Task-a-Tudo, um gerenciador de tarefas eficiente e intuitivo. Queremos oferecer aos usuários uma ferramenta que vá além de simplesmente organizar suas atividades diárias, mas que também simplifique suas vidas. 

## Desenvolvimento Front-End

No desenvolvimento do frontend do Task-a-Tudo, usamos o React, uma biblioteca JavaScript popular e poderosa para criar interfaces de usuário. Com o React, conseguimos fazer componentes reutilizáveis e gerenciar o estado da aplicação de forma eficiente, proporcionando uma experiência de usuário bem fluida e interativa.  

### JavaScript e React - 

- Criamos componentes reutilizáveis com React, facilitando a manutenção e escalabilidade.

- Usamos Hooks e Context API para gerenciar o estado e compartilhar dados de forma eficiente.

- Implementamos React Router para navegação contínua entre páginas.

## Desenvolvimento Back-End

- No desenvolvimento do backend do Task-a-Tudo, usamos Node.js com Express para criar uma API robusta e eficiente, garantindo uma comunicação fluida entre o frontend e o banco de dados.

### APIs RESTful -

- Desenvolvemos uma API RESTful que permite realizar todas as operações CRUD (Create, Read, Update, Delete) necessárias para gerenciar as tarefas. 

- Isso inclui endpoints para criar novas tarefas, ler tarefas existentes, atualizar tarefas e deletar tarefas.

- Cada endpoint foi projetado para seguir os princípios REST, o que torna a API intuitiva e fácil de usar.

### Validação de Dados -

- Colocamos em prática formas de garantir que as informações que chegam ao servidor estejam corretas e seguras antes de serem usadas ou guardadas no banco de dados. Essa é uma medida importante para evitar problemas futuros e manter a integridade dos dados.

### Manutenção e Escalabilidade - 

- Node.js foi escolhido por sua capacidade de lidar com múltiplas requisições simultaneamente, o que é essencial para um aplicativo que precisa escalar.

- Nosso código é modular e bem organizado, facilitando a adição de novas funcionalidades e a manutenção do sistema existente.

### Integração com o Frontend - 

Garantimos que todas as respostas da API sejam rápidas e contenham as informações necessárias para que o frontend funcione de maneira eficiente e sem interrupções.
 

## Banco de Dados

Optamos por usar Optamos por utilizar o MongoDB como nosso sistema de gerenciamento de banco de dados. 

- O MongoDB é um banco de dados NoSQL altamente escalável e flexível, que armazena os dados em formato JSON-like (BSON) e é ideal para aplicações que lidam com grandes volumes de dados e precisam de flexibilidade na modelagem.

- Nos permite trabalhar com dados não estruturados ou semiestruturados, o que é útil para um aplicativo como o Task-a-Tudo, onde as informações das tarefas podem variar de acordo com as necessidades dos usuários.

- Usamos o Mongoose, uma biblioteca de modelagem de dados para MongoDB em Node.js, para facilitar a interação com o banco de dados e definir esquemas de dados consistentes.

### Consultas NoSQL -

- Para adicionar, atualizar, remover e buscar dados, usamos consultas especiais que funcionam bem com bancos de dados NoSQL. Essas consultas são um pouco diferentes das tradicionais, mas nos permitem fazer as mesmas coisas.

### Segurança  

- Embora o MongoDB não tenha problemas comuns de segurança, como SQL Injection, ainda tomamos medidas para manter nossos dados seguros. 

## Engenharia de Software

Na gestão do nosso código, contamos com o GitHub para acompanhar as diferentes versões do nosso software, o que nos permite trabalhar em equipe de maneira eficiente. 

Isso significa que podemos colaborar em diferentes partes do projeto ao mesmo tempo, sem nos preocuparmos em sobrescrever o trabalho uns dos outros.

- Para garantir que nosso software funcione corretamente, implementamos testes automatizados. Isso significa que podemos identificar e corrigir problemas rapidamente, o que é essencial para manter a qualidade do nosso código e a satisfação dos usuários.

## Autores

- [@Jullia Azevedo](https://github.com/JulliaAP)
- [@Vitória Lorenna](https://github.com/Lor3nn)
- [@Vinícius Regis](https://github.com/vrzim5)
- [@Emilly Menezes](https://github.com/emmenezes02)

## Instalação

- Certifique-se de ter o Node.js instalado em sua máquina.
- Clone este repositório.
- Na raiz do projeto, execute 'npm install' para instalar as dependências do backend.
- Navegue até o diretório frontend e execute 'npm install' para instalar as dependências do frontend.

## Execução Local 

### Backend 

- Na raiz do projeto, execute o comando 'node Server.js' para iniciar o servidor backend.
- O servidor estará em execução em http://localhost:3000.

### Frontend
- Navegue até o diretório frontend e execute o comando 'npm start' para iniciar o servidor de desenvolvimento do frontend.
- O aplicativo estará disponível em http://localhost:3000.

## Contribuição

Se quiser contribuir com este projeto, siga estas etapas:

- Fork este repositório.
- Crie uma nova branch (git checkout -b feature/nova-feature).
- Faça commit de suas alterações (git commit -m 'Adiciona nova feature').
- Faça push para a branch (git push origin feature/nova-feature).
- Crie um novo Pull Request.

## Deployment com Render

Para fazer o deployment usando o serviço Render, siga estas etapas:

- Crie uma conta no Render se ainda não tiver uma.
- Na dashboard do OnRender, clique em "New" para criar um novo site.
- Selecione a opção de integração com GitHub e autorize o acesso ao seu repositório.
- Escolha o repositório que deseja implantar.
- Especifique as configurações de build e deploy conforme necessário (por exemplo, comandos de build: npm run build para o frontend).
- Clique em "Deploy" para iniciar o processo de deployment.
- Quando concluído, seu aplicativo estará disponível em um URL fornecido pelo Render.
Acesse o Render aqui: [https://render.com](https://render.com)


## Documentação da API

#### Retorna todas as tarefas

http
  GET /


| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `` | `` |  |

#### Salva uma tarefa

http
  POST /save


| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| text      | string | *Obrigatório*. O título da tarefa que você quer |

#### Atualiza uma tarefa

http
  POST /update


| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| _id      | string | *Obrigatório*. O ID da tarefa que você quer |
| text      | string | *Obrigatório*. O título da tarefa que você quer |

#### Apaga uma tarefa

http
  POST /delete


| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| _id      | string | *Obrigatório*. O ID da tarefa que você quer |

