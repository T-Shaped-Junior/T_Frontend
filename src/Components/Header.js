import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import '../Style/Header.scss';

const Header = () => {
    const user = useContext(UserContext)

    function validateURL(url) {
        const parsed = new URL(url)
        return ['https:', 'http:'].includes(parsed.protocol)
    }

    return (
        <div>
            <div className='header_wrap'>
                <div className='github_logo'>
                    <Link to={'/'}>
                        <svg className='desktop' width="35" height="34" viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M25 0.922363C11.1875 0.922363 0 11.7224 0 25.0566C0 35.736 7.15625 44.7562 17.0937 47.954C18.3437 48.1652 18.8125 47.4411 18.8125 46.8076C18.8125 46.2344 18.7812 44.3339 18.7812 42.3126C12.5 43.4288 10.875 40.8344 10.375 39.4768C10.0937 38.783 8.875 36.6411 7.8125 36.0679C6.9375 35.6154 5.6875 34.4991 7.78125 34.469C9.75 34.4388 11.1562 36.2187 11.625 36.9427C13.875 40.593 17.4687 39.5673 18.9062 38.9338C19.125 37.3651 19.7812 36.3092 20.5 35.7059C14.9375 35.1025 9.125 33.0209 9.125 23.7896C9.125 21.165 10.0937 18.9929 11.6875 17.3035C11.4375 16.7001 10.5625 14.2264 11.9375 10.9079C11.9375 10.9079 14.0312 10.2744 18.8125 13.3817C20.8125 12.8387 22.9375 12.5671 25.0625 12.5671C27.1875 12.5671 29.3125 12.8387 31.3125 13.3817C36.0937 10.2442 38.1875 10.9079 38.1875 10.9079C39.5625 14.2264 38.6875 16.7001 38.4375 17.3035C40.0313 18.9929 41 21.1348 41 23.7896C41 33.0511 35.1562 35.1025 29.5937 35.7059C30.5 36.4601 31.2812 37.9081 31.2812 40.1707C31.2812 43.3986 31.25 45.9931 31.25 46.8076C31.25 47.4411 31.7187 48.1953 32.9687 47.954C37.9316 46.3364 42.2441 43.2572 45.2993 39.1497C48.3545 35.0423 49.9985 30.1133 50 25.0566C50 11.7224 38.8125 0.922363 25 0.922363Z" fill="white" />
                        </svg>
                        <svg className='phone' width="38" height="38" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="600" height="600" rx="300" fill="white" />
                            <circle cx="308.5" cy="427.5" r="127.5" fill="#0D9D29" />
                            <rect x="182" y="79" width="134" height="332" fill="#0DB12D" />
                            <rect x="316" y="283" width="8" height="272" fill="white" />
                            <rect x="181" y="422" width="11" height="139" transform="rotate(-90 181 422)" fill="white" />
                            <rect x="181" y="181" width="10" height="134" transform="rotate(-90 181 181)" fill="white" />
                            <rect x="182" y="300" width="10" height="134" transform="rotate(-90 182 300)" fill="white" />
                            <path d="M173.25 289.534C175.388 290.353 138.905 304.7 108.204 292.943C77.5041 281.187 60.7752 246.462 60.7752 246.462C57.0337 245.03 95.7977 233.417 126.498 245.173C157.198 256.93 173.25 289.534 173.25 289.534Z" fill="#238636" />
                            <path d="M381.252 155.437C382.403 155.131 371.393 172.294 354.868 176.69C338.344 181.087 320.712 171.544 320.712 171.544C318.698 172.08 331.503 155.374 348.027 150.978C364.552 146.581 381.252 155.437 381.252 155.437Z" fill="#0DB12D" />
                            <path d="M174.141 82.8645C175.244 83.3128 156.12 90.3888 140.278 83.9509C124.437 77.5129 116.104 59.2783 116.104 59.2783C114.173 58.4937 134.454 52.8635 150.296 59.3014C166.137 65.7394 174.141 82.8645 174.141 82.8645Z" fill="#0DB12D" />
                            <path d="M389.811 224.064C391.125 224.887 365.007 229.649 346.146 217.823C327.284 205.996 320.709 180.736 320.709 180.736C318.41 179.294 345.686 176.647 364.548 188.474C383.41 200.3 389.811 224.064 389.811 224.064Z" fill="#238636" />
                            <path d="M174.131 84.1926C174.153 84.2017 174.175 84.2106 174.196 84.2194C174.109 84.6001 173.958 85.1343 173.734 85.7961C173.195 87.3891 172.268 89.6257 170.938 92.0489C168.262 96.9225 164.039 102.393 158.208 105.033C152.379 107.672 145.568 107.199 140.11 106.003C137.397 105.408 135.056 104.643 133.394 104.027C132.564 103.719 131.905 103.449 131.457 103.257C131.375 103.222 131.3 103.19 131.232 103.16C131.313 102.846 131.452 102.415 131.66 101.877C132.245 100.363 133.297 98.1916 134.777 95.8167C137.753 91.0447 142.359 85.6167 148.217 82.9646C154.061 80.3192 160.663 80.6585 165.89 81.71C168.491 82.2332 170.719 82.9263 172.296 83.4884C173.084 83.7691 173.708 84.0166 174.131 84.1926ZM131.145 103.619C131.145 103.62 131.145 103.621 131.145 103.621C131.145 103.621 131.145 103.62 131.145 103.619Z" fill="#238636" stroke="white" stroke-width="2" />
                            <path d="M440.077 374.406C440.077 374.406 440.076 374.406 440.076 374.406C440.041 374.327 440 374.226 439.954 374.101C439.741 373.52 439.479 372.575 439.213 371.321C438.684 368.818 438.153 365.141 437.976 360.81C437.621 352.138 438.683 340.908 443.939 331.239C449.195 321.571 457.968 314.705 465.461 310.25C469.203 308.024 472.616 306.407 475.092 305.345C476.329 304.815 477.332 304.424 478.025 304.166C478.371 304.037 478.639 303.941 478.82 303.878C478.909 303.847 478.977 303.824 479.022 303.808C479.036 303.839 479.051 303.873 479.066 303.911C479.267 304.409 479.494 305.304 479.704 306.548C480.121 309.022 480.45 312.762 480.409 317.194C480.326 326.064 478.758 337.626 473.496 347.306C468.237 356.98 459.829 363.779 452.709 368.166C449.152 370.358 445.926 371.942 443.589 372.978C442.422 373.495 441.477 373.876 440.825 374.126C440.5 374.252 440.248 374.344 440.077 374.406ZM479.381 303.54C479.381 303.54 479.38 303.542 479.378 303.545C479.38 303.541 479.381 303.54 479.381 303.54Z" fill="#0DB12D" stroke="white" />
                            <path d="M441.773 373.951C441.88 373.692 442.011 373.394 442.166 373.06C442.914 371.457 444.162 369.177 445.891 366.67C449.365 361.634 454.669 355.841 461.585 352.685C468.498 349.53 476.248 349.363 482.365 350.028C485.408 350.359 488.01 350.892 489.849 351.341C490.516 351.504 491.081 351.656 491.529 351.783C491.444 351.962 491.345 352.163 491.231 352.384C490.439 353.913 489.055 356.142 487.155 358.619C483.344 363.59 477.599 369.38 470.651 372.551C463.72 375.714 456.195 375.993 450.33 375.449C447.408 375.178 444.928 374.705 443.183 374.301C442.637 374.175 442.164 374.055 441.773 373.951Z" fill="#238636" stroke="white" stroke-width="3" />
                            <path d="M173.66 299.861C174.78 298.99 170.684 322.928 154.607 335.429C138.53 347.93 114.761 345.66 114.761 345.66C112.802 347.184 119.078 322.914 135.155 310.413C151.232 297.912 173.66 299.861 173.66 299.861Z" fill="#0DB12D" />
                        </svg>
                    </Link>
                </div>
                <div className='team_name'>
                    <Link to={'/'}>
                        <span className='team_name_text' style={{ cursor: 'pointer' }}></span>
                    </Link>
                </div>
                <div className='login_btn'>
                    {user.isLogin ? '' : <><span><a className='login_sub_btn' href={validateURL(process.env.REACT_APP_LOGIN_URL) ? process.env.REACT_APP_LOGIN_URL : ''}>LOGIN</a></span>&nbsp;&nbsp;|&nbsp;&nbsp;</>}
                    <span><Link className='mypage_btn' to={'/mypage'}>MYPAGE</Link></span>
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
                        <path d="M179.131 80.1926C179.153 80.2017 179.175 80.2106 179.196 80.2194C179.109 80.6001 178.958 81.1343 178.734 81.7961C178.195 83.3891 177.268 85.6257 175.938 88.0489C173.262 92.9225 169.039 98.3934 163.208 101.033C157.379 103.672 150.568 103.199 145.11 102.003C142.397 101.408 140.056 100.643 138.394 100.027C137.564 99.7191 136.905 99.4491 136.457 99.2571C136.375 99.2221 136.3 99.1896 136.232 99.16C136.313 98.8459 136.452 98.4153 136.66 97.8769C137.245 96.3627 138.297 94.1916 139.777 91.8167C142.753 87.0447 147.359 81.6167 153.217 78.9646C159.061 76.3192 165.663 76.6585 170.89 77.71C173.491 78.2332 175.719 78.9263 177.296 79.4884C178.084 79.7691 178.708 80.0166 179.131 80.1926ZM136.145 99.6187C136.145 99.6202 136.145 99.6209 136.145 99.6209C136.145 99.621 136.145 99.6202 136.145 99.6187Z" fill="#238636" stroke="white" strokeWidth="2" />
                        <path d="M445.077 370.406C445.077 370.406 445.076 370.406 445.076 370.406C445.041 370.327 445 370.226 444.954 370.101C444.741 369.52 444.479 368.575 444.213 367.321C443.684 364.818 443.153 361.141 442.976 356.81C442.621 348.138 443.683 336.908 448.939 327.239C454.195 317.571 462.968 310.705 470.461 306.25C474.203 304.024 477.616 302.407 480.092 301.345C481.329 300.815 482.332 300.424 483.025 300.166C483.371 300.037 483.639 299.941 483.82 299.878C483.909 299.847 483.977 299.824 484.022 299.808C484.036 299.839 484.051 299.873 484.066 299.911C484.267 300.409 484.494 301.304 484.704 302.548C485.121 305.022 485.45 308.762 485.409 313.194C485.326 322.064 483.758 333.626 478.496 343.306C473.237 352.98 464.829 359.779 457.709 364.166C454.152 366.358 450.926 367.942 448.589 368.978C447.422 369.495 446.477 369.876 445.825 370.126C445.5 370.252 445.248 370.344 445.077 370.406ZM484.381 299.54C484.381 299.54 484.38 299.542 484.378 299.545C484.38 299.541 484.381 299.54 484.381 299.54Z" fill="#0DB12D" stroke="white" />
                        <path d="M446.773 369.951C446.88 369.692 447.011 369.394 447.166 369.06C447.914 367.457 449.162 365.177 450.891 362.67C454.365 357.634 459.669 351.841 466.585 348.685C473.498 345.53 481.248 345.363 487.365 346.028C490.408 346.359 493.01 346.892 494.849 347.341C495.516 347.504 496.081 347.656 496.529 347.783C496.444 347.962 496.345 348.163 496.231 348.384C495.439 349.913 494.055 352.142 492.155 354.619C488.344 359.59 482.599 365.38 475.651 368.551C468.72 371.714 461.195 371.993 455.33 371.449C452.408 371.178 449.928 370.705 448.183 370.301C447.637 370.175 447.164 370.055 446.773 369.951Z" fill="#238636" stroke="white" strokeWidth="3" />
                        <path d="M178.66 295.861C179.78 294.99 175.684 318.928 159.607 331.429C143.53 343.93 119.761 341.66 119.761 341.66C117.802 343.184 124.078 318.914 140.155 306.413C156.232 293.912 178.66 295.861 178.66 295.861Z" fill="#0DB12D" />
                    </svg>
                </div>
                <div className='align_box'>
                    <div className='service_name'>
                        <span className='bamboo_name'>부산소마고 대나무숲</span>
                    </div>
                    <div className='align_boxs'>
                        <div className='image_box'>
                            <svg width="17" height="17" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className='location'>
                                <path d="M12.5 23.4375L5.90938 15.6648C5.81781 15.5481 5.72718 15.4307 5.63751 15.3125C4.51171 13.8295 3.90353 12.0181 3.90626 10.1562C3.90626 7.87705 4.81167 5.69119 6.42331 4.07955C8.03495 2.46791 10.2208 1.5625 12.5 1.5625C14.7792 1.5625 16.9651 2.46791 18.5767 4.07955C20.1884 5.69119 21.0938 7.87705 21.0938 10.1562C21.0965 12.0173 20.4886 13.8278 19.3633 15.3102L19.3625 15.3125C19.3625 15.3125 19.1281 15.6203 19.093 15.6617L12.5 23.4375ZM6.88438 14.3711C6.88595 14.3711 7.0672 14.6117 7.1086 14.6633L12.5 21.0219L17.8984 14.6547C17.9328 14.6117 18.1156 14.3695 18.1164 14.3688C19.0361 13.1571 19.5331 11.6774 19.5313 10.1562C19.5313 8.29145 18.7905 6.50302 17.4719 5.18441C16.1532 3.86579 14.3648 3.125 12.5 3.125C10.6352 3.125 8.84678 3.86579 7.52816 5.18441C6.20955 6.50302 5.46876 8.29145 5.46876 10.1562C5.46712 11.6783 5.96468 13.1589 6.88517 14.3711H6.88438Z" fill="#E5EDF5" />
                                <path d="M12.5 14.0625C11.7274 14.0625 10.9722 13.8334 10.3298 13.4042C9.68743 12.975 9.18675 12.3649 8.8911 11.6511C8.59544 10.9373 8.51809 10.1519 8.66881 9.39418C8.81953 8.63644 9.19157 7.94042 9.73787 7.39412C10.2842 6.84782 10.9802 6.47578 11.7379 6.32506C12.4957 6.17434 13.2811 6.25169 13.9949 6.54735C14.7086 6.843 15.3187 7.34368 15.7479 7.98606C16.1772 8.62844 16.4063 9.38367 16.4063 10.1563C16.405 11.1919 15.9931 12.1847 15.2608 12.917C14.5285 13.6493 13.5356 14.0613 12.5 14.0625ZM12.5 7.8125C12.0365 7.8125 11.5833 7.94996 11.1979 8.2075C10.8125 8.46503 10.5121 8.83107 10.3347 9.25934C10.1573 9.6876 10.1109 10.1589 10.2013 10.6135C10.2917 11.0681 10.5149 11.4858 10.8427 11.8135C11.1705 12.1413 11.5881 12.3645 12.0428 12.455C12.4974 12.5454 12.9687 12.499 13.3969 12.3216C13.8252 12.1442 14.1912 11.8438 14.4488 11.4584C14.7063 11.0729 14.8438 10.6198 14.8438 10.1563C14.8431 9.53484 14.596 8.93906 14.1566 8.49966C13.7172 8.06025 13.1214 7.81312 12.5 7.8125Z" fill="#E5EDF5" />
                                <circle cx="12.5" cy="10.1562" r="3.125" fill="#E5EDF5" />
                            </svg>
                        </div>
                        <div className='name_box'>
                            <span className='school_names'>Busan, Software Meister High School</span>
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