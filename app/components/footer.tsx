import { Facebook, Instagram, Linkedin, X, Youtube } from 'react-feather';

export default function Footer() {
  return (
    <div className="py-20 px-16 space-y-10 w-full">
      <div className="flex gap-x-32 lg:flex-row flex-col">
        <div className="flex md:gap-x-10 gap-x-4">
          <img src="images/gdsc-logo-gray.png" className="h-7 mr-10" />
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
          <h4 className="font-medium max-md:mt-4">Subscribe</h4>
          <p>
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div className="flex gap-x-4">
            <input
              className="px-6 py-3 border border-black rounded-lg text-sm"
              placeholder="Enter your email"
            />
            <button className="px-6 py-3 border border-black rounded-lg text-sm
            hover:bg-gray-200 transform duration-300">
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
        <hr className="w-full border-t border-black" />
        <div className="flex-col md:flex-row flex text-sm justify-between items-center">
          <div className="flex gap-x-6">
            <p>© 2023 Google Developer Student Clubs. All rights reserved.</p>
            <a>Privacy Policy</a>
            <a>Terms of Service</a>
            <a>Cookies Settings</a>
          </div>

          <div className="flex gap-x-3 max-sm:mt-10">
            <Facebook className="h-6" />
            <Instagram className="h-6" />
            <X className="h-6" />
            <Linkedin className="h-6" />
            <Youtube className="h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
