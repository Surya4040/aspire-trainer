import { CourseCard } from "@/components/ui/CourseCard";

const allCourses = [
    {
        title: "MERN Stack Development",
        description: "Master MongoDB, Express.js, React, and Node.js. Build scalable, full-stack applications with real-world projects.",
        slug: "mern-stack",
        duration: "3 Months",
        modules: 12,
        tags: ["Web Dev", "React", "Node.js"]
    },
    {
        title: "MEAN Stack Development",
        description: "Learn Angular, Node.js, Express, and MongoDB. Design enterprise-grade SPAs with modern TypeScript practices.",
        slug: "mean-stack",
        duration: "3 Months",
        modules: 12,
        tags: ["Web Dev", "Angular", "TypeScript"]
    },
    {
        title: "Java Fullstack Development",
        description: "Learn Core Java, Spring Boot, Hibernate, and modern Frontend technologies to become enterprise-ready.",
        slug: "java-fullstack",
        duration: "3 Months",
        modules: 15,
        tags: ["Enterprise", "Java", "Spring Boot"]
    },
    {
        title: "Python Fullstack Development",
        description: "Master Python, Django, REST APIs, and React. Build robust backends and dynamic frontends.",
        slug: "python-fullstack",
        duration: "3 Months",
        modules: 14,
        tags: ["Backend", "Python", "Django"]
    },
    {
        title: "SDET (Java & Python)",
        description: "Master automated testing architectures, Selenium, CI/CD, and API testing to assure quality at scale.",
        slug: "sdet",
        duration: "3 Months",
        modules: 10,
        tags: ["Testing", "Automation", "Selenium"]
    },
    {
        title: "Playwright Automation",
        description: "The modern web testing framework. Learn to write fast, reliable test scripts for Next-Gen applications.",
        slug: "playwright",
        duration: "3 Months",
        modules: 8,
        tags: ["Testing", "Playwright", "Modern QA"]
    },
    {
        title: "AI and Machine Learning",
        description: "Dive deep into Python, Data Science, TensorFlow, and building intelligent LLM applications.",
        slug: "ai-ml",
        duration: "3 Months",
        modules: 16,
        tags: ["AI/ML", "Python", "Data Science"]
    },
    {
        title: "Digital Marketing Masterclass",
        description: "SEO, SEM, Social Media, and Analytics. Drive traffic, capture leads, and master growth marketing.",
        slug: "digital-marketing",
        duration: "3 Months",
        modules: 10,
        tags: ["Marketing", "SEO", "Growth"]
    }
];

export const metadata = {
    title: "All Courses | Aspire Info",
    description: "Explore our intensive 3-month IT training courses with built-in AI assistance and a proprietary practice portal."
};

export default function CoursesPage() {
    return (
        <div className="bg-slate-50 min-h-screen pt-12 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">Our Premium Training Programs</h1>
                    <p className="text-lg text-slate-600">
                        Transform your academic knowledge into industry-ready skills with our intensive 3-month, project-driven courses.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {allCourses.map((course) => (
                        <CourseCard
                            key={course.slug}
                            {...course}
                            delay={0}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
