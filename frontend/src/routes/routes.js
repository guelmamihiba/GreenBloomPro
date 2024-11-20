import AboutUs from "../pages/AboutUs";
import BotanicalArt from "../pages/BotanicalArt";
import BusinessConsults from "../pages/BussinessConsults";
import EssentionalOils from "../pages/EssentionalOils";
import HomeConsults from "../pages/HomeConsults";
import HomePage from "../pages/HomePage";
import PlantCareAdvice from "../pages/PlantCareAdvice";
import PlantRepotting from "../pages/PlantRepotting";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Terrariums from "../pages/Terrariums";
import Tools from "../pages/Tools";
import Vases from "../pages/Vases";
import VerifyEmail from "../pages/VerifyEmail";

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
        name: 'Essential Oils',
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
    }
]