## Для матриц
Приписывание столбца к матрице не меняет ее ранга тогда и только тогда $(\Leftrightarrow)$, когда этот столбец - линейная комбинация столбцов матрицы. (Для строк аналогично)

Теорема естественно понимается: если столбик можно выразить через уже имеющиеся столбцы матрицы, то соотвественно он будет лежать в пространстве, описываемом этими базисными векторами. Чтобы ранг расширился, новый столбик (вектор) должен лежать в новом пространстве, и значит не может быть описанным имеющимися столбиками.

(линейная комбинация $\Rightarrow$ не меняет ранга): рассмотрим матрицу, полученную приписыванием столбика $b$ к матрице $A$: $(A|b)$. Раз $b$ является линейной комбинацией, с помощью элементарных преобразований можно вычесть из $b$ линейную комбинацию столбиков $A$, так что получится матрица $(A|0)$, причем ранг этой матрицы не изменится (из-за элементарных преобразований, билет #47). Но нулевой столбик на ранг никак влиять не может, поэтому $$\rg (A|b) = \rg (A|0) = \rg A$$
(не меняет ранга $\Rightarrow$ линейная комбинация): если ранг не изменяется при добавление столбца, то $\rg (A|b) = \rg A$, то $A$ является базисной подматрицей что в матрице $A$ (очевидно), так и в матрице $(A|b)$, по свойствам ранга. Но если $A$ является базисной матрицей, то столбик $b$ (как и любой столбик матрицы $(A|b)$) раскладывается по базисной матрице - то есть, существует линейная комбинация столбиков $A$, что равна столбику $b$.

Аналогично и для строк, если посмотреть на транспонированные матрицы.
## Для СЛАУ
Система линейных уравнений совместна (имеет решения) тогда и только тогда, когда ранг матрицы системы $A$ равен рангу расширенной матрицы (матрицы системы, дополненной справа столбиком свободных членов $(A|b)$).
$$\cases{
a_{11} x_1 + a_{12}x_2 + \ldots + a_{1n} = b_1 \\
a_{21} x_1 + a_{22}x_2 + \ldots + a_{2n} = b_2 \\ 
\ldots \\
a_{m1} x_1 + a_{m2}x_2 + \ldots + a_{mn} = b_m
}$$
$$A = \pmatrix{a_{11} & a_{12} & \ldots & a_{1n} \\ a_{21} & a_{22} & \ldots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \ldots & a_{mn}}, \ \ \ \ \ \ \ \ \ b=\pmatrix{b_1 \\ b_2 \\ \vdots \\ b_m}$$
$$\rg A = \rg (A|b)$$
Смысл теоремы для СЛАУ не меняется - точно так же, если $b$ лежит в "базисном пространстве" векторов $A$, и его вообще возможно выразить как линейную комбинацию их, то решения будут. Это базисное пространство и проверяется с помощью ранга. Иначе, как не крутись, нельзя выразить этот вектор через вектора матрицы $A$, прямо как мы не можем строить 4д объекты в нашем 3д мире.
## Бонус - ранг произведения
Ранг произведения $AB$ не превосходит ранги матриц $A$ и $B$. Геометрически легко понять - если после трансформации матрица ужмет пространство, другая матрица уже не сможет его "расжать" обратно - поэтому ранг ограничен минимумом из рангов этих двух матриц.

Мы можем составить матрицу $D = (A|AB)$. $AB$ - подматрица $D$, поэтому $\rg AB \leq \rg D$. При этом столбики $AB$ - линейные комбинации столбиков $A$, поэтому по теореме Кронекера-Капелли, $\rg D = \rg A$. Получается, $\rg AB \leq \rg A$. Аналогично доказывается и для $\rg AB \leq \rg B$.

Более того, если $A$ - невырожденная матрица, то $$\rg AB = \rg B \ \ \ \ \ \ \ \ \ \rg CA = \rg C$$
Доказательство: $\rg B = \rg A^{-1}(AB) \leq \rg AB$, и $\rg AB \leq \rg B$ по теореме выше. Значит, $\rg B = \rg AB$. Доказательство для второго равенства аналогично.