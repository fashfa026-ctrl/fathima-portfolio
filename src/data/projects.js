export const projects = [
  {
    id: "careerhub",
    title: "CareerHub",
    category: "Featured Product Case Study",
    description: "A dual-sided recruitment platform connecting hiring managers and candidate applicants, built to streamline listing management and application lifecycles.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    status: "Completed flagship MERN project",
    isCompleted: true,
    github: "https://github.com/fashfa026-ctrl/jobportal",
    demo: "https://jobportal-5b93.vercel.app/",
    role: "Full-Stack Developer",
    scope: "Academic Project / Final-Year Build",
    problem: "Recruiters struggle with fragmented pipelines, while applicants face a black-box experience with no visibility into their application tracking state.",
    objective: "To construct a centralized portal that provides real-time application state synchronization and structured recruiters workflow tools.",
    targetUsers: "Job seekers applying for positions, and hiring recruiters managing candidates.",
    techDetails: {
      frontend: ["React.js (SPA)", "Context API for global state", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "Express.js REST framework", "JSON Web Token (JWT) auth middleware"],
      database: ["MongoDB", "Mongoose ODM schemas & indexing"],
      tools: ["Git & GitHub", "Postman API testing client", "npm package manager"]
    },
    features: [
      {
        title: "Role-Based Routing",
        description: "Enforces strict route permissions on the frontend and backend, serving separate views and controller access for candidates and recruiters."
      },
      {
        title: "Application Pipeline Tracker",
        description: "Enables candidates to view current progress state (Applied, Interviewing, Rejected, Offered) dynamically updated by hiring managers."
      },
      {
        title: "Secure Sessions",
        description: "Enforces authorization checking on requests using token signatures."
      }
    ],
    architecture: {
      client: "React SPA dispatching async fetch requests with session tokens.",
      server: "Express.js REST API router processing tokens, validating inputs, and returning JSON payloads.",
      database: "MongoDB Atlas holding collections for users, listings, and applications."
    },
    dbDesign: [
      {
        name: "Users Collection",
        description: "Holds candidate and recruiter accounts.",
        fields: ["_id (ObjectID)", "name (String)", "email (String, unique)", "password (Hashed String)", "role (String: candidate | recruiter)"]
      },
      {
        name: "Jobs Collection",
        description: "Holds recruitment vacancy listings.",
        fields: ["_id (ObjectID)", "title (String)", "description (String)", "requirements (Array)", "recruiterId (Ref -> Users)", "status (String: open | closed)"]
      },
      {
        name: "Applications Collection",
        description: "Stores candidate listings matching logs.",
        fields: ["_id (ObjectID)", "jobId (Ref -> Jobs)", "candidateId (Ref -> Users)", "status (String: Applied | Interviewing | Closed)", "appliedAt (Date)"]
      }
    ],
    challenges: [
      {
        challenge: "XSS Session Token Protection",
        solution: "Configured Express server controllers to set JWT auth tokens inside HttpOnly, Secure, SameSite cookies, blocking client scripts from intercepting them."
      },
      {
        challenge: "Read Performance Latency under Load",
        solution: "Created Mongoose compound indexes on jobId and candidateId schemas, significantly reducing MongoDB lookup execution times."
      }
    ],
    outcomeTitle: "Project Outcome",
    outcome: [
      "Successfully developed a dual-role recruitment dashboard.",
      "Implemented JWT session authorization via secure HttpOnly cookies.",
      "Optimized read latencies using compound database indices.",
      "Practiced responsive full-stack component synchronization."
    ]
  },
  {
    id: "hotel",
    title: "Hotel Management System Modernization",
    category: "Modernization Case Study",
    description: "A comprehensive migration of a legacy Java Swing desktop application into a decoupled Spring Boot web application using JPA and an embedded database.",
    stack: ["Spring Boot", "Spring Data JPA", "Java", "H2 Database", "REST API"],
    status: "Completed academic desktop project",
    isCompleted: true,
    github: "https://github.com/fashfa026-ctrl",
    demo: null,
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
    title: "Ice Cream Shop Web Application",
    category: "Coursework Web App",
    description: "A multi-page e-commerce web application featuring dedicated portals for customers to browse products and administrators to manage inventory and workflows.",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "XAMPP"],
    status: "Completed coursework project",
    isCompleted: true,
    github: "https://github.com/fashfa026-ctrl",
    demo: null,
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
    title: "Food Frenzy – Fast Food Restaurant POS and Billing Application",
    category: "Desktop POS Application",
    description: "A desktop-based Point of Sale (POS) and automated billing management system developed with C# Windows Forms and .NET Framework to streamline order billing through categorized menu selection, automated change calculation, and receipt generation.",
    stack: ["C#", ".NET Framework", "Windows Forms", "Microsoft Visual Studio 2015"],
    status: "Completed C# desktop project",
    isCompleted: true,
    github: "https://github.com/fashfa026-ctrl",
    demo: null,
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
  }
];
