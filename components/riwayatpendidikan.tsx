function RowKelebihan(props: any) {
  return (
    <div className="border-2 border-yellow-200/75 rounded-lg bg-white-800 p-2 my-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4">{props.kelebihan}</div>
          <div className="col-span-12 md:col-span-4">{props.deskripsi}</div>
        </div>
      </div>
    </div>
  );
}

export default function KelebihanProduk() {
  return (
      <div className="container mx-auto p-2 text-center pt-20">
      <h2 className="text-2xl">Kelebihan Produk Kami</h2>
      <RowKelebihan kelebihan="Produk Berkualitas" deskripsi="Kami menyediakan produk yang selalu terjaga kualitasnya, segar, dan aman digunakan." />
      <RowKelebihan kelebihan="Pengiriman Cepat" deskripsi="Kami menjamin pengiriman cepat sehingga produk sampai tepat waktu." />
      <RowKelebihan kelebihan="Harga Terjangkau" deskripsi="Produk berkualitas tinggi dengan harga yang sangat bersaing." />
      <RowKelebihan kelebihan="Layanan Pelanggan 24/7" deskripsi="Tim layanan pelanggan kami siap membantu Anda kapan saja." />
      <RowKelebihan kelebihan="Pilihan Produk Lengkap" deskripsi="Kami menawarkan berbagai macam produk untuk kebutuhan Anda, mulai dari makanan hingga peralatan rumah tangga." />
      </div>
  );
}
