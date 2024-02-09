# Projeto App Demo Airbnb

## Descrição do Projeto

O Airbnb Demo é um aplicativo desenvolvido em React Native que oferece uma experiência semelhante ao aplicativo oficial do Airbnb, com funcionalidades adicionais e aprimoradas. Este projeto abrange desde a configuração básica até a implementação de recursos avançados, como autenticação de usuários, animações fluidas com Reanimated, efeitos de parallax, exibição de uma folha inferior e integração com mapas, incluindo clusters para agrupar marcadores próximos.

## Principais Funcionalidades

- **Roteamento Baseado em Arquivos com Expo:** Utilização do roteamento baseado em arquivos fornecido pelo Expo para uma navegação simples e intuitiva entre as telas do aplicativo.

- **Autenticação de Usuários com Clerk:** Implementação do sistema de autenticação utilizando Clerk para garantir a segurança das contas dos usuários.

- **Sign-in com Apple e Google Auth:** Adição da opção de login utilizando as contas da Apple e do Google para uma experiência de autenticação ainda mais conveniente para os usuários.

- **Animações com Reanimated:** Utilização da biblioteca Reanimated para criar animações fluidas e responsivas em todo o aplicativo.

- **Efeito de Parallax:** Implementação de efeitos de parallax para proporcionar uma experiência visual imersiva ao rolar pelas telas.

- **Exibição de uma Folha Inferior:** Adição de uma folha inferior para exibir informações adicionais ou ações contextuais em determinadas telas.

- **Mapa com Agrupamento de Marcadores (Cluster):** Incorporação de um mapa para exibir locais e atrações, com a funcionalidade de agrupamento de marcadores para uma visualização mais organizada em áreas densamente povoadas.

## Dependências

O projeto utiliza diversas dependências para garantir seu funcionamento suave:

- **@clerk/clerk-expo**: ^0.20.1
- **@expo/vector-icons**: ^14.0.0
- **@gorhom/bottom-sheet**: ^4.6.0
- **@react-navigation/native**: ^6.0.2
- **expo**: ^50.0.4
- **expo-blur**: ^12.9.1
- **expo-font**: ~11.10.2
- **expo-haptics**: ^12.8.1
- **expo-image-picker**: ^14.7.1
- **expo-linking**: ~6.2.2
- **expo-router**: ^3.4.6
- **expo-secure-store**: ~12.8.1
- **expo-splash-screen**: ^0.26.4
- **expo-status-bar**: ~1.11.1
- **expo-system-ui**: ~2.9.3
- **expo-web-browser**: ^12.8.2
- **react**: 18.2.0
- **react-dom**: 18.2.0
- **react-native**: 0.73.2
- **react-native-gesture-handler**: ^2.14.1
- **react-native-map-clustering**: ^3.4.2
- **react-native-maps**: ^1.8.0
- **react-native-modern-datepicker**: ^1.0.0-beta.91
- **react-native-reanimated**: ^3.6.2
- **react-native-safe-area-context**: 4.8.2
- **react-native-screens**: ~3.29.0
- **react-native-web**: ~0.19.6
- **@babel/core**: ^7.20.0
- **@types/react**: ~18.2.45
- **@types/react-native-modern-datepicker**: ^1.0.5
- **jest**: ^29.2.1
- **jest-expo**: ~50.0.1
- **react-test-renderer**: 18.2.0
- **typescript**: ^5.1.3

## Como Executar o Projeto

1. Clone este repositório em sua máquina local.
2. Certifique-se de ter o Node.js e o npm (ou yarn) instalados.
3. Instale as dependências do projeto utilizando o seguinte comando:

```bash
npm install
# ou
yarn install
```

4. Crie um arquivo `.env` na raiz do projeto com as seguintes chaves e seus respectivos valores:

```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=seu_valor_aqui
```

Certifique-se de substituir `seu_valor_aqui` pelos valores corretos de cada chave.

6. Inicie o servidor Expo com o seguinte comando:

```bash
expo start
```

7. Acesse o aplicativo utilizando o aplicativo Expo Go em seu dispositivo móvel ou um emulador, e explore todas as funcionalidades do Airbnb Demo, incluindo autenticação, navegação, animações, mapa com agrupamento de marcadores e muito mais.
