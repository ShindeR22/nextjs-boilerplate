"use client";

import React from 'react';
import { cn } from '@/lib/utils';
// import { BackgroundLines } from '@/components/ui/background-lines';
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import TimelineHero from './timeline-hero';
import CompanyTimeline from './company-timeline';
import TimelineCta from './timeline-cta';
import { BackgroundLines } from './ui/background-lines';

export default function TimelinePage() {
        return (
                <main>
                        {/* Hero Section */}
                        <section className="relative w-full min-h-[30vh] flex items-center justify-center overflow-hidden">
                                {/* Background elements */}
                                <BackgroundLines className='dark:bg-transparent absolute inset-0 z-0'>
                                        <AnimatedGridPattern
                                                numSquares={30}
                                                maxOpacity={0.1}
                                                duration={3}
                                                repeatDelay={1}
                                                className={cn(
                                                        "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
                                                        "absolute inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 z-0",
                                                )}
                                        />
                                </BackgroundLines>

                                {/* Hero content container */}
                                <TimelineHero />
                        </section>

                        {/* Main Timeline Section */}
                        <CompanyTimeline />

                        {/* CTA Section */}
                        <TimelineCta />
                </main>
        );
}