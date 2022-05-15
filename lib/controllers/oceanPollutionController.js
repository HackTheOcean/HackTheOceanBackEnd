const ops = require("./../services/oceanPollutionService");

class oceanWildlifeController{
    static async getAll(){
        return await ops.getAll();
    }

    static async getOneDetails(id){
        return await ops.getOneDetails(id);
    }
}

module.exports = oceanWildlifeController;