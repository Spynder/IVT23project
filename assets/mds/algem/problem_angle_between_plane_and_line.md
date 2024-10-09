Условие: найти угол между плоскостью
$$4x+4y-7z+1=0$$
и прямой
$$\array{x+y+z+1=0 \\ 2x+y+3z+2=0}$$

Решение: найдем угол между направляющим вектором прямой и нормальным вектором плоскости. Затем взяв "смежный" угол, мы найдем угол между прямой и плоскостью.

Нормаль плоскости берется просто из коэффициентов $A,B,C$:
$N = (4;4;-7)$

Чтобы взять направляющий вектор прямой, возьмем векторное произведение двух нормалей плоскостей, что составляют прямую. Вектор, полученный из векторного произведения, будет ортогонален двум векторам на входе, что как раз нам и нужно.
$$p=[N_1, N_2] = \left|\array{i & j & k \\ 1 & 1 & 1 \\ 2 & 1 & 3}\right| = (2;-1;-1)$$
Теперь возьмем угол между нормалью и направляющим вектором через скалярное произведение.
$$(a,b) = |a||b|\cos \alpha \Rightarrow \cos \alpha = \frac{(a,b)}{|a||b|}$$
Скалярное произведение считается просто как перемножение координат векторов вместе:
$$(a,b) = a_1b_1 + a_2b_2+a_3b_3$$
Длина же считается по теореме Пифагора:
$$|a| = \sqrt{a_1^2 + a_2^2 + a_3^2}$$
Считаем косинус!
$$\cos \alpha = \frac{2\cdot 4 -1 \cdot 4 + 1\cdot 7}{\sqrt{2^2+1^2+1^2} \sqrt{4^2 + 4^2 + 7^2}} = \frac{11}{9\sqrt 6}$$
Но это "смежный" угол с тем, что мы ищем. Нам нужен не $\alpha$, а $90^\circ - \alpha$.
$$\cos \alpha = \sin (90^\circ - \alpha) = \sin \beta$$
Поэтому мы можем сказать, что наш искомый угол $\beta$ равен
$$\beta = \arcsin \frac{11}{9\sqrt 6}$$

Ответ: $\arcsin \frac{11}{9\sqrt 6}$.