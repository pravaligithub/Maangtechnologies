import React from 'react';
import './About.css';

const Team: React.FC = () => {
    return (
        <>
      
       
<header id='h1'>
<img src="https://stargleameducation.net/wp-content/uploads/2021/01/slider-4-scaled-e1611945323695.jpg" width='100%' height="200px" alt=''/>
<div className="banner-text">
<h1>OUR TEAM</h1>
</div>
</header>
<br/>
 <section id="meet-our-team">
        <h2><b><center>Meet Our Team</center></b></h2>
        <br/>
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

export default Team;
