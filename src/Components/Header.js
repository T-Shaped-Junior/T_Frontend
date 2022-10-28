import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import '../Style/Header.scss';

const Header = () => {
    const user = useContext(UserContext)

    return (
        <div>
            <div className='header_wrap'>
                <div className='github_logo'>
                    <Link to={'/'}>
                        <svg width="35" height="34" viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M25 0.922363C11.1875 0.922363 0 11.7224 0 25.0566C0 35.736 7.15625 44.7562 17.0937 47.954C18.3437 48.1652 18.8125 47.4411 18.8125 46.8076C18.8125 46.2344 18.7812 44.3339 18.7812 42.3126C12.5 43.4288 10.875 40.8344 10.375 39.4768C10.0937 38.783 8.875 36.6411 7.8125 36.0679C6.9375 35.6154 5.6875 34.4991 7.78125 34.469C9.75 34.4388 11.1562 36.2187 11.625 36.9427C13.875 40.593 17.4687 39.5673 18.9062 38.9338C19.125 37.3651 19.7812 36.3092 20.5 35.7059C14.9375 35.1025 9.125 33.0209 9.125 23.7896C9.125 21.165 10.0937 18.9929 11.6875 17.3035C11.4375 16.7001 10.5625 14.2264 11.9375 10.9079C11.9375 10.9079 14.0312 10.2744 18.8125 13.3817C20.8125 12.8387 22.9375 12.5671 25.0625 12.5671C27.1875 12.5671 29.3125 12.8387 31.3125 13.3817C36.0937 10.2442 38.1875 10.9079 38.1875 10.9079C39.5625 14.2264 38.6875 16.7001 38.4375 17.3035C40.0313 18.9929 41 21.1348 41 23.7896C41 33.0511 35.1562 35.1025 29.5937 35.7059C30.5 36.4601 31.2812 37.9081 31.2812 40.1707C31.2812 43.3986 31.25 45.9931 31.25 46.8076C31.25 47.4411 31.7187 48.1953 32.9687 47.954C37.9316 46.3364 42.2441 43.2572 45.2993 39.1497C48.3545 35.0423 49.9985 30.1133 50 25.0566C50 11.7224 38.8125 0.922363 25 0.922363Z" fill="white" />
                        </svg>
                    </Link>
                </div>
                <div className='team_name'>
                    <Link to={'/'}>
                        <span>T-Shape-Junior</span>
                    </Link>
                </div>
                <div className='login_btn'>
                    {user.isLogin ? '' : <><span><a href={'https://auth.bssm.kro.kr/oauth?clientId=4bff670f&redirectURI=http://bsmboo.kro.kr:8000/oauth'}>LOGIN</a></span>&nbsp;&nbsp;|&nbsp;&nbsp;</>}

                    <span><Link to={'/mypage'}>MYPAGE</Link></span>
                </div>
            </div>
            <div className='title_box_wrap'>
                <div className='team_image_box'>
                    <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="600" height="600" rx="34" fill="white" />
                        <circle cx="313.5" cy="423.5" r="127.5" fill="#0D9D29" />
                        <rect x="187" y="75" width="134" height="332" fill="#0DB12D" />
                        <rect x="321" y="279" width="8" height="272" fill="white" />
                        <rect x="186" y="418" width="11" height="139" transform="rotate(-90 186 418)" fill="white" />
                        <rect x="186" y="177" width="10" height="134" transform="rotate(-90 186 177)" fill="white" />
                        <rect x="187" y="296" width="10" height="134" transform="rotate(-90 187 296)" fill="white" />
                        <path d="M178.25 285.534C180.388 286.353 143.905 300.7 113.204 288.943C82.5041 277.187 65.7752 242.462 65.7752 242.462C62.0337 241.03 100.798 229.417 131.498 241.173C162.198 252.93 178.25 285.534 178.25 285.534Z" fill="#238636" />
                        <path d="M386.252 151.437C387.403 151.131 376.393 168.294 359.868 172.69C343.344 177.087 325.712 167.544 325.712 167.544C323.698 168.08 336.503 151.374 353.027 146.978C369.552 142.581 386.252 151.437 386.252 151.437Z" fill="#0DB12D" />
                        <path d="M179.141 78.8645C180.244 79.3128 161.12 86.3888 145.278 79.9509C129.437 73.5129 121.104 55.2783 121.104 55.2783C119.173 54.4937 139.454 48.8635 155.296 55.3014C171.137 61.7394 179.141 78.8645 179.141 78.8645Z" fill="#0DB12D" />
                        <path d="M394.811 220.064C396.125 220.887 370.007 225.649 351.146 213.823C332.284 201.996 325.709 176.736 325.709 176.736C323.41 175.294 350.686 172.647 369.548 184.474C388.41 196.3 394.811 220.064 394.811 220.064Z" fill="#238636" />
                        <path d="M179.131 80.1926C179.153 80.2017 179.175 80.2106 179.196 80.2194C179.109 80.6001 178.958 81.1343 178.734 81.7961C178.195 83.3891 177.268 85.6257 175.938 88.0489C173.262 92.9225 169.039 98.3934 163.208 101.033C157.379 103.672 150.568 103.199 145.11 102.003C142.397 101.408 140.056 100.643 138.394 100.027C137.564 99.7191 136.905 99.4491 136.457 99.2571C136.375 99.2221 136.3 99.1896 136.232 99.16C136.313 98.8459 136.452 98.4153 136.66 97.8769C137.245 96.3627 138.297 94.1916 139.777 91.8167C142.753 87.0447 147.359 81.6167 153.217 78.9646C159.061 76.3192 165.663 76.6585 170.89 77.71C173.491 78.2332 175.719 78.9263 177.296 79.4884C178.084 79.7691 178.708 80.0166 179.131 80.1926ZM136.145 99.6187C136.145 99.6202 136.145 99.6209 136.145 99.6209C136.145 99.621 136.145 99.6202 136.145 99.6187Z" fill="#238636" stroke="white" stroke-width="2" />
                        <path d="M445.077 370.406C445.077 370.406 445.076 370.406 445.076 370.406C445.041 370.327 445 370.226 444.954 370.101C444.741 369.52 444.479 368.575 444.213 367.321C443.684 364.818 443.153 361.141 442.976 356.81C442.621 348.138 443.683 336.908 448.939 327.239C454.195 317.571 462.968 310.705 470.461 306.25C474.203 304.024 477.616 302.407 480.092 301.345C481.329 300.815 482.332 300.424 483.025 300.166C483.371 300.037 483.639 299.941 483.82 299.878C483.909 299.847 483.977 299.824 484.022 299.808C484.036 299.839 484.051 299.873 484.066 299.911C484.267 300.409 484.494 301.304 484.704 302.548C485.121 305.022 485.45 308.762 485.409 313.194C485.326 322.064 483.758 333.626 478.496 343.306C473.237 352.98 464.829 359.779 457.709 364.166C454.152 366.358 450.926 367.942 448.589 368.978C447.422 369.495 446.477 369.876 445.825 370.126C445.5 370.252 445.248 370.344 445.077 370.406ZM484.381 299.54C484.381 299.54 484.38 299.542 484.378 299.545C484.38 299.541 484.381 299.54 484.381 299.54Z" fill="#0DB12D" stroke="white" />
                        <path d="M446.773 369.951C446.88 369.692 447.011 369.394 447.166 369.06C447.914 367.457 449.162 365.177 450.891 362.67C454.365 357.634 459.669 351.841 466.585 348.685C473.498 345.53 481.248 345.363 487.365 346.028C490.408 346.359 493.01 346.892 494.849 347.341C495.516 347.504 496.081 347.656 496.529 347.783C496.444 347.962 496.345 348.163 496.231 348.384C495.439 349.913 494.055 352.142 492.155 354.619C488.344 359.59 482.599 365.38 475.651 368.551C468.72 371.714 461.195 371.993 455.33 371.449C452.408 371.178 449.928 370.705 448.183 370.301C447.637 370.175 447.164 370.055 446.773 369.951Z" fill="#238636" stroke="white" stroke-width="3" />
                        <path d="M178.66 295.861C179.78 294.99 175.684 318.928 159.607 331.429C143.53 343.93 119.761 341.66 119.761 341.66C117.802 343.184 124.078 318.914 140.155 306.413C156.232 293.912 178.66 295.861 178.66 295.861Z" fill="#0DB12D" />
                    </svg>
                </div>
                <div className='align_box'>
                    <div className='service_name'>
                        <span className='bamboo_name'>부산소마고 대나무숲</span>
                    </div>
                    <div className='align_boxs'>
                        <div className='image_box'>
                            <img src='/images/location.png' alt='' className='location_box' />
                        </div>
                        <div className='name_box'>
                            <span className='school_names'>Busan, Software Meister School</span>
                        </div>
                    </div>
                </div>
                <div className='follow_btn_box_link'>
                    <a className='a_link_button' href='https://www.instagram.com/bssm.forest/' target={'_blank'} rel={'noreferrer'}>Follow</a>
                </div>
            </div>
        </div >
    );
};

export default Header;