# Produção Textual Individual - Programação para Dispositivos Móveis

## 📌 Sobre o Projeto
Este projeto foi desenvolvido como parte da **Produção Textual Individual (PTI)** da disciplina de **Programação para Dispositivos Móveis**, do curso de **Análise e Desenvolvimento de Sistemas** do Centro Universitário Senac.

O objetivo principal é aplicar conceitos fundamentais do framework **React Native**, com foco na criação de **componentes funcionais** e no uso de **props** para receber dados em formato JSON.

O aplicativo consiste em um protótipo de interface para uma rede fictícia de *Fast Food*, exibindo uma lista de produtos como hambúrgueres e panquecas.

---

## 🚀 Tecnologias Utilizadas
- **React Native** — Framework para desenvolvimento de aplicativos móveis.
- **Expo** — Plataforma que simplifica a configuração e execução do projeto.
- **JavaScript (ES6+)** — Linguagem utilizada no desenvolvimento da aplicação.

---

## 🛠️ Funcionalidades e Conceitos Aplicados
- Criação de componente funcional (`ProductCard`).
- Utilização de `props` para passagem de dados.
- Armazenamento de dados em formato JSON local.
- Renderização de listas com `FlatList`.
- Exibição de imagens locais com `require()`.
- Uso de `SafeAreaView` para respeitar a área segura do dispositivo.
- Estilização com `StyleSheet`.

> **Observação:** O código enviado no documento de entrega da PTI apresenta apenas dois produtos de exemplo, conforme solicitado no enunciado. Já a versão final disponibilizada neste repositório foi expandida para conter 10 itens, com o objetivo de demonstrar melhor o funcionamento do componente `ProductCard` e da `FlatList`.

---

## 🎯 Objetivo Acadêmico
Este projeto demonstra a aplicação prática dos seguintes conceitos estudados em aula:

- Componentização
- Reutilização de código
- Props
- Renderização de listas
- Organização de projeto React Native

---

## 📸 Interface Implementada
O projeto exibe uma interface com uma lista de produtos contendo:

- Nome do produto
- Quantidade de calorias
- Preço
- Imagem ilustrativa

Cada item é renderizado por meio do componente reutilizável `ProductCard`.

🎥 Vídeo de demonstração da interface: [Clique aqui para acessar!](https://youtube.com/shorts/GSHFbZTtAdo?feature=share)

---

## 📁 Estrutura do Projeto

```text
senac-pti-react-native/
├── assets/
│   └── img/
│       ├── burguer.png
│       └── pancake.png
├── node_modules/
├── .gitignore
├── App.js
├── app.json
├── index.js
├── package.json
└── package-lock.json
```

> **Observação:** a pasta `node_modules` não é enviada ao GitHub, pois é recriada automaticamente com o comando `npm install`.

---

## 📦 Como Rodar o Projeto

### 1. Pré-requisitos
Antes de executar o projeto, é necessário ter instalado em sua máquina:

- Node.js: https://nodejs.org
- npm (já incluído com o Node.js)
- Expo Go no celular (Android ou iOS): https://expo.dev/go

### 2. Clonar o Repositório
Abra o terminal e execute:

```bash
git clone https://github.com/bruno-januario/senac-pti-react-native.git
```

### 3. Acessar a Pasta do Projeto

```bash
cd senac-pti-react-native
```

### 4. Instalar as Dependências
Execute o comando abaixo para instalar todas as bibliotecas necessárias:

```bash
npm install
```

### 5. Iniciar o Projeto
Execute:

```bash
npx expo start
```

### 6. Executar no Celular
- Abra o aplicativo **Expo Go** no smartphone.
- Certifique-se de que o celular e o computador estejam conectados à mesma rede Wi-Fi.
- Escaneie o QR Code exibido no terminal ou no navegador.
- O aplicativo será carregado automaticamente no dispositivo.

### 7. Executar no Emulador (Opcional)
Se você possuir um emulador configurado:

- Pressione `a` no terminal para abrir no Android.
- Pressione `i` para abrir no iOS (somente em macOS).

---

## 👨‍🎓 Autor
**Bruno Januário**  
Estudante de Tecnologia em Análise e Desenvolvimento de Sistemas — Centro Universitário Senac

---

## 📄 Licença
Este projeto foi desenvolvido exclusivamente para fins acadêmicos e de estudo.
