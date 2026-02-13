import React from "react";

function Mission() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Mission */}
        <div>
          <h3 className="text-3xl font-bold text-primary mb-6">Our Mission</h3>

          <p className="text-gray leading-relaxed mb-6">
            To empower businesses through intelligent digital strategies,
            performance marketing, and creative storytelling that drives
            sustainable growth.
          </p>

          <p className="text-gray leading-relaxed mb-6">
            We believe digital marketing should be transparent, measurable, and
            aligned with real business outcomes — not just impressions and
            engagement numbers.
          </p>

          <p className="text-gray leading-relaxed">
            Our approach combines data, creativity, and automation to build
            systems that continue generating value long after campaigns go live.
          </p>
        </div>

        {/* Vision */}
        <div>
          <h3 className="text-3xl font-bold text-primary mb-6">Our Vision</h3>

          <p className="text-gray leading-relaxed mb-6">
            A digital ecosystem where brands grow through trust, strategy, and
            meaningful audience connections.
          </p>

          <p className="text-gray leading-relaxed mb-6">
            We envision a future where businesses don’t rely on guesswork, but
            operate with clarity — backed by data-driven decisions, scalable
            funnels, and optimized digital infrastructure.
          </p>

          <p className="text-gray leading-relaxed">
            Master Media aims to be the partner that transforms ambitious ideas
            into profitable digital realities.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Mission;
