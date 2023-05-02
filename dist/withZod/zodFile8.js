console.log('*** zodString8.js')
function myStringFunctionCDN(temp) {
    const stringZodValidator = z.string().refine((val) => val.length <= 255, {
        message: "String can't be more than 255 characters",
    })
    stringZodValidator.parse(temp)
}
