Прямая в пространстве по своей сути не сильно отличается от прямой на плоскости.
## Общее уравнение
Общими уравнениями мы называли уравнения вида $Ax+By+C=0$ или $Ax+By+Cz+D=0$. Но вот не задача - первое задает прямую на плоскости, а второе - плоскость в пространстве. Чтобы добиться прямой в пространстве, нужно пересечь две плоскости:
$$\cases{A_1x+B_1y+C_1z + D_1=0 \\ A_2x + B_2y + C_2z + D_2=0}$$
Такая система называется общими уравнениями для прямой в пространстве.
Причем чтобы пересекаться, плоскости не должны быть параллельны. Для этого их нормали не должны быть коллиеарны. А для этого проверим векторное произведение их нормалей: (вспоминаем билет [[#11. Свойства векторного и смешанного произведений.]])
$$[(A_1; B_1; C_1), (A_2; B_2; C_2)] \neq 0$$

## Каноническое уравнение
Существует способ записать уравнение прямой основываясь лишь на направляющем векторе $\overline p(A; B; C)$ и точке $N(x_0; y_0; z_0)$, через которую проходит эта прямая. Тогда, прямую можно записать в виде:
$$\frac{x - x_0}A = \frac{y - y_0}B = \frac{z - z_0}C$$
Такая цепочка уравнений называется каноническими уравнениями прямой.
В случаях, когда в знаменателе стоит ноль, считается, что в числителе так же ноль: ноль в знаменателе означает ноль соответствующей координаты направляющего вектора. Если там ноль, то на всей прямой эта координата прямой не меняется.

Откуда получаются такие равенства? Представляем вектор $\overline{NX}(x - x_0, y-y_0, z-z_0)$. Его начало - точка, что принадлежит прямой (по условию). Если этот вектор будет коллинеарен вектору $\overline n$, то весь вектор будет лежать на этой прямой. Для этого координаты вектора должны быть пропорциональны, отсюда и получается деление.

Как перейти к общему уравнению? Разбиваем нашу цепочку уравнений на два равенства, составляем плоскости в общем виде и записываем в систему.
$$\Rightarrow \cases{\frac{x - x_0}A = \frac{y - y_0}B \\\frac{y - y_0}B= \frac{z - z_0}C} \Rightarrow \cases{Bx-Ay+(Ay_0 - Bx_0) = 0 \\ Cy - Bz + (Bz_0 - Cy_0) = 0}$$
Первая плоскость будет параллельна оси $Oz$ (ибо в уравнении не учавствует $z$), а вторая - параллельна оси $Ox$ (по той же причине). Пересекая две плоскости мы получаем прямую в пространстве - общее уравнение прямой.

Для того, чтобы перевести общее уравнение прямой в плоскости в каноническое уравнение, нужно выбрать точку, принадлежащую прямой и направляющий вектор.
$$\cases{A_1x+B_1y+C_1z + D_1=0 \\ A_2x + B_2y + C_2z + D_2=0}$$
Если у нас образовывается прямая, то на ней существует точка, у которой координата $x=0$ (при желании, можно обнулить и другую координату). Обнуляем мы ее чисто чтобы облегчить наши вычисления.
Обнулим ее в нашей системе, и получим систему из двух пересекающихся прямых.
$$x = 0 \Rightarrow \cases{B_1y+C_1z + D_1=0 \\ B_2y + C_2z + D_2=0}$$
Решаем систему уравнений из двух неизвестных и находим координаты $y$ и $z$.
Получили точку, принадлежащую прямой: $N = (0; y_0; z_0)$.
Теперь нужно взять направляющую прямую. Направляющую прямую мы можем получить из векторного произведения двух нормальных к плоскостям векторов. Почему так? Наш итоговый вектор будет перпендикулярен нормали первой плоскости, значит будет параллелен самой плоскости (или же лежать на ней). Точно так же и со второй плоскостью. А если этот вектор лежит сразу в двух плоскостях, то он будет лежать на их пересечении!
Возьмем векторное произведение нормалей:
$$[(A_1; B_1; C_1), (A_2; B_2; C_2)] = \overline p$$
И это все, что нам нужно, чтобы составить каноническое уравнение прямой:
$$\frac{x - N_x}{p_x} = \frac{y - N_y}{p_y} = \frac{z - N_z}{p_z}$$
## Параметрическое уравнение
Такое уравнение почти идентично каноническому уравнению.
Обозначим за $N(x_0; y_0; z_0)$ точку, через которую будет проходить прямая, и $\overline p(A; B; C)$ - направляющий вектор. Тогда прямую можно записать в векторном виде как:
$$(x;y;z) = N + \overline p \cdot t \Leftrightarrow \cases{x = x_0 + At \\ y = y_0 + Bt \\ z = z_0 + Ct}$$
Где $t$ - действительное число, произвольный параметр. По сути, мы указываем точку начала прямой и затем ее сдвигаем на $t$ по направлению $\overline p$. Таким образом мы и получаем прямую, если параметр $t$ пробежит все возможные значения.

Почему оно идентично каноническому уравнению? Давайте из каждого уравнения системы выразим $t$:
$$\cases{x = x_0 + At \\ y = y_0 + Bt \\ z = z_0 + Ct} \Rightarrow \cases{\frac{x-x_0}A = t \\ \frac{y-y_0}B = t \\ \frac{z-z_0}C = t}$$
А раз все эти выражения равны $t$, мы можем их приравнять:
$$\frac{x - x_0}A = \frac{y - y_0}B = \frac{z - z_0}C$$
И о боже что это - это же и есть каноническое уравнение прямой!
Точно так же и в обратную сторону: приравниваем все уравнения к $t$ и записываем в систему:
$$\frac{x - x_0}A = \frac{y - y_0}B = \frac{z - z_0}C = t$$
$$\cases{\frac{x-x_0}A = t \\ \frac{y-y_0}B = t \\ \frac{z-z_0}C = t} \Rightarrow \cases{x = x_0 + At \\ y = y_0 + Bt \\ z = z_0 + Ct}$$
Так как параметрическое уравнение прямой почти равно каноническому, перевод в общий вид я писать не буду (см. перевод канонического в общий)
## Пример задачи
Условие: найдите уравнение прямой, проходящей через точки $A(5;3;1)$ и $B(7;1;3)$.

Решение: проще все это сделать с помощью канонического вида. Найдем направляющий вектор - это просто будет вектор $\overline{AB}$:
$$\overline{AB} = B - A = (7-5;1-3;3-1) = (2;-2;2)$$
Теперь выбираем любую точку ($A$ и $B$ обе сработают) и записываем равенства:
$$\frac{x - 5}2 = \frac{y - 3}{-2} = \frac{z-1}2$$

---
Условие: запишите следующую прямую, заданную в каноническом виде, в общем виде.
$$\frac{x-2}5 = \frac{y-7}1 = \frac{z+3}3$$

Решение: разбиваем на две системы:
$$\cases{\frac{x-2}5 = \frac{y-7}1 \\ \frac{y-7}1 = \frac{z+3}3} \Rightarrow \cases{x-2 - 5(y-7) = 0 \\ 3(y-7) - (z+3) = 0} \Rightarrow \cases{x-5y+33=0 \\ 3y-z-24 = 0}$$

---
Условие: запишите следующую прямую, заданную в общем виде, в каноническом виде.
$$\cases{3x-y+z-12=0 \\ x+2y-2z-16=0}$$

Решение: зануляем $x$ и решаем систему линейных уравнений:
$$\cases{-y+z=12 \\ 2y-2z=16} \Rightarrow \cases{z-y=12 \\ y-z = 16} \Rightarrow \varnothing$$
Получается, не существует такой точки на этой прямой, где $x=0$. Попробуем занулить другую точку, $y=0$:
$$\cases{3x+z=12 \\ x-2z = 16} \Rightarrow \cases{7z = -36 \\ x -2z=16} \Rightarrow \cases{x = 40/7 \\ z = -36/7}$$
Значит точка $(40/7; 0; -36/7)$ принадлежит прямой.
Теперь найдем векторное произведение нормалей:
$$[(3;-1;1), (1;2;-2)] = \left|\matrix{\overline i & \overline j & \overline k \\ 3 & -1 & 1 \\ 1 & 2 & -2}\right| = $$
$$\overline i(2-2) - \overline j(-6-1) + \overline k(6+1) = (0;7;7)$$
Составляем каноническое уравнение:
$$\frac{x-40/7}0 = \frac{y-0}7 = \frac{z+36/7}7$$
Получился ноль - заодно и покажу, как это выглядит в параметрическом виде:
$$\cases{x=40/7 \\ y=7t \\ z = -36/7 + 7t}$$
Как видите, прямая зафиксирована по координате $x$, посему мы и не смогли решить первую систему.