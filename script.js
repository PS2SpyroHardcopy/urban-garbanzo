Vue.component("Items", {
  data: function() {
    return {
      addedToCart: false,
      popUpActive: false
    }; // end return
  }, // end data

  props: ["name", "strings", "brand", "price", "picture"],
  template: `<div :class="{card:true,fender:brand == 'Fender',rogue:brand == 'Rogue',musicMan:brand == 'Music Man'}" >
            
            <div v-on:click = "activatePopUp">{{name}} </div>
             <div v-on:click = "cartProcess" :class="{addToCartButton:true}">add to cart</div>
             <div :class="{popUp:popUpActive,hidden:!popUpActive}" v-on:click = "activatePopUp">Name:{{name}} Brand:{{brand}} # of Strings:{{strings}} Price:{{price}}</div> 
            </div>`,

  methods: {
    addItemToCart: function() {
      this.addedToCart = true;
      console.log(this.addedToCart);
    }, // end add ItemToCart

    activatePopUp: function() {
      if (this.popUpActive) {
        this.popUpActive = !this.popUpActive;
      } else {
        this.popUpActive = !this.popUpActive;
      }
    }, //end activatePopUp

    cartProcess: function() {
      this.$emit("addeditemtocart", {
        name: this.name,
        strings: this.strings,
        brand: this.brand,
        price: this.price
      });
      this.$emit("findindex", {
        name: this.name,
        strings: this.strings,
        brand: this.brand,
        price: this.price
      });
    } //end cartProcess
  } // end methods
}); //end Items component

new Vue({
  el: "#app",
  data: {
    addItemPopUp: false,
    shoppingCartItems: 0,
    bassName: "example",
    bassStrings: "4example",
    bassBrand: "Rogue",
    bassPrice: 69,
    shoppingCartArray: [],
    basses: [
      {
        name: "SX100B",
        strings: "4",
        brand: "Rogue",
        price: "$99.99",
        picture:
          "https://freepngimg.com/download/bass_guitar/9-2-bass-guitar-png-clipart.png"
      },
      {
        name: "LX406",
        strings: "6",
        brand: "Rogue",
        price: "$193.99",
        picture:
          "https://freepngimg.com/download/bass_guitar/9-2-bass-guitar-png-clipart.png"
      },
      {
        name: "LX200B",
        strings: "4",
        brand: "Rogue",
        price: "$109.99",
        picture:
          "https://freepngimg.com/download/bass_guitar/9-2-bass-guitar-png-clipart.png"
      },

      {
        name: "Bronco",
        strings: "4",
        brand: "Fender",
        price: "$149.99",
        picture:
          "https://freepngimg.com/download/bass_guitar/9-2-bass-guitar-png-clipart.png"
      },
      {
        name: "Squier Classic",
        strings: "5",
        brand: "Fender",
        price: "$379.99",
        picture:
          "https://freepngimg.com/download/bass_guitar/9-2-bass-guitar-png-clipart.png"
      },
      {
        name: "Reality Sixty-six",
        strings: "6",
        brand: "Fender",
        price: "$69.99",
        picture:
          "https://freepngimg.com/download/bass_guitar/9-2-bass-guitar-png-clipart.png"
      },

      {
        name: "LG9012",
        strings: "5",
        brand: "Music Man",
        price: "$499.99",
        picture:
          "https://freepngimg.com/download/bass_guitar/9-2-bass-guitar-png-clipart.png"
      },
      {
        name: "KMXX23",
        strings: "4",
        brand: "Music Man",
        price: "$199.99",
        picture:
          "https://freepngimg.com/download/bass_guitar/9-2-bass-guitar-png-clipart.png"
      },
      {
        name: "QWOP42",
        strings: "6",
        brand: "Music Man",
        price: "$329.99",
        picture:
          "https://freepngimg.com/download/bass_guitar/9-2-bass-guitar-png-clipart.png"
      }
    ] // end basses
  }, //end data

  methods: {
    activateItemPopUp: function() {
      if (this.addItemPopUp) {
        this.addItemPopUp = !this.addItemPopUp;
      } else {
        this.addItemPopUp = !this.addItemPopUp;
      }
    }, //end addItemPopUp

    submit: function() {
      this.basses.push({
        name: this.bassName,
        strings: this.bassStrings,
        price: this.bassPrice,
        brand: this.bassBrand
      });

      console.log(this.basses);

      this.activateItemPopUp();
    }, //end submit

    addItemsToCartFunction: function(event) {
      this.shoppingCartArray.push({
        name: event.name,
        strings: event.strings,
        brand: event.brand,
        price: event.price
      });
    }, // end addItemsToCartfunction

    clearShoppingCarts: function() {
      for (var ii = 0; this.shoppingCartArray.length > ii; ii++) {
        this.basses.push(
          {
            name: this.shoppingCartArray[ii].name,
            strings: this.shoppingCartArray[ii].strings,
            brand: this.shoppingCartArray[ii].brand,
            price: this.shoppingCartArray[ii].price
          } //end for loop
        );
      }

      this.shoppingCartArray.length = 0;
    }, // end clear shopping cart

    indexFinder: function(event) {
      var indexOfItem = this.basses.findIndex(i => i.name === event.name);
      this.basses.splice(indexOfItem, indexOfItem + 1);
      console.log(this.basses);
    }
  } //end methods
}); //end vue