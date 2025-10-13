document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const navLinks = document.querySelector(".nav-links");

    mobileMenuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        mobileMenuBtn.classList.toggle("active");
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });

            // Close mobile menu after clicking a link
            if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
                mobileMenuBtn.classList.remove("active");
            }
        });
    });

    // Sticky header
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) { // Adjust scroll threshold as needed
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    });

    // Product data (example data, you'll expand this)
    const productsData = [
        // Sneakers
        { id: 1, name: "Nike Air Force 1", category: "Sneakers", price: "R1,899", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", description: "Classic white sneakers, perfect for everyday wear." },
        { id: 2, name: "Adidas Ultraboost", category: "Sneakers", price: "R2,500", image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500", description: "Comfortable running shoes with responsive cushioning." },
        { id: 3, name: "Puma Suede Classic", category: "Sneakers", price: "R1,200", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d2a?w=500", description: "Timeless suede design, great for casual outfits." },
        { id: 4, name: "Converse Chuck Taylor", category: "Sneakers", price: "R900", image: "https://images.unsplash.com/photo-1549298916-b41f759b2342?w=500", description: "Iconic high-top canvas sneakers." },
        { id: 5, name: "Vans Old Skool", category: "Sneakers", price: "R1,100", image: "https://images.unsplash.com/photo-1606107557195-cbce087d67e2?w=500", description: "Skateboarding classic with side stripe design." },
        { id: 6, name: "New Balance 574", category: "Sneakers", price: "R1,600", image: "https://images.unsplash.com/photo-1579338549149-646889c7d4b4?w=500", description: "Retro-inspired sneakers with modern comfort." },
        { id: 7, name: "Reebok Club C 85", category: "Sneakers", price: "R1,300", image: "https://images.unsplash.com/photo-1628429437860-df645672158c?w=500", description: "Clean and minimalist tennis-inspired design." },
        { id: 8, name: "Asics Gel-Kayano", category: "Sneakers", price: "R2,200", image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500", description: "Advanced running shoe with superior stability." },
        { id: 9, name: "Under Armour HOVR", category: "Sneakers", price: "R1,900", image: "https://images.unsplash.com/photo-1552066315-eb736c25760e?w=500", description: "Energy-returning cushioning for a smooth ride." },
        { id: 10, name: "Fila Disruptor", category: "Sneakers", price: "R1,000", image: "https://images.unsplash.com/photo-1588286047269-f8382767128a?w=500", description: "Chunky retro design, a true statement piece." },
        { id: 11, name: "Jordan 1 Mid", category: "Sneakers", price: "R3,000", image: "https://images.unsplash.com/photo-1607954736170-e22137910e9e?w=500", description: "Iconic basketball shoe with a mid-top silhouette." },
        { id: 12, name: "Balenciaga Triple S", category: "Sneakers", price: "R10,000", image: "https://images.unsplash.com/photo-1603808033190-671c3e1b3f3b?w=500", description: "Luxury chunky sneaker with a distinctive sole." },
        { id: 13, name: "Alexander McQueen Oversized", category: "Sneakers", price: "R8,500", image: "https://images.unsplash.com/photo-1617610078739-e218b0f7e4e0?w=500", description: "Fashion-forward sneakers with an exaggerated sole." },
        { id: 14, name: "Common Projects Achilles", category: "Sneakers", price: "R6,000", image: "https://images.unsplash.com/photo-1617043786394-c71b8e1f2f2f?w=500", description: "Minimalist leather sneakers, handcrafted in Italy." },
        { id: 15, name: "Golden Goose Super-Star", category: "Sneakers", price: "R7,000", image: "https://images.unsplash.com/photo-1617043786394-c71b8e1f2f2f?w=500", description: "Distressed leather sneakers with a vintage feel." },

        // Fashion
        { id: 16, name: "Men's Slim Fit Jeans", category: "Fashion", price: "R700", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500", description: "Comfortable and stylish slim fit jeans for men." },
        { id: 17, name: "Women's Floral Dress", category: "Fashion", price: "R950", image: "https://images.unsplash.com/photo-1581044777550-4cfa607037dc?w=500", description: "Elegant floral dress, perfect for summer." },
        { id: 18, name: "Unisex Hoodie", category: "Fashion", price: "R600", image: "https://images.unsplash.com/photo-1620799140408-edc6dcd435ce?w=500", description: "Soft and warm hoodie for all seasons." },
        { id: 19, name: "Leather Jacket", category: "Fashion", price: "R2,500", image: "https://images.unsplash.com/photo-1591047139829-d91aec6ca88d?w=500", description: "Premium leather jacket, a timeless wardrobe staple." },
        { id: 20, name: "Summer T-Shirt Pack", category: "Fashion", price: "R400", image: "https://images.unsplash.com/photo-1576566588028-cdfd787ec7bf?w=500", description: "Pack of 3 breathable cotton t-shirts." },
        { id: 21, name: "Women's High-Waist Skirt", category: "Fashion", price: "R550", image: "https://images.unsplash.com/photo-1598554449885-36873995133e?w=500", description: "Stylish high-waist skirt, versatile for any occasion." },
        { id: 22, name: "Men's Formal Shirt", category: "Fashion", price: "R800", image: "https://images.unsplash.com/photo-1596755094415-cf70034d7a12?w=500", description: "Crisp white formal shirt, ideal for business." },
        { id: 23, name: "Casual Denim Jacket", category: "Fashion", price: "R1,200", image: "https://images.unsplash.com/photo-1586363040745-9d3b7b2b2b2b?w=500", description: "Classic denim jacket for a relaxed look." },
        { id: 24, name: "Knitted Sweater", category: "Fashion", price: "R750", image: "https://images.unsplash.com/photo-1593032463991-8f3b3b2b2b2b?w=500", description: "Warm and cozy knitted sweater for winter." },
        { id: 25, name: "Sportswear Leggings", category: "Fashion", price: "R450", image: "https://images.unsplash.com/photo-1593032463991-8f3b3b2b2b2b?w=500", description: "Flexible and comfortable leggings for workouts." },
        { id: 26, name: "Elegant Evening Gown", category: "Fashion", price: "R3,000", image: "https://images.unsplash.com/photo-1593032463991-8f3b3b2b2b2b?w=500", description: "Stunning gown for special occasions." },
        { id: 27, name: "Men's Chinos", category: "Fashion", price: "R650", image: "https://images.unsplash.com/photo-1593032463991-8f3b3b2b2b2b?w=500", description: "Versatile chinos for smart-casual wear." },
        { id: 28, name: "Women's Blouse", category: "Fashion", price: "R500", image: "https://images.unsplash.com/photo-1593032463991-8f3b3b2b2b2b?w=500", description: "Light and airy blouse for a chic look." },
        { id: 29, name: "Kids' Cartoon T-Shirt", category: "Fashion", price: "R250", image: "https://images.unsplash.com/photo-1593032463991-8f3b3b2b2b2b?w=500", description: "Fun and colorful t-shirt for children." },
        { id: 30, name: "Winter Scarf", category: "Fashion", price: "R300", image: "https://images.unsplash.com/photo-1593032463991-8f3b3b2b2b2b?w=500", description: "Warm and soft scarf for cold weather." },

        // Weaves
        { id: 31, name: "Brazilian Body Wave", category: "Weaves", price: "R1,500", image: "images/weaves.png", description: "Luxurious body wave texture, 100% human hair." },
        { id: 32, name: "Peruvian Straight", category: "Weaves", price: "R1,400", image: "images/weaves.png", description: "Silky straight Peruvian hair, tangle-free." },
        { id: 33, name: "Malaysian Curly", category: "Weaves", price: "R1,600", image: "images/weaves.png", description: "Bouncy and defined Malaysian curly hair." },
        { id: 34, name: "Indian Deep Wave", category: "Weaves", price: "R1,700", image: "images/weaves.png", description: "Voluminous deep wave Indian hair." },
        { id: 35, name: "Virgin Hair Bundles", category: "Weaves", price: "R2,000", image: "images/weaves.png", description: "Unprocessed virgin hair, can be dyed and styled." },
        { id: 36, name: "Lace Frontal", category: "Weaves", price: "R800", image: "images/weaves.png", description: "Natural-looking lace frontal for a seamless finish." },
        { id: 37, name: "Closure Piece", category: "Weaves", price: "R600", image: "images/weaves.png", description: "Perfect closure for a protective style." },
        { id: 38, name: "Clip-in Extensions", category: "Weaves", price: "R1,200", image: "images/weaves.png", description: "Easy to install clip-in hair extensions." },
        { id: 39, name: "Ponytail Extension", category: "Weaves", price: "R500", image: "images/weaves.png", description: "Instant volume and length with a ponytail extension." },
        { id: 40, name: "Human Hair Wig", category: "Weaves", price: "R3,500", image: "images/weaves.png", description: "Full human hair wig, versatile styling options." },
        { id: 41, name: "Synthetic Wig", category: "Weaves", price: "R900", image: "images/weaves.png", description: "Affordable synthetic wig, various styles available." },
        { id: 42, name: "Hair Care Kit", category: "Weaves", price: "R400", image: "images/weaves.png", description: "Essential products for maintaining your weaves." },
        { id: 43, name: "Bundles with Closure Deal", category: "Weaves", price: "R2,200", image: "images/weaves.png", description: "Special offer: 3 bundles and a matching closure." },
        { id: 44, name: "Ombre Hair Weave", category: "Weaves", price: "R1,800", image: "images/weaves.png", description: "Stylish ombre colored hair weave." },
        { id: 45, name: "Water Wave Bundles", category: "Weaves", price: "R1,600", image: "images/weaves.png", description: "Beautiful water wave texture, natural look." },

        // Laptops
        { id: 46, name: "Dell XPS 15", category: "Laptops", price: "R25,000", image: "https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?w=500", description: "Powerful laptop for creative professionals." },
        { id: 47, name: "HP Spectre x360", category: "Laptops", price: "R22,000", image: "https://images.unsplash.com/photo-1588872657578-7efd1f155d51?w=500", description: "Versatile 2-in-1 laptop with premium design." },
        { id: 48, name: "Lenovo ThinkPad X1 Carbon", category: "Laptops", price: "R20,000", image: "https://images.unsplash.com/photo-1561070791-2526d70389e7?w=500", description: "Business-class laptop with exceptional durability." },
        { id: 49, name: "Apple MacBook Air M2", category: "Laptops", price: "R28,000", image: "https://images.unsplash.com/photo-1610945415295-2d321003e564?w=500", description: "Ultra-portable laptop with M2 chip for amazing performance." },
        { id: 50, name: "Asus ROG Zephyrus G14", category: "Laptops", price: "R30,000", image: "https://images.unsplash.com/photo-1616161616161-161616161616?w=500", description: "Compact gaming laptop with powerful hardware." },
        { id: 51, name: "Microsoft Surface Laptop 5", category: "Laptops", price: "R18,000", image: "https://images.unsplash.com/photo-1611078489935-0ae298d14f3b?w=500", description: "Sleek and lightweight laptop with touchscreen." },
        { id: 52, name: "Acer Swift 3", category: "Laptops", price: "R12,000", image: "https://images.unsplash.com/photo-1593642532781-03e5bafa2908?w=500", description: "Affordable and capable laptop for everyday tasks." },
        { id: 53, name: "MSI GE76 Raider", category: "Laptops", price: "R35,000", image: "https://images.unsplash.com/photo-1618424181497-157f25b6ddd3?w=500", description: "High-performance gaming laptop with large display." },
        { id: 54, name: "Razer Blade 14", category: "Laptops", price: "R32,000", image: "https://images.unsplash.com/photo-1618424181497-157f25b6ddd3?w=500", description: "Premium gaming laptop with sleek design." },
        { id: 55, name: "Google Pixelbook Go", category: "Laptops", price: "R10,000", image: "https://images.unsplash.com/photo-1580528162442-9f9b2b2b2b2b?w=500", description: "Lightweight Chromebook for cloud-based work." },
        { id: 56, name: "Samsung Galaxy Book 3 Pro", category: "Laptops", price: "R23,000", image: "https://images.unsplash.com/photo-1611078489935-0ae298d14f3b?w=500", description: "Thin and powerful laptop with AMOLED display." },
        { id: 57, name: "Huawei MateBook X Pro", category: "Laptops", price: "R20,000", image: "https://images.unsplash.com/photo-1611078489935-0ae298d14f3b?w=500", description: "Elegant laptop with a stunning FullView display." },
        { id: 58, name: "LG Gram 17", category: "Laptops", price: "R19,000", image: "https://images.unsplash.com/photo-1611078489935-0ae298d14f3b?w=500", description: "Feather-light 17-inch laptop with long battery life." },
        { id: 59, name: "Alienware m18", category: "Laptops", price: "R40,000", image: "https://images.unsplash.com/photo-1618424181497-157f25b6ddd3?w=500", description: "Ultimate gaming laptop with top-tier performance." },
        { id: 60, name: "Chromebook Duet", category: "Laptops", price: "R7,000", image: "https://images.unsplash.com/photo-1580528162442-9f9b2b2b2b2b?w=500", description: "Detachable 2-in-1 Chromebook, great for portability." },

        // iPhones
        { id: 61, name: "iPhone 15 Pro Max", category: "iPhones", price: "R30,000", image: "https://images.unsplash.com/photo-1695813769121-72449033325e?w=500", description: "Latest iPhone with A17 Bionic chip and Pro camera system." },
        { id: 62, name: "iPhone 15 Pro", category: "iPhones", price: "R27,000", image: "https://images.unsplash.com/photo-1695813769121-72449033325e?w=500", description: "Powerful iPhone 15 Pro with advanced features." },
        { id: 63, name: "iPhone 15", category: "iPhones", price: "R22,000", image: "https://images.unsplash.com/photo-1695813769121-72449033325e?w=500", description: "The new iPhone 15, great performance and camera." },
        { id: 64, name: "iPhone 14 Pro Max", category: "iPhones", price: "R25,000", image: "https://images.unsplash.com/photo-1664478052990-84511a371f7e?w=500", description: "Previous generation Pro Max, still incredibly capable." },
        { id: 65, name: "iPhone 14", category: "iPhones", price: "R19,000", image: "https://images.unsplash.com/photo-1664478052990-84511a371f7e?w=500", description: "Reliable iPhone 14 with excellent battery life." },
        { id: 66, name: "iPhone SE (3rd Gen)", category: "iPhones", price: "R10,000", image: "https://images.unsplash.com/photo-1646351579296-d0169121417b?w=500", description: "Affordable iPhone with A15 Bionic chip." },
        { id: 67, name: "iPhone 13 Pro Max", category: "iPhones", price: "R22,000", image: "https://images.unsplash.com/photo-1634816677838-b71501962391?w=500", description: "High-end iPhone 13 Pro Max with ProMotion display." },
        { id: 68, name: "iPhone 13", category: "iPhones", price: "R17,000", image: "https://images.unsplash.com/photo-1634816677838-b71501962391?w=500", description: "Standard iPhone 13, great value." },
        { id: 69, name: "iPhone 12 Pro Max", category: "iPhones", price: "R18,000", image: "https://images.unsplash.com/photo-1607958599102-f4707418477e?w=500", description: "Still a powerful iPhone with a large screen." },
        { id: 70, name: "iPhone 12", category: "iPhones", price: "R14,000", image: "https://images.unsplash.com/photo-1607958599102-f4707418477e?w=500", description: "Popular iPhone 12, good balance of features and price." },
        { id: 71, name: "iPhone 11", category: "iPhones", price: "R10,000", image: "https://images.unsplash.com/photo-1607958599102-f4707418477e?w=500", description: "Still a great phone for the price." },
    ];

    const productsGrid = document.getElementById("products-grid");
    const categoryButtons = document.querySelectorAll(".category-btn");

    function renderProducts(products) {
        productsGrid.innerHTML = ""; // Clear existing products
        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.className = "product-card";
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">${product.price}</p>
                    <button class="btn btn-primary add-to-cart-btn">Add to Cart</button>
                </div>
            `;
            productsGrid.appendChild(productCard);
        });
    }

    function filterProducts(category) {
        const filteredProducts = (category === "All Products")
            ? productsData
            : productsData.filter(p => p.category === category);
        renderProducts(filteredProducts);
    }

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            document.querySelector(".category-btn.active").classList.remove("active");
            button.classList.add("active");
            filterProducts(button.dataset.category);
        });
    });

    // Initial render to fix the missing products issue
    if (productsData && productsData.length > 0) {
        filterProducts("All Products");
    }

    // Product Modal (for future implementation)
    const productModal = document.createElement("div");
    productModal.className = "product-modal";
    productModal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <img id="modal-product-image" src="" alt="" class="modal-image">
            <h2 id="modal-product-name"></h2>
            <p id="modal-product-price" class="modal-price"></p>
            <p id="modal-product-description" class="modal-description"></p>
            <button class="btn btn-primary add-to-cart-modal">Add to Cart</button>
        </div>
    `;
    document.body.appendChild(productModal);

    const modalCloseButton = productModal.querySelector(".close-button");
    const modalImage = document.getElementById("modal-product-image");
    const modalName = document.getElementById("modal-product-name");
    const modalPrice = document.getElementById("modal-product-price");
    const modalDescription = document.getElementById("modal-product-description");
    const modalAddToCartBtn = productModal.querySelector(".add-to-cart-modal");

    function showProductModal(product) {
        modalImage.src = product.image;
        modalName.textContent = product.name;
        modalPrice.textContent = product.price;
        modalDescription.textContent = product.description;
        modalAddToCartBtn.onclick = () => {
            // Add to cart logic here
            alert(`${product.name} added to cart!`);
            productModal.style.display = "none";
        };
        productModal.style.display = "flex";
    }

    modalCloseButton.addEventListener("click", () => {
        productModal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === productModal) {
            productModal.style.display = "none";
        }
    });

    // Contact Form Submission (example)
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you for your message! We will get back to you soon.");
            contactForm.reset();
        });
    }
});ory: "iPhones", price: "R10,000", image: "https://images.unsplash.com/photo-1580528162442-9f9b2b2b2b2b?w=500", description: "Reliable and affordable iPhone 11." },
        { id: 72, name: "iPhone XR", category: "iPhones", price: "R7,000", image: "https://images.unsplash.com/photo-1580528162442-9f9b2b2b2b2b?w=500", description: "Budget-friendly iPhone XR with a great display." },
        { id: 73, name: "iPhone XS Max", category: "iPhones", price: "R8,000", image: "https://images.unsplash.com/photo-1580528162442-9f9b2b2b2b2b?w=500", description: "Older flagship with OLED display." },
        { id: 74, name: "iPhone 8 Plus", category: "iPhones", price: "R5,000", image: "https://images.unsplash.com/photo-1580528162442-9f9b2b2b2b2b?w=500", description: "Classic iPhone with Touch ID and good camera." },
        { id: 75, name: "iPhone 7", category: "iPhones", price: "R3,500", image: "https://images.unsplash.com/photo-1580528162442-9f9b2b2b2b2b?w=500", description: "Compact and still functional iPhone 7." },

        // Accessories
        { id: 76, name: "Wireless Earbuds", category: "Accessories", price: "R800", image: "https://images.unsplash.com/photo-1546435770-d3e499d6b7e2?w=500", description: "High-quality wireless earbuds with noise cancellation." },
        { id: 77, name: "Smartwatch", category: "Accessories", price: "R1,500", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", description: "Feature-rich smartwatch for fitness and notifications." },
        { id: 78, name: "Portable Power Bank", category: "Accessories", price: "R400", image: "https://images.unsplash.com/photo-1585292107746-b8f6b7e2e2e2?w=500", description: "Fast charging power bank for on-the-go." },
        { id: 79, name: "Laptop Backpack", category: "Accessories", price: "R700", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500", description: "Durable and stylish backpack for laptops and essentials." },
        { id: 80, name: "Gaming Mouse", category: "Accessories", price: "R600", image: "https://images.unsplash.com/photo-1587840177897-3a4d7b2e2e2e?w=500", description: "Precision gaming mouse with customizable RGB lighting." },
        { id: 81, name: "External Hard Drive", category: "Accessories", price: "R1,000", image: "https://images.unsplash.com/photo-1593642532781-03e5bafa2908?w=500", description: "High-capacity external hard drive for data storage." },
        { id: 82, name: "USB-C Hub", category: "Accessories", price: "R350", image: "https://images.unsplash.com/photo-1593642532781-03e5bafa2908?w=500", description: "Multi-port USB-C hub for expanded connectivity." },
        { id: 83, name: "Webcam", category: "Accessories", price: "R500", image: "https://images.unsplash.com/photo-1587840177897-3a4d7b2e2e2e?w=500", description: "Full HD webcam for clear video calls." },
        { id: 84, name: "Ring Light", category: "Accessories", price: "R450", image: "https://images.unsplash.com/photo-1587840177897-3a4d7b2e2e2e?w=500", description: "Adjustable ring light for perfect lighting in photos and videos." },
        { id: 85, name: "Bluetooth Speaker", category: "Accessories", price: "R900", image: "https://images.unsplash.com/photo-1587840177897-3a4d7b2e2e2e?w=500", description: "Portable Bluetooth speaker with rich sound." },
        { id: 86, name: "Phone Tripod", category: "Accessories", price: "R200", image: "https://images.unsplash.com/photo-1587840177897-3a4d7b2e2e2e?w=500", description: "Compact tripod for stable phone photography." },
        { id: 87, name: "Screen Cleaner Kit", category: "Accessories", price: "R150", image: "https://images.unsplash.com/photo-1587840177897-3a4d7b2e2e2e?w=500", description: "Gentle cleaning solution for all screens." },
        { id: 88, name: "Stylus Pen", category: "Accessories", price: "R250", image: "https://images.unsplash.com/photo-1587840177897-3a4d7b2e2e2e?w=500", description: "Precise stylus for touchscreens." },
        { id: 89, name: "Cable Organizer", category: "Accessories", price: "R100", image: "https://images.unsplash.com/photo-1587840177897-3a4d7b2e2e2e?w=500", description: "Keeps cables tidy and tangle-free." },
        { id: 90, name: "Travel Adapter", category: "Accessories", price: "R300", image: "https://images.unsplash.com/photo-1587840177897-3a4d7b2e2e2e?w=500", description: "Universal travel adapter for international use." }
    ];

    const productsGrid = document.getElementById("products-grid");
    const categoryButtons = document.querySelectorAll(".category-btn");

    function renderProducts(category) {
        productsGrid.innerHTML = ""; // Clear current products
        const filteredProducts = category === "All Products" ? productsData : productsData.filter(product => product.category === category);

        filteredProducts.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-overlay">
                        <button class="btn-view" data-id="${product.id}">View Details</button>
                    </div>
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                </div>
            `;
            productsGrid.appendChild(productCard);
        });

        // Add event listeners for new view buttons
        document.querySelectorAll(".btn-view").forEach(button => {
            button.addEventListener("click", (e) => {
                const productId = parseInt(e.target.dataset.id);
                const product = productsData.find(p => p.id === productId);
                if (product) {
                    showProductModal(product);
                }
            });
        });
    }

    // Initial render
    renderProducts("All Products");

    // Category filtering
    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            categoryButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            renderProducts(button.dataset.category);
        });
    });

    // Product Modal (simplified for now, will expand later)
    const productModal = document.createElement("div");
    productModal.classList.add("product-modal");
    productModal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <img id="modal-product-image" src="" alt="">
            <h3 id="modal-product-name"></h3>
            <p id="modal-product-price"></p>
            <p id="modal-product-description"></p>
            <button class="btn btn-primary add-to-cart-modal">Add to Cart</button>
        </div>
    `;
    document.body.appendChild(productModal);

    const modalCloseButton = productModal.querySelector(".close-button");
    const modalImage = document.getElementById("modal-product-image");
    const modalName = document.getElementById("modal-product-name");
    const modalPrice = document.getElementById("modal-product-price");
    const modalDescription = document.getElementById("modal-product-description");
    const modalAddToCartBtn = productModal.querySelector(".add-to-cart-modal");

    function showProductModal(product) {
        modalImage.src = product.image;
        modalName.textContent = product.name;
        modalPrice.textContent = product.price;
        modalDescription.textContent = product.description;
        modalAddToCartBtn.onclick = () => {
            // Add to cart logic here
            alert(`${product.name} added to cart!`);
            productModal.style.display = "none";
        };
        productModal.style.display = "flex";
    }

    modalCloseButton.addEventListener("click", () => {
        productModal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === productModal) {
            productModal.style.display = "none";
        }
    });

    // Contact Form Submission (example)
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you for your message! We will get back to you soon.");
            contactForm.reset();
        });
    }
});


const productsGrid = document.getElementById("products-grid");
const categoryButtons = document.querySelectorAll(".category-btn");

function renderProducts(products) {
    productsGrid.innerHTML = ""; // Clear existing products
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${product.price}</p>
                <button class="btn btn-primary add-to-cart-btn">Add to Cart</button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

function filterProducts(category) {
    const filteredProducts = (category === "All Products")
        ? productsData
        : productsData.filter(p => p.category === category);
    renderProducts(filteredProducts);
}

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        document.querySelector(".category-btn.active").classList.remove("active");
        button.classList.add("active");
        filterProducts(button.dataset.category);
    });
});

// Initial render
if (productsData && productsData.length > 0) {
    filterProducts("All Products");
}

