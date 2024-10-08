Базис - это *упорядоченный* набор *линейно-независимых* векторов в *векторном пространстве*. В этом случае, любой вектор этого пространства может быть представлен единственным способом, в виде *линейной комбинации* векторов из этого набора.

Базисы записываются как $(\overline e_1; \overline e_2; \ldots)$. Главное условие для этих векторов $\overline e_i$ - они все *линейно независимые* относительно друг друга.

Давайте посмотрим на тонкости этого определения.
1. Упорядоченный набор: это значит, что порядок векторов в базисе имеет значение. Базис $(\overline i; \overline j)$ не равен базису $(\overline j; \overline i)$!
2. Линейная независимость: это значит, что ни какой вектор базиса не должен выражаться через другой вектор этого же базиса. Представим, например, "базис" $(\overline a; \overline b)$, где $\overline a(2; 4)$ и $\overline b(4; 8)$. Нетрудно заметить, что $\overline b = 2\overline a$. Так как вектор $\overline b$ выразился через $\overline a$, они будут коллинеарны, отчего наше 2д пространство будет сжато всего-лишь в одну прямую. Через этот "базис" мы не сможем выразить, допустим, точку $(4, 2)$. $$\cases{2\alpha + 4\beta = 4 \\ 4\alpha + 8\beta = 2} \Rightarrow \varnothing$$Кстати говоря, проверить, является ли набор вектором базисом, можно подсчитав *детерминант*, состоящий из координат данных векторов. Набор будет базисом, если детерминант не равен нулю: $$\left|\array{2 & 4 \\ 4 & 8}\right| = 2\cdot 8-4\cdot 4 = 0$$
3. Вектора в векторном пространстве: это значит, что какие вектора мы хотим выразить в пространстве, из него и должны быть выбранные базисные вектора. Мы не можем, например, выбрать 3д вектор для описания 2д базиса. *Строго говоря, это просто должны быть элементы, для которых определены операции сложения и умножения.*
4. Линейная комбинация: это просто словосочетание для описания разложения любого вектора как сумму других: скажем, базис $(\overline i, \overline j)$. Мы можем теперь выразить случайный вектор $\overline a$ как линейную комбинацию этих векторов: $\overline a = 5\overline i + 3 \overline j$.

Обращаю внимание, что базисные векторы не обязательно должны быть ортогональны - они вполне могут быть и под углом друг другу, главное, чтобы не были неколлинеарны!

Из-за этого факта базис может называться *ортогональным*, если все его векторы ортогональны друг другу. Затем, *ортогональный* базис может левелапнуться до *ортонормированного*, если длины всех его векторов равны единице.

Нулевой вектор делает любую систему линейно зависимой.
Если векторы $a$ и $b$ коллинеарны, то они линейно зависимы.
Если векторы $a,b,c$ компланарны, то они линейно зависимы.

Комбинируя базис с точкой начала координат, мы получим *систему координат.*

Базис имеет понятие ориентации, но подробнее об этом в вопросе [#9. Ориентация прямой, плоскости, пространства.][[[0,0,8]]]