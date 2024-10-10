'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const Background = () => {
  useEffect(() => {
    const timeline1 = gsap.timeline({ delay: 0.1, repeat: -1, yoyo: true });
    gsap.utils.toArray<HTMLElement>('.type1').forEach((el) => {
      timeline1.to(el, {
        duration: 4,
        boxShadow: '0px 0px 20px white',
        autoAlpha: 0.4,
      });
    });

    const timeline2 = gsap.timeline({ delay: 0.1, repeat: -1 });
    gsap.utils.toArray<HTMLElement>('.type2').forEach((el) => {
      timeline2.to(el, {
        duration: 2,
        boxShadow: '0px 0px 20px white',
        autoAlpha: 0.6,
      });
      timeline2.to(el, {
        duration: 4,
        boxShadow: '0px 0px 0px white',
        autoAlpha: 0.1,
      });
      timeline2.to(el, {
        duration: 2,
        boxShadow: '0px 0px 10px white',
        autoAlpha: 0.3,
      });
    });

    const timeline3 = gsap.timeline({ delay: 0.1, repeat: -1, yoyo: true });
    gsap.utils.toArray<HTMLElement>('.type3').forEach((el) => {
      timeline3.to(el, {
        duration: 4,
        boxShadow: '0px 0px 0px white',
        autoAlpha: 0.09,
      });
    });
  }, []);

  return (
    <div className='honeywarp'>
      <div className='honeycomb type1 terminal_honeycomb1'></div>
      <div className='honeycomb type2 terminal_honeycomb2'></div>
      <div className='honeycomb type3 terminal_honeycomb3'></div>
      <div className='honeycomb type1 terminal_honeycomb4'></div>
      <div className='honeycomb type2 terminal_honeycomb5'></div>
      <div className='honeycomb type2 terminal_honeycomb6'></div>
      <div className='honeycomb type1 terminal_honeycomb7'></div>
      <div className='honeycomb type2 terminal_honeycomb8'></div>
      <div className='honeycomb type3 terminal_honeycomb9'></div>
      <div className='honeycomb type3 terminal_honeycomb10'></div>
      <div className='honeycomb type1 terminal_honeycomb11'></div>
    </div>
  );
};

export default Background;
