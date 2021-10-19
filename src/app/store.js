import React, {createContext, useEffect, useState} from 'react'

 const CaseContext = createContext({
  cases:[],
});

function Provider(props){
  const [value, setValue] = useState({cases:[]})
  useEffect( () =>  {
   fetch('https://us-central1-figure1-admin-dev.cloudfunctions.net/demoFeed',
    {
    mode: 'cors', 
    }
// Convert to json
      ).then(response => response.json())
      .then(data => {
        if(data.feedItems){
          setValue({cases: data?.feedItems})
        }
      })
      .catch((error) => console.log(error))
  },[])
return(
  <CaseContext.Provider value={ value.cases}>
    {props.children}
  </CaseContext.Provider>
)
}

export {CaseContext, Provider}