import React from 'react';
import './Courses.css';

const Courses: React.FC = () => {
    return (
<>
<header id='h1'>
<img src="https://stargleameducation.net/wp-content/uploads/2021/01/slider-4-scaled-e1611945323695.jpg" width='100%' height="200px" alt=''/>
<div className="banner-text">
<h1>COURSES</h1>
</div>
</header>
<div id="images">
    <div className="gallery">
        <img src="https://stargleameducation.net/wp-content/uploads/2023/02/skynews-easter-egg-chocolate-egg_6011512-1536x864.jpeg" alt=''/>
        <div className="desc">11+ Coaching Group Sessions (Y4)- English, Maths, VR & NVR£250.00
        </div>
   </div>
    <div className="gallery">
        <img src="https://stargleameducation.net/wp-content/uploads/2022/12/Image-01-03-2023-at-14.13.jpg" alt=''/>
        <div className="desc"> Y5 Easter English, Maths,VR & NVR Advance Courses£200.00 – £400.00</div><br/>
    </div>
    <div className="gallery">
        <img src="https://stargleameducation.net/wp-content/uploads/2015/07/kid-course-4-768x439.jpg" alt=''/>
        <div className="desc">11+ Weekly Mock Exams – Year 5£20.00 – £400.00</div><br/>
    </div>
    <div className="gallery">
        <img src="https://stargleameducation.net/wp-content/uploads/2020/12/word-bank-768x512.jpg" alt=''/>
        <div className="desc">Y5 Summer Intensive 11+ Coaching – Maths£350.00</div><br/>
    </div>
    <div className="gallery">
        <img src="https://stargleameducation.net/wp-content/uploads/2015/07/kid-course-6-768x439.jpg" alt=''/>
        <div className="desc">VERBAL & NON-VERBAL REASONING£25.00</div><br/>
    </div>
    <div className="gallery">
        <img src="https://stargleameducation.net/wp-content/uploads/2015/11/bg-parallax-about-us-768x312.jpg" alt=''/>
        <div className="desc">MATHS – PRACTISE PAST PAPERS (STRICTLY FOR Y5/Y6)£25.00</div><br/>
    </div>
</div>

            <footer>
                <div>
                    <p>© 2021 STAR GLEAM EDUCATION LTD</p>
                    <p>Company number: 11295326</p>
                    <p>Registered office address: Office Gold,Building 3, Chiswick Park, 566 Chiswick High Road, London,</p>
                    <p>England, W4 5YA</p>
                    <p>(+44) 9346460842</p>
                    <p>info@stargleameducation.com</p>
                </div>
            </footer>
        </>
    );
};

export default Courses;
