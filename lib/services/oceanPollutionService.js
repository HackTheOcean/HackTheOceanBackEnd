const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class pollutionService{
    static async getAll(){
        const response = await prisma.tipoImpacto.findMany({});
        return response;
    }

    static async getOneDetails(id){
        let response = null;
        if(typeof id === "int" || typeof id === "number"){
            response = await prisma.tipoImpacto.findUnique({where: {id: parseInt(id)}});
        }
        return response;
    }
}

module.exports = pollutionService;