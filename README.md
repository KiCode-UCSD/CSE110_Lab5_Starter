# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Member(s): Ki Diaz

## Expose

[expose.html link here](https://KiCode-UCSD.github.io/CSE110_Lab5_Starter/expose.html)

## Explore

[explore.html link here](https://KiCode-UCSD.github.io/CSE110_Lab5_Starter/explore.html)

## Check Your Understanding

1) I would not use a unit test to test the message feature. This is because the message feature isn't a self contained piece of code. It likely needs to work with multiple libraries, functions, etc. to properly work, so running a unit test on it in a void likely won't give any meaningful results.
2) I would use a unit test to test the "max message length" because it is something that can run in isolation. It is easy to send it test values for number of characters and seeing if it responds properly.
