class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer class="bg-forest text-mint pt-16 pb-8">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <img src="https://cdn.orderonline.id/uploads/images_2005021762351134538.png" alt="Luna Collection" class="h-16 mb-4">
              <p class="mb-4">
                Menyediakan produk fashion berkualitas untuk wanita muslimah dengan desain elegan dan nyaman.
              </p>
              <div class="flex space-x-4">
                <a href="#" class="social-icon">
                  <i data-feather="facebook"></i>
                </a>
                <a href="#" class="social-icon">
                  <i data-feather="instagram"></i>
                </a>
                <a href="#" class="social-icon">
                  <i data-feather="twitter"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h3 class="text-xl font-bold mb-4 text-gold">Informasi</h3>
              <div class="footer-links">
                <a href="#">Tentang Kami</a>
                <a href="#">Kontak</a>
                <a href="#">FAQ</a>
                <a href="#">Kebijakan Privasi</a>
                <a href="#">Syarat & Ketentuan</a>
              </div>
            </div>
            
            <div>
              <h3 class="text-xl font-bold mb-4 text-gold">Layanan</h3>
              <div class="footer-links">
                <a href="#">Cara Pemesanan</a>
                <a href="#">Pengiriman</a>
                <a href="#">Pembayaran</a>
                <a href="#">Retur & Refund</a>
                <a href="#">Testimoni</a>
              </div>
            </div>
            
            <div>
              <h3 class="text-xl font-bold mb-4 text-gold">Hubungi Kami</h3>
              <div class="space-y-3">
                <p class="flex items-start">
                  <i data-feather="map-pin" class="mr-3 mt-1 flex-shrink-0"></i>
                  <span>Jl. Contoh No. 123, Jakarta</span>
                </p>
                <p class="flex items-center">
                  <i data-feather="phone" class="mr-3"></i>
                  <span>+62 812 3456 7890</span>
                </p>
                <p class="flex items-center">
                  <i data-feather="mail" class="mr-3"></i>
                  <span>info@lunacollection.com</span>
                </p>
              </div>
            </div>
          </div>
          
          <div class="copyright text-center pt-8 border-t border-sage/30">
            <p>&copy; 2023 Luna Collection. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);
