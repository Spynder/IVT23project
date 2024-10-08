Для начала вспомним, что такое уравнение второго порядка:
$$Ax^2 + 2Bxy + Cy^2 + 2Dx + 2Ey + D=0$$
Как было сказано в одном из прошлых билетов, мы добавляем 2 к некоторым коэффициентам, потому что в формулах часто используются половины этих коэффициентов.

Подробнее про замену системы координат уже было описано в [[#14. Замена базиса и системы координат. Изменение координат при параллельном переносе и повороте.]]
Замена координат сопровождается новым базисом и новой точкой начала координат. Раз у нас все в 2д (из-за двух переменных), старый базис мы зададим как $(\overline{e_1}; \overline{e_2})$, новый как $(\overline{e_1'}; \overline{e_2'})$, и эти базисные вектора заданы через старые как $\overline {e_1'} = \alpha_1 \overline{e_1} + \beta_1 \overline{e_2}$ и $\overline {e_2'} = \alpha_2 \overline{e_1} + \beta_2 \overline{e_2}$.
Новая точка начала координат в старом базисе имеет координаты $O(x_0; y_0)$.
И чтобы избавить от всех же долгих рассуждений, вектор с координатами $\overline a(a_1; a_2)$, будет в новом базисе иметь координаты $(a_1'; a_2')$, связанные следующими уравнениями:
$$\cases{a_1 = a_1'\alpha_1 + a_2'\alpha_2 + O_1 \\ a_2 = a_1'\beta_1 + a_2'\beta_2 + O_2}$$
То есть ничего нового и для линий второго порядка. Между прочим, ничего нового не будет и для линий высшего порядка, потому что рассуждения в билете #14 никак не зависили от порядка, и лишь рассматривали преобразования базисов.

Из такой системы уравнений можно заметить, что при замене системы координат степень уравнения не меняется. Он явно уж не может увеличится, ибо слева и справа координаты в первой степени, а понизиться он не может, потому что тогда бы существовала какая-то система, при преобразовании которой степень бы повысилась (а мы ток что сказали, что такого быть не может).

Теперь поговорим про повороты и смещения. Как и раньше, мы отныне считаем, что наши системы - декартовы прямоугольные.
Поворот системы координат на угол $\varphi$ против часовой стрелки ничем не отличается для любых порядков линий, старые и новые координаты все так же связаны следующими уравнениями:
$$\cases{x = x' \cos \varphi - y' \sin \phi \\ y = x' \sin \varphi + y' \cos \varphi}$$
Поворот интересен тем, что с его помощью возможно занулить слагаемое $2Bxy$. Чтобы это увидеть, подставим координаты в системе выше в общее уравнение линии второго порядка.
$$\array{A(x' \cos \varphi - y' \sin \phi)^2 + \\ + 2B(x' \cos \varphi - y' \sin \phi)(x' \sin \varphi + y' \cos \varphi) + \\ C(x' \sin \varphi + y' \cos \varphi)^2 + \\ + 2D(x' \cos \varphi - y' \sin \phi) + \\ + 2E(x' \sin \varphi + y' \cos \varphi) + \\ + D=0}$$
Нас интересует коэффициент $2B'$, то есть те слагаемые, что будут вместе с $x'y'$. Если посмотрите на все это уравнение, такие слагаемые получатся только из скобок рядом с $A,B$ и $C$. Раскроем их полностью.
$$A(x' \cos \varphi - y' \sin \phi)^2 = A({x'}^2\cos^2 \varphi - \underline{2x'y'\cos \varphi \sin \varphi} + {y'}^2\sin^2 \varphi)$$
$$\array{2B(x' \cos \varphi - y' \sin \phi)(x' \sin \varphi + y' \cos \varphi) = \\ 2B({x'}^2 \cos  \varphi \sin \varphi + \underline{x'y'\cos^2\varphi - x'y'\sin^2 \varphi} - y'^2\cos\varphi\sin\varphi)}$$
$$C(x' \sin \varphi + y' \cos \varphi)^2 = C ({x'}^2\sin^2 \varphi + \underline{2x'y'\sin \varphi \cos \varphi} + {y'}^2\cos^2 \varphi)$$
Собирая все слагаемые вместе (и деля на два), получаем выражение для коэффициента $B'$ после подстановки.
$$B' = -A\cos \varphi \sin \varphi + B(\cos^2\varphi - \sin^2 \varphi) + C\sin\varphi\cos\varphi$$
Наша цель поделить на $\cos^2 \varphi$ и получить квадратное уравнение, чтобы найти угол, при котором $B'$ равен нулю, но перед этим нужно рассмотреть случай $\cos \varphi = 0$. В таком случае $\sin \varphi = 1$, и тогда $B'$ легко считается.
$$B' = -A \cdot 0 \cdot 1 + B(0 - 1) + C \cdot 1 \cdot 0 = -B$$
То есть $B'$ просто поменяет свой знак. Случай рассмотрен, так что делим на $\cos^2 \varphi$ без зазрений совести. Полагаем $B' = 0$ (искомые корни):
$$\array{-A\cos \varphi \sin \varphi + B(\cos^2\varphi - \sin^2 \varphi) + C\sin\varphi\cos\varphi = 0 \ | : \cos^2 \varphi \\ -A \frac{\sin \varphi}{\cos \varphi} - B (1 -\frac{\sin^2 \varphi}{\cos^2 \varphi}) + C\frac{\sin \varphi}{\cos \varphi} = 0}$$
Вводим замену $t = \tg \varphi = \frac{\sin \varphi}{\cos \varphi}$ и получаем самое обычное квадратное уравнение:
$$Bt^2 -(C-A)t - B = 0$$
Дискриминант уравнения равен $D = (C-A)^2 + 4B^2$, что всегда будет больше нуля, пока $B \neq 0$. Но если бы он был равен нулю, мы бы не искали эти корни в первую очередь. Это значит, что есть как минимум два таких угла, которые бы обратили $B'$ в ноль. С помощью теоремы Виета мы можем посмотреть, как эти корни связаны между собой.
$$t_1 t_2 = \frac CA = \frac{-1}1 = -1$$
Так как $t = \tg \varphi$, можно думать о нем, как об угловом коэффициенте прямой $y=tx + b$. Равенство $t_1t_2 = -1$ означает, что две прямые с такими коэффициентами будут перпендикулярны друг другу (подробнее об этом в билете [[#16. Параллельность и ортогональность прямых на плоскости и плоскостей в пространстве.]]).
По-другому можно представить это равенство как $\tg (\varphi_1+90^\circ) = - \ctg(\varphi_1+90^\circ) = \tg \varphi_2$.
Это равенство значит, что после поворота на угол $\varphi_1$, мы можем поворачивать еще сколько угодно раз на $90^\circ$, и $B'$ останется нулем.
После такого поворота изменяются все коэффициенты (в общем случае), и мы остаемся с следующим уравнением:
$$A'x^2 + C'y^2 + 2D'x + 2E'y + F' = 0$$
Это уравнение можно сократить еще дальше с помощью смещения.

Если в уравнение входит *ненулевой* коэффициент при квадрате одной из координат (например $A'$ или $C'$), то с помощью переноса системы координат вдоль соответствующей оси ($x$ или $y$ соответственно) возможно занулить член 1 степени этой координаты ($2D'x$ или $2E'y$ соответственно).

Для примера трансформации скажем мы хотим занулить $2D'x$, при условии $A' \neq 0$. Для этого занесем $2D'x$ в скобку $A'$ и дополним ее до полного квадрата.
$$A'(x^2 + 2 x\frac{D'}{A'}) + C'y^2 + 2E'y + F'=0$$
Теперь дополняем до полного квадрата, добавляя и вычитая $\frac{{D'}^2}{A'}$:
$$A'\left(x^2 + 2 x \frac{D'}{A'} + \left(\frac{{D'}}{{A'}}\right)^2\right) + C'y^2 + 2E'y + F' - \frac{{D'}^2}{{A'}}=0$$
$$A'\left(x + \frac{D'}{A'} \right)^2 + C'y^2 + 2E'y + \left(F' - \frac{{D'}^2}{A'}\right) = 0$$
Таким образом, если мы сделаем параллельный перенос на вектор $(-\frac{D'}{A'}; 0)$.
$$\cases{x' = x + \frac{D'}{A'} \\ y' = y}$$
То уравнение принимает новый вид, без лишнего коэффициента:
$$A'{x'}^2 + C'{y'}^2 + 2E'y' + F'' = 0$$
Аналогичным образом, можно сместить систему координат вдоль оси $y$ чтобы привести к уравнению с тремя слагаемыми...
$$Ax^2 + Cy^2 + F=0$$