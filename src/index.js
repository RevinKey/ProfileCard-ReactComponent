import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import image from './me.jpg';
import ProfileCard from './ProfileCard';
import registerServiceWorker from './registerServiceWorker';
const bio = `I am a self proclaimed
technology nerd. Starting with a
strong background of
networking and server
management, then spending a
few years doing Web
Development support, I have
grown lately into a lover of
FullStack development with a
passion of making the most
solid backends possible with
simple and intuitive front end
designs that are welcoming for
all users. When I'm not behind a
Computer I am usually out in
the woods hiking, fishing and
enjoying nature.`;
const link= 'https://www.linkedin.com/in/revinkey/';
ReactDOM.render(<ProfileCard name="Kevin Reynolds" title="Tier 2- Dev Support" bio={bio} image={image} link={link}/>, document.getElementById('root'));
registerServiceWorker();
