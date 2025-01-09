import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-container">
      <h2 className="about-heading">Tentang Kami</h2>
      <p className="about-paragraph">
        Yohana Frutta Fresca adalah platform yang berkomitmen untuk menyediakan produk segar dan berkualitas
        langsung dari petani dan produsen lokal. Kami percaya bahwa setiap orang berhak mendapatkan produk
        segar dengan harga terjangkau, dan kami mendukung petani lokal untuk menciptakan pasar yang lebih
        adil dan berkelanjutan.
      </p>
      <ul className="about-list">
        <li>Produk segar langsung dari petani lokal.</li>
        <li>Harga terjangkau untuk semua orang.</li>
        <li>Mendukung keberlanjutan petani lokal.</li>
      </ul>
      <p className="about-paragraph">
        Hubungi kami untuk informasi lebih lanjut atau pemesanan. Bersama-sama kita bisa menciptakan
        ekosistem yang mendukung pertanian lokal dan memberikan manfaat bagi masyarakat luas.
      </p>
    </section>
  );
};

export default About;
