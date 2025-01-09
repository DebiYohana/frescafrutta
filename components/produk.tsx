import React from 'react';
import Image from 'next/image';
import product1 from '../watermelon.jpg'; // Ganti dengan gambar produk yang sesuai
import product2 from '../banana.jpg';  // Ganti dengan gambar produk yang sesuai
import product3 from '../orange.jpg';   // Ganti dengan gambar produk yang sesuai
import product4 from '../grape.jpg';  // Ganti dengan gambar produk yang sesuai

const ProductsGallery: React.FC = () => {
  const products = [
    { id: 1, title: 'Semangka', image: product1 },
    { id: 2, title: 'Pisang', image: product2 },
    { id: 3, title: 'Jeruk', image: product3 },
    { id: 4, title: 'Anggur', image: product4 },
  ];

  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    } as React.CSSProperties,
    title: {
      color: 'teal',
    } as React.CSSProperties,
    gallery: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap' as 'wrap',
      marginTop: '20px',
    } as React.CSSProperties,
    card: {
      width: '200px',       // Lebar card yang lebih besar untuk produk
      margin: '10px',       
      border: '1px solid #ccc',
      borderRadius: '5px',
      overflow: 'hidden',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      textAlign: 'center',
    } as React.CSSProperties,
    productTitle: {
      margin: '10px 0',
      fontSize: '18px',   // Ukuran font yang sedikit lebih besar
    } as React.CSSProperties,
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Hasil kebun kami</h2>
      <div style={styles.gallery}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <Image
              src={product.image}
              alt={product.title}
              layout="responsive"
              width={150}  // Sesuaikan ukuran gambar
              height={150} // Sesuaikan ukuran gambar
            />
            <h3 style={styles.productTitle}>{product.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsGallery;
