import React from 'react';

import './about.styles.scss';


const About = () => (
  <div className="about">
    <h1 className="about__title">About</h1>
    
    <div className="about__wrapper">
      <div className="about__left-sidebar">
        <aside className="about__image-wrap">
          <img className="about__image" src="https://i.ibb.co/px2tCc3/jackets.png" alt="cloches" />
        </aside>
      </div>
      
      <div className="about__content">
        <p className="about__text">Anyone who has ever been inside a Crown Clothes can tell you, this isn’t consignment, it’s resale – and it’s better than retail. At Crown Clothes you can find&nbsp;like-new designer clothing at up to 70% off
          of retail. All of our apparel, shoes, jewelry, and accessories are “gently-used,” and actually like-new –
          and we only buy pieces that are in great shape, on-trend, or classic and timeless. When you walk into a
          Crown Clothes, you walk into a clean, beautiful, well-designed store with organized shelves and racks
          that make shopping fun and enjoyable. Crown Clothes’s apparel is also organized by color and size, making
          it even easier to find what you’re looking for.</p>
        <p className="about__text">On top of selling great items, we buy them as well – in fact, that’s where we get our inventory! Our
          inventory comes from customers that have beautiful designer pieces in their closet that just don’t get
          worn. You can bring your items into Crown Clothes, sell them for CASH on-the-spot, putting the money in
          your hands before you leave the store, or you can get store credit towards some “gently-used” items for
          yourself.
        </p>
        <p className="about__text">
          There are many Crown Clothes stores throughout the United States. Each store serves its local community
          in both buying and selling “gently-used,” designer clothing, shoes, boots, handbags, jewelry, and other
          accessories. Crown Clothes gives you fresh, modern styles in designer apparel and accessories – at great
          prices. On top of that, you’re also being green and kind to the environment by selling your clothing and
          buying some like-new pieces for yourself.</p>
        <p className="about__text">
          Some of our stores even have fun, private events like “Girls’ Night Out,” which can be a fun shopping
          event for you and a group of your friends.
          But, no&nbsp;matter what Crown Clothes you go to, our friendly,&nbsp;professional
          staff will provide you with great customer service. At Crown Clothes you can find some great pieces to
          enhance your wardrobe to make your style even more chic and modern – or maybe you would like to try some
          fun, new trends.
        </p>
      </div>
    </div>
  </div>
);


export default About;
