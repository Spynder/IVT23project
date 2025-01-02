
Если не читали прошлый билет - [идите читайте][[[1,2,5]]].

Допустим при решении характеристического уравнения однородного ОДУ, некоторые корни $\lambda$ оказались комплексными. Вспоминаем, что если комплексное число $\lambda_i$ - корень, то его сопряженное $\overline{\lambda_i}$ тоже является корнем. Без потери общности положим
$$\lambda_1 = r + \omega i, \ \ \ \ \ \lambda_2 = r - \omega i, \ \ \ \ r, \omega \in \mathbb R, \omega \neq 0$$
Тогда для этих корней будет соответствовать частные решения
$$q_1(x)e^{(r+\omega i)x} + q_2(x) e^{(r-\omega i)x}$$
Раскрывая скобки, правильно группируя слагаемые и используя следующие замены:
$$\cos \omega x = \frac{e^{i\omega x} + e^{-i\omega x}}{2}, \ \ \ \ \ \sin \omega x = \frac{e^{i\omega x} - e^{-i\omega x}}{2i}$$
Приходим к следующей форме частных решений:
$$\widetilde{q_1}(x)e^{rx}\cos \omega x + \widetilde{q_2}(x)e^{rx}\sin \omega x $$
Причем $\widetilde{q_1}$ и $\widetilde{q_2}$ - тоже многочлены, но уже отличные "по начинке" от $q_1$ и $q_2$. Альтернативно, вместо замен на косинусы и синусы, предложенных выше, можно использовать формулу Эйлера и прийти к такой же форме, если перегруппировать слагаемые:
$$e^{i\omega x} = \cos \omega x + i\sin \omega x$$