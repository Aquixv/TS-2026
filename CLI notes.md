Instead of sitting there hitting the arrow keys and answering the interactive questionnaire every single time, you can pass flags to tell Vite exactly what you want instantly.


**For a standard React + JavaScript project:**
```bash
npm create vite@latest react-playground -- --template react
```

**For a React + TypeScript project:**
```bash
npm create vite@latest ts-playground -- --template react-ts
```

### Why the extra `--`?
In case you are wondering why it looks a little weird with the double dashes: 
* The first part (`npm create vite@latest react-playground`) talks to **NPM**. 
* The standalone `--` tells NPM: *"Hey, the rest of these commands aren't for you, pass them down to the Vite script."* * Then Vite reads `--template react` and builds your folder instantly.

It saves a ton of time, especially when you start spinning up quick playground folders just to test out a single component or learn a new library.