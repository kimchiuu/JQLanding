import React from 'react';

const Footer = () => (
  <footer className="sticky top-0 bg-gray-100 shadow">
    <div className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
      <div className="flex -mx-2">
        <div className="flex-1 px-3">
          <h2 className="text-lg font-semibold text-gray-700">Find Us</h2>
          <ul className="mt-4 leading-loose">
            <li>
              <a href="https://www.linkedin.com/company/janusql" className="text-primary-biolinks">Linkedin</a>
            </li>
            <li>
              <a href="https://github.com/oslabs-beta/janusql" className="text-primary-biolinks">GitHub</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 px-3">
          <p className="mt-5" className="text-primary-biolinks">Copyright © 2021 JanusQL. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
