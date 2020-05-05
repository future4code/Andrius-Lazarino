### Exercício 1
a) Apaga a coluna salary da tabela Actors.

b) Modifica o nome e as definições da coluna gender.

c) Modifica as definições definições da coluna gender sem alterar seu nome.

d) 14:25:52	ALTER TABLE Actor CHANGE gender gender VARCHAR(100)	3 row(s) affected Records: 3  Duplicates: 0  Warnings: 0	0,230 sec


### Exercício 2
a) 14:41:28	UPDATE Actor SET name = "Andrius Lazarino", birth_date = "1993-12-23" WHERE id = 003	1 row(s) affected Rows matched: 1  Changed: 1  Warnings: 0	0,037 sec

b) 14:32:56	UPDATE Actor SET name = "JULIANA PÃES" WHERE name = "Juliana Paes"	1 row(s) affected Rows matched: 1  Changed: 1  Warnings: 0	0,042 sec
14:33:51	UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PÃES"	1 row(s) affected Rows matched: 1  Changed: 1  Warnings: 0	0,038 sec

c) 14:38:20	UPDATE Actor SET salary = 19000, birth_date = "1889-04-16", gender = "male" WHERE name = "Charlie Chaplin"	1 row(s) affected Rows matched: 1  Changed: 1  Warnings: 0	0,038 sec

d) 14:39:33	UPDATE Actor SET salary = 3333 WHERE id = 66	0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0	0,025 sec
Retorna que nenhuma linha foi alterada pois não foi encontrado nada.


### Exercício 3
a) 14:44:19	SELECT * from Actor LIMIT 0, 1000	5 row(s) returned	0,025 sec / 0,000014 sec

b) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;


### Exercício 4
a) SELECT MAX(SALARY) FROM Actor;

b) SELECT MIN(salary) FROM Actor;

c) SELECT COUNT(*) FROM Actor WHERE gender = "female";

d) SELECT SUM(SALARY) FROM Actor;


### Exercício 5
a) A função COUNT(*) conta todas as linhas retornadas no SELECT e a GROUP BY agrupa por generos o resultado da função COUNT(*).

b) SELECT id, name FROM Actor ORDER BY name DESC;

c) SELECT name, salary FROM Actor ORDER BY salary ASC;

d) SELECT name, salary FROM Actor ORDER BY salary DESC LIMIT 3;

e) SELECT AVG(salary), gender FROM Actor GROUP BY gender;

### Exercício 6
a) ALTER TABLE movies ADD playing_limit_date DATE;

b) 
