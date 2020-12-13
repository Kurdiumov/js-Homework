const shops = ["CCC", "PepCo", "NeoNet", "MartesSport", "TXM"];
const shopInfos = shops.map((shop) => shop + "Info");

const resetAll = () => {
  document.querySelectorAll(".active").forEach((active) => {
    active.classList.remove("active");
  });

  document.querySelectorAll(".visible").forEach((visible) => {
    visible.classList.remove("visible");
  });
};

const shopClick = (event) => {
  resetAll();

  const info = event.target.parentElement.id + "Info";
  const children = [...event.target.parentElement.children];

  document.getElementById(info).classList.toggle("visible");

  children.forEach((element) => {
    element.removeAttribute("style");
    element.classList.toggle("active");
  });
};

shops.forEach((shop) => {
  const shopElement = document.getElementById(shop);
  shopElement.addEventListener("click", shopClick);
});

shopInfos.forEach((shopInfo) => {
  const shopInfoCloseBtn = document.querySelectorAll(`#${shopInfo} > text`)[0];
  shopInfoCloseBtn.classList.add("close-btn");
  shopInfoCloseBtn.addEventListener("click", resetAll);
});
