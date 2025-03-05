# Workshop - Bank Account

In this workshop, you will be implementing a simple bank account application. A user will be able to see their current balance, make deposits and withdrawals, transfer money to another user, and see a log of all transactions they've made in their current session.

## Getting Started

1. Create a new repository using this one as a template.
2. Clone the repository down and install the dependencies.
3. This workshop is built using Vite; use `npm run dev` to start the application.
4. You should see a barebones banking interface. However, none of the buttons will work yet.

## Instructions

Most of the UI has already been written for you. Your job is to complete the missing code as indicated by the `TODO` comments. Most of what you will be writing involves working with Redux Toolkit.

1. Complete the slice defined in `transactionsSlice.js`.
2. Configure the store to use that slice in `store.js`.
3. Provide the store to the app in `App.jsx`.
4. Correctly exchange information with the store in `Transactions.jsx`.
5. Complete `TransactionHistory.jsx`.
6. Manually test your application to make sure everything works!

The [Redux Toolkit Documentation](https://redux-toolkit.js.org/introduction/getting-started) is a great place to reference! Their example code isn't too different from the code you're working with here.

## Extensions

If you're done early, try adding some of the following features:

- Prevent actions that would result in a negative balance.
- Add better form validation and error messages.
- Allow a user to undo their last transaction.
- Use `sessionStorage` to persist the user's balance between refreshes.
- Use Sass to style the application.

## Submission

Please submit a link to your GitHub repository.
