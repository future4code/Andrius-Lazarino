### Exercício 1
a) É a melhor opção porque possui uma combinação muito maior do que os números.

### Exercício 2
a) É criado uma conexão com o baco de dado e a partir dessa conexão a função createUser insere uma novo ususário na tabe
la userTableName.

b) 
```MySql
CREATE TABLE userTableName (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

d)
```TypeScript
const db = new UserDatabase().createUser("001", "andrius@email.com", "123456")
```

