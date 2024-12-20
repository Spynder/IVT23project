Кто бы мог подумать, что интегрирование и дифференциирование тут назовут изменением масштаба...

## Первое свойство
$$b_n = na_n \Rightarrow B(x) = xA'(x)$$
Доказательство очевидно:
$$A(x) = \sum\limits_{n=0}^\infty a_nx^n; \ \ A'(x) = \sum\limits_{n=0}^\infty (a_nx^n)' = \sum\limits_{n=0}^\infty na_nx^{n-1}$$
Так как при $n=0$ член суммы нулевой (умножение на ноль), двигаем индекс вправо:
$$\sum\limits_{n=1}^\infty na_nx^{n-1} = \sum\limits_{n=0}^\infty b_nx^{n-1} = A'(x)$$
Соответственно:
$$x \cdot A'(x) = x \cdot \sum\limits_{n=0}^\infty b_nx^{n-1} = \sum\limits_{n=0}^\infty b_nx^{n} = B(x)$$

## Второе свойство
$$b_n = \frac{a_n}{n+1} \Rightarrow B(x) = \frac1x \int\limits_0^x A(x)\dd x$$
Доказательство:
$$A(x) = \sum_{n=0}^\infty a_nx^n; \ \ \int\limits_0^xA(x)\dd x = \sum_{n=0}^\infty \int\limits_0^x a_nx^n \dd x = \sum_{n=0}^\infty \frac{a_n}{n+1}x^{n+1} = \sum\limits_{n=0}^\infty b_nx^{n+1}$$
Соответственно:
$$\frac1x \int\limits_0^x A(x)\dd x = \frac1x \sum\limits_{n=0}^\infty b_nx^{n+1} = \sum\limits_{n=0}^\infty b_nx^{n} = B(x)$$
