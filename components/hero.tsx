export default function Hero() {
    return (
      <div>
        <header
          className="relative bg-cover bg-center h-screen"
          style={{
            backgroundImage:
              "url('https://asset.kompas.com/crops/K1jAY5yDhzgATIRjGDVrwhoRixI=/12x0:504x328/1200x800/data/photo/2023/05/10/645b49b35af83.png')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay untuk teks lebih jelas */}
          <div className="container mx-auto h-full flex flex-col justify-center items-center text-white relative z-10">
            <h1 className="text-gray-200 font-bold text-4xl mb-4">Yohana Frutta Fresca</h1>
            <p className="text-lg text-center mb-8 max-w-2xl mx-auto">
              Selamat datang di Yohana Frutta Fresca! Temukan berbagai buah-buahan segar dengan harga terbaik di sini.
              Berbelanja kini lebih mudah dan menyenangkan!
            </p>
  
            {/* Kategori Produk dengan Link dan Hover Style */}
            <div className="flex space-x-8 mb-12 justify-center">  
              <a
                href="#about"
                className="text-white font-semibold text-xl hover:text-yellow-500 transition duration-300"
              >
                Mulai Belanja
              </a>
            </div>    
          </div>
        </header>
      </div>
    );
}
