// import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    logo: 'src/assets/images/medical_logo_2x_light',
    
    navUl:[
        {
            name: 'home',
            url: '#',
            index: 0,
            isActive: true
        },
        {
            name: 'abaut',
            url: '#',
            index: 1,
            isActive: false
        },
        {
            name: 'departments',
            url: '#',
            index: 2,
            isActive: false
        },
        {
            name: 'article',
            url: '#',
            index: 3,
            isActive: false
        },
    ],
    btn:[
        'make appointment',
        'learn more',
        'view our departments',
        'i accept'
    ],
    social:[
        {
            social:'fa-facebook-f',
            link:'#',
            class:'facebook'
        },
        {
            social:'fa-twitter',
            link:'#',
            class:'twitter'
        },
        {
            social:'fa-instagram',
            link:'#',
            class:'instagram'
        },
        {
            social:'fa-youtube',
            link:'#',
            class:'instagram'
        }
    ],
    section:[
        // prima section
        {
            img: 'none',
            title: 'welcom to avada hearth',
            paragraph: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos modi non quo? Architecto, iste? Consequuntur cupiditate minima mollitia suscipit deleniti?',
            // br: 'src/assets/images/image',
            br: 'none',
            cards:[
                {
                    img:'src/assets/images/icon-1',
                    title:'same day appointments',
                    paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, porro in?'
                },
                {
                    img:'src/assets/images/icon-2',
                    title:'word class facilities',
                    paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, porro in?'
                },
                {
                    img:'src/assets/images/icon-3',
                    title:'expert doctors',
                    paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, porro in?'
                },
                {
                    img:'src/assets/images/icon-4',
                    title:'complementary therapies',
                    paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, porro in?'
                }
            ]
        },
        // seconda section
        {
            img: 'src/assets/images/icon-5',
            title: 'meet our doctors',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis temporibus id omnis, modi nesciunt praesentium nisi iste rem saepe dignissimos, consequatur quos ex suscipit voluptatum distinctio placeat laudantium? Debitis, animi.',
            br: 'src/assets/images/image',
            // br: 'none',
            cards:[
                {
                    img:'src/assets/images/doctor-1',
                    name:'jon snow',
                    profession:'anesthesiologist',
                    paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima deleniti officia explicabo dolorum!',
                    social:[
                        {
                            social:'fa-facebook-f',
                            link:'#',
                            class:'facebook'
                        },
                        {
                            social:'fa-twitter',
                            link:'#',
                            class:'twitter'
                        },
                        {
                            social:'fa-instagram',
                            link:'#',
                            class:'instagram'
                        }
                    ]
                },
                {
                    img:'src/assets/images/doctor-2',
                    name:'tony stark',
                    profession:'cardiologist',
                    paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima deleniti officia explicabo dolorum!',
                    social:[
                        {
                            social:'fa-facebook-f',
                            link:'#',
                            class:'facebook'
                        },
                        {
                            social:'fa-twitter',
                            link:'#',
                            class:'twitter'
                        },
                        {
                            social:'fa-instagram',
                            link:'#',
                            class:'instagram'
                        }
                    ]
                },
                {
                    img:'src/assets/images/doctor-3',
                    name:'anna smith',
                    profession:'nurse practitioner',
                    paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima deleniti officia explicabo dolorum!',
                    social:[
                        {
                            social:'fa-facebook-f',
                            link:'#',
                            class:'facebook'
                        },
                        {
                            social:'fa-twitter',
                            link:'#',
                            class:'twitter'
                        },
                        {
                            social:'fa-instagram',
                            link:'#',
                            class:'instagram'
                        }
                    ]
                }
            ]
            
        },
        // terza section
        {
            img: 'src/assets/images/icon-6',
            title: 'our health service',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis temporibus id omnis, modi nesciunt praesentium nisi iste rem saepe dignissimos, consequatur quos ex suscipit voluptatum distinctio placeat laudantium? Debitis, animi.',
            br: 'src/assets/images/image',
            // br: 'none',
            cards:[
                {
                    img:'src/assets/images/icon-14',
                    title:'reabilitation station',
                    paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, at tempore vel saepe ducimus eligendi! Ex voluptates omnis'
                },
                {
                    img:'src/assets/images/icon-15',
                    title:'dental implants',
                    paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, at tempore vel saepe ducimus eligendi! Ex voluptates omnis'
                },
                {
                    img:'src/assets/images/icon-16',
                    title:'medicina reserch',
                    paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, at tempore vel saepe ducimus eligendi! Ex voluptates omnis'
                },
                {
                    img:'src/assets/images/icon-11',
                    title:'blood bank',
                    paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, at tempore vel saepe ducimus eligendi! Ex voluptates omnis'
                },
                {
                    img:'src/assets/images/icon-12',
                    title:'pharmaceutical adivice',
                    paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, at tempore vel saepe ducimus eligendi! Ex voluptates omnis'
                },
                {
                    img:'src/assets/images/icon-13',
                    title:'medical counseling',
                    paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, at tempore vel saepe ducimus eligendi! Ex voluptates omnis'
                },
            ]
        },
        // quarta section
        {
            img: 'src/assets/images/icon-7',
            title: 'tour our facilities',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis temporibus id omnis, modi nesciunt praesentium nisi iste rem saepe dignissimos, consequatur quos ex suscipit voluptatum distinctio placeat laudantium? Debitis, animi.',
            br: 'src/assets/images/image',
            imgPlay: 'src/assets/images/play-icon',
            // br: 'none',
            
        },
        // quinta section
        {
            cards:[
                {
                    title: 'emergenscy care',
                    img:'src/assets/images/wave-divider',
                    paragraph:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi eligendi nesciunt minima quibusdam at corrupti.',
                    class: 'primo'
                },
                {
                    title: 'expert diagnostics',
                    img:'src/assets/images/wave-divider',
                    paragraph:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi eligendi nesciunt minima quibusdam at corrupti.',
                    class: 'secondo'
                },
                {
                    title: 'superb rehabilitation',
                    img:'src/assets/images/wave-divider',
                    paragraph:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi eligendi nesciunt minima quibusdam at corrupti.',
                    class: 'terzo'
                }
            ]
        },
        // sesta section
        {
            title:'make an appointment',
            br: 'src/assets/images/image',
            paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit. Doloribus possimus vitae soluta quam cumque! Veniam, iure saepe. Obcaecati, consequatur aperiam?'
        },
        // settima section
        {
            img:[
                'src/assets/images/client-logos-1',
                'src/assets/images/client-logos-2',
                'src/assets/images/client-logos-3',
                'src/assets/images/client-logos-4',

            ]
        }
    ],
    footer:[
        {
            img: 'src/assets/images/medical_logo_2x_dark',
            paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolemue launti totam aperiam, eaque ipsa quae abillo. Invente veriatis et quasi architecto beatae luptatem accusantium, remaperiamsiat. Voluptatem accusest etsium doloremque laudaien. Lorem ipsum sits dolores ets unser.',
            social: 'learn more about us'
        },
        {
            title: 'contact information',
            img: 'src/assets/images/image',
            number:'1.800.458.556',
            position:'121 king street, london united kingdom',
            privacy:'For privacy reasons Google Maps needs your permission to be loaded.'
        },
        {
            title:'medical departments',
            options:[
                'cardiology',
                'pediatrics',
                'diabetes care',
                'pre-natal care',
                'ultrasound echocardiogram'
            ]
        },
        {
            copy:'© Copyright 2012 - 2022 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress'
        }
    ]
})
