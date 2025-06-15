(Авторство билетов: @r0ma_shhka)

# Исходники:
![[probability/origin/10-1.jpg]]
![[probability/origin/10-2.jpg]]
![[probability/origin/10-3.jpg]]
![[probability/origin/10-4.jpg]]

Вероятность объединения двух событий $A$ и $B$

$$P(A \cup B) = P(A) + P(B) - P(A B)$$

**Доказательство:**  
Объединение событий $A$ и $B$ можно представить как:  
$$A + B = AB \cup A\overline{B} \cup \overline{A}B$$

где
- $AB$ — A и B происходят,
- $A\overline{B}$ — A происходит, B не происходит,
- $\overline{A}B$ — A не происходит, B происходит

Используем систему конечной аддитивности для непересекающихся событий:

$$\array{
    P(A) = P(AB) + P(A\overline{B})\\
    P(B) = P(AB) + P(\overline{A}B)
}$$

Тогда:

$$\array{
    P(A\overline{B}) = P(A) - P(AB)\\
    P(\overline{A}B) = P(B) - P(AB)
}$$

Подставляем:

$$\array{
P(A + B) = P(A\overline{B}) + P(\overline{A}B) + P(AB) = \\
= P(A) - P(AB) + P(B) - P(AB) + P(AB) = P(A) + P(B) - P(AB)
}$$

---

**Для трёх событий:**

$$\array{
P(A + B + C) = P(A + B) + P(C) - P((A + B)C) =\\
= P(A) + P(B) + P(C) - P(AC) - P(BC) + P(ABC) - P(AB)
}$$

![[probability/2-4-10-1.png]]

**Обобщение:**

$$
P\left( \sum_{i=1}^{n} A_i \right) =
\sum_{i=1}^{n} P(A_i) -
\sum_{i < j} P(A_i A_j) +
\sum_{i < j < k} P(A_i A_j A_k) \ldots
$$

$$
+ (-1)^{n+1} P(A_1 A_2 \ldots A_n)
$$
---

**Доказательство методом математической индукции:**

1) Проверим базу: $n = 1$, $n = 2$ — формулы верны для $n$

2) Докажем, что она верна для $n + 1$:

$$P\left(\bigcup\limits_{i=1}^{n+1} A_i\right) = P\left(\bigcup_{i=1}^{n} A_i\right) + P(A_{n+1}) - P\left(\bigcup\limits_{i=1}^{n} A_i \cap A_{n+1}\right)$$

- $P\left(\bigcup\limits_{i=1}^{n} A_i\right)$ — уже известная формула для $n$ событий  
- $P(A_{n+1})$ — вероятность нового события  
- $P\left(\bigcup\limits_{i=1}^{n} A_i \cap A_{n+1}\right)$ — пересечение $A_{n+1}$ с существующими событиями (сумма пересечений)

### Симметричная формула сложения

$$\array{
P\left(\sum\limits_{i=1}^{n+1} A_i\right) = \sum\limits_{i=1}^{n+1} P(A_i) - \sum\limits_{i<j} P(A_i \cap A_j)\\
\ + \ldots + (-1)^n P(A_1 \cap \ldots \cap A_{n+1})
}$$

---

**Замечание**  
Для несовпадающих (несовместных) попарно событий:

$$P\left(\sum\limits_{i=1}^n A_i\right) = \sum\limits_{i=1}^n P(A_i)$$

---

Докажем:
$$P\left(\sum A_i\right) \leq \sum P\left(A_i\right)$$
Через метод математической индукции.  

Для $n = 2$:

$$P(\sum_{i=1}^2 A_i) = P(A_1) + P(A_2) - P(A_1 A_2) \leq P(A_1) + P(A_2)$$

(т.к. $P(A_1 A_2) \geq 0$)

При $n + 1$: добавляется ещё одно событие $A_{n+1}$

$$P\left(\bigcup\limits_{i=1}^{n+1} A_i\right) = P\left(\bigcup\limits_{i=1}^{n} A_i\right) + P(A_{n+1}) - P\left(\bigcup\limits_{i=1}^{n} A_i \cap A_{n+1}\right)$$

Так как $P\left(\bigcup\limits_{i=1}^{n} A_i \cap A_{n+1}\right) \geq 0$, то:

$$P\left(\bigcup\limits_{i=1}^{n+1} A_i\right) \leq \sum\limits_{i=1}^{n+1} P(A_i), \quad \forall n \in \mathbb{N}$$

ч.т.д.
