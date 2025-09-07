<h2 align="center">
  Portfolio Website<br/>
  <a href="https://portfolio-delta-eight-99.vercel.app/" target="_blank">Tarun Manoharan</a>
</h2>

Look me : https://portfolio-dup.vercel.app/
<br/>

## Built With
This project was built using these technologies.

- React.js
- Node.js
- Express.js
- CSS3
- VsCode
- Vercel

## Features

**📖 Multi-Page Layout**

**🎨 Styled with React-Bootstrap and Css with easy to customize colors**

**📱 Fully Responsive**


## 🚀 Running with Docker

You can run this project easily using Docker and Docker Compose. The provided setup builds and serves the static React app using Node.js 22.13.1-slim and the `serve` package.

- **Node.js version:** 22.13.1-slim (as specified in the Dockerfile)
- **Exposed port:** `3000` (the app will be available at http://localhost:3000)
- **No required environment variables** (unless you add a `.env` file for custom configuration)
- **No external dependencies or persistent volumes needed**
- **Runs as a non-root user for security**

### Build and Run

```bash
# Build and start the app
docker compose up --build
```

- The app will be available at [http://localhost:3000](http://localhost:3000)
- To stop the app, press `Ctrl+C` and run `docker compose down` if needed.

> **Note:**
> - If you want to use environment variables, create a `.env` file in the project root and uncomment the `env_file` line in `docker-compose.yml`.
> - No additional configuration is required for a standard build and run.
