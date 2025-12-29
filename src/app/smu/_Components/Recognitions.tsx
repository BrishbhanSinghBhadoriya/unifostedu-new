import { optimizeCloudinary } from '@/utils/cloudinary';
import React from 'react';
import Image from 'next/image';
import { OpenModalState } from 'types/Modal';

type IntroducationProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<OpenModalState>>;
};

const Recognitions: React.FC<IntroducationProps> = ({ setOpenModal }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-50 to-blue-50">
      
      {/* FEATURES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: '⏱️',
              title: 'Flexible Learning',
              description: 'Learn at your own pace with recorded lectures and live sessions',
            },
            {
              icon: '🏆',
              title: 'UGC Approved',
              description: 'Globally recognized degrees with UGC entitlement',
            },
            {
              icon: '💼',
              title: 'Career Support',
              description: 'Comprehensive placement assistance and career guidance',
            },
            {
              icon: '💰',
              title: 'Affordable Education',
              description: 'Quality education at competitive fee structures',
            },
          ].map((feature, i) => (
            <div key={i} className="group text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-[#f26722] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="text-center mt-12">
          <button
            onClick={() => setOpenModal({ type: 'enquire' })}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all"
          >
            Enquire Now
          </button>
        </div>
      </div>

      {/* RECOGNITIONS */}
      <section id="recognitions" className="py-16 bg-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Recognitions &{' '}
              <span className="bg-gradient-to-r from-orange-500 to-[#f26722] bg-clip-text text-transparent">
                Accreditations
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognized by leading accreditation bodies and regulatory authorities in India
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp', title: 'UGC Approved' },
              { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/aicte_ipdzee.webp', title: 'AICTE Recognized' },
              { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1763124771/NAAC-A_g3pb34.webp', title: 'NAAC A+' },
              { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327720/nirf_f5xen9.webp', title: 'NIRF Ranked' },
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="bg-white border rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6">
                  <Image
                    src={optimizeCloudinary(item.img)}
                    alt={item.title}
                    width={200}
                    height={120}
                    className="mx-auto object-contain h-20"
                  />
                  <p className="text-sm font-medium text-center mt-4">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Recognitions;
