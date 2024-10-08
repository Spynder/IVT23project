Условие: вычислить расстояние от точки $P(7;2;2)$ до прямой
$$\frac{x+12}{-7} = \frac{y-15}{16} = \frac{z+3}{-9}$$

Решение: способ 1 - через производную расстояния.
Переведем прямую в параметрический вид:
$$f(t) = \cases{x = -7t - 12 \\ y = 16t + 15 \\ z = -9t - 3}$$
Запишем квадрат функции расстояния от точки на прямой до $P$:
$$d^2 = ((-7t-12) - 7)^2 + ((16t+15) - 2)^2 + ((-9t-3) - 2)^2$$
Идея в том, чтобы ее дифференциировать. Можно раскрывать эти скобки как хотите.
$$d^2 = (-9 t - 5)^2 + (-7 t - 19)^2 + (16 t + 13)^2$$
$$(d^2)' = -18(-9t-5) - 14(-7t-19)+32(16t+13)$$
Приравниваем к нулю и ищем $t$ для минимума функции:
$$-18(-9t-5) - 14(-7t-19)+32(16t+13) = 0 \Rightarrow t=-1$$
Подставляем в параметрическую форму:
$$f(-1) = \cases{x = -5 \\ y = -1 \\ z = 6}$$
Теперь считаем расстояние между этими двумя точками:
$$d((7;2;2), (-5;-1;6)) = \sqrt{12^2 + 3^2 + 4^2} = 13$$

Ответ: $13$.

---
Условие: вычислить расстояние от точки $P(-5;1;1)$ до прямой
$$\frac{x-8}{19} = \frac{y-24}{5} = \frac{z+24}{-24}$$

Решение: способ 2 - через проекции.

Спроектируем вектор, соединяющий точку на прямой и точку $P$, на прямую.
Точка на прямой известна из уравнения - то, что вычитаем: $M(8;24;-24)$.
Вектор, соединяющий точку, соответственно:
$$MP = (-13; -23; 25)$$
А вектор, на который будем проектировать, есть напряющий вектор прямой:
$$l = (19; 5; -24)$$
Векторная проекция считается по формуле:
$$\pr_l MP = \frac{(MP, l)}{(l, l)} \cdot l = \frac{-962}{962} l  = -l$$
Перемножаем координаты векторов между собой:
$$(MP, l) = -13\cdot 19 - 23\cdot 5 -24 \cdot 25 = -962$$
Скалярное произведение считается просто как перемножение координат векторов вместе:
$$(a,b) = a_1b_1 + a_2b_2+a_3b_3$$
Прибавляем эту проекцию к точке на прямой, чтобы получить проекцию точки $P$ на прямой
$$P' = M - l = (-11; 19; 0)$$
Считаем расстояние между двумя точками:
$$d(P, P') = \sqrt{6^2 + 18^2 + 1^2} = 19$$

Ответ: $19$.

---
Условие: вычислить расстояние от точки $P(9;2;1)$ до прямой
$$\frac{x-4}{-3} = \frac{y-5}4 = \frac{z-2}{-1}$$

Решение:
Шаг первый: выделить точку на прямой, направляющий вектор, проектируемый вектор.
$M = (4;5;2)$
$l = (-3;4;-1)$
$MP = P - M = (5;-3;-1)$

Шаг второй: проектируем
$$\pr_l MP = \frac{(l, MP)}{(l, l)} l = \frac{-26}{26}l = -l$$
$$P' = M - l = (7;1;3)$$
Шаг третий: находим расстояние.
$$d(P, P') = \sqrt{2^2 + 1^2 + 2^2} = 3$$

Ответ: $3$.

$$\prj_ab \cdot a = \frac{(b,a)}{(a,a)} \cdot a = \frac{(b,a)}{|a|}$$

---
Условие: найти расстояние от точки $A(3;1;4)$ до прямой
$$\frac{x-2}5 = \frac{y+3}4 = \frac{z-1}2$$

Решение: есть способ решения задачи через построение параллелограмма.
Для начала соберем направляющий вектор прямой и точку, принадлежащую ей, из уравнения прямой.
$\overline p = (5;4;2)$
$M = (2;-3;1)$
Теперь рассмотрим параллелограмм, построенный на векторах $\overline p$ и $\overline{MA}$ как на сторонах. С одной стороны, его площадь можно найти как длину векторного произведения этих векторов. С другой, его площадь - высота, умноженная на основание. Но длина высоты - и есть расстояние от точки до прямой!
$$|[\overline p, \overline{MA}]| = |\overline p| \cdot h$$
Отсюда получаем формулу расстояния:
$$h = \frac{|[\overline p, \overline{MA}]|}{|\overline p|}$$
Посчитаем вектор $\overline{MA}$:
$$\overline{MA} = A-M = (3;1;4) - (2;-3;1) = (1;4;3)$$
Считаем векторное произведение:
$$[\overline p, \overline{MA}] = \left|\array{\overline i & \overline j & \overline k \\ 5 & 4 &2 \\ 1&4&3}\right| = (4;-13;16)$$
Его длина:
$$|[\overline p, \overline{MA}]| = \sqrt{4^2 + 13^2 + 16^2} = 21$$
Длина вектора $\overline p$:
$$|\overline p | = \sqrt{5^2 + 4^2 + 2^2} = 3 \sqrt 5$$
Делим:
$$h = \frac{|[\overline p, \overline{MA}]|}{|\overline p|} = \frac{21}{3\sqrt{5}} = \frac{7}{\sqrt5} = \frac{7\sqrt 5}5$$

Ответ: $\frac{7\sqrt{5}}5$.