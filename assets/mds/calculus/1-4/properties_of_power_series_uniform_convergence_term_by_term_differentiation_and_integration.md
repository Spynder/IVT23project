## Равномерная сходимость
Все степенные ряды
$$\sum_{n=1}^\infty a_nx^n$$
с радиусом сходимости $R$ являются равномерно сходящимися на любом интервале $(-r, r) \subset (-R, R)$.

Для любой точки $|x|<r$ выполняется:
$$|x| < r \Rightarrow |a_n x^n| < |a_nr^n|$$
Ряд $\sum |a_nr^n|$ сходится, ведь $|r| < R$, а значит по теореме Вейерштрасса будет равномерно сходится и исходный ряд.
## Почленное дифференцирование
Ряд с $R \neq 0$ можно дифференциировать почленно. Если есть ряд с радиусом сходимости $R$
$$f(x) = \sum_{n=0}^\infty a_n (x-x_0)^n$$
тогда можно дифференциировать члены и получить новый ряд
$$f'(x) = \sum_{n=1}^\infty na_n (x-x_0)^{n-1}$$
причем радиус сходимости у производного ряда не меняется.

Доказательство: поставим пока радиус сходимости производного ряда за $R'$, и найдем его по формуле Коши-Адамара:
$$\frac1{R'} = \lim_{n\rightarrow \infty} \sqrt[n]{|na_n|} = \lim_{n\rightarrow \infty} \sqrt[n]{n} \cdot \lim_{n\rightarrow \infty} \sqrt[n]{|a_n|}$$
Левый предел сходится к единице (известный предел), а правый сходится к $\frac1R$, ведь это формула Коши-Адамара для оригинального ряда. Получаем
$$\frac1{R'} = \frac1R \Rightarrow R' = R$$
Получается производный ряд тоже сходится. То, что сумма ряда из производных равна производной $f'(x)$ следует из теоремы о почленном дифференцировании равномерно сходящегося ряда:
Если $f(x) = \sum f_n(x)$, и функции $f_n(x)$ - дифференциируемы на $[a,b]$, то ряд $f(x)$ можно почленно дифференциировать, причем $f'(x) = \sum f_n'(x)$ - производная суммы равна сумме производных.
## Почленное интегрирование
Схожее свойство с интегрированием, и доказывается аналогично.
Ряд с $R \neq 0$ можно интегрировать почленно на интервале $[a,b] \subset (-R, R)$. Если есть ряд с радиусом сходимости $R$
$$f(x) = \sum_{n=0}^\infty a_n (x-x_0)^n$$
тогда по линейности интеграла можно интегрировать члены:
$$\int_a^b f(x)\dd x = \sum_{n=1}^\infty a_n \int_a^b (x-x_0)^n \dd x = \sum_{n=1}^\infty a_n \left . \frac{(x-x_0)^{n+1}}{n+1}\right |^b_a$$
Более того, по свойству интегралов с переменным верхним пределом:
$$\int_a^x f(t)\dd t = F(x) \ \ \ \ \ \ \ \ \ \ \ \ \ \ (F'(x) = f(x))$$
Получим для $x \in (a, a+R)$:
$$\int_a^x f(t) \dd t = \sum_{n=1}^\infty a_n \frac{(x-x_0)^{n+1}}{n+1}$$
Причем этот ряд будет иметь такой же радиус сходимости $R$.

Доказательство аналогично: находим радиус сходимости получившегося ряда $R'$, и находим его по формуле Коши-Адамара:
$$\frac1{R'} = \lim_{n\rightarrow \infty} \sqrt[n]{\frac{a_n}{n+1}} = \frac{\lim_{n\rightarrow \infty}\sqrt[n]{a_n}}{\lim_{n\rightarrow \infty}\sqrt[n]{n+1}}= \frac{1/R}{1}$$
$$\Rightarrow R' = R$$