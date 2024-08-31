// app/head.tsx
export default function Head() {
  return (
    <>
      <title>TravelZone</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
      {/* Tipografías Istok Web e Inter */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Istok+Web:wght@400;700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Jua&display=swap"
        rel="stylesheet"
      />
      {/* Flowbite Script */}
      <script src="/path/to/flowbite/dist/flowbite.min.js" async></script>
    </>
  );
}
