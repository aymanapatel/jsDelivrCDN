console.log('*** zodString7.js')
export function myStringFunction(temp) {
    const stringZodValidator = z.string().refine((val) => val.length <= 255, {
        message: "String can't be more than 255 characters",
    })
    stringZodValidator.parse(temp)
}
