import React, { useEffect } from 'react';

const ApplyPage = () => {
  useEffect(() => {
    // Redirect to "https://www.google.com"
    window.location.href = 'https://contactyash2004.systeme.io/video';
  }, []); // The empty dependency array ensures that this effect runs only once

  // Return null or a loading indicator while the redirection is happening
  return null;
};

export default ApplyPage;
