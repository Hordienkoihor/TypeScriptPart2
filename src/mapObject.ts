function mapObject<Type extends object, ReturnType> (obj: Type, transformer: (field: any) => any): Record<keyof Type, ReturnType> {
    let result = {} as Record<keyof Type, ReturnType>

    const fields = Object.keys(obj) as Array<keyof Type>

    fields.forEach(key => {
        const fieldValue = obj[key]
        result[key] = transformer(fieldValue)
    })

    return result
}
