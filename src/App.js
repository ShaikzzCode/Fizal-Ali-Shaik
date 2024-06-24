import './css/App.css';
import './css/scrollBar.css';
import './css/responsive/below_425px.css';
import './css/responsive/above_425px.css';
import './css/responsive/above_645px.css';
import './css/responsive/above_768px.css';
import './css/responsive/above_925px.css';
import './css/sideBar/sidebar.css';
import './css/sideBar/handyDevice/below_645.css';
import './css/circular_range.css';
import './css/projectsSection.css';

import FlipCard from './flipCard';
import MagneticBox from './MagneticBox';

function App() {

  const currentYear = new Date().getFullYear();

  const scrollDown = () => {
    window.scrollBy({
      top: 600,
      behavior: 'smooth'
    });
  };

  const scrollUp = () => {
    window.scrollBy({
      top: -600,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <section className='sidebar scroll-buttons'>
        <button onClick={scrollUp} className="scrollButton scrollUp"></button>
        <p>Fizal Shaik</p>
        <button onClick={scrollDown} className="scrollButton scrollDown"></button>
      </section>

      <section>
        <section className='bgText'>
          {/* Frontend Developer */}
          <span>Frontend Developer</span>
          {/* <span>
            <span>F</span>
            <span>r</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>e</span>
            <span>n</span>
            <span>d</span>
            <span>D</span>
            <span>e</span>
            <span>v</span>
            <span>e</span>
            <span>l</span>
            <span>o</span>
            <span>p</span>
            <span>e</span>
            <span>r</span>
          </span> */}
        </section>
        <div className="sectionMain right firstSec">
          <div className='fizlProfileHolder'>
            <div className='fizalDescri'>
              <span>Fizal Ali Shaik</span>
              <p>Frontend Developer</p>
              <a href='https://github.com/ShaikzzCode' target='_blank'>https://github.com/ShaikzzCode</a>
            </div>
            <img src="./assets/fffiii.png" alt="guy" />
          </div>
          <div className='divShutter'>
            <div className='shutterHandlesHolder'>
              <div className='shutterHandle left'></div>
              <div className='shutterHandle main'></div>
              <div className='shutterHandle right'></div>
            </div>
          </div>
        </div>
        <div className="sectionMain left secondSec">
          <div className='secBg'>
            FIZAL
          </div>
          <h1 className='aboutMeH1'>About <span>Me</span></h1>
          <div className='flex gap20'>
            <div className='aboutParaDiv personalInfoSec'>
              {/* <h2>PERSONAL INFO</h2> */}
              <div className='personalInfo'>
                <p>First Name: <span>Fizal</span></p>
                <p>Last Name: <span>Shaik</span></p>
                <p>Age: <span>25 Years</span></p>
                <p>Nationality: <span>Indian</span></p>
                {/* <p>Education: <span>Master's in Computer Science</span></p> */}
                {/* <p>Phone: <span>+91 90321 45317</span></p> */}
                {/* <p>Mail: <span>developershaikzz@gmail.com</span></p> */}
                <p>Address: <span>Anantapur, Andhra Pradesh</span></p>
                <p>Freelance: <span>Available</span></p>
                {/* more details */}

              </div>
            </div>
            <div className='aboutParaDiv'>
              <p>Passionate about frontend development and graphic design, I combine creativity and technical skills to create impactful visual experiences. With a strong background in graphic design and expertise in web development, I craft <span>aesthetic, intuitive, and responsive user interfaces.</span> My user-centered approach ensures captivating visuals and an optimal user experience. Continuously seeking the latest trends, I enjoy taking on new challenges to bring ideas to life through high-quality graphic design and web development.</p>
            </div>
          </div>
        </div>

        <div className='skillsSec secThree'>
          <h2 className='mySkillsH2 edc'>
            <span>M</span>
            <span>Y&nbsp;</span>
            <span>E</span>
            <span>d</span>
            <span>u</span>
            <span>c</span>
            <span>a</span>
            <span>t</span>
            <span>i</span>
            <span>o</span>
            <span>n</span>
          </h2>
          <div className='skillsHolder'>
            {/* card */}
            <div class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
                <div class="ag-courses-item_title">
                  Master's in Computer Science
                  <p>PVKK Dg & PG College</p>
                </div>
                <div class="ag-courses-item_date-box">
                  Grade:
                  <span class="ag-courses-item_date">
                    7.4
                  </span>
                </div>
                <div class="ag-courses-item_date-box">
                  Passed Out:
                  <span class="ag-courses-item_date">
                    AUGUST 2023
                  </span>
                </div>
              </a>
            </div>
            {/* card */}
            {/* card */}
            <div class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
                <div class="ag-courses-item_title">
                  B.Com Computer Application
                  <p>Sri Chaitanya Degree College</p>
                </div>
                <div class="ag-courses-item_date-box">
                  Grade:
                  <span class="ag-courses-item_date">
                    6.8
                  </span>
                </div>
                <div class="ag-courses-item_date-box">
                  Passed Out:
                  <span class="ag-courses-item_date">
                    OCTOBER 2021
                  </span>
                </div>
              </a>
            </div>
            {/* card */}
          </div>
        </div>

        <div className='skillsSec secThree'>
          {/* <h2 className='mySkillsH2'>MY SKILLS</h2> */}
          <h2 className='mySkillsH2 ski'>
            <span>M</span>
            <span>Y&nbsp;</span>
            <span>S</span>
            <span>k</span>
            <span>i</span>
            <span>l</span>
            <span>l</span>
            <span>s</span>
          </h2>
          <div className='skillsHolder'>
            {/* card */}
            <FlipCard name="HTML" percentage="98" skillIcon="./assets/skills_pngs/html_png.png" description="I mastered the HTML language in 2021 and have been working with it since then. I have used it to create websites and web applications. I am very comfortable with it. I am 98% accurate with HTML." />
            <FlipCard name="CSS" percentage="98" skillIcon="./assets/skills_pngs/css_png.png" description="I have a proficiency level of 98% in CSS. I use it extensively for styling web pages and applications." />
            <FlipCard name="JavaScript" percentage="85" skillIcon="./assets/skills_pngs/javascript_png.png" description="I have an 85% proficiency level in JavaScript. I leverage it for dynamic behavior and interactivity on websites and web applications." />
            <FlipCard name="jQuery" percentage="75" skillIcon="./assets/skills_pngs/jquery_png.png" description="I am proficient in jQuery at a level of 75%. I utilize it for DOM manipulation and event handling." />
            <FlipCard name="Bootstrap" percentage="80" skillIcon="./assets/skills_pngs/bootstrap_png.png" description="With an 80% proficiency level in Bootstrap, I use its framework for responsive and mobile-first front-end development." />
            <FlipCard name="React JS" percentage="80" skillIcon="./assets/skills_pngs/reactjs_png.png" description="I have an 80% proficiency level in React JS. I use it to build interactive user interfaces for web applications." />
            <FlipCard name="Pug" percentage="75" skillIcon="./assets/skills_pngs/pug_png.png" description="I am proficient in Pug at a level of 75%. I use it as a template engine for Node.js and for generating HTML." />
            <FlipCard name="CoffeeScript" percentage="70" skillIcon="./assets/skills_pngs/coffeescript_png.png" description="At a proficiency level of 70%, I use CoffeeScript for writing JavaScript with more concise and readable syntax." />
            <FlipCard name="SCSS/SASS" percentage="85" skillIcon="./assets/skills_pngs/scss_png.png" description="With a proficiency level of 85%, I use SCSS/SASS for writing more maintainable and organized CSS code." />
            <FlipCard name="Python" percentage="80" skillIcon="./assets/skills_pngs/python_png.png" description="I am proficient in Python at a level of 80%. I use it for various tasks including web development, scripting, and automation." />
            <FlipCard name="Photoshop" percentage="95" skillIcon="./assets/skills_pngs/photoshop_png.png" description="I have a proficiency level of 95% in Photoshop. I use it for graphic design, photo editing, and web design." />
            <FlipCard name="Illustrator" percentage="85" skillIcon="./assets/skills_pngs/illustrator_png.png" description="With an 85% proficiency level in Illustrator, I use it for vector graphic design and illustration work." />

            {/* card */}
          </div>
        </div>

        <div className='skillsSec secThree'>
          {/* <h2 className='mySkillsH2'>MY PROJECTS</h2> */}
          <h2 className='mySkillsH2 proj'>
            <span>M</span>
            <span>Y&nbsp;</span>
            <span>P</span>
            <span>r</span>
            <span>o</span>
            <span>j</span>
            <span>e</span>
            <span>c</span>
            <span>t</span>
            <span>s</span>
          </h2>
          <div className='skillsHolder'>
            {/* projects section */}
            <div className='projectsSection'>
              <MagneticBox />
            </div>
            {/* projects section */}
          </div>
        </div>

        <div className="skillsSec footer">
          {/* <h2>Contact Me</h2> */}
          {/* <h2 className='mySkillsH2'>CONTACT ME</h2> */}
          <h2 className='mySkillsH2 conc'>
            <span>C</span>
            <span>O</span>
            <span>N</span>
            <span>T</span>
            <span>A</span>
            <span>C</span>
            <span>T&nbsp;</span>
            <span>M</span>
            <span>E</span>
          </h2>

          <div className="linkHolder">
            <img src="./assets/icons/icons8-whatsapp-128.png" alt="cIcon" />
            <p>WhatsApp</p>
            <a href="https://wa.me/+919032145317" target="_blank">+91 90321 45317</a>
          </div>
          <div className="linkHolder">
            <img src="./assets/icons/icons8-mail-100.png" alt="cIcon" />
            <p>Email</p>
            <a href="mailto:developershaikzz@gmail" target="_blank">developershaikzz@gmail</a>
          </div>
          <div className="linkHolder">
            <img src="./assets/icons/icons8-linked-in-100.png" alt="cIcon" />
            <p>LinkedIn</p>
            <a href="https://www.linkedin.com/in/fizal-ali-shaik-0002141b6" target="_blank">Fizal Shaik</a>
          </div>
        </div>

        
        <div className='skillsSec secFour'>
          <p className='copyright'>©{currentYear}. All Rights Reserved.</p>
          <p className='developerShaikzz'>Developed by Fizal Shaik</p>
        </div>
      </section>

    </>
  );
}

export default App;
