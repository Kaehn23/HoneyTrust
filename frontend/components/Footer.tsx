import Link from "next/link";
import AppLogo from './ui/AppLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-800 bg-black/80 backdrop-blur-sm py-6 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col items-start">
            <AppLogo size={60} />
            <p className="mt-2 text-sm text-gray-400">
              © {currentYear} HoneyTrust
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm">
            <Link 
              href="/mentions-legales" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Mentions Légales
            </Link>
            <Link 
              href="/support" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
