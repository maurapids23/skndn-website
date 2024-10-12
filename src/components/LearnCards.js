import React from 'react'
import LearnCardsItem from './LearnCardsItem'
import './LearnCards.css'

function LearnCards() {
  return (
    <div className='cards-container'>
        <section className='info'>
            <img src="/images/img-mulesoft.jpg"/>
            <h1>
                Mulesoft
            </h1>
        </section>
        <section className='cards-wrapper'>
            <LearnCardsItem 
                reference="/Learn/Mulesoft/lesson01"
                cardImg = {`url(/images/cards-mulesoft-raml.jpg)`}
                cardTitle = "RAML"
                cardText = "What is RAML and how it is used inside REST APIs"
                cardDate = "28-Dec-2024"
                cardTag = "Mulesoft"
            />
            <LearnCardsItem 
                reference="/Learn/Mulesoft/lesson02"
                cardImg = {`url(/images/cards-mulesoft-dataweave.jpg)`}
                cardTitle = "Dataweave"
                cardText = "Learn what dataweave functions are most used in Mulesoft"
                cardDate = "28-Dec-2024"
                cardTag = "Mulesoft"
            />
            <LearnCardsItem 
                reference="/Learn/Mulesoft/lesson03"
                cardImg = {`url(/images/cards-mulesoft-exchange.jpg)`}
                cardTitle = "Exchange"
                cardText = "How to Publish APIs to Anypoint Echange"
                cardDate = "28-Dec-2024"
                cardTag = "Mulesoft"
            />
        </section>
        <section className='info'>
            <img src="/images/img-java.jpg"/>
            <h1>
                Java
            </h1>
        </section>
        <section className='cards-wrapper'>
            <LearnCardsItem 
                reference="/Learn/Java/lesson01"
                cardImg = {`url(/images/cards-java-springboot.jpg)`}
                cardTitle = "Spring boot"
                cardText = "Learn how to accelerate and simplify microservices"
                cardDate = "28-Dec-2024"
                cardTag = "Java"
            />
            <LearnCardsItem 
                reference="/Learn/Java/lesson02"
                cardImg = {`url(images/cards-java-coreEE.jpg)`}
                cardTitle = "Java Core"
                cardText = "Start your carreer with java as a core language"
                cardDate = "28-Dec-2024"
                cardTag = "Java"
            />
            <LearnCardsItem 
                reference="/Learn/Java/lesson03"
                cardImg = {`url(images/cards-java-lambda.jpg)`}
                cardTitle = "Lambda"
                cardText = "What are Lambda functions in java and what are their purpose"
                cardDate = "28-Dec-2024"
                cardTag = "Java"
            />
        </section>
        <section className='info'>
            <img src="/images/img-python.jpg"/>
            <h1>
                Python
            </h1>
        </section>
        <section className='cards-wrapper'>
            <LearnCardsItem 
                reference="/Learn/Python/lesson01"
                cardImg = {`url(images/cards-python-numpy.jpg)`}
                cardTitle = "NumPy"
                cardText = "Learn what NumPy functions are most used in Python"
                cardDate = "29-Dec-2024"
                cardTag = "Python"
            />
            <LearnCardsItem 
                reference="/Learn/Python/lesson02"
                cardImg = {`url(images/cards-python-pytorch.jpg)`}
                cardTitle = "Pytorch"
                cardText = "Start your AI career with Pytorch and Python"
                cardDate = "29-Dec-2024"
                cardTag = "Python"
            />
            <LearnCardsItem 
                reference="/Learn/Python/lesson03"
                cardImg = {`url(images/cards-python-tensorflow.jpg)`}
                cardTitle = "Tensorflow"
                cardText = "Learn what NumPy functions are most used in Python"
                cardDate = "29-Dec-2024"
                cardTag = "Python"
            />
        </section>
    </div>
  )
}

export default LearnCards