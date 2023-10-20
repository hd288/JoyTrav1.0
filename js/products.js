let rootProducts = [
  // {
  //   id: createId(),
  //   image: "",
  //   name: "",
  //   price: "£",
  //   details: "",
  //   quantity: 1,
  // },
  {
    id: createId(),
    image: "../media/products/sunscreen-nivea.jpg",
    name: "Nivea UV Deep Protection",
    price: 30,
    details:
      "SPF 50+/PA+++ Beauty care UV that prevents stains and freckles caused by sunburns.<br> Super waterproof Uses a 3D UV film that is resistant to sweat and water.",
    quantity: 1,
    stock: 5,
  },
  {
    id: createId(),
    image: "../media/products/sunscreen-biore.jpg",
    name: "Biore UV Aqua Rich",
    price: 30,
    details:
      "The world's first Microdefense formula: a thin, uniform UV-blocking membrane with 6 water capsules, super waterproof, color-free, and suitable for sensitive skin, providing sun protection and makeup foundation with a smooth finish and a gentle white muguet scent.",
    quantity: 1,
    stock: 5,
  },
  {
    id: createId(),
    image: "../media/products/sunscreen-aquag.jpg",
    name: "Skin Aqua Gold UV",
    price: 30,
    details:
      "Effective gel-type sun protection with high UV protection. Non-sticky, light-resistant, and waterproof with the 'Block Veil Formula' for even coverage.",
    quantity: 1,
    stock: 5,
  },
  {
    id: createId(),
    image: "../media/products/sunscreen-aqua.jpg",
    name: "Skin Aqua Essence",
    price: 30,
    details:
      "Rose-tinted sun protection corrects blood tone, providing transparent skin with a smooth, refreshing experience and a Happy Happiness Blossom Scent. Doubles as makeup foundation, soak-free.",
    quantity: 1,
    stock: 5,
  },
  {
    id: createId(),
    image: "../media/products/sunscreen-anessa.jpg",
    name: "Anessa Perfect UV Spray",
    price: 30,
    details:
      "UV-blocking Skin Care Spray with a transparent sheen and super waterproof makeup foundation. Shake and spray on skin or hair from 3.9 - 5.9 inches away. Reapply after sweating if needed. For facial use, spray in palm and blend gently. Rinse off with regular cleaning products.",
    quantity: 1,
    stock: 5,
  },
  {
    id: createId(),
    image: "../media/products/sunscreen-anessa-r.jpg",
    name: "ANESSA Perfect UV",
    price: 30,
    details:
      "Anesa's powerful UV milk offers SPF 50+ PA++++ and water-proof protection. Blocks UV rays from sweat, water, and heat with 50% skincare ingredients. Doubles as makeup foundation, easy to remove with soap, and has a refreshing citrus scent.",
    quantity: 1,
    stock: 5,
  },
  {
    id: createId(),
    image: "../media/products/ts-transino.jpg",
    name: "Transino Set",
    price: 50,
    details:
      "Transino Medicated Skin Care Series 3 Items x Approx. 7 Day Supply. <br> Contains a renewed whitening serum so you can experiment with authentic stains and whitening care. <br> Comes with facial cleanser, so it can be used for travel.",
    quantity: 1,
    stock: 5,
  },
  {
    id: createId(),
    image: "../media/products/ts-curel-body.jpg",
    name: "Curel Body Set",
    price: 50,
    details:
      "Curel Body Wash & Lotion (Body Wash 45ml + Lotion 45ml) (Can also be used on babies) <br>A mini set of body wash and lotion that is convenient for traveling and going out.<br>Prevents rough skin. Contains an anti-inflammatory agent (active ingredient).<br>You can even use it on your baby's delicate skin.",
    quantity: 1,
    stock: 5,
  },
  {
    id: createId(),
    image: "../media/products/ts-curel-hair.jpg",
    name: "Curel Hair Set",
    price: 50,
    details:
      "Curel Shampoo & Conditioner, (Shampoo 45ml + Conditioner 45ml) A convenient mini set for travel and outings.<br>Prevents scalp problems such as dandruff, itchiness, and dryness, and leaves hair smooth and smooth.<br>Contains a plant-derived anti-inflammatory agent.",
    quantity: 1,
    stock: 5,
  },
  {
    id: createId(),
    image: "../media/products/ts-biore.jpg",
    name: "Biore Travel Set",
    price: 50,
    details:
      "Set Contents:<br>Violetu Mini 3.4 fl oz (90 ml) <br>Bioreu Mirumuru Foaming Body Towel (Blue, Half Sizes) <br>Biore Skin Care Facial Cleansing Moisture Mini 1.1 oz (30 g)",
    quantity: 1,
    stock: 5,
  },
  {
    id: createId(),
    image: "../media/products/ts-dove.jpg",
    name: "Dove Travel Set",
    price: 50,
    details:
      "Shampoo, Conditioner, Body Wash <br> Hair Care: 2-way care awakens healthy beauty. Formulated with moisture milk EX (moisturizing ingredient) for smooth hair that lasts all day. Moisturizes hair to the ends. <br> Body Care: Formulated with 1 dense moisturizing milk that leaves beautiful skin flora and moisturizes up to 2 of the skin, protecting moisture. DEEP *3 Moisturizing, Lasting Moisture. ",
    quantity: 1,
    stock: 5,
  },
  {
    id: createId(),
    image: "../media/products/ts-kao.jpg",
    name: "Kao Travel Set",
    price: 50,
    details:
      "Shampoo, Body Soap, Toothbrush, Toothbrush, Toothpaste Powder <br> Easy to carry clear clean toothbrush set. Stay smooth even on the go. Medicinal Toothbrush cleans up deep teeth with granules (cleaning agent) just in between the teeth and prevents dull teeth, breath odor, and gumitis. The Hair Brush is a clear clean extra thick hair bundle (mini size). Crunchy scrubbing and removing dental plaque thoroughly. Includes Merit Rinse Free Shampoo and Bioletu.",
    quantity: 1,
    stock: 5,
  },
  {
    id: createId(),
    image: "../media/products/mc-kirei.jpg",
    name: "Kirei Travel Set",
    price: 10,
    details:
      "<ul><li>Dentist Recommended Design: Clinica Ha Brush with 3 rows flat cut.</li><li>Handle Material: Body - Saturated polyester resin, Rubber part - Polyester, Polyether, SBC.</li><li>Hardness of Bristles: Normally.</li><li>Heat Resistance: Up to 60°C (140°F).</li></ul>",
    quantity: 1,
    stock: 5,
  },
  {
    id: createId(),
    image: "../media/products/mc-pureora.jpg",
    name: "Medicated PureOral Set",
    price: 16,
    details:
      "<ul><li>Medicated Pure Office & Travel Toothpaste Set: Convenient for on-the-go use.</li><li>Easy to Store: Fits in office drawer or bag with a stylish design.</li><li>Pureaura Medicinal Lamber: Contains purifier erythritol and two disinfectants CPC&TC.</li></ul>",
    quantity: 1,
    stock: 5,
  },
  {
    id: createId(),
    image: "../media/products/mc-gjc.jpg",
    name: "GJC Tongue Cleaner Set",
    price: 30,
    details:
      "<ul><li>Instantly Clean Tongue: Use moisturizing gel and special cleaner for a clean pink tongue.</li><li>Tongue Care: Eliminates tongue stains and odor-causing tongue moss.</li><li>Refreshing Breath: Helps maintain fresh breath.</li></ul>",
    quantity: 1,
    stock: 5,
  },
  {
    id: createId(),
    image: "../media/products/mc-nonio.jpg",
    name: "NONIO Tongue Cleaner",
    price: 15,
    details:
      "<ul><li>Tongue Cleaner: Double stain removal for breath odor caused by 'tongue moss'.</li><li>Cleaning Gel: Special gel for tongue cleaning.</li><li>Contents: 1 cleaner + 1.6 oz (45 g) gel.</li> <li>Replacement Estimate: Approx. 1 month for dirty conditions.</li></ul>",
    quantity: 1,
    stock: 5,
  },
  {
    id: createId(),
    image: "../media/products/nc-set.jpg",
    name: "Professional Manicure Set - Amazon",
    price: 20,
    details:
      "<ul><li>Material: Stainless Steel</li><li>Case: Foldable PU Leather Case included</li><li>Number of Items: 16 pieces</li><li>Purpose: Travel grooming care tool kit</li><li>Target: Suitable for both women and men</li><li>Items: Nail scissors, nail cutter set, and more</li></ul>",
    quantity: 1,
    stock: 5,
  },
  {
    id: createId(),
    image: "../media/products/nc-set-4.jpg",
    name: "Basic Manicure Set - Amazon",
    price: 10,
    details:
      "<ul><li>Ergonomic and Efficient: Comfortable ergonomic lever for easy and relaxing nail clipping.</li><li>Elegant Leather Case: Stylish black case for on-the-go use, suitable for both men and women.</li><li>Enhanced Warranty: 100% top quality stainless steel, sharp and sturdy. Lifetime warranty and customer support.</li></ul>",
    quantity: 1,
    stock: 5,
  },
  {
    id: createId(),
    image: "../media/products/nc-set-3.jpg",
    name: "Basic Manicure Set - Amazon",
    price: 10,
    details:
      "<ul><li>Ergonomic and Efficient: Comfortable ergonomic lever for easy and relaxing nail clipping.</li><li>Elegant Leather Case: Stylish black case for on-the-go use, suitable for both men and women.</li><li>Enhanced Warranty: 100% top quality stainless steel, sharp and sturdy. Lifetime warranty and customer support.</li></ul>",
    quantity: 1,
    stock: 5,
  },
  {
    id: createId(),
    image: "../media/products/nc-set-2.jpg",
    name: "Basic Manicure Set - Amazon",
    price: 10,
    details:
      "<ul><li>Ergonomic and Efficient: Comfortable ergonomic lever for easy and relaxing nail clipping.</li><li>Elegant Leather Case: Stylish black case for on-the-go use, suitable for both men and women.</li><li>Enhanced Warranty: 100% top quality stainless steel, sharp and sturdy. Lifetime warranty and customer support.</li></ul>",
    quantity: 1,
    stock: 5,
  },
  {
    id: createId(),
    image: "../media/products/nc-set-1.jpg",
    name: "Basic Manicure Set - Amazon",
    price: 10,
    details:
      "<ul><li>Ergonomic and Efficient: Comfortable ergonomic lever for easy and relaxing nail clipping.</li><li>Elegant Leather Case: Stylish black case for on-the-go use, suitable for both men and women.</li><li>Enhanced Warranty: 100% top quality stainless steel, sharp and sturdy. Lifetime warranty and customer support.</li></ul>",
    quantity: 1,
    stock: 5,
  },
  {
    id: createId(),
    image: "../media/products/so-set-n.jpg",
    name: "Suitcase Organizer Set - Navy - Amazon",
    price: 10,
    details:
      "<ul><li>Dustproof and Safe: Made of high-quality 276T double-sided twill material.</li><li>Selection and Organization: 8 storage bags to sort and identify items, keeping them dry.</li><li>Perfect Travel Bag Kit: Includes garment bags, underwear bag, drawstring bag, flat pocket, shoe bag, and laundry bag.</li><li>Wide Application: Suitable for travel, camping, beach trips, and more.</li><li>Easy to Carry: Convenient to put in your suitcase for outings.</li></ul>",
    quantity: 1,
    stock: 5,
  },
  {
    id: createId(),
    image: "../media/products/so-set-g.jpg",
    name: "Suitcase Organizer Set - Gold - Amazon",
    price: 10,
    details:
      "<ul><li>Dustproof and Safe: Made of high-quality 276T double-sided twill material.</li><li>Selection and Organization: 8 storage bags to sort and identify items, keeping them dry.</li><li>Perfect Travel Bag Kit: Includes garment bags, underwear bag, drawstring bag, flat pocket, shoe bag, and laundry bag.</li><li>Wide Application: Suitable for travel, camping, beach trips, and more.</li><li>Easy to Carry: Convenient to put in your suitcase for outings.</li></ul>",
    quantity: 1,
    stock: 5,
  },
  {
    id: createId(),
    image: "../media/products/so-set-p.jpg",
    name: "Suitcase Organizer Set - Pink - Amazon",
    price: 10,
    details:
      "<ul><li>Dustproof and Safe: Made of high-quality 276T double-sided twill material.</li><li>Selection and Organization: 8 storage bags to sort and identify items, keeping them dry.</li><li>Perfect Travel Bag Kit: Includes garment bags, underwear bag, drawstring bag, flat pocket, shoe bag, and laundry bag.</li><li>Wide Application: Suitable for travel, camping, beach trips, and more.</li><li>Easy to Carry: Convenient to put in your suitcase for outings.</li></ul>",
    quantity: 1,
    stock: 5,
  },
  {
    id: createId(),
    image: "../media/products/so-set-s.jpg",
    name: "Suitcase Organizer Set - Silver - Amazon",
    price: 10,
    details:
      "<ul><li>Dustproof and Safe: Made of high-quality 276T double-sided twill material.</li><li>Selection and Organization: 8 storage bags to sort and identify items, keeping them dry.</li><li>Perfect Travel Bag Kit: Includes garment bags, underwear bag, drawstring bag, flat pocket, shoe bag, and laundry bag.</li><li>Wide Application: Suitable for travel, camping, beach trips, and more.</li><li>Easy to Carry: Convenient to put in your suitcase for outings.</li></ul>",
    quantity: 1,
    stock: 5,
  },

  {
    id: createId(),
    image: "../media/products/sc-s.jpg",
    name: "Mirai MD Suitcase - Silver - Amazon",
    price: 250,
    details:
      "This carrying case is lightweight and resilient, and has excellent impact and heat resistance and is hard to break ABS plastic. Formulated with polycarbonate resin for areliable, high-quality body.",
    quantity: 1,
    stock: 5,
  },
  {
    id: createId(),
    image: "../media/products/sc-b.jpg",
    name: "Mirai MD Suitcase - Black - Amazon",
    price: 250,
    details:
      "This carrying case is lightweight and resilient, and has excellent impact and heat resistance and is hard to break ABS plastic. Formulated with polycarbonate resin for areliable, high-quality body.",
    quantity: 1,
    stock: 5,
  },
  {
    id: createId(),
    image: "../media/products/sc-w.jpg",
    name: "Mirai MD Suitcase - White - Amazon",
    price: 250,
    details:
      "This carrying case is lightweight and resilient, and has excellent impact and heat resistance and is hard to break ABS plastic. Formulated with polycarbonate resin for areliable, high-quality body.",
    quantity: 1,
    stock: 5,
  },
  {
    id: createId(),
    image: "../media/products/sc-g.jpg",
    name: "Mirai MD Suitcase - Gold - Amazon",
    price: 250,
    details:
      "This carrying case is lightweight and resilient, and has excellent impact and heat resistance and is hard to break ABS plastic. Formulated with polycarbonate resin for areliable, high-quality body.",
    quantity: 1,
    stock: 5,
  },
  {
    id: createId(),
    image: "../media/products/sc-g.jpg",
    name: "Mirai MD Suitcase - Gold - Amazon",
    price: 250,
    details:
      "This carrying case is lightweight and resilient, and has excellent impact and heat resistance and is hard to break ABS plastic. Formulated with polycarbonate resin for areliable, high-quality body.",
    quantity: 1,
    stock: 5,
  },
  {
    id: createId(),
    image: "../media/products/sc-g.jpg",
    name: "Mirai MD Suitcase - Gold - Amazon",
    price: 250,
    details:
      "This carrying case is lightweight and resilient, and has excellent impact and heat resistance and is hard to break ABS plastic. Formulated with polycarbonate resin for areliable, high-quality body.",
    quantity: 1,
    stock: 5,
  },
];

function createId() {
  return Math.floor(Math.random() * 999999999 + new Date().getMilliseconds());
}
for (let i = 0; i < rootProducts.length; i++) {
  rootProducts[i].id = createId();
}

// localStorage.setItem("rootProducts", JSON.stringify(rootProducts));

//  ***************************************************