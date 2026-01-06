export default function ContactSection() {
  return (
    <section className="bg-black px-4 py-5">
      {/* 어두운 박스 */}
      <div className="max-w-3xl mx-auto bg-[#131313] rounded-3xl p-8 md:p-6 text-center border-2 border-[#222]">
        
        {/* 텍스트 */}
        <h2 className="text-[18px] text-white font-light mb-2">
          Ready to start your custom web development project?
        </h2>
        <p className="text-[18px] text-white font-light mb-4 leading-snug">
          For a free consultation.
        </p>

        <div className="inline-block">
          <div className="bg-white text-black rounded-full px-8 py-2 text-[16px] font-light">
            Contact Dilip
          </div>
        </div>

      </div>
    </section>
  );
}