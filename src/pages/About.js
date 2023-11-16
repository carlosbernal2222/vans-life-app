import img_1 from "../assets/images/about_img_1.png"

export default function About(){
    return(
        <section className="about-container">
            <image src={img_1} className="about--img"/>
            <h2>
                Don’t squeeze in a sedan when you could relax in a van.
            </h2>
            <p>
                Our mission is to enliven your road trip with the perfect travel van rental. 
                Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)
            </p>
            <p>
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
            </p>
            <div className="about--div__explore">
                <h3>
                    Your destination is waiting.
                    Your van is ready.
                </h3>
                <button>
                    Explore our vans
                </button>
            </div>
        </section>
    )
}