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
                description: "Implement geolocation to suggest properties based on the user's current location. ",
                status: "upcoming",
                icon: "location",
        },
        {
                date: "April 2025",
                title: "Analytics and Stats",
                description: "Integrate analytics tools to track user behavior and site performance. ",
                status: "upcoming",
                icon: "analytics",
        },
        {
                date: "April 2025",
                title: "Sell Property",
                description: "Enable users and agents to list properties for sale on the platform. ",
                status: "upcoming",
                icon: "sell",
        },
        {
                date: "May 2025",
                title: "Home Loan Eligibility Calculator",
                description: "Develop a calculator tool to determine home loan eligibility based on user input. ",
                status: "upcoming",
                icon: "calculator",
        },
        {
                date: "May 2025",
                title: "Live Chat Integration",
                description: "Integrate a live chat system for real-time customer support and inquiries. ",
                status: "upcoming",
                icon: "chat",
        },
        {
                date: "May 2025",
                title: "Improved Site Map",
                description: "Enhance the site map for better navigation and SEO performance. ",
                status: "upcoming",
                icon: "sitemap",
        },
        {
                date: "May 2025",
                title: "Tower Listing",
                description: "Display and manage tower-specific property listings with detailed information. ",
                status: "upcoming",
                icon: "tower",
        },
        {
                date: "May 2025",
                title: "Plot, Villa, Office, Simplex, Duplex, Shop Listing",
                description: "Create categorized listing pages for diverse property types. ",
                status: "upcoming",
                icon: "listing",
        },
        {
                date: "June 2025",
                title: "Mobile Optimization",
                description: "Optimize the website design and performance for mobile devices. ",
                status: "upcoming",
                icon: "mobile-opt",
        },
        {
                date: "June 2025",
                title: "Search V2",
                description: "Develop an advanced search with filters and improved user experience. ",
                status: "upcoming",
                icon: "search",
        },
        {
                date: "June 2025",
                title: "Faster Google Indexing",
                description: "Implement SEO best practices to improve the speed of Google indexing. ",
                status: "upcoming",
                icon: "seo",
        },
        {
                date: "June 2025",
                title: "Role Based Access to Features",
                description: "Implement authentication and authorization to control feature access per user role. ",
                status: "upcoming",
                icon: "access",
        },
        {
                date: "July 2025",
                title: "Mobile App",
                description: "Develop a mobile application to provide on-the-go access to core features. Mobile app will have a different roadmap.",
                status: "upcoming",
                icon: "mobile-app",
        },
        {
                date: "August 2025",
                title: "Admin - CRM",
                description: "Build a comprehensive CRM and admin dashboard to manage overall operations. ",
                status: "upcoming",
                icon: "admin",
        },
        {
                date: "August 2025",
                title: "Agent Panel",
                description: "Create a dedicated panel for agents to manage listings and interact with clients. ",
                status: "upcoming",
                icon: "agent",
        },
        {
                date: "September 2025",
                title: "Cost Optimization",
                description: "Optimize code and infrastructure to reduce operational costs. ",
                status: "upcoming",
                icon: "optimization",
        },
        {
                date: "September 2025",
                title: "Blogs",
                description: "Integrate a blogging platform to share news, updates, and insights. ",
                status: "upcoming",
                icon: "blog",
        },
        {
                date: "October 2025",
                title: "Calculator and Tools",
                description: "Develop additional tools and calculators to assist users in decision making. ",
                status: "upcoming",
                icon: "tools",
        },
        {
                date: "October 2025",
                title: "Site Visit Automation for Cab Booking",
                description: "Automate the site visit booking process for improved efficiency. ",
                status: "upcoming",
                icon: "automation",
        },
        {
                date: "November 2025",
                title: "Custom AI Model (Housing Mantra GPT)",
                description: "Integrate a custom AI model to provide smart recommendations and support. ",
                status: "upcoming",
                icon: "ai",
        },
        {
                date: "December 2025",
                title: "UI v2",
                description: "Revamp the user interface for enhanced aesthetics and usability. ",
                status: "upcoming",
                icon: "ui",
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