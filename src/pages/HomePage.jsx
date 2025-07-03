import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

const HomePage = () => {
    return(
        <div class='main-layout'>
            <Header/>
            <div class="container">
                <div class="content-size">
                <div class="sub-container">
                    <div class="home-banner">
                        <img src="\Images\college-banner.png"  alt="Vivekanand College Header Image" class="image"/>
                            <div class="main-image-section">
                                <h1 style={{textAlign:"center"}}>Welcome to Vivekanand College</h1>
                                <p>Your journey to excellence starts here!</p>
                                <button id="header-adm-btn" class="button-color"><Link to ="/admission" class="button-color">Apply Now!</Link></button>
                            </div>
                    </div>
                <p>Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.</p>
                <p> At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
                <h2>Why Choose Vivekanand College?</h2>
                <ul type="bullet">
                    <li><b>Legacy of Excellence: </b>Decades of commitment to quality education.</li>
                    <li><b>Experienced Faculty: </b>Learn from renowned experts and passionate educators.</li>
                    <li><b>Modern Facilities: </b>Well-equipped labs, expansive library, and comfortable campus.</li>
                    <li><b>Holistic Development: </b>Focus on co-curricular activities, sports, and community service.</li>
                    <li><b>Strong Placements: </b>Excellent career opportunities with leading companies.</li>
                </ul>
                <h2>Campus Life and Facilities</h2>
                <hr/>

                <div class="bottum-img">
                    <img src="\Images\students-studying.jpeg" class="students-studying-img"/>
                    <img src="\Images\campus-life.jpg" class="students-studying-img"/>
                </div>

                <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
                
                <div class="explore-button-align">
                    <p>Ready to explore our courses?</p>
                    <button class="explore-button-color"><Link to ="/courses" class="explore-button-color">Explore Courses</Link></button>
                </div>
                
                </div>
            </div>
            </div>
            <Footer/>
        </div>  
    )
}

export default HomePage;













