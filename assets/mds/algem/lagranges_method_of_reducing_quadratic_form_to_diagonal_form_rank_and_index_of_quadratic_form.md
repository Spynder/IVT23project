## Ранг
Существует много разных видов матрицы квадратичной формы - но что не меняется, так это ранг матрицы. В любом базисе, сохраняется ранг матрицы квадратичной формы - этот ранг и называется *рангом квадратичной формы*. Покажем это:
Пусть есть две матрицы $B$ и $B'$ квадратичной формы в разных базисах. Они связаны матрицей перехода: $B' =S^T BS$, причем матрица перехода $S$ невырожденная по определению.
Тогда, так как умножение матрицы на невырожденную не меняет ее ранга:
$$\rg B' = \rg S^TBS = \rg BS = \rg B$$
Из этого есть следствие: раз ранг везде одинаков, и всегда существует канонический вид квадратичной формы, то *ранг можно приравнять количеству ненулевых элементов в канонической форме квадратичной формы*.
## Индекс
Дадим определение положительно/отрицательно определенных квадратичных форм.
Если квадратичная форма $k$ на подпространстве $L'$ пространства $L$ является положительной для любого $x \in L': k(x)>0$, квадратичная форма называется *положительно определенной* на подпространстве $L'$. Если же для любого $x\in L':k(x)<0$, то форма называется *отрицательно определенной*.

Дополнительные определения: Если $x\in L': K(x) \geq 0$, то квадратичная форма называется *положительно **полу**определенной*. Если же наоборот $x\in L': K(x) \leq 0$, то *отрицательно **полу**определенной*.

Скажем, квадратичная форма $k$ положительно определена на подпространстве $L'$ размерности $\dim L'$. Разумеется, тогда можно взять подпространство $L''$ этого подпространства $L'$ с меньшей размерностью $\dim L'' \leq \dim L'$, и на нем квадратичная форма точно так же положительно определена.

Из этого следует *определение индекса*:
Число $\dim L^-$ называется *отрицательным индексом* квадратичной формы, где $L^-$ - подпространство максимальной размерности среди всех подпространств, где квадратичная форма отрицательно определена.
Аналогично, $\dim L^+$ называется *положительным индексом* квадратичной формы, где $L^+$ тоже самое, но для положительно определенной квадратичной формы.

Точно так же, как и с рангом, индекс является свойством квадратичной формы, и не меняется с изменением базиса - это называется закон инерции квадратичных форм.

Рассмотрим два базиса $e$ и $e'$, и запишем вектор $x$ в них.
$$x = \sum_{i=1}^n x_ie_i = \sum_{i=1}^n x_i' e'_i$$
Тогда квадратичная форма $k$ в диагональном виде считается как
$$k(x) = \sum_{i=1}^n \beta_i x_i^2 = \sum_{i=1}^n \beta_i' x_i'^2$$
Для простоты скажем, что пусть первые $p$ элементов $\beta_i$ положительны, а остальные отрицательны/нулевые, и первые $s$ элементов $\beta_i'$ положительны, а остальные отрицательны/нулевые. Наша цель в доказательстве: показать, что $p=s$.
Перепишем квадратичную форму:
$$\sum_{i=1}^p \beta_i x_i^2 + \sum_{i=p+1}^n \beta_i x_i^2= \sum_{i=1}^s \beta_i' x_i'^2 + \sum_{i=s+1}^n \beta_i' x_i'^2$$
Перепишем так, чтобы в левой и правой частях равенства были только неотрицательные слагаемые:
$$\sum_{i=1}^p \beta_i x_i^2 - \sum_{i=s+1}^n \beta_i' x_i'^2= \sum_{i=1}^s \beta_i' x_i'^2 - \sum_{i=p+1}^n \beta_i x_i^2$$
Допустим, $p < s$. Возьмем такой ненулевой вектор $x$, у которого $x_i = 0$ для $i = 1, \ldots, p$, и $x'_i=0$ для $i=s+1, \ldots, n$. Тогда левая часть равенства обратится в ноль.
Таким образом, мы задаем $p+n-s$ условий на вектор $x$ вида "$x_i = 0$". Но $p+n-s<n$ (ведь $p-s<0$ по предположению), а система уравнений в $n$-мерном пространстве с $p+n-s<n$ имеет ненулевое решение на $x$.

Получается существует такой ненулевой $x$, где левая часть равенства будет равна нулю, значит и правая должна тоже быть равна нулю - а она содержит только неотрицательные слагаемые, поэтому чтобы она была равна нулю, каждое слагаемое должно быть нулевым.
Мы перегруппировали элементы $\beta$ так, чтобы $\beta_i$ при $i>s$ были неположительны - то есть, возможно равны нулю. Нас интересуют другие коэффициенты: положительные $\beta_i'$ при $i \leq s$. Но единственный способ занулить $\beta'_i {x'}^2_i$ - чтобы ${x'}_i^2 = 0 \Rightarrow x'_i = 0$.

Но если $x'_i=0$ при $i\leq s$, и по выбору вектора $x$, $x'_i = 0$ при $i=s+1, \ldots, n$, то $x'_i =0$ вообще для любого $i=1,\ldots,n$! Получается, раз все координаты нулевые в каком-то базисе, то и сам вектор $x$ - нулевой. Противоречие, а значит, $p=s$.

Это доказывает, что положительные индексы совпадают. Аналогично доказывается и для отрицательных индексов.
## Метод Лагранжа - метод выделения квадратов
Если вы еще помните, то метод Лагранжа упоминался в томе с геометрией - в билете #28 с заменой системы координат.
Пусть записана квадратичная форма $k$ в базисе $e$, ее можно представить как (если $x$ из трех координат):
$$k(x) = \beta_{11}x_1^2 + \beta_{22}x_2^2 + \beta_{33}x_3^2 + 2\beta_{12}x_1x_2 + 2\beta_{13}x_1x_3+2\beta_{23}x_2x_3$$
Пока есть квадраты координат (например, $x_1^2$), группируем все эти координаты вместе и добавляем общий квадрат:
$$k(x) = \beta_{11}(x_1^2 +2\frac{\beta_{12}}{\beta_{11}}x_1x_2 + 2\frac{\beta_{13}}{\beta_{11}}x_1x_3)+ \beta_{22}x_2^2 + \beta_{33}x_3^2+2\beta_{23}x_2x_3$$
Рассмотрим эту скобку - приводим ее в форму, где можно будет дополнить до квадрата, выносим $x_1$, а $2$ оставляем за скобками.
$$\left(x_1^2 +2\left(\frac{\beta_{12}}{\beta_{11}}x_2 + \frac{\beta_{13}}{\beta_{11}}x_3\right)x_1\right)$$
До вида $(x^2+2xy+y^2)=(x+y)^2$ нам не хватает лишь $y^2$ - добавляем его (и нужно не забыть вычесть его потом, но в формуле просто места не хватает):
$$\left(x_1^2 +2\left(\frac{\beta_{12}}{\beta_{11}}x_2 + \frac{\beta_{13}}{\beta_{11}}x_3\right)x_1 + \left(\frac{\beta_{12}}{\beta_{11}}x_2 + \frac{\beta_{13}}{\beta_{11}}x_3\right)^2\right)=$$
$$=\left(x_1 +  \left(\frac{\beta_{12}}{\beta_{11}}x_2 + \frac{\beta_{13}}{\beta_{11}}x_3\right)\right)^2$$
Теперь делая линейную замену: $x_1' = x_1+\left(\frac{\beta_{12}}{\beta_{11}}x_2 + \frac{\beta_{13}}{\beta_{11}}x_3\right)$, и теперь квадратичная форма выглядит следующим образом:
$$k(x) = \beta_{11}{x'}^2_1 + k'(x)$$
Где $k'(x)$ - линейная форма, не зависящая от координаты $x_1$.
Применяя теперь метод Лагранжа к форме $k'(x)$ несколько раз, можно добавиться диагонального вида квадратичной формы.

Однако есть отдельный случай: что, если на одном из шагов, все коэффициенты при квадратах координат равны нулю? Типо квадратичная форма выглядит так:
$$k(x) = 2\beta_{12}x_1x_2 + 2\beta_{13}x_1x_3+2\beta_{23}x_2x_3$$
Тогда нужно произвести замену $x_1' = x_1 + x_2$, $x_2' = x_1-x_2$. Так как $(x_1+x_2)(x_1-x^2) = x_1^2 - x_2^2$, это даст нам квадратные координаты, и можно будет продолжать метод Лагранжа как обычно.
## Пример задачи
Условие: дана квадратичная форма, привести ее к диагональному виду:
$$k(x) = 2x_1^2 + 4x_1x_2 + 3x_2^2 + 4x_2x_3+7x_3^2$$

Решение: для справки, вот так выглядит матрица квадратичной формы:
$$B = \pmatrix{2 & 2 & 0 \\ 2 & 3 & 2 \\ 0 & 2 & 7}$$
Теперь само приведение: начинаем группировать, и начнем с $x_1$:
$$k(x) = 2(x_1^2 + 2x_1x_2) + 3x^2_2 + 4x_2x_3 + 7x_3^2 =$$
Достраиваем скобку до полного квадрата, и вычитаем соотвественно:
$$\array{= 2(x_1^2 + 2x_1x_2 + \underline{x_2^2}) - \underline{2x_2^2} + 3x^2_2 + 4x_2x_3 + 7x_3^2 = \\ = 2(x_1 + x_2)^2 - 2x_2^2 + 3x_2^2 + 4x_2x_3 + 7x_3^2}$$
Делаем первую замену базиса: $x_1' = x_1 + x_2$:
$$=2{x'}_1^2 - 2x_2^2 + 3x_2^2 + 4x_2x_3 + 7x_3^2$$
Работа с $x_1$ закончена. Выделим члены, независящие от $x_1$, за $k'(x)$:
$$k'(x) = x^2_2 + 4x_2x_3 + 7x_3^2=$$
Начинаем работу с $x_2$: заносим в скобки и выделяем полный квадрат:
$$=(x^2_2 + 4x_2x_3 + 4x_3^2) + 3x_3^2= (x_2+2x_3)^2 + 3x_3^2$$
Делаем замену $x_2' = x_2+2x_3$. Ну и чтобы сделать везде замены оставляем $x_3' = x_3$.
$$k'(x) = {x'}_2^2 + 3{x'}_3^2$$
Соединяем все вместе:
$$k(x) = 2{x'}_1^2 + {x'}_2^2 + 3{x'}_3^2$$
Замена базиса:
$$\array{x_1' = x_1+x_2 \\ x'_2 = x_2+2x_3 \\ x'_3 = x_3}$$
Можем составить матрицу замены базиса из $x$ в $x'$:
$$x' = Ax = \pmatrix{1 & 1 & 0 \\ 0 &1 & 2 \\ 0 & 0 & 1}\pmatrix{x_1 \\ x_2 \\ x_3}$$
Но нам нужна обратная матрица: из $x'$ в $x$. Нахождение этой матрицы я описывать не буду.
$$x = Px' = \pmatrix{1 & -1 & 2 \\ 0 & 1 & -2 \\ 0 & 0 & 1}\pmatrix{x_1' \\ x_2' \\ x_3'}$$
Теперь по формуле
$$B' = P^T BP$$
можно найти новую матрицу $B'$:
$$B' =  \pmatrix{1 & 0 & 0 \\ -1 & 1 & 0 \\ 2 & -2 & 1}  \pmatrix{2 & 2 & 0 \\ 2 & 3 & 2 \\ 0 & 2 & 7} \pmatrix{1 & -1 & 2 \\ 0 & 1 & -2 \\ 0 & 0 & 1} = \pmatrix{2 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 3}$$
И действительно, эта матрица совпадает с матрицей новой квадратичной формы.
