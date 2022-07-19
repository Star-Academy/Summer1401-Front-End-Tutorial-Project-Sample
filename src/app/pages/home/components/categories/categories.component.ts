import {Component} from '@angular/core';

interface Category {
    title: string;
    link: string;
    image: string;
}

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
    public categories: Category[] = [
        {
            title: 'کالای دیجیتال',
            link: 'electronic-devices',
            image: 'assets/images/categories/electronic-devices.png',
        },
        {
            title: 'خودرو، ابزار و تجهیزات صنعتی',
            link: 'vehicles',
            image: 'assets/images/categories/vehicles.png',
        },
        {
            title: 'مد و پوشاک',
            link: 'apparel',
            image: 'assets/images/categories/apparel.png',
        },
        {
            title: 'اسباب بازی، کودک و نوزاد',
            link: 'mother-and-child',
            image: 'assets/images/categories/mother-and-child.png',
        },
        {
            title: 'کالاهای سوپرمارکتی',
            link: 'food-beverage',
            image: 'assets/images/categories/food-beverage.png',
        },
        {
            title: 'زیبایی و سلامت',
            link: 'personal-appliance',
            image: 'assets/images/categories/personal-appliance.png',
        },
        {
            title: 'خانه و آشپزخانه',
            link: 'home-and-kitchen',
            image: 'assets/images/categories/home-and-kitchen.png',
        },
        {
            title: 'کتاب، لوازم تحریر و هنر',
            link: 'book-and-media',
            image: 'assets/images/categories/book-and-media.png',
        },
        {
            title: 'ورزش و سفر',
            link: 'sport-entertainment',
            image: 'assets/images/categories/sport-entertainment.png',
        },
        {
            title: 'محصولات بومی و محلی',
            link: 'rural-products',
            image: 'assets/images/categories/rural-products.png',
        },
    ];
}
