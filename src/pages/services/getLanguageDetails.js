import axios from "axios";

class LanguageDetails {

    async getData(input){

        const params = {
            ...input,
            order: 'desc',
            sort: 'popular',
            site: 'stackoverflow',
            fromdate: input.fromdate ? new Date(input.fromdate).getTime()/1000 : '',
            todate: input.todate ? new Date(input.todate).getTime()/1000 : ''
        }

        let queryString = ''

        for(const key of Object.keys(params)){
            if(params[key]){
                queryString += `${key}=${params[key]}&`
            }
        }

        return axios.get(`https://api.stackexchange.com/2.2/tags?${queryString}`);

    }
}

export default new LanguageDetails();