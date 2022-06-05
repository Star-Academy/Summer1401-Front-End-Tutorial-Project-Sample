import {ShopType} from '../enums/shop-type';
import {Shop} from '../models/shop';

export const SHOPS = {
    [ShopType.TEA_HOUSE]: Object.freeze(new Shop('/assets/game/shops/tea-house.jpg', 3)),
    [ShopType.TROPICAL_FISH]: Object.freeze(new Shop('/assets/game/shops/tropical-fish.jpg', 4)),
    [ShopType.LAUNDRY]: Object.freeze(new Shop('/assets/game/shops/laundry.jpg', 5)),
    [ShopType.FACTORY]: Object.freeze(new Shop('/assets/game/shops/factory.jpg', 6)),
    [ShopType.PHOTO]: Object.freeze(new Shop('/assets/game/shops/photo.jpg', 3)),
    [ShopType.FLORIST]: Object.freeze(new Shop('/assets/game/shops/florist.jpg', 4)),
    [ShopType.DIM_SUM]: Object.freeze(new Shop('/assets/game/shops/dim-sum.jpg', 5)),
    [ShopType.RESTAURANT]: Object.freeze(new Shop('/assets/game/shops/restaurant.jpg', 6)),
    [ShopType.SEA_FOOD]: Object.freeze(new Shop('/assets/game/shops/sea-food.jpg', 3)),
    [ShopType.JEWELLERY]: Object.freeze(new Shop('/assets/game/shops/jewellery.jpg', 4)),
    [ShopType.TAKE_OUT]: Object.freeze(new Shop('/assets/game/shops/take-out.jpg', 5)),
    [ShopType.ANTIQUES]: Object.freeze(new Shop('/assets/game/shops/antiques.jpg', 6)),
};
