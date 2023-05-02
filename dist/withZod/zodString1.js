console.log('### zodString1')
function myStringFunction() {z.string().refine((val) => val.length <= 255, {
    message: "String can't be more than 255 characters",
})
}                             
                             
