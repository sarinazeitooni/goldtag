import MainSwipper from './swiper/mainswipper';
import Features from './features/features';
import Goldtags from './goldtags/goldtags';
import Category from './category/category';
import Social from './social/social';
function MainComponents() {
    return (
        <div>
            <MainSwipper/>
            <Features/>
            <Goldtags/>
            <Category/>
            <Social/>
        </div>
    );
}
export default MainComponents;