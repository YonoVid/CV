// place files you want to import through the `$lib` alias in this folder.
export const formatPhone = (phone: number) => {
    let input = phone.toString()
    let result = "+"
    while(input.length >= 3)
    {
        if(result.length > 1) result += " "
        result += input.substring(0, 3)
        input = input.substring(3)
    }
    if(input.length > 0) result += " " + input
    return result
}