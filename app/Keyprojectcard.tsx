import Image from "next/image";

// 받아야 할 data type
interface ProjectCardProps {
  image: string;
  title: string;
  desc: string;
}

export default function ProjectCard({ image, title, desc }: ProjectCardProps) {
  return (
    <div className="bg-[#131313] rounded-2xl overflow-hidden border-2 border-[#222] h-full flex flex-col">
      {/* 이미지 */}
      <div className="relative h-64 w-full flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          unoptimized // 외부 이미지 사용 시 필요
        />
      </div>

      {/* 텍스트 영역 */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-[22.4px] font-semibold text-white mb-4">{title}</h3>
        <p className="text-[#BBBBBB] text-[16px] mb-6 leading-relaxed line-clamp-3">
          {desc}
        </p>

        {/* 버튼 모양 */}
        <div className="mt-auto inline-block border border-white text-white py-2 px-5 rounded-full text-sm w-fit">
          View Project
        </div>
      </div>
    </div>
  );
}