import React from 'react';
import Typewriter from 'typewriter-effect';
import Main from '../layouts/landing';

const data = [
  { name: 'Software Engineer' },
  { name: 'Coffee Drinker' },
  { name: 'Music Listener' },
  { name: 'Reader' },
  { name: 'Extremely Good (loosely used) Badminton Player' },
  { name: 'Writer' },
  { name: 'Ukulele Owner' },
  { name: 'Pasta Eater' },
  { name: 'Cat Whisperer (they don\'t listen)' },
  { name: 'Panic Attack Haver' },
];
const colors = ['#4FA3A5', '#684C40', '#FDAE38', '#F65436', '#581444'];
const strs = [];
for (let i = 0; i < data.length; i += 1) { // loop runs for every superhero
  strs.push(`<font color=${colors[i % colors.length]}> ${data[i].name}</font>`);
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
          <Typewriter options={{ strings: strs, autoStart: true, loop: true }} />
        </center>
      </p>
      <br />
      <center><p><a href="./about">About </a> &nbsp; | &nbsp;   <a href="./resume">Resume </a> &nbsp; | &nbsp;   <a href="./projects">Projects </a> &nbsp; | &nbsp; <a href="./contact">Contact </a></p></center>
    </div>
  </Main>
);

export default Index;
