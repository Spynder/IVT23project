
## Необходимые условия дифференцируемости
Если функция $f(x), x \in \mathbb R^n$ дифференцируема в точке $x^{(0)}$, то она непрерывна в этой точке.

Так как дифференцируемость функции это выполнение следующего условия:
$$f(x) = f(x^{(0)}) + \sum_{k=1}^n A_k(x_k - x_k^{(0)}) + o(d(x, x^{(0)})), x \to x^{(0)}$$
То предел при $x \to x^{(0)}$ будет равен
$$\lim_{x \to x^{(0)}} f(x) = f(x^{(0)}) + \sum_{k=1}^n A_k\cancelto0{(x_k - x_k^{(0)})} + \cancelto{0}{o(d(x, x^{(0)}))}$$
Итого остается, что предел функции в точке равен значению функции в этой точке, что и есть определение непрерывности:
$$\lim_{x \to x^{(0)}} f(x) = f(x^{(0)})$$
---
Если функция $f(x), x \in \mathbb R^n$ дифференцируема в точке $x^{(0)}$, то она имеет в этой точке частные производные $\pdv{f}{x_i}$.

Используя альтернативное условие дифференцируемости (которое выполняется из-за условия)
$$f(x) = f(x^{(0)}) + \sum_{k=1}^n \left(A_k(x_k - x_k^{(0)}) + \alpha_k(x)(x_k - x_k^{(0)})\right)$$
посмотрим на частную производную по первой координате в точке $x^{(0)}$:
$$\pdv{f}{x_1}(x^{(0)}) = \lim_{x_1 \to x_1^{(0)}} \frac{f(x_1, x_2^{(0)}, \ldots, x_n^{(0)}) - f(x_1^{(0)}, x_2^{(0)}, \ldots, x_n^{(0)})}{x - x^{(0)}_1}$$
По условию дифференцируемости:
$$f(x_1, x_2^{(0)}, \ldots, x_n^{(0)}) = f(x^{(0)}) + A_1(x_1 - x^{(0)}_1) + \alpha_1(x)(x_1 - x^{(0)}_1)$$
Так как все остальные $x_i = x_i^{(0)}$ с $i > 1$, то скобки в сумме везде равны нулю и остается только первый член суммы.
С правой функцией сокращаются вообще все члены, оставляя только значение в точке:
$$f(x_1^{(0)}, x_2^{(0)}, \ldots, x_n^{(0)}) = f(x^{(0)})$$
Возвращаемся к пределу:
$$\pdv{f}{x_1}(x^{(0)}) = \lim_{x_1 \to x^{(0)}_1} \frac{A_1(x_1 - x^{(0)}_1) + \alpha_1(x)(x_1 - x^{(0)}_1)}{x - x^{(0)}_1} = $$
$$= \lim_{x_1 \to x^{(0)}_1} (A_1 + \alpha_1(x)) = A_1$$
Показали, частная производная по $x_1$ существует. Аналогично можно сказать и про любой $x_i$.

## Достаточные условия дифференцируемости
Если функция $f(x)$ определена в окрестности точки $x^{(0)}$ и все ее частные производные $\pdv{f}{x_i}(x)$ существуют и непрерывны в точке $x^{(0)}$, то функция $f(x)$ дифференцируема в точке $x^{(0)}$.

Раз доказательство не просили, сюда его включать пока не буду.