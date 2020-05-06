### Exercício 1
a) Apaga a coluna salary da tabela Actors.

b) Modifica o nome e as definições da coluna gender.

c) Modifica as definições definições da coluna gender sem alterar seu nome.

d) ```ALTER TABLE Actor CHANGE gender gender VARCHAR(100);```	3 row(s) affected Records: 3  Duplicates: 0  Warnings: 0	0,230 sec


### Exercício 2
a) ```UPDATE Actor SET name = "Andrius Lazarino", birth_date = "1993-12-23" WHERE id = 003```	1 row(s) affected Rows matched: 1  Changed: 1  Warnings: 0	0,037 sec

b) ```UPDATE Actor SET name = "JULIANA PÃES" WHERE name = "Juliana Paes"```	1 row(s) affected Rows matched: 1  Changed: 1  Warnings: 0	0,042 sec
```UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PÃES"```	1 row(s) affected Rows matched: 1  Changed: 1  Warnings: 0	0,038 sec

c) ```UPDATE Actor SET salary = 19000, birth_date = "1889-04-16", gender = "male" WHERE name = "Charlie Chaplin"```	1 row(s) affected Rows matched: 1  Changed: 1  Warnings: 0	0,038 sec

d) ```UPDATE Actor SET salary = 3333 WHERE id = 66```	0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0	0,025 sec
Retorna que nenhuma linha foi alterada pois não foi encontrado nada.


### Exercício 3
a) ```SELECT * from Actor;``` LIMIT 0, 1000	5 row(s) returned	0,025 sec / 0,000014 sec

b) ```DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;```


### Exercício 4
a) ```SELECT MAX(SALARY) FROM Actor;```

b) ```SELECT MIN(salary) FROM Actor;```

c) ```SELECT COUNT(*) FROM Actor WHERE gender = "female";```

d) ```SELECT SUM(SALARY) FROM Actor;```


### Exercício 5
a) A função COUNT(*) conta todas as linhas retornadas no SELECT e a GROUP BY agrupa por generos o resultado da função COUNT(*).

b) ```SELECT id, name FROM Actor ORDER BY name DESC;```

c) ```SELECT name, salary FROM Actor ORDER BY salary ASC;```

d) ```SELECT name, salary FROM Actor ORDER BY salary DESC LIMIT 3;```

e) ```SELECT AVG(salary), gender FROM Actor GROUP BY gender;```

### Exercício 6
a) ```ALTER TABLE movies ADD playing_limit_date DATE;```

b) Foi necessário criar a tabela antes com o tipo INT 
```ALTER TABLE movies CHANGE rating rating FLOAT;```

c)
```UPDATE movies SET playing_limit_date = "2020-10-23" WHERE name = "Cidade de Deus";```
```UPDATE movies SET playing_limit_date = "2020-01-09" WHERE name = "Se eu Fosse Você";```

d)
```DELETE FROM movies WHERE id = 001;```
```DELETE FROM movies WHERE id = 002;```
```SELECT * FROM movies WHERE id = 001``` LIMIT 0, 1000	0 row(s) returned	0,026 sec / 0,000032 sec
Simplesmente retorna que nenhuma linha foi deletada porque não existe mais esse id na tabela


### Exercício 7
a)
```SELECT COUNT(*) FROM movies WHERE evaluation > 7.5;```
2 filmes

b)
```SELECT AVG(evaluation) FROM movies;```
Média de 8.5

c)
```SELECT name FROM movies WHERE playing_limit_date > CURDATE();```
1 filme me cartaz

d)
```SELECT name FROM movies WHERE release_date > CURDATE();```

e)
```SELECT MAX(evaluation) FROM movies;```
A maior nota é 9

f)
```SELECT MIN(evaluation) FROM movies;```
A menor nota é 8


### Exercício 8
a) ```SELECT name FROM movies ORDER BY name ASC;```

b) ```SELECT name FROM movies ORDER BY name DESC LIMIT 5;```

c) ```SELECT name, release_date FROM movies ORDER BY release_date DESC LIMIT 3;```

d) ```SELECT name, evaluation FROM movies ORDER BY evaluation	DESC LIMIT 3;```