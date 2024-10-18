## Множества
Для начала определимся, что такое множество. В курсе дискретной математики мы можем просто сказать, что множество - это набор (группа, совокупность) элементов (объектов, вещей), объединенных общим свойством. Иногда можно услышать и "сет" - то же множество, просто на английском (set).

Элементы множества могут быть чем угодно. Предметы на втором курсе ИВТ - множество. Пальцы на руке - множество. Целые числа - множество. Элементы могут быть даже множествами, из-за чего появляется парадокс Рассела.
На количество элементов в множестве тоже нет никаких ограничений - хоть ноль, хоть бесконечное количество (но об этом позже).
Однако множества ***не могут*** содержать в себе одинаковые элементы - все элементы множества ***уникальны***.

Формально множества принято записывать заглавной латинской буквой. Первый способ - перечислить их в фигурных скобках:
$$A = \set{1, 2, 3, 4, 5}$$
Бесконечные множества тоже можно записывать через фигурные скобки, но это менее формальный вид. Мы указываем первые элементы и ставим троеточие, аля "дальше гадай закономерность сам":
$$\mathbb N = \set{1, 2, 3, 4, 5, \ldots}$$
Второй способ - описать признак включения через вертикальную черту (или через двоеточие):
$$B = \set{x \ \vert \ P(x)}$$
($P(x)$ тут это признак включения)
Вертикальная черта читается как "такие, что" или "которые". Например, натуральные числа на отрезке $[3,8]$ можно записать как множество с помощью:
$$B = \set{n \in \mathbb N \ | \ 3 \leq n \leq 8} = \set{3,4,5,6,7,8}$$
Через такую запись удобно записывать бесконечные множества.

Через значок $\in$ обозначается принадлежность какому-то множеству. Если мы говорим про *непринадлежность*, зачеркиваем значок:
$$5 \in B, \ \ \ 10 \notin B$$

## Типы множеств
Можно делить множества на типы в зависимости от количества элементов в нем:
- *Пустое множество* - множество, которое не содержит в себе ни одного элемента, обозначается как $\varnothing$. Интересное замечание, что пустое множество *единственно* - не существует другого множества, не содержащего в себе ни одного элемента.
- *Одноэлементное множество - синглетон - сингельтон* - множество, в котором только один элемент.
- *Конечное множество* - любое множество, которое имеет в себе конечное число элементов. 
- *Бесконечное множество* - противоположно последнему, в этом количество элементов бесконечное, причем различают *счетные* и *несчетные* множества.
- *Универсальное множество* - *универсум* - множество, которое содержит в себе ***всеееее*** элементы, обычно обозначается как $\mathbb U$, иногда как $\Omega$. В отличие от пустого множества, универсальное множество это не какая-то четкая константа, а множество, которое содержит все элементы ***внутри контекста задачи***.
  При работе с натуральными числами, универсальное множество может быть равно множеству натуральных чисел $\mathbb U = \mathbb N$. Если мы хотим найти все русские слова из пяти букв, универальным множеством может являться множество всех русских слов (или всех слов всех языков).

## Операции над множествами
*Объединение* - *дизъюнкция* в булевой логике, "или" в русском языке:
$$A \cup B = \set{x \ | \ x \in A \ или \ x \in B}$$
Результатом этой операции является множество, содержащие все элементы множества $A$ и все элементы множества $B$.
Пример: $\set{1,2,3,4} \cup \set{3,4,5,6} = \set{1,2,3,4,5,6}$ 

*Пересечение* - *конъюнкция* в булевой логике, "и" в русском языке:
$$A \cap B = \set{x \ | \ x \in A \ и \ x \in B}$$
Результатом этой операции является множество, содержащие все элементы, которые есть как в множестве $A$, так и в множестве $B$.
Пример: $\set{1,2,3,4} \cap \set{3,4,5,6} = \set{3,4}$

*Дополнение* - *отрицание* в булевой логике, "все, кроме" в русском языке:
$$\overline A = \set{x \in \mathbb U \ | \ x \notin A}$$
Результатом этой операции является множество, которое содержит в себе все\* элементы, которых не содержится в изначальном множестве.
\*элементы универсального множества $\mathbb U$
Пример: $\mathbb U = \set{1,2,3,4,5,6}, A = \set{1,2,3,4} \Rightarrow \overline A = \set{5,6}$

*Разность* - я не придумал как это будет звучать :(
$$A \setminus B = \set{x \in A \ | \ x \notin B}$$
Иногда записывают как $A - B$
Результатом этой операции является множество слева оператора, из которого убрали все элементы множества справа.
Можно равносильно переписать: $A \setminus B = A \cap \overline B$
Пример: $\set{1,2,3,4} \setminus \set{3,4,5,6} = \set{1,2}$

*Симметричная разность (кольцевая сумма)* - *xor* в булевой логике:
$$A \triangle B = (A \setminus B) \cup (B \setminus A)$$
Результатом этой операции является множество, элементы которого принадлежат *только одному* из множеств - либо $A$, либо $B$.
Можно равносильно переписать следующими способами:
$$A\triangle B = (A \cap \overline B) \cup (\overline A \cap B) = (A \cup B) \setminus (A \cap B)$$
Пример: $\set{1,2,3,4} \triangle \set{3,4,5,6} = \set{1,2,5,6}$

## Диаграммы Эйлера-Венна
Диаграммы Эйлера-Венна - способ графического представления отношений между множествами. Обычно их рисуют в виде кругов:
![[https://upload.wikimedia.org/wikipedia/commons/9/91/Venn_diagram_rgb.svg|300]]
На диаграмме с $n$ множествами должно быть изображено $2^n$ разных зон - каждая для одной из комбинаций множеств.
Кстати, четыре множества тоже возможно представить, но здесь надо уже использовать эллипсы:
![[discrete-1-1.png]]

В отличие от диаграммы Эйлера-Венна, диаграммы/круги Эйлера не обязательно пересекаются во всех местах - области могут стоять отдельно и не пересекаться вовсе, или один круг может полностью входить в другой.

Вот так выглядят диаграммы Эйлера-Венна для операций с множествами:
![[https://texample.net/media/tikz/examples/PNG/set-operations-illustrated-with-venn-diagrams.png]]

А для дополнения множества $\overline A$, диаграмма Эйлера-Венна выглядит похожим образом:
![[https://upload.wikimedia.org/wikipedia/commons/7/73/Venn10.svg]]