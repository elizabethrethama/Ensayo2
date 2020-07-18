// esta línea importa axios a mi archivo para poder usarlo
import axios from 'axios'; 
 
// lo uso con async/await porque soy mañosa y me gusta más. 
// En la documentación está como usarlo con promesa
export async function apiCall(param1, param2) 
{
    try 
    {
        let api = 'incluir link de la api sin parámetros aquí';
 
        const res = await axios.get(api, {
            // igual me la puedo traer desde una variable si quiero
                params: {
                    apikey: 'apikey',
                    parametro1: param1,
                    parametro2: param2,
                    // seguir así para cada parámetro que se quiera agregar. 
                    // Se aconseja considerar el caso 'vacío' (con if, por ej)
                }
         })
         return res
    } 
    catch (error) 
    {
        console.log(error);
    }
}