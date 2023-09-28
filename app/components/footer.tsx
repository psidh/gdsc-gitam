import { Facebook, Instagram, Linkedin, X, Youtube } from "react-feather";

export default function Footer() {
  return (
    <div className="py-20 px-16 space-y-10 w-full">
      <div className="flex gap-x-32">
        <div className="flex gap-x-10 shrink-0">
          <img src="images/gdsc-logo-gray.png" className="h-7 mr-14" />
          <div>
            <h4>Useful Links</h4>
          </div>
          <div>
            <h4>Join GDSC</h4>
          </div>
          <div>
            <h4>Sponsors</h4>
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="font-medium">Subscribe</h4>
          <p>
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div className="flex gap-x-4">
            <input
              className="px-6 py-3 border border-black rounded-lg text-sm"
              placeholder="Enter your email"
            />
            <button className="px-6 py-3 border border-black rounded-lg text-sm">
              Subscribe
            </button>
          </div>
          <p>
            By subscribing you agree to with our Privacy Policy and provide
            consent to receive updates from us.
          </p>
        </div>
      </div>
      <div className="space-y-8">
        <div className="w-full h-[1px] bg-black" />
        <div className="flex text-sm justify-between">
          <div className="flex gap-x-6">
            <p>© 2023 Google Developer Student Clubs. All rights reserved.</p>
            <a>Privacy Policy</a>
            <a>Terms of Service</a>
            <a>Cookies Settings</a>
          </div>
          <div className="flex gap-x-3">
            <Facebook className="h-5" />
            <Instagram className="h-5" />
            <X className="h-5" />
            <Linkedin className="h-5" />
            <Youtube className="h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
