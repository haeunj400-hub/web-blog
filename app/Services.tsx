// app/components/Services.tsx
import { services } from "./data"; // 재료 가져오기

export default function Services() {
  return (
    <section className="bg-black px-4 py-20">
      <div className="max-w-[1400px] mx-auto">
        
        {/* 제목 */}
        <h2 className="text-[48px] text-white font-thin mb-6 text-left pl-2">
          Services</h2>

        {/* 5개 칸 배치 */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {services.map((item, index) => (
            <div 
              key={index}
              className="bg-[#131313] border border-[#222] rounded-2xl p-6 flex flex-col items-center text-center"
            >
              {/* 아이콘 원형 테두리 */}
              <div className="w-[42px] h-[42px] rounded-full border border-white flex items-center justify-center mb-6 text-white">
                {item.icon}
              </div>

              {/* 제목 */}
              <h3 className="text-[19.2px] font-semibold text-white mb-4 leading-tight">
                {item.title}
              </h3>

              {/* 설명 */}
              <p className="text-white text-base font-normal leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}