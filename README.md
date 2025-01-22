# Codecom Pagination Task

This is a pagination implementation task for Codecom, built with [Next.js](https://nextjs.org) and bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Important Notes 
   - The deplyment link [Vercel app](https://codecom-task.vercel.app/)
   - I tried to use StoryBook But I still learning it so I removed it until I can use it probably

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


## Pagination Implementation

To implement pagination, follow these steps:

1. **Create Pagination Component**:
   - Create a `components/Pagination.tsx` file.
   - Add the pagination logic and UI in this file.

2. **Use Pagination Component**:
   - Import and use the `Pagination` component in `app/page.tsx`.
   - Pass the necessary props such as the current page, total items, and items per page.

3. **Adjust Data Fetching**:
   - Modify your data fetching logic to handle pagination.
   - Fetch data based on the current page and items per page.

4. **Style Pagination**:
   - Add styles to your pagination component to enhance its appearance.

## Learn More

To learn more about Next.js and pagination techniques, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Implementing Pagination](https://example.com/implementing-pagination) - a guide to implementing pagination in Next.js (adjust based on actual resources).

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) for more examples and contributions!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.