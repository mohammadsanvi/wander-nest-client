import React from 'react';
import { motion } from "framer-motion";
import team1 from '../../assets/team/team1.jpg'
import team2 from '../../assets/team/team2.jpg'

const Banner = () => {
        return (
              <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <div className='flex-1'>
          <img
      src={team1}
    />
          {/* <img
      src={team2}
    /> */}
  </div>
    <div className='flex-1'>
      <motion.h1 initial={{scale: 0}} animate={{
        scale: 1,
        transition:{duration: 4}
      }} className="text-5xl font-bold">Latest Job For You!</motion.h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        );
};

export default Banner;