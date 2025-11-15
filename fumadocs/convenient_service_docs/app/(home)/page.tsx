import { ThemeToggle } from '../../custom/components/themeToggle';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <h1 className="text-2xl font-bold mb-4">Convenient Service</h1>

      <p className="mb-4 flex justify-center">
        <img src="/logo.png" width="300" />
      </p>

      <p>
        Manage complex business logic in Ruby applications using Service Objects with Results and Steps.
      </p>

      <p>
        Hide technical details with Configs and Middlewares.
      </p>

      <p>
        Group related code by Features with Entries.
      </p>

      <div className="mt-4 flex justify-center gap-3">
        <a type="button" className="btn" href="/docs/tldr">TL;DR</a>

        <a type="button" className="btn" href="/docs/basics">User Docs</a>

        <a type="button" className="btn" href="https://apidocs.convenientservice.org" target="_blank" rel="noopener noreferrer" >API Docs</a>

        <a type="button" className="btn" href="https://github.com/marian13/convenient_service" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>

      <div className="mt-4 flex justify-center">
        <ThemeToggle className="p-0" mode="light-dark" />
      </div>
    </div>
  );
}
