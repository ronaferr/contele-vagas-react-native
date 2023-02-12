# My GPS - Tracking / Contele

# Contexto
Este projeto trata-se de um teste para o processo seletivo da Contele, a aplicação consiste em  uma ferramenta que obtem a localização no intervalo de tempo determinado e quando online sincroniza com o banco de dados, caso esteja offline, salva os pacotes com a localização no estado global da aplicação.


![Screenshot 2023-02-12 18 17 06](https://user-images.githubusercontent.com/98190573/218337809-e55c436a-cf63-4acf-9218-3034716214f3.png)

## Técnologias usadas

Front-end:
> Desenvolvido usando: React Native, Hooks, Expo, Context Api, ES6
  * React Native: Utilizei o Expo para inicializar a aplicação, ela é boa pois já cria modelos tanto para Android como IOS e é mais rapida a configuração;
  * Hooks: Utilizei Hooks para salvamento no estado das telas;
  * Context Api: Utilizei para realizar o salvamento global da aplicação, guardar os packs que ainda não foram sincronizados;
  * Utilizei NetInfo para fazer a verificação se o aparelho está conectado com a rede;
  * Para pegar a localização foi utilizado o Expo Location;
  

Back-end:
> Api do banco de dados foi fornecida pela Contele, está dockerizada.

## Logica de Desenvovimento
* Localização: ao escolher o intervalo e ativar o botão toggle, será ativado um setInterval com o valor escolhido, dentro dele o Expo Location vai pegar a localização e salvará no estado global da aplicação, até ser desativado;

![Screenshot 2023-02-12 18 24 54](https://user-images.githubusercontent.com/98190573/218338097-65c3b390-0068-474b-91b9-3dc1fdb387c3.png)

* Sincronização: a todo momento será verificado se possui conexão com a rede, caso positivo, será verificado se tem packs no estado global e será sincronizado com a api;


![Screenshot 2023-02-12 18 26 18](https://user-images.githubusercontent.com/98190573/218338215-3ce2fa80-20a8-4b87-8db8-92adaba042f4.png)


* Renderização dos Status: será feito um fecth da api com os packs sincronizados e será verificado se possuí packs no estado global, será mesclado os dois arrays de dados e verificado através dos ids da Api para definir o status da sincronização sendo "Sincronizado ou Pendente sincronizar"

![Screenshot 2023-02-12 18 29 11](https://user-images.githubusercontent.com/98190573/218338347-76793fa8-aeb4-48e6-9d46-55760a71dfbb.png)


## Instalando Dependências

> Backend
```bash
cd react-native/ 
npm install
docker-compose up --build
``` 
> Frontend
```bash
cd react-native/contele-app/
npm install
``` 
## Executando aplicação

* Variáveis de ambiente .env:
  ```
    No diretorio react-native/contele-app/
    Renomeie o arquivo .env.exemple para .env e adicione o ip da sua máquina

    IP=000.000.000.00 exemplo
  ```

* Para rodar o front-end:

  ```
    cd react-native/contele-app/ && expo start
  ```
  ```
    Pode ser utlizado outros dois comandos para rodar o front end
     cd react-native/contele-app/ && npm run start:tunnel ou
     cd react-native/contele-app/ && npm run start:local
  ```

## Arquitetura

* Separei os compomentes e telas, cada um com seu arquivo de estilos para ser mais facil de localizar;
* Provider/Context, Fecth e Routes foram separados em pastas diferentes, para ficar mais organizado;

  ![Screenshot 2023-02-12 17 44 51](https://user-images.githubusercontent.com/98190573/218336149-12c78b92-4af4-47d7-889b-229ff3840b5c.png)

