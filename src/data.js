import { Headphones, Smartphone, Package, Footprints, Utensils, Gift, Medal, Award } from 'lucide-react';

export const ADS=[
{id:'a1',brand:'boAt',title:'boAt Headphones',category:'Audio',duration:30,reward:20,icon:<Headphones/>,tone:'purple'},
{id:'a2',brand:'Samsung',title:'Samsung Galaxy',category:'Technology',duration:25,reward:25,icon:<Smartphone/>,tone:'blue'},
{id:'a3',brand:'Amazon',title:'Amazon Prime',category:'Shopping',duration:20,reward:15,icon:<Package/>,tone:'gold'},
{id:'a4',brand:'Nike',title:'Nike Collection',category:'Fashion',duration:35,reward:30,icon:<Footprints/>,tone:'light'},
{id:'a5',brand:'Netflix',title:'Netflix Premium',category:'Entertainment',duration:25,reward:20,icon:'N',tone:'red'},
{id:'a6',brand:'Zomato',title:'Zomato Food',category:'Food',duration:30,reward:25,icon:<Utensils/>,tone:'orange'}
];
export const GOAL=10;
export const LEADERBOARD=[
{name:'Aarav',points:1480,ads:54,avatar:'AA'},
{name:'Priya',points:1325,ads:49,avatar:'PS'},
{name:'Rohan',points:1190,ads:45,avatar:'RM'},
{name:'Ananya',points:1080,ads:41,avatar:'AN'},
{name:'Kabir',points:990,ads:38,avatar:'KA'},
{name:'Meera',points:920,ads:36,avatar:'MR'},
{name:'Vikram',points:865,ads:33,avatar:'VK'},
{name:'Neha',points:810,ads:31,avatar:'NH'}
];
export const GIFT_REWARDS=[
{rank:1,icon:<Gift/>,title:'Grand Gift Box',subtitle:'Top #1 weekly reward'},
{rank:2,icon:<Medal/>,title:'Premium Gift',subtitle:'Top #2 weekly reward'},
{rank:3,icon:<Award/>,title:'Bonus Gift',subtitle:'Top #3 weekly reward'}
];
