const ows = require("./../services/oceanWildlifeService");

class oceanWildlifeController{
    static async getAll(){
        return await ows.getAll();
    }

    static async getOneDetails(id){
        return await ows.getOneDetails(id);
    }
}

module.exports = oceanWildlifeController;