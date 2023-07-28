This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Integrates p5.js into a Next.js app

The important/annoying bit is making sure the p5.js sketch is only created/rendered in the browser which this sets up for you. There might be better ways to do this but this works.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the p5js sketch by modifying `sketch/index.tsx`. The page auto-updates as you edit the file.

This project uses:

- [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
- [`radash`](https://radash-docs.vercel.app/docs/getting-started) a helper library that works well with p5js

## Learn More

### Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/)

### p5.js

To learn more about p5.js, take a look at the following resources:

- [p5.js Documentation](https://p5js.org/reference/) - explore p5.js features and API.
- [Learn p5.js](https://p5js.org/learn/) - tutorials that provide more in-depth or step-by-step overviews of particular topics.

You can check out [the p5.js GitHub repository](https://github.com/processing/p5.js)
