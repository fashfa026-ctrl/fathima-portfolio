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
    title: "Hotel Management System",
    category: "Coursework Project",
    description: "An offline desktop system designed to handle guest reservations, vacant room grid management, and billing invoicing processing.",
    stack: ["Java", "OOP", "MySQL", "C#"],
    status: "Completed academic desktop project",
    isCompleted: true,
    github: "https://github.com/fashfa026-ctrl",
    demo: null,
    role: "Sole Developer",
    scope: "HNDIT Coursework Project",
    problem: "Manual booking led to double-allocation of rooms, slower guest check-ins, and fragmented invoicing records.",
    objective: "To design a secure local desktop system providing structured room status logs and automatic invoice outputs.",
    targetUsers: "Hotel desk receptionists and administrative managers.",
    techDetails: {
      frontend: ["Java Swing GUI layout components", "C# Windows Forms layouts"],
      backend: ["Java OOP runtime modules", "ADO.NET SQL connectivity libraries"],
      database: ["MySQL Database Server"],
      tools: ["NetBeans IDE", "Visual Studio Community", "Git version control"]
    },
    features: [
      {
        title: "Interactive Room Grid",
        description: "Renders a visual grid displaying vacant, occupied, and maintenance states of hotel rooms."
      },
      {
        title: "Guest Billing Calculator",
        description: "Automatically computes final costs based on room package type, occupancy days, and custom tax rules."
      },
      {
        title: "CRUD Guest Manager",
        description: "Stores and retrieves national ID cards (NIC), check-in durations, and primary phone contacts."
      }
    ],
    architecture: {
      client: "Desktop Swing/WinForms client capturing user events and inputs.",
      server: "Object-oriented program handling business rules, inheritance objects, and SQL execution.",
      database: "MySQL Server engine storing normalized relational tables."
    },
    dbDesign: [
      {
        name: "Guests Table",
        description: "Stores guest identification details.",
        fields: ["guest_id (INT, PK)", "first_name (VARCHAR)", "last_name (VARCHAR)", "nic_number (VARCHAR)", "phone (VARCHAR)"]
      },
      {
        name: "Rooms Table",
        description: "Holds room types and current status.",
        fields: ["room_number (INT, PK)", "type (VARCHAR: Single | Double | Suite)", "price_per_day (DECIMAL)", "status (VARCHAR: Vacant | Occupied | Maintenance)"]
      },
      {
        name: "Bookings Table",
        description: "Manages check-in transactions.",
        fields: ["booking_id (INT, PK)", "guest_id (INT, FK)", "room_number (INT, FK)", "check_in_date (DATE)", "check_out_date (DATE)", "total_price (DECIMAL)"]
      }
    ],
    challenges: [
      {
        challenge: "Double Booking Overlap Prevention",
        solution: "Utilized MySQL transaction isolation controls and write blocks, ensuring a room's status cannot be occupied in overlapping date ranges."
      },
      {
        challenge: "Object Relational Interface translation",
        solution: "Established a clean Data Access Object (DAO) pattern in Java, isolating SQL queries from frontend event logic."
      }
    ],
    outcomeTitle: "Project Outcome",
    outcome: [
      "Completed as HNDIT coursework program.",
      "Designed object-oriented abstractions for guests, rooms, and invoicing.",
      "Prevented double-booking race conditions using transactional checks.",
      "Interfaced Java graphical layouts with MySQL relational schemas."
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
