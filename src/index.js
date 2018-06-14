import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import image from './me.jpg';
import ProfileCard from './ProfileCard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ProfileCard name="Kevin Reynolds" title="Tier 2- Dev Support" image={image}/>, document.getElementById('root'));
registerServiceWorker();
