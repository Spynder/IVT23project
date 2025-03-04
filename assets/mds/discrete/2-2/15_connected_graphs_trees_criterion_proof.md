В прошлом билете я уже описала определения, но повторим их для полноты:
- *Связный граф* - граф, где между любыми двумя вершинами существует путь (несвязный граф можно представить как два острова, никак не соединенных вместе)
- *Дерево* - связный граф без циклов.

Критерий: граф с $n$ вершинами является деревом тогда и только тогда, когда $(\Leftrightarrow)$ он связный и число ребер равно $n-1$. Докажем этот критерий.

$(\Rightarrow):$ пусть граф является деревом. Тогда по определению он уже связный, осталось доказать, что число ребер равно $n-1$. Сделаем это индуктивно.

За базу можно взять любой случай - при $n=1$ вершине будет $0$ ребер, при $n=2$ вершинах (в силу связности графа) будет лишь одно ребро, связывающее их. При $n=3$ вершинах будет два ребра.

Теперь индуктивное предположение: пусть для дерева $n$ вершин верно, что ребер у него $n-1$.

Шаг: Возьмем дерево с $n+1$ вершинами. Тогда если мы вычеркнем висячую вершину (вершина, у которой есть только одно ребро - хотя бы одна такая точно существует в дереве), то получим новое дерево с $n$ вершинами, а значит и $n-1$ ребрами, а получается в изначальном дереве было $n$ ребер, ч.т.д.

$(\Leftarrow):$ пусть связный граф ($n$ вершин) имеет $n-1$ ребро. Докажем, что этот граф - дерево, пойдем от противного.

Пусть в этом графе есть цикл - удалим в этом цикле ребро. Цикл пропадет, а связность графа останется. Удаляем так ребра, пока циклов не останется. Получится связный граф без циклов, что является деревом - а пользуясь первой частью док-ва $(\Rightarrow)$, в дереве с $n$ вершинами есть $n-1$ ребро. Но так как мы удаляли только ребра, а их количество не изменилось, выходит что циклов и не было, и этот граф был деревом с самого начала!