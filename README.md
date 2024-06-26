 Código, para verificar el problema del tablero de ajedréz.
 
 Premisa: 
   "imagina a un chico disfrutando mientras colorea su tablero de ajedrez. 
   Planea llenar cada cuadro con matices rojos o azules. 
   Con el objetivo de añadir un toque único, desea mantener un balance entre los espacios rojos y azules, evitando al mismo tiempo que dos filas o columnas tengan la misma cantidad de espacios rojos. 
   ¿Sería posible colorear el tablero de ajedrez siguiendo estos parámetros? ¿Qué ocurriría si, en lugar de un tablero de ajedrez estándar de 8x8, poseyera uno colosal de 1000x1000?"

 Condición matemática:
   
   x = "N° de filas o columnas"
   
   r = "N° de casilleros rojos"
   
   Para K perteneciente a los N° Naturales, con 1 <= K <= x
   
   Para x perteneciente a los N° Pares
   
   Se puede siempre que: 
     r = (K * (K + 1)) / 2

 El código se encuentra escrito en node.js. Primero hay que actualizar las variables "columnasYFilas" y "cantDeRojos" con los valores que se desean probar según el tamaño del cuadro y la cantidad de casilleros rojos que hay disponibles, luego se puede ejecutar el programa con la instrucción "node.tablero.mjs".
 Por consola se imprimirá un mensaje que verifica si la cantidad de casilleros rojos cumple la condición matemática anterior o no.
 Luego se pintará el cuadro para poder visualizarlo y se imprimirá un mapa con el número de cada columna (En rigor, tambien representa a las filas) y la cantidad de casilleros rojos que tiene. Esto último sirve para identificar si hay columnas con igual cantidad de casilleros rojos y, de ser así, cuales son.

 Este programa sirve para demostrar que en un cuadrado de 8 X 8 no se pueden ordenar 32 casilleros rojos de forma que no se repita su número en 2 o más filas o columnas.
 En rigor para un cuadrado de 8 X 8, y siguiendo la fórmula matemática anterior, solo se pueden organizar una canitdad de casilleros rojos que sea igual a alguno de los números de la siguiente serie:
 1, 3, 6, 10, 15, 21, 28, 36.
 Tampoco se puede lograr esto para un cuadrado de 1000 X 1000 con 500000 casilleros rojos.
