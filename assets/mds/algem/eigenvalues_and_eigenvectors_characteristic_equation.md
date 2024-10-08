Каждый вектор $x \in L$ при применении оператора перейдет в какой-то другой вектор. Тем не менее, существуют векторы, которые при применении оператора остаются на том же месте, или домножаются на какую-то константу. Грубый пример: нулевой вектор останется на своем месте. Существуют ли другие векторы с такой характеристикой? Из этого вопроса и выросли понятия собственных значений и векторов.

Наша задача: найти такие пары скаляров $\lambda$ и векторов $v$ для оператора $A$, что выполняется уравнение:
$$A(v) = \lambda v \Leftrightarrow Av = \lambda v$$
Слева и справа этого уравнения, вообще говоря, разные операции - умножение вектора на матрицу и умножение вектора на скаляр. Перезапишем правую часть этого уравнения. Умножение вектора на скаляр будет соответствовать умножению вектора на диагональную матрицу, где все числа на этой диагонали равны этому скаляру:
$$\pmatrix{\lambda & 0 & \ldots & 0 \\ 0 & \lambda & \ldots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \ldots & \lambda} v = \lambda v$$
Эту матрицу можно представить как произведение скаляра на единичную матрицу:
$$\pmatrix{\lambda & 0 & \ldots & 0 \\ 0 & \lambda & \ldots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \ldots & \lambda} = \lambda E$$
Теперь запишем изначальное уравнение в новой форме:
$$Av = \lambda E v \Leftrightarrow Av - \lambda E v = 0 \Leftrightarrow (A-\lambda E)v=0$$
Отсюда видно два решения: первое, когда $v=0$. Но такие решения скучные. Второе же, когда матрица $A - \lambda E$ имеет ненулевое ядро - тогда существует (как минимум) прямая векторов, которые становятся нулем при применении оператора. Условие на существование ненулевого ядра - вырожденность матрицы - нулевой определитель. Поэтому решая уравнение
$$\det (A-\lambda E) = 0$$
мы можем найти значения $\lambda$, для которых существуют вектора $v$, которые удовлетворяют уравнению $Av = \lambda v$.

Уравнение $\det(A-\lambda E) = 0$ называется *характеристическим уравнением матрицы $A$*, найденные значения $\lambda$ называются *собственными значениями* матрицы, а векторы $v$, соответствующие значениям $\lambda$, называются *собственными векторами* матрицы.

Характеристичное уравнение матрицы можно записать таким образом, и как оно выглядит на практике чаще всего:
$$\left|\array{a_{11}- \lambda & a_{12} & \ldots & a_{1n} \\ a_{21} & a_{22} - \lambda & \ldots& a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \ldots & a_{nn}-\lambda}\right| = 0$$

Дадим самостоятельное определение собственного вектора: вектор $v$ называется собственным вектором матрицы $A$, соответствующим собственному значению $\lambda$, если $v \neq 0$ и выполняется $Av = \lambda v$.

Геометрический смысл собственных векторов - "штырь" в пространстве, ось вращения. Представим векторное пространство $L$, и применим к нему оператор $A$. Каждый вектор в этом пространстве перейдет в новую позицию, а все векторы на этом "штыре" останутся висеть на нем (ну или переползут в другую точку этого штыря).
Если $L = \mathbb R^3$, и оператор задается матрицей вращения вокруг оси $z$
$$A = \pmatrix{0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1}$$
То ось вращения - вертикальный вектор $(0;0;1)$ - будет собственным вектором, соответствующим собственному значению $\lambda =1$.
Конечно, собственные значения могут быть и отрицательными - это все так же штырь, просто при применении оператора все векторы на нем перескакивают на другую сторону.

Бывает, что собственные значения матрицы повторяются. Тогда существует не просто прямая, а целая плоскость (или пространство и выше) векторов, которые остаются на своем месте (или сдвигаются по прямой). Примером такой матрицы - матрица растяжения по оси $z$. Тогда вся плоскость $Oxy$ будет покрыта собственными векторами.
$$A = \pmatrix{1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 5}$$

Случай существования собственного значения $\lambda =0$ обозначает, что матрица оператора $A$ сама по себе вырождена и имеет ненулевое ядро.

В следующем билете так же рассказано про связь диагональной матрицы и собственных векторов, возможно будет полезно!
## Пример задачи
Условие: найти собственные значения и собственные векторы линейного оператора, заданного матрицей
$$A = \pmatrix{2 & -1 & 0 \\ -1 & 2 & 0 \\ 1 & -1 & 1}$$

Решение: ервым делом, находим собственные значения. Для этого нужно характеристическое уравнение
$$\det(A - \lambda E) = 0$$
$$\left|\array{2-\lambda & -1 & 0 \\ -1 & 2-\lambda & 0 \\ 1 & -1 & 1-\lambda}\right| = 0$$
Разложим определитель по третьему столбику:
$$(1-\lambda)((2-\lambda)^2 - 1) = 0$$
Раскладывая правую скобку как разницу квадратов:
$$(1-\lambda)(1-\lambda)(3-\lambda) = 0$$
Получаем собственные значения $\lambda =1$ и $\lambda = 3$.

Чтобы найти собственные векторы для определенного значения, нужно решить систему:
$$A\overline v = \lambda \overline v$$
То есть для нашей матрицы $A$:
$$\pmatrix{2 & -1 & 0 \\ -1 & 2 & 0 \\ 1 & -1 & 1}\pmatrix{x \\ y \\ z} = \pmatrix{\lambda x \\ \lambda y \\ \lambda z}$$
Или же:
$$\cases{2x - y = \lambda x \\ -x + 2y = \lambda y \\ x - y + z = \lambda z}$$
Решаем системы для каждого значения:
Для $\lambda = 1$:
$$\cases{2x - y = x \\ -x + 2y = y \\ x - y + z = z} \Rightarrow x=y$$
Вектор, что удовлетворяет этому уравнению, имеет "две степени свободы": $x=y$, а $z$ - любое.
$$\overline v_1' = (c_1; c_1; c_2)$$
Такой вектор (с несколькими независимыми переменными) мы должны разбить на линейно независимые векторы (похоже на то, как мы считали ФСР). Поочередно подставляем в одно значение число, отличное от нуля (единицу), а во все остальные - единицу. Сначала для $c_1$, потом для $c_2$:
$$\array{\overline v_1 = (1;1;0) \\ \overline v_2 = (0;0;1)}$$

Для $\lambda =3$:
$$\cases{2x - y = 3 x \\ -x + 2y = 3 y \\ x - y + z = 3z} \Rightarrow \cases{x+y=0 \\ x-y-2z=0} \Rightarrow \cases{x+y=0\\x-z=0}$$
Получается, $x=-y=z$:
$$\overline v_3 = (1;-1;1)$$
Ответ:
Собственные числа: $\lambda_{1} = 1, \lambda_2=1, \lambda_{3} = 3$
Собственные векторы, соответсвующие числам:
$$\overline v_1 = \pmatrix{1\\1\\0}, \ \ \ \ \ \  \overline v_2 = \pmatrix{0\\0\\1}, \ \ \ \ \ \  \overline v_3 = \pmatrix{1\\-1\\1}$$
