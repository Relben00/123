def knapsack( W, weight, cost, n ):
    K = [ [0 for x in range(W + 1)] for x in range(n + 1) ] 
    for i in range( n + 1):
        for w in range( W + 1 ):
            if i == 0 or w == 0:
                K[i][w] = 0
            elif weight[i - 1] <= w:
                K[i][w] = max( cost[i - 1] + K[i - 1][w - weight[i-1]], K[i - 1][w] ) 
            else:
                K[i][w] = K[i - 1][w] 
    return K 
 
Y = [ 20, 5, 10, 40, 15, 25 ]
X = [ 1,  2,  3, 8, 7, 4   ]
W = 10;
 
n = len( Y )
 
print( "Предметы:" )
for k in range( n ):
    print( k + 1, "\b) цена", Y[k], "вес", X[k] ) 
print( "\nРюкзак вмещает вес:", W )   
 
K = knapsack( W, X, Y, n )
 
print( "\nЗаполнение рюкзака:" ) 
w, i, total_weight = W, n, 0 
res = K[n][W]
while i > 0 and res > 0:
    if res != K[i - 1][w]:
        print( i,"\b-й предмет, ценой", Y[i - 1], "и веса", X[i - 1] )
        total_weight += X[i - 1]
        res -= Y[i - 1] 
        w -= X[i - 1]
    i -= 1  
print( "\nОбщий вес предметов:", total_weight, "\b, стоимость:", K[n][W] )