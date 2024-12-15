По определению, дифференциал второго порядка равен:
$$\dd{^2} f(x) = \dd(\dd f(x))$$
Как мы знаем, дифференциал функции нескольких переменных равен
$$\dd f(x) = \sum_{k=1}^n \pdv{f(x)}{x_k} \Delta x_k$$
то подставляя и повторно считая дифференциал, получаем
$$\dd{\left( \sum_{k=1}^n \pdv{f(x)}{x_k} \Delta x_k \right)} =  \sum_{k=1}^n \dd{\left(\pdv{f(x)}{x_k}\right)} \Delta x_k = $$
$$= \sum_{k=1}^n \left( \sum_{s=1}^n \pdv{f(x)}{x_s} \Delta x_s \left(\pdv{f(x)}{x_k}\right)\right) \Delta x_k = \sum_{k=1}^n \sum_{s=1}^n \pdv{^2f(x)}{x_s\partial x_k}\Delta x_s \Delta x_k$$

Схоже с дифференцируемой в точке функции $n$ переменных, функция дифференцируема *дважды* в точке, если:
$$\Delta f(x) =  \dd f(x) + \frac12 \dd{^2f(x)} + \ o(|\Delta x|^2), |\Delta x| \to 0$$
