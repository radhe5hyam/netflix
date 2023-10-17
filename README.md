# FlyHigh

Airline Management System

Client: https://fly-high-client.vercel.app/
Admin: https://fly-high-admin.vercel.app/

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `client`: a [Next.js](https://nextjs.org/) app
- `admin`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `client` and `admin` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `db`: `prisma` based db packages's used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Build

To build all apps and packages, run the following command:

```
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm dev
```
