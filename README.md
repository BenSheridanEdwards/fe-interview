## Cleo Frontend Interview - Bills

### Approach

I decided to take on the challenge of this test by first taking just over a week to learn TypeScript and Redux-Saga, as I'd never used these technologies before. I tried my best to follow best practices from the relevent documentation.

### App

#### Initial State

<img src="./src/assets/images/readme/app-initial-state.png" width="600" />

#### Open active merchant

<img src="./src/assets/images/readme/app-open-active-merchant.png" width="600" />

#### Open potential merchant

<img src="./src/assets/images/readme/app-open-potential-merchant.png" width="600" />

#### No bills celebration

<img src="./src/assets/images/readme/app-celebration.png" width="600" />

### Other considerations

If I had more time I would have liked to have added:

1. Tests to cover my sagas. I also wrote integration tests in place of unit tests as some components only included other components in their return value. I would have separated these out and created end-to-end testing to simulate the user flow.
2. Loading states using the gif provider.
3. Badges next to each tab to show the number of merchants.

### The Task

1. Create a Tabs component that allows multiple pages to be switched between.
1. One tab should show a list of merchants with transactions that have been marked as bills. These can be found at http://localhost:3002/merchants. Merchant's marked as bills, have a flag `isBill` set to `true`.
1. Another tab should show a list of merchants with transactions which are potential bills. These can also be found at http://localhost:3002/merchants. Merchant's that could be potentially bills have a flag `isBill` set to `false`.
1. Under each merchant row for both lists, should be a hidden list of transactions for that merchant. This should show when the merchant row is clicked.
1. Under the name of each merchant should show a count of the transactions for it
1. Add an action to the bills tab for each merchant called "remove bill" which updates the relevant merchant's `isBill` flag to `false`. You can use a `PATCH` request to `http://localhost:3002/merchants/:id` using the id of the merchant to update the resource.
1. Add an action to the potential bills tab for each merchant called "Add as bill" which updates the relevant merchant's `isBill` flag to `true`.
1. After each action, the lists should reflect the changes.

### Notes

- Please aim to spend 2-3 hours completing this task
- We'd like to see state management tools being used
- Tools we use at Cleo include styled-components, Typescript and Redux (with Sagas)
- Style the components however you see fit. SASS or PostCSS are fine, but we'd prefer CSS in JS
- We love tests, linted code and great looking UIs
- The API contains other data, feel free to use this creatively if you have the time
- Remember to check your project runs before submitting
