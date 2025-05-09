export default function LoginTypes() {
  const loginTypes = [
    {
      title: 'Client Login',
      description: 'For end-users to access their invoices and account data.',
      icon: '👤'
    },
    {
      title: 'Practitioner Login',
      description: 'For accounting professionals to manage multiple client accounts.',
      icon: '👥'
    },
    {
      title: 'Super Admin Login',
      description: 'Full-access login for administrative and configuration control.',
      icon: '⚡'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-white to-indigo-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-indigo-600">Access Levels</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {loginTypes.map((type, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-indigo-100
              hover:shadow-2xl hover:scale-105 transition-all duration-300
              animate-slide-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="text-4xl mb-4">{type.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-800">{type.title}</h3>
              <p className="text-indigo-900/70">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}