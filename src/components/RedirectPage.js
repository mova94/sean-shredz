import React, { useEffect } from 'react';

export default function RedirectPage(){

    useEffect(() => {
      window.location.replace('https://docs.google.com/forms/d/e/1FAIpQLSdH6w9k4w2I0qDP-olZZyRmCpW0w-jqLTl30XxUFzVx1_H4Jw/viewform?usp=sf_link');
    }, [])

    const styles = {
        container: {
          padding: 30
        }
      }
  
    return(
    <div style={styles.container}>
      <h3>Redirecting...</h3>
    </div>
    )
        
  }
