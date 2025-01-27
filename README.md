# Enhance the Existing **Movie Collection** Application

Add functionality to navigate to an "Add Movie" form. This task focuses exclusively on frontend development using **React** and **Vite**.

## Provided Components

- **MovieCard Component:** Displays individual movie details.
- **Dashboard Component:** Renders a list of `MovieCard` components.

## Tasks

### 1. Add "Add Movie" Button on Dashboard Page

- **Placement:** Position the "Add Movie" button prominently on the Dashboard page, preferably at the top or in a toolbar for easy access.
- **Functionality:** When clicked, the button should navigate the user to the "Add Movie" form page.

### 2. Create "Add Movie" Form Page

- **Form Fields:** Develop a form that includes the following input fields:
  - **Title** (Text Input)
  - **Director** (Text Input)
  - **Genre** (Select Dropdown)
  - **Release Year** (Number Input)
  - **Synopsis** (Textarea)
  - **Poster Image URL** (URL Input)
- **Buttons:**

  - **Submit:** To hypothetically add the movie (no actual functionality required).
  - **Cancel:** To navigate back to the Dashboard without adding a movie.

- **Routing:** Implement navigation between the Dashboard page and the "Add Movie" form using React Router or your preferred routing library.

### 3. Update Navigation Structure

- **Routing Setup:** Ensure that the application’s routing is set up to handle navigation to the new "Add Movie" form page. This may involve updating your `App.jsx` or main routing file.

### 4. Optional Styling Enhancements

- **Responsive Design:** Make sure the "Add Movie" form is responsive and user-friendly across different devices.
- **Validation:** Add basic form validation to ensure all required fields are filled out correctly before submission.

---
