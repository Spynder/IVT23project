## Расстояние от точки до прямой (2д)
Условие: найти расстояние от точки $A(1;5)$ до прямой $4x+3y=6$:

Решение: У нас есть формула для нахождения расстояния:

$$d(A) = \frac{|Ax+By+C|}{\sqrt{A^2+B^2}} = \frac{|4\cdot 1 + 3\cdot 5 - 6|}{\sqrt{4^2+3^2}} = \frac{13}{5} = 2.6$$
Ответ: $2.6$.

## Расстояние от точки до прямой (3д)
Условие: найти расстояние от точки $A(3;1;4)$ до прямой
$$\frac{x-2}5 = \frac{y+3}4 = \frac{z-1}2$$

Решение: тут все не так просто, поэтому придумаем свой способ.
Запишем прямую в параметрическом виде, и найдем минимум функции расстояния от точки от аргумента $t$ до точки $A$.
Для начала, линия в параметрическом виде:
$$L(t) = \cases{x = 2+5t \\ y = -3+4t \\ z=1+2t}$$
Расстояние между двумя точками вычисляется как
$$d(t) = \sqrt{(L(t)_x-A_x)^2 + (L(t)_y-A_y)^2 +(L(t)_z-A_z)^2}$$
Найдем ее минимум. Проще будет найти минимум квадрата расстояния, (ведь минимумы совпадают). Для этого дифференциируем по $t$:
$$d^2(t) = (2+5t-3)^2 + (-3+4t - 1)^2 + (1+2t-4)^2$$
$$d^2(t) = (5t-1)^2 + (4t-4)^2 + (2t-3)^2$$
$$d^2(t)' = 5(5t-1) + 4(4t-4) + 2(2t-3)$$
Приравниваем к нулю:
$$\array{5(5t-1) + 4(4t-4) + 2(2t-3) = 0 \\ 25t-5 + 16t-16 + 4t-6 = 0 \\ 45t - 27=0 \\ t=\frac{27}{45}}$$
Теперь подставляем это $t$ в $L(t)$, чтобы найти точку на прямой с минимальным расстоянием:
$$L(\frac{27}{45}) = \cases{x = 2+5\cdot \frac{27}{45} \\ y = -3+4\cdot \frac{27}{45} \\ z=1+2\cdot \frac{27}{45}} = \pmatrix{5 \\ -3/5 \\ 11/5}$$
Теперь расстояние считается просто как длина разницы этих точек:
$$\array{d(A) = |L(\frac{27}{45}) - A| = \\ = |(5-3, -3/5 - 1, 11/5 - 4)| = \\ = |(2, -8/5, -9/5)| = \\ =\sqrt{2^2 + (8/5)^2 + (9/5)^2} = \frac{7\sqrt{5}}5}$$
Ответ: $\frac{7\sqrt{5}}5$.

---
Другое решение задачи через построение параллелограмма.
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
## Угол между плоскостью и прямой
Условие: найдите угол между плоскостью $$3y+4z+6=0$$ и прямой $$\frac{x-1}2 = \frac y3 = \frac{z-2}6$$
![[https://microexcel.ru/wp-content/uploads/2021/09/ugol-pryamya-ploskost-9.png|400]]

Решение: первая мысль при задачах с углами - скалярное/векторное произведение. Одна из формул для них использует длины векторов и *угол между ними*.
Но эти произведения работают с векторами - а у нас есть плоскость. Чтобы сработать с ней, возьмем ее нормальный вектор: $\overline n(0;3;4)$. Так как $x$ в уравнении нет, это равносильно $0x+\ldots$, поэтому в векторе ставим ноль.
Для прямой тоже стоит взять вектор - но тут можно просто взять направляющий вектор: $\overline p(2;3;6)$.
Готовы два вектора, так что можем взять скалярное произведение двух векторов:
$$(\overline n, \overline p) = 0 \cdot 2 + 3\cdot 3 + 4 \cdot 6 = 9+24=33$$
С другой стороны, $$(\overline n, \overline p) = \cos \beta \cdot |\overline n| \cdot |\overline p|$$
Найдем длины векторов:
$$|\overline n| = \sqrt{0^2 + 3^2 + 4^2} = \sqrt{25} = 5$$
$$|\overline p| = \sqrt{6^2 + 3^2 + 2^2} = \sqrt{49} = 7$$
Отсюда косинус:
$$\cos \beta = \frac{(\overline n, \overline p)}{|\overline n||\overline p|} = \frac{33}{5\cdot 7} = \frac{33}{35}$$
Но ведь это косинус *бета*! Посмотрите на рисунке, какой именно угол мы нашли. Нам нужен угол $\alpha$. А раз угол между нормалью и плоскостью - прямой, то $\alpha$ можно выразить как $90^\circ - \beta$. Вспоминаем наши любимые тригонометрические формулы:
$$\cos \beta = \cos(90^\circ - \alpha) = \sin \alpha$$

Ответ: $\sin \alpha = \frac{33}{35}$, ну или $\alpha = \arcsin \frac{33}{35}$.