
const slides = [
    {
        title: "DO I HAVE IT ? , YES I HAVE IT",
        content: "A new platform connecting customers with local sellers",
    },
    {
        title: "Problems with Existing Services",
        content: [
            "Limited personalization: Mass-market products don't always meet specific customer needs.",
            "Lack of local focus: Often prioritizes large retailers over local businesses.",
            "Fixed pricing: Little room for negotiation or bidding.",
            "Standardized products: Difficult to find unique or custom items.",
            "Overwhelming choice: Too many options can lead to decision paralysis.",
            "Impersonal shopping experience: Lacks the human touch of local retail.",
            "Environmental concerns: Long-distance shipping increases carbon footprint.",
            "Limited offline integration: Primarily focused on online transactions.",
            "Uniform seller requirements: Can be challenging for small or niche sellers to compete.",
            "Limited price transparency: Customers can't easily compare prices from multiple sellers.",
        ],
    },
    {
        title: "Our Solutions",
        content: [
            "Customization: Allows customers to upload photos of specific items they want.",
            "Local focus: Connects customers with nearby sellers, supporting local businesses.",
            "Dynamic pricing: Sellers can bid on items, potentially offering better deals.",
            "Unique products: Easier to find specific or custom items based on customer photos.",
            "Curated options: Limits choices to local sellers, reducing overwhelm.",
            "Personal touch: Enables direct communication between customers and local sellers.",
            "Reduced environmental impact: Focuses on local transactions, reducing shipping distances.",
            "Online-to-offline integration: Offers both delivery and in-store purchase options.",
            "Flexible seller participation: Lower barriers for small or niche sellers to participate.",
            "Price transparency: Customers can compare bids from multiple sellers.",
            "Customer empowerment: Gives customers more control over their shopping experience.",
            "Community building: Strengthens connections between local buyers and sellers.",
        ],
    },
    {
        title: "How It Works",
        content: [
            "1. Customers upload photos of desired items",
            "2. Local sellers receive notifications",
            "3. Sellers bid on items",
            "4. Customers choose best offer",
            "5. Option for in-store pickup or home delivery",
        ],
    },
    {
        title: "Additional Benefits",
        content: [
            " Reduced environmental impact",
            " Online-to-offline integration",
            " Flexible seller participation",
            " Price transparency",
            " Customer empowerment",
            " Community building",
        ],
    },
    {
        title: "Thank You!",
        content: "Bringing the best of online and local shopping together",
    },
];
//   (prev + 1) % slides.length
// (prev - 1 + slides.length) % slides.length
let slider = 0 ;

const previous = document.querySelector(".previous")
const next = document.querySelector(".next");
const content = document.querySelector(".content");
const title = document.querySelector("h1");
const showCurrentSlider = document.querySelector("span");


function handleContent()
{
    title.textContent = slides[slider].title;
    showCurrentSlider.textContent = slider

    if(Array.isArray(slides[slider].content)){
        const ul = document.createElement("ul");
        
        slides[slider].content.forEach(cont=>{
            const li = document.createElement("li");
            li.textContent = cont ;
            ul.append(li);
        })
        
        content.append(ul);
    }else{
        const p = document.createElement("p");
        p.textContent = slides[slider].content;
        content.append(p);
    }
}
handleContent();

previous.addEventListener("click" , (event)=>{
    title.textContent = "" ;
    content.textContent = "";
    
    slider = (slider - 1 + slides.length) % slides.length

    handleContent();

})

next.addEventListener("click" , (event)=>{
    title.textContent = "" ;
    content.textContent = "";

    slider = (slider+1)%slides.length ;
    
    handleContent();
})