# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
### Guide to see the expected results :

  🔧 Getting Started Locally

  1. Clone the Repository:
  2. 
     ```bash:
         git clone https://github.com/yourusername/yourproject.git
         cd yourproject/backend

     
  3. Install Dependencies:
     ```bash:
         npm install

     
  4. Setup Environment Variables[ Edit '.env']:

    A) create a '.env' file
  
    B) give the veriable name "VITE_NEWS_API_KEY" for News API and "VITE_GEMINI_API_KEY" for GEMINI AI API respectively
  
    C) Exmple: VITE_NEWS_API_KEY=your-api-key-here [NOTE: don't keep your api key into the " " or ' ' or { } ]

  
  5. Make sure .env is in .gitignore


  6. Start the Server:
       To start the server write following code in 'powershell' or 'bash' -->
     ```bash
              npm run dev  [ for vite + react ]
     
  8. Access:
       The server runs on: http://localhost:5173
