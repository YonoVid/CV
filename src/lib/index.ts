import type { FilterList, Tag } from "./types/generic"

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

export const complyFilter = (tags: Tag[], filter: FilterList) => {
    let base: Set<string> = new Set<string>(tags)
    let white: Set<string> = new Set<string>(filter.white)
    let black: Set<string> = new Set<string>(filter.black)
    if(base.intersection(black).size > 0 ) return false
    return base.intersection(white).size > 0
}