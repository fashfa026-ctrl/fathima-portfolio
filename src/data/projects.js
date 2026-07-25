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
    title: "Ice Cream Shop Web Application",
    category: "Coursework Web App",
    description: "A coursework web application currently under development using PHP and MySQL. The project allows customers to browse ice cream products, place orders, and enables administrators to manage products and inventory while expanding my backend development skills.",
    stack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    status: "Currently under development",
    isCompleted: false,
    github: "https://github.com/fashfa026-ctrl",
    demo: null,
    role: "Sole Developer",
    scope: "Ongoing academic coursework project",
    problem: "Developing a client-facing ordering interface and inventory catalog to learn core backend scripting logic.",
    objective: "To construct a lightweight PHP ordering web application with database storage and admin CRUD inventory access, being refined as part of academic coursework.",
    targetUsers: "Online customers ordering ice cream, and shop managers updating product stock.",
    techDetails: {
      frontend: ["HTML5", "CSS3", "JavaScript"],
      backend: ["PHP"],
      database: ["MySQL"],
      tools: ["XAMPP", "phpMyAdmin"]
    },
    features: [
      {
        title: "Product Listing",
        description: "Displays product descriptions, prices, and live stock quantities directly pulled from MySQL."
      },
      {
        title: "Shopping Cart & Ordering",
        description: "Maintains customer selection list across pages and records customer order placement on checkout."
      },
      {
        title: "Admin Product Management",
        description: "Enables administrators to perform CRUD operations, manage product details, and configure inventories."
      }
    ],
    architecture: {
      client: "Browser client rendering DOM pages and performing basic input validation checks.",
      server: "PHP application executing on Apache Server dynamically rendering page layouts based on query parameters.",
      database: "MySQL Database storing products, orders, and customer entries."
    },
    dbDesign: [
      {
        name: "Products Table",
        description: "Stores flavor catalogs, descriptions, and prices.",
        fields: ["product_id (INT, PK)", "flavor_name (VARCHAR)", "price (DECIMAL)", "stock_quantity (INT)", "description (TEXT)", "category_id (INT, FK)"]
      },
      {
        name: "Categories Table",
        description: "Groups products by type.",
        fields: ["category_id (INT, PK)", "category_name (VARCHAR)"]
      },
      {
        name: "Customers Table",
        description: "Stores guest registration details.",
        fields: ["customer_id (INT, PK)", "name (VARCHAR)", "email (VARCHAR)", "phone (VARCHAR)"]
      },
      {
        name: "Orders Table",
        description: "Stores customer transaction details.",
        fields: ["order_id (INT, PK)", "customer_id (INT, FK)", "order_date (DATETIME)", "total_price (DECIMAL)"]
      },
      {
        name: "Order Items Table",
        description: "Stores order items metadata.",
        fields: ["order_item_id (INT, PK)", "order_id (INT, FK)", "product_id (INT, FK)", "quantity (INT)"]
      }
    ],
    challenges: [
      {
        challenge: "Managing stock updates after orders",
        solution: "Implementing PHP checkout queries that decrement product stock quantities immediately when an order transaction is recorded."
      },
      {
        challenge: "Maintaining relational database consistency",
        solution: "Configuring relational constraints with cascading updates in MySQL, preventing orphan booking records when products get altered."
      },
      {
        challenge: "Handling CRUD validations",
        solution: "Integrating client-side JavaScript regex checkers alongside server-side PHP validation checks to block empty inputs."
      },
      {
        challenge: "Organizing reusable PHP pages",
        solution: "Refactoring layout blocks into modular header and footer templates included dynamically using PHP require constructs."
      }
    ],
    outcomeTitle: "Current Progress",
    outcome: [
      "Core PHP and MySQL architecture completed.",
      "CRUD functionality implemented.",
      "Product and inventory management developed.",
      "Continuing development and feature refinement.",
      "Expanding backend development skills through coursework."
    ]
  }
];
