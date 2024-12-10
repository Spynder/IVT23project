# Задание 1
Вектор Блоха для односоставного состояния $\ket \psi$ можно определить как $b_\psi = (\braket{\hat \sigma_x}_\psi, \braket{\hat \sigma_y}_\psi, \braket{\hat \sigma_z}_\psi)$, где $\hat \sigma_x, \hat \sigma_y, \hat \sigma_z$ - операторы Паули, $\braket{\hat \sigma_i}_\psi$ - квантово-механическое среднее оператора $\hat \sigma_i$ в состоянии $\ket \psi$. Найти вектор Блоха (выписать столбец координат) для состояний а) $\ket R$, б) $\ket L$.

Решение: сначала решим а) тогда $\ket \psi = \ket R = \frac{1}{\sqrt 2}\pmatrix{1 \\ i}$. Его бра-вектор найдем транспонированием и сопряжением:
$$\bra \psi = \frac1{\sqrt 2}\pmatrix{1 & -i}$$
Теперь остается просто прощелкивать каждую координату вектора Блоха:
$$\array{\braket{\hat \sigma_x}_\psi = \bra \psi \hat \sigma_x \ket \psi = \frac1{\sqrt 2}\pmatrix{1 & -i} \cdot \pmatrix{0 & 1 \\ 1 & 0} \cdot \frac{1}{\sqrt 2}\pmatrix{1 \\ i} = \\ = \frac12 \pmatrix{1 & -i}\pmatrix{0 & 1 \\ 1 & 0}\pmatrix{1 \\ i} = \frac12 \pmatrix{1 & -i}\pmatrix{i \\ 1} = \frac12(i-i) = 0}$$
$$\array{\braket{\hat \sigma_y}_\psi = \bra \psi \hat \sigma_y \ket \psi = \frac1{\sqrt 2}\pmatrix{1 & -i} \cdot \pmatrix{0 & -i \\ i & 0} \cdot \frac{1}{\sqrt 2}\pmatrix{1 \\ i} = \\ = \frac12 \pmatrix{1 & -i}\pmatrix{0 & -i \\ i & 0}\pmatrix{1 \\ i} = \frac12 \pmatrix{1 & -i}\pmatrix{1 \\ i} = \frac12(1 + 1) = 1}$$
$$\array{\braket{\hat \sigma_z}_\psi = \bra \psi \hat \sigma_z \ket \psi = \frac1{\sqrt 2}\pmatrix{1 & -i} \cdot \pmatrix{1 & 0 \\ 0 & -1} \cdot \frac{1}{\sqrt 2}\pmatrix{1 \\ i} = \\ = \frac12 \pmatrix{1 & -i}\pmatrix{1 & 0 \\ 0 & -1}\pmatrix{1 \\ i} = \frac12 \pmatrix{1 & -i}\pmatrix{1 \\ -i} = \frac12(1 - 1) = 0}$$
Получается, вектор Блоха для $\ket \psi = \ket R$ будет равен $b_R = \pmatrix{0 & 1 &0}$

Теперь для б) $\ket \psi = \ket L = \frac{1}{\sqrt 2}\pmatrix{1 \\ -i}$ ситуация схожая. Считаем бра-вектор:
$$\bra \psi = \frac1{\sqrt 2}\pmatrix{1 & i}$$
И считаем каждую координату:
$$\array{\braket{\hat \sigma_x}_\psi = \bra \psi \hat \sigma_x \ket \psi = \frac1{\sqrt 2}\pmatrix{1 & i} \cdot \pmatrix{0 & 1 \\ 1 & 0} \cdot \frac{1}{\sqrt 2}\pmatrix{1 \\ -i} = \\ = \frac12 \pmatrix{1 & i}\pmatrix{0 & 1 \\ 1 & 0}\pmatrix{1 \\ -i} = \frac12 \pmatrix{1 & i}\pmatrix{-i \\ 1} = \frac12(-i + i) = 0}$$
$$\array{\braket{\hat \sigma_y}_\psi = \bra \psi \hat \sigma_y \ket \psi = \frac1{\sqrt 2}\pmatrix{1 & i} \cdot \pmatrix{0 & -i \\ i & 0} \cdot \frac{1}{\sqrt 2}\pmatrix{1 \\ -i} = \\ = \frac12 \pmatrix{1 & i}\pmatrix{0 & -i \\ i & 0}\pmatrix{1 \\ -i} = \frac12 \pmatrix{1 & i}\pmatrix{-1 \\ i} = \frac12(-1-1) = -1}$$
$$\array{\braket{\hat \sigma_z}_\psi = \bra \psi \hat \sigma_z \ket \psi = \frac1{\sqrt 2}\pmatrix{1 & i} \cdot \pmatrix{1 & 0 \\ 0 & -1} \cdot \frac{1}{\sqrt 2}\pmatrix{1 \\ -i} = \\ = \frac12 \pmatrix{1 & i}\pmatrix{1 & 0 \\ 0 & -1}\pmatrix{1 \\ -i} = \frac12 \pmatrix{1 & i}\pmatrix{1 \\ i} = \frac12(1-1) = 0}$$
Тогда $b_L = \pmatrix{0 & -1 & 0}$
Ответ: $b_R = \pmatrix{0 & 1 & 0}, b_L = \pmatrix{0 & -1 & 0}$.

# Задание 2
Пусть операторы $\hat A$ и $\hat B$ заданы как проекторы: $\hat A = \ket H \bra H$, $\hat B = \ket V \bra V$. Это значит, что оператор $\hat A$ действует на вектор состояния $\ket \psi$ по правилу: $\hat A \ket \psi = \ket H \braket{H | \psi}$, где $\braket{H|\psi}$ - число (скалярное произведение), на которое домножается вектор $\ket H$. Найти результат действия оператора $\hat A \otimes \hat B$ на вектор
$$\ket \Psi = \frac{\ket H \otimes \ket V + \ket V \oplus \ket H}{\sqrt 2}$$
(в квантовых вычислениях это обозначают так: $\hat A = \ket 0 \bra 0$, $\hat B = \ket 1 \bra 1$, $\bra \Psi = \frac{\ket{01} + \bra{10}}{\sqrt 2})$. Ответ можно представить в виде вектор-столбца, матрицы амплитуд или тензорного произведения базисных векторов (по желанию).

Посчитаем операторы:
$$\hat A = \ket H \bra H = \pmatrix{1 \\ 0} \otimes \pmatrix{1 & 0}= \pmatrix{1 & 0 \\ 0 & 0}$$
$$\hat B = \ket V \bra V = \pmatrix{0 \\ 1} \otimes \pmatrix{0 & 1}= \pmatrix{0 & 0 \\ 0 & 1}$$
Теперь посчитаем оператор $\hat A \otimes \hat B$ - так как матрицы в основном состоят из нулей, тензорное произведение считается очень быстро:
$$\pmatrix{1 & 0 \\ 0 & 0} \otimes \pmatrix{0 & 0 \\ 0 & 1} = \pmatrix{
0 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\ 
0 & 0 & 0 & 0 \\ 
0 & 0 & 0 & 0}$$
Теперь найдем $\ket \Psi$:
$$\array{\ket H \otimes \ket V = \pmatrix{1 \\ 0} \otimes \pmatrix{0 \\ 1} = \pmatrix{0 \\ 1 \\ 0 \\ 0} \\ \ket V \otimes \ket H = \pmatrix{0 \\ 1} \otimes \pmatrix{1 \\ 0} = \pmatrix{0 \\ 0 \\ 1 \\ 0}}$$
Тогда
$$\ket \Psi = \frac{1}{\sqrt 2} \left(\pmatrix{0 \\ 1 \\ 0 \\ 0} + \pmatrix{0 \\ 0 \\ 1 \\ 0}\right) = \frac1{\sqrt 2}\pmatrix{0 \\ 1 \\ 1 \\ 0}$$

Действие оператора на вектор - еще одно матричное умножение:
$$(\hat A \otimes \hat B)\ket \Psi = \pmatrix{
0 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\ 
0 & 0 & 0 & 0 \\ 
0 & 0 & 0 & 0}\frac1{\sqrt 2}\pmatrix{0 \\ 1 \\ 1 \\ 0} = \frac1{\sqrt 2}\pmatrix{0 \\ 1 \\ 0 \\ 0}$$
Ответ: $\frac1{\sqrt 2}\pmatrix{0 \\ 1 \\ 0 \\ 0}$

Посмотрим на действие оператора $\hat A$ в общем случае:
$$\hat A \ket \psi = \ket X \braket{X | \psi} = \pmatrix{X_1 \\ X_2} \pmatrix{X_1 & X_2} \pmatrix{\psi_1 \\ \psi_2} = \pmatrix{X_1(\psi_1X_1 + \psi_2 X_2) \\ X_2(\psi_1X_1 + \psi_2 X_2)}$$
$$\ket X \bra X = \pmatrix{X_1X_1 & X_1X_2 \\ X_2X_1 & X_2X_2}$$
$$\pmatrix{X_1X_1 & X_1X_2 \\ X_2X_1 & X_2X_2}\pmatrix{\psi_1 \\ \psi_2} = \pmatrix{X_1(\psi_1X_1 + \psi_2 X_2) \\ X_2(\psi_1X_1 + \psi_2 X_2)}$$

# Задание 3
Найти матрицу оператора $\hat A = \ket + \bra -$ (см. задачу 2) в круговом базисе.

Предложение: если мы перемножим эти два вектора, подставив заместо них записи
$$\ket + = \frac1{\sqrt 2}(\ket H + \ket V) = \frac1{\sqrt 2}\pmatrix{1 \\ 1} \ \ \ \ \ \ \ \ \ \ \ket - = \frac1{\sqrt 2}(\ket H - \ket V)=\frac1{\sqrt 2}\pmatrix{1 \\ -1}$$
мы получим выражение матрицы оператора $\hat A$ через канонический базис. Соответственно, если векторы $\ket +$ и $\ket -$ будут выражены через круговой базис, матрица $\hat A$ получится в круговом базисе - и задача сводится к задаче замены базиса.
$$\ket R = \frac1{\sqrt 2}(\ket H + i\ket V) = \frac1{\sqrt 2}\pmatrix{1 \\ i} \ \ \ \ \ \ \ \ \ \ \ket L = \frac1{\sqrt 2}(\ket H - i\ket V)=\frac1{\sqrt 2}\pmatrix{1 \\ -i}$$

И та пара, и эта пара, являются базисами - линейно независимыми векторами - а значит одну пару можно выразить через другую через линейные комбинацию.
$$\cases{\ket + = \alpha_1 \ket R + \beta_1 \ket L \\ \ket - = \alpha_2 \ket R + \beta_2 \ket L}$$
Выразим сначала $\ket +$:
$$\frac1{\sqrt 2}\pmatrix{1 \\ 1} = \alpha_1 \frac1{\sqrt 2}\pmatrix{1 \\ i} + \beta_1\frac1{\sqrt 2}\pmatrix{1 \\ -i} \Rightarrow \cases{1 = \alpha_1 + \beta_1 \\ 1 = i(\alpha_1 - \beta_1)} \Rightarrow \cases{\alpha_1 = \frac{1-i}{2} \\ \beta_1 = \frac{1+i}{2}}$$
По такому же принципу $\ket L$:
$$\frac1{\sqrt 2}\pmatrix{1 \\ -1} = \alpha_2 \frac1{\sqrt 2}\pmatrix{1 \\ i} + \beta_2\frac1{\sqrt 2}\pmatrix{1 \\ -i} \Rightarrow \cases{1 = \alpha_2 + \beta_2 \\ -1 = i(\alpha_2 - \beta_2)} \Rightarrow \cases{\alpha_2 = \frac{1+i}{2} \\ \beta_2 = \frac{1-i}{2}}$$
Получается:
$$\array{\ket + = \frac{1-i}2 \ket R + \frac{1+i}2\ket L \\ \ket - = \frac{1+i}2 \ket R + \frac{1-i}2\ket L}$$
И эти векторы в круговом базисе соответственно имеют вид
$$\ket + = \pmatrix{\frac{1-i}2 \\ \frac{1+i}2} = \frac12\pmatrix{1-i \\ 1+i} \ \ \ \ \ \ket - = \pmatrix{\frac{1+i}2 \\ \frac{1-i}2}= \frac12\pmatrix{1+i \\ 1-i}$$
А теперь просто тензорное произведение:
$$\hat A = \frac12\pmatrix{1-i \\ 1+i} \otimes \frac12\pmatrix{1-i & 1+i} = \frac14 \pmatrix{(1-i)(1-i) & (1-i)(1+i) \\ (1+i)(1-i) & (1+i)(1+i)}$$
$$\hat A = \frac14 \pmatrix{-2i & 2 \\ 2 & 2i} = \frac12 \pmatrix{-i & 1 \\ 1 & i}$$

# Задание 4
Найти среднее значение физической величины, определяемой оператором $\hat \sigma_x \otimes \hat \sigma_y$ в состоянии $\ket \Psi = \frac1{\sqrt 2}(\ket H \otimes \ket V + \ket V \otimes \ket H)$, где $\hat \sigma_x, \hat \sigma_y$ - операторы Паули.

Первым делом считаем все тензорные произведения:
$$\array{\ket H \otimes \ket V = \pmatrix{1 \\ 0} \otimes \pmatrix{0 \\ 1} = \pmatrix{0 \\ 1 \\ 0 \\ 0} \\ \ket V \otimes \ket H = \pmatrix{0 \\ 1} \otimes \pmatrix{1 \\ 0} = \pmatrix{0 \\ 0 \\ 1 \\ 0}}$$
$$\hat \sigma_x \otimes \hat \sigma_y = \pmatrix{0 & 1 \\ 1 & 0} \otimes \pmatrix{0 & -i \\ i & 0} = \pmatrix{0 & 0 & 0 & -i \\ 0 & 0 & i & 0 \\ 0 & -i & 0 & 0 \\ i & 0 & 0 & 0}$$
Находим состояние $\ket \Psi$:
$$\ket \Psi = \frac1{\sqrt 2}\left(\pmatrix{0 \\ 1 \\ 0 \\ 0} + \pmatrix{0 \\ 0 \\ 1 \\ 0}\right) = \frac1{\sqrt 2}\pmatrix{0 \\ 1 \\ 1 \\ 0}$$
Среднее значение величины - это следующий бракет:
$$\braket {\sigma_x \otimes \hat \sigma_y}_\Psi = \bra \Psi \sigma_x \otimes \hat \sigma_y \ket \Psi$$
Получается, еще надо найти бра-вектор $\bra \Psi$:
$$\bra \Psi = \frac1{\sqrt 2}\pmatrix{0 & 1 & 1 & 0}$$
И считаем:
$$\array{\braket {\sigma_x \otimes \hat \sigma_y}_\Psi = \frac1{\sqrt 2}\pmatrix{0 & 1 & 1 & 0}\pmatrix{0 & 0 & 0 & -i \\ 0 & 0 & i & 0 \\ 0 & -i & 0 & 0 \\ i & 0 & 0 & 0}\frac1{\sqrt 2}\pmatrix{0 \\ 1 \\ 1 \\ 0}= \\ = \frac12 \pmatrix{0 & 1 & 1 & 0} \pmatrix{0 \\ i \\ -i \\ 0} = \frac12(i-i) = 0}$$

# Задание 5
Пусть система из двух спинов находится в триплетном состоянии $\ket \Psi = \ket V \otimes \ket V = \ket {\downarrow \downarrow}$. Найти среднее значение проекции суммарного спина на заданное направление $n$, задаваемое единичным вектором $n = \pmatrix{\sin \theta \cos \varphi, & \sin \theta \sin \varphi, & \cos \theta}$.
Указание: оператор проекции суммарного спина на направление $n$ имеет вид $\hat S_n = \hat s_n \otimes \hat I + \hat I \otimes \hat s_n$, где $\hat s_n = \hat s \cdot n$, $\hat s_i = \hat \sigma_i/2$. Матрица оператора $\hat s_n$ в каноническом базисе имеет вид $s_n = \frac12 \pmatrix{\cos \theta & e^{-i\varphi}\sin \theta \\ e^{i\varphi}\sin \theta & -\cos \theta}$.

Разбираем условие: среднее значение суммарного спина, причем сам оператор нам дан, и даже дана матрица оператора $\hat s_n$ - половина расчетов уже ушла. Стоит посчитать матрицу оператора проекции.
$$\array{\hat S_n = \hat s_n \otimes \hat I + \hat I \otimes \hat s_n = \\
= \frac12 \pmatrix{\cos \theta & e^{-i\varphi}\sin \theta \\ e^{i\varphi}\sin \theta & -\cos \theta} \otimes \pmatrix{1 & 0 \\ 0 & 1} + \pmatrix{1 & 0 \\ 0 & 1} \otimes\frac12 \pmatrix{\cos \theta & e^{-i\varphi}\sin \theta \\ e^{i\varphi}\sin \theta & -\cos \theta} = \\
= \frac12\pmatrix{\cos \theta & 0 & e^{-i\varphi}\sin \theta & 0 \\ 0 & \cos \theta & 0 & e^{-i\varphi}\sin \theta \\ e^{i\varphi}\sin \theta & 0 & -\cos \theta & 0 \\ 0 & e^{i\varphi}\sin \theta & 0 & -\cos \theta} + \\
+ \frac12 \pmatrix{\cos \theta & e^{-i\varphi}\sin \theta & 0 & 0 \\ e^{i\varphi}\sin \theta & -\cos \theta & 0 & 0 \\ 0 & 0 & \cos \theta & e^{-i\varphi}\sin \theta \\ 0 & 0 & e^{i\varphi}\sin \theta & -\cos \theta} = \\
= \frac12 \pmatrix{2\cos \theta & e^{-i\varphi}\sin \theta & e^{-i\varphi}\sin \theta & 0 \\ e^{i\varphi}\sin \theta & 0 & 0 & e^{-i\varphi}\sin \theta \\ e^{i\varphi}\sin \theta & 0 & 0 & e^{-i\varphi}\sin \theta \\ 0 & e^{i\varphi}\sin \theta & e^{i\varphi}\sin \theta & -2\cos \theta}}$$

Фууух блять. Ну вы не расслабляйтесь, это только оператор, нужно еще его среднее значение найти. Так как оно ищется как через произведение на бра и кет вектора, то найдем и бра, и кет вектора $\Psi$:
$$\array{\ket \Psi = \ket V \otimes \ket V = \pmatrix{0 \\ 1} \otimes \pmatrix{0 \\ 1} = \pmatrix{0 \\ 0 \\ 0 \\ 1} \\ \bra \Psi = \pmatrix{0 & 0 & 0 & 1}}$$
И теперь среднее значение:
$$\array{\braket{\hat S_n}_\Psi = \bra \Psi \hat S_n \ket \Psi = \\ = \pmatrix{0 & 0 & 0 & 1} \frac12 \pmatrix{2\cos \theta & e^{-i\varphi}\sin \theta & e^{-i\varphi}\sin \theta & 0 \\ e^{i\varphi}\sin \theta & 0 & 0 & e^{-i\varphi}\sin \theta \\ e^{i\varphi}\sin \theta & 0 & 0 & e^{-i\varphi}\sin \theta \\ 0 & e^{i\varphi}\sin \theta & e^{i\varphi}\sin \theta & -2\cos \theta} \pmatrix{0 \\ 0 \\ 0 \\ 1} = \\ =\frac12 \pmatrix{0 & 0 & 0 & 1} \pmatrix{0 \\ e^{-i\varphi}\sin \theta \\ e^{-i\varphi}\sin \theta \\ -2\cos \theta} = \frac12(-2\cos \theta) = -\cos \theta}$$
И все теперь не так страшно. На деле, можно было сначала посчитать бра и кет вектора для $\Psi$, и заметить, что при нахождении среднего значения, при умножении матриц останется только значение в нижнем правом углу, и посчитать только его при нахождении оператора.

Ответ: $-\cos \theta$.

# Задание 6
Найти в одномерном случае коммутатор операторов Гамильтона (оператор вида $\hat H = \frac{\hat p}{2m} + U(x)$) и координаты (оператор вида $\hat x = x$), т.е. найти оператор $[\hat H, \hat x] = \hat H\hat x = \hat x \hat H$. Оператор выразить через оператор импульса.

[todo]