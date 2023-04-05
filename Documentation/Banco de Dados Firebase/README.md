# Documentação de RDL para o Firestore

Este é um exemplo de código em RDL (Regras de Segurança do Firebase) que define as permissões de acesso ao banco de dados do Firestore. Este conjunto de regras define permissões para um aplicativo que possui usuários comuns, usuários administradores e listas de tarefas para cada usuário comum.

## Regras de Segurança

As regras de segurança são escritas em RDL e determinam quem pode ler e gravar dados no Firestore. Cada conjunto de regras é composto por uma série de "matchers", que correspondem a um caminho específico dentro do banco de dados.

## Matcher padrão

A primeira regra é um matcher padrão que permite que qualquer usuário leia e escreva em qualquer documento no Firestore. Esta regra deve ser usada com cuidado, pois permite que qualquer pessoa acesse e modifique todos os dados no banco de dados.

```

match /{document=**} {
  allow read, write: if true;
}


```

## Matcher de usuários

O segundo matcher define as permissões de acesso para a coleção de usuários. Somente usuários autenticados que possuem o tipo de usuário "admin" podem ler e escrever dados de usuários.

```

match /users/{userId} {
  allow read, write: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.type == 'admin';
}


```

## Matcher de tarefas de usuários

O terceiro matcher define as permissões de acesso para a coleção de tarefas de usuário. Somente usuários autenticados podem ler e gravar dados de suas próprias tarefas.

```

match /user_tasks/{userTaskId} {
  allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
}


```

## Matcher de tarefas

O último matcher define as permissões de acesso para a coleção de tarefas. Usuários autenticados que possuem o tipo de usuário "comum" ou "admin" podem ler dados de tarefas. Somente usuários administradores podem gravar novas tarefas.

```
match /tasks/{taskId} {
  allow read: if request.auth != null && (get(/databases/$(database)/documents/users/$(request.auth.uid)).data.type == 'common' || get(/databases/$(database)/documents/users/$(request.auth.uid)).data.type == 'admin');
  allow write: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.type == 'admin';
}

```

# Conclusão

O código RDL acima mostra como definir regras de segurança no Firestore para um aplicativo com usuários comuns e administradores, e listas de tarefas para cada usuário comum. Para personalizar ainda mais essas regras, consulte a documentação oficial do Firebase.
