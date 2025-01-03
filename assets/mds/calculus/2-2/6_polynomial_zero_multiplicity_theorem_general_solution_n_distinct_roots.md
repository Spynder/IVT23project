## Кратность нуля многочлена

Уже был такой вопрос. Ноль многочлена = корень многочлена.

Любой многочлен с вещественными корнями можно записать в виде
$$P(x) = a(x-x_1)(x-x_2)\ldots(x-x_n)$$
Если среди корней $x_1, x_2, \ldots, x_n$ есть повторяющиеся корни, то они вместе называются кратным корнем, а их количество - кратностью.
Например для
$$P(x) = 3(x-3)(x-3)(x-5)$$
Корень $x=3$ будет иметь кратность = $2$.

Проще определять кратность корня по степени скобки:
$$P(x) = 2(x-7)^4(x-3)^7$$
Тогда корень $x=7$ будет иметь кратность = $4$, а корень $x=3$ будет иметь кратность = $7$.

Формально, корень $a$ многочлена $P(x)$ имеет кратность $k$, если есть такой многочлен $S(x)$, что $S(a) \neq 0$ и
$$P(x) = (x-a)^kS(x)$$
Так же, корень $a$ многочлена $P(x)$ имеет кратность $k$, если $P(a) = 0$, $P'(a) = 0$, $\ldots$, $P^{(k-1)}(a) = 0$, и $P^{(k)}(a) \neq 0$.

## Теорема о структуре общего решения линейного однородного обыкновенного дифференциального уравнения с постоянными коэффициентами ($n$ различных корней)

Такое уравнение выглядит следующим образом:
$$a_0y^{(n)} + a_1y^{(n-1)} + \ldots + a_ny=0$$
Постоянные коэффициенты - $a$ не являются функцией от $x$; однородное - правая часть равна нулю.

Сделаем подстановку: $y=e^{\lambda x}$. Тогда ее производная $y'=\lambda e^{\lambda x}$, вторая производная $y'' = \lambda^2 e^{\lambda x}$ и так далее. Дифференцируя так $n$ раз и подставляя в исходное уравнение, вынося за скобки $e^{\lambda x}$ получаем следующее уравнение:
$$e^{\lambda x}(a_0\lambda^n + a_1\lambda^{n-1} + \ldots + a_n)=0$$
Многочлен в скобках называется *характеристическим*, соответственно *характеристическое уравнение* выглядит как
$$P(x) = a_0\lambda^n + a_1\lambda^{n-1} + \ldots + a_n=0$$
По основной теореме алгебры, это уравнение имеет $n$ корней. Если все эти корни различны (кратность каждого корня равна 1), то общее решение ОДУ имеет вид:
$$y_0(x) = C_1e^{\lambda_1x} + C_2e^{\lambda_2x} + \ldots +C_ne^{\lambda_nx}$$
Покажем это. Если $\lambda_i$ - корень характеристического уравнения ($P(\lambda_i) = 0$), то при подстановке $y=e^{\lambda_i x}$ в ОДУ получается уравнение $e^{\lambda_i x} \cdot P(\lambda_i) = 0$, значит $y=e^{\lambda_i x}$ является решением ОДУ: $L[e^{\lambda_i x}] = 0$.

По [свойствам дифференциального оператора][[[1,2,4]]] $L$, если $L[e^{\lambda_i x}] = 0$, то верно и
$$L[C_1e^{\lambda_1x} + C_2e^{\lambda_2x} + \ldots +C_ne^{\lambda_nx}] = 0$$

---
Докажем, что задача Коши для ОДУ решается однозначно:
$$\cases{L[y] = 0 \\ y(x_0) = a_0, y'(x_0) = a_1, \ldots , y^{(n-1)} = a_{n-1}}$$
Для каждого условия задачи запишем уравнение в системе:
$$\cases{\array{
C_1e^{\lambda_1x_0} &+& C_2e^{\lambda_2x_0} &+& \ldots &+& C_ne^{\lambda_nx_0} &= a_0 \\
\lambda_1C_1e^{\lambda_1x_0} &+& \lambda_2C_2e^{\lambda_2x_0} &+& \ldots &+&\lambda_nC_ne^{\lambda_nx_0} &=a_1 \\
\ldots &+& \ldots &+& \ldots &+& \ldots &=\ldots \\
\lambda_1^{n-1}C_1e^{\lambda_1x_0} &+& \lambda_2^{n-1}C_2e^{\lambda_2x_0} &+& \ldots &+&\lambda_n^{n-1}C_ne^{\lambda_nx_0} &=a_{n-1}
}}$$
Вспоминаем алгем! Мы получили СЛАУ - давайте ее перепишем в матричном виде:
$$\pmatrix{1 & 1 & \ldots & 1 \\ \lambda_1 & \lambda_2 & \ldots & \lambda_{n} \\ \vdots & \vdots & \ddots & \vdots \\ \lambda^{n-1}_1 & \lambda^{n-1}_2 & \ldots & \lambda_{n}^{n-1}} \pmatrix{C_1e^{\lambda_1x_0} \\ C_2e^{\lambda_2x_0} \\ \vdots \\ C_ne^{\lambda_{n}x_0}} = \pmatrix{a_0 \\ a_1 \\ \vdots \\ a_{n-1}}$$
Условие существования решений этого СЛАУ - условие совместности - теорема [Кронекера-Капелли][[[0,1,17]]]. Для $n$ неизвестных и $n$ переменных условие сводится к вырожденности матрицы системы - матрицы слева, причем решение будет единственным.

Но ведь матрица слева - это [матрица Вандермонда][[[0,1,8]]]! Условие невырожденности такой матрицы - различность значений $\lambda_1, \lambda_2, \ldots, \lambda_n$, а это у нас дано по условию. Получается матрица невырожденная, значит решение СЛАУ существует и единственно, а значит задача Коши разрешима для любых $a_0, \ldots, a_{n-1}$.