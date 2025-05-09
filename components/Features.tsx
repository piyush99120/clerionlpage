export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16 mb-20">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-indigo-600">One Stop Solution for the Accounting & Taxation Services</h2>
            <p className="text-indigo-900/70 text-lg leading-relaxed">
            CLERION is a technology backed-up Accounting and Legal Service Firm providing the Services for the Small Businesses, Start-up Firms, Large Businesses and Corporate Companies across India and USA.
            </p>
            <div className="mt-8 space-y-4">
              {['Real-time Updates', 'Automated Calculations', 'Custom Reports'].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="h-6 w-6 rounded-full bg-indigo-600 flex items-center justify-center">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-indigo-900/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 animate-float">
            <div className="bg-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300 border border-indigo-100">
              <img 
                src="/Group 9.png" 
                alt="Accounting and Taxation Services" 
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}