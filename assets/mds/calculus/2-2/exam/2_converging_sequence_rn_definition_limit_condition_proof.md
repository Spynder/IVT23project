>[!note] Новая нотация!
>
>С последовательностями в $\mathbb R^n$ немного меняется нотация - номер элемента перемещается из нижнего индекса в верхний в скобочках, а снизу ставится номер координаты: $\set{a_i^{(n)}}$ - последовательность $i$-той координаты последовательности.

Последовательность называется сходящейся, если у нее есть предел. Это условие не меняется и в $\mathbb R^n$.
В $\mathbb R$ все было ясно для последовательности $\set{a_n}$ предел равен $A$:
$$\lim_{n \rightarrow \infty} a_n = A \Leftrightarrow \forall \varepsilon > 0, \exists\  N \in \mathbb N: n>N \Rightarrow |a_n - A| < \varepsilon$$
Альтернативно это можно записать и через эпсилон-окрестность предела:
$$\lim_{n \rightarrow \infty} a_n = A \Leftrightarrow \forall \varepsilon > 0, \exists\  N \in \mathbb N: n>N \Rightarrow a_n \in U_\varepsilon (A)$$
А уже это понятие легко растягивается и в $\mathbb R^n$, ведь окрестности и в $\mathbb R^n$ окрестности. Для $\mathbb R^n$ все выглядит очень похоже:
$$\lim_{n \rightarrow \infty} a^{(n)} = A \Leftrightarrow \forall \varepsilon > 0, \exists\  N \in \mathbb N: n>N \Rightarrow a^{(n)} \in U_\varepsilon (A)$$
Переходя обратно из окрестностей в расстояние, для $\mathbb R^n$ определение предела выглядит так:
$$\lim_{n \rightarrow \infty} a^{(n)} = A \Leftrightarrow \forall \varepsilon > 0, \exists\  N \in \mathbb N: n>N \Rightarrow d(a^{(n)}, A) < \varepsilon$$
Это же условие можно равносильно записать как
$$\lim_{n \to \infty} d(a^{(n)}, A) = 0$$
Необходимое и достаточное условие существования предела - покоординатная сходимость: последовательность $\set{a^{(n)}} \in \mathbb R^n$ сходится к $A \in \mathbb R^n$, тогда и только тогда, когда сходится каждая координатная последовательность $a^{(n)}_i \to A_i$.
## (вся последовательность $\Rightarrow$ покоординатно):
Если дано
$$\lim_{n \to \infty} a^{(n)} = A$$
то равносильно известно
$$\forall \varepsilon > 0, \exists\  N \in \mathbb N: n>N \Rightarrow d(a^{(n)}, A) < \varepsilon$$
Тогда, так как расстояние между двумя точками не может быть меньше расстояния между проекциями этих точек на какую ось (разницей их координат), то получаем:
$$|a^{(n)}_i - A_i| \leq d(a^{(n)}, A) < \varepsilon$$
А это уже показывает существование покоординатных пределов:
$$\forall \varepsilon > 0, \exists\  N \in \mathbb N: n>N \Rightarrow |a^{(n)}_i -  A_i| < \varepsilon \Leftrightarrow \lim_{n\to \infty}a^{(n)}_i = A_i$$
## (покоординатно $\Rightarrow$ вся последовательность):
$$\lim_{n \to \infty} a^{(n)}_i = A_i$$
Из этого следует
$$\lim_{n \to \infty} (a^{(n)}_i - A_i) = 0$$
Но если предел разности равен нулю, то и предел квадрата разности тоже:
$$\lim_{n \to \infty} (a^{(n)}_i - A_i)^2 = 0$$
Раз разница каждой координаты стремится к нулю, то их сумма тоже будет стремиться к нулю:
$$\lim_{n \to \infty} \sum_{i=1}^n(a^{(n)}_i - A_i)^2 = 0$$
Накладываем корень:
$$\lim_{n \to \infty} \sqrt{\sum_{i=1}^n (a^{(n)}_i - A_i)^2}=0$$
А это запись эквивалентна записи $\lim\limits_{n \to \infty} d(a^{(n)}, A) = 0$, что совпадает с определением предела (третий вид записи предела).

