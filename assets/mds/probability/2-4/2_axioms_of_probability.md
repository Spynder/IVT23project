(Авторство билетов: @r0ma_shhka)

# Исходники:
![[probability/origin/2-1.jpg]]
![[probability/origin/2-2.jpg]]

$P = P(F)$ — числовая функция, определённая на $\sigma$-алгебре событий $F$,  
для которой верны 3 эквивалентных аксиомы системы (I и II):

## I.
1) Неотрицательность:  
   $0 \leq P(F) \leq 1$

2) Нормированность:  
   $P(\Omega) = 1$

3) Если $\forall i, j: A_i \cap A_j = \varnothing$, то  
   $P\left(\bigcup_{i \in \Lambda} A_i\right) = \sum_{i \in \Lambda} P(A_i)$ — конечная аддитивность, n - конечное число

4) Если $A_1 \supset A_2$ и $\sum_{n=1}^{\infty} A_n = \varnothing$,  
   то $\lim\limits_{n \to \infty} P(A_n) = 0$ — непрерывность $n \to \infty$

---

## II. 1 и 2 те же

3) если для $\forall i \ne j: A_i \cap A_j = \varnothing$,  
то $P\left(\sum_{i=1}^{\infty} A_i\right) = \sum_{i=1}^{\infty} P(A_i)$ — счётная аддитивность

