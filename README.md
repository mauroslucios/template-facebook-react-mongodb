# clone-facebook-react-mongodb
![React](https://img.shields.io/badge/React-18-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![CSS](https://img.shields.io/badge/CSS3-Styled-blueviolet)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-orange)
![License](https://img.shields.io/badge/License-MIT-green)

# Facebook Clone (React)

Este projeto é um **clone da interface do Facebook**, desenvolvido com **React** para fins de estudo e prática de desenvolvimento front-end. O foco está na componentização, organização de layout e simulação de funcionalidades comuns de uma rede social.

## 📸 Preview

O projeto inclui:

* Feed de postagens
* Página de perfil
* Sidebar com navegação
* Rightbar com amigos online e informações do usuário
* Layout responsivo (desktop, tablet e mobile)

## 🚀 Tecnologias Utilizadas

* **React** (Create React App)
* **JavaScript (ES6+)**
* **CSS puro**
* **HTML5**
* **Dados mockados (dummyData)**

## 📂 Estrutura do Projeto

```text
src/
├── components/
│   ├── topbar/
│   ├── sidebar/
│   ├── feed/
│   ├── post/
│   ├── rightbar/
│   └── share/
├── pages/
│   ├── home/
│   └── profile/
├── dummyData.js
├── App.js
└── index.js
```

## 🧩 Funcionalidades Implementadas

* Página **Home** com feed de postagens
* Página **Profile** com:

  * Capa do usuário
  * Foto de perfil
  * Informações pessoais
  * Lista de amigos
* Layout em **grid responsivo** (3 → 2 → 1 colunas)
* **Tooltips** em nomes truncados
* Componentes reutilizáveis
* Scroll customizado
* Navegação simulada entre páginas

## 📱 Responsividade

O layout se adapta automaticamente:

* **Desktop:** 3 colunas
* **Tablet:** 2 colunas
* **Mobile:** 1 coluna

## ▶️ Como Executar o Projeto

### Pré-requisitos

* Node.js (versão LTS recomendada)
* npm ou yarn

### Passos

```bash
# Clonar o repositório
git clone https://github.com/mauroslucios/template-facebook-react-mongodb.git

# Entrar na pasta do projeto
cd template-facebook-react-mongodb

# Instalar dependências
npm install

# Iniciar o projeto
npm start
```

O projeto será executado em:

```
http://localhost:3000
```

## 🧪 Dados Simulados

As informações de usuários, postagens e amigos estão em:

```js
src/dummyData.js
```

Isso permite testar o layout sem necessidade de backend.

## 🔮 Próximos Passos (Roadmap)

* Integração com backend (Node.js / API REST)
* Autenticação de usuários
* Upload real de imagens
* Likes e comentários dinâmicos
* Chat em tempo real
* Integração com banco de dados

## 🎯 Objetivo do Projeto

Este projeto tem caráter **educacional**, sendo ideal para:

* Treinar React e componentização
* Praticar CSS e layout responsivo
* Simular uma aplicação real de rede social
* Servir como base para projetos mais avançados

## 👤 Autor

**Mauro Lúcio P. da Silva**

* Desenvolvedor
* Engenheiro de Dados
* Devops
* Criador do projeto *Health Data Insights*

---


