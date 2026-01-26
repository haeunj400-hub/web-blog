import ServicesSection from "@/src/_components/servicesSection";
import ProjectsSection from "@/src/_components/projects/ProjectsSection";
import CustomWhiteButton from "@/src/_components/CustomWhiteButton";

export default function Home(){
  return(
    <div className="flex min-h-screen items-center justify-center bg-background">
     <main className="flex min-h-screen flex-col items-center justify-between py-32 px-16">
      <div className="flex flex-col items-center py-16 px-32 space-y-6 text-center">
      <h1 className="text-5xl">Hi, I'm Haeun Cho - Web Developer In South Korea</h1>
      <h2 className="text-3xl mx-3">Computer Science Student</h2> 
      <p className="text-base mx-10 mb-10">I'm studying about web developemt,<br/>specializing in website design, custom web development.<br/>With expertise in Next.js, React, PHP, and WordPress, I help businesses in Delhi and beyond build high-performing, secure, and user-friendly websites.
        </p>
     </div>
 <ServicesSection/>
        <ProjectsSection/>
        <div className="flex flex-col items-center justify-center my-14 p-2 space-y-3 border border-neutral-800 rounded-lg bg-neutral-900 w-6/11 h-40">
          <p className="text-lg font-thin text-white text-center"> Ready to start your custom web development project? <br/> For a free consultation. </p>
          <CustomWhiteButton text="Contact Haeun"/>
        </div>
      </main>
    </div>
  );
}
