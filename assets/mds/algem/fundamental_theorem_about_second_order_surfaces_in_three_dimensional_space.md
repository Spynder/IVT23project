Как такая теорема была для линий второго порядка на плоскости, так подобная существует и для *плоскостей второго порядка в пространстве*.
Линии второго порядка - это уравнения второй степени от двух переменных (ведь плоскости - 2д). Соответственно плоскости второго порядка - это уравнения второй степени от *трех* переменных.
$$\array{Ax^2 + By^2 + Cz^2 + 2Dxy + 2Exz \ + \\ + \ 2Fyz + 2Gx + 2Hy + 2Iz + J = 0}$$
Вот такое мощное уравнение выходит.

Эта теорема гласит, что любая такая плоскость при замене координат нужным образом может быть описана *одним из 17 канонических уравнений* - причем 9 из них это те, что были описаны в прошлом билете. Они достигаются, когда все коэффициенты, где есть $z$ (быть точнее, это коэффициенты $C, E, F, I$), равны нулю. Тогда уравнение плоскости сводится к уравнению линии (которое из-за принадлежности пространству "выдавливается" вдоль оси $z$ бесконечно в обе стороны). $$Ax^2 + 2Dxy + By^2 + 2Gx + 2Hy + J = 0$$
По главной теореме из прошлого билета тут все понятно как происходят преобразования.

Вот эти 17 канонических уравнений - 8 новых и 9 старых:
1. Обычный и мнимый эллипсоиды: $$\frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1 \ \ \ \ \ \ \ \ \ \ \frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = -1$$
2. Однополостный и двуполостный гиперболоиды: $$\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 1 \ \ \ \ \ \ \ \ \ \ \frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = -1$$
3. Обычный и мнимый конусы: $$\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 0 \ \ \ \ \ \ \ \ \ \ \frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 0$$
4. Эллиптический и гиперболический параболоиды: $$2z = \frac{x^2}{a^2} + \frac{y^2}{b^2} \ \ \ \ \ \ \ \ \ \ 2z = \frac{x^2}{a^2} - \frac{y^2}{b^2}$$
Остаются так же 9 старых уравнений, которым даются новые имена в честь нового измерения. Напоминаю, что из-за отсутствия координаты $z$ в уравнении, фигуры выглядят как обычные линии на плоскости, но выдавленные вдоль оси $z$ в обе стороны.
1. Обычный и мнимый эллиптические цилиндры: $$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 \ \ \ \ \ \ \ \ \ \ \frac{x^2}{a^2} + \frac{y^2}{b^2} = -1$$
2. Гиперболический цилиндр: $$\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$$
3. Параболический цилиндр: $$y^2 = 2px$$
4. Параллельные плоскости - обычные, мнимые, совпадающие: $$y^2 - a^2 = 0 \ \ \ \ \ \ \ \ \ \ \ y^2 + a^2 = 0 \ \ \ \ \ \ \ \ \ \ \ y^2 = 0$$
5. Пары пересекающихся плоскостей - действительные и мнимые: $$a^2x^2 - c^2y^2 = 0 \ \ \ \ \ \ \ \ \ \ \ a^2x^2 + c^2y^2 = 0$$
Про последние 9 говорить смысла нет - это было в прошлом билете. Первые 8 уравнений приводятся по аналогии с тем, как мы это делали в прошлом билете, но я все равно накину грубый шаблон рассуждений.

Помните, как мы избавлялись от коэффициента $xy$ в уравнении линии второго порядка?
$$Ax^2 + \cancel{2Bxy} + Cy^2 + 2Dx + 2Ey + F = 0$$
На самом деле, от всех таких "смешанных" коэффициентов можно избавиться и для плоскости (и для любой квадратичной формы), с помощью метода Лагранжа.
Получается, мы можем привести самую обычную форму плоскости второго порядка к следующему уравнению с помощью изменения системы координат:
$$Ax^2 + By^2 + Cz^2 + 2Gx + 2Hy + 2Iz + J = 0$$
Затем с помощью переноса системы координат (точно так же, как и для линий второго порядка), можно укоротить уравнение еще дальше:
$$Ax^2 + By^2 + Cz^2 + J = 0$$
Ну и начинаем крутить его: переносим $J$, делим на него, получаем уравнения 1.1 и 1.2, в зависимости от знака $J$.
$$\array{\frac{x^2}{\sqrt{J/A}^2} + \frac{y^2}{\sqrt{J/B}^2} + \frac{z^2}{\sqrt{J/C}^2} = -1 \ \ \ \ \ \ \ \ \ \ \ \frac{x^2}{\sqrt{J/A}^2} + \frac{y^2}{\sqrt{J/B}^2} + \frac{z^2}{\sqrt{J/C}^2} = 1}$$
Когда коэффициент $C$ отрицателен, из этих уравнений получаются уравнения 2.1 и 2.2 (или же когда $C$ положителен, а $A$ и $B$ отрицательны, умножаем на -1):
$$\array{\frac{x^2}{\sqrt{J/A}^2} + \frac{y^2}{\sqrt{J/B}^2} - \frac{z^2}{\sqrt{J/C}^2} = -1 \ \ \ \ \ \ \ \ \ \ \ \frac{x^2}{\sqrt{J/A}^2} + \frac{y^2}{\sqrt{J/B}^2} - \frac{z^2}{\sqrt{J/C}^2} = 1}$$
А когда $J = 0$, остается лишь такое уравнение $$Ax^2 + By^2 + Cz^2 = 0$$
Здесь мы просто делим на все коэффициенты и получаем уравнения 3.1 и 3.2 (3.2 выходит, когда $C$ отрицателен)
$$\array{\frac{x^2}{\sqrt{BC}^2} + \frac{y^2}{\sqrt{AC}^2} +\frac{z^2}{\sqrt{AB}^2} = 0 \ \ \ \ \ \ \ \ \ \ \frac{x^2}{\sqrt{BC}^2} + \frac{y^2}{\sqrt{AC}^2} - \frac{z^2}{\sqrt{AB}^2} = 0}$$
Параболы остаются все так же слегка нетривиальным преобразованием, его мы получаем, начиная с такого уравнения:
$$Ax^2 + By^2 + Cz^2 + 2Gx + 2Hy + 2Iz + J = 0$$
Полагаем, что $C = 0$, $A \neq 0, B \neq 0$. Тогда с помощью переноса системы координат, уравнение можно свести к такому:
$$Ax^2 + By^2 + 2Iz = 0$$
Теперь остается лишь немного алгебраической магии, и мы получаем уравнения 4.1 и 4.2, зависящие от знака $B$.
$$2z = \frac{x^2}{\sqrt{-I/A}^2} + \frac{y^2}{\sqrt{-I/B}^2} \ \ \ \ \ \ \ \ \ \ 2z = \frac{x^2}{\sqrt{-I/A}^2} - \frac{y^2}{\sqrt{-I/B}^2}$$
## Пример задачи
Замените систему координат для плоскости $$x^2 + 9y^2 + z^2 + 6xy + 2xz + 2yz = 0$$чтобы ее можно было записать каноническим уравнением.
Решение: для этого будем решать методом Лагранжа: постепенно выделять полные квадраты для наших переменных, заменяя систему координат по пути.
$$\underline{x^2 + 2x(3y + z)} + 9y^2 + z^2 + 2yz = 0$$
Нужно дополнить до полного квадрата: добавляем и вычитаем $(3y+z)^2$:
$$\array{\underline{x^2 + 2x(3y + z) + (3y+z)^2} + 9y^2 + z^2 + 2yz - \underline{(3y+z)^2} = 0\\(x+3y+z)^2 + 9y^2 + z^2 + 2yz - (9y^2 + 6yz + z^2) = 0 \\ (x + 3y+z)^2 - 4yz = 0}$$
Заменяем базис:
$$\cases{x' = x + 3y + z \\ y' = y \\ z' = z}$$
$${x'}^2 - 4y'z' = 0$$
Осталось только слагаемое $4y'z'$. Сделаем замену, чтобы представить это слагаемое как разность квадратов.
$$\cases{x' = x'' \\ y' = y''-z'' \\ z' = y''+z''}$$
$$\array{{x''}^2 - 4(y''-z'')(y''+z'') = 0 \\ {x''}^2 - 4{y''}^2 + 4{z''}^2 =0}$$
Можно наконец сделать последнюю трансформацию чтобы подвести уравнение к каноническому - поворот.
$$\cases{x'' = x^* \\ y'' = -z^* \\ z'' = y^*}$$
$$\array{{x^*}^2 - 4{z^*}^2 + 4{y^*}^2 = 0 \Rightarrow \\ \Rightarrow {x^*}^2 + 4{y^*}^2 - 4{z^*}^2 = 0}$$
$$\frac{{x^*}^2}{1^2} + \frac{{y^*}^2}{(1/2)^2} - \frac{{z^*}^2}{(1/2)^2} = 0$$
Получился конус.
Соберем все наши трансформации вместе:
1. Вначале мы сделали следующее преобразование: $$\cases{x' = x + 3y + z \\ y' = y \\ z' = z} \Rightarrow \left(\array{x' \\ y' \\ z'}\right) = \left(\array{1 & 3 & 1 \\ 0 & 1 & 0 \\ 0 & 0 & 1}\right)\left(\array{x \\ y \\ z}\right)$$
2. Следующее преобразование мы дали в обратном порядке: $$\cases{x' = x'' \\ y' = y''-z'' \\ z' = y''+z''} \Rightarrow \left(\array{x' \\ y' \\ z'}\right) = \left(\array{1 & 0 & 0 \\ 0 & 1 & -1 \\ 0 & 1 & 1}\right)\left(\array{x'' \\ y'' \\ z''}\right)$$
   Преобразуем в искомую форму с помощью обратной матрицы:$$ \left(\array{x'' \\ y'' \\ z''}\right) = \frac12 \left(\array{2 & 0 & 0 \\ 0 & 1 & 1 \\ 0 & -1 & 1}\right)\left(\array{x' \\ y' \\ z}\right)$$
3. Последняя трансформация-поворот была с такой системой: $$\cases{x'' = x^* \\ y'' = -z^* \\ z'' = y^*} \Rightarrow \cases{x^* = x'' \\ y^* = z'' \\ z^* = -y''}  \Rightarrow \left(\array{x^* \\ y^* \\ z^*}\right) = \left(\array{1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & -1 & 0}\right)\left(\array{x'' \\ y'' \\ z''}\right)$$
Подставляя их друг в друга, мы сможем найти *композицию* всех трансформаций, перемножив промежуточные матрицы:
$$\left(\array{x^* \\ y^* \\ z^*}\right) = \left(\array{1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & -1 & 0}\right)\frac12 \left(\array{2 & 0 & 0 \\ 0 & 1 & 1 \\ 0 & -1 & 1}\right)\left(\array{1 & 3 & 1 \\ 0 & 1 & 0 \\ 0 & 0 & 1}\right)\left(\array{x \\ y \\ z}\right)$$
Я избавлю вас от лишних вычислений. После перемножения получается следующая матрица:
$$\frac12 \left(\array{1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & -1 & 0}\right)\left(\array{2 & 0 & 0 \\ 0 & 1 & 1 \\ 0 & -1 & 1}\right)\left(\array{1 & 3 & 1 \\ 0 & 1 & 0 \\ 0 & 0 & 1}\right) = \frac 12 \left(\array{2 & 6 & 2 \\ 0 & -1 & 1 \\ 0 & -1 & -1}\right)$$
$$\left(\array{x^* \\ y^* \\ z^*}\right) = \frac 12 \left(\array{2 & 6 & 2 \\ 0 & -1 & 1 \\ 0 & -1 & -1}\right) \left(\array{x \\ y \\ z}\right)$$
Ну и с помощью обратной матрицы получаем:
$$\left(\array{x \\ y \\ z}\right) = \left(\array{1 & 2 & 4 \\ 0 & -1 & -1 \\ 0 & 1 & -1}\right) \left(\array{x^* \\ y^* \\ z^*}\right)$$
