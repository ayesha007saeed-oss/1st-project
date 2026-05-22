import React from 'react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50 dark:bg-gray-900 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Client Testimonials</h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border dark:border-gray-700 max-w-md">
            <p className="text-gray-600 dark:text-gray-300 italic mb-4">"The logic is very direct and the code is extremely easy to read. Highly recommended!"</p>
            <h4 className="font-bold">- Client A</h4>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border dark:border-gray-700 max-w-md">
            <p className="text-gray-600 dark:text-gray-300 italic mb-4">"Great experience. The UI components are beautifully animated and fully responsive."</p>
            <h4 className="font-bold">- Client B</h4>
          </div>
        </div>
      </div>
    </section>
  );
}