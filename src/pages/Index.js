import React from 'react';
import Typewriter from 'typewriter-effect';
import Main from '../layouts/landing';

const data = [
  { name: 'Software Engineer' },
  { name: 'Coffee Drinker' },
  { name: 'Music Listener' },
  { name: 'Reader' },
  { name: 'Ukulele Owner' },
  { name: 'Cat Whisperer (they never listen)' },
  { name: 'Writer' },
  { name: 'Pasta Eater' },
  { name: 'Great (loosely used) Minecraft Player' },
];
const colors = ['#4FA3A5', '#684C40', '#FDAE38', '#F65436', '#581444'];
const strs = [];
for (let i = 0; i < data.length; i += 1) { // loop runs for every superhero
  strs.push(`<TT><font color=${colors[i % colors.length]}> ${data[i].name}</font></TT>`);
}
const Index = () => (
  <Main
    description={"Yamini Gaur's personal website. Raleigh based Virginia Tech Graduate, "
      + 'Software Engineer @ Citrix Systems'}
  >
    <div className="test">
      <h1>
        <b><center>Yamini Gaur</center></b>
      </h1>
      <p>
        <center>
          <div className="dynamic">
            <p>
              <Typewriter options={{ strings: strs, autoStart: true, loop: true }} />
            </p>
          </div>
        </center>
      </p>
      <br />
      <center><p><a href="./about">About </a> &nbsp; | &nbsp;   <a href="./resume">Resume </a> &nbsp; | &nbsp;   <a href="./projects">Projects </a> &nbsp; | &nbsp; <a href="./contact">Contact </a></p></center>
    </div>
  </Main>
);

export default Index;
