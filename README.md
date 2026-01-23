# React Clean Architecture

Example React + TypeScript app that applies Clean Architecture in a practical,
functional-ish style.

## Architecture Overview

Goal: keep business rules independent from UI and frameworks.

Layers:
- `src/domain`:
  Core business rules and entities. No framework dependencies.
- `src/application`:
  Use cases and orchestration. Injects services, talks to domain.
- `src/services`:
  Adapters to external systems (storage, APIs, etc).
- `src/ui`:
  React components and presentation logic.
- `src/lib`:
  Shared utilities used across layers.
- `src/shared-kernel.d.ts`:
  Global types that are safe to share everywhere.

### Flow (Code Path)

```
UI (components) -> Application (use case hooks) -> Domain (rules/entities)
                          \-> Services (storage/api adapters)
```

Example flow (auth):
```
Auth UI -> useAuthenticate() -> AuthenticationService + UserStorageService
                              -> Domain types (User/UserName/etc)
```

Guidelines:
- UI should not call services directly. UI calls use cases.
- Application layer injects services into use cases.
- Domain remains framework-agnostic.

## How to Run

Requirements:
- Node.js 20+ recommended (Vite expects Node 20+).
- npm

Install deps:
```sh
npm install
```

Start dev server:
```sh
npm run dev
```

Build:
```sh
npm run build
```

Lint:
```sh
npm run lint
```

## Project Structure

```
src/
  application/   # use cases, orchestration, hooks
  domain/        # business rules, entities
  services/      # adapters (storage, api, etc)
  ui/            # React components
  lib/           # shared helpers
  shared-kernel.d.ts
  main.tsx
  App.tsx
```
