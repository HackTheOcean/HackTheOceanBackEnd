const ows = require("./../../lib/services/oceanWildlifeService");

describe("Suite test para oceanWildlifeService", ()=>{
    test("Verificacion de existencia de metodos de consulta", ()=>{
        const getall = typeof ows.getAll;
        const getonedetails = typeof ows.getOneDetails;
        expect(getall).toBe("function");
        expect(getonedetails).toBe("function");
    });

    test("El resultado no debe ser indefinido", async ()=>{
        const getall = await ows.getAll();
        const getonedetails = await ows.getOneDetails(1);
        expect(getall).not.toBeUndefined();
        expect(getonedetails).not.toBeUndefined();
    });

    test("getAll: debe regresar un array", async ()=>{
        const result = await ows.getAll();
        const evaluation = Array.isArray(result);
        expect(evaluation).toBe(true);
    });

    test("getOneDetails: debe regresar un json con la informacion correspondiente al id", async ()=>{
        const result = typeof await ows.getOneDetails();
        expect(result).toBe("object");
    });

});