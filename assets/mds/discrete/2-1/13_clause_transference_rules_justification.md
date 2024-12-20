Про правила переноса я упоминал в [11 билете][[[3,0,10]]] - это возможность перенести причину из левой части в правую, и перенести следствие из правой части в левую - только нужно их инвертировать (отрицание).

Формально, если дана клауза
$$P_1, P_2, \ldots ,P_n \Rightarrow C_1; C_2; \ldots; C_m$$
то следующие клаузы будут ей эквивалентны:
$$\array{P_1, P_2, \ldots ,P_n, \overline{C_1} \Rightarrow C_2; \ldots; C_m \\ P_1, P_2, \ldots ,P_{n-1} \Rightarrow \overline{P_n}; C_1; C_2; \ldots; C_m}$$
Причем правило не распространяется только на прилегающие к импликации причины/следствия - так как дизъюнкция и конъюнкция коммутативны, можно переставлять причины и следствия в любом порядке, а значит и переносить любую причину/следствие в противоположную часть в любое место.

Доказывается это переходом в булевую логику.
$$P_1 \wedge P_2 \wedge \ldots \wedge P_n \Rightarrow C_1 \vee C_2 \vee \ldots \vee C_m$$
Как известно, $A \Rightarrow B = \overline A \vee B$. Тогда эта клауза станет равна:
$$\overline{(P_1 \wedge P_2 \wedge \ldots \wedge P_n)} \vee C_1 \vee C_2 \vee \ldots \vee C_m$$
Раскрываем скобку по де Моргану и получаем выражение из дизъюнкций:
$$\overline{P_1} \vee \overline{P_2} \vee \ldots \vee \overline{P_n} \vee C_1 \vee C_2 \vee \ldots \vee C_m$$
И теперь в зависимости от того, что и куда мы хотим перенести, ставим скобки и делаем операцию в обратном порядке. Скажем, хотим перенести причину направо:
$$\array{(\overline{P_1} \vee \overline{P_2} \vee \ldots \vee \overline{P_{n-1}}) \vee (\overline{P_n} \vee C_1 \vee C_2 \vee \ldots \vee C_m) \\
\overline{(P_1 \wedge P_2 \wedge \ldots \wedge P_{n-1})} \vee (\overline{P_n} \vee C_1 \vee C_2 \vee \ldots \vee C_m) \\
P_1 \wedge P_2 \wedge \ldots \wedge P_{n-1} \Rightarrow \overline{P_n} \vee C_1 \vee C_2 \vee \ldots \vee C_m \\
P_1 , P_2 , \ldots , P_{n-1} \Rightarrow \overline{P_n} ; C_1 ; C_2 ; \ldots ; C_m}$$
Или наоборот, следствие налево?
$$\array{(\overline{P_1} \vee \overline{P_2} \vee \ldots \vee \overline{P_n} \vee C_1) \vee (C_2 \vee \ldots \vee C_m) \\
\overline{(P_1 \wedge P_2 \wedge \ldots \wedge P_n \wedge \overline{C_1})} \vee (C_2 \vee \ldots \vee C_m) \\
P_1 \wedge P_2 \wedge \ldots \wedge P_n \wedge \overline{C_1} \Rightarrow C_2 \vee \ldots \vee C_m \\
P_1 , P_2 , \ldots , P_n, \overline{C_1} \Rightarrow C_2 ; \ldots ; C_m}$$
Перенося все причины направо или все следствия налево мы и получаем "тавтологию" или "противоречие".
