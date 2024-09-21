# UM Scheduler

A TimeEdit-based UM scheduler for arranging courses.  
To get started, follow the steps below:

## Guidelines

1. Go to the TimeEdit page from Maya, add all the courses you need, and download them as a `.csv` file.
2. Navigate to the `python/` directory, modify the file path, and process it. You will get a `course_data.json`.
3. Move the `course_data.json` file to `frontend/public`, and run `npm run dev` in the `frontend` directory.
4. Try it out and provide feedback. Contributions are welcome! You can create an issue and label it with `bug` or `enhancement`.

## Mechanism

1. Since TimeEdit provides a `.csv` file, we can take advantage of it.
2. The frontend is responsible for display purposes only.