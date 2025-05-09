export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#0077BE] via-[#005B8E] to-[#004A73] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 animate-slide-in">
            <img 
              src="/clerion-logo.png" 
              alt="Clerion Accounting" 
              width={700}
              height={350}
              className="w-auto h-64 mx-auto mb-8 hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h1 className="text-6xl font-bold mb-6 animate-slide-in">
            Where Finance Meets
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-[#89CFF0]">
              Simplicity
            </span>
          </h1>
          <p className="text-xl mb-12 opacity-90 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Clerion is a powerful web-based accounting platform designed to simplify financial management 
            for businesses, practitioners, and administrators. From reporting to billing management, 
            Clerion brings everything under one roof.
          </p>
          <button className="bg-white text-[#0077BE] px-8 py-4 rounded-full font-semibold text-lg
            hover:bg-[#E6F3FA] transform hover:scale-105 transition-all duration-300 shadow-lg
            animate-slide-in" style={{ animationDelay: '0.4s' }}>
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}