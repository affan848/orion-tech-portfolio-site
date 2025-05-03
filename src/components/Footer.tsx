
import { cn } from "@/lib/utils";

export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("bg-secondary text-white", className)}>
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/0459376f-66e0-4825-bf52-753007ffbc67.png" 
                alt="ORION Technologies Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Empowering Industry with Quality Solutions. A trusted general order supplier based in Pakistan.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Product Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">
                  Automation Tools
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">
                  Mechanical Parts
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">
                  Electrical Components
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">
                  Industrial Gears
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Info</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>Office # 16, 1st Floor, Sharif Plaza</p>
              <p>Commercial Avenue, Wah Model Town</p>
              <p>Phase-III, Hassan Abdal, District. Attock</p>
              <p className="pt-2">Phone: +92 307 7770028</p>
              <p>Email: orienologies@gmail.com</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} ORION Technologies. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-400">
              Sales Director: Shehzad Taimoor
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
