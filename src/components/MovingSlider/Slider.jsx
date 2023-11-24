import React, { useEffect, useRef } from 'react';

const Slider = ({ links }) => {
  const logosSlideRef = useRef(null);

  useEffect(() => {
    const copy = logosSlideRef.current.cloneNode(true);
    document.querySelector('.logos').appendChild(copy);
  }, []);

  return (
    <div className="logos border border-red">
      <div
        className="logos-slide border-2 border-black flex"
        ref={logosSlideRef}
      >
        <img src="./logos/3m.svg" alt="Logo 1" />
        <img src="./logos/barstool-store.svg" alt="Logo 2" />
        <img src="./logos/budweiser.svg" alt="Logo 3" />
        <img src="./logos/buzzfeed.svg" alt="Logo 4" />
        <img src="./logos/forbes.svg" alt="Logo 5" />
        <img src="./logos/macys.svg" alt="Logo 6" />
        <img src="./logos/menshealth.svg" alt="Logo 7" />
        <img src="./logos/mrbeast.svg" alt="Logo 8" />
      </div>
    </div>
  );
};

export default Slider;
