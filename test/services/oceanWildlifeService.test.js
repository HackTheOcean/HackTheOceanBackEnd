const ows = require('./../../lib/services/oceanWildlifeService')

describe("Suite test para oceanWildlifeService", ()=>{
    test("Verificacion de existencia de metodos de consulta", ()=>{
        const getall = typeof ows.getAll
        const getone = typeof ows.getOne
        const getonedetails = typeof ows.getOneDetails
        expect(getall).toBe("function")
        expect(getone).toBe("function")
        expect(getonedetails).toBe("function")
    })

    test("El resultado no debe ser indefinido", async ()=>{
        const getall = await ows.getAll()
        const getone = await ows.getOne()
        const getonedetails = await ows.getOneDetails()
        expect(getall).not.toBeUndefined()
        expect(getone).not.toBeUndefined()
        expect(getonedetails).not.toBeUndefined()
    })

    test("getAll: debe regresar un array", async ()=>{
        const result = await ows.getAll()
        const evaluation = Array.isArray(result)
        expect(evaluation).toBe(true)
    })

    test("getOne: debe regresar un json con la informacion correspondiente al id", async ()=>{
        const result = typeof await ows.getOne()
        expect(result).toBe("object")
    })

    test("getOneDetails: debe regresar un json con la informacion correspondiente al id", async ()=>{
        const result = typeof await ows.getOneDetails()
        expect(result).toBe("object")
    })

})