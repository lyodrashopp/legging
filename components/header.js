class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm py-4 transition-all duration-300">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <img src="https://cdn.orderonline.id/uploads/images_2005021762351134538.png" alt="Luna Collection" class="h-12">
            </div>
            
            <nav class="hidden md:flex space-x-8">
              <a href="#" class="text-forest font-semibold hover:text-gold transition-colors">Beranda</a>
              <a href="#features" class="text-forest font-semibold hover:text-gold transition-colors">Fitur</a>
              <a href="#order" class="text-forest font-semibold hover:text-gold transition-colors">Pesan</a>
            </nav>
            
            <div class="flex items-center space-x-4">
              <a href="https://wa.me/" target="_blank" class="bg-gold text-forest font-bold py-2 px-4 rounded-full flex items-center hover:bg-amber-600 transition-colors">
                <i data-feather="phone" class="mr-2"></i>
                WhatsApp
              </a>
              <button class="md:hidden text-forest">
                <i data-feather="menu"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('header-component', HeaderComponent);
