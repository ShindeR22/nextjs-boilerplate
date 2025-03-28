import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CheckCircle, Circle, Clock } from "lucide-react";
import { TracingBeam } from "./ui/tracing-beam";
// import { TracingBeam } from "../ui/tracing-beam";

// Timeline milestones data
const timelineData = [
        {
                date: "April 2025",
                title: "Geo Location Based Suggestions",
                description:
                        "Implement geolocation to suggest properties based on the user's current location. (Estimated Time: 1 Week)",
                status: "upcoming",
                icon: "location",
        },
        {
                date: "May 2025",
                title: "Plot, Villa, Office, Simplex, Duplex, Shop Listing",
                description:
                        "Create listing pages for various property types with clear categorization. (Estimated Time: 5-6 Weeks)",
                status: "upcoming",
                icon: "list",
        },
        {
                date: "June 2025",
                title: "Tower Listing",
                description:
                        "Display and manage tower-specific listings within the platform. (Estimated Time: 1 Week)",
                status: "upcoming",
                icon: "tower",
        },
        {
                date: "June 2025",
                title: "Search V2",
                description:
                        "Develop an advanced search with filters, sorting, and improved user experience. (Estimated Time: 2 Weeks)",
                status: "upcoming",
                icon: "search",
        },
        {
                date: "July 2025",
                title: "Cost Optimization",
                description:
                        "Refactor code and optimize infrastructure to reduce costs. (Estimated Time: 2 Weeks)",
                status: "upcoming",
                icon: "optimization",
        },
        {
                date: "July 2025",
                title: "Mobile Optimization",
                description:
                        "Optimize the website's design and performance for mobile devices. (Estimated Time: 4 Weeks)",
                status: "upcoming",
                icon: "mobile-opt",
        },
        {
                date: "August 2025",
                title: "Role Based Access to Features",
                description:
                        "Implement authentication and authorization to manage feature access based on user roles. (Estimated Time: 2 Weeks)",
                status: "upcoming",
                icon: "access",
        },
        {
                date: "September 2025",
                title: "Agent Panel",
                description:
                        "Create a panel for agents to manage listings and interact with potential clients. (Estimated Time: 2 Weeks)",
                status: "upcoming",
                icon: "agent",
        },
        {
                date: "October 2025",
                title: "Admin - CRM",
                description:
                        "Develop a comprehensive CRM and admin dashboard to manage overall operations. (Estimated Time: 2 Weeks)",
                status: "upcoming",
                icon: "admin",
        },
        {
                date: "November 2025",
                title: "Improved Site Map",
                description:
                        "Enhance the sitemap generation for better SEO and indexing. (Estimated Time: 1 Week)",
                status: "upcoming",
                icon: "sitemap",
        },
        {
                date: "November 2025",
                title: "Analytics and Stats",
                description:
                        "Implement tracking and analytics for user behavior and site performance. (Estimated Time: 1 Week)",
                status: "upcoming",
                icon: "analytics",
        },
        {
                date: "November 2026",
                title: "Sell Property",
                description:
                        "Add functionality for users and agents to list properties for sale. (Estimated Time: 2 Weeks)",
                status: "upcoming",
                icon: "sell",
        },
        {
                date: "December 2026",
                title: "UI v2",
                description:
                        "Revamp the user interface for improved aesthetics and usability. (Estimated Time: 2 Weeks)",
                status: "upcoming",
                icon: "ui",
        },
        {
                date: "January 2026",
                title: "Faster Google Indexing",
                description:
                        "Apply SEO best practices to improve the speed at which Google indexes the site. (Estimated Time: 1 Week)",
                status: "upcoming",
                icon: "seo",
        },
        {
                date: "January 2026",
                title: "Mobile App",
                description:
                        "Develop an MVP mobile app to access core features such as search and listings. (Estimated Time: 6 Weeks)",
                status: "upcoming",
                icon: "mobile-app",
        },
        {
                date: "February 2026",
                title: "Custom AI Model (Housing Mantra GPT)",
                description:
                        "Integrate a custom AI model to provide smart recommendations and support. (Estimated Time: 4 Weeks)",
                status: "upcoming",
                icon: "ai",
        },
        {
                date: "Future",
                title: "Future Planning",
                description: "Future Planning.....",
                status: "upcoming",
                icon: "future",
        }
];






// Main Timeline component
export default function CompanyTimeline() {
        return (
                <section className="w-full py-16 md:py-24" >
                        <TracingBeam>
                                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                                        {/* Timeline */}
                                        <div className="max-w-4xl mx-auto relative">
                                                {/* Vertical line for timeline */}
                                                <div className="absolute left-7 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-500 to-purple-600" />

                                                {/* Timeline items */}
                                                {timelineData.map((item, index) => (
                                                        <motion.div
                                                                key={index}
                                                                className={cn(
                                                                        "relative flex flex-col md:flex-row mb-16 last:mb-0",
                                                                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                                                )}
                                                                initial={{ opacity: 0, y: 20 }}
                                                                whileInView={{ opacity: 1, y: 0 }}
                                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                                viewport={{ once: true, margin: "-100px" }}
                                                        >
                                                                {/* Timeline node */}
                                                                <div className="absolute left-7 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                                                                        {item.status === "completed" ? (
                                                                                <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-lg">
                                                                                        <CheckCircle className="w-8 h-8 text-purple-500" />
                                                                                </div>
                                                                        ) : item.status === "upcoming" ? (
                                                                                <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-lg">
                                                                                        <Clock className="w-8 h-8 text-purple-500" />
                                                                                </div>
                                                                        ) : (
                                                                                <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-lg">
                                                                                        <Circle className="w-8 h-8 text-zinc-400" />
                                                                                </div>
                                                                        )}
                                                                </div>

                                                                {/* Content box */}
                                                                <div
                                                                        className={cn(
                                                                                "md:w-1/2 pl-20 md:pl-0",
                                                                                index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                                                                        )}
                                                                >
                                                                        <div className={cn(
                                                                                "border border-zinc-800/50 rounded-xl p-6 bg-zinc-900/30 transition-all hover:border-zinc-700/50 shadow-lg",
                                                                                item.status === "upcoming" ? "bg-gradient-to-br from-zinc-900/50 to-purple-600/10" : ""
                                                                        )}>
                                                                                <span className="text-sm font-medium text-purple-500">{item.date}</span>
                                                                                <h3 className="text-xl font-semibold text-zinc-200 mt-1">{item.title}</h3>
                                                                                <p className="text-zinc-400 mt-2">{item.description}</p>
                                                                        </div>
                                                                </div>
                                                        </motion.div>
                                                ))}
                                        </div>
                                </div>
                        </TracingBeam>
                </section >
        );
};