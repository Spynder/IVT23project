# Задание 1
Какой из операторов Паули $\set{\sigma_x, \sigma_y, \sigma_z}$ действует на векторы состояния $\ket 0$ и $\ket 1$ как оператор отрицания, т.е. $\hat \sigma_i \ket 0 = \ket 1$ и $\hat \sigma_i \ket 1 = \ket 0$?

Здесь у нас прям совсем ограниченный выбор, можно и втупую проверить каждый из вариков:
$$\hat \sigma_x\ket 0 = \pmatrix{0 & 1 \\ 1 & 0} \pmatrix{1 \\ 0} = \pmatrix{0 \\ 1} = \ket 1 \ \ \ \hat \sigma_x\ket 1 = \pmatrix{0 & 1 \\ 1 & 0} \pmatrix{0 \\ 1} = \pmatrix{1 \\ 0} = \ket 0$$
Тут сразу видно, что это будет оператор $\sigma_x$, но можно и остальные проверить.

# Задание 2
Кубит находится в состоянии $\ket \psi = \pmatrix{\cos (\theta/2) \\ \sin (\theta/2) e^{i\varphi}}$. Измерения проводятся в диагональном базисе $\set{\ket +, \ket -}$. Найти вероятность каждого результата измерений, т.е. вероятности $P_\psi(\ket +)$ и $P_\psi(\ket -)$.

Найдем бра-вектор, транспонируем и сопрягаем:
$$\bra \psi = \pmatrix{\cos \frac \theta 2 & \sin \frac \theta 2 e^{-i\varphi}}$$
Теперь можем найти вероятности:
$$P_\psi(\ket +) = |\braket{\psi|+}|^2$$
$$\braket{\psi | +} = \pmatrix{\cos \frac \theta 2 & \sin \frac \theta 2 e^{-i\varphi}} \cdot \frac1{\sqrt 2}\pmatrix{1 \\ 1} = \frac1{\sqrt 2}(\cos \frac \theta 2 + \sin \frac \theta 2 e^{-i\varphi})$$
Чтобы найти квадрат модуля, можем домножить бракет-вектор на его сопряженное:
$$\array{|\braket{\psi|+}|^2 =\braket{\psi | +} \cdot \braket{\psi | +}^* = \frac{1}{2}(\cos \frac \theta 2 + \sin \frac \theta 2 e^{-i\varphi})(\cos \frac \theta 2 + \sin \frac \theta 2 e^{i\varphi})= \\ 
=\frac{1}{2}(\cos^2 \frac \theta 2 + \cos \frac \theta 2\sin \frac \theta 2 e^{-i\varphi} + \cos \frac \theta 2\sin \frac \theta 2 e^{i\varphi} + \sin^2 \frac \theta 2 (e^{i\varphi} \cdot e^{-i\varphi}))= \\
= \frac12(\cos^2 \frac \theta 2 + \sin^2 \frac \theta 2 + \frac12 \sin (\theta) e^{-i\varphi} + \frac12\sin (\theta) e^{i\varphi}) = \\
= \frac12 + \frac14\sin (\theta)(e^{-i\varphi} + e^{i\varphi})
}$$
По формуле Эйлера:
$$\array{e^{i\varphi} = \cos \varphi + i\sin \varphi \\ e^{-i\varphi} = \cos \varphi - i\sin \varphi} \Rightarrow e^{-i\varphi} + e^{i\varphi} = 2\cos \varphi$$
Получаем квадрат модуля, подставляя полученное выражение:
$$P_\psi(\ket +) = |\braket{\psi|+}|^2 = \frac12 + \frac14 \sin (\theta) 2\cos \varphi = \frac{1 + \sin\theta \cos \varphi}{2}$$
Можно аналогично считать $P_\psi(\ket -)$, но из соображений, что сумма вероятностей должна быть равна единице, можно получить
$$P_\psi(\ket -) = 1 -P_\psi(\ket +) = \frac{1 - \sin \theta \cos \varphi}{2}$$

Ответ:
$$P_\psi(\ket +) = \frac{1 + \sin\theta \cos \varphi}{2}, P_\psi(\ket -) = \frac{1 - \sin\theta \cos \varphi}{2}$$
# Задание 3
Принцип неопределенности Гейзенберга можно записать в следующем виде: $(\Delta A)_\psi \cdot (\Delta B)_\psi \geq \frac12 |\braket{C}_\psi|$, где $\hat C = [\hat A, \hat B] = \hat A \hat B - \hat B \hat A$ - коммутатор операторов $\hat A$ и $\hat B$, $(\Delta A)_\psi$ и $(\Delta B)_\psi$ - неопределенности величин $A$ и $B$ в состоянии $\ket \psi$. Для случая $\hat A = \hat \sigma_x$, $\hat B = \hat \sigma_y$ ($\hat \sigma_x, \hat \sigma_y$ - операторы Паули), $\ket \psi = \ket V = \pmatrix{0 \\ 1}$ найти величины $(\Delta A)_\psi$, $(\Delta B)_\psi$ и $\frac12 |\braket{C}_\psi|$.

Просят найти неопределенности, и по формуле они равны корню из дисперсии. Дисперсию мы тоже знаем как считать:
$$(\Delta A)_\psi = \sqrt{(DA)_\psi} = \sqrt{\braket{A^2}_\psi - \braket{A}_\psi^2}$$
Найдем эти значения для $\hat A$ и $\hat B$.
$$\braket{A}_\psi = \bra \psi A \ket \psi \ \ \ \ \ \braket{A^2}_\psi = \bra \psi A^2 \ket \psi$$
Если $\ket \psi = \pmatrix{0\\1}$, то $\bra \psi = \pmatrix{0&1}$. Считаем:
$$\bra \psi A \ket \psi = \pmatrix{0 & 1}\pmatrix{0 & 1 \\ 1 & 0}\pmatrix{0 \\ 1} = \pmatrix{0 & 1}\pmatrix{1 \\ 0} = 0$$
$$\bra \psi A^2 \ket \psi = \pmatrix{0 & 1}\pmatrix{0 & 1 \\ 1 & 0}^2\pmatrix{0 \\ 1} = \pmatrix{0 & 1}\pmatrix{0 & 1 \\ 1 & 0}\pmatrix{1 \\ 0} = \pmatrix{0 & 1}\pmatrix{0 \\ 1} = 1$$
Тогда
$$(\Delta A)_\psi = \sqrt{1 - 0} = 1$$
Аналогично считаем и для $\hat B$:
$$\bra \psi B \ket \psi = \pmatrix{0 & 1}\pmatrix{0 & -i \\ i & 0}\pmatrix{0 \\ 1} = \pmatrix{0 & 1}\pmatrix{-i \\ 0} = 0$$
$$\array{\bra \psi B^2 \ket \psi = \pmatrix{0 & 1}\pmatrix{0 & -i \\ i & 0}^2\pmatrix{0 \\ 1} = \\ = \pmatrix{0 & 1}\pmatrix{0 & -i \\ i & 0}\pmatrix{-i \\ 0} = \pmatrix{0 & 1}\pmatrix{0 \\ 1} = 1}$$
И вновь получаем
$$(\Delta B)_\psi = \sqrt{1 - 0} = 1$$
Найдем оператор $\hat C$:
$$\hat C = \hat A \hat B - \hat B \hat A = \pmatrix{0 & 1 \\ 1 & 0}\pmatrix{0 & -i \\ i & 0} - \pmatrix{0 & -i \\ i & 0}\pmatrix{0 & 1 \\ 1 & 0}$$
$$\hat C = \pmatrix{i & 0 \\ 0 & -i} - \pmatrix{-i & 0 \\ 0 & i} = 2\pmatrix{i & 0 \\ 0 & -i}$$
И посчитаем его среднюю величину:
$$\braket{\hat C}_\psi = \bra \psi C \ket \psi = 2\pmatrix{0 & 1}\pmatrix{i & 0 \\ 0 & -i}\pmatrix{0 \\ 1} = -2i$$
Тогда модуль средней величины (учитываем, что это комплексное число) равен $2$, и половина от этого равна $1$.
$$\frac12|\braket{\hat C}_\psi| = 1$$
Ответ: $(\Delta A)_\psi = (\Delta B)_\psi = \frac12|\braket{\hat C}_\psi| = 1$.
# Задание 4
Найти результат действия на двухсоставное состояние $\ket \Psi = \frac1{\sqrt 2} (\ket{HV} + \ket{VH})$ следующих операторов а) $\hat \sigma_y \otimes \hat I$, б) $\hat \sigma_z \otimes \hat I$, где $\hat \sigma_i$ - операторы Паули, $\hat I$ - единичный (тождественный) оператор, краткая запись $\ket{HV}$ означает $\ket H \otimes \ket V$. Ответ писать в той же форме, что и исходное состояние $\ket \Psi$.

Я бы просто пошел в лоб при решении этой задачи. Первым делом вычислим кет-вектор:
$$\array{\ket{HV} = \ket H \otimes \ket V = \pmatrix{1 \\ 0} \otimes \pmatrix{0 \\ 1} = \pmatrix{0 \\1\\0\\0} \\ \ket{VH} = \ket V \otimes \ket H = \pmatrix{0 \\ 1} \otimes \pmatrix{1 \\ 0} = \pmatrix{0 \\0\\1\\0} \\ \ket \Psi = \frac{1}{\sqrt 2}\left(\pmatrix{0 \\1\\0\\0} + \pmatrix{0 \\0\\1\\0}\right) = \frac1{\sqrt 2}\pmatrix{0\\1\\1\\0}}$$
Теперь посчитаем операторы:
$$\hat \sigma_y \otimes \hat I = \pmatrix{0 & -i \\ i & 0} \otimes \pmatrix{1 & 0 \\ 0 & 1} = \pmatrix{0 & 0 & -i & 0 \\ 0 & 0 & 0 & -i \\ i & 0 & 0 & 0 \\ 0 & i & 0 & 0}$$
$$\hat \sigma_z \otimes \hat I = \pmatrix{1 & 0 \\ 0 & -1} \otimes \pmatrix{1 & 0 \\ 0 & 1} = \pmatrix{1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & -1 & 0 \\ 0 & 0 & 0 & -1}$$
А теперь находим результат действия (умножаем):
$$(\hat \sigma_y \otimes \hat I)\ket \Psi = \pmatrix{0 & 0 & -i & 0 \\ 0 & 0 & 0 & -i \\ i & 0 & 0 & 0 \\ 0 & i & 0 & 0}\frac1{\sqrt 2}\pmatrix{0\\1\\1\\0} = \frac{1}{\sqrt2}\pmatrix{-i \\ 0 \\ 0 \\ i} = \frac{i}{\sqrt2}\pmatrix{-1\\0\\0\\1}$$
$$(\hat \sigma_z \otimes \hat I)\ket \Psi = \pmatrix{1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & -1 & 0 \\ 0 & 0 & 0 & -1}\frac1{\sqrt 2}\pmatrix{0\\1\\1\\0} = \frac{1}{\sqrt2}\pmatrix{0 \\ 1 \\ -1 \\ 0}$$
И здесь можно проводить какую-то матричную магию, чтобы снова привести к виду как в условии, но... надо ли? Мы знаем что "вид, как в условии", это линейная комбинация из векторов, которыми могут быть $\ket{HH}, \ket{HV}, \ket{VH}, \ket{VV}$. Так давайте просто их всех посчитаем и просто подберем это решение:
$$\ket{HH} = \pmatrix{1 \\ 0} \otimes \pmatrix{1 \\ 0} = \pmatrix{1\\0\\0\\0} \ \ \ \ \ket{VV} = \pmatrix{0 \\ 1} \otimes \pmatrix{0 \\ 1} = \pmatrix{0\\0\\0\\1}$$
$$\ket{HV} = \pmatrix{1 \\ 0} \otimes \pmatrix{0 \\ 1} = \pmatrix{0\\1\\0\\0} \ \ \ \ \ket{VH} = \pmatrix{0 \\ 1} \otimes \pmatrix{1 \\ 0} = \pmatrix{0\\0\\1\\0}$$
Здесь довольно естественно видно:
$$\pmatrix{-1\\0\\0\\1} = \pmatrix{0\\0\\0\\1} - \pmatrix{1\\0\\0\\0} = \ket{VV} - \ket{HH}$$
и
$$\pmatrix{0\\1\\-1\\0} = \pmatrix{0\\1\\0\\0} - \pmatrix{0\\0\\1\\0} = \ket{HV} - \ket{VH}$$
Исходя из этого, записываем ответ:
$$\array{(\hat \sigma_y \otimes \hat I)\ket \Psi = \frac{i}{\sqrt 2}(\ket{VV} - \ket{HH}) \\ (\hat \sigma_z \otimes \hat I)\ket \Psi = \frac{1}{\sqrt 2}(\ket{HV} - \ket{VH})}$$

# Задание 5
Два белловских состояния $\ket {\Psi^+} = \frac1{\sqrt 2}(\ket{HV} + \ket{VH})$ и $\ket{\Psi^-} = \frac{1}{\sqrt 2}(\ket{HV} - \ket{VH})$ можно переписать в другом базисе. Например, в диагональном базисе, выбранном в обоих гильбертовых пространствах, они будут иметь вид $\ket{\Psi^+} = \frac{1}{\sqrt 2}(\ket{++} - \ket{--})$ и $\ket{\Psi^-} = \frac{1}{\sqrt 2}(\ket{-+} - \ket{+-})$. Найти аналогичные выражения для этих двух состояний в круговом базисе, выбранном в обоих пространствах.

Это задание схоже с заданием 3 из второго варианта. Здесь я хочу сначала посчитать выражения, и только потом подобрать вектора, чтобы заменить базис.

Дабы не тратить место, возьмем уже посчитанные тензорные произведения базисов и сразу посчитаем белловские состояния:
$$\array{\ket {\Psi^+} = \frac1{\sqrt 2}(\ket{HV} + \ket{VH}) = \frac{1}{\sqrt 2}\left(\pmatrix{0\\1\\0\\0} + \pmatrix{0\\0\\1\\0}\right) = \frac1{\sqrt 2}\pmatrix{0\\1\\1\\0} \\ \ket{\Psi^-} = \frac{1}{\sqrt 2}(\ket{HV} - \ket{VH}) = \frac{1}{\sqrt 2}\left(\pmatrix{0\\1\\0\\0} - \pmatrix{0\\0\\1\\0}\right) = \frac1{\sqrt 2}\pmatrix{0\\1\\-1\\0}}$$
Желание: выразить получившиеся векторы через векторы $\ket{RR}, \ket{RL}, \ket{LR}, \ket{LL}$. Для этого их стоит посчитать:
$$\ket{RR} = \frac{1}{\sqrt 2}\pmatrix{1 \\ i} \otimes \frac{1}{\sqrt 2} \pmatrix{1 \\ i} = \frac12\pmatrix{1 \\ i \\ i \\ -1}$$
$$\ket{LL} = \frac{1}{\sqrt 2}\pmatrix{1 \\ -i} \otimes \frac{1}{\sqrt 2} \pmatrix{1 \\ -i} = \frac12\pmatrix{1 \\ -i \\ -i \\ -1}$$
$$\ket{RL} = \frac{1}{\sqrt 2}\pmatrix{1 \\ i} \otimes \frac{1}{\sqrt 2} \pmatrix{1 \\ -i} = \frac12\pmatrix{1 \\ -i \\ i \\ 1}$$
$$\ket{LR} = \frac{1}{\sqrt 2}\pmatrix{1 \\ -i} \otimes \frac{1}{\sqrt 2} \pmatrix{1 \\ i} = \frac12\pmatrix{1 \\ i \\ -i \\ 1}$$
Из этих векторов можно составить линейную комбинацию векторов выше. Можно делать это строго и формально как было в задании 3 второго варианта, а можно делать обоснованные предположения. Например, мы знаем, что в первой и четвертой координате должны быть нули - такое получается, только если мы берем разницу векторов $\ket {RR}$ и $\ket{LL}$ или $\ket{RL}$ и $\ket{LR}$, причем с одинаковыми множителями. Давайте же посчитаем эти разницы:
$$\ket{RR} - \ket{LL} = \frac12\pmatrix{1 \\ i \\ i \\ -1} -  \frac12\pmatrix{1 \\ -i \\ -i \\ -1} = \frac12\pmatrix{0 \\ 2i \\ 2i \\ 0} = i\pmatrix{0\\1\\1\\0}$$
$$\ket{RL} - \ket{LR} = \frac12\pmatrix{1 \\ -i \\ i \\ 1} -  \frac12\pmatrix{1 \\ i \\ -i \\ 1} = \frac12\pmatrix{0 \\ -2i \\ 2i \\ 0} = i\pmatrix{0\\-1\\1\\0}$$
С первым попали, со вторым нужно поменять знак. Подставляем:
$$\ket {\Psi^+} = \frac1{\sqrt 2}\pmatrix{0\\1\\1\\0} = \frac{1}{\sqrt 2} \cdot \frac{1}{i} (\ket{RR} - \ket{LL})$$
$$\ket{\Psi^-} = \frac1{\sqrt 2}\pmatrix{0\\1\\-1\\0} = \frac{1}{\sqrt 2} \cdot \frac{1}{i} (\ket{LR} - \ket{RL})$$
В целом это ответ, хоть и не красивый. Вспоминаем, что
$$\frac{1}{i} = \frac{i}{i \cdot i} = \frac{i}{-1} = -i$$
и получаем уже ответ-ответ:
$$\ket {\Psi^+} = \frac{i}{\sqrt 2} (\ket{LL} - \ket{RR})$$
$$\ket{\Psi^-} = \frac{i}{\sqrt 2} (\ket{RL}  -\ket{LR})$$

# Задание 6
Имеется два электрона, из которых один находится в квантовом состоянии $\ket +$, а второй - в состоянии $\ket -$ (имеется в виду спиновая часть волновой функции электронов). Экспериментатор измеряет суммарный спин этих двух электронов $S_\Sigma$. Найти а) среднее значение проекции суммарного спина на ось $x$ и б) среднее значение модуля суммарного спина. Указание: оператор квадрата суммарного спина: $\hat S^2_\Sigma = \frac{\hbar^2}{2}(3 \hat I \otimes \hat I + \hat \sigma_x \otimes \hat \sigma_x + \hat \sigma_y \otimes \hat \sigma_y + \hat \sigma_z \otimes \hat \sigma_z)$.

Решение: суммарный спин на ось находится по формуле:
$$S_{\Sigma, x} = \frac{\hbar}{2}(\hat \sigma_x \otimes \hat I + \hat I \otimes \hat \sigma_x)$$
Находим тензорные произведения:
$$\hat \sigma_x \otimes \hat I = \pmatrix{0 & 1 \\ 1 & 0}\otimes\pmatrix{1 & 0 \\ 0 & 1} = \pmatrix{0&0&1&0\\0&0&0&1\\1&0&0&0\\0&1&0&0}$$
$$\hat I \otimes \hat \sigma_x = \pmatrix{1 & 0 \\ 0 & 1}\otimes \pmatrix{0 & 1 \\ 1 & 0} = \pmatrix{0&1&0&0\\1&0&0&0\\0&0&0&1\\0&0&1&0}$$
$$S_{\Sigma, x}  = \frac{\hbar}2 \pmatrix{0&1&1&0\\1&0&0&1\\1&0&0&1\\0&1&1&0}$$
Само состояние двух электронов находится как их тензорное произведение*:
$$\ket \Psi = \ket + \otimes \ket - = \frac1{\sqrt 2}\pmatrix{1 \\ 1} \otimes \frac1{\sqrt 2}\pmatrix{1 \\ -1} = \frac12\pmatrix{1\\-1\\1\\-1}$$
$$\bra \Psi = \frac12 \pmatrix{1&-1&1&-1}$$
Считаем среднее значение оператора в состоянии:
$$\braket{S_{\Sigma, x}}_\Psi = \bra \Psi S_{\Sigma, x} \ket \Psi = \frac\hbar8\pmatrix{1&-1&1&-1} \pmatrix{0&1&1&0\\1&0&0&1\\1&0&0&1\\0&1&1&0}\pmatrix{1\\-1\\1\\-1}=$$
$$=\frac\hbar8 \pmatrix{1&-1&1&-1}\pmatrix{0 \\ 0 \\ 0 \\ 0} = 0$$
Посчитаем оператор квадрата суммарного спина. Для этого перед нами стоит 4 тензорных произведения...
$$\hat \sigma_x \otimes \hat \sigma_x = \pmatrix{0 & 1 \\ 1 & 0} \otimes \pmatrix{0 & 1 \\ 1 & 0} = \pmatrix{0&0&0&1\\0&0&1&0\\0&1&0&0\\1&0&0&0}$$
$$\hat \sigma_y \otimes \hat \sigma_y = \pmatrix{0 & -i \\ i & 0} \otimes \pmatrix{0 & -i \\ i & 0} = \pmatrix{0&0&0&-1\\0&0&1&0\\0&1&0&0\\-1&0&0&0}$$
$$\hat \sigma_z \otimes \hat \sigma_z = \pmatrix{1 & 0 \\ 0 & -1} \otimes \pmatrix{1 & 0 \\ 0 & -1} = \pmatrix{1&0&0&0\\0&-1&0&0\\0&0&-1&0\\0&0&0&1}$$
$$3\hat I \otimes \hat I = 3\pmatrix{1 & 0 \\ 0 & 1} \otimes \pmatrix{1 & 0 \\ 0 & 1} = \pmatrix{3&0&0&0\\0&3&0&0\\0&0&3&0\\0&0&0&3}$$
А их сумма...
$$\hat S^2_\Sigma = \frac{\hbar^2}2\pmatrix{4&0&0&0\\0&2&2&0\\0&2&2&0\\0&0&0&4} = \hbar^2\pmatrix{2&0&0&0\\0&1&1&0\\0&1&1&0\\0&0&0&2}$$
Находим среднее значение:
$$\braket{\hat S^2_\Sigma}_\Psi = \bra \Psi \hat S^2_\Sigma \ket \Psi = \frac{\hbar^2}4\pmatrix{1&-1&1&-1} \pmatrix{2&0&0&0\\0&1&1&0\\0&1&1&0\\0&0&0&2}\pmatrix{1\\-1\\1\\-1}=$$
$$= \frac{\hbar^2}4\pmatrix{1&-1&1&-1}\pmatrix{2 \\ 0 \\ 0 \\ -2} = \frac{\hbar^2}4(2+2) = \hbar^2$$
Соответственно, если $\hbar^2$ это среднее значение *квадрата* суммарного спина, то $\sqrt{\hbar^2} = \hbar$ будет средним значением *модуля* суммарного спина.

Ответ: а) $0$, б) $\hbar$.

\*а если обозначить $\ket \Psi$ не как  $\ket + \otimes \ket -$, а как $\ket \Psi =\ket - \otimes \ket +$? Тогда ничего не меняется:
$$\ket \Psi = \ket - \otimes \ket + = \frac1{\sqrt 2}\pmatrix{1 \\ -1} \otimes \frac1{\sqrt 2}\pmatrix{1 \\ 1} = \frac12\pmatrix{1\\1\\-1\\-1}$$
$$\bra \Psi = \frac12\pmatrix{1&1&-1&-1}$$
$$\braket{S_{\Sigma, x}}_\Psi = \bra \Psi S_{\Sigma, x} \ket \Psi = \frac\hbar8\pmatrix{1&1&-1&-1} \pmatrix{0&1&1&0\\1&0&0&1\\1&0&0&1\\0&1&1&0}\pmatrix{1\\1\\-1\\-1}=$$
$$=\frac\hbar8\pmatrix{1&1&-1&-1}\pmatrix{0 \\ 0 \\ 0 \\ 0} = 0$$
$$\braket{\hat S^2_\Sigma}_\Psi = \bra \Psi \hat S^2_\Sigma \ket \Psi = \frac{\hbar^2}4\pmatrix{1&1&-1&-1} \pmatrix{2&0&0&0\\0&1&1&0\\0&1&1&0\\0&0&0&2}\pmatrix{1\\1\\-1\\-1}=$$
$$= \frac{\hbar^2}4\pmatrix{1&1&-1&-1}\pmatrix{2 \\ 0 \\ 0 \\ -2} = \hbar^2$$
