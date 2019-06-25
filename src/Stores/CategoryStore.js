import {observable, action} from "mobx"
import axios from "axios"

class CategoryStore {
    static _instance = null;

    static getInstance() {
        if (CategoryStore._instance === null)
            CategoryStore._instance = new CategoryStore();
        return CategoryStore._instance;
    }

    constructor() {
        CategoryStore._instance = this;
    }

    @observable category;
    @action getCategory = async (id) => {
        try {
            let response = await axios({
                url: 'http://localhost:8080/api/category/'+id,
                method: 'get',
                header: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                timeout: 3000
            });
            if (response.data) {
                this.category = response.data
            }
        } catch (e) {
            alert(e.toLocaleString())
        }
    }
}


export default CategoryStore.getInstance();