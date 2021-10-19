import * as React from 'react';
import './CaseCard.css'
import { Link } from 'react-router-dom'

export default function CaseCard(props) {

  const {caseValue, caseId} = props
  return (
    <div className="CaseCard">
    <img className="CaseImage" src={caseValue.imageUrl} alt={caseValue.username} />
    <div className="CaseDetail">
        <p className="CaseTitle">{caseValue.title}</p>
        <p className="CaseUsername">{caseValue.username}</p>
    </div>
    <div className="LearnMoreDiv">
        <button className="LearnMoreLink">
            <Link style={{ textDecoration: 'none' }} to={`/details?case=${caseId}`}>
              LearnMore
            </Link>
        </button>
    </div>

</div>
  );
}