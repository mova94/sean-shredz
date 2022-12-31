import React, { useEffect } from 'react';

export default function RedirectPage(){

    useEffect(() => {
      window.location.replace('https://calendly.com/sean-shredz');
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
