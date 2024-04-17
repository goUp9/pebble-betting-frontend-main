import React, { useEffect, useRef } from 'react';
import img1 from '/images/solana_speedway.png';
import img2 from '/images/solana_speedway.png';
import img3 from '/images/solana_speedway.png';
import img4 from '/images/solana_speedway.png';
import img5 from '/images/Vector.png';
import img6 from '/images/Vector.png';
import img7 from '/images/Vector.png';
import img8 from '/images/Vector.png';

const imgArray = [
  img1,
  img8,
  img7,
  img2,
  img3,
  img6,
  img4,
  img5,
  img3,
  img1,
  img8,
  img7,
  img2,
  img3,
  img6,
  img4,
  img5,
  img3,
];

const PointerScroll = () => {
  const elemRef = useRef(null);
  let isDrag = false;
  const dragStart = () => (isDrag = true);
  const dragEnd = () => (isDrag = false);


  const pointerScroll = (elem) => {
    const drag = (ev) => isDrag && (elem.scrollLeft -= ev.movementX * 0.8);

    elem.addEventListener('pointerdown', dragStart);
    addEventListener('pointerup', dragEnd);
    addEventListener('pointermove', drag);
  };

  useEffect(() => {
    const elem = elemRef.current;
    pointerScroll(elem);
  }, []);

  return (
    <div className="parent touch-none overflow-hidden" ref={elemRef}>
      <div className="child cursor-pointer w-[1000px] flex gap-2 z-[-50]">
        {
          imgArray.map((image, i) => {
            return (
              <div className="flex flex-col h-[200px]">
                <img src={image} id={i} className="h-[65px] w-[72px]  px-1" draggable="false" />
                <p className='truncate w-[72px] text-[#68758c]'>0xCjGiahcBVbB7oQqBWK8xMP1XKPfKR33S17mSuovCSfyi</p>
                <div className='flex flex-row items-center'>
                  <img src="/images/Solana.svg" className='mx-1 h-[15px]' />
                  <p className='flex justify-center text-[15px]'>10.05</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default PointerScroll;