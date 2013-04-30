
var myFunction = function() {
    console.log(this);
};

/**
 * creamos un nuevo objeto vac’o
 */
var someObject={}; 

/**
 * le creamos una propiedad que apunta
 * a la funcion anterior
 */
someObject.myFunction = myFunction;

/**
 * Invocamos la funci—n desde el objeto
 */
someObject.myFunction();

/**
 * Invocamos la funci—n directamente
 * sin pasar por el objeto
 * con lo que el contexto es diferente
 */
myFunction();