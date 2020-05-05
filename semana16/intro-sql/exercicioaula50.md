### Exercício 1
a) FLOAT é usado para definir o tipo do campo que armazena números com ponto flutuantes,
DATE tipo do campo que armazena datas, NOT NULL  define que o campo não pode ser nulo e 
PRIMARY KEY é a chave primaria que também não pode ser NULL  e tem que unica.

b) SHOW DATABASES mostra os banco da dados e SHOW TABLES mostra as tabelas.
SHOW TABLES mostra as tabelas do banco selecionado.

c) Ambos comandos retornam em erro

### Exercício 2
a) ```INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES(   "002",    "Glória Pires",   1200000,   "1963-08-23",    "male" )```	1 row(s) affected	0,046 sec.

b) ```INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES(   "002",    "Andrius",   1200000,   "1963-08-23",    "male" )```	Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'	0,028 sec
Retorna erro de chave duplicada na PRIMARY KEY.

### Exercício 3
a) ```SELECT * from Actor WHERE gender = "female";```

b) ```SELECT salary name from Actor WHERE name = "Tony Ramos";```

c) Não retorna nenhuma linha pois não tem nenhum campo invalid

d) ```SELECT id, name, salary from Actor WHERE salary < 500000``` LIMIT 0, 1000	1 row(s) returned	0,027 sec / 0,000020 sec

e) ```SELECT id, name from Actor WHERE id = "002";``` Variável nome errada o correto é name


### Execício 4
a) A query retorna todas as linhas onde os dados da coluna name que começam com A ou J e a coluna salary maior que 300000.

b) ```SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;```

c) ```SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%");```

d) ```SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;```

### Exercício 5
a)
```
CREATE TABLE movies (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsis VARCHAR (255) NOT NULL,
    release_date DATE NOT NULL,
    evaluation INT NOT NULL
);
```
Cria uma tabela com o nome movies que contem 5 colunas sendo elas: ID como chave primaria, name,sysnopsis, release_date e evaluation onde os campos não aceitam valores nulos.

b) 
```
INSERT INTO movies (id, name, synopsis, release_date, evaluation)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  6
);
```

c)
```
INSERT INTO movies (id, name, synopsis, release_date, evaluation)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);
```

d)
```MySQL
INSERT INTO movies (id, name, synopsis, release_date, evaluation)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  08
);
```

e)
```MySQL
INSERT INTO movies (id, name, synopsis, release_date, evaluation)
VALUES(
  "004", 
  "Cidade de Deus",
  "Nas favelas do Rio de Janeiro dos anos 1970, dois rapazes seguem caminhos diferentes. Buscapé é um fotógrafo que registra o cotidiano violento do lugar, e Zé Pequeno é um ambicioso traficante que usa as fotos de Buscapé para provar como é durão.",
  "2002-08-30", 
  09
);
```


### Exercício 6
a) ```SELECT id, name, evaluation FROM movies WHERE id = 2;```

b) ```SELECT id, name, evaluation FROM movies WHERE name LIKE "Cidade de Deus";```

c) ```SELECT id, name, evaluation FROM movies WHERE evaluation >=7;```


### Exercício 7
a) ```SELECT * FROM movies WHERE (name LIKE "%vida%") OR (synopsis LIKE "%vida%");```

b) ```SELECT * FROM movies WHERE (name LIKE "%favela%") OR (synopsis LIKE "%favela%");```

c) ```SELECT * FROM movies WHERE release_date < "2020-05-04";```

d) ```SELECT * FROM movies WHERE ((name LIKE "%favela%") OR (synopsis LIKE "%favela%")) AND evaluation > 7;```