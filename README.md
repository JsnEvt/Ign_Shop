

<p align="center">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/jsnevt/ign_shop">
  
  <a href="https://github.com/jsnevt/README-ign_shop/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/jsnevt/ign_shop">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   
  <a href="https://rocketseat.com.br">
    <img alt="Feito pela Rocketseat" src="https://img.shields.io/badge/feito%20por-Rocketseat-%237519C1">
  </a>

  <a href="https://blog.rocketseat.com.br/">
    <img alt="Stargazers" src="https://img.shields.io/badge/Blog-Rocketseat-%237159c1?style=flat&logo=ghost">
  </a>

</p>

<h1 align="center">
    <img alt="Desafio Ignite 2022" title="#desafio_ign_2022" src="./img/banner.png" />
</h1>

<h4 align="center"> 
	🚧  Ignite Shop - Concluído 🚀 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> •  
 <a href="#-contribuidores">Contribuidores</a> •  
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>

## 💻 Sobre o projeto

Ignite Shop - Aplicativo desenvolvido durante os desafios da trilha Ignite da Rocketseat. A aplicação consiste de uma tela com alguns
itens para serem escolhidos como itens de compra (camisas). Após escolhidos, clicamos no item do carrinho que nos encaminhará para a API do Stripe, para informarmos
os dados de pagamento através do cartão de crédito. Esta aplicação foi desenvolvida para explorarmos esse recurso: API de pagamento. Esta API age como uma interface 
de aplicação interagindo com a plataforma Stripe para validar os dados. Quando validados, nossa aplicação retorna a confirmação da compra.

Projeto frontend desenvolvido durante o curso online (Ignite) oferecido pela [Rocketseat].

---

## ⚙️ Funcionalidades

- [x] Etapas da aplicação:
	- Escolha dos itens
	- Finalizando entrando no carrinho de compras
	- Informando dados de pagamento do cartão de crédito

- [x] API do Stripe:
	- Valida os dados do cartão e concretiza a operação

- [x] Aplicação:
	- Ao finalizar o processo, é enviado uma mensagem de confirmação com os itens do pedido realizado.

---

## 🎨 Layout

O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/x5d6PByTDhwD6f3gRrj5dM/Ignite-Shop-2.0-(Copy)?type=design&node-id=0-1&mode=design&t=X9urGgqMRuw7axB5-0">
  <img alt="Made by jsnevt" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>


### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="Appfrontend1" title="#Appfrontend" src="./img/Scroll.png" width="400px">
  <img alt="Appfrontend2" title="#Appfrontend" src="./img/Product.png" width="400px">
  <img alt="Appfrontend4" title="#Appfrontend" src="./img/Purchase.png" width="400px">
</p>

---

## 🚀 Como executar o projeto

O projeto foi feito usando o framework Next com React 


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), 
[Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# No prompt de comando:
# Crie uma pasta onde desejar
# Acesse a pasta, e no terminal:

# Clone este repositório
$ git clone https://github.com/jsnevt/ign_shop.git

# No VSCode, abra a pasta onde o arquivo foi clonado e abra o projeto

# Dentro do terminal do VS Code, instale as dependências
$ npm i

# Acesse o terminal do VS e execute a aplicação em modo desenvolvimento
$ Digite "num run dev" (sem as aspas)

A aplicação será aberta - acesse http://localhost:3000

```
---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[https://github.com/phosphor-icons/homepage](https://github.com/phosphor-icons/homepage)**
-   **[Axios](https://github.com/axios/axios)**
-   **[https://www.radix-ui.com](https://github.com/radix-ui/primitives)**
-   **[https://stitches.dev/](https://github.com/stitchesjs/stitches)**
-   **[Stripe](https://github.com/stripe)**
-   **[Keen-slider](https://github.com/rcbyr/keen-slider)**


> Veja o arquivo  [package.json](https://github.com/JsnEvt/coffeedelivery/blob/main/package.json)


## 👨‍💻 Contribuidores

💜 Um super thanks 👏 para essa galera que fez esse produto sair do campo da ideia e entrar nas lojas de aplicativos :)

<table>
  <tr>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" width="100px;" alt=""/><br /><sub><b>Diego Fernandes</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">👨‍🚀</a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/4669899?s=460&u=806503605676192b5d0c363e4490e13d8127ed64&v=4" width="100px;" alt=""/><br /><sub><b>Cleiton Souza</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">👨‍🚀</a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/861751?s=460&v=4" width="100px;" alt=""/><br /><sub><b>Robson Marques</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">👨‍🚀</a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/16831337?s=460&v=4" width="100px;" alt=""/><br /><sub><b>Claudio Orlandi</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">🚀</a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/37725197?s=460&u=446439436524c37f66e41f35b607dbb70358d5e4&v=4" width="100px;" alt=""/><br /><sub><b>Vinícios Fraga</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">🚀</a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/26551306?s=460&u=18446655ccae6c2a29eb177a104ecf32f029aa3a&v=4" width="100px;" alt=""/><br /><sub><b>Hugo Duarte</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">🚀</a>  <a href="https://blog.rocketseat.com.br/" title="Blog">🌐</a></td>
    
  </tr>
  <tr>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/39345247?s=460&u=cdff2624a327a43e2765112a54e966a06eac6d79&v=4" width="100px;" alt=""/><br /><sub><b>Joseph Oliveira</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">🚀</a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/10366880?s=460&u=59e93e1752e9d2ece4b7d8e129d60caba9c94207&v=4" width="100px;" alt=""/><br /><sub><b>Guilherme Rodz</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">🚀</a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4" width="100px;" alt=""/><br /><sub><b>Mayk Brito</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">🚀</a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/7268910?s=460&u=0b5d9df4232e70fa66ea9f130fad4260378323de&v=4" width="100px;" alt=""/><br /><sub><b>João Paulo</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">🚀</a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/14251143?s=460&u=340ed1d854bbacc22b9a3210a18a1f589a28bc40&v=4" width="100px;" alt=""/><br /><sub><b>Luke Morales</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">🚀</a></td>
     <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/5151405?s=460&u=1dbcf0e89087c2dc902d3331b90e532db1543d2b&v=4" width="100px;" alt=""/><br /><sub><b>Luiz Batanero</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">🚀</a></td>
    
  </tr>
</table>


## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---


## 🦸 Autor

[![Linkedin Badge](https://img.shields.io/badge/-Jason-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jason-everton-041226223/)](https://www.linkedin.com/in/jason-everton-041226223/)

[![Gmail Badge](https://img.shields.io/badge/-jasonemsw10@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jasonemsw10@gmail.com)](mailto:jasonemsw10@gmail.com)


## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Jason Everton 👋🏽 [Entre em contato!](https://www.linkedin.com/in/jason-everton-041226223/)

---

