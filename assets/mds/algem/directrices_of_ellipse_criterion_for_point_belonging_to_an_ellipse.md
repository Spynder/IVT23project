Продолжаем говорить про эллипсы - будет полезно почитать билет [[#21. Геометрические свойства эллипса. Фокусы. Теорема об эллипсе.]], если еще не читали.

Помните, как мы говорили про фокусы эллипса, и что через них можно определить эллипс как ГМТ? Так вот с директрисами происходит подобная идея. Директрисы для эллипса - это две вертикальные прямые (в канонической системе координат) - $x = \pm \frac a \varepsilon$. Они связывают эксцентриситет, дают ему немного больше геометрического смысла, чем было до этого.
![[algem-22-1.png]]
Из того, что эксцентриситет эллипса меньше единицы, следует, что директрисы эллипса лежат вне самого эллипса (и не пересекают его).

В общем смысле, директриса - это такая прямая, что отношение расстояния любой точки на линии (здесь - эллипс) до фокуса к расстоянию этой же точки до этой прямой равно эксцентриситету.

Критерий принадлежности точки к эллипсу можно, конечно, дать как "координаты точки должны удовлетворять уравнению эллипса", но это не совсем то, чего от нас хотят тут. $$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$$
Я упомянул, что через директрисы можно сделать новое определение через ГМТ. Вот это и есть оно:
Чтобы точка лежала на эллипсе, необходимо и достаточно $(\Leftrightarrow)$, чтобы отношение ее расстояния до фокуса к расстоянию до соответствующей (на той же стороне) директрисы равнялось эксцентриситету эллипса $\varepsilon$.
![[algem-22-2.png]]

Другими словами, это просто определение директрисы. 
Ну давайте докажем и это:
(точка на эллипсе $\Rightarrow$ отношение равно $\varepsilon$): расстояние от правой директрисы будет равно (по очевидным причинам, схожие описаны в билете [[#25. Геометрические свойства параболы. Фокус, директриса. Теорема о параболе.]] тоже для директрис)
$$d = \frac a \varepsilon - x$$
Из билета [[#22. Директрисы эллипса. Критерий принадлежности точки к эллипсу.]] мы можем забрать формулу для расстояния до фокуса:
$$r = a-\varepsilon x$$
Отношение их, на удивление...
$$\frac rd = \frac{a-\varepsilon x}{\frac a\varepsilon - x} = \frac{a-\varepsilon x}{(a-\varepsilon x)\frac 1 \varepsilon} = \varepsilon$$
Ну и конечно для левой директрисы все симметрично аналогично.
(отношение равно $\varepsilon$ $\Rightarrow$ точка на эллипсе): здесь мы рассмотрим расстояния чисто через теорему Пифагора. Если отношение равно $\varepsilon$, то...
$$\frac rd = \varepsilon \Rightarrow r = \varepsilon d$$
$$\sqrt{(x+c)^2 + y^2} = \varepsilon (x + \frac a \varepsilon) = ex + a$$
Так как $\varepsilon = \frac c a$, то:
$$\sqrt{(x+c)^2 + y^2} = \frac c a x + a \Rightarrow a\sqrt{(x+c)^2 + y^2} = cx + a^2$$
А вот это уже что-то знакомое... Помните, в прошлом билете мы уже это разрешивали? Я даже оставил метку в прошлом билете "сюда мы вернемся потом". В общем это равенство в итоге сводится к каноническому виду эллипса, что доказывает это следствие.
А раз мы доказали в обе стороны, мы доказали теорему. Эллипс действительно можно определить как ГМТ, где отношение расстояний равно эксцентриситету.
## Пример задачи
Условие: зная правую директрису $x=7$ и эксцентриситет эллипса $\varepsilon = \frac 47$, найдите каноническое уравнение, описывающее эллипс с такими характеристиками.

Решение: директриса задается уравнением $x = \frac{a}{\varepsilon}$. Отсюда можно найти $a = \varepsilon x  = \frac 47 \cdot 7  = 4$.
Из определения эксцентриситета можно взять фокальное расстояние:
$$\varepsilon = \frac c a \Rightarrow c = \varepsilon a = \frac 47 \cdot 4 = \frac{16}{7}$$
И теперь находим $b$ через фокальное расстояние:
$$c^2 = a^2 - b^2 \Rightarrow b^2 = a^2 - c^2 = \left(4-\frac{16}{7}\right)\left(4+\frac{16}{7}\right) = \frac{528}{49}$$
Знаем обе оси, теперь можно и формулу записать:
$$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 \rightarrow \frac{x^2}{16} + \frac{y^2}{528/49} = 1$$
