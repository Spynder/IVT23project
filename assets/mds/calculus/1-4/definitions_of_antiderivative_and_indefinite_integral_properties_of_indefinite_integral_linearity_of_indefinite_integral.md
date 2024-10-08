## Определения
Взять первообразную - операция, обратная взятию производной.
*Первообразной функции $f(x)$* называется такая функция $F(x)$, производная которой равна $f(x)$.
$$F'(x) = f(x)$$
Однако первообразная у функции бывает не одна. Для функции
$$f(x) = x^3$$
Существует бесконечное количество первообразных:
$$F_1(x) = \frac{x^4}{4}, F_2(x) = \frac{x^4+78}{4}, F_3(x) = \frac{x^4}{4} + 17, \ldots$$
Все множество этих первообразных $F(x) + C$ называется *неопределенным интегралом* от функции $f(x)$, и записывается
$$\int f(x) \dd x = F(x)+C$$
(товарищи трудящиеся, не забывайте $C$ - на экзамене баллы будут убирать за "незначительную ошибку")
С помощью $C$ обозначается любая константа - ее прибавление не меняет производной.
## Свойства, следующие из определения
Пару очевидных свойств из определения интеграла, из-за того, что взятие производной и первообразной - обратные друг другу операции:
$$\left(\int f(x)\dd x\right)' = f(x)$$
$$\dd{\left( \int f(x) \dd x\right)} = f(x) \dd x$$
$$\int f'(x) \dd x = f(x) + C$$
## Линейность интеграла
Линейность описывается двумя законами - умножение на скаляр (число) и сложение:
$$\int \left(C_1 f(x) + C_2 g(x)\right)\dd x = C_1\int f(x)\dd x + C_2 \int g(x) \dd x$$
Доказательство линейности интеграла исходит из линейности производных. Докажем сумму:
$$\int(f(x) + g(x))\dd x = \int f(x) \dd x + \int g(x) \dd x$$
Пусть $F(x)$ и $G(x)$ - первообразные $f(x)$ и $g(x)$ соответственно. Тогда $F(x) + G(x)$ (правая часть равенства) является первообразной для функции $f(x) + g(x)$ (левая часть равенства):
$$(F(x) + G(x))' = F'(x) + G'(x) = f(x) + g(x)$$
Докажем умножение:
$$\int kf(x)\dd x = k \int f(x) \dd x$$
Пусть $F(x)$ - первообразная $f(x)$. Тогда $kF(x)$ (правая часть равенства) является первообразной для функции $kf(x)$ (левая часть равенства):
$$(kF(x))' = kF'(x) = kf(x)$$