import React from 'react'

function hero() {
  return (
    <div>
      
    <main className="relative pt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Top Banner */}
        <div className="text-center mb-12">
          <span className="bg-orange-50 text-orange-700 px-6 py-2 rounded-full text-sm font-medium inline-block">
            Join over 100,000 happy creators
          </span>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-[4rem] leading-tight font-bold mb-8 tracking-tight">
            Engage Audiences<br />with Stunning Projects
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Boost Your Brand with High-Impact Projects from our expert content creators. Our team is ready to propel your business forward
          </p>
        </div>
      </div>
    </main>
    </div>
  )
}

export default hero
