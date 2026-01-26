import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6"; //npm install react-icons로 설치해주세용
import Link from "next/link"; //서비스 내 페이지로 이동시 빠른 이동을 지원하는 <Link>컴포넌트
export default function Footer() {
  return (//p:패딩,border-t:위쪽테두리(테두리색설정),첫번째 div(flexbox):반응형
    <footer className="w-full py-16 px-8 pt-[60px] border-t border-white"> 
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        
        {/* 왼쪽 섹션 */}
        <div className="w-[370px] h-[191px] flex flex-col max-w-sm"> 
          {/* 자기소개 문구.leading:줄간격 넉넉하게 */} 
          <p className="text-[16px] font-light leading-relaxed">
            Haeun Cho is an experienced web developer in Korea, 
            specializing in responsive, user-friendly websites and 
            custom solutions to grow your business. Contact today.
          </p>

          {/* 소셜 아이콘.cusor-pointer:마우스커서올리면 손가락모양으로 경*/}
          <div className="flex gap-4 mt-15">
            <a href="https://github.com/taco362" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-[20px] h-[20px] hover:text-white cursor-pointer" /></a>
            <FaLinkedin className="w-[20px] h-[20px] cursor-pointer" />
            <FaXTwitter className="w-[20px] h-[20px] cursor-pointer" />
            <FaEnvelope className="w-[20px] h-[20px] cursor-pointer" />
          </div>
        </div>

        {/* 오른쪽 섹션 */}
        <div className="flex flex-1 justify-between max-w-xl">
          {/* Site Link(내부 링크들) */}
          <div className="flex flex-col space-y-4">
            <h3 className="mb-[20px] text-[18px] font-normal">Site Link</h3>
            <ul className="flex flex-col space-y-2 text-center text-[16px] font-light">
             <li className="cursor-default">Portfolio</li>
              <li className="cursor-default">About</li>
              <li className="cursor-default">Contact</li>
              <li className="cursor-default">Resume</li>
            </ul>
          </div>
          {/* 외부링크들(1).target="_blank":새 탭에서 열기,rel="noopener noreferrer":보안 옵션(원본 페이지 접근 차단)*/}
          <div className="flex flex-col space-y-4">
            <h3 className="mb-[20px] text-[18px] font-normal">What is this song?</h3>
            <ul className="flex flex-col space-y-2 text-center text-[16px] font-light">
                <li>
                <a href="https://youtu.be/UM9XNpgrqVk?si=j7TKRQt23Cg74pgc" target="_blank" rel="noopener noreferrer">
                  Kaiju no hanata
                </a>
              </li>
              <li>
                <a href="https://youtu.be/s4jHQXd-7gg?si=rayFZwqQh1Kx4_2P" target="_blank" rel="noopener noreferrer">
                  Kidult
                </a>
              </li>
              <li>
                <a href="https://youtu.be/7q9Ubv3othc?si=zMK1wMLnmWOrpEc5" target="_blank" rel="noopener noreferrer">
                  To you
                </a>
              </li>
              <li>
                <a href="https://youtu.be/vvN4FgqNXwE?si=eBbktLwCJ9vnYSrj" target="_blank" rel="noopener noreferrer">
                  이마세카
                </a>
              </li>
              <li>
                <a href="https://youtu.be/MUbaO277HNo?si=lf8TKENJm9QvPxG9" target="_blank" rel="noopener noreferrer">
                  Cheerful vibes echo
                </a>
              </li>
            </ul>
          </div>
          {/* 외부링크들(2)*/}
          <div className="flex flex-col space-y-4">
            <h3 className="mb-[20px] text-[18px] font-normal">Anime Watchlist</h3>
            <ul className="flex flex-col space-y-2 text-center text-[16px] font-light">
                <li>
                <a href="https://namu.wiki/w/%EC%98%A4%EB%8A%98%EB%B6%80%ED%84%B0%20%EC%8B%A0%EB%A0%B9%EB%8B%98" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  오늘부터 신령님
                </a>
              </li>
              <li>
                <a href="https://namu.wiki/w/%ED%98%B8%EB%A6%AC%EB%AF%B8%EC%95%BC(TVA)" target="_blank" rel="noopener noreferrer">
                  호리미야
                </a>
              </li>
              <li>
                <a href="https://namu.wiki/w/%EC%95%BC%EB%A7%88%EB%8B%A4%20%EA%B5%B0%EA%B3%BC%20Lv999%EC%9D%98%20%EC%82%AC%EB%9E%91%EC%9D%84%20%ED%95%98%EB%8B%A4/%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98" target="_blank" rel="noopener noreferrer">
                  야마다군과 Lv 999의 사랑을 하다
                </a>
              </li>
              <li>
                <a href="https://namu.wiki/w/%EC%98%A4%EB%9E%80%EA%B3%A0%EA%B5%90%20%EC%82%AC%EA%B5%90%ED%81%B4%EB%9F%BD" target="_blank" rel="noopener noreferrer">
                  오란고교 사교클럽
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-8 flex justify-between items-center text-sm font-light">
        <p>© 2026 Haeun Cho. All rights reserved.</p>
        <p>Last updated by Haeun on 26 January, 2026 at 7:04 PM UTC 09:00</p>
      </div>
    </footer>
  );
}