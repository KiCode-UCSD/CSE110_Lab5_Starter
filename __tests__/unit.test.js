// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

const functions = {isPhoneNumber, isEmail, isStrongPassword, isDate, isHexColor};

//*******function isPhoneNumber(phoneNumber)*******//
// True Test 1
test('tests phone number with dashes', () => {
  expect(functions.isPhoneNumber("760-755-0421")).toBe(true);
});

// True Test 2
test('tests phone number without area code', () => {
  expect(functions.isPhoneNumber("755-0421")).toBe(true);
});

// False Test 1
test('tests empty string', () => {
  expect(functions.isPhoneNumber("")).toBe(false);
});

// False Test 2
test('tests phone number with less digits', () => {
  expect(functions.isPhoneNumber("75-72-021")).toBe(false);
});


//*************function isEmail(email)*************//
// True Test 1
test('tests my school email', () => {
  expect(functions.isEmail("r8diaz@ucsd.edu")).toBe(true);
});

// True Test 2
test('tests random gmail', () => {
  expect(functions.isEmail("abcd123@gmail.com")).toBe(true);
});

// False Test 1
test('tests email without .', () => {
  expect(functions.isEmail("abcd123@gmailcom")).toBe(false);
});

// False Test 2
test('tests email without @', () => {
  expect(functions.isEmail("abcd123gmail.com")).toBe(false);
});

//*******function isStrongPassword(password)*******//
// True Test 1
test('tests strong password - min length', () => {
  expect(functions.isStrongPassword("a9_L")).toBe(true);
});

// True Test 2
test('tests strong password - max length', () => {
  expect(functions.isStrongPassword("a9_L18Fxi_9dU1z")).toBe(true);
});

// False Test 1
test('tests bad password - starts with number', () => {
  expect(functions.isStrongPassword("9_aL")).toBe(false);
});

// False Test 2
test('tests bad password - unaccepted special chars', () => {
  expect(functions.isStrongPassword("a9b*")).toBe(false);
});

//**************function isDate(date)**************//
// True Test 1
test('tests current date with 2 digits', () => {
  expect(functions.isDate("05/05/2026")).toBe(true);
});

// True Test 2
test('tests current date with 1 digits', () => {
  expect(functions.isDate("5/5/2026")).toBe(true);
});

// False Test 1
test('tests current date with short year', () => {
  expect(functions.isDate("05/05/26")).toBe(false);
});

// False Test 2
test('tests date with 3 digit month', () => {
  expect(functions.isDate("100/07/2026")).toBe(false);
});

//************function isHexColor(color)***********//
// True Test 1
test('tests valid number-only hex code', () => {
  expect(functions.isHexColor("059")).toBe(true);
});

// True Test 2
test('tests valid letter-only hex code', () => {
  expect(functions.isHexColor("affdcb")).toBe(true);
});

// False Test 1
test('tests invalid length hex code', () => {
  expect(functions.isHexColor("059ffab")).toBe(false);
});

// False Test 2
test('tests invalid letter hex code', () => {
  expect(functions.isHexColor("abgh")).toBe(false);
});

