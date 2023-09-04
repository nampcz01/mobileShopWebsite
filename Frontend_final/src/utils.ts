// Get a cookie by name
function getCookie(name: string): string | null {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split('=');
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  }
  
  // Set a cookie with a given name, value, and optional options
  function setCookie(name: string, value: string, options: { [key: string]: any } = {}): void {
    const { path, domain, secure } = options;
    let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  
    cookie += `;expires=Thu, 01 Jan 9990 00:00:00 UTC`;
    cookie += `;path=`;

  
    if (path) {
      cookie += `; path=${path}`;
    }
  
    if (domain) {
      cookie += `; domain=${domain}`;
    }
  
    if (secure) {
      cookie += '; secure';
    }
  
    document.cookie = cookie;
  }