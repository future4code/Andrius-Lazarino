### Exercício 1
a) É um valor que representa uma chave primária de outra tabela ou seja um referência.

b)
```MySql
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES movies(id)
);

INSERT INTO Rating (id, comment, movie_id, rate)
VALUES(
  "003", 
  "Filme mais ou menos",
  "13",
  6.6
);
```

c) ```Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`sagan_andrius_db`.`Rating`,
CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`))```

Retorna um erro informando que não pode atualizar ou adicionar uma linha de uma chave estrangeira porque houve uma falha
na chave estrangeira.

d)
```MySql
ALTER TABLE movies DROP COLUMN Rating;
```

e) ```Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`sagan_andrius_db`.`Rating`, 
CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`))```

Retorna um erro informando que não é possivel excluir ou atualizar uma linha uma linha pai.


### Exercício 2
a) Cria uma especie de tabela auxiliar onde cada linha possui duas colunas com ids que permite referenciar em cada linh
a um ator a vários filmes ou vários filmes à um ator.

b)
```MySql
INSERT INTO MovieCast (movie_id, actor_id) VALUES ("12","005");
```

c) ```Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`sagan_andrius_db`.`MovieCast`
, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))```

Retorna um erro informando que não é possivel atualizar uma linha filho porque houve uma falha com a chave estrangeira.

d) ```Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`sagan_andrius_db`.`MovieC
ast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))```
Não é possivel apagar uma entidade que é referenciada em outras tabelas N:M.


### Exercício 3
a) O operador ON é parecido com o where e impõe uma condição para a união de duas linhas que que normalmente são duas ch
ves primárias.

b) 
```MySql
SELECT m.name, m.id, r.rate FROM movies m 
INNER JOIN Rating r ON m.id = r.movie_id;
```


### Exercício 4
a)
```MySql
SELECT m.name, m.id, r.rate, r.comment FROM movies m LEFT JOIN Rating r ON m.id = r.id;
```

b)
```MySql
SELECT m.id, m.name, mc.actor_id FROM movies  m RIGHT JOIN MovieCast mc ON m.id = mc.movie_id;
```

c)
```MySql
SELECT AVG(r.rate), m.name FROM Rating r RIGHT JOIN  movies m ON r.movie_id = m.id GROUP BY m.name;
```

### Exercício 5
a) Porque precisamos pegar duas chaves primárias que estão salvas em uma tabela auxiliar para uni-las.

b) 
```MySql
SELECT m.name as "Nome do filme", a.id as "ID do ator", a.name as "Nome do ator" FROM movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

c) Ela retorna todos os filmes mesmo que não tenham atores

d) 
```MySql
SELECT m.name as "Nome do filme", a.name as "Nome do ator", r.rate as "Nota", r.comment as "Comentario"
FROM movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON mc.actor_id = a.id
JOIN Rating r ON m.id = r.movie_id;
```

### Exercício 6
a) É uma relação M:N

b) 
```MySql
CREATE TABLE Oscar (
	id VARCHAR(255) PRIMARY KEY,
    oscar_name VARCHAR(255) NOT NULL,
    movie_id VARCHAR(255) NOT NULL,
    date_win DATE NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES movies(id)
);
```

c)
```MySql
INSERT INTO Oscar(id, oscar_name, movie_id, date_win) VALUES("002", "Óscar de melhor direção", "010","2020-01-06");
```

d)
```MySql
SELECT m.name as "Nome do filme", o.oscar_name as "Óscar" FROM movies m JOIN Oscar o ON m.id = o.movie_id
```