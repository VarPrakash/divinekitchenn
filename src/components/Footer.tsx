import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal-800 text-cream-50">
      <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-8 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="font-display text-xl font-bold">
              Divine <span className="text-saffron-400">Kitchen</span>
            </div>
            <p className="mt-4 max-w-[280px] font-body text-sm leading-relaxed text-cream-50/70">
              A New York culinary destination since 2004. Premium steaks, fresh
              sushi, gourmet burgers, and craft beverages — all under one roof.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-body text-base font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Menu" },
                { href: "/about", label: "About Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-cream-50/70 transition-colors hover:text-saffron-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body text-base font-semibold">Contact</h3>
            <ul className="mt-4 space-y-3 font-body text-sm text-cream-50/70">
              <li>142 W 49th St, New York, NY 10019</li>
              <li>(212) 555-0142</li>
              <li>hello@divinekitchen.com</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-body text-base font-semibold">Hours</h3>
            <ul className="mt-4 space-y-3 font-body text-sm text-cream-50/70">
              <li>Mon – Thu: 11:30am – 10pm</li>
              <li>Fri – Sat: 11:30am – 11pm</li>
              <li>Sunday: 10am – 9pm</li>
            </ul>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-12 border-t border-charcoal-600 pt-6">
          <p className="text-center font-body text-xs text-cream-50/50">
            &copy; {new Date().getFullYear()} Divine Kitchen. All rights
            reserved. Images courtesy of{" "}
            <a
              href="https://www.pexels.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-saffron-400"
            >
              Pexels
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
