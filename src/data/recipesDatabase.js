const recipes = [
  {
    name: "Crispy Hash Browns",
    ingredients: [
      "Potatoes",
      "Flour",
      "Onion",
      "Eggs",
      "Salt",
      "Pepper",
      "Oil",
    ],
    instructions: [
      "Rinse shredded potatoes until water is clear, then drain and squeeze dry.",
      "Place shreds in a bowl and mix in the onion, flour, and egg until evenly distributed.",
      "Heat about 1/4 inch of oil in a large heavy skillet over medium-high heat. When oil is sizzling hot, place potatoes into the pan in a 1/2 inch thick layer. Cover the whole bottom of the pan, or make separate piles like pancakes.",
      "Cook until nicely browned on the bottom, then flip over and brown on the other side. It should take at least 5 minutes per side. If you are cooking them in one big piece, it can be cut into quarters for easier flipping.",
      "Remove from pan, and drain on paper towels. Season with salt and pepper and serve immediately.",
    ],
    image:
      "https://www.allrecipes.com/thmb/Hi3wk4dO3hcfFdaIyYKagnGbF50=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/57783-emilys-famous-hash-browns-DDMFS-4x3-ce2a6ec1178640258faf601d6848ff11.jpg",
  },
  {
    name: "Potato Salad",
    ingredients: [
      "Potatoes",
      "Eggs",
      "Onion",
      "Mayonnaise",
      "Mustard",
      "Celery",
      "Relish",
    ],
    instructions: [
      "Bring a large pot of salted water to a boil. Add potatoes and cook until tender but still firm, about 15 minutes.",
      "Drain, cool, peel, and chop potatoes.",
      "While potatoes cook, place eggs in a saucepan and cover with cold water. Bring water to a boil; cover, remove from heat, and let eggs stand in hot water for 10 to 12 minutes.",
      "Remove from hot water, cool, peel, and chop eggs.",
      "Combine the potatoes, eggs, celery, onion, relish, mayonnaise, mustard, garlic salt, celery salt, and pepper in a large bowl. Mix together well and refrigerate until chilled.",
    ],
    image:
      "https://www.allrecipes.com/thmb/6dO_yT8-iTWF3_v7Klrix7oOjxw=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/16729-old-fashioned-potato-salad-DDMFS-4x3-3e270b1b82744aa6ac355fef41a5a43c.jpg",
  },
  {
    name: "Fried Chicken Wings",
    ingredients: ["Olive Oil", "Pepper", "Chicken"],
    instructions: [
      "Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).",
      "Stir olive oil and lemon-pepper seasoning together in a bowl; set aside.",
      "Fry wings in hot oil until no longer pink at the bone and the juices run clear, about 8 minutes. An instant-read thermometer inserted near the bone should read 165 degrees F (74 degrees C).",
      "Toss hot wings with lemon-pepper mixture to coat.",
    ],
    image:
      "https://www.allrecipes.com/thmb/c5SbhuUstUIfhGnYQWOgnRSIniQ=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2912641-f8d167a8e1e344eaa1e27c28fbe99638.jpg",
  },
  {
    name: "Mexican Pasta",
    ingredients: [
      "Pasta",
      "Salt",
      "Pepper",
      "Olive Oil",
      "Bell Pepper",
      "Corn",
      "Black Beans",
      "Salsa",
      "Onion",
    ],
    instructions: [
      "Bring a large pot of lightly salted water to a boil. Add pasta and cook for 8 to 10 minutes or until al dente; drain.",
      "While pasta is cooking, heat olive oil over medium heat in a large skillet. Cook onions and bell pepper in oil until lightly browned, about 10 minutes.",
      "Stir in corn and heat through. Stir in black beans, tomatoes, salsa, olives, seasoning mix, and salt and pepper and cook until thoroughly heated, about 5 minutes.",
      "Toss sauce with cooked pasta and serve.",
    ],
    image:
      "https://www.allrecipes.com/thmb/76_57i51JdTPCGgPLOxMpdd1Ib0=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3190483-mexican-pasta-mskia86-4x3-1-fac258900ea74b22984b2b2d9e4417e0.jpg",
  },
  {
    name: "Japanese Tamago Egg",
    ingredients: ["Eggs", "Sugar", "Soy Sauce", "Oil"],
    instructions: [
      "Beat eggs thoroughly in a bowl; whisk in dashi stock, sugar, mirin, and soy sauce until sugar has dissolved.",
      "Lightly grease a nonstick skillet and heat over medium heat.",
      "Pour a thin layer of egg mixture into the hot pan and swirl to coat the pan. Cook until egg layer is firm on the bottom but still slightly liquid on top, about 1 minute. Then lift up one edge using a spatula and roll up the egg layer. Push omelet roll to one side of the skillet. Oil the skillet again and pour in another thin layer of egg, lifting the first omelet roll up slightly to allow the egg to flow underneath; roll up the first omelet in the new layer of egg and push omelet to the edge of the skillet as before. Repeat the process with the remaining egg mixture, oiling the pan each time if needed.",
      "Remove rolled omelet to a serving platter and cut into 6 equal pieces to serve.",
    ],
    image:
      "https://www.allrecipes.com/thmb/Jw4f6tSH_SS-zPT1UWzqxGVcoF0=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/953934-e1f82ce34ae648fbb12dc2118be4eb9a.jpg",
  },
  {
    name: "Bang Bang Shrimp",
    ingredients: [
      "Mayonnaise",
      "Chili",
      "Shrimp",
      "Oil",
      "Lettuce",
      "Onion",
      "Cornstarch",
    ],
    instructions: [
      "Whisk mayonnaise, sweet chile sauce, and Sriracha hot sauce together in a bowl. Set aside.",
      "Place cornstarch in a shallow bowl. Gently press shrimps into cornstarch to coat; shake off any excess.",
      "Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).",
      "Working in batches, cook the shrimp until they are lightly browned on the outside and no longer transparent in the center, about 3 to 5 minutes.",
      "Transfer shrimp to paper towels to drain.",
      "Put cooked shrimp in a bowl and pour chile sauce mixture over the shrimp; toss gently to coat.",
      "Line a serving bowl with lettuce leaves. Pour shrimp into bowl and top with chopped green onion.",
    ],
    image:
      "https://www.allrecipes.com/thmb/tsb3chWjySlUprJjuNcbLmj1b94=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/235267-copycat-bang-bang-shrimp-DDMFS-4x3-07fc6970da6443d6b0a8332e6189f9e0.jpg",
  },
  {
    name: "Garlic Bread Spread",
    ingredients: ["Butter", "Garlic", "Cheese", "Basil", "Herbs", "Bread"],
    instructions: [
      "Gather ingredients and preheat the oven to 350 degrees F (175 degrees C).",
      "Mix butter, Parmesan cheese, garlic, marjoram, basil, fines herbs, oregano, parsley, and pepper together in a bowl until thoroughly combined.",
      "Slice Italian bread loaf in half lengthwise; spread each half generously with the garlic butter mixture. Transfer onto a baking sheet.",
      "Bake on the top rack of the preheated oven until butter mixture melts and bubbles, about 10 to 15 minutes. Turn on the oven broiler and broil until the bread is your desired shade of golden brown, 1 to 2 more minutes.",
    ],
    image:
      "https://www.allrecipes.com/thmb/utJaFGwV7OPguN43UkQJXxePaXs=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/216077-garlic-bread-spread-step-beauty-1x1-BP-3172-1e39e3d9b0614309bb5a447847a10c77.jpg",
  },
  {
    name: "Zucchini Fritters",
    ingredients: [
      "Zucchini",
      "Salt",
      "Flour",
      "Cheese",
      "Eggs",
      "Garlic",
      "Pepper",
      "Olive Oil",
    ],
    instructions: [
      "Toss zucchini and salt together in a large colander and place in sink to drain for 10 minutes.",
      "Transfer zucchini to the center of a piece of cheesecloth; wrap cheesecloth around zucchini and squeeze to drain as much moisture as possible.",
      "Mix flour, Parmesan cheese, egg, and garlic together in a large bowl. Stir in zucchini, then season with kosher salt and pepper.",
      "Heat olive oil in a large skillet over medium-high heat.",
      "Working in batches, scoop tablespoonfuls of zucchini mixture into the hot skillet and fry until golden brown, about 2 minutes per side.",
    ],
    image:
      "https://www.allrecipes.com/thmb/0H7h50-JBij38pOumq8gRjAelUo=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/241422-easy-zucchini-fritters-DDMFS-4x3-bc4d3297e15b479aafee05dbf9eb67d3.jpg",
  },
  {
    name: "Spinach Quiche ",
    ingredients: [
      "Spinach",
      "Butter",
      "Cheese",
      "Eggs",
      "Milk",
      "Salt",
      "Pepper",
    ],
    instructions: [
      "Preheat the oven to 375 degrees F (190 degrees C).",
      "Melt butter in a medium skillet over medium heat. Add onion and garlic and saute until lightly browned, about 7 minutes.",
      "Stir in spinach, mushrooms, feta, and 1/2 cup Cheddar. Season with salt and pepper. Spoon mixture into the pie shell.",
      "Whisk eggs and milk together in a medium bowl until combined. Season with salt and pepper. Pour over the spinach mixture in the pie shell, allowing egg mixture to thoroughly combine with spinach mixture.",
      "Bake in the preheated oven for 15 minutes. Sprinkle the top with remaining Cheddar and bake until set in center, 35 to 40 minutes longer. Allow to cool 10 minutes before slicing and serving.",
    ],
    image:
      "https://www.allrecipes.com/thmb/B4qo1CV_feqzA6IjweJG1OkOXa4=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7778617-1b7ac6bd01074293872e54036cd6a5e2.jpg",
  },
  {
    name: "Tomato Soup",
    ingredients: [
      "Tomatoes",
      "Onion",
      "Galic",
      "Butter",
      "Flour",
      "Salt",
      "Sugar",
    ],
    instructions: [
      "In a stockpot, over medium heat, combine the tomatoes, large slice of onion, garlic cloves, and chicken broth. Bring to a boil, and gently boil for about 20 minutes to blend all of the flavors.",
      "Remove from heat and run the mixture through a food mill into a large bowl, or pan. Discard any stuff left over in the food mill.",
      "In the now empty stockpot, melt the butter over medium heat. Stir in the flour to make a roux, cooking until the roux is a medium brown.",
      "Gradually whisk in a bit of the tomato mixture, so that no lumps form, then stir in the rest.",
      "Season with sugar and salt, and adjust to taste.",
    ],
    image:
      "https://www.allrecipes.com/thmb/i26SeiK0IUmbERAwi46KwmFgf0Q=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/39544-Garden-Fresh-Tomato-Soup-DDMFS-4x3-b8e94cf7ab8e42f4b79042fc0df55546.jpg",
  },
  {
    name: "Lettuce Wraps",
    ingredients: [
      "Lettuce",
      "Beef",
      "Oil",
      "Onion",
      "Garlic",
      "Soy Sauce",
      "Vinegar",
      "Ginger",
      "Water Chestnut",
    ],
    instructions: [
      "Rinse whole lettuce leaves and pat dry, being careful not to tear them; set aside.",
      "Heat oil in a large skillet over medium-high heat. Add beef; cook and stir until browned and crumbly, 5 to 7 minutes. Drain and discard grease; transfer beef to a bowl. Add onion to the same skillet; cook and stir until just tender, 5 to 7 minutes.",
      "Stir in hoisin sauce, garlic, soy sauce, vinegar, ginger, and chile pepper sauce until well combined. Add water chestnuts, green onions, sesame oil, and cooked beef; cook and stir until the onions just begin to wilt, about 2 minutes.",
      "Arrange lettuce leaves around the outer edge of a large serving platter; spoon beef mixture in the center.",
    ],
    image:
      "https://www.allrecipes.com/thmb/sFAXr9AU1gWnNvWAIZrU90PdQ5g=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2630776-asian-lettuce-wraps-Chefd-1x1-1-b10d1fecc65748a4b4c60113da62a863.jpg",
  },
  {
    name: "Savory Deviled Eggs",
    ingredients: [
      "Eggs",
      "Mayonnaise",
      "Vinegar",
      "Mustard",
      "Garlic",
      "Dill",
      "Salt",
    ],
    instructions: [
      "Scoop egg yolks into a bowl and set egg whites aside from hard-cooked eggs, halved.",
      "Add mayonnaise, vinegar, mustard, 1/2 teaspoon chopped dill, garlic powder, and salt to the egg yolks; mash well until smooth.",
      "Spoon or pipe yolk mixture into egg whites. Garnish with dill sprigs. Refrigerate until ready to serve.",
    ],
    image:
      "https://www.allrecipes.com/thmb/SQcpX_5bBVzWufImbXNv_AA75Ks=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/228129-classic-savory-deviled-eggs-DDMFS-4x3-7390f33eae3d44f78669308ab8922798.jpg",
  },
  {
    name: "Cucumber Pasta Salad",
    ingredients: [
      "Pasta",
      "Cucumber",
      "Onion",
      "Dill",
      "Vinegar",
      "Sugar",
      "Oil",
      "Mustard",
      "Salt",
      "Pepper",
    ],
    instructions: [
      "Bring a large pot of lightly salted water to a boil. Cook pasta at a boil, stirring occasionally, until cooked through yet firm to the bite, about 12 minutes. Drain and rinse several times with cold water until pasta is cool.",
      "Stir pasta, cucumber, onion, and dill in a salad bowl.",
      "Whisk vinegar, sugar, water, vegetable oil, mustard, salt, and black pepper in a separate bowl until sugar and salt have dissolved. Pour dressing over pasta mixture and toss lightly to coat with dressing. Let chill for 2 hours before serving.",
    ],
    image:
      "https://www.allrecipes.com/thmb/tcUHSwwdKJkjpJn_R--WQ3CX3Ag=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1125106-13de3f07838948098ddb4590a0aed58e.jpg",
  },
  {
    name: "Fluffy French Toast",
    ingredients: [
      "Flour",
      "Milk",
      "Eggs",
      "Sugar",
      "Cinnamon",
      "Salt",
      "Bread",
    ],
    instructions: [
      "Measure flour into a large mixing bowl. Slowly whisk in milk. Whisk in eggs, sugar, vanilla extract, cinnamon, and salt until smooth.",
      "Heat a lightly oiled griddle or frying pan over medium heat.",
      "Soak bread slices in milk mixture until saturated.",
      "Working in batches, cook bread on the preheated griddle or pan until golden brown on each side. Serve hot.",
    ],
    image:
      "https://www.allrecipes.com/thmb/U3pnDTxfrlBH6Jifttj7hrTh7Gk=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fluffy-french-toast-6567411ed61c41c6aa500ebf80aeca5e.jpg",
  },
  {
    name: "Classic Pancakes",
    ingredients: [
      "Flour",
      "Baking Powder",
      "Sugar",
      "Salt",
      "Milk",
      "Butter",
      "Eggs",
    ],
    instructions: [
      "Sift flour, baking powder, sugar, and salt together in a large bowl. Make a well in the center and add milk, melted butter, and egg; mix until smooth.",
      "Heat a lightly oiled griddle or pan over medium-high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake; cook until bubbles form and the edges are dry, about 2 to 3 minutes. Flip and cook until browned on the other side. Repeat with remaining batter.",
    ],
    image:
      "https://www.allrecipes.com/thmb/WLHsZm_B4rdxpmAMFrIbmCSYW08=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/21014-Good-old-Fashioned-Pancakes-mfs_002-0e249c95678f446291ebc9408ae64c05.jpg",
  },
  {
    name: "Baby Spinach Omelet",
    ingredients: ["Eggs", "Spinach", "Cheese", "Onion", "Salt", "Pepper"],
    instructions: [
      "Beat eggs in a bowl, and stir in baby spinach and Parmesan cheese. Season with onion powder, nutmeg, salt, and pepper.",
      "Spray a small skillet with cooking spray and place over medium heat. Once warm, add in the egg mixture and cook until partially set, about 3 minutes. Flip with a spatula, and continue cooking, 2 to 3 minutes.",
      "Reduce heat to low and continue cooking, 2 to 3 minutes, or until omelet reaches desired doneness.",
    ],
    image:
      "https://www.allrecipes.com/thmb/ZGuj_Yz6RIO97lfruJuw9AUolAM=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4520180-baby-spinach-omelet-France-C-4x3-1-49c3c8b869774bc8a71d2c097068ed62.jpg",
  },
  {
    name: "Avocado Sandwich",
    ingredients: [
      "Olive Oil",
      "Eggs",
      "Salt",
      "Pepper",
      "Butter",
      "Bread",
      "Cheese",
      "Avocado",
    ],
    instructions: [
      "Heat olive oil in a skillet over medium heat. Crack eggs into skillet; cook for 1 to 2 minutes. Flip and cook egg until done, 2 to 5 minutes more. Transfer eggs to a plate and season with salt and pepper.",
      "Spread butter onto 1 side of each bread slice.",
      "Heat a skillet over medium heat. Lay bread slices in the hot skillet, butter-side down. Quickly layer Swiss cheese, 1 fried egg, Cheddar cheese, 1 fried egg, avocado, and remaining bread slice, butter-side up. Carefully flip sandwich to grill other side until golden brown, 3 to 4 minutes.",
      "Remove sandwich from skillet and cut in half.",
    ],
    image:
      "https://www.allrecipes.com/thmb/SlKU2ukgub_HDY_szjysfBEporg=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4520479-avocado-breakfast-sandwich-Buckwheat-Queen-1x1-1-0c41845d9017421a86e742a0d19302d2.jpg",
  },
  {
    name: "Sauteed Apples",
    ingredients: [
      "Butter",
      "Apple",
      "Cornstarch",
      "Sugar",
      "Cinnamon",
      "Water",
    ],
    instructions: [
      "Melt butter in a large skillet or saucepan over medium heat.",
      "Add apples and cook, stirring constantly, until almost tender, 6 to 7 minutes.",
      "Mix water and cornstarch together in a small bowl until cornstarch is dissolved; pour over apples. Stir in brown sugar and cinnamon. Bring to a boil for 2 minutes, stirring occasionally.",
      "Remove from heat and serve warm.",
    ],
    image:
      "https://www.allrecipes.com/thmb/in1T6hRKmorWzd4MUSOIwNv2iyg=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/21672-SauteedApples-ddmfs-Step5-0055-00e1950fab834d7a9d988794925e1bc5.jpg",
  },
  {
    name: "Macaroni and Cheese",
    ingredients: [
      "Macaroni",
      "Butter",
      "Flour",
      "Salt",
      "Pepper",
      "Milk",
      "Cheese",
    ],
    instructions: [
      "Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling water, stirring occasionally until cooked through but firm to the bite, 8 minutes.",
      "At the same time, melt butter in a saucepan over medium heat.",
      "Add flour, salt, and pepper and stir until smooth, about 5 minutes.",
      "Pour in milk slowly, while stirring continuously. Continue to cook and stir until mixture is smooth and bubbling, about 5 minutes, making sure the milk do not burn.",
      "Add Cheddar cheese and stir until melted, 2 to 4 minutes, drain macaroni and fold into cheese sauce until coated.",
    ],
    image:
      "https://www.allrecipes.com/thmb/DKNsWlYOQ3mrdX4v9ZA6_do7WI4=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/238691-Simple-Macaroni-And-Cheese-mfs_006-f7f521c65f894aef85e17bc9125c2c4a.jpg",
  },
  {
    name: "Chicken Schnitzel",
    ingredients: [
      "Olive Oil",
      "Chicken",
      "Salt",
      "Pepper",
      "Flour",
      "Paprika",
      "Eggs",
      "Bread Crumbs",
      "Lemon",
    ],
    instructions: [
      "Preheat the oven to 425 degrees F (220 degrees C). Line a large baking sheet with aluminum foil and drizzle olive oil over foil. Place the baking sheet in the oven as it preheats.",
      "Meanwhile, place chicken breasts between 2 sheets of plastic wrap on a solid, level surface. Firmly pound with the smooth side of a meat mallet to 1/4-inch thickness. Season both sides with salt and pepper.",
      "Mix flour and paprika together in a shallow bowl. Whisk eggs, salt, and pepper together in a second shallow bowl. Mix bread crumbs and lemon zest together in a third shallow bowl.",
      "Dredge one piece of chicken in flour; shake off excess. Dip into beaten egg. Lift up so excess egg drips back in the bowl. Press into bread crumbs to coat both sides. Place the breaded chicken, unstacked, onto a plate. Repeat with remaining chicken.",
      "Remove the baking sheet from the oven. Arrange chicken in a single layer on the hot sheet. Drizzle more olive oil over each piece.",
      "Bake in the preheated oven for 5 to 6 minutes. Flip chicken and continue baking until no longer pink in the center and the breading is lightly browned, 5 to 6 minutes more. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C).",
    ],
    image:
      "https://www.allrecipes.com/thmb/JvMd5LGBNltpQh1XNMxR4tQC518=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/244950-baked-chicken-schnitzle-kims-cooking-now-5349279-4x3-2257bfa79bd541dd8dbd692c2482b9fe.jpg",
  },
  {
    name: "Beef Stew",
    ingredients: [
      "Beef",
      "Flour",
      "Salt",
      "Pepper",
      "Carrots",
      "Potatoes",
      "Onion",
      "Celery",
      "Paprika",
      "Garlic",
    ],
    instructions: [
      "Place meat in slow cooker.",
      "Mix flour, salt, and pepper together in a small bowl. Pour over meat, and stir until meat is coated.",
      "Add beef broth, carrots, potatoes, onion, celery, Worcestershire sauce, paprika, garlic, and bay leave; stir to combine.",
      "Cover, and cook until beef is tender enough to cut with a spoon, on Low for 8 to 12 hours, or on High for 4 to 6 hours.",
    ],
    image:
      "https://www.allrecipes.com/thmb/z4LzUYTmJ33Som_KGb9QwqFnhOk=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/14685-slow-cooker-beef-stew-i-DDMFS-4x3-6f0208563f4c43d6a80fdb077c19fe4e.jpg",
  },
  {
    name: "Chicken Cordon Bleu",
    ingredients: ["Chicken", "Salt", "Pepper", "Cheese", "Ham", "Bread Crumbs"],
    instructions: [
      "Preheat oven to 350 degrees F (175 degrees C). Coat a 7x11-inch baking dish with nonstick cooking spray.",
      "Pound chicken breasts to 1/4 inch thickness.",
      "Sprinkle each piece of chicken on both sides with salt and pepper. Place 1 Swiss cheese slice and 1 ham slice on top of each breast.",
      "Roll up each breast and secure with toothpicks.",
      "Place in the prepared baking dish and sprinkle chicken evenly with bread crumbs.",
      "Bake in the preheated oven until chicken is no longer pink, 30 to 35 minutes.",
      "Remove from the oven, and place 1/2 Swiss cheese slice on top of each breast.",
      "Return to the oven until cheese has melted, 3 to 5 minutes. Remove toothpicks and serve immediately.",
    ],
    image:
      "https://www.allrecipes.com/thmb/16FdvKIPNc76UOMvMNPeDvYiFs0=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8495-chicken-cordon-bleu-i-DDMFS-4x3-7dc7fc3c6c37438badf35f188172bd09.jpg",
  },
  {
    name: "Homemade Dumplings",
    ingredients: [
      "Flour",
      "Baking Powder",
      "Sugar",
      "Salt",
      "Margarine",
      "Milk",
      "Pork",
    ],
    instructions: [
      "Stir together flour, baking powder, sugar, and salt in a bowl.",
      "Cut in butter until mixture is crumbly. Stir in milk and mix until a batter forms that is thick enough to be scooped with a spoon. Allow batter to rest for 3 to 5 minutes.",
      "Drop batter by spoonfuls into boiling stew or soup. Cover and simmer without lifting the lid for 15 minutes. Serve.",
    ],
    image:
      "https://www.allrecipes.com/thmb/7cXDFcp-1LQlRcoTDMYLxGq_2Zw=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/6900-dumplings-DDMFS-4x3-c03fe714205d4f24bd74b99768142864.jpg",
  },
  {
    name: "Zucchini Pomodori Gratinati",
    ingredients: [
      "Olive Oil",
      "Zucchini",
      "Garlic",
      "Cheese",
      "Tomatoes",
      "Basil",
      "Pepper",
    ],
    instructions: [
      "Preheat the oven to 375 degrees F (190 degrees C). Move the oven rack into the top third of the oven.",
      "Heat olive oil in a large skillet over medium heat, and spread zucchini slices into the skillet in a single layer. If they do not fit, cook them in batches. Sprinkle pieces of garlic over zucchini, and cook until zucchini are golden brown on both sides, about 8 minutes per side. Remove from heat.",
      "Arrange slices of zucchini in a 9x12-inch glass baking dish, alternating with slices of mozzarella cheese and tomato, so that the slices overlap each other in a neat row pattern. Sprinkle Parmesan cheese and basil over the dish, and season to taste with salt and pepper.",
      "Bake in the preheated oven until the cheese is melted and brown and the dish is bubbling, about 30 minutes.",
    ],
    image:
      "https://www.allrecipes.com/thmb/_1DCNBiGhjFE-AkyLs_JaVaDIGM=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/710301-b2d60b009d7a4c878132eb50efa05e78.jpg",
  },
  {
    name: "Beef Bulgogi",
    ingredients: [
      "Beef",
      "Soy Sauce",
      "Sugar",
      "Onion",
      "Garlic",
      "Sesame",
      "Pepper",
    ],
    instructions: [
      "Whisk soy sauce, green onion, sugar, garlic, sesame seeds, sesame oil, and pepper together in a bowl.",
      "Place flank steak slices in a shallow dish. Pour marinade over top. Cover and refrigerate for at least 1 hour or overnight.",
      "Preheat an outdoor grill for high heat, and lightly oil the grate.",
      "Quickly grill flank steak slices on the preheated grill until slightly charred and cooked through, 1 to 2 minutes per side.",
    ],
    image:
      "https://www.allrecipes.com/thmb/1y55VKiBf4f7mt9K8w7vCvE1fDE=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/100606-beef-bulgogi-DDMFS-4x3-b59a31e8b94f4c7091e333847bf0c406.jpg",
  },
  {
    name: "Grilled Pork Chops",
    ingredients: [
      "Pork",
      "Soy Sauce",
      "Oil",
      "Seasoning",
      "Garlic",
      "Lemon",
      "Pepper",
    ],
    instructions: [
      "Mix water, soy sauce, vegetable oil, lemon-pepper seasoning, and garlic in a deep bowl; add pork chops and toss to coat. Marinate in the refrigerator for at least 2 hours.",
      "Preheat an outdoor grill for medium-high heat and lightly oil the grate.",
      "Cook the pork chops on the preheated grill until no longer pink in the center, 5 to 6 minutes per side. An instant-read thermometer inserted into the center should read 145 degrees F (63 degrees C).",
    ],
    image:
      "https://www.allrecipes.com/thmb/imAiV0y3P0JZPvkMt1-voyvpuPI=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/223405-best-grilled-pork-chops-4x3-00058-04156fee5e9f492887625aa7058a59a8.jpg",
  },
  {
    name: "Homemade Sloppy Joes",
    ingredients: [
      "Beef",
      "Onion",
      "Pepper",
      "Garlic",
      "Tomatoes",
      "Sugar",
      "Mustard",
      "Salt",
    ],
    instructions: [
      "Place ground beef and onion in a large skillet over medium heat; cook and stir until beef is browned and crumbled, about 10 minutes.",
      "Stir in green pepper and garlic; cook and stir until softened, 2 to 3 minutes. Add 1 cup water and stir, scraping the pan to dissolve any brown flavor bits from the bottom of the skillet.",
      "Stir in ketchup, brown sugar, Dijon mustard, salt, black pepper, and Worcestershire sauce. Add remaining 1 cup water and bring mixture to a boil. Reduce heat to low and simmer, stirring occasionally, until liquid has evaporated and mixture is thick, about 40 minutes.",
      "Season with salt, black pepper, Worcestershire sauce, and cayenne pepper.",
    ],
    image:
      "https://www.allrecipes.com/thmb/HR6RbA5GgUJpO-L-ng-e1jynfqk=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8057179-homemade-sloppy-joes-Toni-DeSantis-1x1-1-fa2175e8d9db4c32b403df1ea77dc863.jpg",
  },
  {
    name: "Baked Potato Soup",
    ingredients: [
      "Potatoes",
      "Bacon",
      "Butter",
      "Flour",
      "Milk",
      "Onion",
      "Cheese",
      "Sour Cream",
      "Salt",
      "Pepper",
    ],
    instructions: [
      "Place bacon in a large skillet and cook over medium-high heat, turning occasionally, until evenly browned, about 8 to 10 minutes. Drain bacon slices on paper towels; crumble and set aside.",
      "Meanwhile, melt butter in a stockpot or Dutch oven over medium heat. Gradually add flour, whisking until well-combined. Slowly pour in milk, whisking constantly until smooth and thickened.",
      "Add potatoes and onions and bring to a boil, stirring frequently. Reduce heat and simmer for 10 minutes.",
      "Stir in crumbled bacon, Cheddar cheese, sour cream, salt, and pepper. Continue cooking and stirring until cheese is melted.",
    ],
    image:
      "https://www.allrecipes.com/thmb/fGamUhNhguQ-6LdWD2JSXjMvx_U=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/5867379-361fd5f1eb254d38b7913e0abfaee07a.jpg",
  },
  {
    name: "Mushroom Soup",
    ingredients: [
      "Butter",
      "Mushroom",
      "Salt",
      "Pepper",
      "Flour",
      "Thyme",
      "Garlic",
    ],
    instructions: [
      "Melt butter in a large soup pot over medium-high heat. Sauté mushrooms and 1 pinch salt in the melted butter until mushrooms release their juices, 5 to 10 minutes. Reduce heat to medium-low and continue to cook, stirring often, until juices evaporate and mushrooms are caramelized, 15 to 25 minutes. Set aside a few attractive mushroom slices for garnish later, if desired.",
      "Add onion to the mushrooms; cook until onion is soft and translucent, about 5 minutes.",
      "Stir flour into the mushroom mixture and cook, stirring often, to remove the raw flour taste, about 2 minutes.",
      "Add thyme bundle and garlic cloves, then pour in 4 cups chicken broth and 1 cup water. Reduce heat to low and simmer for 1 hour. Remove and discard thyme bundle.",
      "Purée soup with a blender in batches until smooth and thick.",
      "Stir in cream. If too thick, add a little chicken broth or water. Season with salt and black pepper.",
      "Ladle into bowls, and garnish with reserved mushroom slices and thyme leaves.",
    ],
    image:
      "https://www.allrecipes.com/thmb/qg9wuNi_22D7B9bsoFa64m_eeUM=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/235589-chef-johns-creamy-mushroom-soup-DDMFS-4x3-14854a8dc51c4c4c80cc5631299a873b.jpg",
  },
  {
    name: "Stuffed Bell Peppers",
    ingredients: [
      "Rice",
      "Bell Pepper",
      "Olive Oil",
      "Onion",
      "Cheese",
      "Tomatoes",
      "Salt",
      "Pepper",
    ],
    instructions: [
      "Combine water and rice in a small saucepan; bring to a boil. Reduce heat to low and simmer until rice is tender and liquid has been absorbed, about 15 minutes.",
      "Preheat the oven to 400 degrees F (205 degrees C).",
      "Cut tops off peppers and remove seeds. Arrange peppers in a large baking dish. Chop up usable portion of the tops.",
      "Heat olive oil in a large skillet over medium heat. Sauté chopped peppers and onion in hot oil until soft. Stir in textured vegetable protein and parsley. Reduce heat to low and continue cooking for 5 minutes. Mix in cooked rice and 1 1/4 cups tomato sauce. Season with salt and pepper. Spoon mixture into peppers; top each with remaining tomato sauce.",
      "Cover and bake in the preheated oven for about 45 minutes. Uncover, top each pepper with mozzarella cheese, and continue baking until cheese is melted, about 5 minutes more.",
    ],
    image:
      "https://www.allrecipes.com/thmb/l71S6KI7ThQOuEzvCN9koX6KJms=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2658148-stuffed-bell-peppers-Richie-1x1-1-cda92bf4235e454ebb38ed80bace4cef.jpg",
  },
  {
    name: "Fish in Foil",
    ingredients: ["Fish", "Olive Oil", "Salt", "Pepper", "Garlic", "Lemon"],
    instructions: [
      "Preheat the oven to 400 degrees F (200 degrees C).",
      "Rinse and pat fillets dry. Rub fillets with olive oil, and season with garlic salt and black pepper. Place each fillet on a large sheet of aluminum foil. Top with jalapeno slices, and squeeze the juice from the ends of the lemon over fillets. Arrange remaining lemon slices on top of fillets.",
      "Carefully seal all edges of the foil to form enclosed packets. Place packets on a baking sheet.",
      "Bake in the preheated oven until fish flakes easily with a fork, 15 to 20 minutes depending on size of fillets.",
    ],
    image:
      "https://www.allrecipes.com/thmb/i_hWm2xUnIgCnzD-uYfEK7iUH3E=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3569458-4af971b8125842f2adb5c1a8f3457599.jpg",
  },
  {
    name: "Pork Fried Rice",
    ingredients: [
      "Pork",
      "Butter",
      "Onion",
      "Carrots",
      "Broccoli",
      "Eggs",
      "Rice",
      "Peas",
      "Soy Sauce",
      "Garlic",
      "Ginger",
    ],
    instructions: [
      "Melt butter in a large non-stick skillet over medium heat. Add pork, green onion, carrot, and broccoli; cook and stir until pork is cooked through, 7 to 10 minutes. Transfer pork mixture to a bowl and return skillet to medium heat.",
      "Stir egg into the skillet and scramble until completely set. Add pork mixture back into the skillet; stir in rice, peas, soy sauce, garlic powder, and ground ginger. Cook and stir until heated through, 7 to 10 minutes.",
    ],
    image:
      "https://www.allrecipes.com/thmb/hAUrX2xDX8VApAS6L7n0ss8e3CE=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1353688-34e6ed5e0653413e85995033e316d1e6.jpg",
  },
  {
    name: "Maple Salmon",
    ingredients: ["Fish", "Salt", "Pepper", "Maple Syrup", "Soy Sauce"],
    instructions: [
      "Stir maple syrup, soy sauce, garlic, garlic salt, and pepper together in a small bowl.",
      "Cut salmon into 4 equal-sized fillets; place in a shallow glass baking dish and coat with maple syrup mixture. Cover the dish and marinate salmon in the refrigerator for 30 minutes, turning once halfway.",
      "Preheat the oven to 400 degrees F (200 degrees C).",
      "Place the baking dish in the preheated oven and bake salmon uncovered until flesh easily flakes with a fork, about 20 minutes.",
    ],
    image:
      "https://www.allrecipes.com/thmb/jzzdfMpDTC1pKwEl35qAbcDVWSQ=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/862371-cd7a4b6c481f444382e3f69273b982f9.jpg",
  },
  {
    name: "Chicken Fajita Pasta",
    ingredients: [
      "Pasta",
      "Oil",
      "Onion",
      "Bell Pepper",
      "Chicken",
      "Salsa",
      "Cheese",
      "Corn",
      "Black Beans",
    ],
    instructions: [
      "Fill a large pot with lightly salted water and bring to a rolling boil. Add ziti and return to a boil. Cook, stirring occasionally, until tender yet firm to the bite, about 10 minutes. Drain.",
      "Meanwhile, heat oil in a skillet over medium heat. Add onion and green pepper; cook and stir until soft, 5 to 7 minutes. Transfer to a bowl.",
      "Cook chicken in the same skillet until no longer pink in the center, 7 to 10 minutes",
      "Combine salsa, cream cheese, and taco seasoning in a saucepan over low heat; cook and stir until cream cheese is melted, about 5 minutes.",
      "Preheat the oven to 350 degrees F (175 degrees C).",
      "Combine ziti, chicken, salsa mixture, onion mixture, black beans, and corn in a large bowl. Add 1/2 of the Cheddar cheese and mix until combined. Pour into a baking pan.",
      "Bake in the preheated oven for 20 minutes. Sprinkle remaining Cheddar over top. Continue to bake until cheese is melted, about 10 minutes.",
    ],
    image:
      "https://www.allrecipes.com/thmb/QKw0_kgmZE9Wpj6Ptxtkfte8WRU=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/image-402-ade532d1f69148028f77a88068198741.jpg",
  },
  {
    name: "Sweet and Sour Pork",
    ingredients: [
      "Pork",
      "Soy Sauce",
      "Sugar",
      "Onion",
      "Oil",
      "Bell Pepper",
      "Salt",
      "Pineapple",
      "Cornstarch",
      "Celery",
    ],
    instructions: [
      "Place cubed pork in a medium bowl and season with soy sauce, salt, and sugar for marinade. Add egg white and green onions and mix until well-combined. Cover and place in the refrigerator for at least 1 hour.",
      "Heat 1 quart oil to 365 degrees F (185 degrees C) in a large, heavy saucepan or deep fryer.",
      "Coat pork with cornstarch and fry in hot oil until evenly browned, about 10 minutes. Drain on paper towels and set aside.",
      "Heat oil for vegetables in a wok over medium heat. Stir in celery, bell pepper, and onion; cook until tender, about 5 minutes. Season with pinch of sugar and salt. Remove from heat and set aside.",
      "Mix 1 cup water, 3/4 cup sugar, apple cider vinegar, ketchup, soy sauce, and salt in a large saucepan; bring to a boil over high heat.",
      "Stir in cooked pork, celery mixture, and pineapple chunks with juice. Return to a boil, then mix in remaining1/4 cup water and cornstarch. Cook until thickened and warmed through, about 2 minutes.",
    ],
    image:
      "https://www.allrecipes.com/thmb/9XiGkkBir55U0FiWSxUSyHyHrrI=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/265130-a9d8d4e359cb406dbdee5752cd9c9d71.jpg",
  },
  {
    name: "Sirloin Steak",
    ingredients: ["Butter", "Garlic", "Beef", "Salt", "Pepper"],
    instructions: [
      "Preheat an outdoor grill for high heat and lightly oil the grate.",
      "Melt butter in a small saucepan over medium-low heat; stir in minced garlic and garlic powder. Set aside.",
      "Season both sides of each steak with salt and pepper.",
      "Place steaks on preheated grill and cook 4 to 5 minutes per side. An instant-read thermometer inserted into the center should read 140 degrees F (60 degrees C) for medium doneness.",
      "Transfer steaks to warmed plates; brush the tops liberally with garlic butter and allow to rest for 2 to 3 minutes before serving.",
    ],
    image:
      "https://www.allrecipes.com/thmb/u-2P_GXUU_wBN8WlaQMZgxceNlc=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1023331-sirloin-steak-with-garlic-butter-Cindy-Capps-Lepp-1x1-1-163c35fb36274d4d8c2456e829f3801a.jpg",
  },
  {
    name: "Chocolate Mug Cake",
    ingredients: [
      "Flour",
      "Sugar",
      "Cocoa",
      "Baking Soda",
      "Salt",
      "Milk",
      "Vanilla",
    ],
    instructions: [
      "Mix flour, sugar, cocoa powder, baking soda, and salt together in a large microwave-safe mug; stir in milk, canola oil, water, and vanilla extract.",
      "Cook in the microwave until cake is done in the middle, about 1 minute 45 seconds.",
    ],
    image:
      "https://www.allrecipes.com/thmb/5-TINiCxxJ6D321iAXF0Wt-cF1o=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Microwave-Chocolate-Mug-Cake-2f3f3a7656994f178da4abe666386d88.jpg",
  },
  {
    name: "Chocolate Strawberries",
    ingredients: ["Milk", "Chocolate", "Strawberry"],
    instructions: [
      "Melt chocolate and shortening in a double boiler, stirring occasionally until smooth.",
      "Insert toothpicks into tops (stem ends) of strawberries. Hold a strawberry by the toothpick and dip it into the chocolate mixture.",
      "Turn the strawberry upside down and insert the toothpick into a Styrofoam block or place strawberry on a sheet of waxed paper; allow chocolate coating to cool. Repeat with remaining strawberries.",
    ],
    image:
      "https://www.allrecipes.com/thmb/totDMo-fkgUj1t_Yu-5jAiLifWo=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/845742-chocolate-covered-strawberries-Cathy-Van-de-Moortele-1x1-1-582050714d4045a1b10e2fea756afa95.jpg",
  },
  {
    name: "Peanut Butter Cookies",
    ingredients: ["Eggs", "Sugar", "Peanut Butter"],
    instructions: [
      "Preheat the oven to 350 degrees F (175 degrees C).",
      "Mix peanut butter, sugar, and egg together in a bowl using an electric mixer until smooth and creamy.",
      "Roll mixture into 1-inch balls and place 1 inch apart on an ungreased baking sheet",
      "Flatten each with a fork, making a criss-cross pattern.",
      "Bake in the preheated oven until edges are firm, about 10 minutes. Cool on the baking sheet briefly before removing to a wire rack to cool completely.",
    ],
    image:
      "https://www.allrecipes.com/thmb/SzePOtkjoR2Js776roEf38A0S2I=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/244614-3-ingredient-peanut-butter-cookies-DDMFS-4x3-3df34040153d43bc9c8e566fb311a88e.jpg",
  },
  {
    name: "Grape Salad",
    ingredients: [
      "Grape",
      "Cheese",
      "Sour Cream",
      "Sugar",
      "Vanilla",
      "Pecans",
      "",
    ],
    instructions: [
      "Wash and dry grapes.",
      "Mix together cream cheese, sour cream, sugar, and vanilla in a large bowl. Add grapes and mix until evenly incorporated.",
      "Sprinkle with brown sugar and pecans, mix again and refrigerate until serving.",
    ],
    image:
      "https://www.allrecipes.com/thmb/CIZ2LyOOoZabh3_5YHjb_8fx3eM=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1117029-green-grape-salad-HolidayBaker-4x3-8f55da185b934abe8a1040428d3f5e2f.jpg",
  },
  {
    name: "Bananas Foster",
    ingredients: [
      "Butter",
      "Sugar",
      "Banana",
      "Walnut",
      "Vanilla",
      "Cinnamon",
      "Ice Cream",
    ],
    instructions: [
      "Melt the butter in a skillet. Stir in the sugar, rum, vanilla, and cinnamon.",
      "Add the bananas and walnuts, then cook until the bananas are soft.",
      "Serve over ice cream.",
    ],
    image:
      "https://www.allrecipes.com/thmb/a-K3CG66iwIwpKu97o0ghVVqySY=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1099911-075863dd3fa3418bb6d7fb5ed92cc9e3.jpg",
  },
  {
    name: "Orange Loaf",
    ingredients: [
      "Orange",
      "Sugar",
      "Eggs",
      "Flour",
      "Baking Powder",
      "Salt",
      "Nuts",
    ],
    instructions: [
      "Stir together flour, baking powder, salt, and nuts.",
      "In a large bowl, beat together butter or margarine and 1 cup sugar. Beat in eggs one at a time. Stir in rind and 1/2 cup juice. Pour in flour mixture, and stir until moistened. Turn into a greased 9 x 5 x 3 inch loaf pan.",
      "Bake at 350 degrees F (175 degrees C) for 1 hour, or until done. Remove loaf from oven, but not from pan.",
      "Combine 1/2 cup orange juice with 1/4 cup sugar in a small saucepan. Heat and stir to dissolve sugar. Spoon glaze over hot loaf. Let stand in pan for 10 minutes before removing loaf to rack to cool.",
    ],
    image:
      "https://www.allrecipes.com/thmb/iwcJ8Xa-Oa-_nxc9vxqX1GZZ3u4=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/513618-orange-loaf-abapplez-4x3-1-f992353631694b5abe7ce90f3024931a.jpg",
  },
  {
    name: "Key Lime Pie",
    ingredients: ["Milk", "Lime", "Sour Cream", "Cracker"],
    instructions: [
      "Preheat the oven to 350 degrees F (175 degrees C).",
      "Combine condensed milk, key lime juice, sour cream, and lime zest in a bowl; mix well. Pour into graham cracker crust; place pie on a baking sheet.",
      "Bake in the preheated oven for 5 to 8 minutes, until tiny pinhole bubbles burst on the surface of the pie. The filling will be wobbly but not browned.",
      "Transfer pie to a wire rack to cool, then thoroughly chill pie in the refrigerator before serving, about 1 hour. Garnish with lime slices and whipped cream, if desired.",
    ],
    image:
      "https://www.allrecipes.com/thmb/G09fLfCGdmshMVqjtqyWkHQQtAw=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4543755-key-lime-pie-Starrett72-1x1-1-1f0bd165082d4fb4ad7faa64c99952c8.jpg",
  },
  {
    name: "Apple Crisp",
    ingredients: ["Apple", "Sugar", "Butter", "Flour", "Cinnamon", "Oats"],
    instructions: [
      "Preheat the oven to 350 degrees F (175 degrees C).",
      "Place sliced apples in a 9x13-inch baking dish. Mix white sugar, 1 tablespoon flour, and cinnamon together; sprinkle over apples. Pour water evenly over apples.",
      "Combine oats, 1 cup flour, brown sugar, baking powder, and baking soda in a large bowl. Add melted butter and mix with a fork until crumbly; sprinkle evenly over apple mixture.",
      "Bake in the preheated oven until top is golden brown and apples are bubbling around the edges, about 45 minutes.",
    ],
    image:
      "https://www.allrecipes.com/thmb/248_ymWk8u8yD3iZAMiMx-b-zME=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/12409-apple-crisp-ii-DDMFS-4x3-e3779caa2b454cbba0d493cb16f9479d.jpg",
  },
  {
    name: "Blueberry Pie",
    ingredients: [
      "Blueberries",
      "Sugar",
      "Cinnamon",
      "Butter",
      "Salt",
      "Pie Crust",
      "Cornstarch",
    ],
    instructions: [
      "Set an oven rack to the lowest position and preheat the oven to 375 degrees F (190 degrees C).",
      "Mix sugar, cornstarch, cinnamon, and salt together in a bowl; sprinkle over blueberries.",
      "Line a pie dish with one pie crust. Pour berry mixture into the crust and dot with butter. Cut remaining pastry into 1/2- to 3/4-inch-wide strips. Use the strips to weave a lattice top. Crimp and flute the edges.",
      "Bake pie on the lowest oven rack until filling is bubbling and crust is golden brown, about 50 minutes.",
    ],
    image:
      "https://www.allrecipes.com/thmb/TCga1ICrorrA9-j3Mmltmoq32PU=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/202488-blueberry-pie-photo-by-justamom-8571e98396a4457b907a7a94e768189a.jpg",
  },
  {
    name: "Lemon Meringue Pie",
    ingredients: [
      "Sugar",
      "Flour",
      "Cornstarch",
      "Salt",
      "Lemon",
      "Butter",
      "Eggs",
      "Pie Crust",
    ],
    instructions: [
      "Preheat the oven to  325 degrees F (162 degrees C).",
      "To make the filling: Whisk 1 cup sugar, flour, cornstarch, and salt together in a medium saucepan; stir in water, lemon juice, and lemon zest. Cook over medium-high heat, stirring frequently, until mixture comes to a boil. Stir in butter.",
      "Place egg yolks in a small bowl and gradually whisk in 1/2 cup of hot sugar mixture. Whisk egg yolk mixture back into remaining sugar mixture. Bring to a boil and continue to cook while stirring constantly until thick. Remove from heat; pour filling into baked pastry shell.",
      "To make the meringue: Beat egg whites in a glass, metal, or ceramic bowl until foamy. Gradually add sugar, continuing to beat until stiff peaks form. Spread meringue over pie filling, sealing the edges at the crust.",
      "Bake in preheated oven until meringue is golden brown, about 20 to 25 minutes.",
    ],
    image:
      "https://www.allrecipes.com/thmb/ObCmV031d1SQs6P7SXX1GUDUgaE=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/image-3fd12a261c844584aa30f4cdba467a1b.jpg",
  },
  {
    name: "Strawberry Shortcake",
    ingredients: [
      "Strawberries",
      "Sugar",
      "Flour",
      "Baking Powder",
      "Salt",
      "Salt",
      "Eggs",
      "Milk",
      "Shortening",
    ],
    instructions: [
      "Slice the strawberries and toss them with 1/2 cup of white sugar. Set aside.",
      "Preheat oven to 425 degrees F (220 degrees C). Grease and flour one 8-inch round cake pan.",
      "In a medium bowl combine the flour, baking powder, 2 tablespoons white sugar and the salt. With a pastry blender cut in the shortening until the mixture resembles coarse crumbs. Make a well in the center and add the beaten egg and milk.",
      "Stir mixture until just combined and spread the batter into the prepared pan.",
      "Bake at 425 degrees F (220 degrees C) for 15 to 20 minutes or until golden brown. Let cool partially in pan on wire rack.",
      "Slice partially cooled cake in half, making two layers.",
      "Place half of the strawberries on one layer and top with the other layer. Top with remaining strawberries and cover with the whipped cream.",
    ],
    image:
      "https://www.allrecipes.com/thmb/7ZF6_Uor7V8mDsdoM5f0ntt9dnU=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8201-strawberry-shortcake-DDMFS-4x3-2e35f9f0174d456b85679a0f636b1b2a.jpg",
  },
  {
    name: "Banana Bread",
    ingredients: ["Banana", "Flour", "Baking Soda", "Sugar", "Salt", "Eggs"],
    instructions: [
      "Preheat the oven to 350 degrees F (175 degrees C). Lightly grease a 9x5-inch loaf pan.",
      "Combine flour, baking soda, and salt in a large bowl. Beat brown sugar and butter with an electric mixer in a separate large bowl until smooth. Stir in eggs and mashed bananas until well blended. Stir banana mixture into flour mixture until just combined. Pour batter into the prepared loaf pan.",
      "Bake in the preheated oven until a toothpick inserted into the center comes out clean, about 60 minutes. Let bread cool in pan for 10 minutes, then turn out onto a wire rack to cool completely.",
    ],
    image:
      "https://www.allrecipes.com/thmb/_3LaApK7w-ZkVUWI3VoW4thN1NE=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20144-banana-banana-bread-mfs-60-bddcb8e0caac452386de52f6fecf33db.jpg",
  },
  {
    name: "Carrot Cake",
    ingredients: [
      "Sugar",
      "Oil",
      "Eggs",
      "Vanilla",
      "Flour",
      "Cinnamon",
      "Salt",
      "Carrot",
      "Nuts",
      "Butter",
      "Cheese",
    ],
    instructions: [
      "Preheat the oven to 350 degrees F (175 degrees C). Grease and flour a 9x13 inch pan.",
      "Beat sugar, oil, eggs, and 2 teaspoons vanilla together in a large bowl with an electric mixer until well combined. Mix in flour, baking soda, baking powder, cinnamon, and salt. Stir in carrots. Fold in pecans. Pour into the prepared pan.",
      "Bake in the preheated oven until a toothpick inserted into the center of the cake comes out clean, about 40 minutes. Let cool in the pan for 10 minutes, then turn out onto a wire rack and cool completely.",
      "To make the frosting: Beat butter, cream cheese, confectioners sugar, and 1 teaspoon vanilla together in a large bowl with an electric mixer until smooth and creamy. Stir in chopped pecans. Frost the cooled cake.",
    ],
    image:
      "https://www.allrecipes.com/thmb/C9dnlnnJvIfC8TgLc9lP3X8meSs=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7402-carrot-cake-iii-sarah-dipity-1x1-1-2e7c90d8c07c47039b4906ec01911015.jpg",
  },
  {
    name: "Triple Threat Smoothie",
    ingredients: [
      "Kiwi",
      "Banana",
      "Strawberries",
      "Blueberries",
      "Orange",
      "Yoghurt",
      "Ice",
    ],
    instructions: [
      "In a blender, blend the kiwi, banana, blueberries, strawberries, ice, orange juice, and yogurt until smooth.",
    ],
    image:
      "https://www.allrecipes.com/thmb/zRDGfELAGKoG1dzxxsYfttoaeWA=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1188437-4c9952986da3426496bd81c2bd4be7be.jpg",
  },
  {
    name: "Classic Cheesecake",
    ingredients: ["Cracker", "Butter", "Sugar", "Cheese", "Vanilla", "Eggs"],
    instructions: [
      "Preheat the oven to 325 degrees F (165 degrees C).",
      "Mix crumbs, butter, and 3 tablespoons sugar until combined; press firmly onto the bottom of a 9-inch springform pan.",
      "Beat cream cheese, 1 cup sugar, and vanilla in a mixing bowl until smooth. Add eggs, one at a time, mixing on low speed until just blended. Pour over crust.",
      "Bake in the preheated oven until center is almost set, about 55 minutes. Loosen cake from the pan rim; cool before removing rim.",
      "Refrigerate for 4 hours before serving.",
    ],
    image:
      "https://www.allrecipes.com/thmb/VXyS_O4zoxjR1qBq79IJNgo6DXs=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/964143-c7b99aae268242e59e87bcd43d1c5427.jpg",
  },
  // add more recipes here...
];

export { recipes };
