console.log('### zodString4')
import { z } from './zodLib.js'
function myStringFunction() {z.string().refine((val) => val.length <= 255, {
    message: "String can't be more than 255 characters",
})
}    
