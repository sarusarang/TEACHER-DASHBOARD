import axios from "axios";

const CommonApi = async (reqmethod,apiurl,body)=>{


    const reqconfig = {

        method:reqmethod,
        url:apiurl,
        data:body,
        headers:{"Content-type":"application/json"}
    }

    return await axios(reqconfig).then(res=>{return res}).catch(err=>{return err})

}

export default CommonApi