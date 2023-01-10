import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html className="bg-yellow-50 ">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
