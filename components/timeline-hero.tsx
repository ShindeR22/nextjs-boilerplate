import { motion } from "framer-motion";
import { RocketIcon } from "lucide-react";

// Timeline Hero component 
export default function TimelineHero() {
        return (
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 flex flex-col items-center justify-center text-center ">
                        <motion.div
                                className="flex items-center justify-center bg-gradient-to-r from-orange-400/20 to-purple-600/20 rounded-full p-3 mb-6"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                                <RocketIcon size={28} className="text-purple-500" />
                        </motion.div>

                        <motion.div
                                className="max-w-[90vw] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                                <h1 className="font-bold tracking-tight mb-4 sm:mb-6 lg:mb-8 leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-orange-400 to-purple-600 text-transparent bg-clip-text">
                                        RoadMap for HousingMantra
                                </h1>
                        </motion.div>

                        {/* <motion.p
                                className="text-zinc-400 max-w-xs sm:max-w-lg md:max-w-2xl mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg md:text-xl lg:text-2xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        >
                                From idea to innovation: The story of how Shutter Cloud is transforming photography management
                        </motion.p> */}
                </div>
        );
};


