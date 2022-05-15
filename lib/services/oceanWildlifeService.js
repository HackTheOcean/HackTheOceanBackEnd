const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class oceanWildlifeService{
    static async getAll(){
        const response = await prisma.wildlife.findMany({});
        return response;
    }

    static async getOneDetails(id){
        let response = null;
        if (typeof id === "int" || typeof id === "number"){
            response = await prisma.wildlife.findUnique({where: {id: parseInt(id)}});
        }
        return response;
    }
}

module.exports = oceanWildlifeService;