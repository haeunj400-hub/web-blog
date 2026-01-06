import Services from "./Services" //Services.tsx 가져오기
import Keyprojects from "./Keyprojects"
import Contact from "./Contact"

export default function Home(){
  return(
    <> 
    {/*Introduce*/}
    <div className="flex min-h-screen items-center justify-center bg-background">
     <main className="flex min-h-screen flex-col items-center justify-between py-32 px-16">
      <div className="flex flex-col items-center py-32 px-32 space-y-6 text-center">
      <h1 className="text-5xl">Hi, I'm Haeun Cho - Web Developer In South Korea</h1>
      <h2 className="text-3xl mx-3">Computer Science Student</h2> 
      <p className="text-base mx-10 mb-10">I am a freelance web developer based in Delhi,<br/>specializing in responsive website design, custom web development, and SEO-optimized solutions.<br/>With expertise in Next.js, React, PHP, and WordPress, I help businesses in Delhi and beyond build high-performing, secure, and user-friendly websites.
        </p>
     </div>
   </main>
  </div>

  {/*Service*/}
  <Services />
  {/*KeyProjects*/}
  <Keyprojects />
   {/*Contact*/}
  <Contact />
</>
);
}

