"use client"
export default function Home() {
  return (
    <>
      <section style={{ background: "#1A3A5C" }} className="text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Arklow's Trusted Bike Shop & Repair Experts</h1>
          <p className="text-xl mb-10 opacity-90">Sales, repairs, and servicing for all bikes. Official BERG dealer. Fast, friendly, local.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0858712671" style={{ background: "#E87722" }} className="text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition">
              Book Repair Now
            </a>
            <a href="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition">
              View Our Bikes
            </a>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#1A3A5C" }}>What We Do</h2>
          <p className="text-gray-600 text-center text-lg mb-12 max-w-2xl mx-auto">From punctures to full servicing, we fix it all. Plus a great range of new bikes in stock.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6 border-t-4" style={{ borderColor: "#E87722" }}>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#1A3A5C" }}>Expert Bike Repairs</h3>
          <p className="text-gray-600 text-sm">tyres, brakes, gears, chains, and more</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border-t-4" style={{ borderColor: "#E87722" }}>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#1A3A5C" }}>Tyre Fitting While You Wait</h3>
          <p className="text-gray-600 text-sm">quick, reliable, professional</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border-t-4" style={{ borderColor: "#E87722" }}>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#1A3A5C" }}>Full Bike Servicing</h3>
          <p className="text-gray-600 text-sm">keep your bike in top condition</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border-t-4" style={{ borderColor: "#E87722" }}>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#1A3A5C" }}>Kids Bikes</h3>
          <p className="text-gray-600 text-sm">perfect first bikes for ages 3–12</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border-t-4" style={{ borderColor: "#E87722" }}>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#1A3A5C" }}>Wide Range In Stock</h3>
          <p className="text-gray-600 text-sm">road bikes, mountain bikes, and hybrids</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border-t-4" style={{ borderColor: "#E87722" }}>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#1A3A5C" }}>Official BERG Dealer</h3>
          <p className="text-gray-600 text-sm">quality bikes you can trust</p>
        </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4" style={{ background: "#FFFFFF" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#1A3A5C" }}>About Joe's Bike Shop</h2>
          <p className="text-gray-700 text-lg leading-relaxed">We're a family-run bike shop right here in Arklow, Wicklow, serving the community with honest repairs and expert advice. Whether you need a quick fix or a complete overhaul, Joe and the team are here to help — no job too small. We stock a wide range of bikes for all ages and abilities, and we're proud to be an official BERG dealer.</p>
          <a href="/about" className="inline-block mt-8 px-6 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition" style={{ background: "#E87722" }}>Learn More</a>
        </div>
      </section>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#1A3A5C" }}>What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-700 italic mb-3">⭐⭐⭐⭐⭐ "Brilliant service. Joe knows his bikes inside out and always gets the work done on time. Highly recommend."</p>
          <p className="font-semibold text-sm" style={{ color: "#E87722" }}>— Local Cyclist</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-700 italic mb-3">⭐⭐⭐⭐⭐ "Took my son to get his first proper bike. The team were brilliant with him — patient, helpful, and found him the perfect one."</p>
          <p className="font-semibold text-sm" style={{ color: "#E87722" }}>— Parent</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-700 italic mb-3">⭐⭐⭐⭐⭐ "Fast turnaround on repairs and fair prices. This is your local bike shop — support them!"</p>
          <p className="font-semibold text-sm" style={{ color: "#E87722" }}>— Community Member</p>
        </div>
          </div>
        </div>
      </section>
      <section style={{ background: "#E87722" }} className="py-16 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">Give us a call or drop us a message — we'll get back to you fast.</p>
          <a href="tel:0858712671" className="bg-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition" style={{ color: "#E87722" }}>
            Call 085 871 2671
          </a>
        </div>
      </section>
    </>
  )
}