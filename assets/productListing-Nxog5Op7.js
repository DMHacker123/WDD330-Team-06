import{r as i,l as s,b as c}from"./utils-WlwKjqio.js";/* empty css              */import{E as o}from"./ExternalServices-BF8fCsTT.js";function n(t){return`
    <li class="product-card">
      <a href="/product_pages/?product=${t.Id}">
        <img src="${t.Images.PrimaryMedium}" alt="${t.Name}">
        <h3>${t.Brand.Name}</h3>
        <p>${t.NameWithoutBrand}</p>
        <p class="product-card__price">$${t.FinalPrice}</p>
      </a>
    </li>
    `}class l{constructor(e,a,r){this.category=e,this.dataSource=a,this.listElement=r}async init(){const e=await this.dataSource.getData(this.category);this.renderList(e),document.querySelector(".title").textContent=this.category}renderList(e){i(n,this.listElement,e)}}s();const m=c("category"),d=new o,h=document.querySelector(".product-list"),p=new l(m,d,h);p.init();fetch("/WDD330-Team-06/partials/header.html");fetch("/WDD330-Team-06/partials/footer.html");
