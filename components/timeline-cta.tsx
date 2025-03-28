import { motion } from "framer-motion";
// import { RainbowButton } from "../magicui/rainbow-button";
import { openStudioInNewTab } from "@/lib/utils";
import { RainbowButton } from "./magicui/rainbow-button";
import Link from "next/link";

export default function TimelineCta() {
        return (
                <section className="w-full py-16 md:py-24 overflow-hidden relative">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                                <motion.div
                                        className="max-w-4xl mx-auto text-center"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                >
                                        {/* Background gradient */}
                                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-orange-400/20 via-purple-500/10 to-transparent blur-3xl -z-10" />
                                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-purple-600/20 via-purple-500/10 to-transparent blur-3xl -z-10" />
                                        {/* 
                                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">
                                                Be Part of Our Journey
                                        </h2> */}
                                        <div className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
                                                <Link href="https://leoapex.com/" legacyBehavior>
                                                        <a target="_blank" rel="noopener noreferrer">With ❤️ Leoapex</a>
                                                </Link>
                                        </div>

                                        {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                                                <RainbowButton
                                                        onClick={openStudioInNewTab}
                                                        className="dark:border-zinc-800/50 text-white dark:bg-zinc-900/90 shadow-lg hover:shadow-xl py-3 px-8"
                                                >
                                                        <div>Try Shutter Cloud Free</div>
                                                </RainbowButton>
                                        </div>

                                        <p className="text-zinc-500 text-sm mt-6">
                                                No credit card required. Cancel anytime.
                                        </p> */}
                                </motion.div>
                        </div >

                        {/* Decorative elements */}
                        < div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl opacity-20 pointer-events-none" />
                        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl opacity-20 pointer-events-none" />
                </section >
        );
};