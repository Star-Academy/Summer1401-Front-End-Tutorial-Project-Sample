import {Injectable} from '@angular/core';
import {Category} from '../models/category';

@Injectable({
    providedIn: 'root',
})
export class MegaNavService {
    private categories: Category[] = [
        {
            title: 'کالای دیجیتال',
            icon: 'far fa-laptop',
            subCategories: [
                {
                    title: 'لوازم جانبی گوشی',
                    link: '/search/category-mobile-accessories/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'کیف و کاور گوشی',
                    link: '/search/category-cell-phone-pouch-cover/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'پاور بانک (شارژر همراه)',
                    link: '/search/category-power-bank/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'پایه نگهدارنده گوشی',
                    link: '/search/category-cell-phone-holder/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'گوشی موبایل',
                    link: '/search/category-mobile-phone/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'سامسونگ',
                    link: '/search/category-mobile-phone/samsung/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'هوآوی',
                    link: '/brand-landing/huawei/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'اپل',
                    link: '/search/category-mobile-phone/apple/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'شیائومی',
                    link: '/search/category-mobile-phone/xiaomi/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'آنر',
                    link: '/search/category-mobile-phone/honor/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'نوکیا',
                    link: '/brand-landing/nokia/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'واقعیت مجازی',
                    link: '/search/category-mobile-accessories/?q=%d9%87%d8%af%d8%b3%d8%aa%20%d9%88%d8%a7%d9%82%d8%b9%db%8c%d8%aa%20%d9%85%d8%ac%d8%a7%d8%b2%db%8c&entry=mm',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'مچ‌بند و ساعت هوشمند',
                    link: '/search/category-wearable-gadget/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'هدفون، هدست، هندزفری',
                    link: '/search/category-headphone-headset-microphone/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'اسپیکر بلوتوث و با سیم',
                    link: '/search/category-speaker/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'هارد، فلش و SSD',
                    link: '/search/category-data-storage/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'دوربین',
                    link: '/search/category-camera/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'دوربین عکاسی دیجیتال',
                    link: '/search/category-digital-camera/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'دوربین‌ ورزشی و فیلم برداری',
                    link: '/search/category-camcorder/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'دوربین‌ چاپ سریع',
                    link: '/search/category-digital-camera/?q=%da%86%d8%a7%d9%be%20%d8%b3%d8%b1%db%8c%d8%b9&entry=mm',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'لوازم جانبی دوربین',
                    link: '/search/category-camera-accessories/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'لنز',
                    link: '/search/category-camera-lens/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کیف',
                    link: '/search/category-camera-bag/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کارت حافظه',
                    link: '/search/category-memory-cards/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کاغذ چاپ عکس',
                    link: '/search/category-printer-paper/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'دوربین دو چشمی و شکاری',
                    link: '/search/category-binoculars/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'تلسکوپ',
                    link: '/search/category-telescope/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'پلی استیشن، ایکس باکس و بازی',
                    link: '/search/category-game-console/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'کامپیوتر و تجهیزات جانبی',
                    link: '/search/category-computer-parts/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'تجهیزات مخصوص بازی',
                    link: '/search/category-gaming-accessories/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'مانیتور',
                    link: '/search/category-monitor/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کیس‌های اسمبل شده',
                    link: '/search/category-assembled-cases/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'قطعات داخلی کامپیوتر',
                    link: '/search/category-computer-devices/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ماوس',
                    link: '/search/category-mouse/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کیبورد',
                    link: '/search/category-keyboard/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'لپ تاپ',
                    link: '/search/category-notebook-netbook-ultrabook/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'لوازم جانبی لپ تاپ',
                    link: '/search/category-laptop-accessories/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'کیف، کوله و کاور',
                    link: '/search/category-laptop-bag/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کابل‌ صدا، AUX و HDMI',
                    link: '/search/category-cable-voice-video/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'تبلت',
                    link: '/search/category-tablet/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'شارژر تبلت و موبایل',
                    link: '/search/category-car-charger/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'کیف، کاور، لوازم جانبی تبلت',
                    link: '/search/category-tablet-accessories/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'باتری',
                    link: '/search/category-battery-charger-and-accesories/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'دوربین‌های تحت شبکه',
                    link: '/search/category-network-cam/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'مودم و تجهیزات شبکه',
                    link: '/search/category-network/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'ماشین های اداری',
                    link: '/search/category-office-machines/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'تلفن، بی سیم و سانترال',
                    link: '/search/category-telephone/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'فکس',
                    link: '/search/category-fax/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'پرینتر',
                    link: '/search/category-printer/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'لوازم جانبی اداری',
                    link: '/search/category-office-accessories/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کتابخوان فیدیبوک',
                    link: '/search/category-ebook-reader/?q=%D9%81%DB%8C%D8%AF%DB%8C%D8%A8%D9%88%DA%A9&entry=mm',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'کارت هدیه خرید از دیجی‌کالا',
                    link: '/main/dk-ds-gift-card/',
                    isPrimarySubCategory: true,
                },
            ],
        },
        {
            title: 'خودرو، ابزار و تجهیزات صنعتی',
            icon: 'far fa-wrench',
            subCategories: [
                {
                    title: 'خودروهای ایرانی و خارجی',
                    link: '/search/category-cars/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'موتور سیکلت',
                    link: '/search/category-motorbike/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'لوازم جانبی خودرو و موتورسیکلت',
                    link: '/search/category-car-accessory-parts/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'لوازم تزیینی',
                    link: '/search/category-in-car-accessorie/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'سیستم صوتی و تصویری',
                    link: '/search/category-car-stereo/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'نظافت و نگهداری خودرو',
                    link: '/search/category-car-cleaning-and-maintenance/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کلاه کاسکت و  لوازم جانبی موتور',
                    link: '/search/category-motorbike-accessory-parts/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'لوازم یدکی خودرو و موتورسیکلت',
                    link: '/search/category-car-spare-parts/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'دیسک و صفحه کلاچ',
                    link: '/search/category-clutch-kit/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'جلوبندی و تعلیق',
                    link: '/search/category-suspension-systems-and-component/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'چراغ خودرو',
                    link: '/search/category-automotive-lighting/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'تسمه خودرو',
                    link: '/search/category-engine-belt/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کمک فنر',
                    link: '/search/category-shock-absorber/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'لوازم مصرفی خودرو و موتورسیکلت',
                    link: '/search/category-consumable-parts/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'لاستیک و تایر',
                    link: '/search/category-tire/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'لنت ترمز',
                    link: '/search/category-brake-pad/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'روغن موتور و ضد یخ',
                    link: '/search/category-oils-and-additives/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'مکمل سوخت و روغن و انواع فیلتر',
                    link: '/search/category-car-oil-and-fuel-additive/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ابزار برقی',
                    link: '/search/category-power-tools/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'دریل، پیچ گوشتی برقی و شارژی',
                    link: '/search/category-cordlessscrewdriver/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'فرز و سنگ رومیزی',
                    link: '/search/category-anglegrinder/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'موتور برق',
                    link: '/search/category-electric-engine/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'مکنده و دمنده',
                    link: '/search/category-blower/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کارواش',
                    link: '/search/category-carwash/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کمپرسور و جک خودرو',
                    link: '/search/category-car-tools/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ابزار همه کاره برقی و شارژی',
                    link: '/search/category-multitool/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ابزار غیر برقی',
                    link: '/search/category-non-electrical-tools/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'ابزار دستی',
                    link: '/search/category-hand-tools/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'مجموعه ابزار',
                    link: '/search/category-tools-set/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'نردبان',
                    link: '/search/category-ladders/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'پیچ گوشتی و فازمتر',
                    link: '/search/category-screwdriver/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'نظم دهنده ابزار',
                    link: '/search/category-tool-organizer/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'متر، تراز، اندازه‌گیری دقیق',
                    link: '/search/category-measurement/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'لوازم روانکاری',
                    link: '/search/category-oilcan/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'چسب صنعتی',
                    link: '/search/category-industrial-glue/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'لوازم و یراق آلات ساختمانی',
                    link: '/search/category-construction-tools-and-equipment/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'شیرآلات',
                    link: '/search/category-faucets/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'رنگ',
                    link: '/search/category-color/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'دستگیره در',
                    link: '/search/category-doorknob/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'لوازم باغبانی',
                    link: '/search/category-gardening-tools/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'قیچی‌، چاقو و ابزار باغبانی',
                    link: '/search/category-scissors/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'بذر و تخم گیاهان',
                    link: '/search/category-plants-grain-and-seeds/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'تبر، بیل و کلنگ',
                    link: '/search/category-axeshovelandpick/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'خاک، کود و آفت کش',
                    link: '/search/category-soils-and-fertilizers/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'نور و روشنایی',
                    link: '/search/category-lighting/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'لوسترو آباژور',
                    link: '/search/category-hanging-lamps/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'لامپ',
                    link: '/search/category-lamp/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'چندراهی برق و محافظ ولتاژ',
                    link: '/search/category-power-strip/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'تجهیزات ایمنی و کار',
                    link: '/search/category-safety-tools/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'کفش ایمنی',
                    link: '/search/category-safety-shoes/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'حفاظتی و امنیتی',
                    link: '/search/category-protection-and-security-equipment/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'گاوصندوق',
                    link: '/search/category-safe/',
                    isPrimarySubCategory: false,
                },
            ],
        },
        {
            title: 'مد و پوشاک',
            icon: 'far fa-shirt',
            subCategories: [
                {
                    title: 'مردانه',
                    link: '/search/category-mens-apparel/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'لباس مردانه',
                    link: '/search/category-men-clothing/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'تی شرت و پولو شرت',
                    link: '/search/category-men-tee-shirts-and-polos/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'پیراهن',
                    link: '/search/category-men-shirts/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'شلوار',
                    link: '/search/category-men-trousers-jumpsuits/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'لباس زیر',
                    link: '/search/category-men-underwear/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کفش مردانه',
                    link: '/search/category-men-shoes/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'کفش روزمره',
                    link: '/search/category-casual-shoes-for-men/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کفش رسمی',
                    link: '/search/category-men-formal-shoes/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'اکسسوری مردانه',
                    link: '/search/category-men-accessories/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'ساعت',
                    link: '/search/category-men-watches/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کیف',
                    link: '/search/category-men-bags/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کمربند',
                    link: '/search/category-men-belts/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'زنانه',
                    link: '/search/category-womens-apparel/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'لباس زنانه',
                    link: '/search/category-women-clothing/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'پوشش اسلامی و مانتو',
                    link: '/search/category-women-islamicwear/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'بلوز و شومیز',
                    link: '/search/category-women-shirts/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'تی شرت و پولوشرت',
                    link: '/search/category-women-tee-shirts-and-polos/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'شلوار و سرهمی',
                    link: '/search/category-women-trousers-and-jumpsuits/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'لباس زیر',
                    link: '/search/category-women-underwear/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کفش زنانه',
                    link: '/search/category-women-shoes/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'کفش روزمره',
                    link: '/search/category-casual-shoes-for-women/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کفش تخت',
                    link: '/search/category-women-flat-shoes/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'اکسسوری زنانه',
                    link: '/search/category-women-accessories/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'ساعت',
                    link: '/search/category-women-watches/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کیف',
                    link: '/search/category-women-bags/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'شال و روسری',
                    link: '/search/category-women-scarves/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'زیورآلات زنانه',
                    link: '/search/category-women-jewelry/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'دستبند',
                    link: '/search/category-women-bracelet/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'گوشواره',
                    link: '/search/category-women-earrings/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'گردنبند',
                    link: '/search/category-women-necklace/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'زیورآلات طلا زنانه',
                    link: '/search/category-women-gold-jewelry/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'دستبند',
                    link: '/search/category-women-gold-bracelet/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'گوشواره',
                    link: '/search/category-women-gold-earrings/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'آویز',
                    link: '/search/category-women-gold-pendants/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'گردنبند',
                    link: '/search/category-women-gold-necklace/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'زیورآلات نقره زنانه',
                    link: '/search/category-women-silver-jewelry/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'عینک آفتابی زنانه',
                    link: '/search/category-women-eyewear/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'عینک آفتابی مردانه',
                    link: '/search/category-men-eyewear/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'پوشاک ورزشی مردانه',
                    link: '/search/category-men-sportswear/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'پوشاک ورزشی زنانه',
                    link: '/search/category-women-sportwear/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'کفش ورزشی مردانه',
                    link: '/search/category-men-sport-shoes-/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'کفش ورزشی زنانه',
                    link: '/search/category-women-sport-shoes-/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'پوشاک ورزشی پسرانه',
                    link: '/search/category-boys-sportswear/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'پوشاک ورزشی دخترانه',
                    link: '/search/category-girls-sportswear/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'کفش ورزشی پسرانه',
                    link: '/search/category-boys-sport-shoes/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'کفش ورزشی دخترانه',
                    link: '/search/category-girls-sport-shoes/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'کوله پشتی مردانه',
                    link: '/search/category-men-backpacks/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'بچه گانه',
                    link: '/search/category-kids-apparel/',
                    isPrimarySubCategory: true,
                },
            ],
        },
        {
            title: 'اسباب بازی، کودک و نوزاد',
            icon: 'far fa-baby',
            subCategories: [
                {
                    title: 'بهداشت و حمام کودک و نوزاد',
                    link: '/search/category-health-and-bathroom-tools/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'پوشک',
                    link: '/search/category-diaper/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'دستمال مرطوب',
                    link: '/search/category-wet-wipes/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'حوله',
                    link: '/search/category-baby-towel/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'وان حمام نوزاد',
                    link: '/search/category-baby-bath-tub/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'مینی واش',
                    link: '/search/category-diaper-cleaner/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'شامپو کودک و نوزاد',
                    link: '/search/category-baby-shampoo/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'پوشاک و کفش کودک و نوزاد',
                    link: '/search/category-kids-apparel/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'لباس کودک و لباس نوزادی',
                    link: '/search/category-kids-clothes/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کفش',
                    link: '/search/category-boys-shoes/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کفش ورزشی',
                    link: '/search/category-boys-shoes/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'جوراب و پاپوش کودک و نوزاد',
                    link: '/search/category-kids-socks-/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کلاه و پیشبند نوزاد',
                    link: '/search/category-kids-napkin-and-apron/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'تبلت',
                    link: '/search/category-tablet/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'پلی استیشن، ایکس باکس و بازی',
                    link: '/search/category-game-console/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'اسباب بازی',
                    link: '/search/category-toys/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'فکری و آموزشی',
                    link: '/search/category-intellectual-and-educational/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'پازل، لگو و ساختنی',
                    link: '/search/category-puzzle/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'عروسک و فیگور',
                    link: '/search/category-toy-and-model/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'اسپینر، ابزار شوخی و سرگرمی',
                    link: '/search/category-humor-and-entertainment/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'تفنگ، تیر و لوازم بازی جنگی',
                    link: '/search/category-guns-and-combat/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'بازی و سرگرمی کودک',
                    link: '/search/category-entertainment-and-games-equipment/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'ماشین بازی، موتور، سه چرخه',
                    link: '/search/category-tricycle-and-motorcycle/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'دوچرخه',
                    link: '/search/category-bicycles/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'تشک بازی و پارک بازی',
                    link: '/search/category-play-gym/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'تاب و سرسره',
                    link: '/search/category-swings-and-slides/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'سلامت، ایمنی و مراقبت',
                    link: '/search/category-safety-and-care/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'تصفیه هوا',
                    link: '/search/category-air-purifier/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ترازو',
                    link: '/search/category-digital-scale/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'دوربین و پیجر اتاق کودک',
                    link: '/search/category-baby-monitor-and-pager/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'تب سنج و دماسنج',
                    link: '/search/category-baby-thermometer/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'محافظ و ابزار ایمنی',
                    link: '/search/category-safety-tools-for-children-and-babies/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'خواب کودک',
                    link: '/search/category-baby-bedding/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'مبلمان اتاق کودک',
                    link: '/search/category-childrens-bedroom-furniture/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'چراغ خواب کودک',
                    link: '/search/category-baby-decorative-lamp/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'تشک کودک',
                    link: '/search/category-baby-mat/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'سرویس خواب',
                    link: '/search/category-bed-set/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'پتو',
                    link: '/search/category-blanket/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'بالش شیردهی',
                    link: '/search/category-feeding-pillow/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ملزومات گردش و سفر',
                    link: '/search/category-promenade-and-travel-accessories/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'کالسکه و کریر',
                    link: '/search/category-stroller-and-carrier/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'صندلی خودرو کودک و نوزاد',
                    link: '/search/category-chair-species/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ساک لوازم نوزاد',
                    link: '/search/category-diaper-bag/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'لوازم جانبی گردش و سفر',
                    link: '/search/category-children-and-baby-promenade-and-travel-accessories/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'آغوشی',
                    link: '/search/category-baby-carrier/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'لوازم شخصی',
                    link: '/search/category-personal-accessories/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'پستانک و ملزومات',
                    link: '/search/category-pacifier-and-accessories/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'شیردوش',
                    link: '/search/category-milking/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'شورت آموزشی',
                    link: '/search/category-training-short/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'غذاخوری',
                    link: '/search/category-dining-accessories/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'صندلی غذاخوری',
                    link: '/search/category-booster-seat/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'شیشه شیر، سرلاک، داروخوری',
                    link: '/search/category-baby-bottle/',
                    isPrimarySubCategory: false,
                },
            ],
        },
        {
            title: 'کالاهای سوپرمارکتی',
            icon: 'far fa-store',
            subCategories: [
                {
                    title: 'کالای اساسی و خوار و بار',
                    link: '/search/category-groceries/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'نان',
                    link: '/search/category-bread/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'برنج',
                    link: '/search/category-rice/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'روغن',
                    link: '/search/category-oil/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'قند',
                    link: '/search/category-sugar-cube/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'شکر',
                    link: '/search/category-sugar/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'سس',
                    link: '/search/category-sauce-dressing/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'رب و کنسرو گوجه',
                    link: '/search/category-tomato-paste/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'خیارشور و ترشیجات',
                    link: '/search/category-salted-marzipan/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'آبلیمو، آبغوره و سرکه',
                    link: '/search/category-liquid-condiments/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ماکارونی، پاستا و رشته',
                    link: '/search/category-spaghetti-pasta/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'زعفران، زرشک و تزیینات غذا',
                    link: '/search/category-food-design/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'حبوبات و سویا',
                    link: '/search/category-beans/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'صبحانه',
                    link: '/search/category-breakfast/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'مربا',
                    link: '/search/category-jams-butter/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'عسل',
                    link: '/search/category-honey/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'حلواشکری، ارده و کنجد',
                    link: '/search/category-halva-ardeh-sesame/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'مواد پروتئینی',
                    link: '/search/category-protein-foods/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'سوسیس و کالباس',
                    link: '/search/category-sausages/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'گوشت گوسفندی',
                    link: '/search/category-sheep-meat/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'گوشت مرغ',
                    link: '/search/category-chicken/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'تخم مرغ',
                    link: '/search/category-eggs/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'گوشت گاو و گوساله',
                    link: '/search/category-beaf/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'میگو',
                    link: '/search/category-shrimp/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ماهی',
                    link: '/search/category-fish/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'تن ماهی',
                    link: '/search/category-tuna-fish/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'لبنیات',
                    link: '/search/category-dairy/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'شیر',
                    link: '/search/category-milk/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ماست',
                    link: '/search/category-yogurt/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'پنیر',
                    link: '/search/category-cheese/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'خامه',
                    link: '/search/category-cream/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'نوشیدنی ها',
                    link: '/search/category-beverages/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'چای',
                    link: '/search/category-tea/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'دمنوش',
                    link: '/search/category-herbal-tea/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'قهوه',
                    link: '/search/category-coffee/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'آب و آب معدنی',
                    link: '/search/category-mineral-water/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ماءالشعیر',
                    link: '/search/category-non-alcoholic/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'نوشابه',
                    link: '/search/category-soft-drink/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'شربت و آبمیوه',
                    link: '/search/category-fruit-juice/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'میوه و سبزی',
                    link: '/search/category-fruits-and-vegetables/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'غذای آماده و نودل',
                    link: '/search/category-ready-made-canned-food/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'فرآورده‌های منجمد',
                    link: '/search/category-frozen-food/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'کنسرو و کمپوت',
                    link: '/search/category-canned-food/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'تنقلات',
                    link: '/search/category-snacks/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'شکلات، تافی و آبنبات',
                    link: '/search/category-chocolate/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'بیسکویت و ویفر',
                    link: '/search/category-biscuits-wafers/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'مغز طعم‌دار خشکبار',
                    link: '/search/category-nuts-trail-mix/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کیک و کلوچه',
                    link: '/search/category-cookies/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'چیپس و پاپ کورن',
                    link: '/search/category-chips/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'پفک و اسنک',
                    link: '/search/category-cheese-puffs/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'آدامس و خوشبوکننده',
                    link: '/search/category-chewing-gum-breath-fresheners/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'خشکبار و شیرینی',
                    link: '/search/category-dried-fruit-nuts/',
                    isPrimarySubCategory: true,
                },
            ],
        },
        {
            title: 'زیبایی و سلامت',
            icon: 'far fa-heart-pulse',
            subCategories: [
                {
                    title: 'لوازم آرایشی',
                    link: '/search/category-beauty/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'آرایش چشم و ابرو',
                    link: '/search/category-eye-and-eyebrow/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'آرایش لب',
                    link: '/search/category-lip/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'آرایش صورت',
                    link: '/search/category-face/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'مواد آرایش مو',
                    link: '/search/category-hair-products/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'سنگ پا، بهداشت و زیبایی ناخن',
                    link: '/search/category-nail-care/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'تجهیزات جانبی آرایشی',
                    link: '/search/category-beauty-accesories/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'لوازم بهداشتی',
                    link: '/search/category-personal-care/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'کرم و مراقبت پوست',
                    link: '/search/category-face-and-body-cream/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'شامپو و مراقبت مو',
                    link: '/search/category-hair-care/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'بهداشت دهان و دندان',
                    link: '/search/category-dental-hygienist/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'بهداشت و مراقبت بدن',
                    link: '/search/category-body-care/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ضد تعریق',
                    link: '/search/category-anti-sweat/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'لوازم شخصی برقی',
                    link: '/search/category-electrical-personal-care/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'ماشین اصلاح صورت',
                    link: '/search/category-shaver/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ماشین اصلاح سر',
                    link: '/search/category-hair-trimmer/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'سشوار',
                    link: '/search/category-hair-drier/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'اصلاح بدن آقایان',
                    link: '/search/category-body-groom/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'اصلاح بدن بانوان',
                    link: '/search/category-epilator/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'اصلاح موی گوش، بینی و ابرو',
                    link: '/search/category-nose-clipping/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'برس پاک سازی',
                    link: '/search/category-skin-care-accessories/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'اتو مو و حالت دهنده',
                    link: '/search/category-hair-iron/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'بیگودی و فر کننده',
                    link: '/search/category-hair-shaping/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'مسواک برقی',
                    link: '/search/category-electric-brusher/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'لیزر',
                    link: '/search/category-electrical-personal-care/?q=%D9%84%DB%8C%D8%B2%D8%B1&entry=mm',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'عطر، ادکلن، اسپری و ست',
                    link: '/search/category-perfume-all/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'مردانه',
                    link: '/search/category-perfume/?q=%d9%85%d8%b1%d8%af%d8%a7%d9%86%d9%87&entry=mm',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'زنانه',
                    link: '/search/category-perfume/?q=%d8%b2%d9%86%d8%a7%d9%86%d9%87&entry=mm',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'جیبی',
                    link: '/search/category-pocket-perfumes/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'اسپری',
                    link: '/search/category-spray/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'طلا، نقره و زیورآلات زنانه',
                    link: '/search/category-women-accessories/?q=%d8%b2%db%8c%d9%88%d8%b1%d8%a2%d9%84%d8%a7%d8%aa&entry=mm',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'زیورآلات نقره زنانه',
                    link: '/search/category-women-silver-jewelry/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'زیورآلات طلا زنانه',
                    link: '/search/category-women-gold-jewelry/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'حلقه و انگشتر طلای زنانه',
                    link: '/search/category-women-gold-ring/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'دستبند طلا زنانه',
                    link: '/search/category-women-gold-bracelet/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'گردنبند طلا زنانه',
                    link: '/search/category-women-gold-necklace/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'گوشواره طلا زنانه',
                    link: '/search/category-women-gold-earrings/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'زیورآلات نقره مردانه',
                    link: '/search/category-men-silver-jewelry/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'ابزار سلامت و طبی',
                    link: '/search/category-health-care/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'مچ بند و ساعت هوشمند',
                    link: '/search/category-wearable-gadget/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ترازو',
                    link: '/search/category-digital-scale/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کالای خواب و استراحت طبی',
                    link: '/search/category-%20sleep-and-rest-medical/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'تست قند خون',
                    link: '/search/category-blood-sugar-meter/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'تب سنج',
                    link: '/search/category-thermometers/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'فشارسنج',
                    link: '/search/category-digital-sphygmomanometer/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ابزار مراقبت پا',
                    link: '/search/category-heel-pads/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'نمایشگر ضربان قلب',
                    link: '/search/category-heart-monitor-/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ماساژور',
                    link: '/search/category-massager/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'تشک و پتوی برقی',
                    link: '/search/category-electric-underblankets-and-blanket/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ویلچر',
                    link: '/search/category-wheelchair/',
                    isPrimarySubCategory: false,
                },
            ],
        },
        {
            title: 'خانه و آشپزخانه',
            icon: 'far fa-couch',
            subCategories: [
                {
                    title: 'صوتی و تصویری',
                    link: '/search/category-video-audio-entertainment/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'تلویزیون',
                    link: '/search/category-tv2/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'سینمای خانگی و ساندبار',
                    link: '/search/category-home-theatre/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'گیرنده دیجیتال تلویزیون',
                    link: '/search/category-set-top-box/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'دکوراتیو',
                    link: '/search/category-decorative/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'مبلمان خانگی',
                    link: '/search/category-household-furniture/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'دکوراسیون اداری',
                    link: '/search/category-office-furniture/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'آینه',
                    link: '/search/category-decorative-mirror/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'پرده',
                    link: '/search/category-curtain/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'تابلو',
                    link: '/search/category-decorative-board/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ساعت دیواری و رومیزی',
                    link: '/search/category-clocks/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'شمع، گل و گلدان',
                    link: '/search/category-decorative-ac/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'فرش ماشینی، دستبافت، تابلو',
                    link: '/search/category-carpet/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'لوازم برقی خانگی',
                    link: '/search/category-home-appliance/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'یخچال و فریزر',
                    link: '/search/category-refrigerator-freezer/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ماشین لباسشویی',
                    link: '/search/category-washing-machines/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ماشین ظرفشویی',
                    link: '/search/category-dishwasher/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'هود',
                    link: '/search/category-hood/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'گاز صفحه ای',
                    link: '/search/category-built-in-stove/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'اجاق گاز',
                    link: '/search/category-oven/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'مایکروویو، مایکروفر',
                    link: '/search/category-microwave/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'جاروبرقی',
                    link: '/search/category-vaccum-cleaner/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'جارو شارژی',
                    link: '/search/category-handheld-vacuum/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'تلفن، بی سیم و سانترال',
                    link: '/search/category-telephone/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کولر، پنکه، تصفیه هوا',
                    link: '/search/category-airtreatment/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'قهوه و چای ساز، آب میوه گیر',
                    link: '/search/category-drink-maker/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'اتو بخار و پرسی',
                    link: '/search/category-iron/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'حیوانات خانگی، غذا و لوازم',
                    link: '/search/category-pet/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'آکواریوم، غذا و لوازم آبزیان',
                    link: '/search/category-aquaculture-equipment/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'سرو و پذیرایی',
                    link: '/search/category-serving/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'سرویس غذاخوری',
                    link: '/search/category-dinnerware-sets/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'قاشق، چنگال و کارد',
                    link: '/search/category-forkandspoonnandknife/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'پارچ، بطری، لیوان و ماگ',
                    link: '/search/category-mugandjugset/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ظروف پذیرایی',
                    link: '/search/category-servingware/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'نور و روشنایی',
                    link: '/search/category-lighting/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'لامپ، چراغ و ریسه',
                    link: '/search/category-lamp/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'لوستر و چراغ تزیینی',
                    link: '/search/category-hanging-lamps/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'آشپزخانه',
                    link: '/search/category-home-kitchen-appliances/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'سرویس و ظروف پخت و پز',
                    link: '/search/category-kitchen-appliances/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'فلاسک و کلمن',
                    link: '/search/category-flasks/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کتری، قوری، لوازم سرو چای',
                    link: '/search/category-kettleandteapot/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ظروف یکبار مصرف',
                    link: '/search/category-disposablecontainer/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'مواد شوینده',
                    link: '/search/category-detergents/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'شوینده ظروف',
                    link: '/search/category-dishes-detergents/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'شوینده لباس',
                    link: '/search/category-clothes-detergents/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'تمیزکننده سطوح',
                    link: '/search/category-surface-cleaner/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'دستمال کاغذی',
                    link: '/search/category-tissue-paper/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'ملحفه، سرویس، لوازم خواب',
                    link: '/search/category-sleeping/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'حوله و وسایل حمام',
                    link: '/search/category-bath/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'پادری، کمد، لوازم اتاق خواب',
                    link: '/search/category-bedroom/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'لوازم دستشویی و روشویی',
                    link: '/search/category-watercloset/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'فندک و لوازم جانبی',
                    link: '/search/category-pesonal-appliance-accessories/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'گُل، خاک، کود، لوازم باغبانی',
                    link: '/search/category-gardening-tools/',
                    isPrimarySubCategory: true,
                },
            ],
        },
        {
            title: 'کتاب، لوازم تحریر و هنر',
            icon: 'far fa-book',
            subCategories: [
                {
                    title: 'کتاب و مجله',
                    link: '/search/category-magazines/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'کتاب چاپی',
                    link: '/search/category-book/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'مجلات خارجی و داخلی',
                    link: '/search/category-magazines/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کتاب صوتی',
                    link: '/search/category-audio-book/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'محتوای آموزشی',
                    link: '/search/category-multimedia-training-pack/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'آموزش موسیقی',
                    link: '/search/category-music-training/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'آموزش ورزش و سرگرمی',
                    link: '/search/category-sport-and-entertainment/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'آموزش زبان',
                    link: '/search/category-language-learning-software/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'آموزش نرم افزار و کامپیوتر',
                    link: '/search/category-software-computer/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'نرم افزار',
                    link: '/search/category-software/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'بازی کنسول و کامپیوتر',
                    link: '/search/category-pc-game/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'فیلم سینمایی، سریال و مستند',
                    link: '/search/category-film-video-content/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'آلبوم موسیقی',
                    link: '/search/category-music-audio-content/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'لوازم التحریر',
                    link: '/search/category-stationery/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'لوازم اداری و اقلام مصرفی',
                    link: '/search/category-office-supplies/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کیف، کوله پشتی و جامدادی',
                    link: '/search/category-bags-backpacks/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'چراغ مطالعه',
                    link: '/search/category-light/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کاغذ کادو، پاکت و کارت هدیه',
                    link: '/search/category-gift-tools/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'نوشت افزار',
                    link: '/search/category-stationery-sub/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'دفتر و کاغذ',
                    link: '/search/category-paper-notebook/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'خودکار و روان نویس',
                    link: '/search/category-pen/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ابزار نقاشی و رنگ آمیزی',
                    link: '/search/category-drawing-painting-tools/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'میز تحریر',
                    link: '/search/category-writing-desk/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'آلبوم عکس',
                    link: '/search/category-photo-box/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کاغذ چاپ و پرینتر',
                    link: '/search/category-paper/?type[0]=5072&pageno=1&last_filter=type&last_value=5072&sortby=4&entry=mm',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'مداد و مداد رنگی',
                    link: '/search/category-pencil/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'آلات موسیقی',
                    link: '/search/category-musicalinstruments/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'لوازم جانبی ادوات موسیقی',
                    link: '/search/category-musicinstrumentsaccessories/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'گیتار',
                    link: '/search/category-guitar/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کیبورد و ارگ',
                    link: '/search/category-keybord-organ/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'پیانو دیجیتال',
                    link: '/search/category-pianos/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'درام، پرکاشن و دف',
                    link: '/search/category-percussion-instruments/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'تجهیزات استودیویی',
                    link: '/search/category-studio-equipment/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ویولن',
                    link: '/search/category-violin/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'سازهای ایرانی',
                    link: '/search/category-tombak/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'فرش ماشینی، دستبافت، تابلو',
                    link: '/search/category-carpet/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'فرش ماشینی',
                    link: '/search/category-machine-made-carpet/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'فرش دستباف',
                    link: '/search/category-handmade-carpet/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'تابلو فرش',
                    link: '/search/category-pictorial-carpet/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'صنایع دستی',
                    link: '/search/category-handicraft/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'کالاهای مسی',
                    link: '/search/category-copper-products/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'سفال، سرامیک و چینی',
                    link: '/search/category-clay-and-ceramic/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کیف چرمی',
                    link: '/search/category-leatherbag/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ترمه،‌ قلمکار و دستبافت',
                    link: '/search/category-textile-industry/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'خاتم، منبت، حصیری و چوبی',
                    link: '/search/category-woodcraft/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'تابلو و ساعت',
                    link: '/search/category-panel/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'میناکاری',
                    link: '/search/category-enamels/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'فیروزه کوبی',
                    link: '/search/category-turquoise-tattoo/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'سوزن دوزی',
                    link: '/search/category-needle-sewing/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'محصولات استخوانی',
                    link: '/search/category-bone-product/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'جعبه و دست سازه های هنری',
                    link: '/search/category-art-structures/',
                    isPrimarySubCategory: false,
                },
            ],
        },
        {
            title: 'ورزش و سفر',
            icon: 'far fa-campground',
            subCategories: [
                {
                    title: 'پوشاک ورزشی مردانه',
                    link: '/search/category-men-sportswear/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'پوشاک ورزشی زنانه',
                    link: '/search/category-women-sportwear/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'کفش ورزشی مردانه',
                    link: '/search/category-men-sport-shoes-/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'کفش ورزشی زنانه',
                    link: '/search/category-women-sport-shoes-/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'پوشاک ورزشی پسرانه',
                    link: '/search/category-boys-sportswear/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'پوشاک ورزشی دخترانه',
                    link: '/search/category-girls-sportswear/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'کفش ورزشی پسرانه',
                    link: '/search/category-boys-sport-shoes/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'کفش ورزشی دخترانه',
                    link: '/search/category-girls-sport-shoes/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'تجهیزات سفر',
                    link: '/search/category-traveling-equipment/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'چمدان و ساک',
                    link: '/search/category-trolley-case-and-luggage/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کیف و کوله پشتی',
                    link: '/search/category-bag-and-backpack/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'دوچرخه',
                    link: '/search/category-bicycle/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'لوازم جانبی دوچرخه',
                    link: '/search/category-bicycles-accessories/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کوهنوردی و کمپینگ',
                    link: '/search/category-hiking-and-camping/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'کفش کوهنوردی',
                    link: '/search/category-apparel/?q=%da%a9%d9%81%d8%b4%20%da%a9%d9%88%d9%87%d9%86%d9%88%d8%b1%d8%af%db%8c&entry=mm',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'عصای کوهنوردی',
                    link: '/search/category-staff/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'چراغ قوه و چراغ پیشانی',
                    link: '/search/category-flashlight/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'چاقو و ابزار چند کاره',
                    link: '/search/category-camping-knife/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'قمقمه و فلاسک',
                    link: '/search/category-flask/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'چادر',
                    link: '/search/category-tent/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کیسه خواب',
                    link: '/search/category-sleeping-bag/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'زیرانداز سفری',
                    link: '/search/category-mat/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'لوازم جانبی کوهنوردی و سفر',
                    link: '/search/category-travel-accessories/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'چتر',
                    link: '/search/category-umbrella-1/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'ساک ورزشی',
                    link: '/search/category-trolley-case-and-luggage/?q=%d8%b3%d8%a7%da%a9%20%d9%88%d8%b1%d8%b2%d8%b4%db%8c&entry=mm',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'قمقمه و شیکر',
                    link: '/search/category-sport-entertainment/?q=%d8%b4%db%8c%da%a9%d8%b1&entry=mm',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'لوازم ورزشی',
                    link: '/search/category-sport/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'ورزش های هوازی و بدنسازی',
                    link: '/search/category-aerobic/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'تجهیزات جانبی ایروبیک و تناسب اندام',
                    link: '/search/category-stretching-tools/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'دمبل',
                    link: '/search/category-dumbbell/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'طناب',
                    link: '/search/category-rope/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'بارفیکس',
                    link: '/search/category-pullup/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'تردمیل',
                    link: '/search/category-treadmill/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'لوازم پوششی و محافظتی ورزشی',
                    link: '/search/category-cover-and-safety-equipment/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ورزش های توپی',
                    link: '/search/category-ball-sports/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'توپ',
                    link: '/search/category-ball/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'راکت',
                    link: '/search/category-racquet/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ورزش‌های آبی',
                    link: '/search/category-water-games/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'ورزش‌های رزمی',
                    link: '/search/category-martial-arts/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'اسکوتر برقی',
                    link: '/search/category-sports-hoverboard/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'اسکیت و اسکوتر',
                    link: '/search/category-skate/',
                    isPrimarySubCategory: true,
                },
            ],
        },
        {
            title: 'محصولات بومی و محلی',
            icon: 'far fa-hands-holding',
            subCategories: [
                {
                    title: 'خوراکی‌های بومی محلی',
                    link: '/search/category-rural-food-and-beverage/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'حلوا شکری، ارده و کنجد',
                    link: '/search/category-rural-halva-and-sesame/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'خرمای محلی',
                    link: '/search/category-rural-date/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'عسل محلی',
                    link: '/search/category-rural-honey/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'عرقیات و گلاب اصیل',
                    link: '/search/category-rural-distillates-and-rosewater/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ادویه و چاشنی محلی',
                    link: '/search/category-rural-flavors-and-spices/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'چای محلی',
                    link: '/search/category-rural-tea/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'زعفران، زرشک و تزئینات غذا',
                    link: '/search/category-organic-rural-saffron-and-barberry/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'سبزی خشک محلی',
                    link: '/search/category-rural-dried-herbs/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'حبوبات و سویا محلی',
                    link: '/search/category-organic-beans-and-soy/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'قند و نبات محلی',
                    link: '/search/category-rural-sugar-and-crystallized-sugar/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ماهی تازه',
                    link: '/search/category-rural-fish/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'روغن محلی',
                    link: '/search/category-rural-oil/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'خانه و کاشانه بومی محلی',
                    link: '/search/category-rural-home/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'ظروف سنتی',
                    link: '/search/category-rural-dishes/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'کاسه و کاسه بشقاب سنتی',
                    link: '/search/category-rural-bowl/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'بشقاب سنتی',
                    link: '/search/category-rural-plate/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'پارچ سنتی',
                    link: '/search/category-rural-pitcher/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'لیوان سنتی',
                    link: '/search/category-rural-glass/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'قندان سنتی',
                    link: '/search/category-rural-sugar-container/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'دیگ و قابلمه سنتی',
                    link: '/search/category-rural-pot-dig/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'شکلات خوری دست‌ساز',
                    link: '/search/category-rural-chocolate-container/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'ابزار آشپزخانه سنتی',
                    link: '/search/category-rural-kitchen-utensils/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'دیس و سینی سنتی',
                    link: '/search/category-rural-tray/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'تخته سرو سنتی',
                    link: '/search/category-rural-serve-board/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'سبد دستبافت سنتی',
                    link: '/search/category-rural-hand-made-basket/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'دکوراتیو سنتی',
                    link: '/search/category-rural-decorative/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'آویز سرپرده سنتی',
                    link: '/search/category-rural-decorative-curtain/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'کیس و کاور سنتی',
                    link: '/search/category-rural-traditional-case-and-cover/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'گلدان سنتی',
                    link: '/search/category-rural-flower-pot/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'مجسمه سنتی',
                    link: '/search/category-rural-sculpture/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'چراغ خواب و آباژور',
                    link: '/search/category-rural-bedside-lamp-and-table-lamp/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'خواب و حمام',
                    link: '/search/category-rural-bed-and-bath/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'کوسن سنتی',
                    link: '/search/category-rural-cushion/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'انواع قالی و قالیچه',
                    link: '/search/category-rural-carpets-and-rugs/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'گلیم',
                    link: '/search/category-rural-gelim/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'پوشیدنی‌های بومی محلی',
                    link: '/search/category-rural-cloth-and-apparel/',
                    isPrimarySubCategory: true,
                },
                {
                    title: 'پوشاک بومی و محلی',
                    link: '/search/category-rural-clothing/',
                    isPrimarySubCategory: false,
                },
                {
                    title: 'اکسسوری بومی و محلی',
                    link: '/search/category-rural-accessories/',
                    isPrimarySubCategory: false,
                },
            ],
        },
    ];

    public fetchCategories(): Category[] {
        return this.categories;
    }
}

// [...temp1.querySelectorAll('.h-full.w-full')].map((x) => ({
//     title: x.querySelector('a').textContent.replace('همه محصولات ', ''),
//     subCategories: [...x.querySelectorAll('a')].slice(1).map((y) => ({
//         title: y.textContent,
//         link: y.getAttribute('href'),
//         isPrimarySubCategory: !!y.querySelector('svg'),
//     })),
// }));

// icon: 'far fa-laptop',
// icon: 'far fa-wrench',
// icon: 'far fa-shirt',
// icon: 'far fa-baby',
// icon: 'far fa-store',
// icon: 'far fa-heart-pulse',
// icon: 'far fa-couch',
// icon: 'far fa-book',
// icon: 'far fa-campground',
// icon: 'far fa-hands-holding',
