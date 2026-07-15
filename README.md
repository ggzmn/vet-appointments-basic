# Vet appointments basic

Full-stack CRUD app for scheduling vet appointments — React + TanStack Query on the frontend, Express + SQLite (raw SQL) on the backend. No ORM, no monorepo tooling.

```
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
│   │   ├── api/          (funciones que llaman al backend)
│   │   ├── hooks/        (useQuery/useMutation custom hooks)
│   │   ├── store/        (Zustand)
│   │   ├── components/
│   │   └── App.tsx
│   └── package.json
└── README.md
```