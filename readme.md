# 448 Studio Full Stack Developer Test

Welcome to the 448 Studio Full Stack Developer Test. We value quality code and this test is designed to showcase your ability to write it. Requirements and test cases have been provided below. Please follow best practices and submit code you are proud of. There is no time limit, take your time to get it right. Regularly commit your progress and please include the .git folder in your submission. When complete, upload your solution and answers in a .zip to the google drive link provided in the email that you should have received.

## Programming Exercise - The Drink Shop

You have been tasked with creating a single paged website that lists out 5 different drinks:

- Coca Cola - £1.00
- Fanta - £1.00
- Sprite - £1.00
- Dr Pepper - £1.00
- Iron Bru - £1.00

Each of the drinks above cost £1.00.

Buying two different flavour drinks will give you a 5% discount on those two drinks.

Buying three different flavour drinks will give you a 10% discount.

Buying four different flavour drinks will give you a 20% discount.

Buying all five different flavour drinks will give you a huge 25% discount.

Note: The discount does not apply to the entire basket, it only applies to the drinks stated in the bundle.
E.g. Coca Cola + Fanta + Fanta = ( 1 + 1 ) \* 0.95 + 1 = £2.90

Note: You can have multiple bundles in the same basket.
E.g. Coca Cola + Fanta + Coca Cola + Fanta = ( 1 + 1 ) \* 0.95 + ( 1 + 1 ) \* 0.95 = £3.80

A list of test cases have been provided further down below.

## Front End Requirements

For your front end solution, you should use Next.JS & Typescript - a project skeleton has been provided for you to work from.

Your front end solution should include a grid of products, with product images, each with an add to basket button.

Product images have been provided in the **/product-images** folder.

The page must display the total price of all items in the current basket.

The page should include a button to clear all items the current basket.

You are free to use whatever CSS styling framework that you are familiar with.

You will be assessed on how the website looks on mobile, tablet and desktop screen sizes.

**You are not required to write Front End Tests for this exercise.**

## Back End Requirements

For your back end solution, you should use Apollo GraphQL running on Node.JS.

All price calculation logic should be handled by your backend solution.

Your backend should

- Return all drink flavours and prices provided by the store - to be served by your front end.

- Return the total price a basket, when provided with a list of items.

**Your backend solution should include tests. Example test cases that you may find helpful have been provided below**

## Test Cases

```
Given I have two different drinks in my basket - Coca Cola and Fanta
Then I should be given a 5% discount on these two drinks, and the total cost should be £1.90

Given I have three different drinks in my basket - Coca Cola, Fanta and Sprite
Then I should be given a 10% discount on these three drinks, and the total cost should be £2.70

Given I have four different drinks in my basket - Coca Cola, Fanta, Sprite and Dr Pepper
Then I should be given a 20% discount on these four drinks, and the total cost should be £3.20

Given I have five different drinks in my basket - Coca Cola, Fanta, Sprite, Dr Pepper and Iron Bru
Then I should be given a 25% discount on these five drinks, and the total cost should be £3.75

Given I have two of the same drinks in my basket - Coca Cola and Coca Cola
Then I should not be given any discount, and the total cost should be £2.00

Given I have four different drinks in my basket, and two of the same drink - Coca Cola, Coca Cola, Fanta, Sprite and Dr Pepper
Then I should be given a 20% discount on the four drinks in the bundle, and the total cost should be £4.20
```

## Additional Notes

- Both the front end and back end are required to be ran locally using NodeJS.16x.
- You must be able to run tests using a script, e.g. "npm test".
- You are free to use any external packages, but note that only the code you have wrote will be assessed.
- Feel free to change any of the existing project structure, it has been included to give you a head start.

---

Questions

1. What best practices have you used in your solution?

**Answer Here**

2. What further steps would you take to improve your solution given more time?

**Answer Here**
