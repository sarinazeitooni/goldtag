import {faCouch, faFootballBall, faTag, faTshirt, faTv} from "@fortawesome/free-solid-svg-icons";
const navbarData = {
    goldtagproduct : ' گلدتگ کالا ',
    goldtagservice : ' گلدتگ خدمات ',
    login : ' ورود ',
    signup : ' عضویت ',
    dropdownmenu : [
        {
                icon : faCouch,
                title : ' لوازم خانگی ',
                img : "https://cdn.goldtag.net/frontend/assets/v1/desktop/build/images/tmp/home.jpg",
                firstLine : [
                    'خوشبو کننده',
                    'شستشو و نظافت',
                    'گجت آشپزخانه',
                    'لوازم کاربردی خانگی'
                ],
                secondLine : [
                    'دکوری',
                    'ظروف',
                    'لوازم برقی'
                ]
        }
        ,
        {
                icon :faFootballBall,
                title : ' ورزشی و سرگرمی ',
                img : "https://cdn.goldtag.net/frontend/assets/v1/desktop/build/images/tmp/sport.jpg",
                firstLine : [
                    'اسباب بازی',
                    'کفش ورزشی',
                    'لوازم ورزشی'
                ],
                secondLine : [
                    'پوشاک ورزشی',
                    'گجت سرگرمی'
                ]
        }
        ,
        {
                icon : faTv,
                title : ' کالای دیجیتال ',
                img : "https://cdn.goldtag.net/frontend/assets/v1/desktop/build/images/tmp/digital.jpg",
                firstLine : [
                    'صوتی و تصویری',
                    'گجت کالای دیجیتال',
                    'لوازم جانبی موبایل'
                ],
                secondLine : [
                    'کامپیوتر و لوازم جانبی',
                    'لوازم بهداشتی شخصی',
                    'لوازم خودرو'
                ]
        }
        ,
        {
                icon : faTshirt,
                title : ' پوشاک ',
                img :"https://cdn.goldtag.net/frontend/assets/v1/desktop/build/images/tmp/cloth.jpg",
                firstLine : [
                    'پوشاک زنانه',
                    'ساعت',
                    'عینک',
                    'کیف'
                ],
                secondLine : [
                    'پوشاک مردانه',
                    'شال و روسری',
                    'کفش',
                    'لباس کودک'
                ]
        }
        ,
        {
                icon : faTag,
                title : " لوازم شخصی ",
                img :"https://cdn.goldtag.net/frontend/assets/v1/desktop/build/images/tmp/personal.jpg",
                firstLine : [
                    'ابزارآلات',
                    'عطر و ادکلن',
                    'گجت شخصی',
                    'لوازم التحریر'
                ],
                secondLine : [
                    'زیورآلات',
                    'فندک و جاسوئیچی',
                    'لوازم آرایشی و بهداشتی',
                    'لوازم بهداشتی مردانه'
                ]
        }
    ]
};
export default navbarData;