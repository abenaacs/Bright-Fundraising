import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h4 className="text-xl font-semibold text-orange-500 mb-4">About Bright Fundraising</h4>
                        <p className="text-sm">We help individuals and organizations raise funds for causes that matter. Join us in creating a brighter future.</p>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h4 className="text-xl font-semibold text-orange-500 mb-4">Quick Links</h4>
                        <ul className="text-sm space-y-2">
                            <li><a href="/about" className="hover:text-orange-500">About Us</a></li>
                            <li><a href="/how-it-works" className="hover:text-orange-500">How It Works</a></li>
                            <li><a href="/donate" className="hover:text-orange-500">Donate Now</a></li>
                            <li><a href="/contact" className="hover:text-orange-500">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Us Section */}
                    <div>
                        <h4 className="text-xl font-semibold text-orange-500 mb-4">Contact Us</h4>
                        <p className="text-sm">Email: support@brightfundraising.com</p>
                        <p className="text-sm">Phone: (123) 456-7890</p>
                        <p className="text-sm">Address: 123 Bright Street, City, Country</p>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <h4 className="text-xl font-semibold text-orange-500 mb-4">Follow Us</h4>
                        <ul className="space-y-2">
                            <li><a href="https://facebook.com/brightfundraising" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">Facebook</a></li>
                            <li><a href="https://twitter.com/brightfundraising" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">Twitter</a></li>
                            <li><a href="https://instagram.com/brightfundraising" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">Instagram</a></li>
                            <li><a href="https://linkedin.com/company/brightfundraising" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center mt-12 border-t border-gray-700 pt-6">
                    <p className="text-sm">&copy; 2025 Bright Fundraising. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
