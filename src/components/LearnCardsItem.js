import React from 'react'

function LearnCardsItem(props) {
  return (
    <div>
        <div className="card-grid-space">
            <a className="card" href={props.reference} style={{
                backgroundImage: props.cardImg
            }}>
                <div>
                    <h1>{props.cardTitle}</h1>
                    <p>{props.cardText}</p>
                    <div className="date">{props.cardDate}</div>
                    <div className="tags">
                        <div className="tag">{props.cardTag}</div>
                    </div>
                </div>
            </a>
        </div>
    </div>
  )
}

export default LearnCardsItem