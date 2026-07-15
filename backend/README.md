# Backend

## Why do we use the `cors` dependency?

During development, the frontend and the backend run on different ports:

- Backend (Express): <http://localhost:3000>
- Frontend (Vite): <http://localhost:5173>

Even though both are on localhost, the browser treats them as different origins because the port is different. An origin is defined by three elements: protocol, domain, and port. If any of them does not match, the browser considers them separate origins.
This is called the same-origin policy. For security reasons, the browser blocks by default any requests that your React app (:5173) makes to your API (:3000), unless the server explicitly states that it accepts them.

A useful fact for later: in production, if you serve the frontend and the backend from the same domain, this problem disappears.

## Troubleshooting

- Error `[ERR_PNPM_IGNORED_BUILDS] Ignored build scripts: better-sqlite3@12.11.1` needs to run, next choose `better-sqlite3`

```bash
pnpm approve-builds
```
