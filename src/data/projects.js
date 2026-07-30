export const projects = [
  {
    id: "careerhub",
    title: "CareerHub",
    category: "Featured Product Case Study",
    description: "A dual-sided recruitment platform connecting hiring managers and candidate applicants, built to streamline listing management and application lifecycles.",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    status: "Completed flagship MERN project",
    isCompleted: true,
    github: "https://github.com/fashfa026-ctrl",
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
    title: "Ice Cream Delights",
    category: "Coursework Web App",
    description: "A fully functional, multi-page e-commerce web application featuring dedicated portals for customers (users) and sellers (admins) to manage workflows.",
    stack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    status: "Completed coursework project",
    isCompleted: true,
    github: "https://github.com/fashfa026-ctrl",
    demo: null,
    role: "Sole Developer",
    scope: "Academic Coursework Refactoring & Build",
    problem: "The legacy codebase contained plaintext MD5 authentication, lack of file upload validation, hardcoded server paths (C:\\xampp\\htdocs\\...), and critical database bugs.",
    objective: "To secure authentication, implement file upload defense rules, prevent SQL injection via PDO prepared statements, and resolve duplicate constant warnings.",
    targetUsers: "Ice cream customers browsing catalogs, and sellers managing inventory orders.",
    techDetails: {
      frontend: ["HTML5 & Vanilla CSS3", "JavaScript (ES6+)", "SwiperJS & SweetAlert", "Boxicons & FontAwesome"],
      backend: ["PHP (OOP & PDO - PHP Data Objects)"],
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
  }
];
