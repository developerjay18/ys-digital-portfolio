import React, { useEffect } from 'react';

function ThankYou() {
  useEffect(() => {
    // Include the Wistia scripts
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/embed/medias/7hwr4rwq58.jsonp';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    script2.async = true;
    document.body.appendChild(script2);

    // Clean up the scripts when the component unmounts
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className="min-h-screen font-poppins bg-[#e8e8e8] flex flex-col justify-center items-center gap-10 lg:py-20 px-5 lg:px-0">
      <div className="text-4xl lg:text-5xl font-semibold text-center">
        Great! It seems you are an action-taker.
      </div>

      {/* video  */}
      <div className="lg:w-[60%] w-[95%]">
        <div
          className="wistia_responsive_padding rounded-xl"
          style={{ padding: '56.25% 0 0 0', position: 'relative' }}
        >
          <div
            className="wistia_responsive_wrapper"
            style={{
              height: '100%',
              left: 0,
              position: 'absolute',
              top: 0,
              width: '100%',
            }}
          >
            <div
              className="wistia_embed wistia_async_7hwr4rwq58 seo=true videoFoam=true"
              style={{ height: '100%', position: 'relative', width: '100%' }}
            >
              <div
                className="wistia_swatch"
                style={{
                  height: '100%',
                  left: 0,
                  opacity: 0,
                  overflow: 'hidden',
                  position: 'absolute',
                  top: 0,
                  transition: 'opacity 200ms',
                  width: '100%',
                }}
              >
                <img
                  src="https://fast.wistia.com/embed/medias/7hwr4rwq58/swatch"
                  style={{
                    filter: 'blur(5px)',
                    height: '100%',
                    objectFit: 'contain',
                    width: '100%',
                  }}
                  alt=""
                  aria-hidden="true"
                  onLoad={(e) => (e.target.parentNode.style.opacity = 1)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta flex justify-center mx-auto">
        <button className="text-2xl bg-[#0D65D6] px-1 py-4 text-white flex items-center gap-5 lg:w-[50%] justify-center">
          <div className="w-[10%]">
            <img
              src="https://res.cloudinary.com/practice-jay-cloud/image/upload/v1705718331/ysd/akfgzaqv46enasonn6xi.png"
              alt=""
            />
          </div>
          <div>Chat On Whatsapp</div>
        </button>
      </div>
    </div>
  );
}

export default ThankYou;
