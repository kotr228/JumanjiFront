import React from 'react';
import './../../styles/gallery.css';

type GalleryImage = {
  webp: string;
  jpeg: string;
};

const imageList: GalleryImage[] = [
  {
    webp: "https://cdn-media.choiceqr.com/prod-eat-jumanji-alex/template-gallery/thumbnail_IghOmdt-ldswkAH-SVvBMqK_L-J-s.webp",
    jpeg: "https://cdn-media.choiceqr.com/prod-eat-jumanji-alex/template-gallery/thumbnail_IghOmdt-ldswkAH-SVvBMqK_A-s-V.jpeg",
  },
  {
    webp: "https://cdn-media.choiceqr.com/prod-eat-jumanji-alex/template-gallery/thumbnail_kvCoSYX-YDQEJFk-HwOcbkk_D-l-M.webp",
    jpeg: "https://cdn-media.choiceqr.com/prod-eat-jumanji-alex/template-gallery/thumbnail_kvCoSYX-YDQEJFk-HwOcbkk_r-K-W.jpeg",
  },
  {
    webp: "https://cdn-media.choiceqr.com/prod-eat-jumanji-alex/template-gallery/thumbnail_zEKTtGF-WSiGpVA-IjizuIS_C-Q-J.webp",
    jpeg: "https://cdn-media.choiceqr.com/prod-eat-jumanji-alex/template-gallery/thumbnail_zEKTtGF-WSiGpVA-IjizuIS_g-C-r.jpeg",
  },

  // Додай інші елементи у тому ж форматі...
];

const Gallery: React.FC = () => (
  <div className="styles_MainTemplatePhotoGallery__NpGMJ">
    <div className="styles_photoGalleryTitle__8__s8">Наші фотографії</div>
    <div className="styles_photoGalleryList__iT_m3">
      {imageList.map((img, index) => (
        <div className="styles_photoGalleryListItem__1Nm1z" key={index}>
          <picture>
            <source srcSet={img.webp} type="image/webp" />
            <img src={img.jpeg} alt="gallery" loading="lazy" />
          </picture>
        </div>
      ))}
      <button className="gallery_addButton" onClick={() => alert("Додасть фото")}>+</button>
    </div>
  </div>
);

export default Gallery;
