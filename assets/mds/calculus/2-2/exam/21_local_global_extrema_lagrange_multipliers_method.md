
## Определения
В [билете 17][[[1,3,16]]] было сказано про определения *локальных* экстремумов, и с добавлением множества $X \subset \mathbb R^n$ меняется только условие на окрестности точки $a$:
- Точка $a$ - *точка минимума* функции $f(x)$, если существует $\delta >0$ такое, что $f(x) \geq f(a)$ для любого $x \in O_\delta(a) \cap X$.
- Точка $a$ - *точка максимума* функции $f(x)$, если существует $\delta >0$ такое, что $f(x) \leq f(a)$ для любого $x \in O_\delta(a) \cap X$.
- Точка $a$ - *точка строгого минимума* функции $f(x)$, если существует $\delta >0$ такое, что $f(x) \gt f(a)$ для любого $x \in \dot O_\delta(a) \cap X$.
- Точка $a$ - *точка строгого максимума* функции $f(x)$, если существует $\delta >0$ такое, что $f(x) \lt f(a)$ для любого $x \in \dot O_\delta(a) \cap X$.

Глобальные экстремумы - это "экстремумы среди экстремумов" - самые максимальные среди всех точек максимумов, самые минимальные среди всех точек минимумов.
- Точка $a$ - *точка глобального минимума* функции $f(x)$, если $f(a) \leq f(x)$ для любого $x \in X$.
- Точка $a$ - *точка глобального максимума* функции $f(x)$, если $f(a) \geq f(x)$ для любого $x \in X$.

## Метод множителей Лагранжа.
Пусть есть функция $F(x), x \in \mathbb R^n$ и $m < n$ уравнений
$$\cases{f_1(x_1, \ldots, x_n) = 0 \\ \ldots \\ f_m(x_1, \ldots, x_n) = 0}$$
которые называются *условиями связи*. Эти уравнения образуют подмножество $S \subset \mathbb R^n$. Точка $x^{(0)}$ будет называться условным экстремумом, если она является локальным экстремумом на множестве $S$ - если $x^{(0)}$ является локальным экстремумом и удовлетворяет условиям связи.

Введем функцию $n+m$ переменных:
$$L(x_1, \ldots, x_m, \lambda_1, \ldots, \lambda_m) = F(x) + \lambda_1f_1(x) + \ldots + \lambda_mf_m(x)$$
Эта функция называется функцией Лагранжа, а числа $\lambda_i$ - множителями Лагранжа.

Чтобы найти точки "кандидаты" на условный экстремум, нужно из всех точек множества $S$ найти точки, которые
1. либо являются особыми для $S$, то есть выполняется неравенство $$\rank  \pmatrix{\pdv{f_1(x^{(0)})}{x_1} & \pdv{f_1(x^{(0)})}{x_2} & \ldots & \pdv{f_1(x^{(0)})}{x_n} \\ \pdv{f_2(x^{(0)})}{x_1} & \pdv{f_2(x^{(0)})}{x_2} & \ldots & \pdv{f_2(x^{(0)})}{x_n} \\ \vdots & \vdots & \ddots & \vdots \\ \pdv{f_m(x^{(0)})}{x_1} & \pdv{f_m(x^{(0)})}{x_2} & \ldots & \pdv{f_m(x^{(0)})}{x_n}} < m$$
2. либо точка $(x^{(0)}, \lambda^{(0)})$ является стационарной точкой функции Лагранжа при некоторых $\lambda^{(0)}_1, \ldots, \lambda^{(0)}_m$ - то есть точка, в которой все частные производные функции Лагранжа равны нулю: $$\cases{\pdv{L}{x_1} = \pdv{F(x^{(0)})}{x_1} + \lambda_1\pdv{f_1(x^{(0)})}{x_1} + \ldots + \lambda_m \pdv{f_m(x^{(0)})}{x_1} = 0 \\ \pdv{L}{x_2} = \pdv{F(x^{(0)})}{x_2} + \lambda_1\pdv{f_1(x^{(0)})}{x_2} + \ldots + \lambda_m \pdv{f_m(x^{(0)})}{x_2} = 0 \\ \ldots \\ \pdv{L}{x_n} = \pdv{F(x^{(0)})}{x_n} + \lambda_1\pdv{f_1(x^{(0)})}{x_n} + \ldots + \lambda_m \pdv{f_m(x^{(0)})}{x_n} = 0\\ \pdv{L}{\lambda_1} = f_1(x^{(0)}) = 0 \\ \pdv{L}{\lambda_2} = f_2(x^{(0)}) = 0 \\ \ldots \\ \pdv{L}{\lambda_m} = f_m(x^{(0)}) = 0}$$

## Пример
Дана функция $F(x,y,z) = x+2y+3z$ , и желание найти экстремумы на множестве, задаваемом уравнением $x^2+y^2+z^2=1$.

Дано одно уравнение связи, так что проверяем особые точки:
$$\rank \pmatrix{\pdv{f(x^{(0)})}{x} & \pdv{f(x^{(0)})}{y} & \pdv{f(x^{(0)})}{z}} < 1$$
$$\rank \pmatrix{2x_0 & 2y_0 & 2z_0} < 1$$
Единственная точка, удовлетворяющая уравнению выше, является точка $(0,0,0)$, но она не принадлежит $S$. Значит, особых точек нет. Теперь возьмем функцию Лагранжа и посчитаем частные производные (найдем стационарные точки):
$$L(x,y,z, \lambda) = x+2y+3z+\lambda(x^2+y^2+z^2-1)$$
$$\cases{\pdv{L(x^{(0)})}{x} = 1 + 2\lambda x = 0 \\ \pdv{L(x^{(0)})}{y} = 2+2\lambda y = 0 \\ \pdv{L(x^{(0)})}{z} = 3 + 2\lambda z = 0 \\ \pdv{L(x^{(0)})}{\lambda} = x^2+y^2+z^2-1=0}$$
Решая систему, получим два решения:
$$\cases{\lambda = -\sqrt{7/2} \\ x=\frac12{\sqrt{2/7}} \\ y = \sqrt{2/7} \\ z=\frac32 \sqrt{2/7}}, \ \ \ \ \ \ \ \ \cases{\lambda = \sqrt{7/2} \\ x=-\frac12{\sqrt{2/7}} \\ y = -\sqrt{2/7} \\ z=-\frac32 \sqrt{2/7}}$$
Полученные точки проверяем как обычно, через достаточное условие экстремумов, но на функции Лагранжа $L$.

После проверки можно заключить, что эти точки являются точками условного максимума и минимума.