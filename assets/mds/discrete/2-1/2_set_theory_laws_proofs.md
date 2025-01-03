Огонь, что вопрос про способы доказательств стоит *после* вопроса, где их требуют. Читаем сначала это: [Способы доказательства равенств в теории множеств][[[3,0,3]]]

Теперь, уже все знающие про доказательства в теории множеств, разберем законы. Я буду варьировать способы доказательств, чтобы было больше примеров для билета #3, правда большинство доказательств тут ни о чем, ибо они следуют из соответствующих законов в алгебре логики, и мы просто переводим из множеств в логику, пользуемся ее законами, и возвращаемся в множества.

Примечание: в формальных доказательствах ниже используются значки дизъюнкции $\vee$ и конъюнкции $\wedge$, взятые из алгебры логики, хотя к ней мы еще официально не приступили. Эти значки можно заменить русскими "или" и "и", и смысл останется прежним. В конце концов, коммутативность и ассоциативность должна появляться хоть откуда-то.
Так как вероятнее всего защита будет проводиться в устном формате, имеет смысл проводить доказательства через диаграммы Эйлера-Венна.

## Законы коммутативности
Поменяв переменные местами, результат не меняется - как со сложением или умножением.
- $A \cup B = B \cup A$:
	  $x\in A \cup B \Leftrightarrow$
	  $\Leftrightarrow x\in A \vee x \in B \Leftrightarrow$
	  $\Leftrightarrow x\in B \vee x \in A \Leftrightarrow$
	  $\Leftrightarrow x\in B \cup A$
- $A \cap B = B \cap A$:
	  $x\in A \cap B \Leftrightarrow$
	  $\Leftrightarrow x\in A \wedge x \in B \Leftrightarrow$
	  $\Leftrightarrow x\in B \wedge x \in A \Leftrightarrow$
	  $\Leftrightarrow x\in B \cap A$

## Законы ассоциативности
При одинаковых операциях скобки не играют роли - тоже как со сложением и умножением.
- $(A \cup B) \cup C = A \cup (B \cup C)$:
	  $x \in (A \cup B) \cup C \Leftrightarrow$
	  $\Leftrightarrow x \in (A \cup B) \vee x \in C \Leftrightarrow$
	  $\Leftrightarrow (x \in A \vee x \in B) \vee x \in C \Leftrightarrow$
	  $\Leftrightarrow x \in A \vee (x\in B \vee x \in C) \Leftrightarrow$
	  $\Leftrightarrow x \in A \vee (x \in B \cup C) \Leftrightarrow$
	  $\Leftrightarrow x \in A \cup (B \cup C)$
- $(A \cap B) \cap C = A \cap (B \cap C)$:
	  $x \in (A \cap B) \cap C \Leftrightarrow$
	  $\Leftrightarrow x \in (A \cap B) \wedge x \in C \Leftrightarrow$
	  $\Leftrightarrow (x \in A \wedge x \in B) \wedge x \in C \Leftrightarrow$
	  $\Leftrightarrow x \in A \wedge (x\in B \wedge x \in C) \Leftrightarrow$
	  $\Leftrightarrow x \in A \wedge (x \in B \cap C) \Leftrightarrow$
	  $\Leftrightarrow x \in A \cap (B \cap C)$

Принцип доказательства через логику я надеюсь понятен.

## Законы дистрибутивности
Так же "распределительный закон" - как с умножением и сложением: $a(b+c) = ab + ac$. Вот только в обычной алгебре дистрибутивность не работает с $a + bc$, а в теории множеств дистрибутивны и операция объединения, и операция пересечения.

- $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$:
	  Доказательство через диаграммы Эйлера-Венна: сверху составляем множество в левой части уравнений, снизу - в правой части. Получаем одинако заполненные диаграммы, значит уравнение истинно.
	  ![[discrete-2-1.png|400]]
- $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$:
	  Доказательство через диаграммы Эйлера-Венна:
	  ![[discrete-2-2.png|400]]

## Законы де Моргана
От дополнения скобок мы можем перейти к дополнению отдельных переменных, если поменяем оператор на противоположный.

- $\overline{(A \cup B)} = \overline A \cap \overline B$:
	  Возьмем случайный элемент, принадлежащий универсальному множеству $x \in \mathbb U$. Тогда этот элемент может либо входить в множество, либо не входить. В формуле участвует 2 множества, поэтому всего есть четыре варианта положения $x$ в этой системе множеств. Распишем вхождения элемента $x$ в множества левой и правой части для каждого варианта положения:

| $x \in A$ | $x \in B$ | $x \in A \cup B$ | $x \in \overline{(A \cup B)}$ | $x \in \overline A$ | $x \in \overline B$ | $x \in \overline A \cap \overline B$ |
| --------- | --------- | ---------------- | ----------------------------- | ------------------- | ------------------- | ------------------------------------ |
| 0         | 0         | 0                | ***1***                       | 1                   | 1                   | ***1***                              |
| 0         | 1         | 1                | ***0***                       | 1                   | 0                   | ***0***                              |
| 1         | 0         | 1                | ***0***                       | 0                   | 1                   | ***0***                              |
| 1         | 1         | 1                | ***0***                       | 0                   | 0                   | ***0***                              |

Столбики $4$ и $7$, отвечающие за левую и правую часть уравнения, совпали, а значит уравнение тождественно истинно.
- $\overline{A \cap B} = \overline A \cup \overline B$:
	  Снова составляем таблицу в такими же суждениями, как и в прошлый раз.

| $x \in A$ | $x \in B$ | $x \in A \cap B$ | $x \in \overline{A \cap B}$ | $x \in \overline A$ | $x \in \overline B$ | $x \in \overline A \cup \overline B$ |
| --------- | --------- | ---------------- | --------------------------- | ------------------- | ------------------- | ------------------------------------ |
| 0         | 0         | 0                | ***1***                     | 1                   | 1                   | ***1***                              |
| 0         | 1         | 0                | ***1***                     | 1                   | 0                   | ***1***                              |
| 1         | 0         | 0                | ***1***                     | 0                   | 1                   | ***1***                              |
| 1         | 1         | 1                | ***0***                     | 0                   | 0                   | ***0***                              |

Столбики $4$ и $7$ совпали $\Rightarrow$ уравнение тождественно истинно.

## Законы идемпотентности
Идемпотентность = равносильность. Здесь это законы применения оператора с одной переменной на обоих сторонах.
- $A \cup A = A$:
	  $x \in A \cup A \Leftrightarrow x \in A \vee x \in A \Leftrightarrow x \in A$. Удивительный закон.
- $A \cap A = A$:
	  $x \in A \cap A \Leftrightarrow x \in A \wedge x \in A \Leftrightarrow x \in A$. Даже не знаю, какой лучше.

## Законы поглощения
Называются так, потому что "поглощают" скобку, оставляя лишь левую часть:
- $A \cup (A \cap B) = A$:
	  Объяснение на пальцах: $A \cap B$ это подмножество $A$, так как новых элементов пересечение не дает. Соответственно, объединение множества и его подмножества новых элементов не создаст, поэтому результатом является изначальное множество.

| $x \in A$ | $x \in B$ | $x \in A \cap B$ | $x \in A \cup (A \cap B)$ |
| --------- | --------- | ---------------- | ------------------------- |
| ***0***   | 0         | 0                | ***0***                   |
| ***0***   | 1         | 0                | ***0***                   |
| ***1***   | 0         | 0                | ***1***                   |
| ***1***   | 1         | 1                | ***1***                   |

Первый и четвертый столбик совпадают.
- $A \cap (A \cup B) = A$:
	  Объяснение на пальцах: если в прошлый раз $A \cap B$ было подмножеством $A$, то здесь наоборот, $A$ будет подмножеством $A \cup B$. А результатом пересечения множества и его подмножества будет как раз подмножество.

| $x \in A$ | $x \in B$ | $x \in A \cup B$ | $x \in A \cap (A \cup B)$ |
| --------- | --------- | ---------------- | ------------------------- |
| ***0***   | 0         | 0                | ***0***                   |
| ***0***   | 1         | 1                | ***0***                   |
| ***1***   | 0         | 1                | ***1***                   |
| ***1***   | 1         | 1                | ***1***                   |

Первый и четвертый столбик совпадают.

## Законы тождества
Законы с использованием пустого множества и универсального множества, которые *сокращают* "константы". Работают за счет тождественной истинности высказываний с ними.
- $A \cup \varnothing = A$:
	  $x \in A \cup \varnothing \Leftrightarrow x \in A \vee x \in \varnothing \Leftrightarrow x \in A \vee 0 \Leftrightarrow x \in A$. Ни один элемент не принадлежит пустому множеству, поэтому $x \in \varnothing$ тождественно ложно.

| $x \in A$ | $x\in \varnothing$ | $x \in A \cup \varnothing$ |
| --------- | ------------------ | -------------------------- |
| 0         | 0                  | 0                          |
| 1         | 0                  | 1                          |

- $A \cap \mathbb U = A$:
	  $x \in A \cap \mathbb U \Leftrightarrow x \in A \wedge x \in \mathbb U \Leftrightarrow x \in A \wedge 1 \Leftrightarrow x \in A$. Любой элемент принадлежит универсальному множеству по его определению, поэтому выражение $x \in \mathbb U$ тождественно истинно.

| $x \in A$ | $x \in \mathbb U$ | $x \in A \cap \mathbb U$ |
| --------- | ----------------- | ------------------------ |
| 0         | 1                 | 0                        |
| 1         | 1                 | 1                        |

## Законы констант
Законы с использованием пустого множества и универсального множества, которые *оставляют* "константы". Работают за счет тождественной истинности высказываний с ними.
- $A \cap \varnothing = \varnothing$:
	  $x \in A \cap \varnothing \Leftrightarrow x \in A \wedge x \in \varnothing \Leftrightarrow x \in \varnothing$. Так как $x \in \varnothing$ тождественно ложное высказывание, $x \in A$ никак не влияет на выражение.

| $x \in A$ | $x\in \varnothing$ | $x \in A \cap \varnothing$ |
| --------- | ------------------ | -------------------------- |
| 0         | 0                  | 0                          |
| 1         | 0                  | 0                          |

- $A \cup \mathbb U = \mathbb U$:
	  $x \in A \cup \mathbb U \Leftrightarrow x \in A \vee x \in \mathbb U \Leftrightarrow  x \in \mathbb U$. Так как $x \in \mathbb U$ тождественно истинное высказывание, $x \in A$ никак не влияет на выражение.

| $x \in A$ | $x \in \mathbb U$ | $x \in A \cup \mathbb U$ |
| --------- | ----------------- | ------------------------ |
| 0         | 1                 | 1                        |
| 1         | 1                 | 1                        |

## Законы дополнения
Законы на операции с множеством и его дополнением, отчего и название.
- $A \cup \overline A = \mathbb U$:
	  $x \in A \cup \overline A \Leftrightarrow x \in A \vee x \in \overline A \Leftrightarrow x \in A \vee x \notin A \Leftrightarrow x \in \mathbb U$. Любой элемент $x$ либо принадлежит множеству, либо не принадлежит - дизъюнкция (или) этих высказываний тождественно истинно.
- $A \cap \overline A = \varnothing$:
	  $x \in A \cap \overline A \Leftrightarrow x \in A \wedge x \in \overline A \Leftrightarrow x \in A \wedge x \notin A \Leftrightarrow x \in \varnothing$. Опять же, любой элемент либо принадлежит множеству, либо не принадлежит - два этих варианта не могут выполняться одновременно, посему их конъюнкция тождественно ложна.
- $\overline{\mathbb U} = \varnothing$: $x \in \overline {\mathbb U} \Leftrightarrow x \notin \mathbb U \Leftrightarrow x \in \varnothing$. Нет такого элемента, который не принадлежит универсальному множеству - по его определению.
- $\overline \varnothing = \mathbb U$: $x \in \overline \varnothing \Leftrightarrow x \notin \varnothing \Leftrightarrow x \in \mathbb U$.

## Закон инволюции
$\overline{\overline A} = A$: $x \in \overline{\overline A} \Leftrightarrow x \notin \overline A \Leftrightarrow x \in A$. Этот закон помогает снять (сократить) двойное дополнение.
