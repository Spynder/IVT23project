## Линейность определителя
Скажем существует матрица $A$. Назовем некоторую строку этой матрицы как $a$. Создадим две новые матрицы $B$ и $C$, полученные заменой в матрице $A$ строки $a$ на строки $b$ и $c$ соответственно.
$$A = \begin{pmatrix}a_{11} & \ldots & a_{1n} \\ \vdots & \ddots & \vdots \\ [a_{p1} & \ldots & a_{pn}] \\ \vdots & \ddots & \vdots \\ a_{n1} & \ldots & a_{nn} \end{pmatrix}$$
$$B = \begin{pmatrix}a_{11} & \ldots & a_{1n} \\ \vdots & \ddots & \vdots \\ [b_{p1} & \ldots & b_{pn}] \\ \vdots & \ddots & \vdots \\ a_{n1} & \ldots & a_{nn} \end{pmatrix}, \ \ \ \ \ C = \begin{pmatrix}a_{11} & \ldots & a_{1n} \\ \vdots & \ddots & \vdots \\ [c_{p1} & \ldots & c_{pn}] \\ \vdots & \ddots & \vdots \\ a_{n1} & \ldots & a_{nn} \end{pmatrix}$$

Если $a = \alpha b + \beta c$, то выполняется $\det A = \alpha \det B + \beta \det C$. Это свойство называется *линейностью определителя по строке* (или столбцу)
Доказательство следует напрямую из линейности операций над числами: разложим определитель матрицы $A$ по строке $a$ (обозначим ее номер за $p$):
$$\det A = \sum_{j=1}^n (-1)^{p+j}a_{pj} \det \bar M^p_j = $$
$$= \sum_{j=1}^n (-1)^{p+j}(\alpha b_{pj} + \beta c_{pj}) \det \bar M^p_j = $$
Разбиваем эту сумму на сумму двух разбиений определителей матриц по строке $p$:
$$= \alpha\sum_{j=1}^n (-1)^{p+j} b_{pj} \det \bar M^p_j + \beta\sum_{j=1}^n (-1)^{p+j} c_{pj} \det \bar M^p_j = $$
$$= \alpha \det B + \beta \det C$$

Ну и конечно, доказательство для столбиков аналогично.

Из этого свойства вытекает, что при умножении какой-то строки/столбика матрицы на константу, определитель этой матрицы умножится на эту константу.
## Определитель произведения
Довольно сладкое свойство:
$$\det AB = \det A \det B$$
Это свойство легко понимается геометрически - Если мы применим трансформацию пространства, описанной матрицей $B$, а потом матрицей $A$, то сначала пространство расширится в $\det B$ раз, а потом еще в $\det A$ раз.
Отсюда и получаем: расширение пространства композиции трансформаций $(\det AB)$ равно произведению расширений пространства индивидуальных преобразований $(\det A \det B)$.

Алгебраическое доказательство требует теории из билетов [[#41. Свойство определителя, связанное с прибавлением к строке другой строки, умноженной на число. Определитель Вандермонда.]], [[#44. Элементарные преобразования. Элементарные матрицы.]] и [[#45. Вырожденные и невырожденные матрицы. Их свойства.]]. К сожалению порядок билетов совершенно неприятный, но я не могу с этим ничего поделать, кроме как послать вас читать эти билеты первыми.
Полезно знать, как это свойство доказывается, однако имхо куда важнее понимать геометрический смысл произведения определителей.
...
Теперь, как вы уже просвещены и знаете про *элементарные матрицы* и *вырожденные матрицы*, мы можем приступить к алгебраическому доказательству.
План таков: любая невырожденная матрица раскладывается в произведение элементарных матриц. Если мы докажем, что для любой элементарной матрицы выполняется свойство, то мы докажем, что и для любых двух матриц оно будет выполняться.

Разберем два типа элементарных матриц:
1. Умножение $i$-той строки матрицы $M$ на скаляр $\lambda$. За это отвечает элементарная матрица $T$ с $\lambda$ вместо $1$ на $i$-той строке. Эта элементарная матрица - диагональная, и по свойству определителя треугольных матриц, ее определитель равен $\det T = \lambda$.
   С одной стороны, умножение строки на скаляр повлечет умножение определителя $\det M$ матрицы $M$ на скаляр $\lambda$.
   С другой стороны, умножение строки на скаляр можно записать как произведение матриц: $$\det (TM) = \lambda \det M = \det T \det M$$
2. Прибавление $i$-той строки матрицы $M$ к $j$-той строке. За это отвечает элементарная матрица $T$ с $1$ в $i$-той строке, $j$-том столбце. Такая матрица остается треугольной, поэтому ее определитель все так же равен произведению ее элементов главной диагонали, $\det T = 1$. Однако сложение строк никак не влияет на значение определителя, как было сказано в билете #41. Поэтому: $$\det (TM) = \det M = \det T \det M$$
Две элементарные матрицы доказаны. Теперь перейдем к вырожденности.
1. Если одна из матриц вырождена (пусть будет $A$), то по определению ее определитель равен нулю, $\det A = 0$. Так же известно, что произведением матрицы на вырожденую матрицу является так же вырожденная матрица. Поэтому выполняется: $$\det AB = 0 = 0 \cdot \det B = \det A \cdot \det B$$
2. Если ни одна из матриц не вырождена, то тогда матрицу $A$ можно разбить на произведение элементарных матриц: $A = S_1 \ldots S_n$. Как мы уже показали, для произведения любой матрицы и элементарной матрицы формула работает, поэтому записываем: $$\array{\det AB = \det (S_1 \ldots S_nB) = \det S_1 \ldots \det S_n \det B = \\ = \det (S_1 \ldots S_n) \det B = \det A \det B}$$
На этом доказательство заканчивается.
Как следствие, $\det A^{-1} = \frac{1}{\det A}$, ведь $$1 = \det E = \det (A^{-1} A) = \det A^{-1} \det A \Rightarrow \det A^{-1} = \frac{1}{\det A}$$
($E$ - единичная матрица)
## Пример задачи
Условие: посчитайте определитель произведения матриц $AB$:
$$A = \pmatrix{5 & 3 & 1 \\ 4 & 1 & 5 \\ 7 & -1 & 2}, \ \ \ \ \ \ B =\pmatrix{1 & 5 & -1 \\ 6 & 2 & -3 \\ 7 & -4 & 1}$$

Решение: посчитаем по формуле определителя произведения.
Разложим $\det A$ по второму столбику, по причине ни сколь иной кроме как "мне так нравится":
$$\array{\det A = -3 \begin{vmatrix}4 & 5 \\ 7 & 2\end{vmatrix} + 1 \begin{vmatrix}5 & 1 \\ 7 & 2\end{vmatrix} + 1 \begin{vmatrix}5 & 1 \\ 4 & 5\end{vmatrix} = \\ =-3(8-35) + (10-7) + (25-4) = 105}$$
$\det B$ я разложу по первой строчке:
$$\array{\det B = 1\begin{vmatrix}2 & -3 \\ -4 & 1\end{vmatrix} - 5\begin{vmatrix}6 & -3 \\ 7 & 1\end{vmatrix} - 1\begin{vmatrix}6 & 2 \\ 7 & -4\end{vmatrix} = \\ = (2-12) - 5(6+21) - (-24-14) = -107}$$
С помощью этого я заключаю, что определитель $AB$ равен $$\det AB = \det A \cdot \det B = 105 \cdot (-107) = -11235$$
Представьте это считать, сначала перемножая матрицы)
