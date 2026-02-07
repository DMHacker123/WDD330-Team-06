import{r as i,l as s,a as c}from"./utils-DYUUmGX3.js";/* empty css              */import{E as o}from"./ExternalServices-D9P6I627.js";function n(t){return`
    <li class="product-card">
      <a href="/product_pages/?product=${t.Id}">
        <img src="${t.Images.PrimaryMedium}" alt="${t.Name}">
        <h3>${t.Brand.Name}</h3>
        <p>${t.NameWithoutBrand}</p>
        <p class="product-card__price">$${t.FinalPrice}</p>
      </a>
    </li>
    `}class l{constructor(e,a,r){this.category=e,this.dataSource=a,this.listElement=r}async init(){const e=await this.dataSource.getData(this.category);this.renderList(e),document.querySelector(".title").textContent=this.category}renderList(e){i(n,this.listElement,e)}}s();const m=c("category"),d=new o,u=document.querySelector(".product-list"),h=new l(m,d,u);h.init();
