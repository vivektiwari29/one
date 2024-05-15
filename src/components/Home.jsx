import React from 'react'
import vg from "../assets/2.webp"

import {AiFillGoogleCircle , AiFillAmazonCircle , AiFillYoutube , AiFillInstagram} from 'react-icons/ai'

const Home = () => {
    return (
        <>
        <div className='home' id='home'>
            <main>
                <h1>TechyStar</h1>
                <p>Solution to all your problems</p>
            </main>
        </div>


        <div className="home2">
            <img src={vg} alt="Graphics" />     
            <div>
                <p>
                    We are your one and only solution to the tech problems 
                    you face
                    everyday. We are leading tech company whose aim is to 
                    increase the 
                    problem sol ability in children.
                </p>
            </div>
        </div>




        <div className="home3" id='about'>
            <div>
                <h1>Who we are</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In earum minus culpa distinctio sapiente nesciunt praesentium, eum quisquam, mollitia asperiores debitis adipisci ab dignissimos aspernatur iure facere totam. Adipisci, tempore commodi numquam ab iure illo corrupti nobis officiis similique cumque debitis eum perspiciatis natus praesentium aspernatur recusandae asperiores doloribus illum nisi harum! Dolore quae aut labore quasi magni, dolorum ipsa nam similique vel architecto rem dolores repudiandae animi quod soluta corporis aliquid reiciendis optio consequuntur eius, et saepe nulla praesentium.</p>                
            </div>
        </div>



        <div className="home4" id='brands'>
            <div>
                <h1>
                    Brands
                </h1>
                <article>
                    <div style = {{
                        animationDelay: "0.3s",

                    }}>
                        <AiFillGoogleCircle />
                        <p>Google</p>
                    </div>



                    <div style = {{
                        animationDelay: "0.5s",

                    }}>
                        <AiFillAmazonCircle />
                        <p>Amazon</p>
                    </div>




                    <div style = {{
                        animationDelay: "0.7s",

                    }}>
                        <AiFillYoutube />
                        <p>Youtube</p>
                    </div>





                    <div style = {{
                        animationDelay: "0.1s",

                    }}>
                        <AiFillInstagram />
                        <p>Instagram</p>
                    </div>












                </article>
            </div>
        </div>






        </>
    )
}

export default Home