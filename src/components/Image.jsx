import React, { useRef, useEffect, useState } from 'react';

const Image = ({ 
  src, 
  alt, 
  width = '100%', 
  height = 'auto', 
  backgroundColor = '#3671c9', 
  padding = '20px', 
  margin = '20px auto', // Margin around the container
  containerBoxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow for the container
  imageBoxShadowColor = 'rgba(0, 0, 0, 0.3)', // Color for the image shadow
  imageBoxShadowBlur = 12, // Blur radius for the image shadow
  imageBoxShadowSpread = 0, // Spread radius for the image shadow
  imageRoundness = '4px', // New prop for image roundness
}) => {
  const imgRef = useRef(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [shadow, setShadow] = useState(`0 0 ${imageBoxShadowBlur}px ${imageBoxShadowSpread}px ${imageBoxShadowColor}`);

  useEffect(() => {
    const img = imgRef.current;

    const updateShadow = () => {
      if (img) {
        const rect = img.getBoundingClientRect();
        setImageDimensions({ width: rect.width, height: rect.height });
        setShadow(`0 0 ${imageBoxShadowBlur}px ${imageBoxShadowSpread}px ${imageBoxShadowColor}`);
      }
    };

    const handleLoad = () => {
      updateShadow();
    };

    const handleResize = () => {
      updateShadow();
    };

    if (img) {
      img.addEventListener('load', handleLoad);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (img) {
        img.removeEventListener('load', handleLoad);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [src, imageBoxShadowBlur, imageBoxShadowColor, imageBoxShadowSpread]);

  const containerStyle = {
    width: width,
    height: height,
    padding: padding,
    margin: margin, // Margin around the container
    borderRadius: '8px',
    backgroundColor: backgroundColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: containerBoxShadow, // Box shadow for the container
    maxWidth: '100%', // Ensures container does not exceed viewport width
    boxSizing: 'border-box', // Includes padding and border in element's total width and height
  };

  const imgStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain', // Ensures the image scales to fit without distortion
    boxShadow: shadow, // Box shadow for the image
    transition: 'box-shadow 0.3s ease-in-out', // Smooth transition for shadow changes
    borderRadius: imageRoundness, // Added roundness to the image
  };

  return (
    <div style={containerStyle}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        style={imgStyle}
      />
      {imageDimensions.width > 0 && (
        <div
          style={{
            position: 'absolute',
            width: `${imageDimensions.width}px`,
            height: `${imageDimensions.height}px`,
            boxShadow: shadow,
            pointerEvents: 'none',
            borderRadius: imageRoundness, // Added roundness to the shadow div
          }}
        />
      )}
    </div>
  );
};

export default Image;