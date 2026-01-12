# Overview

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) created to reproduce redirect error to external URL with same host from a server action.

It is expected that the redirect will take the user to the expected absolute URL that is provided, but it redirects and appends the `basePath` to the pathname which makes it seem like it is treating URL as an internal redirect.

**Steps to Reproduce:**
1. Run on port 3000
2. Navigate to `http://localhost:3000/redirect/external`
3. Expected: Redirected to 404 error page with URL `http://localhost:3000/external-page-with-same-host`
4. Actual: Redirected to 404 error page with URL `http://localhost:3000/redirect/external-page-with-same-host`

NOTES:
- This will only occur the first time the page is loaded, after that the redirect works as expected

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
