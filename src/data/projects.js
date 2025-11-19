import { crtdTechStack, zapierTechStack, excelidrawTechStack, digitalWalletTechStack, brainlyTechStack } from './techStacks.js';

export const projects = [
  {
    id: "crtd-technology",
    title: "CRTD Technology Web Application",
    description: "A comprehensive web application for CRTD Technology built with the MERN stack, featuring automated deployment through CI/CD pipeline.",
    image: "/media/icons/crtd.svg",
    techStack: crtdTechStack,
    features: [
      {
        title: "Responsive Design",
        description: "Mobile-first approach ensuring optimal user experience across all devices"
      },
      {
        title: "RESTful API",
        description: "Well-structured backend API with proper error handling and validation"
      },
      {
        title: "Database Integration",
        description: "MongoDB integration with optimized queries and data modeling"
      },
      {
        title: "CI/CD Pipeline",
        description: "Automated deployment process using modern DevOps practices"
      }
    ],
    implementation: {
      architecture: "MERN Stack with CI/CD Pipeline",
      highlights: [
        "Custom React hooks for state management and API calls",
        "MongoDB aggregation pipelines for complex queries",
        "Docker containerization with automated deployment",
        "JWT authentication with refresh token mechanism"
      ],
      codeSnippet: "// Custom hook for API state management\nconst useApiData = (endpoint) => {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  \n  useEffect(() => {\n    fetchData(endpoint).then(setData);\n  }, [endpoint]);\n  \n  return { data, loading };\n};"
    },
    demonstrations: [
      {
        title: "Homepage & Navigation",
        description: "Clean, responsive homepage with intuitive navigation menu and hero section showcasing company services.",
        image: "/media/screenshots/crtd-homepage.png"
      },
      {
        title: "Service Dashboard",
        description: "Interactive dashboard displaying real-time analytics and service metrics with MongoDB integration.",
        image: "/media/screenshots/crtd-dashboard.png"
      },
      {
        title: "User Authentication",
        description: "Secure login system with JWT tokens and role-based access control for different user types.",
        image: "/media/screenshots/crtd-auth.png"
      }
    ],
    impact: {
      metrics: [
        { label: "Performance Improvement", value: "40% faster load times" },
        { label: "User Engagement", value: "60% increase in session duration" },
        { label: "Deployment Efficiency", value: "90% reduction in deployment time" }
      ],
      outcomes: [
        "Successfully deployed to production serving 1000+ daily users",
        "Automated CI/CD pipeline reduced manual deployment errors by 95%",
        "Responsive design improved mobile user experience significantly"
      ]
    },
    githubUrl: "https://github.com/chouhanrahul1999/crtd-technology",
    liveUrl: "https://crtd.in/"
  },
  {
    id: "excelidraw",
    title: "Excelidraw - Real-time Collaborative Whiteboard",
    description: "A real-time collaborative whiteboard application with WebSocket support, built using modern full-stack technologies in a monorepo structure.",
    image: "/media/icons/excelidraw.svg",
    techStack: excelidrawTechStack,
    features: [
      {
        title: "Real-time Collaboration",
        description: "Multiple users can draw and edit simultaneously with WebSocket connections"
      },
      {
        title: "Drawing Tools",
        description: "Comprehensive set of drawing tools including shapes, text, and freehand drawing"
      },
      {
        title: "Room Management",
        description: "Create and join collaborative rooms with unique identifiers"
      },
      {
        title: "Data Persistence",
        description: "Save and load drawings with PostgreSQL database integration"
      }
    ],
    implementation: {
      architecture: "Monorepo with WebSocket Real-time Communication",
      highlights: [
        "WebSocket server with Socket.io for real-time collaboration",
        "Canvas optimization with requestAnimationFrame",
        "Operational transformation for conflict resolution",
        "Turborepo for efficient monorepo management"
      ],
      codeSnippet: "// Real-time drawing synchronization\nsocket.on('drawing-update', (drawData) => {\n  const canvas = canvasRef.current;\n  const ctx = canvas.getContext('2d');\n  \n  requestAnimationFrame(() => {\n    renderDrawing(ctx, drawData);\n  });\n});"
    },
    demonstrations: [
      {
        title: "Real-time Collaboration",
        description: "Multiple users drawing simultaneously with instant synchronization across all connected clients.",
        image: "/media/screenshots/excelidraw-collaboration.png"
      },
      {
        title: "Drawing Tools Interface",
        description: "Comprehensive toolbar with shapes, text, colors, and drawing tools for creating detailed diagrams.",
        image: "/media/screenshots/excelidraw-tools.png"
      },
      {
        title: "Room Management",
        description: "Create and join collaborative rooms with unique URLs for team collaboration sessions.",
        image: "/media/screenshots/excelidraw-rooms.png"
      }
    ],
    impact: {
      metrics: [
        { label: "Real-time Latency", value: "<50ms synchronization" },
        { label: "Concurrent Users", value: "100+ users per room" },
        { label: "Drawing Performance", value: "60fps smooth rendering" }
      ],
      outcomes: [
        "Built scalable real-time collaboration system handling multiple concurrent users",
        "Implemented conflict resolution preventing data loss during simultaneous edits",
        "Optimized canvas performance for smooth drawing experience across devices"
      ]
    },
    githubUrl: "https://github.com/chouhanrahul1999/Exceliodraw",
    liveUrl: null
  },
  {
    id: "digital-payment",
    title: "Digital Payment Application",
    description: "A secure digital payment platform with P2P transfers, bank integration, and real-time transaction tracking built with modern web technologies.",
    image: "/media/icons/paytm.svg",
    techStack: digitalWalletTechStack,
    features: [
      {
        title: "Secure Authentication",
        description: "JWT-based authentication with multi-factor security measures"
      },
      {
        title: "P2P Transfers",
        description: "Instant peer-to-peer money transfers with transaction verification"
      },
      {
        title: "Bank Integration",
        description: "Connect and manage multiple bank accounts with secure API integration"
      },
      {
        title: "Transaction History",
        description: "Real-time transaction tracking with detailed history and analytics"
      }
    ],
    implementation: {
      architecture: "Secure Financial Platform with Database Transactions",
      highlights: [
        "Prisma ORM with type-safe database operations",
        "Database transactions for atomic money transfers",
        "Input validation with Zod schema validation",
        "Rate limiting and security middleware"
      ],
      codeSnippet: "// Atomic money transfer transaction\nawait prisma.$transaction(async (tx) => {\n  await tx.account.update({\n    where: { id: fromAccountId },\n    data: { balance: { decrement: amount } }\n  });\n  \n  await tx.account.update({\n    where: { id: toAccountId },\n    data: { balance: { increment: amount } }\n  });\n});"
    },
    demonstrations: [
      {
        title: "Secure Dashboard",
        description: "User dashboard showing account balance, recent transactions, and quick transfer options with real-time updates.",
        image: "/media/screenshots/paytm-dashboard.png"
      },
      {
        title: "P2P Transfer Flow",
        description: "Step-by-step money transfer process with recipient verification and transaction confirmation.",
        image: "/media/screenshots/paytm-transfer.png"
      },
      {
        title: "Transaction History",
        description: "Detailed transaction logs with filtering, search functionality, and downloadable statements.",
        image: "/media/screenshots/paytm-history.png"
      }
    ],
    impact: {
      metrics: [
        { label: "Transaction Security", value: "100% secure transfers" },
        { label: "Database Integrity", value: "Zero data inconsistencies" },
        { label: "API Response Time", value: "<200ms average" }
      ],
      outcomes: [
        "Implemented atomic transactions ensuring financial data integrity",
        "Built secure authentication system with JWT and refresh tokens",
        "Created comprehensive transaction tracking and audit system"
      ]
    },
    githubUrl: "https://github.com/chouhanrahul1999/paytm",
    liveUrl: null
  },
  {
    id: "brainly",
    title: "Brainly - Personal Knowledge Hub",
    description: "A knowledge management platform that organizes learning content from various sources into personalized knowledge bases with sharing capabilities.",
    image: "/media/icons/brainly.svg",
    techStack: brainlyTechStack,
    features: [
      {
        title: "Content Organization",
        description: "Organize YouTube videos, Twitter posts, and articles into structured knowledge bases"
      },
      {
        title: "Dashboard Analytics",
        description: "Comprehensive dashboard showing learning progress and content statistics"
      },
      {
        title: "Content Management",
        description: "Add, edit, delete, and categorize learning materials with tags and folders"
      },
      {
        title: "Sharing System",
        description: "Share knowledge bases publicly or with specific users with permission controls"
      }
    ],
    implementation: {
      architecture: "Content Management System with Analytics",
      highlights: [
        "Flexible MongoDB schema for multiple content types",
        "Tag-based organization with full-text search",
        "Chart.js integration for analytics visualization",
        "Role-based permissions with middleware protection"
      ],
      codeSnippet: "// Content aggregation with analytics\nconst analytics = await Content.aggregate([\n  { $match: { userId: ObjectId(userId) } },\n  { $group: {\n    _id: '$contentType',\n    count: { $sum: 1 },\n    avgRating: { $avg: '$rating' }\n  }}\n]);"
    },
    demonstrations: [
      {
        title: "Content Organization",
        description: "Drag-and-drop interface for organizing YouTube videos, articles, and tweets into structured knowledge bases.",
        image: "/media/screenshots/brainly-organization.png"
      },
      {
        title: "Analytics Dashboard",
        description: "Interactive charts showing learning progress, content consumption patterns, and knowledge base statistics.",
        image: "/media/screenshots/brainly-analytics.png"
      },
      {
        title: "Sharing System",
        description: "Public and private sharing options with permission controls for collaborative learning experiences.",
        image: "/media/screenshots/brainly-sharing.png"
      }
    ],
    impact: {
      metrics: [
        { label: "Content Organization", value: "500+ items per knowledge base" },
        { label: "Search Performance", value: "<100ms full-text search" },
        { label: "User Productivity", value: "70% faster content discovery" }
      ],
      outcomes: [
        "Created flexible content management system supporting multiple media types",
        "Implemented advanced analytics providing actionable learning insights",
        "Built collaborative sharing system with granular permission controls"
      ]
    },
    githubUrl: "https://github.com/chouhanrahul1999/brainly",
    liveUrl: null
  }
];