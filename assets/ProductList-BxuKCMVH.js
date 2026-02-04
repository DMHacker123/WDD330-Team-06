import{r}from"./utils-DsyKi0Bb.js";function i(t){return`
    <li class="product-card">
      <a href="product_pages/?products=${t.Id}">
        <img src="${t.Image}" alt="${t.Name}">
        <h2>${t.Brand.Name}</h2>
        <h3>${t.Name}</h3>
        <p class="product-card__price">$${t.FinalPrice}</p>
      </a>
    </li>
    `}class l{constructor(a,e,s){this.category=a,this.dataSource=e,this.listElement=s}async init(){const a=await this.dataSource.getData();this.renderList(a)}renderList(a){r(i,this.listElement,a)}}export{l as P};
