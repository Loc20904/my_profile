import { ProfileData } from '../models/profile.model';

export const PROFILE_DATA: ProfileData = {
  name: 'Nguyễn Thành Lộc',
  avatarUrl: 'assets/avatar.jpg',
  title: 'Backend .NET & AI Systems Engineer',
  tagline: 'Engineering High-Throughput .NET Core Systems & Resilient AI-Augmented Pipelines.',
  statusBadge: 'OPEN TO .NET BACKEND ROLES — DA NANG & HYBRID / REMOTE',
  summary: 'Kỹ sư phần mềm với nền tảng lập trình Hướng đối tượng (OOP) vững chắc khởi đầu từ Java, chuyên sâu kiến trúc backend ASP.NET Core / Spring Boot và tích hợp AI Microservices (RAG). Sở hữu tư duy đa nền tảng linh hoạt từ Web Enterprise, Mobile App (Flutter) đến Game Engineering (Unity C# & GameMaker). Tốt nghiệp ĐH FPT (GPA 3.5/4.0), cựu Backend Intern tại FPT Software Đà Nẵng.',
  aboutMe: 'Final-year Software Engineering student at FPT University (GPA 3.5/4.0) with real-world enterprise internship experience at FPT Software and technical leadership in .NET & AI projects. Solid computer science foundation rooted in Java OOP, expanding across scalable backend systems (ASP.NET Core, Spring Boot), cross-platform mobile development (Flutter - SimSiu), and interactive game systems (Unity C# & GameMaker - Spiritbound). Passionate about high performance, clean architecture, and building production-grade software.',
  contacts: {
    email: 'nguyenthanhloc20092004@gmail.com',
    phone: '+84 334 354 406',
    github: 'https://github.com/Loc20904',
    linkedin: 'https://www.linkedin.com/in/th4nhl0c',
    location: 'Đà Nẵng, Việt Nam',
  },
  metrics: [
    {
      value: '3.5 / 4.0',
      label: 'GPA Software Engineering',
      detail: 'FPT University (2022 - 2026)',
      iconName: 'graduation'
    },
    {
      value: '< 45ms',
      label: 'P95 API Latency Goal',
      detail: 'EF Core compiled queries & Redis memory caching',
      iconName: 'zap'
    },
    {
      value: 'Decoupled',
      label: 'Architecture Modernization',
      detail: 'Migrated legacy C# monolithic app at FPT Software',
      iconName: 'layers'
    },
    {
      value: 'Enterprise RAG',
      label: 'AI Pipelines Built',
      detail: 'FastAPI microservices with built-in hallucination checks',
      iconName: 'cpu'
    }
  ],
  architectureNodes: [
    {
      id: 'gateway',
      layerName: 'Tầng 1: Gateway & Security',
      title: 'API Gateway & Reverse Proxy',
      tech: 'YARP / Nginx & JWT Authentication',
      patterns: ['Reverse Proxy', 'Rate Limiting', 'SSL Offloading', 'OAuth2 / RBAC'],
      responsibilities: 'Định tuyến request, xác thực JWT token, xoay vòng refresh token, và áp dụng sliding rate-limiter chống DDoS.',
      performanceNote: 'Giảm 30% overhead bằng cách chặn các request không hợp lệ ngay tại biên mạng trước khi vào core application.',
      status: 'online'
    },
    {
      id: 'backend-core',
      layerName: 'Tầng 2: Core Application (.NET 8/9)',
      title: 'ASP.NET Core Clean Architecture',
      tech: 'C#, ASP.NET Core Web API, MediatR, FluentValidation',
      patterns: ['Clean Architecture', 'CQRS', 'Repository & Unit of Work', 'Dependency Injection'],
      responsibilities: 'Phân tách 4 lớp: Domain (Entities, Value Objects), Application (Use Cases, Commands/Queries), Infrastructure (Database, External APIs), và Presentation (Web API Controllers / Minimal APIs).',
      performanceNote: 'Tận dụng IAsyncEnumerable và ValueTask để hạn chế cấp phát bộ nhớ (Zero Allocation) trong các luồng dữ liệu lớn.',
      status: 'online'
    },
    {
      id: 'cache-layer',
      layerName: 'Tầng 3: Caching & State',
      title: 'Distributed In-Memory Cache',
      tech: 'Redis & MemoryCache',
      patterns: ['Cache-Aside Pattern', 'Sliding Expiration', 'Token Blacklisting'],
      responsibilities: 'Lưu trữ các dữ liệu đọc nhiều (Master data, user session, housing listings) và quản lý blacklist token khi logout.',
      performanceNote: 'Thời gian truy xuất dữ liệu cached < 2ms, giảm tải 75% số truy vấn đọc trực tiếp xuống cơ sở dữ liệu chính.',
      status: 'online'
    },
    {
      id: 'data-layer',
      layerName: 'Tầng 4: Persistence & Storage',
      title: 'Relational Database Engine',
      tech: 'SQL Server / PostgreSQL, EF Core, LINQ',
      patterns: ['Database Migrations', 'Composite Indexes', 'AsNoTracking Queries', 'Connection Pooling'],
      responsibilities: 'Lưu trữ dữ liệu nghiệp vụ quan hệ an toàn, đảm bảo tính toàn vẹn giao dịch ACID và quản lý version schema tự động.',
      performanceNote: 'Tối ưu chỉ mục tìm kiếm và sử dụng AsNoTracking cho các truy vấn Read-only để tăng tốc 4x.',
      status: 'online'
    },
    {
      id: 'ai-microservice',
      layerName: 'Tầng 5: AI & Intelligence Engine',
      title: 'AI Microservice & RAG Pipeline',
      tech: 'FastAPI, Python, LangChain, Vector Database',
      patterns: ['Microservices', 'RAG (Retrieval-Augmented Generation)', 'Hallucination Guardrails'],
      responsibilities: 'Cào dữ liệu thị trường, chuẩn hóa văn bản, sinh vector embeddings và truy vấn ngữ nghĩa kết hợp kiểm soát ảo giác của LLM.',
      performanceNote: 'Microservice tách biệt giúp bảo vệ core backend .NET không bị nghẽn CPU khi model inference.',
      status: 'online'
    }
  ],
  mockEndpoints: [
    {
      method: 'GET',
      path: '/api/v1/housing/match?studentId=loc20904',
      description: 'Mô phỏng thuật toán matching tìm bạn cùng phòng và nhà trọ (UniNest)',
      latencyMs: 38,
      statusCode: 200,
      curlCommand: 'curl -X GET "https://api.uninest.loc/v1/housing/match?studentId=loc20904" \\\n  -H "Authorization: Bearer eyJhbGciOiJIUz..." \\\n  -H "Accept: application/json"',
      responsePayload: {
        statusCode: 200,
        status: 'Success',
        executionTimeMs: 38.2,
        data: {
          studentId: 'loc20904',
          university: 'FPT University Da Nang',
          matchScore: 96.5,
          compatibleRoommates: [
            { id: 'usr_881', name: 'Le Hoang Minh', major: 'Software Engineering', habitsMatch: ['Night Owl', 'Cleanliness: High', 'No Smoking'] },
            { id: 'usr_420', name: 'Tran Duc Anh', major: 'Information Assurance', habitsMatch: ['Study-oriented', 'Quiet'] }
          ],
          recommendedDistricts: ['Ngu Hanh Son', 'Son Tra'],
          averagePriceRangeVnd: '2,500,000 - 3,500,000'
        }
      }
    },
    {
      method: 'POST',
      path: '/api/v1/ai/rag/brand-intel',
      description: 'Mô phỏng pipeline truy vấn RAG & đánh giá Hallucination (BrandHub)',
      latencyMs: 142,
      statusCode: 200,
      curlCommand: 'curl -X POST "https://ai.brandhub.loc/v1/rag/intel" \\\n  -H "Content-Type: application/json" \\\n  -d \'{"brandQuery": "Tech startups VN", "topK": 5, "verifyHallucination": true}\'',
      responsePayload: {
        statusCode: 200,
        pipeline: 'BrandHub-RAG-v2',
        retrievalLatencyMs: 46.1,
        inferenceLatencyMs: 95.9,
        hallucinationCheck: {
          isGrounded: true,
          confidenceScore: 0.984,
          detectedConflicts: 0
        },
        entitiesResolved: ['FPT Software', 'Viettel', 'VNG Corporation'],
        marketSentiment: 'Positive / Growth Oriented'
      }
    },
    {
      method: 'GET',
      path: '/health/live',
      description: 'Health Check probe cho Kubernetes & Service Orchestrator',
      latencyMs: 4,
      statusCode: 200,
      curlCommand: 'curl -X GET "https://api.loc20904.me/health/live"',
      responsePayload: {
        status: 'Healthy',
        totalDuration: '00:00:00.0041230',
        entries: {
          'sqlserver-db': { status: 'Healthy', duration: '00:00:00.0020' },
          'redis-cache': { status: 'Healthy', duration: '00:00:00.0011' },
          'ai-rag-service': { status: 'Healthy', duration: '00:00:00.0035' }
        },
        uptime: '99.98%',
        node: 'fpt-danang-cluster-01'
      }
    }
  ],
  projects: [
    {
      id: 'brandhub',
      title: 'BrandHub — AI Brand Intelligence Platform',
      category: 'Enterprise Microservices & RAG Systems',
      role: 'AI Team Lead',
      period: '06/2026 – Present (Ongoing)',
      tagline: 'Nền tảng phân tích thông tin thương hiệu tự động với RAG và kiểm soát Hallucination chuyên sâu.',
      overview: 'Lãnh đạo nhóm AI thiết kế và xây dựng hệ thống Microservices thông minh. Xây dựng dịch vụ quản lý dữ liệu và xử lý nghiệp vụ với Spring Boot (Java) kết hợp FastAPI (Python) cho pipeline RAG truy vấn dữ liệu ngữ cảnh, đánh giá hallucination và entity resolution.',
      architectureHighlights: [
        'Phát triển core business services bằng Java & Spring Boot tích hợp với data ingestion crawler tự động thu thập và chuẩn hóa dữ liệu.',
        'Thiết kế pipeline RAG kết hợp Vector Embeddings, Semantic Search và Guardrails đánh giá độ tin cậy kết quả của LLM.',
        'Tách biệt hoàn toàn AI service thành kiến trúc Microservices giao tiếp thông qua RESTful APIs và hàng đợi dữ liệu.'
      ],
      metrics: [
        { label: 'Role', value: 'AI Team Lead' },
        { label: 'Stack Synergy', value: 'Spring Boot & FastAPI' },
        { label: 'Architecture', value: 'Microservices & RAG' }
      ],
      techStack: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'LangChain', 'RAG Pipelines', 'Vector DB', 'Docker'],
      githubUrl: 'https://github.com/BrandHubOrganization',
      featured: true
    },
    {
      id: 'uninest',
      title: 'UniNest — Student Roommate & Housing Platform',
      category: 'Enterprise .NET Clean Architecture',
      role: 'Team Lead / Full-stack Developer',
      period: '02/2026 – 05/2026',
      tagline: 'Hệ thống kết nối tìm kiếm bạn cùng phòng và phòng trọ thông minh cho sinh viên Đà Nẵng.',
      overview: 'Dẫn dắt đội ngũ phát triển nền tảng kết nối phòng trọ cho sinh viên. Trực tiếp thiết kế kiến trúc hệ thống backend bằng ASP.NET Core Web API theo chuẩn Clean Architecture 4 lớp, bảo mật tài khoản và thuật toán matching hồ sơ đa tiêu chí.',
      architectureHighlights: [
        'Áp dụng Clean Architecture (Domain, Application, Infrastructure, API) giúp tách biệt hoàn toàn Business Rules khỏi Framework.',
        'Sử dụng Entity Framework Core với Code-First Migrations, tối ưu hóa câu lệnh LINQ và Indexed Queries.',
        'Bảo mật đăng nhập và phân quyền đa vai trò (Student, Landlord, Admin) bằng JWT Bearer và Refresh Token.'
      ],
      metrics: [
        { label: 'Role', value: 'Team Lead & Architect' },
        { label: 'P95 Latency', value: '< 50ms' },
        { label: 'Patterns', value: 'Clean Arch + EF Core' }
      ],
      techStack: ['C#', '.NET 8', 'ASP.NET Core Web API', 'EF Core', 'SQL Server', 'JWT / RBAC', 'RESTful API'],
      githubUrl: 'https://github.com/Loc20904/UniNest',
      featured: true
    },
    {
      id: 'simsiu',
      title: 'SimSiu — Cross-Platform Mobile & Backend Ecosystem',
      category: 'Cross-Platform Mobile & Cloud API',
      role: 'Full-stack Developer',
      period: '2025',
      tagline: 'Ứng dụng di động đa nền tảng Flutter kết nối hệ thống backend ASP.NET Core Web API.',
      overview: 'Phát triển giải pháp ứng dụng di động toàn diện kết hợp giữa mobile client Flutter và server backend ASP.NET Core Web API. Trực tiếp thiết kế giao diện mượt mà trên cả iOS & Android, đồng thời xây dựng hệ thống API an toàn, tối ưu hóa thời gian phản hồi và quản lý đồng bộ dữ liệu.',
      architectureHighlights: [
        'Xây dựng ứng dụng di động với Flutter & Dart, phân tách rõ ràng State Management và Service Layer đảm bảo hiệu năng 60fps.',
        'Phát triển server backend bằng ASP.NET Core Web API, thiết kế RESTful endpoints tuân thủ Clean Architecture và DTO pattern.',
        'Tích hợp xác thực bảo mật, xử lý dữ liệu bất đồng bộ và cơ chế local caching giảm thiểu request dư thừa.'
      ],
      metrics: [
        { label: 'Mobile Tech', value: 'Flutter & Dart' },
        { label: 'Backend API', value: 'ASP.NET Core' },
        { label: 'Platform', value: 'iOS & Android' }
      ],
      techStack: ['Flutter', 'Dart', 'C#', 'ASP.NET Core', 'RESTful API', 'State Management'],
      githubUrl: 'https://github.com/Loc20904/SimSiu',
      githubBeUrl: 'https://github.com/Loc20904/SimSiuBE',
      featured: true
    },
    {
      id: 'spiritbound',
      title: 'Spiritbound: Rise of the Elements — Action Game',
      category: 'Game Engineering & OOP Architecture',
      role: 'Game Developer',
      period: '2024 – 2025',
      tagline: 'Tựa game hành động phát triển bằng Unity (C#) và GameMaker với tư duy lập trình hướng đối tượng (OOP) tối ưu hiệu năng.',
      overview: 'Hiện thực hóa tựa game hành động chiến đấu theo nguyên tố, vận dụng tối đa các nguyên lý Lập trình Hướng đối tượng (OOP) và Design Patterns trong việc thiết kế vòng lặp game loop, hành vi AI kẻ địch và hệ thống tương tác vật lý thời gian thực.',
      architectureHighlights: [
        'Vận dụng sâu sắc OOP (Kế thừa, Đa hình, Đóng gói) và các Design Patterns (State Pattern cho Finite State Machine của AI/Nhân vật, Object Pooling cho đạn và VFX).',
        'Tối ưu hóa vòng lặp Game Loop, xử lý va chạm vật lý (Physics Collision) và tối ưu hóa bộ nhớ tránh Garbage Collection spikes.',
        'Hiện thực hóa hệ thống điều khiển đa dạng trên Unity (C#) song song với các module cơ chế game thử nghiệm trên GameMaker.'
      ],
      metrics: [
        { label: 'Game Engine', value: 'Unity & GameMaker' },
        { label: 'Core Language', value: 'C# (OOP Oriented)' },
        { label: 'Architecture', value: 'FSM & Object Pooling' }
      ],
      techStack: ['Unity', 'C#', 'GameMaker', 'Game Physics', 'OOP Architecture', 'State Pattern', 'Object Pooling'],
      githubUrl: 'https://github.com/Loc20904/Spiritbound-Rise-of-the-Elements',
      featured: true
    },
    {
      id: 'fpt-software-internship',
      title: 'Decoupled Modernization at FPT Software',
      category: 'Enterprise Modernization & Production Delivery',
      role: 'Backend .NET Intern',
      period: '09/2025 – 12/2025',
      tagline: 'Chuyển đổi ứng dụng monolithic C# sang kiến trúc decoupled với ASP.NET Core Web API và Vite.',
      overview: 'Trực tiếp tham gia dự án thực tế tại FPT Software Đà Nẵng. Thực hiện tái cấu trúc hệ thống legacy C# nguyên khối sang mô hình Decoupled Architecture, xây dựng RESTful Web API cho frontend Vite tiêu thụ.',
      architectureHighlights: [
        'Áp dụng các kỹ thuật Clean Architecture và Refactoring code để tăng khả năng maintain và test mã nguồn backend.',
        'Làm quen và thích ứng nhanh với quy trình phát triển phần mềm chuẩn doanh nghiệp (Agile/Scrum, Git flow, Code Review).',
        'Tối ưu hóa các điểm nghẽn hiệu năng trong xử lý dữ liệu nghiệp vụ production.'
      ],
      metrics: [
        { label: 'Company', value: 'FPT Software Da Nang' },
        { label: 'Transition', value: 'Monolith → Decoupled API' },
        { label: 'Standard', value: 'Enterprise Clean Code' }
      ],
      techStack: ['C#', 'ASP.NET Core Web API', 'Clean Architecture', 'Code Optimization', 'Vite', 'Git Workflow'],
      featured: true
    },
    {
      id: 'smartsteps',
      title: 'SmartSteps Server & Web Application',
      category: 'Backend & Data API',
      role: 'Backend Developer',
      period: '05/2026 – 07/2026',
      tagline: 'Server xử lý dữ liệu và hệ sinh thái ứng dụng SmartSteps trên nền tảng C# và Web.',
      overview: 'Thiết kế máy chủ xử lý dữ liệu và cung cấp API đồng bộ hóa dữ liệu cho nền tảng SmartSteps, đảm bảo tính ổn định và tốc độ phản hồi cao.',
      architectureHighlights: [
        'Xây dựng RESTful API xử lý dữ liệu người dùng và thiết bị.',
        'Tối ưu luồng truy vấn cơ sở dữ liệu và xử lý bất đồng bộ.'
      ],
      metrics: [
        { label: 'Tech', value: 'C# Server' },
        { label: 'Ecosystem', value: 'Web & API' }
      ],
      techStack: ['C#', '.NET', 'REST API', 'JavaScript'],
      githubUrl: 'https://github.com/Loc20904/SmartStepsServer',
      featured: false
    }
  ],
  skills: [
    {
      category: 'Backend & Frameworks Core',
      description: 'Nền tảng kỹ thuật lập trình và framework server-side chuyên sâu',
      items: [
        { name: 'C# / .NET 8 / .NET 9', level: 'Proficient', highlight: true },
        { name: 'ASP.NET Core Web API', level: 'Proficient', highlight: true },
        { name: 'Java & Spring Boot', level: 'Advanced', highlight: true },
        { name: 'Minimal APIs', level: 'Advanced' },
        { name: 'Python (FastAPI)', level: 'Advanced', highlight: true },
        { name: 'LINQ & Entity Framework Core', level: 'Proficient', highlight: true }
      ]
    },
    {
      category: 'Architecture & System Design',
      description: 'Tư duy kiến trúc hệ thống, phân tầng và các design patterns thực tế',
      items: [
        { name: 'OOP Principles & Design Patterns', level: 'Proficient', highlight: true },
        { name: 'Clean Architecture (Onion)', level: 'Proficient', highlight: true },
        { name: 'CQRS & MediatR', level: 'Advanced', highlight: true },
        { name: 'Repository & Unit of Work', level: 'Proficient' },
        { name: 'Dependency Injection', level: 'Proficient' },
        { name: 'Microservices Communication', level: 'Advanced' },
        { name: 'RESTful API Standards', level: 'Proficient' }
      ]
    },
    {
      category: 'Mobile & Game Engineering (Multi-Platform)',
      description: 'Phát triển ứng dụng di động đa nền tảng và kỹ thuật lập trình game tối ưu hóa hiệu năng',
      items: [
        { name: 'Flutter & Dart (Cross-Platform)', level: 'Advanced', highlight: true },
        { name: 'Unity & C# (Game Engineering)', level: 'Advanced', highlight: true },
        { name: 'GameMaker Studio', level: 'Proficient' },
        { name: 'Game Physics & Object Pooling', level: 'Advanced' }
      ]
    },
    {
      category: 'Databases & In-Memory Storage',
      description: 'Quản lý, tối ưu hóa và lưu trữ dữ liệu quan hệ lẫn distributed caching',
      items: [
        { name: 'Microsoft SQL Server', level: 'Proficient', highlight: true },
        { name: 'PostgreSQL', level: 'Advanced' },
        { name: 'Redis (Caching & Sessions)', level: 'Advanced', highlight: true },
        { name: 'Database Index Optimization', level: 'Advanced' }
      ]
    },
    {
      category: 'AI Engineering & Modern Tech',
      description: 'Kỹ thuật tích hợp trí tuệ nhân tạo và xử lý ngôn ngữ tự nhiên',
      items: [
        { name: 'RAG (Retrieval-Augmented Gen)', level: 'Advanced', highlight: true },
        { name: 'LangChain & LLM Workflows', level: 'Advanced', highlight: true },
        { name: 'Hallucination Guardrails', level: 'Advanced' },
        { name: 'Vector Databases', level: 'Advanced' },
        { name: 'Web Crawling & Data Ingestion', level: 'Advanced' }
      ]
    },
    {
      category: 'DevOps, Tools & Frontend Synergy',
      description: 'Công cụ vận hành, CI/CD và khả năng phối hợp full-stack',
      items: [
        { name: 'Docker & Containerization', level: 'Advanced' },
        { name: 'Git & GitHub Actions CI/CD', level: 'Proficient' },
        { name: 'Postman & OpenAPI / Swagger', level: 'Proficient' },
        { name: 'Angular / TypeScript (Full-stack)', level: 'Advanced' },
        { name: 'Vercel Deployment', level: 'Proficient' }
      ]
    }
  ],
  timeline: [
    {
      period: '06/2026 – Hiện tại',
      organization: 'BrandHub Organization',
      role: 'AI Team Lead',
      location: 'Đà Nẵng / Remote',
      type: 'experience',
      achievements: [
        'Dẫn dắt đội ngũ AI phát triển Microservices thông minh phân tích thị trường với FastAPI và Python.',
        'Hiện thực hóa pipeline RAG thế hệ mới kết hợp module đánh giá Hallucination và Entity Resolution.',
        'Xây dựng hệ thống Data Ingestion cào dữ liệu tự động phục vụ các mô hình phân tích.'
      ],
      badges: ['Team Leadership', 'FastAPI', 'LangChain', 'RAG Pipeline']
    },
    {
      period: '02/2026 – 05/2026',
      organization: 'UniNest System',
      role: 'Team Lead & Backend Architect',
      location: 'Đà Nẵng',
      type: 'experience',
      achievements: [
        'Kiến trúc toàn bộ hệ thống Web API bằng ASP.NET Core theo quy chuẩn Clean Architecture.',
        'Thiết kế CSDL quan hệ với EF Core Code-First, tối ưu hóa truy vấn và bảo mật JWT authentication.',
        'Chỉ đạo phân chia task và giám sát tiến độ dự án hoàn thành đúng hạn.'
      ],
      badges: ['.NET 8', 'Clean Architecture', 'EF Core', 'Team Lead']
    },
    {
      period: '09/2025 – 12/2025',
      organization: 'FPT Software Da Nang',
      role: 'Backend .NET Intern',
      location: 'Đà Nẵng',
      type: 'experience',
      achievements: [
        'Chuyển đổi thành công ứng dụng legacy C# nguyên khối sang kiến trúc decoupled với ASP.NET Core Web API và Vite frontend.',
        'Áp dụng Clean Architecture và tối ưu hóa code nâng cao chất lượng mã nguồn production.',
        'Thích ứng toàn diện với môi trường dự án phần mềm quy mô doanh nghiệp.'
      ],
      badges: ['FPT Software', 'ASP.NET Core', 'Decoupled Monolith', 'Clean Code']
    },
    {
      period: '2022 – 2026',
      organization: 'Đại học FPT Đà Nẵng (FPT University)',
      role: 'Sinh viên Kỹ thuật Phần mềm (Software Engineering)',
      location: 'Đà Nẵng',
      type: 'education',
      achievements: [
        'Điểm trung bình tích lũy GPA: 3.5 / 4.0 (Tốt nghiệp loại Giỏi).',
        'Nền tảng CS & OOP chuyên sâu bắt đầu từ Java, Cấu trúc Dữ liệu & Giải thuật (DSA), Lập trình .NET Cross-Platform và Phát triển Game (Unity/GameMaker).',
        'Trưởng nhóm nhiều dự án thực hành công nghệ xuyên suốt quá trình học tập (UniNest, BrandHub, SimSiu, Spiritbound).'
      ],
      badges: ['GPA 3.5/4.0', 'Java & OOP', 'DSA Foundation', '.NET Core', 'Unity & Flutter']
    }
  ],
  certifications: [
    {
      name: 'Fundamentals of AI Agents Using RAG and LangChain',
      issuer: 'Coursera',
      year: '2026',
      skills: ['AI Agents', 'RAG Pipelines', 'LangChain', 'Vector Search']
    },
    {
      name: 'Generative AI Applications with RAG and LangChain',
      issuer: 'Coursera',
      year: '2026',
      skills: ['Generative AI', 'Application Development', 'Prompt Engineering', 'RAG']
    },
    {
      name: 'Project Management Principles and Practices Specialization',
      issuer: 'Coursera',
      year: '2026',
      skills: ['Project Planning', 'Task Delegation', 'Agile/Scrum', 'Risk Management']
    }
  ]
};
