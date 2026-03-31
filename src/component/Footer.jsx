const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-slate-400 py-20 px-6 mt-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand & Description */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-4xl font-bold text-white tracking-tight">DigiTools</h2>
            <p className="text-base leading-relaxed max-w-xs opacity-80">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-semibold text-lg">Product</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-semibold text-lg">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-semibold text-lg">Resources</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Links (Font Awesome Icons) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-semibold text-lg">Social Links</h4>
            <div className="flex gap-4">
              {/* Instagram */}
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0B1120] hover:scale-110 transition-all shadow-lg">
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
              {/* Facebook */}
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0B1120] hover:scale-110 transition-all shadow-lg">
                <i className="fa-brands fa-facebook-f text-lg"></i>
              </a>
              {/* X-Twitter */}
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0B1120] hover:scale-110 transition-all shadow-lg">
                <i className="fa-brands fa-x-twitter text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p className="opacity-70">© 2026 DigiTools. All rights reserved.</p>
          <div className="flex gap-8 opacity-70">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;