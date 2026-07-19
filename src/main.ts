import "./styles/style.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root not found.");
}

app.innerHTML = `
  <main>
    <h1>StudyOS</h1>
    <p>Development environment is working 🚀</p>
  </main>
`;
