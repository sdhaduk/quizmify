This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Description

I created a web application that allows the user to take an AI generated quiz on any topic they choose, how it works:
1. The user logs in with a Google account
2. The user fills in a form that allows them to:
    * Choose the topic
    * Choose the number of questions (max of 10)
    * Whether the quiz should be open-ended or multiple choice question
3. The user submits the form, waits for the quiz to be generated, and then starts taking the quiz
4. After finishing the quiz, the user can review their performance on the statistics page.

## Run Locally:

After cloning the project and changing the current directory to the project, run:
```bash
npm install 
```

Then create a .env file in the root directory with the following variables:
```env
DATABASE_URL= YOUR POSTGRES URl
NEXTAUTH_SECRET= YOUR NEXTAUTH SECRET
NEXTAUTH_URL= http://localhost:3000
GOOGLE_CLIENT_ID= YOUR GITHUB CLIENT ID
GOOGLE_CLIENT_SECRET= YOUR GITHUB CLIENT SECRET
OPENAI_API_KEY= YOUR OPENAI API KEY
API_URL=http://localhost:3000
```

Then run:
```bash
npx prisma db push
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
