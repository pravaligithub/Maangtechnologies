import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <>
<header id='h1'>
<img src="https://stargleameducation.net/wp-content/uploads/2021/01/slider-4-scaled-e1611945323695.jpg" width='100%' height="200px" alt=''/>
<div className="banner-text">
<h1>About Us</h1>
</div>
</header>
    <header>
<h1>Star Gleam Education</h1>
<p>“ONE SHOP STOP” for 11+ and all competitive exams to encourage pre-foundation skills to discover challenges.</p>
</header>
<section className="about" id="about">
<div className="about-img">
<img src="https://stargleameducation.net/wp-content/uploads/2021/01/stragleam-intro-768x512.png"   alt="" />
</div>
 <div className="about-text">
<h1>WHO WE ARE</h1>
<p>
We are from STAR GLEAM EDUCATION, a team of tutors, parents, teachers, IT professionals and students who came with these motivational ideas of creative products that will immensely help children in their current journey in competitive exams.<br/>
Our research and feedback from innumerable parents and teachers brought these products to LIVE with active participation and feedback from various tutors, teachers and parents to ease children’s preparation to some extent in a pragmatic way.<br/>
Our innovative ideas behind these products and building blocks will enhance the ways of learning in a more friendly and fun way which encourage children to achieve their goals.
</p>
</div>
</section>
<div id="do">
    <center> <h2>What we do</h2></center>
     <p id='p'>
         Star Gleam Education is founded in the year 2020 with immense motivation to 
         offer ONE-STOP-SHOP services to parents and children who are going through challenging 
         journey of competitive exams in ISEB, CEM, GL, SATS.
     </p>
     <p id='p'>
         We specialise in offering variant unique products that helps children to build their foundation skills to
          compete in these exams as mandatory skills needed throughout.
     </p>
     <p id='p'>
         We offer specialised interactive and task-oriented coaching to train children’s mind practically to cope with the reality in a fun way so they can carry 
         this knowledge with them forever in their day to day lives.
     </p>
 
     <p id='p'>
         Our MOTO behind these products is SUCCESS and SHINE LIKE A STAR to achieve  GOALS
     </p>
 </div>
<br/>
<br/>
<br/>
<section id="meet-our-team">
        <h2><b><center>Meet Our Team</center></b></h2>
      <center> <button><b>Join Our Team</b></button></center> 
      
    </section>

    <br/>
    <br/>

<div id="images">
    <div className="gallery">
        <img src="https://stargleameducation.net/wp-content/uploads/2023/03/WhatsApp-Image-2023-01-21-at-20.00.25-200x200.jpeg" alt=''/>
        <div className="desc">Aarmaan
            Maths Tutor
        </div>
    </div>
    <div className="gallery">
        <img src="https://stargleameducation.net/wp-content/uploads/2021/02/J.-Harris-min-scaled-e1613676114118-200x200.jpg" alt=''/>
        <div className="desc">  James Harris
            English Teacher
        </div>
    </div>
    <div className="gallery">
        <img src="https://stargleameducation.net/wp-content/uploads/2021/06/Wendy-1-scaled-200x200.jpg" alt=''/>
        <div className="desc">Wendy-Anne Daloz
            11+/12+/ GCSE maths teacher
            
        </div>
    </div>
    <div className="gallery">
        <img src="https://stargleameducation.net/wp-content/uploads/2021/02/DSC_6510-scaled-200x200.jpg" alt=''/>
        <div className="desc">Claire
            English Teacher & Tutor
           
        </div>
    </div>
    <div className="gallery">
        <img src="https://stargleameducation.net/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-01-at-15.13.19-200x200.jpeg" alt=''/>
        <div className="desc">Maureen
            Maths and English tutor
        </div>
    </div>
    <div className="gallery">
        <img src="https://stargleameducation.net/wp-content/uploads/2021/10/83E52C9D-896F-4E5D-9597-3B6545FE0FBA-200x200.jpeg" alt=''/>
        <div className="desc">Eric
            Maths Tutor
        </div>
    </div>


</div>
<br/>
<br/>
<footer>
        <div>
                    <p>© 2021 STAR GLEAM EDUCATION LTD</p>
                    <p>Company number: 11295326</p>
                    <p>Registered office address: Office Gold,Building 3, Chiswick Park, 566 Chiswick High Road, London,</p>
                    <p>England, W4 5YA</p>
                    <p>(+44)9346460842</p>
                    <p>info@stargleameducation.com</p>
                </div>
            </footer>
            
        </>
    );
};

export default About;