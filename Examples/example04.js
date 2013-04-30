/** no hacer nunca esto */
funcion1 = function (x) {
    console.log(x*2);
    return x*2;
};

/** correcto, pero É. */
function funcion2(x) {
    console.log(x*2);
    return x*2;
};

/** esta es la mejor opci—n ya las funciones 
 *  son un objeto m‡s y as’ las podemos declarar junto con el 
 *  resto de variables 
 */
var funcion3 = function(x){
    console.log(x*2);
    return x*2;
};

/** funcion an—nima inmediatamente invocable
 *  conocida como IIFE (veremos luego)
 */
(function(x) {
    console.log(x*2);
    return x*2;
})(2);