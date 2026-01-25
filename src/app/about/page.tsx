// app/page.tsx
import React from 'react';
import About from '@/src/_components/Intro';
import Timeline from '@/src/_components/TimeLine';
import Moreproject from '@/src/_components/moreproject';


export default function TimelinePage() {
  return (
    <main className="bg-black min-h-screen">
      <About />
      <Timeline />
      <Moreproject/>
      </main>
  );
}