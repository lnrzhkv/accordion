const containerAccordion = document.querySelector(".container");

const categoryArray = ["camping", "landscape", "countryside", "city"];

const getImageUrl = (category) => {
  switch (category) {
    case "camping":
      return {
        imageUrl: "camping.png",
        svgUrl: "camping.svg",
        title: "text",
      };

    case "landscape":
      return {
        imageUrl: "landscape.png",
        svgUrl: "mingcute_tree-line.svg",
        title: "text",
      };

    case "countryside":
      return {
        imageUrl: "countryside.png",
        svgUrl: "ph_house-line.svg",
        title: "text",
      };

    case "city":
      return {
        imageUrl: "city.png",
        svgUrl: "solar_city-bold.svg",
        title: "text",
      };
  }
};

const createAccordionCard = (category) => {
  const { imageUrl, svgUrl, title } = getImageUrl(category);

  const accordionCard = document.createElement("div");
  accordionCard.classList.add("accordion-item");
  accordionCard.innerHTML = `
        <img src="${imageUrl}" alt=${imageUrl}>
         <h1 class='title'>${title}</h1>
         <h1 class='title-2'>${title}</h1>
        <div class="circle">
          <img src="${svgUrl}" alt=${svgUrl}>
        </div>
  `;
  return accordionCard;
};

categoryArray.map((category) =>
  containerAccordion.append(createAccordionCard(category))
);

const cardsAccordion = document.querySelectorAll(".accordion-item");

const openAccordion = (accordionItem) => {
  cardsAccordion.forEach((acc) => acc.classList.remove("moved"));
  accordionItem.classList.add("moved");
  accordionItem.querySelector(".title").cssText = "opacity: 1;";
  accordionItem.querySelector(".title-2").cssText = "opacity: 1;";
};

cardsAccordion.forEach((accordion) => {
  accordion.addEventListener("click", (e) => openAccordion(e.currentTarget));
});
