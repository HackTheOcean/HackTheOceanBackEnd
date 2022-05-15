describe("Suite test para oceanWildlifeService", ()=>{
    test("Verificacion de existencia de metodos de consulta", ()=>{
        const getall = typeof ows.getAll
        const getone = typeof ows.getOne
        const getonedetails = typeof ows.getOneDetails
        expect(getall).toBe("function")
        expect(getone).toBe("function")
        expect(getonedetails).toBe("function")
    })
})