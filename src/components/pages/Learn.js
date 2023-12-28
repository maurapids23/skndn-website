import React from 'react'
import './Learn.css'

function Learn() {
  return (
    <div>
        <section className='info'>
            <img src='images/img-mulesoft.jpg'/>
            <h1>
                Learn Mulesoft
            </h1>
        </section>
        <section className='cards-wrapper'>
            <div className="card-grid-space">
                <a className="card" href="/Learn/Mulesfot/01" style={{
                    backgroundImage: `url("images/testing.jpg")`
                }}>
                    <div>
                        <h1>HTML Syntax</h1>
                        <p>The syntax of a language is how it works. How to actually write it. Learn HTML syntax…</p>
                        <div className="date">6 Oct 2017</div>
                        <div className="tags">
                            <div className="tag">Mulesoft</div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="card-grid-space">
                <a className="card" href="/Learn/Mulesfot/02" style={{
                        backgroundImage: `url("images/testing.jpg")`
                    }}>
                    <div>
                        <h1>Basic types of HTML tags</h1>
                        <p>Learn about some of the most common HTML tags…</p>
                        <div className="date">9 Oct 2017</div>
                        <div className="tags">
                            <div className="tag">Mulesoft</div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="card-grid-space">
                <a className="card" href="/Learn/Mulesfot/03" style={{
                        backgroundImage: `url("images/testing.jpg")`
                    }}>
                    <div>
                        <h1>Links, images and about file paths</h1>
                        <p>Learn how to use links and images along with file paths…</p>
                        <div className="date">14 Oct 2017</div>
                        <div className="tags">
                            <div className="tag">Mulesoft</div>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    </div>
  )
}

export default Learn