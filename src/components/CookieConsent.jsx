import React, { useState, useEffect } from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookie_consent');
    if (hasConsent) {
      setShowBanner(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setShowBanner(false);
  };

  return (
    <div>
      {showBanner && (
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          cookieName="myCookieConsent"
          style={{ background: 'blueviolet', textAlign: 'left' }}
          buttonStyle={{
            background: 'black',
            color: 'blueviolet',
            border: '2px solid white'
          }}
          onAccept={handleAccept}
        >
          This site uses cookies. See our{' '}
          <a href="/privacy">privacy policy</a> for more info.
        </CookieConsent>
      )}
    </div>
  );
};

export default CookieBanner;
