function solve() {
   
   let buttons=Array.from(document.getElementsByClassName('add-product'));
               buttons.forEach(b=>b.addEventListener('click',onClick));
               console.log(buttons)
   let output=document.getElementsByTagName('textarea')[0];
   
   let products={};
   function onClick (ev) {
      let product=ev.target.parentNode.parentNode;
      let productName=product.querySelector('.product-title').textContent;
      let productPrice=Number(product.querySelector('.product-line-price').textContent);
      output.textContent+=`Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`; 
      if (!products[productName]) {
         products[productName]=productPrice;
      } else {
         products[productName]+=productPrice;
      }
   }

   let checkout=document.getElementsByClassName('checkout')[0].addEventListener('click',onCheckout);

   
   function onCheckout (ev) {
      let str='';
      let sum=0;
      for (const key in products) {
         str+=key+", ";
         sum+=products[key];
      }
      output.textContent+=`You bought ${str.slice(0,str.length-2)} for ${sum.toFixed(2)}.`
      buttons.forEach(b=>b.disabled=true);
      document.getElementsByClassName('checkout')[0].disabled=true;
   }
  
}