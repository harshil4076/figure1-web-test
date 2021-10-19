import React, {useContext} from "react";
import {CaseContext} from './app/store'
import {useQuery} from './queryUtils'

export default function Details () {
    const caseList = useContext(CaseContext)
    const query = useQuery()
    const caseDetails = caseList[query.get("case")]
    console.log(caseDetails)
    return (
        <div>
            {
                 caseDetails? <div style={{textAlign: 'center'}}>
                    <h1>{caseDetails.title}</h1>
                    <p>{caseDetails.caption}</p>
                    <h3>{caseDetails.username}</h3>
                    <div>
                        <img style={{width: "100%", height:"60vh", objectFit:"cover"}} src={caseDetails.imageUrl} alt={caseDetails.username} />
                    </div>
                 </div>   :
                 "Case Not Found"
            }
    </div>)
}