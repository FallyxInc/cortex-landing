const ProductCard = ({ title, description, features, icon }) => {
  return (
    <div className="bg-linear-to-br from-[#0066ff]/5 to-[#00d4ff]/3 border border-[#00d4ff]/20 rounded-2xl p-6 md:p-8 pb-8 md:pb-10 flex flex-col h-full hover-glow hover-lift transition-all duration-300">
      <div className="w-full  bg-linear-to-br from-[#0066ff]/20 to-[#00d4ff]/10 border-2 border-[#00d4ff]/30 rounded-2xl flex items-center justify-center text-6xl md:text-7xl relative overflow-hidden mb-6  transition-all duration-300">
        <div className="product-visual-rotate"></div>
        <span className="relative z-10">{icon}</span>
      </div>
      <h2 className="text-2xl font-extrabold mb-4" >{title}</h2>
      <p className="text-sm md:text-base leading-relaxed text-white/70 mb-6 grow">{description}</p>
      <div className="flex flex-col gap-3">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3 p-3 bg-[#00d4ff]/5 border-l-[3px] border-[#00d4ff] rounded-lg hover-brighten transition-all duration-300 hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]">
            <span className="text-lg md:text-xl hover-scale transition-transform duration-300">{feature.icon}</span>
            <div className="text-xs md:text-sm">
              <strong>{feature.title}</strong> - {feature.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const Products = () => {
  const products = [
    {
      title: 'Wearable Sensors',
      description: 'Our advanced waist-worn sensors provide continuous monitoring with industry-leading accuracy. Combining accelerometers, gyroscopes, and location tracking, our sensors detect falls with 99.8% accuracy.',
      icon: '⌚',
      features: [
        { icon: '⚡', title: '50Hz Sampling Rate', desc: 'Real-time motion detection' },
        { icon: '🔋', title: '7-Day Battery Life', desc: 'Minimal charging interruptions' },
        { icon: '📍', title: '±0.5m Location Accuracy', desc: 'Precise positioning' }
      ]
    },
    {
      title: 'Glenn AI Assistant',
      description: 'Glenn is more than a voice assistant—it\'s a comprehensive AI companion that understands senior needs. With natural language processing and healthcare-specific training, Glenn provides 24/7 intelligent support.',
      icon: '🎙️',
      features: [
        { icon: '💬', title: '<200ms Response Time', desc: 'Instant interaction' },
        { icon: '🌍', title: '12 Languages', desc: 'Multilingual support' },
        { icon: '🎯', title: '95% Intent Accuracy', desc: 'Understands context' }
      ]
    },
    {
      title: 'EHR Integration',
      description: 'Seamless integration with PointClickCare and major EHR systems. Our platform aggregates data from medical records, providing comprehensive health insights and predictive analytics.',
      icon: '🏥',
      features: [
        { icon: '🔒', title: 'HIPAA Compliant', desc: 'Enterprise-grade security' },
        { icon: '⚡', title: '<2s Data Latency', desc: 'Real-time synchronization' },
        { icon: '🔄', title: '99.9% Uptime', desc: 'Always available' }
      ]
    }
  ]

  return (
    <section id="products" className="relative flex min-h-screen w-full flex-col items-center justify-center gap-8 overflow-hidden px-4">

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        
        <h2 className="animate-on-scroll text-5xl font-black leading-tight text-center w-full pb-8"
          >The Solution</h2>
        <div className="bg-linear-to-br from-[#0066ff]/10 to-[#00d4ff]/5 border-2 border-[#00d4ff]/30 rounded-3xl p-6 animate-on-scroll hover-lift transition-all duration-300">
          
          <h3 className="animate-on-scroll text-3xl leading-tight font-extrabold md:mb-6 text-center" style={{ animationDelay: "0.2s" }}>
            Cortex
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products

