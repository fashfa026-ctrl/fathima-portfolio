export const projects = [
  {
    id: "careerhub",
    title: "CareerHub – Job Portal",
    category: "Full-Stack MERN Application",
    description: "A full-stack job portal connecting Job Seekers, Employers, and Administrators on a single platform — with job posting, resume upload, interview scheduling, analytics dashboard, and OTP-based password reset. Deployed on Vercel with Cloudinary for media storage.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    status: "Completed — HNDIT4052 Individual Project",
    isCompleted: true,
    github: "https://github.com/fashfa026-ctrl/jobportal",
    demo: "https://jobportal-5b93.vercel.app/",
    thumbnail: "/screenshots/careerhub/Home.jpg",
    images: [
      "/screenshots/careerhub/Home.jpg",
      "/screenshots/careerhub/Dashboard.jpg",
      "/screenshots/careerhub/Signup.jpg",
      "/screenshots/careerhub/Jobs page.jpg",
      "/screenshots/careerhub/JobDetails.jpg",
      "/screenshots/careerhub/ApplicantProfile.jpg",
      "/screenshots/careerhub/JobSeekerProfile.jpg",
      "/screenshots/careerhub/ManageJobs.jpg",
      "/screenshots/careerhub/ForgotPassword.jpg",
      "/screenshots/careerhub/Footer.jpg",
    ],
    video: null,
    role: "Full-Stack Developer",
    scope: "HNDIT4052 Individual Project — Final-Year Build",
    problem: "Job seekers lack visibility into application status, employers struggle with managing applicants efficiently, and administrators have no centralized oversight of the platform.",
    objective: "To build a tri-role job portal with real-time application tracking, employer analytics, interview scheduling, and admin controls — deployed on Vercel with cloud media storage.",
    targetUsers: "Job Seekers applying for positions, Employers posting and managing jobs, and Administrators overseeing the platform.",
    techDetails: {
      frontend: ["React 19 (Vite 8)", "Tailwind CSS v4", "Framer Motion", "React Router DOM 7", "AuthContext / ThemeContext / FilterContext"],
      backend: ["Node.js (≥18)", "Express 5", "JWT Auth", "Bcrypt.js", "Multer", "Nodemailer (OTP email)"],
      database: ["MongoDB via Mongoose 9", "Models: User, Job, Application, Analytics, Feedback, Report, SavedJob"],
      tools: ["Cloudinary (avatars, logos, resumes)", "Vercel (frontend + backend deployment)", "Git & GitHub"]
    },
    features: [
      {
        title: "Three-Role Access System",
        description: "Separate dashboards and protected routes for Job Seekers, Employers, and Administrators — enforced on both frontend (ProtectedRoute) and backend (authMiddleware)."
      },
      {
        title: "Interview Scheduling",
        description: "Employers can schedule interviews with full details — type, date, location/meeting link, and contact — visible to applicants in their dashboard."
      },
      {
        title: "Employer Analytics Dashboard",
        description: "Tracks total jobs posted, applications received, hires, and individual job view counts to help employers measure listing performance."
      },
      {
        title: "OTP-Based Password Reset",
        description: "Secure email-based OTP flow via Nodemailer — no URL token links required, more user-friendly and phishing-resistant."
      },
      {
        title: "Cloudinary Media Storage",
        description: "User avatars, company logos, and PDF resumes are stored on Cloudinary — persistent across serverless Vercel deployments."
      },
      {
        title: "Admin System Control",
        description: "Administrators can block/unblock users (cascade-safe), manage all jobs and applications, handle feedback, and generate platform-wide reports."
      }
    ],
    architecture: {
      client: "React 19 SPA (Vite 8) with role-based routing, three context providers (Auth, Theme, Filter), and Framer Motion page animations.",
      server: "Express 5 REST API with JWT middleware, Multer/Cloudinary upload pipeline, Nodemailer OTP, and modular controller-route architecture.",
      database: "MongoDB via Mongoose 9 — 7 models: User, Job, Application, Analytics, Feedback, Report, SavedJob. Soft-delete on Jobs preserves application history."
    },
    dbDesign: [
      {
        name: "User Model",
        description: "Handles all three roles with shared schema — role field determines access.",
        fields: ["fullName", "email", "password (bcrypt)", "role (jobseeker | employer | admin)", "avatar", "resume", "companyName", "companyLogo", "isBlocked", "resetPasswordOTP"]
      },
      {
        name: "Job Model",
        description: "Employer job listings with soft-delete to preserve application history.",
        fields: ["title", "description", "requirements[]", "location", "category", "type (Full-Time | Part-Time | Internship | Remote | Contract)", "salaryMin/Max", "deadline", "experience", "isClosed", "isDeleted", "views", "applicationCount"]
      },
      {
        name: "Application Model",
        description: "Tracks each job seeker's application lifecycle including interview details.",
        fields: ["applicant (→ User)", "job (→ Job)", "resume", "status (applied | in review | accepted | rejected)", "interviewDetails (title, type, date, schedule, contact, meetingLink)"]
      },
      {
        name: "Analytics Model",
        description: "Employer-level aggregated statistics.",
        fields: ["employer (→ User)", "totalJobsPosted", "totalApplicationsReceived", "totalHired"]
      }
    ],
    challenges: [
      {
        challenge: "Persistent Media on Serverless Deployment",
        solution: "Integrated Cloudinary via multer-storage-cloudinary to store all uploads in the cloud. The server auto-creates a /tmp uploads directory on Vercel startup as a fallback."
      },
      {
        challenge: "Cascade Delete on User Removal",
        solution: "Implemented cascade deletion logic so removing a user also cleans up all their applications, saved jobs, and posted jobs — maintaining database integrity."
      },
      {
        challenge: "Soft-Delete for Jobs",
        solution: "Jobs use an isDeleted flag instead of hard deletion, preserving application history records even after a job is removed — following LinkedIn/Indeed patterns."
      }
    ],
    outcomeTitle: "Project Outcome",
    outcome: [
      "Built a production-deployed tri-role job portal with Job Seeker, Employer, and Admin dashboards.",
      "Implemented OTP-based password reset via Nodemailer and Cloudinary for persistent media storage on Vercel.",
      "Engineered interview scheduling, employer analytics, soft-delete job management, and cascade user deletion.",
      "Deployed full-stack application on Vercel with environment-based configuration for production."
    ]
  },
  {
    id: "hotel",
    title: "Hotel Management System",
    category: "Legacy Modernization Project",
    description: "Migration of a legacy Java Swing desktop app into a decoupled Spring Boot web application with REST API, JPA, and embedded H2 database.",
    stack: ["Spring Boot", "Java", "Spring Data JPA", "H2 Database", "REST API"],
    status: "Completed academic desktop project",
    isCompleted: true,
    github: "https://github.com/fashfa026-ctrl/Hotel-Management-System-Java",
    demo: null,
    thumbnail: null,
    images: [],
    video: null,
    role: "Sole Developer",
    scope: "Legacy Desktop to Web Migration Project",
    problem: "Legacy Swing client suffered from absolute path dependency issues, NullPointerException failures on resource loads, and required heavy manual SQL setup.",
    objective: "To modernize the legacy codebase into a web-based REST service with decoupled layers, embedded file databases, and automated portable scripting.",
    targetUsers: "Hotel desk receptionists and administrative managers using standard web browsers.",
    techDetails: {
      frontend: ["HTML5", "CSS3 (Dark Theme Layout)", "Vanilla JavaScript SPA"],
      backend: ["Java", "Spring Boot web framework", "Spring Data JPA (Hibernate)"],
      database: ["H2 Embedded Database (File-based, zero setup for development)"],
      tools: ["Git & GitHub", "Portable Apache Maven configurations", "PowerShell automation scripts"]
    },
    features: [
      {
        title: "Legacy Path Resolution",
        description: "Refactored broken absolute classpaths from original systems to relative project dependencies inside local directories."
      },
      {
        title: "Decoupled REST API Contract",
        description: "Engineered clean controllers for Auth, Rooms, Customers, and Invoicing, replacing direct UI-embedded JDBC queries."
      },
      {
        title: "Automated Build Tooling",
        description: "Created a PowerShell script that dynamically downloads Maven and copies assets on-demand, resolving runtime NullPointerExceptions."
      }
    ],
    architecture: {
      client: "Single Page Application (SPA) dispatching HTTP REST calls to server API endpoints.",
      server: "Spring Boot layered stack executing controller endpoints, JPA model operations, and transactional calculations.",
      database: "Embedded H2 engine storing database files locally in the root directory (jdbc:h2:file:./data/hoteldb)."
    },
    dbDesign: [
      {
        name: "Users Table",
        description: "Stores admin credentials and security details.",
        fields: ["id (Long, PK)", "username (VARCHAR)", "password (VARCHAR)", "securityQuestion (VARCHAR)", "securityAnswer (VARCHAR)"]
      },
      {
        name: "Rooms Table",
        description: "Manages room types and status records.",
        fields: ["roomNumber (Long, PK)", "bedType (VARCHAR)", "coolingType (VARCHAR)", "price (Double)", "isBooked (Boolean)"]
      },
      {
        name: "Customers Table",
        description: "Logs current guest bookings.",
        fields: ["id (Long, PK)", "name (VARCHAR)", "phone (VARCHAR)", "email (VARCHAR)", "roomNumber (Long, FK)", "checkInDate (Timestamp)", "checkOutDate (Timestamp)"]
      }
    ],
    challenges: [
      {
        challenge: "Absolute Dependency Resolution",
        solution: "Moved hardcoded library JAR paths from the developer's original PC to a relative lib_jars/ classpath folder, allowing instant project compilation."
      },
      {
        challenge: "Swing Resource Loading NPE Crash",
        solution: "Created build automation scripts to pre-copy assets to build outputs, ensuring assets load correctly under standard IDE runners."
      },
      {
        challenge: "Zero-Setup Database Development",
        solution: "Configured an embedded file-based H2 database URL and implemented CommandLineRunner seeding to populate default room logs on startup."
      }
    ],
    outcomeTitle: "Project Outcome",
    outcome: [
      "Successfully modernized legacy Swing desktop app into a modular web REST API.",
      "Decoupled configuration dependencies using relative classpath mappings.",
      "Engineered zero-setup portability using embedded file-based H2 database and Maven PowerShell scripts.",
      "Implemented decoupled Controller-Service-Repository architecture in Spring Boot."
    ]
  },
  {
    id: "icecream",
    title: "Ice Cream Shop Web App",
    category: "Coursework Web Application",
    description: "A multi-page e-commerce web app with customer browsing portal and admin inventory management, with secured authentication and file upload defense.",
    stack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "XAMPP"],
    status: "Completed coursework project",
    isCompleted: true,
    github: null,
    demo: null,
    thumbnail: "/screenshots/ice-cream/HomeSection.jpg",
    images: [
      "/screenshots/ice-cream/HomeSection.jpg",
      "/screenshots/ice-cream/AboutUs.jpg",
      "/screenshots/ice-cream/Contact.jpg",
      "/screenshots/ice-cream/Subscribe.jpg",
    ],
    video: null,
    role: "Sole Developer",
    scope: "Academic Coursework Refactoring & Build",
    problem: "The legacy codebase contained plaintext MD5 authentication, lack of file upload validation, hardcoded server paths (C:\\xampp\\htdocs\\...), and critical database bugs.",
    objective: "To secure authentication, implement file upload defense rules, prevent SQL injection via prepared statements, and resolve duplicate constant warnings.",
    targetUsers: "Ice cream customers browsing catalogs, and sellers managing inventory orders.",
    techDetails: {
      frontend: ["HTML5 & Vanilla CSS3", "JavaScript (ES6+)", "SwiperJS & SweetAlert", "Boxicons & FontAwesome"],
      backend: ["PHP (OOP Architecture)"],
      database: ["MySQL (Normalized relational schema)"],
      tools: ["XAMPP Local Server Stack", "Git & GitHub"]
    },
    features: [
      {
        title: "Product Listing & Cart",
        description: "Enables customers to browse menus, add/remove items dynamically from wishlist and shopping carts, and place final orders."
      },
      {
        title: "Admin Inventory Manager",
        description: "Equips sellers with product CRUD operations, color-coded low-stock warnings, and registration accounts tracking."
      },
      {
        title: "Secured File Upload Defense",
        description: "Enforces MIME type checking, size limitations, and extension validators on product upload forms."
      }
    ],
    architecture: {
      client: "Multi-page browser client rendering custom typography styles, SwiperJS banners, and password toggle Boxicons.",
      server: "PHP application server compiling OOP classes, checking sessions, and executing PDO transactions.",
      database: "MySQL Database engine storing normalized relational tables connected via foreign key dependencies."
    },
    dbDesign: [
      {
        name: "Users & Sellers Tables",
        description: "Manages profile logins and password verification salts.",
        fields: ["id (INT, PK)", "name (VARCHAR)", "email (VARCHAR, unique)", "password (Hashed String)", "user_type (VARCHAR)"]
      },
      {
        name: "Products Table",
        description: "Holds inventory numbers and stock warnings indicators.",
        fields: ["id (INT, PK)", "name (VARCHAR)", "price (DECIMAL)", "image (VARCHAR)", "product_details (TEXT)", "status (VARCHAR)"]
      },
      {
        name: "Cart & Wishlist Tables",
        description: "Stores selected product links before checkouts.",
        fields: ["id (INT, PK)", "user_id (INT, FK -> Users)", "product_id (INT, FK -> Products)", "price (DECIMAL)", "qty (INT)"]
      }
    ],
    challenges: [
      {
        challenge: "Unsecured Authentication & Upload Vulnerability",
        solution: "Replaced insecure MD5 storage with native password_hash() and password_verify() APIs, and integrated strict MIME type size checks on product uploads."
      },
      {
        challenge: "Broken Navigation & Absolute Local Pathing",
        solution: "Resolved hardcoded developer PC paths to relative directories, and corrected spelling redirects (e.g. view_oder.php to view_order.php)."
      },
      {
        challenge: "Product Editing Image Deletion Bug",
        solution: "Re-engineered editing logic to ensure existing images persist in server directories if no new image upload is specified."
      }
    ],
    outcomeTitle: "Project Outcome",
    outcome: [
      "100% Functional Application: Resolved all database errors, broken Boxicons links, and layout redirection bugs.",
      "Improved Security Posture: Transitioned from plaintext data to industry-standard hashed passwords and secure file uploads.",
      "Polished User Experience: Developed dynamic SwiperJS promotional banners and JavaScript show/hide password toggles."
    ]
  },
  {
    id: "fastfood-pos",
    title: "Food Frenzy – POS System",
    category: "Desktop POS Application",
    description: "A C# Windows Forms desktop POS and billing application for fast-food restaurants with dynamic menu pricing, quantity selection, and automated change calculation.",
    stack: ["C#", ".NET Framework", "Visual Studio"],
    status: "Completed C# desktop project",
    isCompleted: true,
    github: "https://github.com/fashfa026-ctrl/Food-Frenzy-POS",
    demo: null,
    thumbnail: "/screenshots/food-frenzy/home.jpeg",
    images: [
      "/screenshots/food-frenzy/home.jpeg",
      "/screenshots/food-frenzy/Final.jpeg",
    ],
    video: "/videos/Food_Frenzy_UI_only (1).out.mp4",
    role: "Sole Developer",
    scope: "Desktop POS & Billing Management Application",
    problem: "Manual order calculations and cash change estimation in fast-food outlets lead to checkout delays, pricing errors, and cash flow calculation discrepancies during busy business hours.",
    objective: "To build a responsive Windows Forms desktop POS application providing itemized pricing across food categories, dynamic quantity selection, and automated change estimation.",
    targetUsers: "Fast-food counter operators, cashiers, and restaurant administrative staff.",
    techDetails: {
      frontend: ["Windows Forms (WinForms GUI)", "Standard & Custom Controls (NumericUpDown, CheckedListBox, RadioButtons)", "Visual Studio 2015 Designer"],
      backend: ["C# (.NET Framework)", "Event-Driven Architecture", "Partial Classes UI Logic Separation"],
      database: ["In-Memory Transaction Log & Order State Calculation"],
      tools: ["Microsoft Visual Studio 2015", "Git & GitHub"]
    },
    features: [
      {
        title: "Dynamic Menu & Quantity Calculation",
        description: "Real-time billing logic supporting main meals, customizable beverages, and side dishes with quantity controls."
      },
      {
        title: "Automated Change & Balance Estimator",
        description: "Instant calculation of customer balance based on paid amount to prevent manual transaction errors."
      },
      {
        title: "Receipt Generation & Order Summary",
        description: "Formats and displays itemized transaction details and order summaries upon order completion."
      },
      {
        title: "Interactive Desktop GUI",
        description: "Clean and intuitive user interface using standard WinForms controls (NumericUpDown, CheckedListBoxes, RadioButtons)."
      }
    ],
    architecture: {
      client: "Windows Forms desktop GUI capturing user interactions via event handlers and NumericUpDown / CheckBox inputs.",
      server: "C# partial classes and business logic layer calculating itemized sub-totals, taxes, and final balances.",
      database: "In-memory transaction state and checkout summary calculated dynamically during live cashier sessions."
    },
    dbDesign: [
      {
        name: "Item Menu Data Model",
        description: "Stores price list definitions across food categories.",
        fields: ["Item Name (String)", "Category (Mains | Beverages | Sides)", "Unit Price (Decimal)"]
      },
      {
        name: "Billing Transaction Summary",
        description: "Manages session order calculations and balance details.",
        fields: ["Selected Items (List)", "Subtotal (Decimal)", "Paid Amount (Decimal)", "Calculated Change (Decimal)"]
      }
    ],
    challenges: [
      {
        challenge: "Manual Checkout Calculation Errors",
        solution: "Engineered an automated cash balance estimation algorithm that dynamically recalculates customer change whenever paid amount or item quantity changes."
      },
      {
        challenge: "UI & Business Logic Coupling in WinForms",
        solution: "Structured the codebase using C# partial classes and event-driven handlers to cleanly isolate UI controls from billing formulas."
      }
    ],
    outcomeTitle: "Project Outcome",
    outcome: [
      "Developed a responsive Windows Forms desktop POS application in C# to automate order processing and transaction calculations for fast-food outlets.",
      "Implemented event-driven business logic for itemized pricing across multiple categories (mains, beverages, sides) supporting dynamic quantity selection.",
      "Engineered an automated cash balance estimation algorithm to streamline checkout workflows and eliminate manual mathematical errors.",
      "Designed a user-friendly UI layout using custom containers, data controls, and resources within Visual Studio 2015."
    ]
  },
  {
    id: "fish-flora-hub",
    title: "Fish & Flora Hub",
    category: "Multi-Page E-Commerce Website",
    description: "A complete aquarium e-commerce and educational showcase website with 8 pages — fish/plant/accessories catalogs, interactive fish match quiz, cart with localStorage, wishlist, and order simulation. Built with zero external frameworks.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    status: "Completed",
    isCompleted: true,
    github: "https://github.com/fashfa026-ctrl/Fish-Flora-Hub",
    demo: null,
    thumbnail: "/screenshots/Fish&Flora-Hub/Home.jpg",
    images: [
      "/screenshots/Fish&Flora-Hub/Home.jpg",
      "/screenshots/Fish&Flora-Hub/Explore.jpg",
      "/screenshots/Fish&Flora-Hub/Fish.jpg",
      "/screenshots/Fish&Flora-Hub/Plants.jpg",
      "/screenshots/Fish&Flora-Hub/Accessories.jpg",
      "/screenshots/Fish&Flora-Hub/Cart.jpg",
      "/screenshots/Fish&Flora-Hub/Wishlist.jpg",
      "/screenshots/Fish&Flora-Hub/Quiz.jpg",
      "/screenshots/Fish&Flora-Hub/Contact.jpg",
    ],
    video: "/videos/fish_flora_hub_demo_1.2x_smooth-3[1].out.mp4",
  },
  {
    id: "spotly",
    title: "Spotly – Ride Sharing App",
    category: "MERN Stack Application",
    description: "A ride-sharing application connecting passengers with drivers offering available seats, featuring role-based dashboards and ride booking management.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    status: "In Progress",
    isCompleted: false,
    github: null,
    demo: null,
    thumbnail: null,
    images: [],
    video: null,
    role: "Full-Stack Developer",
    scope: "Academic Project / Personal Build",
    problem: "Commuters lack a convenient platform to find and share rides with drivers who have available seats, leading to inefficient transportation and higher travel costs.",
    objective: "To build a ride-sharing platform that connects passengers with drivers through an intuitive booking and ride management system.",
    targetUsers: "Passengers looking for shared rides and drivers offering available seats.",
    techDetails: {
      frontend: ["React.js (Vite)", "Tailwind CSS", "Responsive UI Components"],
      backend: ["Node.js", "Express.js REST API", "Authentication Middleware"],
      database: ["MongoDB", "Mongoose ODM"],
      tools: ["Git & GitHub", "Postman API Testing", "VS Code"]
    },
    features: [
      {
        title: "Passenger & Driver Dashboards",
        description: "Separate dashboard interfaces for passengers to search rides and drivers to manage their available journeys."
      },
      {
        title: "Ride Search & Booking",
        description: "Passengers can search for available rides by route and book seats with drivers."
      },
      {
        title: "Ride Management",
        description: "Drivers can create, update, and manage ride listings including route details and available seats."
      }
    ],
    architecture: {
      client: "React SPA built with Vite, featuring separate passenger and driver views.",
      server: "Express.js REST API handling ride CRUD operations and user authentication.",
      database: "MongoDB storing user profiles, ride listings, and booking records."
    },
    dbDesign: [
      {
        name: "Users Collection",
        description: "Stores passenger and driver account details.",
        fields: ["_id (ObjectID)", "name (String)", "email (String)", "password (Hashed)", "role (passenger | driver)"]
      },
      {
        name: "Rides Collection",
        description: "Manages ride listings created by drivers.",
        fields: ["_id (ObjectID)", "driverId (Ref -> Users)", "origin (String)", "destination (String)", "availableSeats (Number)", "departureTime (Date)"]
      },
      {
        name: "Bookings Collection",
        description: "Tracks ride bookings made by passengers.",
        fields: ["_id (ObjectID)", "rideId (Ref -> Rides)", "passengerId (Ref -> Users)", "status (String)", "bookedAt (Date)"]
      }
    ],
    challenges: [
      {
        challenge: "Real-Time Seat Availability",
        solution: "Implemented seat count validation on both frontend and backend to prevent overbooking when multiple passengers attempt to book simultaneously."
      },
      {
        challenge: "Dual-Role User Interface",
        solution: "Designed separate dashboard layouts and navigation flows for passengers and drivers while sharing common authentication logic."
      }
    ],
    outcomeTitle: "Current Progress",
    outcome: [
      "Developing a MERN stack ride-sharing application with separate passenger and driver interfaces.",
      "Implementing ride search, booking, and management functionalities.",
      "Building responsive UI components with React and Tailwind CSS.",
      "Project is actively in development with core features being implemented."
    ]
  }
];
