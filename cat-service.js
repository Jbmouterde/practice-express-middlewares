const axios = require("axios")
class CatService {
    constructor() {
        this.client = axios.create({ baseURL: "https://cat-fact.herokuapp.com/facts" })
    }

    _returnData(wrapperObject) {
        return wrapperObject.data
    }

    _handleError(err) {
        throw err
    }

    random() {
        return this.client.get("/random").then(this._returnData).catch(this._handleError)
    }
}

module.exports = new CatService()