## Общий вид множества сходимости
Для ряда с радиусом сходимости $R$
$$\sum_{n=0}^\infty a_n(x-x_0)^n$$
множество сходимости записывается как интервал: $|x - x_0| < R$, или же $x \in (x_0 - R, x_0 + R)$. $x_0$ называется центром ряда, а $R$ - радиус сходимости - отклонение от точки $x_0$, при котором ряд все еще сходится.
Внутри этого интервала ряд сходится, вне ($|x - x_0| > R$) - расходится. Граница множества сходимости $|x - x_0| = R$ четко ничего не говорит, и нужно смотреть индивидуально каждую точку, проверять ее на сходимость.

Для рядов с комплексными числами, интервал сходимости превращается в круг (диск), а граница становится "периметром".

## Вычисление радиуса
Для вычисления радиуса обычно используют формулу Коши-Адамара:
$$\lim_{n\rightarrow \infty} \sqrt[n]{a_n} = \frac1R$$
Эта формула вытекает из радикального признака сходимости Коши: если предел существует, то накладывая радикал на весь ряд, получим:
$$\sqrt[n]{a_n (x-x_0)^n} = \sqrt[n]{a_n}\cdot |x-x_0| \rightarrow \frac1R |x-x_0|$$
По признаку Коши, ряд сходится, когда предел меньше единицы. Вот мы и получаем:
$$\frac1R |x-x_0| < 1 \Rightarrow |x-x_0| < R$$
Что и есть определение радиуса сходимости.

Существует другая формула, которая доказывается схожим образом, и основана на признаке Даламбера:
$$\lim_{n\rightarrow \infty} \frac{a_{n+1}}{a_n} = \frac1R$$
Применяем признак Даламбера к ряду
$$\sum_{n=1}^\infty |a_n(x-x_0)^n|$$
$$\frac{|a_{n+1}(x-x_0)^{n+1}|}{|a_n (x-x_0)^n|} = \frac{|a_{n+1}|}{|a_n|}|x-x_0| \rightarrow \frac1R |x-x_0|$$
По признаку Даламбера чтобы ряд сходился, предел должен быть меньше единицы, а это и есть:
$$\frac1R|x-x_0| < 1 \Rightarrow |x-x_0|< R$$
Эти формулы, бывают, записывают наоборот:
$$R = \lim_{n\rightarrow \infty} \frac{a_n}{a_{n+1}} = \frac1{\lim_{n\rightarrow \infty}  \sqrt[n]{a_n}}$$