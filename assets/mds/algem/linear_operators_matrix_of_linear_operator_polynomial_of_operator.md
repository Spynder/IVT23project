Мы уже затрагивали определение линейных операторов - это такие линейные отображения, что проектирует вектор из пространства в то же самое пространство:
$$A: L \rightarrow L$$
Ранее мы говорили про матрицы отображения из базиса в базис, для каждого из пространств. Тут же пространство одно, поэтому нам достаточно одного базиса: $e = (e_1; e_2; \ldots; e_n)$. Из-за того, что переводим мы в одно и то же пространство, матрица будет квадратной:
$$A = \pmatrix{A(e_{11}) & A(e_{21}) & \ldots & A(e_{n1}) \\ A(e_{12}) & A(e_{22}) & \ldots & A(e_{n2}) \\ \vdots & \vdots & \ddots & \vdots \\ A(e_{1n}) & A(e_{2n}) & \ldots & A(e_{nn})}$$
При замене базиса $e$, формулы, что мы вывели в прошлом билете становится чуть проще:
$$A' = S^{-1} AS$$
Так как операторы являются частным случаем отображений, они наследуют большинство их свойств, но при этом получают еще больше других - за счет того, что вектор и его образ лежат в одном пространстве.

Например, определитель матрицы линейного оператора не меняется при замене базиса - он является инвариантом, и называется просто *определителем оператора*.
$$\array{A' = S^{-1}AS \Rightarrow \det A' = \det (S^{-1}AS) \\ \det A' = \det S^{-1} \cdot \det A \cdot \det S \\ \det A' = \det A \cdot \frac{\det S}{\det S} = \det A \\ \det A' = \det A}$$

Если операторы $A$ и $B$ одного пространства, то так же будут определены операторы $AB$ и $BA$. Когда $AB = BA$, операторы $A$ и $B$ *коммутируют*.
Очевидно, что $A$ коммутирует сам с собой, ведь $AA=AA$. Произведение $AA$ естественно обозначать за $A^2$, и любую степень $A$ по индукции...
$$A^k = AA^{k-1} = AA \underbrace{\ldots}_\text{$k$ раз} A$$
Нулевую степень, как и с обычными числами, принято обозначать за единичный элемент. В матрицах, это единичная матрица $A^0 = E$.
Многочлен
$$p(A) = \alpha_0E + \alpha_1 A + \alpha_2 A^2 + \ldots \alpha_n A^n$$
называется *многочленом от оператора*. Результат многочлена будет являться не числом, а матрицей!  Любые два многочлена от одинакого оператора будут коммутировать в силу коммутативности умножения.