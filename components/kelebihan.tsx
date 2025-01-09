import React from 'react';

const Advantages = () => {
  // Daftar kelebihan produk/pelayanan
  const advantages = [
    { title: 'Produk Berkualitas Tinggi', description: 'Kami menyediakan produk berkualitas tinggi yang segar dan terjamin.', icon: '🌱' },
    { title: 'Pengiriman Cepat', description: 'Proses pengiriman cepat dan aman langsung ke tangan Anda.', icon: '🚚' },
    { title: 'Harga Terjangkau', description: 'Kami menawarkan harga yang kompetitif untuk setiap produk.', icon: '💰' },
    { title: 'Layanan Pelanggan 24/7', description: 'Tim dukungan pelanggan kami siap membantu Anda kapan saja.', icon: '☎️' },
    { title: 'Pilihan Produk Lengkap', description: 'Kami menawarkan berbagai macam produk buah dan sayuran segar untuk memenuhi kebutuhan Anda.', icon: '🍎' },
  ];

  const advantagesStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '30px',
    padding: '40px 20px',
  };

  const advantageCardStyle = {
    width: '250px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '20px',
    transition: 'transform 0.3s ease',
  };

  const advantageCardHoverStyle = {
    transform: 'scale(1.05)',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    fontSize: '1rem',
    color: '#555',
  };

  const iconStyle = {
    fontSize: '3rem',
    marginBottom: '20px',
  };

  return (
    <section id="advantages" style={advantagesStyle}>
      <h2 style={{ width: '100%', textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px' }}>
        Kelebihan Produk & Pelayanan Kami
      </h2>
      {advantages.map((advantage, index) => (
        <div
          key={index}
          style={advantageCardStyle}
          className="advantage-card"
          onMouseEnter={(e) => (e.target.style.transform = advantageCardHoverStyle.transform)}
          onMouseLeave={(e) => (e.target.style.transform = '')}
        >
          <div style={iconStyle}>{advantage.icon}</div>
          <h3 style={titleStyle}>{advantage.title}</h3>
          <p style={descriptionStyle}>{advantage.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Advantages;
