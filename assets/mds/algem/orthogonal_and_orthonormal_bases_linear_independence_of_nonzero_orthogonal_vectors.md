Определение не новое нам.
Базис $e = (e_1, e_2, \ldots, e_n)$ называется *ортогональным*, если для любых $i \neq j \Rightarrow (e_i, e_j) = 0$ (все базисные векторы ортогональны друг другу).
Если при этом длина каждого базисного вектора равна единице - то есть, $|e_i| = (e_i, e_i) = 1$ - то такой базис называется *ортонормированным*.

Например, базис из столбцов является ортонормированным:
$$e_1 = \pmatrix{1 \\ 0 \\ \vdots \\ 0}, \ \ \ \ e_2 = \pmatrix{0 \\ 1 \\ \vdots \\ 0}, \ \ \ \ \ldots, \ \ \ \ e_n = \pmatrix{0 \\ 0 \\ \vdots \\ 1}, \ \ \ \ $$
Матрица Грама, составленная из ортогонального базиса, будет диагональной:
$$\Gamma = \pmatrix{(e_1, e_1) & 0 & \ldots & 0 \\ 0 & (e_2, e_2) & \ldots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \ldots & (e_n, e_n)}$$
А если ее составить из ортонормированного базиса, то она и вовсе будет единичной.
В ортонормированном базисе живется куда проще, и благодаря единичности матрицы Грама, формула для нахождения скалярного произведения двух векторов упрощается донельзя:
$$(x,y) = x_1y_1 + x_2y_2 + \ldots + x_ny_n$$
Это уже звучит очень похоже с тем, что было в начале изучения АлГема.
Длина же находится тоже просто:
$$|x| = \sqrt{x^2_1 + x_2^2 + \ldots + x_n^2}$$
## Линейная независимость ненулевых ортогональных векторов
Любая система из ненулевых ортогональных векторов будет линейно независима:
Возьмем систему таких векторов $e_1, e_2, \ldots, e_n$: $i \neq j \Rightarrow (e_i, e_j) = 0$.
Посмотрим на линейную комбинацию этих векторов:
$$\alpha_1 e_1 + \alpha_2e_2 + \ldots + \alpha_n e_n = 0$$
Умножаем левую и правую части скалярно на $e_i$:
$$\array{(\alpha_1 e_1 + \alpha_2e_2 + \ldots + \alpha_n e_n, e_i) = (0,e_i) \\ \alpha(e_1, e_i) +\ldots + \alpha_i(e_i, e_i) + \ldots + \alpha_n(e_n, e_i) = 0}$$
Так как все векторы ортогональны, все скалярные произведения за исключением $(e_i, e_i)$ будут равны нулю. Остается только
$$\alpha_i (e_i, e_i) = 0$$
Но мы знаем, что $(e_i, e_i) \neq 0$, ведь $e_i \neq 0$ по условию. Значит, $\alpha_i = 0$. Умножая линейную комбинацию на $e_i$ для всех $i = 1, \ldots, n$ мы покажем, что все $\alpha_1 = \ldots = \alpha_n = 0$, что значит, что линейная комбинация тривиальная, а значит векторы действительно линейно независимы.
