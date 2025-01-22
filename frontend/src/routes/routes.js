import AboutUs from "../pages/AboutUs/AboutUs";
import BotanicalArt from "../pages/Shop/BotanicalArt";
import BusinessConsults from "../pages/Services/BussinessConsults";
import EssentionalOils from "../pages/Shop/EssentionalOils";
import FAQ from "../pages/AboutUs/Faqs";
import GetInTouch from "../pages/Auth/GetInTouch";
import HomeConsults from "../pages/Services/HomeConsults";
import HomePage from "../pages/Home/HomePage";
import PlantCareAdvice from "../pages/Services/PlantCareAdvice";
import PlantRepotting from "../pages/Services/PlantRepotting";
import Profile from "../pages/Auth/Profile";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import Terrariums from "../pages/Shop/Terrariums";
import Tools from "../pages/Shop/Tools";
import Vases from "../pages/Shop/Vases";
import VerifyEmail from "../pages/Auth/VerifyEmail";
import Chatroom from "../pages/Chatroom/Chatroom";
import CartPage from "../pages/Shop/CartPage";

export const routes = [
    {
        name: 'home',
        path: '/',
        component: HomePage,
    },
    {
        name: 'about',
        path: '/about',
        component: AboutUs,
    },
    {
        name: 'consult',
        path: '/home-consults',
        component : HomeConsults,
    },
    {
        name: 'consulut',
        path: '/bussiness-consults',
        component: BusinessConsults,
    },
    {
        name: 'Plant care advice',
        path: '/plant-care-advice',
        component: PlantCareAdvice,
    },
    
    {
        name: 'Plant repotting',
        path: '/plant-repotting',
        component: PlantRepotting
    },
    {
        name: 'Essentional Oils',
        path: '/essentional-oils',
        component: EssentionalOils
    },
    {
        name: 'botanical Art',
        path: '/botanical-art',
        component: BotanicalArt
    },
    {
        name: 'vases',
        path: '/vases',
        component: Vases
    },
    {
        name: 'tools',
        path: '/tools',
        component: Tools
    },
    {
        name: 'SignIn',
        path: '/signin',
        component: SignIn
    },
    {

        name: 'SignUp',
        path: '/signup',
        component: SignUp
    },
    {
        name: 'terrariums',
        path: '/terrariums',
        component: Terrariums
    },
    {
        name: 'profile',
        path: '/profile',
        component: Profile
    },
    {
        name: 'veryEmail',
        path: '/very-email',
        component: VerifyEmail
    },
    {
     name: 'contact',
     path: '/contact-us',
     component: GetInTouch
    },
    {
        name: 'faqsList',
        path: '/faqs-List',
        component: FAQ
    },
    {
        name: 'chatroom',
        path: '/chatroom',
        component: Chatroom

    },
    {
        name: "cartePage",
        path: "/cartePage",
        component: CartPage
    }
]