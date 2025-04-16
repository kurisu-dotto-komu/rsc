// A Shared Component - how cool!
import ValueTable from "#/components/valueTable";

export default function EnvironmentValues({ filterNextJs }: { filterNextJs?: boolean }) {
  const { nextJsValues, nonNextJsValues } = getEnvironmentValues();
  const values = filterNextJs ? nextJsValues : nonNextJsValues;
  return <ValueTable values={values} />;
}

function getEnvironmentValues() {
  // Helper function to safely get a value or return undefined
  const safeGet = (fn: () => any) => {
    try {
      const result = fn();
      return result !== undefined && result !== null ? result : undefined;
    } catch (e) {
      return undefined;
    }
  };

  // Helper to safely get OS information
  const getOSInfo = () => {
    try {
      const os = require("os");
      return {
        hostname: os.hostname(),
        platform: os.platform(),
        release: os.release(),
        cpus: os.cpus().length,
      };
    } catch (e) {
      return {
        hostname: undefined,
        platform: undefined,
        release: undefined,
        cpus: undefined,
      };
    }
  };

  // Helper to safely get memory usage
  const getMemoryUsage = () => {
    try {
      if (
        typeof process !== "undefined" &&
        process.memoryUsage &&
        typeof process.memoryUsage === "function"
      ) {
        const memoryUsage = process.memoryUsage();
        return {
          heapUsed: Math.round(memoryUsage.heapUsed / 1024 / 1024) + " MB",
          heapTotal: Math.round(memoryUsage.heapTotal / 1024 / 1024) + " MB",
        };
      }
      return { heapUsed: undefined, heapTotal: undefined };
    } catch (e) {
      return { heapUsed: undefined, heapTotal: undefined };
    }
  };

  // Helper to safely get a header value
  const getHeaderValue = (headerName: string) => {
    return safeGet(() => {
      try {
        const { headers } = require("next/headers");
        return headers().get(headerName);
      } catch (e) {
        return undefined;
      }
    });
  };

  // Helper to safely get a cookie value
  const getCookieValue = (cookieName: string) => {
    return safeGet(() => {
      try {
        const { cookies } = require("next/headers");
        const cookie = cookies().get(cookieName);
        return cookie ? JSON.stringify(cookie) : "Cookie not found";
      } catch (e) {
        return undefined;
      }
    });
  };

  const osInfo = getOSInfo();
  const memoryInfo = getMemoryUsage();

  // Next.js specific values
  const nextJsValues = [
    // System information
    { name: "os.hostname()", value: osInfo.hostname },
    { name: "os.platform()", value: osInfo.platform },
    { name: "os.release()", value: osInfo.release },
    { name: "os.cpus().length", value: osInfo.cpus },

    // Headers and Cookies
    {
      name: "next/headers - headers().get('x-forwarded-for')",
      value: getHeaderValue("x-forwarded-for"),
      masked: true,
    },
    {
      name: "next/headers - headers().get('user-agent')",
      value: getHeaderValue("user-agent"),
    },
    {
      name: "next/headers - headers().get('host')",
      value: getHeaderValue("host"),
    },
    {
      name: "next/headers - headers().get('accept-language')",
      value: getHeaderValue("accept-language"),
    },
    {
      name: "next/cookies - cookies().get('test')",
      value: getCookieValue("test"),
    },

    // Next.js Navigation features
    {
      name: "next/navigation - usePathname()",
      value: safeGet(() => {
        try {
          const { usePathname } = require("next/navigation");
          // This will only work in client components
          if (typeof window !== "undefined") {
            return usePathname();
          }
          return undefined;
        } catch (e) {
          return undefined;
        }
      }),
    },
    {
      name: "next/navigation - useSearchParams()",
      value: safeGet(() => {
        try {
          const { useSearchParams } = require("next/navigation");
          // This will only work in client components
          if (typeof window !== "undefined") {
            const searchParams = useSearchParams();
            return searchParams.toString() || "No search params";
          }
          return undefined;
        } catch (e) {
          return undefined;
        }
      }),
    },
    {
      name: "next/navigation - useParams()",
      value: safeGet(() => {
        try {
          const { useParams } = require("next/navigation");
          // This will only work in client components
          if (typeof window !== "undefined") {
            const params = useParams();
            return Object.keys(params).length ? JSON.stringify(params) : "No params";
          }
          return undefined;
        } catch (e) {
          return undefined;
        }
      }),
    },

    // Environment variables
    {
      name: "process.env.MY_SECRET",
      value: safeGet(() => process.env.MY_SECRET),
      highlight: true,
    },
    {
      name: "process.env.NEXT_PUBLIC_NOT_SECRET",
      value: safeGet(() => process.env.NEXT_PUBLIC_NOT_SECRET),
    },
    {
      name: "process.env.NEXT_RUNTIME",
      value: safeGet(() => process.env.NEXT_RUNTIME || undefined),
    },
    {
      name: "process.env.NEXT_PUBLIC_VERCEL_ENV",
      value: safeGet(() => process.env.NEXT_PUBLIC_VERCEL_ENV),
    },
    // Vercel Framework Environment Variables
    {
      name: "process.env.NEXT_PUBLIC_VERCEL_TARGET_ENV",
      value: safeGet(() => process.env.NEXT_PUBLIC_VERCEL_TARGET_ENV),
    },
    {
      name: "process.env.NEXT_PUBLIC_VERCEL_URL",
      value: safeGet(() => process.env.NEXT_PUBLIC_VERCEL_URL),
    },
    {
      name: "process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL",
      value: safeGet(() => process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL),
    },
    {
      name: "process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL",
      value: safeGet(() => process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL),
    },
    {
      name: "process.env.NEXT_PUBLIC_VERCEL_GIT_PROVIDER",
      value: safeGet(() => process.env.NEXT_PUBLIC_VERCEL_GIT_PROVIDER),
    },
    {
      name: "process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG",
      value: safeGet(() => process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG),
    },
    {
      name: "process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER",
      value: safeGet(() => process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER),
    },
    {
      name: "process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_ID",
      value: safeGet(() => process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_ID),
    },
    {
      name: "process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF",
      value: safeGet(() => process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF),
    },
    {
      name: "process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA",
      value: safeGet(() => process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA),
    },
    {
      name: "process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE",
      value: safeGet(() => process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE),
    },
    {
      name: "process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_AUTHOR_LOGIN",
      value: safeGet(() => process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_AUTHOR_LOGIN),
    },
    {
      name: "process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_AUTHOR_NAME",
      value: safeGet(() => process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_AUTHOR_NAME),
    },
    {
      name: "process.env.NEXT_PUBLIC_VERCEL_GIT_PULL_REQUEST_ID",
      value: safeGet(() => process.env.NEXT_PUBLIC_VERCEL_GIT_PULL_REQUEST_ID),
    },
    // Vercel System Environment Variables
    { name: "process.env.VERCEL", value: safeGet(() => process.env.VERCEL) },
    { name: "process.env.CI", value: safeGet(() => process.env.CI) },
    { name: "process.env.VERCEL_ENV", value: safeGet(() => process.env.VERCEL_ENV) },
    { name: "process.env.VERCEL_TARGET_ENV", value: safeGet(() => process.env.VERCEL_TARGET_ENV) },
    { name: "process.env.VERCEL_URL", value: safeGet(() => process.env.VERCEL_URL) },
    { name: "process.env.VERCEL_BRANCH_URL", value: safeGet(() => process.env.VERCEL_BRANCH_URL) },
    {
      name: "process.env.VERCEL_PROJECT_PRODUCTION_URL",
      value: safeGet(() => process.env.VERCEL_PROJECT_PRODUCTION_URL),
    },
    { name: "process.env.VERCEL_REGION", value: safeGet(() => process.env.VERCEL_REGION) },
    {
      name: "process.env.VERCEL_DEPLOYMENT_ID",
      value: safeGet(() => process.env.VERCEL_DEPLOYMENT_ID),
    },
    { name: "process.env.VERCEL_PROJECT_ID", value: safeGet(() => process.env.VERCEL_PROJECT_ID) },
    {
      name: "process.env.VERCEL_SKEW_PROTECTION_ENABLED",
      value: safeGet(() => process.env.VERCEL_SKEW_PROTECTION_ENABLED),
    },
    {
      name: "process.env.VERCEL_AUTOMATION_BYPASS_SECRET",
      value: safeGet(() => process.env.VERCEL_AUTOMATION_BYPASS_SECRET),
    },
    { name: "process.env.VERCEL_OIDC_TOKEN", value: safeGet(() => process.env.VERCEL_OIDC_TOKEN) },
    {
      name: "process.env.VERCEL_GIT_PROVIDER",
      value: safeGet(() => process.env.VERCEL_GIT_PROVIDER),
    },
    {
      name: "process.env.VERCEL_GIT_REPO_SLUG",
      value: safeGet(() => process.env.VERCEL_GIT_REPO_SLUG),
    },
    {
      name: "process.env.VERCEL_GIT_REPO_OWNER",
      value: safeGet(() => process.env.VERCEL_GIT_REPO_OWNER),
    },
    {
      name: "process.env.VERCEL_GIT_REPO_ID",
      value: safeGet(() => process.env.VERCEL_GIT_REPO_ID),
    },
    {
      name: "process.env.VERCEL_GIT_COMMIT_REF",
      value: safeGet(() => process.env.VERCEL_GIT_COMMIT_REF),
    },
    {
      name: "process.env.VERCEL_GIT_COMMIT_SHA",
      value: safeGet(() => process.env.VERCEL_GIT_COMMIT_SHA),
    },
    {
      name: "process.env.VERCEL_GIT_COMMIT_MESSAGE",
      value: safeGet(() => process.env.VERCEL_GIT_COMMIT_MESSAGE),
    },
    {
      name: "process.env.VERCEL_GIT_COMMIT_AUTHOR_LOGIN",
      value: safeGet(() => process.env.VERCEL_GIT_COMMIT_AUTHOR_LOGIN),
    },
    {
      name: "process.env.VERCEL_GIT_COMMIT_AUTHOR_NAME",
      value: safeGet(() => process.env.VERCEL_GIT_COMMIT_AUTHOR_NAME),
    },
    {
      name: "process.env.VERCEL_GIT_PREVIOUS_SHA",
      value: safeGet(() => process.env.VERCEL_GIT_PREVIOUS_SHA),
    },
    {
      name: "process.env.VERCEL_GIT_PULL_REQUEST_ID",
      value: safeGet(() => process.env.VERCEL_GIT_PULL_REQUEST_ID),
    },
  ];

  // Non-Next.js values
  const nonNextJsValues = [
    // Browser dimensions and display
    {
      name: "Window dimensions",
      value: safeGet(() => `${window.innerWidth} × ${window.innerHeight}`),
    },
    {
      name: "Screen dimensions",
      value: safeGet(() => `${screen.width} × ${screen.height} (${screen.colorDepth}-bit)`),
    },
    {
      name: "window.devicePixelRatio",
      value: safeGet(() => window.devicePixelRatio),
    },

    // Browser information
    {
      name: "navigator.userAgent",
      value: safeGet(
        () => `${navigator.userAgent.split(" ").slice(0, 3).join(" ")} (${navigator.language})`,
      ),
    },
    {
      name: "document.title",
      value: safeGet(() => document.title),
    },
    {
      name: "location.href",
      value: safeGet(() => location.href),
    },

    // Storage and history
    {
      name: "Storage",
      value: safeGet(
        () => `localStorage: ${localStorage.length}, sessionStorage: ${sessionStorage.length}`,
      ),
    },
    {
      name: "history.length",
      value: safeGet(() => history.length),
    },

    // Web Audio API demonstration
    {
      name: "Web Audio API",
      value: safeGet(() => {
        try {
          const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
          const oscillator = audioContext.createOscillator();
          oscillator.connect(audioContext.destination);
          oscillator.frequency.value = 440; // A4 note
          return "Available (440Hz)";
        } catch (e) {
          return undefined;
        }
      }),
    },

    // System information
    {
      name: "env.NODE_ENV",
      value: safeGet(() => process.env.NODE_ENV),
    },

    // Module information

    {
      name: "require.resolve",
      value: safeGet(() => {
        try {
          if (typeof require !== "undefined") {
            const modules = [
              "fs",
              "path",
              "crypto",
              "http",
              "https",
              "stream",
              "buffer",
              "events",
              "util",
              "os",
              "child_process",
              "cluster",
              "dgram",
              "dns",
              "net",
              "tls",
              "zlib",
              "v8",
              "vm",
              "worker_threads",
            ];

            const availableModules = modules.filter((moduleName) => {
              try {
                require.resolve(moduleName);
                return true;
              } catch (e) {
                return false;
              }
            });

            return availableModules.join(", ");
          }
          return undefined;
        } catch (e) {
          return undefined;
        }
      }),
    },
    {
      name: "import.meta.url",
      value: safeGet(() => import.meta.url),
    },
    {
      name: "process.cwd()",
      value: safeGet(() => process.cwd()),
    },
    {
      name: "__dirname",
      value: safeGet(() => __dirname),
    },
    {
      name: "process.version",
      value: safeGet(() =>
        process.version ? `${process.version} (${process.platform}/${process.arch})` : undefined,
      ),
    },
    // Network information
    {
      name: "Host info",
      value: safeGet(() => {
        const hostname = process.env.HOSTNAME;
        const port = process.env.PORT;
        if (!hostname && !port) return undefined;
        return `${hostname || ""}:${port || ""}`;
      }),
    },

    // Additional server-side information
    {
      name: "CPU architecture",
      value: safeGet(() => process.arch),
    },
    {
      name: "Network interfaces",
      value: safeGet(() => {
        try {
          // Check if os module is available
          if (typeof require !== "undefined") {
            const os = require("os");
            const interfaces = os.networkInterfaces();
            const activeInterfaces = Object.keys(interfaces)
              .filter((key) =>
                interfaces[key].some((iface: { internal: boolean }) => !iface.internal),
              )
              .join(", ");
            return activeInterfaces || undefined;
          }
          return undefined;
        } catch (e) {
          return undefined;
        }
      }),
    },
    {
      name: "Heap size limit",
      value: safeGet(() => {
        try {
          // Check if v8 module is available
          if (typeof require !== "undefined") {
            const v8 = require("v8");
            return `${Math.round(v8.getHeapStatistics().heap_size_limit / 1024 / 1024)} MB`;
          }
          return undefined;
        } catch (e) {
          return undefined;
        }
      }),
    },
    {
      name: "Memory usage",
      value: safeGet(() => {
        if (!memoryInfo.heapUsed && !memoryInfo.heapTotal) return undefined;
        return `${memoryInfo.heapUsed || ""} / ${memoryInfo.heapTotal || ""}`;
      }),
    },

    {
      name: "Available file system",
      value: safeGet(() => {
        try {
          // Check if fs module is available
          if (typeof require !== "undefined") {
            const fs = require("fs");
            const root = process.platform === "win32" ? "C:\\" : "/";
            const stats = fs.statfsSync(root);
            const free = Math.round((stats.bfree * stats.bsize) / 1024 / 1024);
            const total = Math.round((stats.blocks * stats.bsize) / 1024 / 1024);
            return `${free} MB free of ${total} MB total`;
          }
          return undefined;
        } catch (e) {
          return undefined;
        }
      }),
    },

    {
      name: "Uptime",
      value: safeGet(() => {
        const uptime = process.uptime();
        const days = Math.floor(uptime / 86400);
        const hours = Math.floor((uptime % 86400) / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        const seconds = Math.floor(uptime % 60);
        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }),
    },
  ];

  return { nextJsValues, nonNextJsValues };
}
