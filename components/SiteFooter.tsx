import { Mail, MessageCircle, Send } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="bg-primary text-white pt-14 pb-8 mt-10" id="footer">
      <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-4">
        <div>
          <h3
            className="font-semibold mb-3 text-sm"
            style={{ color: "#ffffff" }}
          >
            DesignPi
          </h3>
          <p className="text-xs leading-relaxed" style={{ color: "#ffffff" }}>
            Product design & engineering partnership accelerating clarity,
            velocity and scale.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-3 text-sm" style={{ color: "#ffffff" }}>
            Platform
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a
                href="#services"
                className="text-white hover:text-white/80 transition-colors"
                style={{ color: "#ffffff" }}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="text-white hover:text-white/80 transition-colors"
                style={{ color: "#ffffff" }}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="text-white hover:text-white/80 transition-colors"
                style={{ color: "#ffffff" }}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="text-white hover:text-white/80 transition-colors"
                style={{ color: "#ffffff" }}
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3 text-sm" style={{ color: "#ffffff" }}>
            Company
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a
                href="#why"
                className="text-white hover:text-white/80 transition-colors"
                style={{ color: "#ffffff" }}
              >
                Why Us
              </a>
            </li>
            <li>
              <a
                href="#process"
                className="text-white hover:text-white/80 transition-colors"
                style={{ color: "#ffffff" }}
              >
                Process
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-white hover:text-white/80 transition-colors"
                style={{ color: "#ffffff" }}
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white hover:text-white/80 transition-colors"
                style={{ color: "#ffffff" }}
              >
                About
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3 text-sm" style={{ color: "#ffffff" }}>
            Connect
          </h4>
          <ul className="space-y-3 text-xs">
            <li>
              <a
                href="mailto:hello@designpi.com"
                className="flex items-center gap-2 hover:text-white/80 transition-colors"
                style={{ color: "#ffffff" }}
              >
                <Mail className="w-4 h-4" />
                hello@designpi.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/8801749196949"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white/80 transition-colors"
                style={{ color: "#ffffff" }}
              >
                <MessageCircle className="w-4 h-4" />
                +880 1749 196949
              </a>
            </li>
            <li>
              <a
                href="https://t.me/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white/80 transition-colors"
                style={{ color: "#ffffff" }}
              >
                <Send className="w-4 h-4" />
                Telegram
              </a>
            </li>
            <li>
              <a
                href="https://join.slack.com/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white/80 transition-colors"
                style={{ color: "#ffffff" }}
              >
                <MessageCircle className="w-4 h-4" />
                Slack
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-5 text-center text-xs text-white">
        © {new Date().getFullYear()} DesignPi. All rights reserved.
      </div>
    </footer>
  );
}
