import automation from '../Images/automation.jpeg'
import scraping from '../Images/scrapping-head.jpeg'
import visualization from '../Images/blog-automation2.jpg'
import person from '../Images/automation.png'
import user1 from '../Images/user_1.jpg'
import user2 from '../Images/user_2.jpg'
import user3 from '../Images/user_3.jpeg'
import user4 from '../Images/user_4.jpg'
import scraplanding from '../Images/datascrapinglanding.jpeg'
import carescrap from '../Images/care_scraping.png'
import automationicon from '../Images/automationsmallicon.png'
import visualizationicon from '../Images/visualization.png'
import automationservicefirst from '../Images/automationservicefirst.jpeg'
import visualizationservicefirst from '../Images/visualizationservicefirst.jpeg'
import offer1 from '../Images/offer_01.png'
import offer2 from '../Images/offer_02.png'
import offer3 from '../Images/offer_03.png'
import offer4 from '../Images/offer_04.png'
import offer5 from '../Images/offer_05.png'
import offer6 from '../Images/offer_06.png'


const nav_items = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'About',
        link: '/about'
    },
    {
        name: 'Our Team',
        link: '/team'
    },
    {
        name: 'Services',
        link: '/datascrapping',
        sublink: [
            {
                title: 'Data Scrapping',
                link: '/datascrapping'
            },
            {
                title: 'Automation',
                link: '/dataautomation'
            },
            {
                title: 'Data Visualization',
                link: '/datavisualization'
            }
        ]
    },
    {
        name: 'Projects',
        link: '/projects'
    },
    {
        name: 'Contact',
        link: '/contact'
    }
];

const services = [
    {
        name: 'Custom Data Scraping',
        detail: "Get precise and timely data from any source with Ahmasoft's tailored scraping services, designed to fit your needs"
    },
    {
        name: 'Visualization Services',
        detail: "Transform raw data into clear, actionable visuals to drive decision-making and strategy"
    },
    {
        name: 'Automation Solutions',
        detail: "Streamline and automate time-consuming tasks for web and app platforms to enhance efficiency"
    }
];

const completed_projects = [
    {
        id: 1,
        title: 'Data Scrapping',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veritatis sequi maxime maiores vitae eius dolor facilis doloremque sapiente consequatur',
        img: scraping
    },
    {
        id: 2,
        title: 'Automation',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde distinctio voluptas incidunt molestiae ducimus. Odio, illum. Repudiandae ex ab nam',
        img: automation
    },
    {
        id: 3,
        title: 'Visualization',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde distinctio voluptas incidunt molestiae ducimus. Odio, illum. Repudiandae ex ab nam',
        img: visualization
    },
    {
        id: 4,
        title: 'Visualization',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde distinctio voluptas incidunt molestiae ducimus. Odio, illum. Repudiandae ex ab nam',
        img: visualization
    }

];

const offering = [
    {
        title: 'Data Scraping Solutions',
        description: 'Extract and transform data from diverse websites. Our services clean and structure data for easy integration into your systems, making it ready for immediate use..',
        img: offer1
    },
    {
        title: 'Data Visualization',
        description: 'Turn raw data into compelling visual stories. Our data visualization services make complex data easy to understand, enhancing your ability to communicate insights effectively.',
        img: offer2

    },
    {
        title: 'Automation Services',
        description: 'Automate repetitive tasks and streamline workflows to save time and resources. Our automation solutions optimize your processes for greater efficiency and accuracy.',
        img: offer3

    },
    {
        title: 'Data Structuring & Management',
        description: 'Structure and manage your data for optimal accessibility and usability. Our services ensure your data is well-organized, accurate, and ready for analysis.',
        img: offer4

    },
    {
        title: 'Custom IT Solutions',
        description: 'Develop bespoke IT solutions that cater to your unique business needs. From automation scripts to data management tools, we provide solutions that enhance productivity.',
        img: offer5

    },
    {
        title: 'Consulting Services',
        description: 'Gain expert advice on leveraging data and technology for your business growth. Our consulting services guide you in implementing strategies that maximize your data potential.',
        img: offer6

    }
];

const team_members = [
    {
        name: 'Ahmad Shayan',
        role: 'Data Scrapper',
        img: user1,
        links: [
            {
                facebook: 'facebook.com/ahmadshayan'
            },
            {
                insta: 'instagram.com/ahmadshayan'
            },
            {
                linkedin: 'linkedin.com/ahmadshayan'
            }
        ]
    },
    {
        name: 'Mama Yanda',
        role: 'Web Developer',
        img: user2,
        links: [
            {
                facebook: 'facebook.com/daudmir'
            },
            {
                insta: 'instagram.com/daudmir'
            },
            {
                linkedin: 'linkedin.com/daudmir'
            }
        ]
    },
    {
        name: 'C E O',
        role: 'Ceo',
        img: user3,
        links: [
            {
                facebook: 'facebook.com/ceo'
            },
            {
                insta: 'instagram.com/ceo'
            },
            {
                linkedin: 'linkedin.com/ceo'
            }
        ]
    }
];

const projects = [
    {
        id: 1,
        title: 'Data Scrapping',
        tag: 'Scraping',
        img: scraping,
        heading: 'Overcoming anti-scraping challenges to ensure success',
        para: "In a recent web scraping project, I successfully extracted product details and pricingfrom various e-commerce websites to provide valuable marketinsights. Using Python,Selenium, and BeautifulSoup, I developed a robust solution tohandle dynamic content and navigate CAPTCHA protections. The project delivered cleaned and structured data in CSVand JSON formats, addressing key challenges such as missingdata, duplicates, and format consistency. The client praised the efficiency and accuracy ofthe solution,highlighting its impact on their decision-making process by offering crucial insightsinto market trends and competitor pricing. This project not onlydemonstrated my ability to manage complex data extraction tasks but also provided actionable information thatsupported the client's business growth",
        technologies : [
            "🦊 BeautifulSoup",
            "🌐 Selenium",
            "🕸 Scrapy",
            "⚡ Playwright"
          ]          
    },
    {
        id: 2,
        title: 'Automation',
        tag: 'Automation',
        img: automation,
        heading: 'Automation is the Key to Scaling Your Data Processes',
        para: "I developed a Python-based data automation solution to streamline a client's operations by automating data extraction, processing, and integration from multiple sources. Using tools like Selenium for dynamic content scraping and Pandas for data cleaning, the solution improved accuracy, reduced manual tasks, and delivered real-time insights. This increased the client’s operational efficiency by 40%, enabling faster decision-making. The project resolved issues with inconsistent data formats and optimized data flow, allowing the client to focus on strategic growth rather than manual processes.",
        technologies : [
            "🐍 Python",
            "🦊 BeautifulSoup",
            "🌐 Selenium",
            "🕸 Scrapy",
            "📱 Appium"
          ]
          
    },
    {
        id: 3,
        title: 'Data Visualzation',
        tag: 'Visualization',
        img: visualization,
        heading: 'Power of Web Scraping for Business Growth',
        para: "I developed a Python-based data automation solution to streamline a client's operations by automating data extraction, processing,and integration from multiple sources.Using tools like Selenium for dynamic content scraping and Pandas for data cleaning, thesolution improved accuracy, reduced manual tasks, and delivered real- time insights.This increased the client’s operational efficiency by 40 %, enabling faster decision - making.The project resolved issues with inconsistent data formats and optimized data flow, allowing the client to focus on strategic growth rather than manual processes",
        technologies : [
            "📈 Power BI",
            "📉 Tableau",
            "🌐 Looker Studio",
            "📑 Excel",
            "🐍 Python",
            "📊 Matplotlib",
            "📈 Seaborn"
          ]
          
    }
];

const whyus_services = [
    {
        title: 'Expertise',
        detail: 'Our team comprises skilled professionals who are proficient in advanced data technologies and techniques'
    },
    {
        title: 'Customization',
        detail: 'We tailor our solutions to fit the specific needs and objectives of your business'
    },
    {
        title: 'Client Focus',
        detail: 'We prioritize understanding your goals and delivering results that exceed your expectations'
    },
    {
        title: 'Innovation',
        detail: 'We leverage the latest tools and methodologies to ensure your data solutions are at the forefront of industry standards'
    }
];

const project_bar = ['Scraping', 'Automation', 'Visualization']

const testimonial = [
    {
        name: "John Doe",
        position: "CEO",
        img: user1,
        stars: 4,
        testimonial: "Ahmad Shayan is an exceptional developer who delivered our project ahead of schedule. His expertise and dedication were evident in every aspect of the work. Highly recommended!"
    },
    {
        name: "Emily Smith",
        position: "Marketing Manager",
        img: user2,
        stars: 5,
        testimonial: "Working with Ahmad Shayan was a pleasure. His ability to understand our requirements and provide innovative solutions was impressive. His work greatly improved our website's performance."
    },
    {
        name: "Michael Johnson",
        position: "Project Coordinator",
        img: user3,
        stars : 5,
        company: "Web Dynamics",
        testimonial: "Ahmad Shayan exceeded our expectations with his excellent coding skills and attention to detail. He communicated effectively throughout the project and delivered outstanding results."
    },
    {
        name: "David Lee",
        position: "Founder",
        img: user4,
        stars : 4,
        testimonial: "Ahmad Shayan brought our vision to life with his brilliant coding skills. He was patient, responsive, and delivered everything we asked for, even under tight deadlines."
    }
];

const serviesfirstappearancedata = [
    {
        title: 'Data Scraping',
        tag: 'scraping',
        landingserviceimg: scraplanding,
        description: 'In today’s digital world, data is a key asset for making informed business decisions. At Ahmasoft, we specialize in providing advanced data scraping solutions designed to gather, process, and deliver critical information from websites and online platforms. Our data scraping services empower businesses with accurate, real-time data to stay competitive and make strategic decisions',
        firstapperancesmalllogo: carescrap
    },
    {
        title: 'Automation',
        tag: 'automation',
        landingserviceimg: automationservicefirst, // Replace 'automationLandingImg' with the actual image variable
        description: 'At Ahmasoft, we provide cutting-edge automation solutions that streamline your business operations, minimize human intervention, and enhance efficiency. Our tailored automation services enable businesses to automate repetitive tasks, reducing operational costs and increasing productivity while ensuring accuracy and consistency.',
        firstapperancesmalllogo: automationicon // Replace 'automationLogo' with the actual small logo variable
    },
    {
        title: 'Data Visualization',
        tag: 'visualization',
        landingserviceimg: visualizationservicefirst, // Replace 'visualizationLandingImg' with the actual image variable
        description: 'Turn complex data into insightful, easy-to-understand visuals with Ahmasoft’s data visualization services. We help businesses present data in a clear and engaging format, making it easier to identify trends, make data-driven decisions, and communicate insights effectively. Our visualizations are designed to empower teams with actionable insights at a glance.',
        firstapperancesmalllogo: visualizationicon // Replace 'visualizationLogo' with the actual small logo variable
    }

];

const whyourservices = [
    {
        title: 'Data Scraping',
        tag: 'scraping',
        description: 'At Ahmasoft, we deliver tailored web scraping solutions that extract clean, actionable data in real time to support informed business decisions.',
        serviceDetails: ['Custom Scraping', 'Real-Time Data', 'Data Cleaning', 'Scalable Solutions', 'Automated Extraction']
    },
    {
        title: 'Automation',
        tag: 'automation',
        description: 'At Ahmasoft, we streamline business operations with custom automation solutions that reduce manual effort and enhance efficiency.',
        serviceDetails: ['Process Automation', 'Task Scheduling', 'Workflow Optimization', 'Error Reduction', 'Scalable Automation']
    },
    {
        title: 'Data Visualization',
        tag : 'visualization',
        description: 'At Ahmasoft, we transform complex data into intuitive visualizations, making it easy to interpret and act on business insights.',
        serviceDetails: ['Custom Dashboards', 'Interactive Charts', 'Real-Time Data', 'Trend Analysis', 'Visual Insights']
    }


]

const faqs = [
    {
      question: "What is web scraping, and how can Ahmasoft help my business?",
      answer: "Web scraping involves extracting data from websites and organizing it into structured formats like CSV or JSON. At Ahmasoft, we specialize in building custom web scraping solutions that allow businesses to gather valuable insights, monitor competitors, or automate data collection processes efficiently."
    },
    {
      question: "How does Ahmasoft's automation services benefit my business?",
      answer: "Our automation services streamline repetitive tasks, saving time and reducing human error. From automating workflows to integrating APIs, Ahmasoft helps your business improve efficiency and focus on core operations by leveraging smart automation solutions tailored to your specific needs."
    },
    {
      question: "What kind of data visualization solutions does Ahmasoft offer?",
      answer: "Ahmasoft provides custom data visualization solutions that turn raw data into insightful, easy-to-understand visuals. Whether it's dashboards, charts, or interactive reports, we help businesses make data-driven decisions by presenting complex data in a meaningful and user-friendly way."
    }
  ];
  



export { nav_items, services, completed_projects, offering, team_members, projects, project_bar, whyus_services, testimonial, serviesfirstappearancedata, whyourservices, faqs }