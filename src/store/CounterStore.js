import {create} from 'zustand';
/** la propiedad (set)  Me permite actualizar
 * los valores
 */

/**
 * La propiedad (get)
me permite traer los valores y  peticiones  */

/*La function store tiene todas la funciones*/
export const  CounterStore = create( (set)=>
({
    name:'Franklim valverde',
    count:10,
    estadomodal:false,
    increment: (value) => set(state =>({
         count:state.count + value
    })),
    decrementar:(value) => set(state =>({
        count: state.count - value
    })),
   

})

)