export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-300 py-6 text-slate-500 dark:border-slate-800 dark:text-slate-400">
      <div className="container mx-auto flex items-center justify-center px-4 text-center text-sm">
        <p>
          © {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/phucvu1601"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline-offset-4 hover:underline hover:text-brand transition-colors"
          >
            phucvu1601
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
