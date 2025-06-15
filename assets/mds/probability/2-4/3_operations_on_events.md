(Авторство билетов: @r0ma_shhka)

Операции над событиями аналогичны операциям над множествами:

1) $A + B = A \cup B$  
2) $AB = A \cap B$  
3) $A - B = A \setminus B$  
4) $\overline{A}$ — дополнение  
5) Операция включения (множество $A$ является подмножеством $B$)

![[probability/2-4-3-1.png]]

Множество событий образует булеву алгебру $\mathcal{S}$.  
Это класс объектов, в котором определены операции и свойства:

1) Если $A \in \mathcal{S}$ и $B \in \mathcal{S}$, то $A + B \in \mathcal{S}$, $A \cap B \in \mathcal{S}$, $\overline{A} \in \mathcal{S}$ (замкнутость)

2) $A \cap B = B \cap A$, $A + B = B + A$ (коммутативность)

3) $(A + B) + C = A + (B + C)$; $(A \cap B) \cap C = A \cap (B \cap C)$ (ассоциативность)

4) $A + (B \cap C) = (A + B) \cap (A + C)$ (дистрибутивность)

5) $A + A = A$, $A \cap A = A$ (идемпотентность)

6) $A + B = B \iff A \cap B = A$ (совместимость)

7) $A + \varnothing = A$, $A \cap \varnothing = \varnothing$, $A + \Omega = \Omega$, $A \cap \Omega = A$  
($S$ содержит 0 и 1)

8) $A + \overline{A} = \Omega$, $A \cap \overline{A} = \varnothing$  
($S$ содержит дополнительное событие)

9) $A \cap (A + B) = A$ (поглощение)

10) $\overline{A \cap B} = \overline{A} + \overline{B}$,  
    $\overline{A + B} = \overline{A} \cap \overline{B}$  
    (формулы де Моргана)

---

## Следствия

1) $P(\varnothing) = 0$  
2) $P(A \setminus B) = P(A) - P(A \cap B)$  
3) $A \subseteq B \Rightarrow P(A) \leq P(B)$


# Исходники:
![[probability/origin/3-1.jpg]]
![[probability/origin/3-2.jpg]]
![[probability/origin/3-3.jpg]]