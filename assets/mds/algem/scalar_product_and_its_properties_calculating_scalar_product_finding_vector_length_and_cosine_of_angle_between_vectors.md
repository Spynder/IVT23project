Скалярное произведение - операция, определенная на двух векторах. Записывается разными способами:
$$(\overline a, \overline b) = \overline a \cdot \overline b = \overline a \overline b$$
Скалярное произведение двух векторов $\overline a$ и $\overline b$ равно произведению длин этих векторов на косинус угла между ними $\theta$: $$(\overline a, \overline b) = |\overline a||\overline b| \cos \theta$$
![[https://upload.wikimedia.org/wikipedia/commons/2/25/Scalar-product-dot-product.svg]]
Если посмотреть на формулу, можно объединить $|\overline a|$ и $\cos \theta$. Так как $\theta$ это угол между двумя векторами, произведение $|\overline a| \cos \theta$ можно представить как проекцию вектора $\overline a$ на вектор $\overline b$. Благодаря этому, скалярное произведение можно представить как произведение длины проекции одного вектора на второй и длины второго вектора.
Так как произведение симметричное, можно представить точно так же произведение как и произведение проекции длины второго вектора на первое и длины первого вектора.
Напоминаю, что мы можем записать скалярное произведение через проекции:
$$(\overline a, \overline b) = \prj_{\overline b}\overline a \cdot |b|$$

Длина вектора определяется по теореме Пифагора. Пусть дан вектор $\overline a(x_1; y_1)$. Тогда его длина: $$|\overline a| = \sqrt{x_1^2 + y^2_1}$$
А если задан вектор $\overline{AB}$, то его длина: $$|\overline {AB}| = \sqrt{(B_x - A_x)^2 + (B_y - A_y)^2}$$
Пройдемся по свойствам:
1. Скалярное произведение коммутативно: $(\overline a, \overline b) = (\overline b, \overline a)$
$$(\overline a, \overline b) = |\overline a||\overline b| \cos \theta = |\overline b||\overline a| \cos \theta = (\overline b, \overline a)$$
2. Скалярное произведение дистрибутивно на сложении. Это свойство вытекает из свойства про сумму проекций/проекцию суммы: $$\array{(\overline a, \overline b + \overline c) = (\overline a, \overline b) + (\overline a, \overline c) \\ |\overline a|\cdot  \prj_\overline a (\overline b + \overline c) = |\overline a|\cdot  \prj_\overline a \overline b + |\overline a|\cdot  \prj_\overline a \overline c}$$
3. Умножение на скаляр, его тоже можно понимать через смысл проекций: $$\array{(\alpha \overline a, \overline b) = \alpha (\overline a, \overline b) \\ |\overline b| \cdot \prj_\overline b (\alpha\overline a) = |\overline b| \cdot \alpha \cdot \prj_\overline b \overline a}$$
4. Если $(\overline a, \overline b) = 0$, то вектора $\overline a$ и $\overline b$ ортогональны.
5. "Чистой" ассоциативности у скалярного произведения нет, просто потому что скалярное произведение возвращает скаляр, и скалярное произведение не определено между вектором и скаляром. Однако, "ассоциативность" с двумя векторами и скаляром существует: $$(\overline a, (\overline b, \overline c)) = (\overline a, |b||c|\cos \theta) = \ ???$$
   Однако со скаляром все хорошо: $$c \cdot (\overline a, \overline b) = (c\overline a, \overline b) = (\overline a, c\overline b) = c\cdot |\overline a||\overline b|\cos \theta$$
7. Произведение само на себя - угол между одним и тем же вектором считается нулевым: $$(\overline a, \overline a) = |\overline a||\overline a| \cdot \cos 0 = |\overline a|^2$$Из этого следует, что мы можем выразить длину вектора через скалярное произведение: $$|a| = \sqrt{(\overline a, \overline a)}$$
В ортонормированном базисе для векторов $\overline a(a_1; a_2; \ldots; a_n)$ и $\overline b (b_1; b_2; \ldots; b_n)$ справедлива следующая формула:
$$(\overline a, \overline b) = \sum_{i=1}^n a_i b_i = a_1b_1 + a_2b_2 + \ldots + a_nb_n$$
Докажем, что эта формула равносильна формуле с косинусом.
Введем *ортонормированный* базис $(\overline {e_1}; \overline {e_2}; \ldots; \overline {e_n})$, в котором будут находится наши векторы. Разложим наши векторы $\overline a$ и $\overline b$ в линейные комбинации:
$$\overline a = \sum_{i=1}^n a_i \overline {e_i} \ \ \ \ \ \ \ \ \overline b = \sum_{i=1}^n b_i \overline {e_i}$$

Рассмотрим скалярное произведение двух базисных векторов $(\overline{e_i}, \overline{e_j})$. Когда $i \neq j$ произведение будет равно нулю, ведь базисные векторы ортогональны друг другу. Когда $i=j$, произведение будет равно $|\overline{e_i}|^2$, что в свою очередь равно $1$, т.к. в ортонормированном базисе все вектора единичной длины.
$$(\overline{e_i}, \overline{e_j}) = \cases{1 & $i = j$ \\ 0 & $i \neq j$}$$
Рассмотрим теперь скалярное произведение вектора на базисный вектор:
$$(\overline a, \overline e_i) = |\overline a||\overline e_i| \cos \theta = |\overline a| \cos \theta = a_i$$
Первый переход по геометрическому определению скалярного произведения, второй переход из-за того, что длина базисного вектора в ортонормированном базисе равна единице, и последний переход - проекция вектора на базисный вектор будет равно координате этого вектора на этом базисе. Попробуйте мысленно себе представить проекцию вектора $\overline a$ на базисный вектор.
![[https://upload.wikimedia.org/wikipedia/commons/b/b5/Wiki_dot.png]]
Наконец, перейдем к главному доказательству:
$$(\overline a, \overline b) = (\overline a, \sum_{i=1}^n b_i \overline{e_i})$$
Для начала мы раскладываем вектор $\overline b$ в линейную комбинацию. Теперь, зная, что скалярное произведение дистрибутивно на сложении, мы можем занести вектор $\overline a$ внутрь суммы:
$$(\overline a, \sum_{i=1}^n b_i \overline{e_i}) = (\overline a, b_1\overline{e_1} + b_2\overline{e_2} + \ldots + b_n\overline{e_n}) = $$
$$= (\overline a, b_1\overline{e_1}) + (\overline a, b_2\overline{e_2}) + \ldots + (\overline a, b_n\overline{e_n}) = $$
$$= \sum_{i=1}^n(\overline a, b_i\overline{e_i}) = \sum_{i=1}^nb_i(\overline a,\overline{e_i})$$
Теперь вспоминаем, чему равно скалярное произведение и делаем наш последний переход:
$$\sum_{i=1}^nb_i(\overline a,\overline{e_i}) = \sum_{i=1}^nb_i a_i = \sum_{i=1}^n a_i b_i$$
Доказательство закончено.

Благодаря этой формуле появляется еще одно интересное свойство, которое более полно раскрыто в вопросе [[#13. Выражение смешанного произведения через координаты сомножителей.]]:
При умножении по-координатно, орты векторов "убираются":
$$((a_1\overline i; a_2\overline k; a_3\overline j), (b_1\overline i; b_2\overline k; b_3\overline j)) = a_1b_1 \cancel{\overline i} + a_2b_2 \cancel{\overline j} + a_3b_3 \cancel{\overline k}$$

Зная скалярное произведение, можно найти косинус угла между двумя векторами:
$$(\overline a, \overline b) = |\overline a||\overline b| \cos \theta \Rightarrow \cos \theta = \frac{(\overline a, \overline b)}{|\overline a||\overline b|}$$
## Пример задачи
Условие: вычислите скалярное произведение векторов $\overline a(5; 3)$ и $\overline b(8, -3)$.

Решение:$$(\overline a, \overline b) = a_1b_1 + a_2b_2 = 5\cdot 8 - 3\cdot 3 = 40-9=31$$

---
Условие: вычислите скалярное произведение векторов, длина которых $5$ и $7$, и угол между ними равен $60^\circ$.

Решение:
$$(\overline a, \overline b) = |\overline a||\overline b| \cos \theta = 5 \cdot 7 \cdot \cos 60^\circ = \frac{5\cdot 7}2 = 17.5$$

---
Условие: найдите длину вектора $\overline a(-5; 12)$.

Решение:
$$|\overline a| = \sqrt{a_1^2 + a_2^2} = \sqrt{(-5)^2 + 12^2} = \sqrt{169} = 13$$

---
Условие: найдите угол между векторами $\overline a(0; 5)$ и $\overline b(5\sqrt{3}; 5)$.

Решение: чтобы найти угол, нужно знать длину векторов и их скалярное произведение:
$$|\overline a| = \sqrt{0^2 + 5^2} = \sqrt{5^2} = 5$$
$$|\overline{b}| = \sqrt{(5\sqrt 3)^2 + 5^2} = 5 \cdot \sqrt 4 = 10$$
$$(\overline a, \overline b) = 0 \cdot 5\sqrt3 + 5\cdot 5 = 25$$
Дальше выражаем косинус угла из формулы скалярного умножения:
$$\cos \theta = \frac{(\overline a, \overline b)}{|\overline a||\overline b|} = \frac{25}{5 \cdot 10} = \frac12$$
$$\theta = \arccos \frac 12 = 60^\circ$$
