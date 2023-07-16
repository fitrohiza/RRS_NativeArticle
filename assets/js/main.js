const url = "https://644e64ed1b4567f4d5866c65.mockapi.io/article";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const image = document.getElementById("f-img");
    const judul = document.getElementById("judul");
    const artList = document.getElementById("list-art");
    const artNew = document.getElementById("art-new");

    if (data.length > 0) {
      const firstItem = data[0];
      judul.innerText = firstItem.title;
      image.src = firstItem.image;
    }

    const filteredData = data.filter(
      (article) => article.categori === "pilihan"
    );

    const filteredData2 = data.filter(
      (article) => article.categori === "terbaru"
    );

    // Menampilkan data dengan kategori pilihan
    filteredData.forEach((item) => {
      const article = document.createElement("div");
      article.innerHTML = `<img src = ${item.image}></img><div><h3 class="art-judul">${item.title}</h3><span>${item.createdAt}</span></div>`;
      artList.appendChild(article);
      article.classList.add("myClass");
    });

    filteredData2.slice(0, 4).forEach((item) => {
      const articles = document.createElement("div");
      articles.innerHTML = `<img class="imgNew" src=${item.image}></img>`;
      const sub = document.createElement("div");
      sub.innerHTML = `<h2>${item.title}</h2><span>${item.createdAt}</span><p>${item.description}</p>`;
      articles.appendChild(sub);
      artNew.appendChild(articles);
      sub.classList.add("subArt");
      articles.classList.add("myNewArt");
    });
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });
