import React from 'react';
import logo from './logo.svg';
import './sass/App.scss';
import hiking from './images/hiking.jpg'
import {NavBar} from './NavBar';
import {DropDown} from './DropDown'
import Scrollspy from 'react-scrollspy'

function App() {
  return (
    <div className="App">
      <NavBar>
        <Scrollspy item={['fitness-section', 'nature-section', 'hiking', 'biking']} style={{'display': 'flex', 'marginTop': '5px'}}>
          <li><a className={'navbar-item'} href={'#fitness-section'}>Fitness</a></li>
          <li><a className={'navbar-item'} href={'#nature-section'}>Nature</a></li>
          <li><DropDown topName={'Activites'}>
            <a class="navbar-item" href={'#hiking'}>
              Hiking
            </a>
            <a class="navbar-item" href={'#biking'}>
              Biking
            </a>
          </DropDown></li>
        </Scrollspy>
      </NavBar>
      <br/>
      <section id={'fitness-section'} className={'content container'}>
        <h2 className={'is-large'}>Exercise</h2>
        <hr/>
        <p>Exercies is an integral part of living a healthy life. 
          Exercise is often seen as painful and not
          really needed in a modern lifestly.
        </p>
        <p>
          The<span> </span>  
          <a target={'_blank'} href={'https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise/art-20048389'}>
           Mayo clinc listed 7
          </a>
          <span> </span> 
          reason exercise is beneficial</p>
        <ol type={'1'}>
          <li>Exercise controls weight</li>
          <li>Exercise combats health conditions and diseases</li>
          <li>Exercise improves mood</li>
          <li>Exercise boosts energy</li>
          <li>Exercise promotes better sleep</li>
          <li>Exercise puts the spark back into your sex life</li>
        </ol>
        
      </section>
      <br/>
      <section id={'nature-section'} className={'content container'}>
        <h2>Nature</h2>
        <hr/>
        <p>
          Along with physical exercise, 
          immersing oneself in nature has asounding effects on mental health
        </p>
        <p>
          Jeremy Coles in the BBC wrote about how nature has a profound effect on health, 30% of people 
          self reported their health as "excellent". This was quite asounding to Lucy Roberts Lucy McRobert, nature matters campaigns manager for The Wildlife Trusts.
          <blockquote>Intuitively we knew that nature was good for us as humans, but the results were beyond brilliant </blockquote>
        </p>

        <p>Children respond well to nature as well:</p>
        <ul>
          <li>Improved Self-Esteem</li>
          <li>Decrease in ADHD symptons</li>
        </ul>
        <p>Nature exposure is not a cure all for any disease, 
          but can still have dramatic effects on physical
          and mental health.</p>
      </section>
      <br/>
      <section id={'activities'} className={'content container'}>
        <h2>How to get started</h2>
        <hr/>
        <p>Now that you understand the benefits of nature and exercise. How do you get started?</p>
        <h3 id={'hiking'}>Hiking</h3>
        <p> 
          When you hear hiking, you might think it means walking in a mountain range for a long time.
          Hiking doesn't need to be like this. It can be a casual stroll on a forest path.
        </p>
        <p>If it snows where you live, you can also invest in some snowshoes too!</p>
        <strong>How to I get into hiking?</strong>

        <h3 id={'biking'}>Mountain Biking</h3>
        <p>Mountain biking is a really fun way to exercise and expirence nature</p>
        <p>Depending on what type of trails you ride, you don't need to spend all that much money.</p>
        <strong>How to I get into Biking?</strong>
        <p>Here's an excellent video on how find gear to get started</p>
        <iframe width="560" height="315" 
        src="https://www.youtube-nocookie.com/embed/X6J5WwllX1k" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>

        <p>Now that you know what to get to ride, Where do you go</p>
        <p>
          One great website for finding local trails is 
          <a href={'https://www.mtbproject.com/'}> MTB Project</a>
        </p>

      </section>
      <footer className={'footer'}>
        <div className={'content has-text-centered'} style={{'color': 'white'}}>
          <p>A small website made by Ryan Philipps.</p>
          <a id={'source-code'} href={'https://github.com/Ryaguy15/techcom_project'}>Source Code Here</a>
        </div>
      </footer> 
    </div>
  );
 
}

export default App;
