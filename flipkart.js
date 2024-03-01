
/*    *********************************************Input_Section_Started************************************************     */
let input_search = document.getElementById("search_input");            // input box id
let form_search = document.getElementById("search_form");              // form id(both are same)
let container_recent = document.querySelector(".recent_container");    // we adding string value to this class div 

let recent_Array = ["mobile","phone"];
form_search.addEventListener("submit",(e)=>{
	e.preventDefault();
	recent_Array.unshift(input_search.value);
	renderRecent();
})

function renderRecent(){
	let recent_search_html = "";
	recent_Array.forEach(e1=>{
		recent_search_html += `<div class="recent_list">
									<i class="fa-solid fa-clock-rotate-left"></i>
									<p>${e1}</p>
							   </div>` 
	})

container_recent.innerHTML = recent_search_html;
}
renderRecent();

/*    *********************************************Input_Section_Ended**************************************************     */

/*    **************************************All_Products_Object_Array_Started*******************************************     */

const all_Products_Object_Array = [
	{
		id : "product_1",
		img : "https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100",
		name : "Grocery",
		link : "https://www.flipkart.com/grocery-supermart-store?marketplace=GROCERY&fm=neo%2Fmerchandising&iid=M_c3acec5c-78a2-45ab-86a7-79886f01f00f_1_372UD5BXDFYS_MC.CBUR1Q46W5F1&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Grocery_CBUR1Q46W5F1&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L0_view-all&cid=CBUR1Q46W5F1",
		arrow : false,
	},
	{
		id : "product_2",
		img : "https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100",
		name : "Mobiles",
		link : "https://www.flipkart.com/mobile-phones-store?fm=neo%2Fmerchandising&iid=M_309b8d91-bd1c-48cb-bee2-76c7718cd013_1_372UD5BXDFYS_MC.ZRQ4DKH28K8J&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Mobiles_ZRQ4DKH28K8J&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L0_view-all&cid=ZRQ4DKH28K8J",
		arrow : false,
	},
	{
		id : "product_3",
		img : "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100",
		name : "Fashion",
		link : "https://www.flipkart.com/clothing-and-accessories/topwear/pr?sid=clo,ash&p[]=facets.ideal_for%255B%255D%3DMen&p[]=facets.ideal_for%255B%255D%3Dmen&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_1f7a3b22-2c24-43af-af00-4380dfb3a37b_1_372UD5BXDFYS_MC.6XNZG1FYFBZT&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BTop%2BWear_6XNZG1FYFBZT&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L1_view-all&cid=6XNZG1FYFBZT",
		arrow : true,
	},
	{
		id : "product_4",
		img : "https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100",
		name : "Electronics",
		link : "https://www.flipkart.com/electronics-best-offers-store?fm=neo%2Fmerchandising&iid=M_9761b65e-98c0-4a0b-81f2-bdce68c68427_1_372UD5BXDFYS_MC.KV8NA7Z3WYHI&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Electronics~Audio_KV8NA7Z3WYHI&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L1_view-all&cid=KV8NA7Z3WYHI",
		arrow : true,
	},
	{
		id : "product_5",
		img : "https://rukminim1.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100",
		name : "Furniture",
		link : "https://www.flipkart.com/india-ka-furniture-studio-store?fm=neo%2Fmerchandising&iid=M_a8956436-e1cd-4fd1-9798-25d76bd34032_1_372UD5BXDFYS_MC.Q6I8NGK1VUG9&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Home%2B%2526%2BFurniture~Home%2BFurnishings_Q6I8NGK1VUG9&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L1_view-all&cid=Q6I8NGK1VUG9",
		arrow : true,
	},
	{
		id : "product_6",
		img : "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100",
		name : "Appliances",
		link : "https://www.flipkart.com/tvs-and-appliances-new-clp-store?fm=neo%2Fmerchandising&iid=M_0b26be23-fab3-47d0-8e10-7e91900bd9f6_1_372UD5BXDFYS_MC.LO4IWVHA61BX&otracker=hp_rich_navigation_6_1.navigationCard.RICH_NAVIGATION_Appliances_LO4IWVHA61BX&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L0_view-all&cid=LO4IWVHA61BX",
		arrow : false,
	},
	{
		id : "product_7",
		img : "https://rukminim1.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100",
		name : "<span style='margin-left:10px;'>Travel<span>",
		link : "https://www.flipkart.com/travel/flights?param=DTNavIcon&fm=neo%2Fmerchandising&iid=M_3a57d08a-a43d-4a4e-83f4-ea2670282703_1_372UD5BXDFYS_MC.V4ZPKTOAO321&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Travel_V4ZPKTOAO321&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L0_view-all&cid=V4ZPKTOAO321",
		arrow : false,
	},
	{
		id : "product_8",
		img : "https://rukminim1.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100",
		name : "Makeup kit",
		link : "https://www.flipkart.com/beauty-and-grooming/pr?sid=g9b&otracker=categorytree&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&fm=neo%2Fmerchandising&iid=M_4de4ca11-7b0a-45e3-be88-d4b73d0fe076_1_372UD5BXDFYS_MC.RXB0XORLSZ1I&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Beauty%252C%2BToys%2B%2526%2BMore~Beauty%2B%2526%2BPersonal%2BCare_RXB0XORLSZ1I&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L1_view-all&cid=RXB0XORLSZ1I",
		arrow : true,
	},
	{
		id : "product_9",
		img : "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/05d708653beff580.png?q=100",
		name : "Vehicles",
		link : "https://www.flipkart.com/two-wheelers-store?fm=neo%2Fmerchandising&iid=M_b7258697-a2f9-4a6d-a142-cac6efec2eb0_1_372UD5BXDFYS_MC.SCJPZ04TFJJM&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Two%2BWheelers~Petrol%2BVehicles_SCJPZ04TFJJM&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L1_view-all&cid=SCJPZ04TFJJM",
		arrow : true,
	}
]	


let all_Products_List_Arranging = document.querySelector(".all_Products_List");
let all_Products_List_Arranged = "";

// forEach is to display an all products
all_Products_Object_Array.forEach(productElements => {
	all_Products_List_Arranged += `<div class="all_Products_item">
										<a href="${productElements.link}">
											<div class="product_image">
												<img src="${productElements.img}"/>
											</div>
											<p class="product_name">
												${productElements.name}
												${productElements.arrow ? `<i class="fa-solid fa-angle-down product_icon"></i>` : ""}
											</p>
										</a>
									</div>`
})

all_Products_List_Arranging.innerHTML = all_Products_List_Arranged;

/*    ***************************************All_Products_Object_Array_Ended********************************************     */

/*    ***************************************Image_Slider_Object_Array_Started******************************************     */

const all_Image_Slider = [
	{
		img : "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/651c62b163f5f321.jpg?q=20",
		link : "https://www.flipkart.com/6bo/g0i/9no/~cs-87s7i2h13k/pr?sid=6bo,g0i,9no&collection-tab-name=BenQ+Brand+Days&param=1234",
	},
	{
		img : "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ca2843e62171405e.jpg?q=20",
		link : "https://www.flipkart.com/travel/flights?param=Travel_FKHP_DT-HPW_Vistara1699",
	},
	{
		img : "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/aa1b2bdcf519b468.jpg?q=20",
		link : "https://www.flipkart.com/travel/flights?param=Travel_FKHP_DT-HPW_Vistara1699",
	},
	{
		img : "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2947cbc53e605c38.jpg?q=20",
		link : "https://www.flipkart.com/tyy/4io/~cs-vxo2sm8jwu/pr?sid=tyy,4io&collection-tab-name=realme+c53&param=1212312",
	}
]

let container_for_image_slider_lists_Arranging = document.querySelector(".container_for_image_slider_lists");
let container_for_image_slider_lists_Arranged = '';

// forEach is to display an image
all_Image_Slider.forEach(imageElements =>{
	
	container_for_image_slider_lists_Arranged += `<div class="container_for_image_slider_items">
														<a href="${imageElements.link}">
															<img src="${imageElements.img}">
														</a>
												  </div>`
})

container_for_image_slider_lists_Arranging.innerHTML = container_for_image_slider_lists_Arranged;

let previous_Image_Slide_Button = document.getElementById("previous_Slide_Button");
let previous_Slide_Starting_Count = -300;

previous_Image_Slide_Button.addEventListener("click",previousImageFunctionCalling)

let next_Image_Slide_Button = document.getElementById("next_Slide_Button");
let next_Slide_Starting_Count = 0;

next_Image_Slide_Button.addEventListener("click",nextImageFunctionCalling)

// function creating for previous image by clicking
function previousImageFunctionCalling(){
	let list_For_Next_Image = document.querySelectorAll(".container_for_image_slider_items")
	
	if(next_Slide_Starting_Count < 0)
	{
		next_Slide_Starting_Count += 100;
		list_For_Next_Image.forEach(nextImageElement => {
			nextImageElement.style.transform = `translateX(${next_Slide_Starting_Count}%)`;
		})
	}
}

// function creating for next image by clicking
function nextImageFunctionCalling(){
	
	let list_For_Next_Image = document.querySelectorAll(".container_for_image_slider_items")
	
	if(next_Slide_Starting_Count > previous_Slide_Starting_Count)
	{
		next_Slide_Starting_Count -= 100;
		list_For_Next_Image.forEach(nextImageElement => {
			nextImageElement.style.transform = `translateX(${next_Slide_Starting_Count}%)`;
		})
	}
}

// function creating for image slider running continously without clicking
function imageSliderContinouslyRunning()
{
	if(next_Slide_Starting_Count > previous_Slide_Starting_Count)
	{
		nextImageFunctionCalling();
		
	}else
	{
		next_Slide_Starting_Count = 100;
	}
}

// using setInterval build in function for image running for every one second automatically
setInterval(imageSliderContinouslyRunning,3000);


/*    ***************************************Image_Slider_Object_Array_Ended******************************************     */