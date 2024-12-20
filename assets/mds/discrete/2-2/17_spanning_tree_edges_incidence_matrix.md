Это, видимо, относится к "авторскому" методу лектора - метод вычеркивания. Я буду использовать ранее нам знакомый граф (притворимся, что это граф, а не орграф) и его матрицу инцидентности:
![[discrete-2-2-2.svg]]
$$\array{
  & 1' & 2' & 3' & 4' & 5' & 6' & 7' \\
[1] & 1 & 0 & 0 & 0 & 1 & 1 & 0 \\
[2] & 1 & 1 & 1 & 1 & 0 & 0 & 0 \\
[3] & 0 & 1 & 1 & 0 & 1 & 0 & 1 \\
[4] & 0 & 0 & 0 & 1 & 0 & 1 & 1 \\
}$$
Выберем любую вершину, с которой мы хотим начать построение остовного дерева. Пусть будет вершина $[1]$. Зачеркиваем всю строчку вершины $[1]$.
$$\array{
  & 1' & 2' & 3' & 4' & 5' & 6' & 7' \\
[1] & \cancel1 & \cancel0 & \cancel0 & \cancel0 & \cancel1 & \cancel1 & \cancel0 \\
[2] & 1 & 1 & 1 & 1 & 0 & 0 & 0 \\
[3] & 0 & 1 & 1 & 0 & 1 & 0 & 1 \\
[4] & 0 & 0 & 0 & 1 & 0 & 1 & 1 \\
}$$
Теперь выбираем столбик (ребро), у которого осталась ***только одна единичка***. Это будет либо $1'$, либо $5'$, либо $6'$. Выберем $1'$ - тогда зачеркиваем столбик $1'$, тем самым добавляя ребро $1'$ в наш остов.
$$\array{
  & 1' & 2' & 3' & 4' & 5' & 6' & 7' \\
[1] & \cancel1 & \cancel0 & \cancel0 & \cancel0 & \cancel1 & \cancel1 & \cancel0 \\
[2] & \cancel1 & 1 & 1 & 1 & 0 & 0 & 0 \\
[3] & \cancel0 & 1 & 1 & 0 & 1 & 0 & 1 \\
[4] & \cancel0 & 0 & 0 & 1 & 0 & 1 & 1 \\
}$$
Это повлечет собой добавление вершины $[2]$, поэтому вычеркиваем всю вторую строчку, и повторяем все заново...
$$\array{
  & 1' & 2' & 3' & 4' & 5' & 6' & 7' \\
[1] & \cancel1 & \cancel0 & \cancel0 & \cancel0 & \cancel1 & \cancel1 & \cancel0 \\
[2] & \cancel1 & \cancel1 & \cancel1 & \cancel1 & \cancel0 & \cancel0 & \cancel0 \\
[3] & \cancel0 & 1 & 1 & 0 & 1 & 0 & 1 \\
[4] & \cancel0 & 0 & 0 & 1 & 0 & 1 & 1 \\
}$$
Возможные кандидаты на ребра - все, кроме $7'$ (и $1'$, его уже добавили). Выберем, например, $2'$. Тогда зачеркиваем и третью строчку:
$$\array{
  & 1' & 2' & 3' & 4' & 5' & 6' & 7' \\
[1] & \cancel1 & \cancel0 & \cancel0 & \cancel0 & \cancel1 & \cancel1 & \cancel0 \\
[2] & \cancel1 & \cancel1 & \cancel1 & \cancel1 & \cancel0 & \cancel0 & \cancel0 \\
[3] & \cancel0 & \cancel1 & \cancel1 & \cancel0 & \cancel1 & \cancel0 & \cancel1 \\
[4] & \cancel0 & \cancel0 & 0 & 1 & 0 & 1 & 1 \\
}$$
Ну и закончим выбором ребра $4'$, и зачеркнем весь граф. Таким образом, мы построили остовное дерево из ребер $1'$, $2'$ и $4'$. В этом алгоритме у нас было много выборов, что и показывает возможное количество различных остовных деревьев.

Аналогично можно проверить, образует ли остовное дерево выбранное множества ребер - прогнать алгоритм и посмотреть, можно ли зачеркнуть всю матрицу.