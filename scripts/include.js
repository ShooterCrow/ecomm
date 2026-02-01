const pageType = document.body.dataset.layout;

let includeFinished = false;

const loader = async (id, file) => {
  const response = await fetch(file);
  const headerData = await response.text();
  document.getElementById(id).innerHTML = headerData;
};

async function loadAllIncludes() {
  if (pageType === "public") {
    if (location.pathname === "/" || location.pathname === "/frontend/") {
      await loader("header", "./components/header-public.html");
      await loader("footer", "./components/footer.html");
      headerFunction();
      const dateSpan = document.getElementById("date");
      console.log(dateSpan);
    } else {
      await loader("header", "../components/header-public.html");
      await loader("footer", "../components/footer.html");
      headerFunction();
      const dateSpan = document.getElementById("date");
      console.log(dateSpan);
    }
  }
  if (pageType === "private") {
    loader("header", "/components/header.private.html");
  }
}

loadAllIncludes().catch((error) => {
  console.error("Failed to load includes:", error);
});
includeFinished = true;
