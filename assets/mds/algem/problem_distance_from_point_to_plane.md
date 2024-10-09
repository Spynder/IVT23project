Условие: найти расстояние от точки $M_0(-12;1;8)$ до плоскости, проходящей через точки $M_1(-4;2;6), M_2(2;-3;0), M_3(-10;5;8)$.

Решение: сначала построим каноническое уравнение плоскости, и по формуле расстояния от точки до плоскости найдем расстояние.

Каноническое уравнение мы строим с помощью смешанного произведения. Выделим векторы, которые задают плоскость:
$M_1M_2 = M_2 - M_1 = (6;-5;-6)$
$M_1M_3 = M_3 - M_1 = (-6;3;2)$

Третий вектор, $M_1X = (x+4;y-2;z-6)$, будет создавать нам плоскость. Если смешанное произведение, образованное этими тремя векторами, равно нулю, то они компланарны - тогда вектор $(x+4;y-2;z-6)$ задаст уравнение плоскости.
$$(M_1M_2, M_1M_3, M_1X) = \left|\array{x+4 & y-2 & z-6 \\ 6 & -5 & -6  \\ -6 & 3 & 2}\right| = 0$$
$$2x+6y-3z+14=0$$
Теперь можно применить формулу расстояния:
$$d(M_0) = \frac{|Ax + By + Cz+D|}{\sqrt{A^2 + B^2 + C^2}} = $$
$$= \frac{|-12\cdot 2 +1 \cdot 6 - 8 \cdot 3 + 14|}{\sqrt{2^2+6^2+3^2}} = \frac{28}{7}=4$$

Ответ: $4$.

---
Условие: Найти расстояние от точки $M_0(10;1;8)$ до плоскости, проходящей через точки $M_1(7;2;4), M_2 (7; 1; 2), M_3 (5; 2; 1)$.

Решение:
Шаг первый: посчитать векторы плоскости
$M_1M_2 = M_2 - M_1 = (0;-1;-2)$
$M_1M_3 = M_3 - M_1 = (-2;0;-3)$
$M_1X = X - M_1 = (x-7;y-2;z-4)$

Шаг второй: находим уравнение плоскости
$$(M_1M_2, M_1M_3, M_1X) = \left|\array{x-7 & y-2 & z-4 \\ 0 & -1 & -2  \\ -2 & 0 & -3}\right| = 0$$
$$3 x + 4 y - 2 z - 21 = 0$$
Шаг третий: находим расстояние
$$d(M_0) = \frac{|Ax + By + Cz+D|}{\sqrt{A^2 + B^2 + C^2}} = $$
$$= \frac{|3\cdot 10 + 4\cdot 1 - 2 \cdot 8-21|}{\sqrt{3^2 + 4^2 + 2^2}} = \frac{3}{\sqrt{29}} = 0$$

Ответ: $\frac{3}{\sqrt{29}}$

