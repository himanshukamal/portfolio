// src/components/ImageGallery.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const apiKey = "18316085-9bda7c8c1f12f0e1e000e0827";
        const response = await axios.get("https://pixabay.com/api/", {
          params: {
            key: apiKey,
            q: "nature",
            image_type: "photo",
            per_page: 10,
          },
        });

        const fetchedImages = response.data.hits.map((hit) => ({
          url: hit.webformatURL,
          name: hit.tags,
        }));

        setImages(fetchedImages);
      } catch (error) {
        console.error("Error fetching images:", error);
        setError("Network Error");
      }
    };

    fetchImages();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="gallery h-screen overflow-y-scroll">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <Image src={image.url} alt={image.name} width="400" height="500" />
          <p>{image.name}</p>
        </div>
      ))}
      <style jsx>{`
        .gallery {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .gallery-item {
          margin: 10px;
          text-align: center;
        }
        img {
          max-width: 300px;
          max-height: 300px;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
};

export default ImageGallery;
