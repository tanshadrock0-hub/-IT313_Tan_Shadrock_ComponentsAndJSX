# IT313 Student Roster Card Renderer

## Problem Description

This project displays the IT313 student roster using React Native and Expo. Each student is displayed in a reusable card showing their name, course, and enrolled units. Students with a full load also receive a Full Load label.

## Component Structure

### StudentCard

A reusable functional component that receives student information through props. It uses destructuring and conditional rendering to display the student details and Full Load label.

### StudentRoster

The parent component stores the student array, displays the total number of students, and uses map() to render the cards. It also includes buttons to reverse the roster and test array index keys.

## Concepts Used

- Functional components
- Props and destructuring
- JSX expressions
- Conditional rendering using &&
- Rendering lists using map()
- Unique keys using student IDs
- React useState for interactive buttons
- React Native components and StyleSheet

## How to Run

1. Install Node.js.
2. Create the Expo project.
3. Save the code in app/index.tsx.
4. Start the project:

   npx expo start

5. Open the app using Expo Go or an emulator.

## Key Prop Experiment

Use the Test Array Index Keys button and reverse the roster. Then restore student ID keys.

Stable IDs are recommended because array indexes can cause incorrect component state or rendering behavior when items are reordered.
