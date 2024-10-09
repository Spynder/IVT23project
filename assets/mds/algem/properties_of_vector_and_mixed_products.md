Как векторное, так и смешанное произведение работают только с трехмерными векторами!
## Свойства векторного произведения
- Вектор $\overline c = [\overline a, \overline b]$ будет направлен таким образом, что тройка векторов $\overline a, \overline b, \overline c$ будет *правой*. Подробнее об ориентации в вопросе [#9. Ориентация прямой, плоскости, пространства.][[[0,0,8]]]
- Модуль (длина вектора) векторного произведения $[\overline a, \overline b]$ равен площади параллелограмма, образованного векторами $\overline a$ и $\overline b$.
- Векторное произведение $[\overline a, \overline b]$ равно нулю тогда и только тогда $(\Leftrightarrow)$, когда вектора $\overline a$ и $\overline b$ коллинеарны. 
- Антикоммутативно - меняет свой знак при перестановке аргументов: $$[\overline{a}, \overline b] = -[\overline b, \overline a]$$
- Ассоциативность при умножении на скаляр: $$[\alpha \cdot \overline a, \overline b] = [\overline a, \alpha \cdot \overline b] = \alpha \cdot [\overline a, \overline b]$$
- Дистрибутивность по сложению: $$[\overline a + \overline b, \overline c] = [\overline a, \overline c] + [\overline b, \overline c]$$
  Доказывается через скалярное домножение на вектор: $$\array{([\overline a + \overline b, \overline c],\overline d) = (\overline a + \overline b, \overline c,\overline d)=(\overline a, \overline c, \overline d) + (\overline b, \overline c, \overline d) = \\ = ([\overline a, \overline c], \overline d) + ([\overline b, \overline c], \overline d) = ([\overline a, \overline c] + [\overline b, \overline c], \overline d)}$$
  Скалярные произведения равны, правая их часть равна, значит и левая тоже.
- С векторами векторное произведение не ассоциативно, однако выполняется уравнения Якоби: $$[\overline a, [\overline b, \overline c]] + [\overline c, [\overline a, \overline b]] +[\overline b, [\overline c, \overline a]] = \overline 0$$
- Операция с одним вектором дает ноль: $$[\overline a, \overline a] = \overline 0$$
## Свойства смешанного произведения
- Модуль смешанного произведения $(\overline a, \overline b, \overline c)$ равно объему параллелипипеда, образованного векторами $\overline a, \overline b$ и $\overline c$.
- Смешанное произведение это просто операции векторного и скалярного произведения вместе: $$(\overline a, \overline b, \overline c) = (\overline a, [\overline b, \overline c]) = ([\overline a, \overline b], \overline c)$$
- При "прокрутке" векторов внутри смешанного произведения его знак не меняется: $$(\overline a, \overline b, \overline c) = (\overline b, \overline c, \overline a) = (\overline c, \overline a, \overline b)$$
- Однако при обмене двух векторов местами знак смешанного произведения меняется: $$(\overline a, \overline b, \overline c) = -(\overline b , \overline a, \overline c) = -(\overline a , \overline c, \overline b)$$
- Если три вектора компланарны (как следствие - линейно зависимые), то смешанное произведение будет равно нулю (ведь тогда у параллелипипеда не будет объема).
- Как следствие, если любые два вектора коллинеарны (тоже линейно зависимые), то смешанное произведение будет равно нулю.
- *Как следствие этого следствия*, если любые два вектора равны, то смешанное произведение будет равно нулю.
