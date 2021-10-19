import React, {useContext} from 'react';
import './App.css';
import {CaseContext} from './app/store'
import CaseCard from './CaseCard';
function App() {
  const cases = useContext(CaseContext)
  console.log(cases)
  const caseList = cases.map((value, i) => <CaseCard key={i} caseValue={value} caseId={i} />)
  return (
    <div className="App">
      <h1>Cases</h1>
      {caseList}
    </div>
  );
}

export default App;
