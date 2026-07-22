# Vet appointments basic

Full-stack CRUD app for scheduling vet appointments — React + TanStack Query on the frontend, Express + SQLite (raw SQL) on the backend. No ORM, no monorepo tooling.

```text
canine-scheduler/
├── backend/
│   ├── db/
│   │   ├── schema.sql
│   │   └── queries/
│   │       ├── animals.js
│   │       └── appointments.js
│   ├── routes/
│   │   ├── animals.js
│   │   └── appointments.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── hooks/
│   │   ├── store/
│   │   ├── components/
│   │   └── App.tsx
│   └── package.json
└── README.md
```no
