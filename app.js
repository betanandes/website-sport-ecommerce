const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
      id: 1,
      title: "AIR FORCE",
      price: 350,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "BONÉ",
      price: 100,
      colors: [
        {
          code: "black",
          img: "./img/bone1.png",
        },
        {
          code: "lightpink",
          img: "./img/bone2.png",
        },
      ],
    },
    {
      id: 3,
      title: "JAQUETA",
      price: 239,
      colors: [
        {
          code: "black",
          img: "./img/jaqueta1.png",
        },
        {
          code: "red",
          img: "./img/jaqueta2.png",
        },
      ],
    },
    {
      id: 4,
      title: "SAIA",
      price: 189,
      colors: [
        {
          code: "white",
          img: "./img/saia1.png",
        },
        {
          code: "purple",
          img: "./img/saia2.png",
        },
      ],
    },
    {
      id: 5,
      title: "TOP",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/top1.png",
        },
        {
          code: "pink",
          img: "./img/top2.png",
        },
      ],
    },
  ];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach ((item,index) => {
    item.addEventListener("click", () => {
        //muda o slide atual
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //muda o prduto escolhido
        choosenProduct = products[index]

        //muda os textos do currentProduct
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "R$" + choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img

        //atribuindo novas cores
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});


currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img
         
    });
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
  payment.style.display="flex"
})

close.addEventListener("click",()=>{
  payment.style.display="none"
})