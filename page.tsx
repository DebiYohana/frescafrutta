// CVonline.tsx (halaman utama)
import Hero from "./components/hero";
import PersonalInfo from "./components/personalinfo";
import RiwayatPendidikan from "./components/riwayatpendidikan";
import ContactForm from "./components/contactform";
import RatingStars from "./components/ratingstars";  // Pastikan nama komponen sesuai dengan file
import ProductsGallery from "./components/produk";

// Fungsi utama untuk render halaman CV online
export default function CVonline() {
  return (   
    <section>
      <Hero />
      <PersonalInfo />
      <ProductsGallery />
      <RiwayatPendidikan />
      <ContactForm />
      <RatingStars/>
    </section>
  );
}
