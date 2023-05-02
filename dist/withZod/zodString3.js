console.log('### zodString3')
import { z } from 'zod'
function myStringFunction() {z.string().refine((val) => val.length <= 255, {
    message: "String can't be more than 255 characters",
})
}    
