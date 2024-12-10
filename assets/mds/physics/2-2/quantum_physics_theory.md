## Линейная алгебра и матанализ
Первым делом необходимо вспомнить, что такое [мнимая единица][[[0,0,30]]], что такое [векторы, матрицы][[[0,1,0]]], и [как их умножать между собой][[[0,1,1]]].

Полезно так же почитать про [замену][[[0,0,13]]] [базиса][[[0,1,24]]], ибо есть задачки, в которых это надо делать. В некоторых задачах следует разбить экспоненту в тригонометрические функции по [формуле Эйлера][[[0,0,31]]], так что про нее тоже стоит помнить.


## Базисы
Есть три вида базисов. Первый - стандартный, канонический, вычислительный базис:
$$\ket H = \ket 0 = \pmatrix{1 \\ 0} \ \ \ \ \ \ \ \ \ \ \ket V = \ket 1 = \pmatrix{0 \\ 1}$$
Есть диагональный базис:
$$\ket + = \frac1{\sqrt 2}(\ket H + \ket V) = \frac1{\sqrt 2}\pmatrix{1 \\ 1} \ \ \ \ \ \ \ \ \ \ \ket - = \frac1{\sqrt 2}(\ket H - \ket V)=\frac1{\sqrt 2}\pmatrix{1 \\ -1}$$
И круговой базис (он почти как диагональный, только с мнимой единицей во второй координате):
$$\ket R = \frac1{\sqrt 2}(\ket H + i\ket V) = \frac1{\sqrt 2}\pmatrix{1 \\ i} \ \ \ \ \ \ \ \ \ \ \ket L = \frac1{\sqrt 2}(\ket H - i\ket V)=\frac1{\sqrt 2}\pmatrix{1 \\ -i}$$

## Операторы Паули
Это три матрицы, их нужно просто заучить:
$$\sigma_x = \pmatrix{0 & 1 \\ 1 & 0} \ \ \ \sigma_y = \pmatrix{0 & -i \\ i & 0} \ \ \ \sigma_z = \pmatrix{1 & 0 \\ 0 & -1}$$
Они часто используются для проекции спина на ось, что я разберу позже.
## Бра-кет нотация векторов
Векторы обернуты в скобочки: $\braket{A|B}$. По-английски скобочки это bracket, от сюда и названия для каждой частички: bra вектор $\bra A$, и ket вектор $\ket B$.

Обычно в условии дают кет-векторы, и они даются либо в явном виде как вектор-столбец, либо через линейную комбинацию базисных векторов:
$$\ket \Psi = \frac{1}{\sqrt{2}}(\ket R + \ket L) = \frac{1}{\sqrt2}\pmatrix{2 \\ 0}$$
Кет векторы обычно называют "состояниями частицы".

Бра-вектор связан с кет-вектором. Чтобы получить бра-вектор из данного кет-вектора нужно его транспонировать и комплексно сопрячь - комбинация таких операций называется *эрмитовым сопряжением*. Напоминаю, что это значит:

Транспонирование - положить вектор на бок, отразить вдоль главной диагонали, и т.д.
$$\pmatrix{a_1 \\ a_2 \\ a_3 \\ a_4}^T = \pmatrix{a_1 & a_2 & a_3 & a_4}$$
Комплексное сопряжение - операция над комплексными числами, которое превращает число вида $a + bi$ в число $a-bi$. В нашем случае, чтобы комплексно сопрячь число, нужно заменить все $i$ на $-i$.

Например, получение бра-вектора из кет-вектора $\ket L$ выглядит следующим образом: сначала я транспонирую, потом сопрягу, хотя порядок операций здесь не важен.
$$\ket L = \frac1{\sqrt 2}\pmatrix{1 \\ -i} \to \frac{1}{\sqrt 2}\pmatrix{1 & -i} \to \frac{1}{\sqrt 2}\pmatrix{1 & i} = \bra L$$
Транспонирование обозначается буквой Т, комплексное сопряжение отмечается звездочкой, а эрмитово сопряжение (их комбинация) отмечается плюсиком:
$$\array{\braket{A|B}^T & \braket{A|B}^* & \braket{A|B}^\dagger}$$
Умножение бра на кет векторы записывают слитно, пропуская двойную палочку, которая должна там образовываться:
$$\bra A \ket B = \braket{A|B}$$
Эта запись подразумевает скалярное умножение двух векторов, то есть должно получаться число, а не вектор.

Обычно в задачах умножение бра и кет вектора одного состояния должно давать единицу, это можно использовать для самопроверки получения бра-вектора:
$$\braket{L|L} = \frac{1}{\sqrt 2}\pmatrix{1 & i} \cdot \frac{1}{\sqrt 2}\pmatrix{1 \\ -i} = \frac12(1\cdot 1 + i\cdot(-i)) = \frac12(1+1) = 1$$
## Операторы
В задачах часто встречается "оператор действует на состояние", туда сюда все такое. Эти операторы либо заданы прям явно в виде функции, либо в виде матрицы - нужно вспомнить, что матрицы являются операторами - чтобы применить оператор-матрицу к вектору, нужно этот оператор умножить на вектор *слева*, по типу как бы мы применяли функцию.

Часто операторы получают "шапочку" над ними, это чисто обозначение - матрицы без шапочек могут быть все такими же операторами.

Например, применение оператора Паули $\hat \sigma_x$ на состояние $\ket L$ выглядит как умножение вектора на матрицу:
$$\hat \sigma_x \cdot \ket L = \pmatrix{0 & 1 \\ 1 & 0} \cdot \frac{1}{\sqrt 2} \pmatrix{1 \\ -i} = \frac{1}{\sqrt 2}\pmatrix{-i \\ 1}$$
Оператор $\hat I$ - тождественный оператор, просто единичная матрица.

## Вероятности
Когда просят найти вероятность попадания частицы $\ket \Psi$ в состояние $\ket L$, это записывают как $P_\Psi (\ket L)$. Вероятность находится как квадрат модуля следующего скалярного умножения:
$$P_\Psi (\ket L) = |\braket{\Psi | L}|^2$$
Вопрос: зачем модуль, если есть квадрат? Ответ: у комплексных чисел свой способ получения модуля.

Модуль комплексного числа $a + bi$ определяется как $\sqrt{a^2 + b^2}$. Но здесь мы можем использовать трюк с комплексным сопряжением, чтобы упростить наши расчеты.

Произведение комплексного числа на его сопряженное дает квадрат его модуля:
$$(a+bi)(a-bi) = a^2 - abi + abi -(bi)^2 = a^2+b^2 = |a+bi|^2$$
Поэтому чтобы находить квадрат модуля скалярного умножения, можем просто умножать результат скалярного произведения на его сопряженное:
$$P_\Psi (\ket L) = \braket{\Psi | L} \cdot \braket{\Psi | L}^*$$
Эта формула работает даже тогда, когда скалярное произведение - действительное число (в таком случае сопряжение не меняет число, и получается обычный квадрат).

## Средние значения, дисперсии и неопределенности
Бывают спрашивают "найдите среднее значение оператора в состоянии каком-то там". Обозначают это как $\braket{\hat A}_\Psi$. Ищется элементарно - умножаем оператор на бра и кет векторы состояния:
$$\braket {\hat A}_\Psi = \bra \Psi \hat A \ket \Psi$$
Поверх среднего значения строится дисперсия оператора в состоянии: $(D\hat A)_\Psi$. Она считается по следующей формуле:
$$(D\hat A)_\Psi = \braket{A^2}_\Psi - \braket{A}_\Psi^2 = \bra \Psi \hat A^2 \ket \Psi - (\bra \Psi \hat A \ket \Psi)^2$$
И поверх дисперсии строится неопределенность: $(\Delta \hat A)_\Psi$ - это просто корень из дисперсии.
$$(\Delta \hat A)_\Psi = \sqrt{(D\hat A)_\Psi}$$
## Тензорное произведение
Величайшая операция, которая обозначается между двумя матрицами как $A \otimes B$. Результатом получается новая матрица, образованная будто бы "подстановкой" правой матрицы в левую.
$$\pmatrix{a_{11} & a_{12} \\ a_{21} & a_{22}} \otimes \pmatrix{b_{11} & b_{12} \\ b_{21} & b_{22}} = \pmatrix{a_{11}\pmatrix{b_{11} & b_{12} \\ b_{21} & b_{22}} & a_{12}\pmatrix{b_{11} & b_{12} \\ b_{21} & b_{22}} \\ a_{21}\pmatrix{b_{11} & b_{12} \\ b_{21} & b_{22}} & a_{22}\pmatrix{b_{11} & b_{12} \\ b_{21} & b_{22}}}=$$
$$= \pmatrix{
a_{11}b_{11} & a_{11}b_{12} & a_{12}b_{11} & a_{12} b_{12} \\
a_{11}b_{21} & a_{11}b_{22} & a_{12}b_{21} & a_{12} b_{22} \\ 
a_{21}b_{11} & a_{21}b_{12} & a_{22}b_{11} & a_{22} b_{12} \\
a_{21}b_{21} & a_{21}b_{22} & a_{22}b_{21} & a_{22} b_{22}}$$
Таким образом, левая матрица "разбухает" с помощью правой. Обращаю внимание, что тензорное произведение не коммутативно: $A \otimes B \neq B \otimes A$! Ну и еще парочку примеров:
$$\pmatrix{a_1 \\ a_2} \otimes \pmatrix{b_1 \\ b_2} = \pmatrix{a_1\pmatrix{b_1 \\ b_2} \\ a_2\pmatrix{b_1 \\ b_2}} = \pmatrix{a_1b_1 \\ a_1b_2 \\ a_2b_1 \\ a_2b_2}$$
$$\pmatrix{a_1 & a_2} \otimes \pmatrix{b_1 & b_2} = \pmatrix{a_1\pmatrix{b_1 & b_2} & a_2\pmatrix{b_1 & b_2}} = \pmatrix{a_1b_1 & a_1b_2 & a_2b_1 & a_2b_2}$$
$$\pmatrix{a_1 \\ a_2} \otimes \pmatrix{b_1 & b_2} = \pmatrix{a_1\pmatrix{b_1 & b_2} \\ a_2\pmatrix{b_1 & b_2}} = \pmatrix{a_1b_1 & a_1b_2 \\ a_2b_1 & a_2b_2}$$
$$\pmatrix{a_1 & a_2} \otimes \pmatrix{b_1 \\ b_2} = \pmatrix{a_1\pmatrix{b_1 \\ b_2} & a_2\pmatrix{b_1 \\ b_2}} = \pmatrix{a_1b_1 & a_2b_1 \\ a_1b_2 & a_2b_2}$$

Иногда кратким образом записывают тензорные произведения двух векторов:
$$\array{\ket A \ket B = \ket{AB} = \ket A \otimes \ket B \\ \ket A \bra B = \ket A \otimes \ket B \\ \bra A \bra B = \bra A \otimes \bra B}$$
Только $\bra A \ket B$ не является тензорным произведением, а считается как скалярное произведение.
## Коммутаторы
Коммутатор двух операторов, обозначается как $[\hat A, \hat B]$, считается по простой формулке:
$$[\hat A, \hat B] = \hat A\hat B - \hat B \hat A$$

## Проекция спинов
Она находится через операторы Паули. Проекция спина состояния на ось считается по следующей формуле:
$$\hat S_i = \frac{\hbar}{2} \hat \sigma_i$$
где $\hbar$ - постоянная Дирака (приведенная постоянная Планка).
Проекция суммарного спина:
$$\hat S_{\Sigma, i} = \frac{\hbar}{2}(\hat \sigma_i \otimes \hat I + \hat I \otimes \hat \sigma_i)$$