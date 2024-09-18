
const slides = [
    {
        title: "DO I HAVE IT ? , YES I HAVE IT",
        content: `<h3>A new platform connecting customers with local sellers</h3>
        <h4>by</h4>
                    <div class='names'>
                <li>Kiran Raj Dhakal </li>
                <li>Subash Rimal </li>
                <li>Prakash Gurung </li>
                <li>Jenisha Timilsina </li>
                    </div>

                    `,
    },
    {
        title: "Problems with Existing Services",
        content: [
            "<span>Limited personalization</span>:  Mass-market products don't always meet specific customer needs.",
            "<span>Lack of local focus</span>:  Often prioritizes large retailers over local businesses.",
            "<span>Fixed pricing</span>:  Little room for negotiation or bidding.",
            "<span>Standardized products</span>:  Difficult to find unique or custom items.",
            "<span>Overwhelming choice</span>:  Too many options can lead to decision paralysis.",
            "<span>Impersonal shopping experience</span>:  Lacks the human touch of local retail.",
            "<span>Environmental concerns</span>:  Long-distance shipping increases carbon footprint.",
            "<span>Limited offline integration</span>:  Primarily focused on online transactions.",
            "<span>Uniform seller requirements</span>:  Can be challenging for small or niche sellers to compete.",
            "<span>Limited price transparency</span>:  Customers can't easily compare prices from multiple sellers.",
        ],
    },
    {
        title: "Our Solutions",
        content: [
            "<span>Customization</span>: Allows customers to upload photos of specific items they want.",
            "<span>Local focus</span>: Connects customers with nearby sellers, supporting local businesses.",
            "<span>Dynamic pricing</span>: Sellers can bid on items, potentially offering better deals.",
            "<span>Unique products</span>: Easier to find specific or custom items based on customer photos.",
            "<span>Curated options</span>: Limits choices to local sellers, reducing overwhelm.",
            "<span>Personal touch</span>: Enables direct communication between customers and local sellers.",
            "<span>Reduced environmental impact</span>: Focuses on local transactions, reducing shipping distances.",
            "<span>Online-to-offline integration</span>: Offers both delivery and in-store purchase options.",
            "<span>Flexible seller participation</span>: Lower barriers for small or niche sellers to participate.",
            "<span>Price transparency</span>: Customers can compare bids from multiple sellers.",
            "<span>Customer empowerment</span>: Gives customers more control over their shopping experience.",
            "<span>Community building</span>: Strengthens connections between local buyers and sellers.",
        ],
    },
    {
        title: "How It Works",
        content: [
            "Customers upload photos of desired items",
            "Local sellers receive notifications",
            "Sellers bid on items",
            "Customers choose best offer",
            "Option for in-store pickup or home delivery",
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
    title.innerHTML = slides[slider].title;
    showCurrentSlider.innerHTML = slider

    if(Array.isArray(slides[slider].content)){
        const ul = document.createElement("ol");
        ul.setAttribute("type","1")
        
        slides[slider].content.forEach(cont=>{
            const li = document.createElement("li");
            li.innerHTML = cont ;
            ul.append(li);
        })
        
        content.append(ul);
    }else{
        const p = document.createElement("p");
        p.innerHTML = slides[slider].content;
        content.append(p);
    }
}
handleContent();

previous.addEventListener("click" , (event)=>{
    title.innerHTML = "" ;
    content.innerHTML = "";
    
    slider = (slider - 1 + slides.length) % slides.length

    handleContent();

})

next.addEventListener("click" , (event)=>{
    title.innerHTML = "" ;
    content.innerHTML = "";

    slider = (slider+1)%slides.length ;
    
    handleContent();
})