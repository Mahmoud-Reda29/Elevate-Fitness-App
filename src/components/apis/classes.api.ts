import axios from "axios"

export default async function Classes(){
    const res = await axios.get("https://fitness.elevateegy.com/api/v1/muscles",{
        headers:{
            "accept-language": "en"
        }
    })

    const payload:ApiResponse<{musclesGroup:MusclesGroup[]}> = res.data

    if("error" in payload){
        throw new Error(payload.error)
    }

    return payload.musclesGroup
}