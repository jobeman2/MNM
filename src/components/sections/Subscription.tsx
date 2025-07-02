'use client';

import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: 2999,
    regular: 3999,
    save: '25%',
    features: [true, true, false, false],
    highlight: false,
  },
  {
    name: 'Pro',
    price: 7499,
    regular: 9999,
    save: '30%',
    features: [true, true, true, false],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 12499,
    regular: 18999,
    save: '35%',
    features: [true, true, true, true],
    highlight: false,
  },
];

const features = [
  'Custom RBT Code Setup',
  'Free Voice/Data Incentives',
  'Monthly Campaign Analytics',
  'Dedicated Account Manager',
];

export default function PricingSection() {
  return (
    <section className="py-20 px-4 md:px-10 bg-[#f4f7ff] font-dm text-[#0f172a]">
      <div className="max-w-6xl mx-auto text-center">
        <p className="uppercase text-sm font-semibold text-gray-600">
          Transparent Pricing
        </p>
        <h2 className="text-3xl my-3">Flexible Plans for Every Brand</h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-12">
          Reach customers with audio ads. Only pay per subscriber + per listen. Plans built for impact.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const isCenter = plan.highlight;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: isCenter ? 0.95 : 1 }}
                whileInView={{ opacity: 1, y: 0, scale: isCenter ? 1.05 : 1 }}
                whileHover={{ scale: isCenter ? 1.1 : 1.03 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 200,
                  damping: 15,
                }}
                viewport={{ once: true }}
                className={`rounded-2xl px-6 pt-8 pb-10 text-left shadow-md cursor-pointer min-h-[480px] ${
                  isCenter
                    ? 'bg-white text-[#0f172a] border-[3px] border-[#d9f28e] z-10 relative'
                    : 'bg-white text-black'
                }`}
                style={{
                  boxShadow: isCenter
                    ? '0 20px 30px rgba(30, 80, 0, 0.2)'
                    : '0 8px 15px rgba(0, 0, 0, 0.1)',
                }}
              >
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="text-sm text-gray-600">
                  Renews at {plan.regular} ETB/month
                </p>
                <div className="text-4xl font-bold my-4">{plan.price} ETB</div>
                <div className="text-sm font-medium bg-[#e9f7b9] text-[#6a8a00] rounded-full px-3 py-1 w-fit mb-6">
                  Save {plan.save}
                </div>

                <p className="text-sm mb-6">
                  Activate your audience with custom tones and trackable results.
                </p>

                <ul className="space-y-3 mb-8">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      {plan.features[i] ? (
                        <Check className="w-5 h-5 text-[#7dbb1f]" />
                      ) : (
                        <X className="w-5 h-5 text-gray-400" />
                      )}
                      <span
                        className={
                          !plan.features[i] && isCenter
                            ? 'text-[#a1c973] line-through'
                            : ''
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    isCenter
                      ? 'bg-[#0f172a] text-[#d9f28e] hover:bg-gray-900'
                      : 'bg-[#CEF14B] text-[#0f172a] hover:bg-[#b8dd38]'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
