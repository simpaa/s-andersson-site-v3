import React from 'react';
import { NavLink } from 'react-router-dom';

import TextCard from '../../components/text-card';

const AboutPage = () => (
    <div>
        <TextCard>
            <h1>Hello!</h1>
            <p>
                My name is Simon Andersson I’m a 20 year old guy from Dalarna, Sweden. I working day to day as a system developer consultant focusing manly on web and mobile app development. I'm also doing some personal projects which you can find on the <NavLink exact to="/" activeClassName="menu-item-active">MY WORK</NavLink> page. When I’m not programming I enjoy mountain biking and extreme unicycling.
            </p>
        </TextCard>
    </div>
);

export default AboutPage;