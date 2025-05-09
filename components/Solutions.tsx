export default function Solutions() {
  const solutions = [
    {
      title: 'Multi-Company & Branch Handling',
      icon: '🏢',
      color: 'from-indigo-600 to-indigo-400'
    },
    {
      title: 'Customer & Supplier Management',
      icon: '🤝',
      color: 'from-indigo-700 to-indigo-500'
    },
    {
      title: 'Sales, Invoicing, and Returns',
      icon: '📊',
      color: 'from-indigo-800 to-indigo-600'
    },
    {
      title: 'Tax Management',
      icon: '💰',
      color: 'from-indigo-600 to-indigo-400'
    },
    {
      title: 'Automated Reports & Analysis',
      icon: '📈',
      color: 'from-indigo-700 to-indigo-500'
    },
    {
      title: 'Centralized Store & Stock Groups',
      icon: '🏪',
      color: 'from-indigo-800 to-indigo-600'
    },
    {
      title: 'Email/SMS Reminders',
      icon: '📱',
      color: 'from-indigo-600 to-indigo-400'
    },
    {
      title: 'Import/Export & Backup Support',
      icon: '💾',
      color: 'from-indigo-700 to-indigo-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-indigo-600 animate-slide-in">
          What Clerion Solves
        </h2>
        <p className="text-indigo-900/70 text-center mb-16 max-w-2xl mx-auto text-lg animate-slide-in" 
           style={{ animationDelay: '0.2s' }}>
          Comprehensive solutions for all your business accounting needs
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl 
                       transform hover:-translate-y-2 transition-all duration-300
                       animate-slide-in overflow-hidden relative border border-indigo-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} 
                            opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {solution.icon}
              </div>
              
              <p className="text-indigo-900 font-semibold text-lg group-hover:text-indigo-600 
                          transition-colors duration-300">
                {solution.title}
              </p>
              
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 
                          transform translate-x-full group-hover:translate-x-0 
                          transition-all duration-300">
                <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}