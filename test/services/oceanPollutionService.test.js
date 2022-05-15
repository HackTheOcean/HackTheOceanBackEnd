const ops = require('../../lib/services/oceanPollutionService')

describe("Suite test para oceanPollution", ()=>{
    test("Verificacion de existencia de metodos de consulta", ()=>{
        const getall = typeof ops.getAll
        const getonedetails = typeof ops.getOneDetails
        expect(getall).toBe("function")
        expect(getonedetails).toBe("function")
    })

    test("El resultado no debe ser indefinido", async ()=>{
        const getall = await ops.getAll()
        const getonedetails = await ops.getOneDetails()
        expect(getall).not.toBeUndefined()
        expect(getonedetails).not.toBeUndefined()
    })

    test("getAll: debe regresar un array con todos los datos", async ()=>{
        const result = await ops.getAll()
        const evaluation = Array.isArray(result)
        expect(evaluation).toBe(true)
    })

    test("getOneDetails: debe regresar un json con la informacion correspondiente al id", async ()=>{
        const result = typeof await ops.getOneDetails()
        expect(result).toBe("object")
    })

})