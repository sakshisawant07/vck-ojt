import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const CoursesPage = () => {
    return(
        <div class="main-layout">
            <Header/>
            
            <div class="container">
                <div class="content-size">
                    <div class="sub-container">
                        <div class="courses-body">
                            <h1 class="courses-heading">Our Academic Programs</h1>
                            <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills 
                            demanded by today's dynamic global landscape.
                            Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
                            <h2>Discover Campus Life</h2>
                            <hr/>
                            <div class="video-container">
                            <video  width="100%" src="\Videos\college-tour.mp4" controls height="auto" class="course-video" autoPlay/>
                            <p class="video-caption">Get a glimpse of the vibrant academic and social life at Vivekanand College.</p>
                            </div>
                            <h2>Undergraduate Programs (UG)</h2>
                            <hr/>
                            <ul>
                                <li><b>Bachelor of Science (B.Sc.)</b><ul>
                                <li>Computer Science (3 years)</li>
                                <li>Information Technology (3 years)</li>
                                <li>Biotechnology (3 years)</li>
                            </ul>
                            </li>
                            <li><b>Bachelor of Commerce (B.Com)</b>
                            <ul>
                            <li>Accounting &amp; Finance (3 years)</li>
                            <li>Banking &amp; Insurance (3 years)</li>
                            </ul>
                            </li>
                            <li><b>Bachelor of Arts (B.A.)</b>
                            <ul>
                            <li>English Literature (3 years)</li>
                            <li>Psychology (3 years)</li>
                            </ul>
                            </li>
                            </ul>
                            <h2>Postgraduate Programs (PG)</h2>
                            <hr/>
                            <ul><li><b>Master of Science (M.Sc.)</b><ul><li>Computer Science (2 years)</li><li>Information Technology (2 years)</li></ul></li><li><b>Master of Commerce (M.Com)</b> (2 years)</li><li><b>Master of Arts (M.A.)</b> (2 years)</li></ul>
                            <h2>Program Details &amp; Fee Structure (Annual)</h2>
                            <table class="admissions-table course-details-table" border="1"> <thead><tr><th>Program Type</th><th>Course Name</th><th>Duration</th><th>Annual Fee (INR)</th><th>Eligibility</th></tr></thead><tbody>
                            <tr><td>UG</td><td>B.Sc. Computer Science</td><td>3 Years</td><td>₹ 85,000</td><td>10+2 with PCM (50%)</td></tr>
                            <tr><td>UG</td><td>B.Com. Accounting &amp; Finance</td><td>3 Years</td><td>₹ 70,000</td><td>10+2 Commerce (45%)</td></tr>
                            <tr><td>PG</td><td>M.Sc. Information Technology</td><td>2 Years</td><td>₹ 95,000</td><td>B.Sc. IT/CS (50%)</td></tr></tbody></table>
                            <h2>Specialized &amp; Vocational Courses</h2>
                            <hr/>
                            <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics,
                            and Soft Skills Development, providing specialized training for career enhancement.</p>

                            <div class="enquire-btn-align">
                            <p>Have questions about a specific course?</p>
                            <button class="enquire-btn" ><a class="enquire-btn" href="/contact">Inquire About Courses</a></button>
                            
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default CoursesPage;