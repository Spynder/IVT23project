*Размерность* линейного пространства $L$ - количество векторов, которое образует базис в этом пространстве, и обозначается как $\dim L$ (dimension -- размерность). Если базис образован из $n$ векторов, то $\dim L = n$.
В нулевом пространстве базиса нет, отчего его размерность равна нулю.

Разберем связанные теоремы:
- Если существует базис из $n$ векторов, то любая система из $m>n$ векторов будет линейно зависима. Разложим каждый из этих векторов по известному базису и составим матрицу из этих разложений, координаты каждого вектора в свой столбик - получится матрица $n \cross m$. Но ее ранг не превосходит $n$, посему столбики явно будут линейно зависимы - поэтому и сами векторы линейно зависимы.
- Как следствие, если в линейном пространстве существует базис из $n$ векторов, то и любой базис будет состоять тоже из $n$ векторов. Если бы это было не так, и существовал базис из $p>n$ векторов, то его базисные векторы должны были бы быть линейно независимы - а это невозможно по прошлой теореме. Значит, это не так - а значит, все базисы одинакового размера.
Понятие размерности вводится как раз из-за свойства равенства размеров базисов.
На примерах, линейное пространство столбиков высотой $n$ имеет $\dim \mathbb R^n = n$, а линейное пространство многочленов степени не выше $n$ имеет $\dim \mathbb P_n = n+1$.

Попробуйте провести параллели между размерностью линейного пространства и рангом матрицы. Размерность линейного пространства векторов плоскости (двумерных векторов) равна двум, как и максимальный ранг матрицы, образованной ее векторами.

Существуют *бесконечномерные* линейные пространства - для любого $m$ существуют $m$ линейно независимых векторов в таком пространстве. Базиса в таких пространствах не существует, ведь всегда можно взять больше линейно независимых векторов, чем могло быть в этом базисе. Антоним *бесконечномерным* линейным пространствам - *конечномерные* линейные пространства.

Пример бесконечномерного линейного пространства: множество $C[a,b]$ непрерывных функций от одной переменной, определенных на отрезке $[a,b]$. Действительно, для любых $m$, $x^m$ принадлежит множеству, и система векторов $1, x, \ldots, x^m$ линейно независима.

В $n$-мерном линейном пространстве каждая упорядоченная система из $n$ линейно независимых векторов является базисом. Возьмем $n$ линейно независимых векторов и еще случайный вектор $y$. Система из таких $n+1$ векторов будет линейно зависима, ведь их количество превышает размерность пространства - а значит вектор $y$ делает эту линейно независимую систему линейно зависимой, и может быть разложен в нетривиальную линейную комбинацию этих $n$ векторов. Так как это верно для любого вектора $y$, такая система является базисом.

В $n$-мерном пространстве, любую систему из $k<n$ линейно независимых векторов можно дополнить до базиса. Ведь к любой системе мы можем прибавить еще один вектор, который не раскладывается через уже имеющиеся векторы (если бы добавить нельзя было, то имеющая система уже была бы базисом, и пространство не было бы $n$-мерным). Получили бы систему из $k+1$ векторов. Так можно продолжать добавлять векторы, пока не получим систему из $n$ линейно независимых векторов.