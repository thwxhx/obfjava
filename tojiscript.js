(function () {
    // 1. Authorized domains (Replace with your actual Blogger domain)
    const allowedDomains = [
        "vivosports.live",
        "www.vivosports.live",
       "ehdbsduvsddhbhbsd.blogspot.com",
        "thwxhx.github.io",
        "localhost" // Keep for testing purposes
    ];

    const currentDomain = window.location.hostname.toLowerCase();
    const isAuthorized = allowedDomains.some(domain => 
        currentDomain === domain || currentDomain.endsWith("." + domain)
    );

    if (!isAuthorized) {
        console.error("Access denied: Unauthorized domain usage.");
        document.addEventListener("DOMContentLoaded", function() {
            document.body.innerHTML = `
                <div style="text-align:center; padding:80px; background:#0b0f19; color:#ef4444; font-family:sans-serif;">
                    <h2 style="font-size:24px; margin-bottom:10px;">Access Denied</h2>
                    <p style="color:#9ca3af;">This stream script is protected and unauthorized for use on: <b>${currentDomain}</b></p>
                </div>
            `;
        });
        throw new Error("Unauthorized domain script execution blocked.");
    }

    });
})();
