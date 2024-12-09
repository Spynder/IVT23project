Задана функция $f(x_1, x_2, \ldots, x_n)$, или же для простоты записи $f(x)$, где $x \in \mathbb R^n$.

Частная производная очень схожа с производной обычной функции - отличаются только функции. По определению, производная это предел отношения приращения функции к приращению аргумента:
$$\lim_{\Delta x \to 0} \frac{f(x_1 + \Delta x, x_2, \ldots, x_n) - f(x_1, x_2, \ldots, x_n)}{\Delta x}$$
Такой предел называется частной производной (первого порядка) функции по переменной $x_1$ в точке $(x_1, x_2, \ldots, x_n)$. Обозначать частные производные можно двумя способами, но левый (нотация Лейбница) более принятый, чем правый (нотация Лагранжа):
$$\frac{\partial f}{\partial x_1} \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ f'_{x_1}$$

Обращаю внимание, что в нотации Лейбница используются не $\dd$, а $\partial$ - это обозначение, что имеется в виду *частная производная*.

Частная производная второго порядка - это частная производная частной производной (первого порядка) - повторное дифференцирование. Причем здесь идет разделение, можно дифференцировать как по тому же аргументу, так и по-другому. Частную производную второго порядка сначала по $x_1$, потом по $x_2$, можно записать так:
$$\frac{\partial^2 f}{\partial x_1 \partial x_2} = \lim_{\Delta x \to 0} \frac{\frac{\partial}{\partial x_1}f(x_1, x_2 + \Delta x, \ldots, x_n)  - \frac{\partial}{\partial x_1}f(x_1, x_2 + \Delta x, \ldots, x_n)}{\Delta x}$$

Если мы брали производную от одного и того же аргумента, запись будет выглядеть так:
$$\frac{\partial^2f}{\partial x_1^2} \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ f''_{x_1x_1}$$
Если же это были разные аргументы, то так:
$$\frac{\partial^2f}{\partial x_1\partial x_2} \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ f''_{x_1x_2}$$
Обратите внимание, что в нотации Лейбница в числителе ставится порядок производный у $\partial$, а снизу количество дифференцирований по аргументу ставится сразу у всего множителя $\partial x_n$, считая их нераздельной частичкой.

Также обращаю внимание, что порядок дифференцирования не влияет на результат (теорема Шварца):
$$\frac{\partial^2f}{\partial x_i\partial x_j} = \frac{\partial^2f}{\partial x_j\partial x_i} = \frac{\partial f}{\partial x_i} \frac{\partial f}{\partial x_j} = \frac {\partial f}{\partial x_j} \frac{\partial f}{\partial x_i}$$

