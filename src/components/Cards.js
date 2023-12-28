import React from 'react'
import CardItem from './CardItems'
import "./Cards.css"
import LearnMulesoft from './pages/LearnMulesoft'

function Cards() {
  return (
    <div className='cards'>
        <h1>Start learning these new skills!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem src="images/img-python.jpg" 
                        text= "Start your career in AI and Machine Learning with Python"
                        path= "/Learn/Python"
                        label= "Python"/>
                    <CardItem src="images/img-java.jpg" 
                        text= "Learn the most used programming language in the world: Java"
                        path= "/Learn/Java"
                        label= "Java"/>
                    <CardItem src="images/img-mulesoft.jpg" 
                        text= "Explore the top integration tool in the market: Mulesoft"
                        path= "/Learn/Mulesoft"
                        label= "Mulesoft"
                        component = {<LearnMulesoft/>}
                        >
                    </CardItem>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards