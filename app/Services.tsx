// 데이터 가져오기
import { services } from "./Servicedata"; 

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
              className="bg-[#131313] border-2 border-[#222] rounded-2xl h-full px-6 py-10 flex flex-col gap-6 justify-center items-center text-center"
            >
              {/* 아이콘 원형 테두리 */}
              <div className="w-[42px] h-[42px] rounded-full border-2 border-white flex items-center justify-center text-white">
                {item.icon}
              </div>

              {/* 제목 */}
              <h3 className="text-[19.2px] font-semibold text-white leading-tight break-words">
                {item.title}
              </h3>

              {/* 설명 */}
              <p className="text-white text-base font-normal leading-relaxed max-w-[250px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}