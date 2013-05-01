/**
 * Vamos a ver algunas de las diferencias
 * entre objetos y arrays
 */

var _arr = [1,'a',3.44, 'you!'];                        // arrays pueden contener cualquier cosa
var _arr2 = [1,'a',3.44, 'you!', undefined, null];      // arrays pueden contener cualquier cosa (como en Lisp)
var _arr3 = [1,'a',3.44, _arr, 'you!', undefined, null, _arr2];      // arrays pueden contener cualquier cosa (como en Lisp)

console.log(_arr);
console.log(_arr2);
console.log(_arr3);


/**
 * Pop / Push
 */

_arr.push (33);
console.log(_arr);

_arr.pop();     // retorna el valor 33 insertado anteriormente
console.log(_arr);


/**
 * Shift / Unshift
 */
_arr.shift();
console.log(_arr);

_arr.unshift(21.5);
console.log(_arr);


/**
 * Versus object
 */
var _obj = { a: '1', b: true, c:2 };
_obj.d;
_obj.c;
