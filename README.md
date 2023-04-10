<h1 align="center"> Documentação do Formulário de Cadastro</h1>

<p align="justify"> O formulário de cadastro foi criado para que o usuário possa ter seus dados cadastrados e posteriormente ter acesso ao aplicativo.</p>

<h2> Inputs</h2>
<p align="justify"> Foram criados três Inputs para os campos: Username, email e password. Em cada Input será fornecido ao usuário uma dica do valor a ser digitado, o valor será armazenado. No Input do password, usaremos a funcionalidade secureTextEntry que em caso de verdadeiro, irá ocultar o texto digitado. Todos os Inputs serão estilizados da mesma forma.</p>

```
        <TextInput // Input do nome do usuário
          placeholder="Nome"
          placeholderTextColor="#becbff"
          style={styles.textInput}
          onChangeText={setUsername}
          value={username}
        />

        <TextInput // Input do email do usuário
          placeholder="Email"
          placeholderTextColor="#becbff"
          style={styles.textInput}
          onChangeText={setEmail}
          value={email}
        />

        <TextInput // Input da senha do usúario
          placeholder="Senha"
          placeholderTextColor="#becbff"
          style={styles.textInput}
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
```

<h2> Button </h2>
<p align="justify"> Usaremos do TouchableOpacity para que responda com opacidade quando clicar no botão ACESSAR, quando o botão for clicado, todos os dados serão puxados e mostrados no terminal. Foram criados dois blocos de estilização para estilizar ao botão e ao texto do botão.</p>

```
        <TouchableOpacity style={styles.formButton} onPress={handleSignIn}>
          <Text style={styles.buttonText}>ACESSAR</Text>
        </TouchableOpacity>
```

<h1>Estilização</h1>
<p align="justify"> No elemento text temos alguns comandos de estilização como, o título, com tamanho de fonte, peso ou intensidade,a cor, o alinhamento, e a distância entre o conteúdo e suas bordas.</P>

```
  text: {
    fontSize: 40,
    fontWeight: "800", 
    color: "#3E0CB3",
    alignItems: "center", 
    padding: 35,
    paddingHorizontal: 35
  },
```
<p align="justify"> No elemento textInput temos alguns comandos de estilização como, altura, borda da largura, cor da borda, a margin, borda arredondada, e a distância entre o conteúdo e suas bordas.</p>

```
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: "#becbff",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    paddingLeft: 12
  },
```

<p align="justify"> No elemento formButton temos alguns comandos de estilização como, cor de fundo do botão, altura, alinhamento, borda arredondada, margem, borda de largura, cor da borda, estilização de sombra do botão.</p>

```
  formButton: {
    backgroundColor: "#3E0CB3",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "white",
    shadowColor: "#000", 
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
```
<p align="justify">No elemento buttonText temos alguns comandos de estilização para o texto do botão como, tamanho da fonte, largura da fonte, a cor e o espaçamento entre as letras.</p>

``` 
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    letterSpacing: 0.5
  },
```
<h1>RESULTADO<h1>
<img alt="GitHub" src="https://user-images.githubusercontent.com/128649731/230917743-5243b631-d5f5-4ca4-93ca-b6f3132c2e42.jpg" height=600>

<h2>Conclusão</h2>
<p align="justify"> O formulário de cadastro compõem 3 campos de Input, onde o usuário poderá digitar dados, como: nome, email e senha. Possui um botão que ao ser tocado pelo usuário, seus dados serão enviados, e mostrados no terminal.</p>
