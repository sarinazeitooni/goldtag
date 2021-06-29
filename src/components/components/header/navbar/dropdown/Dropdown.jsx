import './style/drop-down-container.scss';
import  './style/drop-down.scss';
function DropDown({menu}){
    return(
        <ul className="drop-down">
                <div className='drop-down-item-container'>
                    <div>
                        {menu.firstLine.map((item)=>{
                            return(
                                <li>{item}</li>
                            )
                        })}
                    </div>
                    <div>
                        {menu.secondLine.map((item)=>{
                            return(
                                <li>{item}</li>
                            )
                        })}
                    </div>
                </div>
            <div className='drop-down-image'>
                <button className='drop-down-btn'>{menu.title}</button>
                <img alt='dropdown-img' src={menu.img} />
            </div>
        </ul>
    )
};
export default DropDown;