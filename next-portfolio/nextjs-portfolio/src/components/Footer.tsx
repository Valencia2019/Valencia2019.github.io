export const Footer = () => {
  return (
    <footer className="flex h-24 w-full items-center justify-center border-t fixed bottom-0">
      <div className="flex items-center justify-center gap-4">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Valencia McMurray
        </p>
      </div>
    </footer>
  );
}
